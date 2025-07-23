import { createClient } from '@supabase/supabase-js';

// Automatische Umgebungs-Erkennung für Supabase
const isLocalhost = typeof window !== 'undefined' && window.location.hostname.startsWith('localhost');

const SUPABASE_URL = 'https://ezjihsafleestqanpgdc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6amloc2FmbGVlc3RxYW5wZ2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzIxNDIsImV4cCI6MjA2ODg0ODE0Mn0.6q6K2PyQ0nnVNTIMwD0B1NnkoXx5rsayJJ_Ovd79JCE';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase Umgebungsvariablen fehlen! Bitte .env Datei prüfen.');
}

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
        return { success: false, reason: 'not_authenticated' };
      }

      console.log('🔄 Speichere Progress für User:', user.id);
      console.log('📊 Progress-Daten:', progressData);

      const { data, error } = await supabase
        .from('progress')
        .upsert({
          user_id: user.id,
          trainer_type: 'basis',
          progress_data: progressData,
          updated_at: new Date().toISOString()
        })
        .select();

      if (error) {
        console.error('❌ Supabase Speicherfehler:', error);
        return { success: false, error: error.message };
      }

      console.log('✅ Progress in Supabase gespeichert:', data);
      
      // Verifiziere das Speichern durch erneutes Laden
      const verification = await this.load();
      if (verification) {
        console.log('✅ Speicherung verifiziert - Daten können geladen werden');
        return { success: true, data: verification };
      } else {
        console.warn('⚠️ Speicherung nicht verifiziert - Daten können nicht geladen werden');
        return { success: false, reason: 'verification_failed' };
      }
    } catch (error) {
      console.error('❌ Unerwarteter Fehler beim Speichern:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  },

  async load(): Promise<any> {
    try {
      const user = await supabaseAuth.getUser();
      if (!user) {
        console.log('Nicht angemeldet, kann keine Cloud-Daten laden');
        return null;
      }

      console.log('🔄 Lade Progress für User:', user.id);

      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('trainer_type', 'basis')
        .maybeSingle();

      if (error) {
        console.error('❌ Supabase Ladefehler:', error);
        return null;
      }

      if (!data) {
        console.log('ℹ️ Keine Progress-Daten in Supabase gefunden');
        return null;
      }

      console.log('✅ Progress aus Supabase geladen:', data);
      return data.progress_data || null;
    } catch (error) {
      console.error('❌ Unerwarteter Fehler beim Laden:', error);
      return null;
    }
  },

  async testConnection(): Promise<boolean> {
    try {
      console.log('🔍 Teste Supabase-Verbindung...');
      
      // Teste Auth-Verbindung
      const user = await supabaseAuth.getUser();
      console.log('✅ Auth-Verbindung funktioniert, User:', user?.email || 'nicht angemeldet');
      
      // Teste Datenbank-Verbindung durch einfache Abfrage
      const { data, error } = await supabase
        .from('progress')
        .select('count')
        .limit(1);
      
      if (error) {
        console.error('❌ Datenbank-Verbindung fehlgeschlagen:', error);
        return false;
      }
      
      console.log('✅ Datenbank-Verbindung funktioniert');
      return true;
    } catch (error) {
      console.error('❌ Verbindungstest fehlgeschlagen:', error);
      return false;
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