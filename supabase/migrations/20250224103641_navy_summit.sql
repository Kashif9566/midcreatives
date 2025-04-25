/*
  # Initial schema setup for MaaS platform

  1. Tables
    - profiles
      - id (uuid, references auth.users)
      - company_name (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - marketing_requests
      - id (uuid)
      - user_id (uuid, references profiles)
      - service_type (text)
      - description (text)
      - deadline (timestamp)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

    - chat_messages
      - id (uuid)
      - request_id (uuid, references marketing_requests)
      - user_id (uuid, references profiles)
      - content (text)
      - created_at (timestamp)

    - campaign_metrics
      - id (uuid)
      - request_id (uuid, references marketing_requests)
      - ctr (float)
      - conversion_rate (float)
      - roi (float)
      - impressions (integer)
      - spend (float)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  company_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create marketing_requests table
CREATE TABLE marketing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  service_type text NOT NULL,
  description text NOT NULL,
  deadline timestamptz,
  status text DEFAULT 'submitted' CHECK (status IN ('submitted', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES marketing_requests ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create campaign_metrics table
CREATE TABLE campaign_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES marketing_requests ON DELETE CASCADE NOT NULL,
  ctr float,
  conversion_rate float,
  roi float,
  impressions integer,
  spend float,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_metrics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can view own marketing requests"
  ON marketing_requests FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create marketing requests"
  ON marketing_requests FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view own chat messages"
  ON chat_messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM marketing_requests
      WHERE marketing_requests.id = chat_messages.request_id
      AND marketing_requests.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create chat messages"
  ON chat_messages FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM marketing_requests
      WHERE marketing_requests.id = chat_messages.request_id
      AND marketing_requests.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view own campaign metrics"
  ON campaign_metrics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM marketing_requests
      WHERE marketing_requests.id = campaign_metrics.request_id
      AND marketing_requests.user_id = auth.uid()
    )
  );

-- Create functions
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER update_marketing_requests_updated_at
  BEFORE UPDATE ON marketing_requests
  FOR EACH ROW
  EXECUTE PROCEDURE handle_updated_at();