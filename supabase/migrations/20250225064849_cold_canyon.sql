/*
  # Add Project Tracking Updates

  1. New Tables
    - `project_updates`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `user_id` (uuid, references auth.users)
      - `content` (text)
      - `type` (text) - Type of update (status_change, comment, revision)
      - `created_at` (timestamptz)

    - `project_files`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `name` (text)
      - `url` (text)
      - `type` (text)
      - `size` (integer)
      - `uploaded_by` (uuid, references auth.users)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for project updates and files
*/

-- Create project_updates table
CREATE TABLE IF NOT EXISTS project_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  content text NOT NULL,
  type text NOT NULL CHECK (type IN ('status_change', 'comment', 'revision')),
  created_at timestamptz DEFAULT now()
);

-- Create project_files table
CREATE TABLE IF NOT EXISTS project_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  url text NOT NULL,
  type text NOT NULL,
  size integer NOT NULL,
  uploaded_by uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;

-- Create policies for project updates
CREATE POLICY "Users can view project updates"
  ON project_updates FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_updates.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Users can create project updates"
  ON project_updates FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_updates.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

-- Create policies for project files
CREATE POLICY "Users can view project files"
  ON project_files FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_files.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Users can upload project files"
  ON project_files FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_files.project_id = projects.id
      AND (projects.user_id = auth.uid() OR 
           (project_team_members.user_id = auth.uid() AND project_team_members.role IN ('admin', 'editor')))
    )
  );

CREATE POLICY "Users can delete their own files"
  ON project_files FOR DELETE
  TO authenticated
  USING (
    uploaded_by = auth.uid() OR
    EXISTS (
      SELECT 1 FROM projects
      WHERE project_files.project_id = projects.id
      AND projects.user_id = auth.uid()
    )
  );

-- Create function to automatically create a status update
CREATE OR REPLACE FUNCTION create_status_update()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO project_updates (project_id, user_id, content, type)
    VALUES (
      NEW.id,
      auth.uid(),
      format('Project status changed from %s to %s', OLD.status, NEW.status),
      'status_change'
    );
  END IF;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for status updates
CREATE TRIGGER project_status_update
  AFTER UPDATE OF status ON projects
  FOR EACH ROW
  EXECUTE FUNCTION create_status_update();