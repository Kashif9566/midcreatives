-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create a more robust function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  profile_exists boolean;
BEGIN
  -- Add delay to ensure auth.users transaction is committed
  PERFORM pg_sleep(0.1);
  
  -- Check if profile already exists
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = NEW.id
  ) INTO profile_exists;

  -- Only create profile if it doesn't exist
  IF NOT profile_exists THEN
    BEGIN
      INSERT INTO public.profiles (
        id,
        email,
        role,
        subscription_status,
        onboarding_completed,
        created_at,
        updated_at
      )
      VALUES (
        NEW.id,
        NEW.email,
        'client',
        'inactive',
        false,
        NOW(),
        NOW()
      );
    EXCEPTION 
      WHEN unique_violation THEN
        -- Profile already exists, ignore
        RETURN NEW;
      WHEN foreign_key_violation THEN
        -- Retry once after a short delay
        PERFORM pg_sleep(0.2);
        INSERT INTO public.profiles (
          id,
          email,
          role,
          subscription_status,
          onboarding_completed,
          created_at,
          updated_at
        )
        VALUES (
          NEW.id,
          NEW.email,
          'client',
          'inactive',
          false,
          NOW(),
          NOW()
        );
    END;
  END IF;

  RETURN NEW;
EXCEPTION
  WHEN others THEN
    -- Log error details but don't fail
    RAISE WARNING 'Error in handle_new_user: % %', SQLERRM, SQLSTATE;
    RETURN NEW;
END;
$$;

-- Recreate trigger with better error handling
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Ensure profiles table has correct constraints
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_id_fkey,
  ADD CONSTRAINT profiles_id_fkey 
    FOREIGN KEY (id) 
    REFERENCES auth.users(id) 
    ON DELETE CASCADE
    DEFERRABLE INITIALLY DEFERRED;

-- Add missing profiles for any existing users
INSERT INTO public.profiles (
  id,
  email,
  role,
  subscription_status,
  onboarding_completed,
  created_at,
  updated_at
)
SELECT 
  id,
  email,
  'client',
  'inactive',
  false,
  COALESCE(created_at, NOW()),
  COALESCE(updated_at, NOW())
FROM auth.users
WHERE NOT EXISTS (
  SELECT 1 FROM public.profiles WHERE profiles.id = auth.users.id
)
ON CONFLICT (id) DO NOTHING;