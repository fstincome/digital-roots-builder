CREATE TABLE public.menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  label_key text NOT NULL,
  path text NOT NULL,
  position integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.menu_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.menu_items TO authenticated;
GRANT ALL ON public.menu_items TO service_role;

ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "menu_items public read" ON public.menu_items FOR SELECT USING (true);
CREATE POLICY "menu_items admin insert" ON public.menu_items FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "menu_items admin update" ON public.menu_items FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "menu_items admin delete" ON public.menu_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON public.menu_items
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.menu_items (key, label_key, path, position, is_active) VALUES
  ('home', 'nav.home', '/', 1, true),
  ('services', 'nav.services', '/services', 2, true),
  ('hosting', 'nav.hosting', '/hebergement', 3, true),
  ('academy', 'nav.academy', '/academie', 4, true),
  ('portfolio', 'nav.portfolio', '/portfolio', 5, true),
  ('bitcoin', 'nav.bitcoin', '/bitcoin', 6, true),
  ('blog', 'nav.blog', '/blog', 7, true),
  ('about', 'nav.about', '/a-propos', 8, true),
  ('contact', 'nav.contact', '/contact', 9, true);