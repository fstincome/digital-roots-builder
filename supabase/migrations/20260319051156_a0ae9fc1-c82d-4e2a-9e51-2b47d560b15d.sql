
-- Portfolio table
CREATE TABLE public.portfolios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  link TEXT,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolios viewable by everyone" ON public.portfolios FOR SELECT USING (true);
CREATE POLICY "Admins/editors can insert portfolios" ON public.portfolios FOR INSERT WITH CHECK (
  auth.uid() = created_by AND (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'))
);
CREATE POLICY "Admins/editors can update portfolios" ON public.portfolios FOR UPDATE USING (
  auth.uid() = created_by OR has_role(auth.uid(), 'admin')
);
CREATE POLICY "Admins can delete portfolios" ON public.portfolios FOR DELETE USING (
  has_role(auth.uid(), 'admin')
);

CREATE TRIGGER update_portfolios_updated_at BEFORE UPDATE ON public.portfolios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Comments table (polymorphic: article or program)
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  user_id UUID NOT NULL,
  article_id UUID REFERENCES public.articles(id) ON DELETE CASCADE,
  program_id UUID REFERENCES public.programs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT comment_target CHECK (
    (article_id IS NOT NULL AND program_id IS NULL) OR
    (article_id IS NULL AND program_id IS NOT NULL)
  )
);

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Comments viewable by everyone" ON public.comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert comments" ON public.comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON public.comments FOR DELETE TO authenticated USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'));

-- Likes table (polymorphic)
CREATE TABLE public.likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  article_id UUID REFERENCES public.articles(id) ON DELETE CASCADE,
  program_id UUID REFERENCES public.programs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT like_target CHECK (
    (article_id IS NOT NULL AND program_id IS NULL) OR
    (article_id IS NULL AND program_id IS NOT NULL)
  ),
  CONSTRAINT unique_article_like UNIQUE (user_id, article_id),
  CONSTRAINT unique_program_like UNIQUE (user_id, program_id)
);

ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Likes viewable by everyone" ON public.likes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert likes" ON public.likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own likes" ON public.likes FOR DELETE TO authenticated USING (auth.uid() = user_id);
