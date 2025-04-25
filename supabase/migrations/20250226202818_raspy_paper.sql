/*
  # Add Marketing Request Features

  1. New Tables
    - marketing_requests: Track marketing requests
    - request_updates: Track request status changes
    - notifications: User notifications

  2. Security
    - Enable RLS on all tables
    - Add policies for user access control
    - Add triggers for notifications and updates
*/

-- Create marketing_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS marketing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  status text NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed', 'rejected')),
  priority text NOT NULL CHECK (priority IN ('low', 'medium', 'high')),
  type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create request_updates table if it doesn't exist
CREATE TABLE IF NOT EXISTS request_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES marketing_requests ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  update_type text NOT NULL CHECK (update_type IN ('status_change', 'comment')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create notifications table if it doesn't exist
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  type text NOT NULL CHECK (type IN ('request_update', 'message', 'system')),
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE marketing_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for marketing_requests if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'marketing_requests' AND policyname = 'Users can view own marketing requests'
  ) THEN
    CREATE POLICY "Users can view own marketing requests"
      ON marketing_requests
      FOR SELECT
      TO authenticated
      USING (user_id = auth.uid());
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'marketing_requests' AND policyname = 'Users can create marketing requests'
  ) THEN
    CREATE POLICY "Users can create marketing requests"
      ON marketing_requests
      FOR INSERT
      TO authenticated
      WITH CHECK (user_id = auth.uid());
  END IF;
END $$;

-- Create policies for request_updates if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'request_updates' AND policyname = 'Users can view updates for their requests'
  ) THEN
    CREATE POLICY "Users can view updates for their requests"
      ON request_updates
      FOR SELECT
      TO authenticated
      USING (
        EXISTS (
          SELECT 1 FROM marketing_requests
          WHERE marketing_requests.id = request_id
          AND marketing_requests.user_id = auth.uid()
        )
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'request_updates' AND policyname = 'Users can create updates for their requests'
  ) THEN
    CREATE POLICY "Users can create updates for their requests"
      ON request_updates
      FOR INSERT
      TO authenticated
      WITH CHECK (
        EXISTS (
          SELECT 1 FROM marketing_requests
          WHERE marketing_requests.id = request_id
          AND marketing_requests.user_id = auth.uid()
        )
      );
  END IF;
END $$;

-- Create policies for notifications if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'notifications' AND policyname = 'Users can view own notifications'
  ) THEN
    CREATE POLICY "Users can view own notifications"
      ON notifications
      FOR SELECT
      TO authenticated
      USING (user_id = auth.uid());
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'notifications' AND policyname = 'Users can update own notifications'
  ) THEN
    CREATE POLICY "Users can update own notifications"
      ON notifications
      FOR UPDATE
      TO authenticated
      USING (user_id = auth.uid());
  END IF;
END $$;

-- Create function to create notification on request update if it doesn't exist
CREATE OR REPLACE FUNCTION create_request_notification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO notifications (user_id, title, message, type)
  SELECT 
    marketing_requests.user_id,
    CASE
      WHEN NEW.update_type = 'status_change' THEN 'Request Status Updated'
      ELSE 'New Comment on Request'
    END,
    CASE
      WHEN NEW.update_type = 'status_change' 
      THEN 'Your marketing request status has been updated to: ' || NEW.content
      ELSE 'New comment on your marketing request: ' || NEW.content
    END,
    'request_update'
  FROM marketing_requests
  WHERE marketing_requests.id = NEW.request_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create function to update request updated_at timestamp if it doesn't exist
CREATE OR REPLACE FUNCTION update_request_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE marketing_requests
  SET updated_at = now()
  WHERE id = NEW.request_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist and create new ones
DROP TRIGGER IF EXISTS create_request_notification_trigger ON request_updates;
CREATE TRIGGER create_request_notification_trigger
  AFTER INSERT ON request_updates
  FOR EACH ROW
  EXECUTE FUNCTION create_request_notification();

DROP TRIGGER IF EXISTS update_request_timestamp_trigger ON request_updates;
CREATE TRIGGER update_request_timestamp_trigger
  AFTER INSERT ON request_updates
  FOR EACH ROW
  EXECUTE FUNCTION update_request_timestamp();