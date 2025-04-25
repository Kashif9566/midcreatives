/*
  # Add onboarding data storage

  1. New Tables
    - `onboarding_responses` table to store user onboarding data
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `business_type` (text)
      - `marketing_goal` (text)
      - `marketing_services` (text[])
      - `involvement` (text)
      - `budget` (text)
      - `tools` (text[])
      - `expert_consultation` (text)
      - `ai_insights` (text)
      - `completed_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on onboarding_responses table
    - Add policies for user access
*/

-- Create onboarding_responses table
CREATE TABLE IF NOT EXISTS onboarding_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  business_type text NOT NULL,
  marketing_goal text NOT NULL,
  marketing_services text[] NOT NULL,
  involvement text NOT NULL,
  budget text NOT NULL,
  tools text[] NOT NULL DEFAULT '{}',
  expert_consultation text NOT NULL,
  ai_insights text NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE onboarding_responses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own onboarding responses"
  ON onboarding_responses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own onboarding responses"
  ON onboarding_responses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own onboarding responses"
  ON onboarding_responses
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE TRIGGER update_onboarding_responses_updated_at
  BEFORE UPDATE ON onboarding_responses
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

-- Add onboarding_completed column to profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'onboarding_completed'
  ) THEN
    ALTER TABLE profiles ADD COLUMN onboarding_completed boolean DEFAULT false;
  END IF;
END $$;

-- Create function to update profile onboarding status
CREATE OR REPLACE FUNCTION update_profile_onboarding_status()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles
  SET onboarding_completed = true
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update profile when onboarding is completed
CREATE TRIGGER update_profile_onboarding_status_trigger
  AFTER INSERT ON onboarding_responses
  FOR EACH ROW
  EXECUTE FUNCTION update_profile_onboarding_status();