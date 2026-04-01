
-- Make user_id nullable in comments and likes
ALTER TABLE public.comments ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.likes ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing INSERT policies
DROP POLICY IF EXISTS "Authenticated users can insert comments" ON public.comments;
DROP POLICY IF EXISTS "Authenticated users can insert likes" ON public.likes;
DROP POLICY IF EXISTS "Users can delete own likes" ON public.likes;
DROP POLICY IF EXISTS "Users can delete own comments" ON public.comments;

-- Allow anyone to insert comments
CREATE POLICY "Anyone can insert comments"
ON public.comments FOR INSERT
TO public
WITH CHECK (true);

-- Allow anyone to insert likes
CREATE POLICY "Anyone can insert likes"
ON public.likes FOR INSERT
TO public
WITH CHECK (true);

-- Allow anyone to delete own comments (or admin)
CREATE POLICY "Users can delete own comments"
ON public.comments FOR DELETE
TO public
USING ((auth.uid() = user_id) OR has_role(auth.uid(), 'admin'::app_role));

-- Allow anyone to delete own likes
CREATE POLICY "Users can delete own likes"
ON public.likes FOR DELETE
TO public
USING ((auth.uid() = user_id) OR (user_id IS NULL));
