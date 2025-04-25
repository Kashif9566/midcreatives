/*
  # Add Project Tracking System

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text)
      - `description` (text)
      - `status` (text)
      - `progress` (integer)
      - `deadline` (timestamptz)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `project_tasks`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `title` (text)
      - `description` (text)
      - `status` (text)
      - `due_date` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `project_comments`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `user_id` (uuid, references auth.users)
      - `content` (text)
      - `created_at` (timestamptz)

    - `project_team_members`
      - `project_id` (uuid, references projects)
      - `user_id` (uuid, references auth.users)
      - `role` (text)
      - Primary key (project_id, user_id)

  2. Security
    - Enable RLS on all tables
    - Add policies for project access and management
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  description text,
  status text NOT NULL CHECK (status IN ('submitted', 'in_review', 'in_progress', 'completed')),
  progress integer NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  deadline timestamptz,
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_tasks table
CREATE TABLE IF NOT EXISTS project_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  status text NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed')),
  due_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_comments table
CREATE TABLE IF NOT EXISTS project_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create project_team_members table
CREATE TABLE IF NOT EXISTS project_team_members (
  project_id uuid REFERENCES projects ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users,
  role text NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  PRIMARY KEY (project_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
CREATE POLICY "Users can view their own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM project_team_members
      WHERE project_id = projects.id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM project_team_members
      WHERE project_id = projects.id AND user_id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Users can delete their own projects"
  ON projects FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for project tasks
CREATE POLICY "Users can view project tasks"
  ON project_tasks FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_tasks.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Users can create project tasks"
  ON project_tasks FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_tasks.project_id = projects.id
      AND (projects.user_id = auth.uid() OR 
           (project_team_members.user_id = auth.uid() AND project_team_members.role IN ('admin', 'editor')))
    )
  );

CREATE POLICY "Users can update project tasks"
  ON project_tasks FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_tasks.project_id = projects.id
      AND (projects.user_id = auth.uid() OR 
           (project_team_members.user_id = auth.uid() AND project_team_members.role IN ('admin', 'editor')))
    )
  );

-- Create policies for project comments
CREATE POLICY "Users can view project comments"
  ON project_comments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_comments.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Users can create project comments"
  ON project_comments FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM projects
      LEFT JOIN project_team_members ON projects.id = project_team_members.project_id
      WHERE project_comments.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

-- Create policies for project team members
CREATE POLICY "Users can view project team members"
  ON project_team_members FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE project_team_members.project_id = projects.id
      AND (projects.user_id = auth.uid() OR project_team_members.user_id = auth.uid())
    )
  );

CREATE POLICY "Project owners can manage team members"
  ON project_team_members FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE project_team_members.project_id = projects.id
      AND projects.user_id = auth.uid()
    )
  );

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updating timestamps
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_project_tasks_updated_at
  BEFORE UPDATE ON project_tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();