-- 1. Lock down internal SECURITY DEFINER trigger functions from API roles
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO anon, authenticated, service_role;

-- 2. Column-level protection: hide user_id from anonymous visitors on comments
REVOKE SELECT ON public.comments FROM anon;
GRANT SELECT (id, content, author_name, article_id, program_id, parent_id, created_at) ON public.comments TO anon;

-- 3. Same for likes
REVOKE SELECT ON public.likes FROM anon;
GRANT SELECT (id, article_id, program_id, created_at) ON public.likes TO anon;

-- 4. Profiles: anonymous visitors only see public display fields
REVOKE SELECT ON public.profiles FROM anon;
GRANT SELECT (id, user_id, full_name, avatar_url, bio, job_title) ON public.profiles TO anon;

-- 5. Storage: allow owners to delete their own files
CREATE POLICY "Users can delete own uploads"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'uploads' AND auth.uid()::text = (storage.foldername(name))[1]);