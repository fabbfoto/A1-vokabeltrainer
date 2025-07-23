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
    try {
      console.log('🔐 Starte Google OAuth Anmeldung...');
      console.log('📍 Redirect URL:', window.location.origin);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });
      
      if (error) {
        console.error('❌ Google OAuth Fehler:', error);
        console.error('❌ Fehler-Code:', error.status);
        console.error('❌ Fehler-Nachricht:', error.message);
        throw error;
      }
      
      console.log('✅ Google OAuth gestartet:', data);
      return data;
    } catch (error) {
      console.error('❌ Unerwarteter Fehler bei Google OAuth:', error);
      throw error;
    }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async testOAuthConfig(): Promise<boolean> {
    try {
      console.log('🔍 Teste OAuth-Konfiguration...');
      
      // Teste ob OAuth-Provider verfügbar sind
      const { data: providers, error: providersError } = await supabase.auth.listIdentities();
      
      if (providersError) {
        console.error('❌ Fehler beim Abrufen der OAuth-Provider:', providersError);
        return false;
      }
      
      console.log('✅ OAuth-Provider verfügbar:', providers);
      
      // Teste aktuelle Session
      const { data: session, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('❌ Fehler beim Abrufen der Session:', sessionError);
        return false;
      }
      
      if (session.session) {
        console.log('✅ Aktive Session gefunden:', session.session.user.email);
        return true;
      } else {
        console.log('ℹ️ Keine aktive Session - OAuth-Konfiguration OK');
        return true;
      }
    } catch (error) {
      console.error('❌ OAuth-Konfigurationstest fehlgeschlagen:', error);
      return false;
    }
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
      console.log('📍 URL:', SUPABASE_URL);
      console.log('🔑 Anon Key vorhanden:', !!SUPABASE_ANON_KEY);
      
      // Teste OAuth-Konfiguration
      const oauthOk = await supabaseAuth.testOAuthConfig();
      if (!oauthOk) {
        console.error('❌ OAuth-Konfiguration fehlgeschlagen');
        return false;
      }
      
      // Teste Auth-Verbindung
      const user = await supabaseAuth.getUser();
      console.log('✅ Auth-Verbindung funktioniert, User:', user?.email || 'nicht angemeldet');
      
      // Teste Datenbank-Verbindung durch einfache Abfrage
      console.log('🔄 Teste Datenbank-Verbindung...');
      const { data, error } = await supabase
        .from('progress')
        .select('count')
        .limit(1);
      
      if (error) {
        console.error('❌ Datenbank-Verbindung fehlgeschlagen:', error);
        console.error('❌ Fehler-Code:', error.code);
        console.error('❌ Fehler-Nachricht:', error.message);
        console.error('❌ Fehler-Details:', error.details);
        
        // Spezifische Behandlung für fehlende Tabelle
        if (error.code === 'PGRST116') {
          console.error('❌ Tabelle "progress" existiert nicht!');
          console.log('💡 Erstelle Tabelle automatisch...');
          await this.createProgressTable();
          return true;
        }
        
        return false;
      }
      
      console.log('✅ Datenbank-Verbindung funktioniert');
      console.log('✅ Tabelle "progress" existiert');
      return true;
    } catch (error) {
      console.error('❌ Verbindungstest fehlgeschlagen:', error);
      console.error('❌ Fehler-Typ:', typeof error);
      console.error('❌ Fehler-Stack:', error instanceof Error ? error.stack : 'Kein Stack verfügbar');
      return false;
    }
  },

  async createProgressTable(): Promise<void> {
    try {
      console.log('🔨 Erstelle progress Tabelle...');
      
      // SQL zum Erstellen der Tabelle
      const createTableSQL = `
        CREATE TABLE IF NOT EXISTS progress (
          id SERIAL PRIMARY KEY,
          user_id UUID NOT NULL,
          trainer_type TEXT NOT NULL DEFAULT 'basis',
          progress_data JSONB NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Erstelle Index für bessere Performance
        CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
        CREATE INDEX IF NOT EXISTS idx_progress_trainer_type ON progress(trainer_type);
        
        -- Erstelle RLS Policy für sicheren Zugriff
        ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
        
        -- Policy: Benutzer können nur ihre eigenen Daten sehen/bearbeiten
        DROP POLICY IF EXISTS "Users can manage their own progress" ON progress;
        CREATE POLICY "Users can manage their own progress" ON progress
          FOR ALL USING (auth.uid() = user_id);
      `;
      
      const { error } = await supabase.rpc('exec_sql', { sql: createTableSQL });
      
      if (error) {
        console.error('❌ Fehler beim Erstellen der Tabelle:', error);
        console.log('💡 Tabelle muss manuell in Supabase erstellt werden');
        console.log('📋 SQL zum manuellen Erstellen:');
        console.log(createTableSQL);
      } else {
        console.log('✅ Progress Tabelle erfolgreich erstellt');
      }
    } catch (error) {
      console.error('❌ Fehler beim Erstellen der Tabelle:', error);
      console.log('💡 Tabelle muss manuell in Supabase erstellt werden');
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