import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  session: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  checkOnboardingStatus: (email: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Invalid email or password. Please try again.');
        }
        throw error;
      }

      if (!data.user) {
        throw new Error('No user data returned from authentication');
      }

      set({ user: data.user, session: data.session });
    } catch (error: any) {
      console.error('Sign in error:', error);
      throw error;
    }
  },
  signUp: async (email: string, password: string) => {
    try {
      // Check if user exists in profiles table
      const { data: existingProfile, error: profileError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (existingProfile) {
        throw new Error('An account with this email already exists. Please sign in instead.');
      }

      // If no existing profile found, proceed with signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        if (error.message.includes('User already registered')) {
          throw new Error('An account with this email already exists. Please sign in instead.');
        }
        throw error;
      }

      if (!data.user) {
        throw new Error('No user data returned from signup');
      }

      // Mark as a new user that needs onboarding
      localStorage.removeItem('onboardingCompleted');
      
      set({ user: data.user, session: data.session });
    } catch (error: any) {
      console.error('Sign up error:', error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, session: null });
    } catch (error: any) {
      console.error('Sign out error:', error);
      throw error;
    }
  },
  resetPassword: async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw error;
    }
  },
  checkOnboardingStatus: async (email: string) => {
    try {
      // Check if the user has completed onboarding in localStorage
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted') === 'true';
      
      if (hasCompletedOnboarding) {
        return true;
      }
      
      // Check if this user exists in our database
      const { data, error } = await supabase
        .from('profiles')
        .select('id, onboarding_completed')
        .eq('email', email)
        .maybeSingle();
      
      if (error && error.code !== 'PGRST116') {
        console.error('Error checking user status:', error);
        return false;
      }
      
      if (data?.onboarding_completed) {
        localStorage.setItem('onboardingCompleted', 'true');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      return false;
    }
  }
}));