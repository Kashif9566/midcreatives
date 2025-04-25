import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  profileProgress: number;
  projectProgress: number;
  teamProgress: number;
  updateProfileProgress: (progress: number) => void;
  updateProjectProgress: (progress: number) => void;
  updateTeamProgress: (progress: number) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      profileProgress: 0,
      projectProgress: 0,
      teamProgress: 0,
      updateProfileProgress: (progress) => set({ profileProgress: progress }),
      updateProjectProgress: (progress) => set({ projectProgress: progress }),
      updateTeamProgress: (progress) => set({ teamProgress: progress }),
    }),
    {
      name: 'progress-storage',
    }
  )
);