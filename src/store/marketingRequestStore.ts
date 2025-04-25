import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface MarketingRequest {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  type: string;
  created_at: string;
  updated_at: string;
}

interface RequestUpdate {
  id: string;
  request_id: string;
  update_type: 'status_change' | 'comment';
  content: string;
  created_at: string;
}

interface MarketingRequestState {
  requests: MarketingRequest[];
  loading: boolean;
  error: string | null;
  fetchRequests: () => Promise<void>;
  createRequest: (request: Omit<MarketingRequest, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  getRequestUpdates: (requestId: string) => Promise<RequestUpdate[]>;
  addRequestUpdate: (requestId: string, updateType: 'status_change' | 'comment', content: string) => Promise<void>;
  subscribeToUpdates: () => void;
}

export const useMarketingRequestStore = create<MarketingRequestState>((set, get) => ({
  requests: [],
  loading: false,
  error: null,

  fetchRequests: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('marketing_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ requests: data || [], loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  createRequest: async (request) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('marketing_requests')
        .insert([request])
        .select()
        .single();

      if (error) throw error;

      const { requests } = get();
      set({ 
        requests: [data, ...requests],
        loading: false 
      });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  getRequestUpdates: async (requestId: string) => {
    try {
      const { data, error } = await supabase
        .from('request_updates')
        .select('*')
        .eq('request_id', requestId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error: any) {
      set({ error: error.message });
      return [];
    }
  },

  addRequestUpdate: async (requestId: string, updateType: 'status_change' | 'comment', content: string) => {
    try {
      const { error } = await supabase
        .from('request_updates')
        .insert([{
          request_id: requestId,
          update_type: updateType,
          content
        }]);

      if (error) throw error;
      
      // Refresh requests to get updated status
      const { fetchRequests } = get();
      await fetchRequests();
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  subscribeToUpdates: () => {
    const { fetchRequests } = get();
    
    // Subscribe to both tables
    const subscription = supabase
      .channel('marketing-requests')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'marketing_requests'
        },
        () => fetchRequests()
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'request_updates'
        },
        () => fetchRequests()
      )
      .subscribe();

    // Return cleanup function
    return () => {
      subscription.unsubscribe();
    };
  }
}));