
ALTER TABLE public.comments ADD COLUMN author_name text DEFAULT 'Anonyme';
ALTER TABLE public.comments ADD COLUMN parent_id uuid REFERENCES public.comments(id) ON DELETE CASCADE DEFAULT NULL;
