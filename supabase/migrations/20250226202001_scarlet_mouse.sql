/*
  # Fix user registration and profile creation

  1. Changes
    - Add trigger to automatically create profile when user is created
    - Ensure proper handling of user registration
    - Add proper indexes and constraints

  2. Security
    - Maintain existing RLS policies
    - Ensure proper user isolation
*/

-- Create a function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, created_at, updated_at)
  VALUES (NEW.id, NEW.email, NOW(), NOW())
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create trigger to create profile on user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Ensure proper indexes exist
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

-- Add any missing profiles for existing users
INSERT INTO public.profiles (id, email, created_at, updated_at)
SELECT 
  id,
  email,
  COALESCE(created_at, NOW()),
  COALESCE(updated_at, NOW())
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- Ensure proper constraints
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_id_fkey,
  ADD CONSTRAINT profiles_id_fkey 
    FOREIGN KEY (id) 
    REFERENCES auth.users(id) 
    ON DELETE CASCADE;

-- Update RLS policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);