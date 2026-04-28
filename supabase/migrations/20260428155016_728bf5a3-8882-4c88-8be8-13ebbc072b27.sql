
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins/editors can view messages"
  ON public.contact_messages FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins/editors can update messages"
  ON public.contact_messages FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins can delete messages"
  ON public.contact_messages FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  language text DEFAULT 'fr',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins/editors can view subscribers"
  ON public.newsletter_subscribers FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'editor'::app_role));

CREATE POLICY "Admins can delete subscribers"
  ON public.newsletter_subscribers FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_unread ON public.contact_messages(is_read) WHERE is_read = false;
CREATE INDEX idx_newsletter_active ON public.newsletter_subscribers(is_active) WHERE is_active = true;
