import { createClient } from '@supabase/supabase-js';

// ERSETZE mit deinen Werten aus Supabase Dashboard
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIs...';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Einfache Auth-Funktionen
export const supabaseAuth = {
  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  onAuthStateChange(callback: (user: any) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(session?.user || null);
    });
  }
};

// Progress-Funktionen mit robustem Error Handling
export const supabaseProgress = {
  async save(progressData: any) {
    try {
      const user = await supabaseAuth.getUser();
      if (!user) {
        console.warn('Nicht angemeldet, speichere nur lokal');
        return;
      }

      const { error } = await supabase
        .from('progress')
        .upsert({
          user_id: user.id,
          trainer_type: 'basis',
          progress_data: progressData
        })
        .select();

      if (error) throw error;
      console.log('✅ Progress in Supabase gespeichert');
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    }
  },

  async load(): Promise<any> {
    try {
      const user = await supabaseAuth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('trainer_type', 'basis')
        .maybeSingle(); // Verwende maybeSingle statt single

      if (error) {
        console.error('Fehler beim Laden:', error);
        return null;
      }

      // Type-sicherer Zugriff
      const result = data as Record<string, any> | null;
      return result?.progress_data || null;
    } catch (error) {
      console.error('Fehler beim Laden:', error);
      return null;
    }
  },

  subscribeToChanges(callback: (data: any) => void) {
    const channel = supabase
      .channel('progress-changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'progress' 
        }, 
        (payload) => {
          console.log('Progress Update:', payload);
          const newData = payload.new as Record<string, any>;
          if (newData?.progress_data) {
            callback(newData.progress_data);
          }
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }
}; 