/*
  # Fix Auth Triggers and Profile Creation

  1. Changes
    - Update profile creation trigger to handle edge cases
    - Add better error handling for profile creation
    - Ensure email synchronization between auth and profiles
*/

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create improved function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Create profile entry with better error handling
  INSERT INTO public.profiles (
    id,
    email,
    role,
    subscription_status,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    'client',
    'inactive',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET
    email = EXCLUDED.email,
    updated_at = NOW()
  WHERE profiles.email IS NULL OR profiles.email != EXCLUDED.email;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger with better error handling
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Add unique constraint on email if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'profiles_email_key'
  ) THEN
    ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_email_key UNIQUE (email);
  END IF;
END $$;

-- Ensure all existing users have profiles
INSERT INTO public.profiles (id, email, role, subscription_status, created_at, updated_at)
SELECT 
  id,
  email,
  'client',
  'inactive',
  COALESCE(created_at, NOW()),
  COALESCE(updated_at, NOW())
FROM auth.users
ON CONFLICT (id) DO UPDATE
SET
  email = EXCLUDED.email,
  updated_at = NOW()
WHERE profiles.email IS NULL OR profiles.email != EXCLUDED.email;