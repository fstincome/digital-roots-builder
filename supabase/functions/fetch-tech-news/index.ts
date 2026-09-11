import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const FEEDS = [
  { source: 'Developpez.com', url: 'https://www.developpez.com/index/rss' },
  { source: 'Next', url: 'https://next.ink/feed/' },
];

const JOB = 'fetch-tech-news';
const MAX_NEW_ITEMS = 6;
const MAX_TRANSLATIONS = 4;
const LANGS = ['en', 'es', 'de', 'it', 'ja', 'sw'];

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

const strip = (html: string) =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

const tag = (block: string, name: string): string | null => {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  if (!m) return null;
  const raw = m[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return (cdata ? cdata[1] : raw).trim();
};

const parseFeed = (xml: string) => {
  const items: any[] = [];
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
  for (const b of blocks) {
    const title = tag(b, 'title');
    const link = tag(b, 'link');
    if (!title || !link) continue;
    const desc = tag(b, 'description') || '';
    const img = b.match(/<enclosure[^>]*url="([^"]+)"/i)?.[1]
      || b.match(/<media:(?:content|thumbnail)[^>]*url="([^"]+)"/i)?.[1]
      || desc.match(/<img[^>]*src="([^"]+)"/i)?.[1]
      || b.match(/<img[^>]*src="([^"]+)"/i)?.[1]
      || null;
    const date = tag(b, 'pubDate');
    items.push({
      guid: tag(b, 'guid') || link,
      link,
      title: strip(title),
      summary: strip(desc).slice(0, 600) || null,
      image: img,
      published_at: date ? new Date(date).toISOString() : new Date().toISOString(),
    });
  }
  return items;
};

async function translate(title: string, summary: string | null) {
  const key = Deno.env.get('LOVABLE_API_KEY');
  if (!key) return { error: 'missing_key', status: 401 };

  const res = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'google/gemini-3.1-flash-lite',
      messages: [
        {
          role: 'system',
          content:
            'You translate technology news metadata. Reply with JSON only, no markdown fences. ' +
            `Shape: {"en":{"title":"","summary":""},"es":{...},"de":{...},"it":{...},"ja":{...},"sw":{...}} for languages ${LANGS.join(', ')} (sw = Swahili). Keep titles concise, keep proper nouns.`,
        },
        {
          role: 'user',
          content: JSON.stringify({ title, summary: summary || '' }),
        },
      ],
      response_format: { type: 'json_object' },
    }),
  });

  if (!res.ok) return { error: await res.text(), status: res.status };
  const data = await res.json();
  try {
    const parsed = JSON.parse(data.choices?.[0]?.message?.content ?? '{}');
    return { translations: parsed };
  } catch {
    return { error: 'unparsable', status: 500 };
  }
}

async function pause(status: string, message: string) {
  await supabase.from('tech_news_jobs')
    .update({ status, message, lease_until: null, updated_at: new Date().toISOString() })
    .eq('name', JOB);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { data: job } = await supabase
      .from('tech_news_jobs').select('*').eq('name', JOB).maybeSingle();

    const paused = job?.status === 'paused';
    const now = new Date();

    // single-flight lock
    if (job?.lease_until && new Date(job.lease_until) > now) {
      return json({ skipped: 'locked' });
    }
    await supabase.from('tech_news_jobs').update({
      status: paused ? 'paused' : 'running',
      lease_until: new Date(now.getTime() + 5 * 60_000).toISOString(),
      updated_at: now.toISOString(),
    }).eq('name', JOB);

    let inserted = 0;
    for (const feed of FEEDS) {
      const r = await fetch(feed.url);
      if (!r.ok) continue;
      const items = parseFeed(await r.text()).slice(0, MAX_NEW_ITEMS);
      for (const item of items) {
        const { error } = await supabase.from('tech_news').insert({
          ...item, source: feed.source, source_url: feed.url,
        });
        if (!error) inserted++;
      }
    }

    // translate a bounded batch of untranslated rows (one probe item while paused)
    const limit = paused ? 1 : MAX_TRANSLATIONS;
    const { data: pending } = await supabase
      .from('tech_news').select('id, title, summary')
      .is('translated_at', null)
      .order('published_at', { ascending: false })
      .limit(limit);

    let translated = 0;
    for (const row of pending || []) {
      const out = await translate(row.title, row.summary);
      if (out.error) {
        if (out.status === 402 || out.status === 403) {
          await pause('paused', `AI indisponible (${out.status}): ${String(out.error).slice(0, 300)}`);
          return json({ inserted, translated, paused: true }, 200);
        }
        if (out.status === 429) {
          await pause('idle', 'Limite de requêtes atteinte, reprise à la prochaine exécution.');
          return json({ inserted, translated, rateLimited: true }, 200);
        }
        continue;
      }
      await supabase.from('tech_news').update({
        translations: out.translations,
        translated_at: new Date().toISOString(),
      }).eq('id', row.id);
      translated++;
    }

    await supabase.from('tech_news_jobs').update({
      status: 'idle',
      message: null,
      lease_until: null,
      updated_at: new Date().toISOString(),
    }).eq('name', JOB);

    return json({ inserted, translated });
  } catch (e) {
    await pause('error', String(e).slice(0, 300));
    return json({ error: String(e) }, 500);
  }
});
