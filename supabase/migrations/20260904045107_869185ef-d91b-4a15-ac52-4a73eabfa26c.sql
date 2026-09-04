CREATE TABLE public.contact_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  city text,
  reform_type text NOT NULL,
  message text,
  extra jsonb NOT NULL DEFAULT '{}'::jsonb,
  photo_urls text[] NOT NULL DEFAULT '{}',
  locale text NOT NULL DEFAULT 'es',
  source_page text,
  status text NOT NULL DEFAULT 'new',
  email_sent boolean NOT NULL DEFAULT false
);

GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "submissions not readable publicly" ON public.contact_submissions FOR SELECT TO authenticated USING (false);

CREATE POLICY "anyone can upload project photos" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'project-photos');