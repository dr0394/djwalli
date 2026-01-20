/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Full name of the person
      - `email` (text, required) - Email address
      - `phone` (text, optional) - Phone number
      - `event_type` (text, optional) - Type of event (Hochzeit, Geburtstag, Firmenevent, etc.)
      - `event_date` (date, optional) - Planned event date
      - `guest_count` (integer, optional) - Expected number of guests
      - `location` (text, optional) - Event location
      - `services` (jsonb, optional) - Selected services array
      - `message` (text, optional) - Additional message
      - `budget` (text, optional) - Budget range
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Submission status (new, contacted, completed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Only authenticated admins can view submissions
    - Public can insert submissions (for the contact form)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text,
  event_date date,
  guest_count integer,
  location text,
  services jsonb DEFAULT '[]'::jsonb,
  message text,
  budget text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);