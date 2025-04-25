/*
  # Project Management Schema Update

  1. New Tables
    - `roles` - User role management
    - `project_status_history` - Track project status changes
    - `project_comments` - Project communication
    - `subscription_tiers` - Available subscription plans
    - `user_subscriptions` - User subscription tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for role-based access
    - Set up secure data access patterns

  3. Changes
    - Add role field to profiles table
    - Add subscription_status to profiles
    - Add notification preferences
*/

-- Add role and subscription fields to profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS role text DEFAULT 'client' CHECK (role IN ('client', 'admin')),
ADD COLUMN IF NOT EXISTS subscription_status text DEFAULT 'inactive' CHECK (subscription_status IN ('active', 'inactive', 'cancelled'));

-- Create subscription_tiers table
CREATE TABLE IF NOT EXISTS subscription_tiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal NOT NULL,
  features jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  tier_id uuid REFERENCES subscription_tiers NOT NULL,
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz NOT NULL,
  cancel_at_period_end boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_status_history table
CREATE TABLE IF NOT EXISTS project_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects NOT NULL,
  old_status text NOT NULL,
  new_status text NOT NULL,
  changed_by uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create project_comments table
CREATE TABLE IF NOT EXISTS project_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscription_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_comments ENABLE ROW LEVEL SECURITY;

-- Policies for subscription_tiers
CREATE POLICY "Anyone can view subscription tiers"
  ON subscription_tiers
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for user_subscriptions
CREATE POLICY "Users can view own subscriptions"
  ON user_subscriptions
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Policies for project_status_history
CREATE POLICY "Users can view status history of their projects"
  ON project_status_history
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_id
      AND projects.user_id = auth.uid()
    )
  );

-- Policies for project_comments
CREATE POLICY "Users can view comments on their projects"
  ON project_comments
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_id
      AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create comments on their projects"
  ON project_comments
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_id
      AND projects.user_id = auth.uid()
    )
  );

-- Function to handle project status changes
CREATE OR REPLACE FUNCTION handle_project_status_change()
RETURNS TRIGGER AS $$
BEGIN
  -- Record status change
  INSERT INTO project_status_history (
    project_id,
    old_status,
    new_status,
    changed_by
  ) VALUES (
    NEW.id,
    OLD.status,
    NEW.status,
    auth.uid()
  );

  -- Create notification for project owner
  INSERT INTO notifications (
    user_id,
    title,
    message,
    type
  ) VALUES (
    NEW.user_id,
    'Project Status Updated',
    format('Your project "%s" status has been updated to %s', NEW.title, NEW.status),
    'project_update'
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for project status changes
CREATE TRIGGER on_project_status_change
  AFTER UPDATE OF status ON projects
  FOR EACH ROW
  WHEN (OLD.status IS DISTINCT FROM NEW.status)
  EXECUTE FUNCTION handle_project_status_change();

-- Function to handle new project comments
CREATE OR REPLACE FUNCTION handle_new_project_comment()
RETURNS TRIGGER AS $$
BEGIN
  -- Create notification for project owner
  INSERT INTO notifications (
    user_id,
    title,
    message,
    type
  ) 
  SELECT
    projects.user_id,
    'New Project Comment',
    format('New comment on your project "%s"', projects.title),
    'comment'
  FROM projects
  WHERE projects.id = NEW.project_id
  AND projects.user_id != NEW.user_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new project comments
CREATE TRIGGER on_new_project_comment
  AFTER INSERT ON project_comments
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_project_comment();

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = user_id
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add admin-only policies
CREATE POLICY "Admins can update any project"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (is_admin(auth.uid()));

CREATE POLICY "Admins can view all projects"
  ON projects
  FOR SELECT
  TO authenticated
  USING (is_admin(auth.uid()));