CREATE TABLE public.tech_news (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guid text NOT NULL UNIQUE,
  source text NOT NULL DEFAULT 'Developpez.com',
  source_url text,
  link text NOT NULL,
  title text NOT NULL,
  summary text,
  image text,
  published_at timestamptz,
  translations jsonb NOT NULL DEFAULT '{}'::jsonb,
  translated_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.tech_news TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tech_news TO authenticated;
GRANT ALL ON public.tech_news TO service_role;

ALTER TABLE public.tech_news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tech news are publicly readable"
  ON public.tech_news FOR SELECT
  USING (true);

CREATE POLICY "Admins and editors can manage tech news"
  ON public.tech_news FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'))
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE INDEX idx_tech_news_published_at ON public.tech_news (published_at DESC);

CREATE TABLE public.tech_news_jobs (
  name text NOT NULL PRIMARY KEY,
  status text NOT NULL DEFAULT 'idle',
  message text,
  lease_until timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.tech_news_jobs TO service_role;

ALTER TABLE public.tech_news_jobs ENABLE ROW LEVEL SECURITY;

INSERT INTO public.tech_news_jobs (name, status) VALUES ('fetch-tech-news', 'idle');