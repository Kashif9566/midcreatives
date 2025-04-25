import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'submitted' | 'in_review' | 'in_progress' | 'completed';
  progress: number;
  deadline: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  team_members: string[];
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  createProject: (project: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'user_id'>) => Promise<void>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ projects: data || [] });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  createProject: async (project) => {
    set({ loading: true, error: null });
    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('projects')
        .insert([
          {
            ...project,
            user_id: user.user.id,
            status: 'submitted',
            progress: 0
          }
        ])
        .select()
        .single();

      if (error) throw error;
      
      const { projects } = get();
      set({ projects: [data, ...projects] });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateProject: async (id, updates) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      const { projects } = get();
      set({
        projects: projects.map(p => p.id === id ? { ...p, ...data } : p)
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteProject: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      const { projects } = get();
      set({ projects: projects.filter(p => p.id !== id) });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  }
}));