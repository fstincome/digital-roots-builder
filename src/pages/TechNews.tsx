import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Newspaper } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";

interface NewsItem {
  id: string;
  source: string;
  link: string;
  title: string;
  summary: string | null;
  image: string | null;
  published_at: string | null;
  translations: Record<string, { title?: string; summary?: string }> | null;
}

const TechNews = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  const sources = [...new Set(items.map((i) => i.source))];
  const filtered = sourceFilter ? items.filter((i) => i.source === sourceFilter) : items;

  useEffect(() => {
    supabase
      .from("tech_news")
      .select("id, source, link, title, summary, image, published_at, translations")
      .order("published_at", { ascending: false })
      .limit(30)
      .then(({ data }) => {
        setItems((data as NewsItem[]) || []);
        setLoading(false);
      });
  }, []);

  const localized = (item: NewsItem) => {
    const tr = item.translations?.[i18n.language];
    return {
      title: tr?.title || item.title,
      summary: tr?.summary || item.summary,
    };
  };

  const locale =
    i18n.language === "de" ? "de-DE"
      : i18n.language === "sw" ? "sw-KE"
      : i18n.language === "en" ? "en-US"
      : i18n.language === "es" ? "es-ES"
      : i18n.language === "it" ? "it-IT"
      : i18n.language === "ja" ? "ja-JP"
      : "fr-FR";

  return (
    <>
      <SEO
        title={`${t("techNews.title")} | SIGHT Africa`}
        description={t("techNews.desc")}
      />
      <PageBreadcrumb
        title={t("techNews.title")}
        subtitle={t("techNews.desc")}
        items={[{ label: t("nav.techNews") }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-primary">
            <Newspaper size={14} />
            <span>{t("techNews.tag")}</span>
            <span className="text-muted-foreground normal-case tracking-normal">
              · {t("techNews.updated")}
            </span>
          </div>

          {!loading && sources.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSourceFilter(null)}
                className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
                  sourceFilter === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {t("techNews.all")}
              </button>
              {sources.map((s) => (
                <button
                  key={s}
                  onClick={() => setSourceFilter(s === sourceFilter ? null : s)}
                  className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
                    sourceFilter === s
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl border border-border bg-card animate-pulse">
                  <div className="h-44 bg-muted rounded-t-xl" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">{t("techNews.empty")}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => {
                const { title, summary } = localized(item);
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.08 }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={title}
                          loading="lazy"
                          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <Newspaper className="text-primary/30" size={36} />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                            {item.source}
                          </span>
                          {item.published_at && (
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(item.published_at).toLocaleDateString(locale)}
                            </span>
                          )}
                        </div>
                        <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                          {title}
                        </h2>
                        {summary && (
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-4">{summary}</p>
                        )}
                        <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                          {t("techNews.read")} <ExternalLink size={14} />
                        </span>
                      </div>
                    </a>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TechNews;
