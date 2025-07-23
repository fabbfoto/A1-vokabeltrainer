import { createClient } from '@supabase/supabase-js';

// ERSETZE mit deinen Werten aus Supabase Dashboard
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIs...';

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

// Progress-Funktionen
export const supabaseProgress = {
  async save(progressData: any) {
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

    if (error) {
      console.error('Fehler beim Speichern:', error);
      throw error;
    }
    console.log('✅ Progress in Supabase gespeichert');
  },

  async load() {
    const user = await supabaseAuth.getUser();
    if (!user) return null;
    const { data, error } = await supabase
      .from('progress')
      .select('progress_data')
      .eq('user_id', user.id)
      .eq('trainer_type', 'basis')
      .single<ProgressRow>();
    if (error && error.code !== 'PGRST116') {
      console.error('Fehler beim Laden:', error);
      throw error;
    }
    return data?.progress_data ?? null;
  },

  // Realtime Updates (optional)
  subscribeToChanges(callback: (data: any) => void) {
    supabase
      .channel('progress-changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'progress' 
        }, 
        (payload) => {
          console.log('Progress Update:', payload);
          callback(payload.new?.progress_data);
        }
      )
      .subscribe();
  }
}; 