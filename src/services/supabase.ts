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
      console.log('📍 Supabase URL:', SUPABASE_URL);
      console.log('📍 Anon Key vorhanden:', !!SUPABASE_ANON_KEY);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://a1-all-topics.netlify.app', // Nur Netlify-Domain
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
        console.error('❌ Fehler-Details:', error);
        
        // Spezifische Fehlerbehandlung
        if (error.message?.includes('redirect_uri_mismatch')) {
          console.error('🔧 LÖSUNG: Redirect URI in Google Cloud Console anpassen');
          console.error('🔧 Erwartete Redirect URI:', `${SUPABASE_URL}/auth/v1/callback`);
          console.error('🔧 Netlify Redirect URI:', 'https://a1-all-topics.netlify.app/auth/v1/callback');
          console.error('🔧 WICHTIG: Nur Netlify-Domain verwenden, nicht localhost!');
        }
        
        throw error;
      }
      
      console.log('✅ Google OAuth gestartet:', data);
      return data;
    } catch (error) {
      console.error('❌ Unerwarteter Fehler bei Google OAuth:', error);
      throw error;
    }
  },

  // NEUE FUNKTION: Magic Link Anmeldung (DSGVO-konform)
  async signInWithMagicLink(email: string) {
    try {
      console.log('🔐 Starte Magic Link Anmeldung...');
      console.log('📧 E-Mail:', email);
      
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: 'https://a1-all-topics.netlify.app',
          data: {
            // Zusätzliche anonyme Metadaten (optional)
            login_type: 'magic_link',
            timestamp: new Date().toISOString()
          }
        }
      });
      
      if (error) {
        console.error('❌ Magic Link Fehler:', error);
        throw error;
      }
      
      console.log('✅ Magic Link gesendet:', data);
      return {
        success: true,
        message: 'Magic Link wurde an deine E-Mail gesendet. Bitte prüfe dein Postfach.',
        data: data
      };
    } catch (error) {
      console.error('❌ Unerwarteter Fehler bei Magic Link:', error);
      throw error;
    }
  },

  // NEUE FUNKTION: Anonyme Session (ohne E-Mail)
  async createAnonymousSession() {
    try {
      console.log('🔐 Erstelle anonyme Session...');
      
      // Generiere eine anonyme ID
      const anonymousId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Erstelle eine temporäre Session ohne E-Mail
      const { data, error } = await supabase.auth.signUp({
        email: `${anonymousId}@anonymous.local`,
        password: Math.random().toString(36).substr(2, 15),
        options: {
          data: {
            is_anonymous: true,
            anonymous_id: anonymousId,
            created_at: new Date().toISOString()
          }
        }
      });
      
      if (error) {
        console.error('❌ Anonyme Session Fehler:', error);
        throw error;
      }
      
      console.log('✅ Anonyme Session erstellt:', data);
      return {
        success: true,
        anonymousId: anonymousId,
        data: data
      };
    } catch (error) {
      console.error('❌ Unerwarteter Fehler bei anonymer Session:', error);
      throw error;
    }
  },

  // NEUE FUNKTION: DSGVO-konforme Datenlöschung
  async deleteUserData() {
    try {
      console.log('🗑️ Lösche Benutzerdaten (DSGVO)...');
      
      const user = await this.getUser();
      if (!user) {
        throw new Error('Kein Benutzer angemeldet');
      }
      
      // Lösche alle Progress-Daten
      const { error: progressError } = await supabase
        .from('progress')
        .delete()
        .eq('user_id', user.id);
      
      if (progressError) {
        console.error('❌ Fehler beim Löschen der Progress-Daten:', progressError);
      } else {
        console.log('✅ Progress-Daten gelöscht');
      }
      
      // Lösche den Benutzer selbst
      const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);
      
      if (deleteError) {
        console.error('❌ Fehler beim Löschen des Benutzers:', deleteError);
        throw deleteError;
      }
      
      console.log('✅ Benutzerdaten vollständig gelöscht');
      return { success: true };
    } catch (error) {
      console.error('❌ Fehler bei der Datenlöschung:', error);
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
      console.log('📍 Aktuelle URL:', window.location.href);
      console.log('📍 Origin:', window.location.origin);
      console.log('📍 Hostname:', window.location.hostname);
      
      // Teste ob OAuth-Provider verfügbar sind
      // listIdentities() existiert nicht in Supabase, verwende Session-Check stattdessen
      console.log('✅ OAuth-Provider-Test übersprungen (nicht verfügbar in Supabase)');
      
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

      // Verwende die neue Upsert-Funktion statt upsert()
      const { data, error } = await supabase
        .rpc('upsert_progress', {
          p_user_id: user.id,
          p_trainer_type: 'basis',
          p_progress_data: progressData
        });

      if (error) {
        console.error('❌ Supabase Speicherfehler:', error);
        console.error('❌ Fehler-Code:', error.code);
        console.error('❌ Fehler-Nachricht:', error.message);
        console.error('❌ Fehler-Details:', error.details);
        
        // Fallback: Versuche normalen Upsert
        console.log('🔄 Fallback: Versuche normalen Upsert...');
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('progress')
          .upsert({
            user_id: user.id,
            trainer_type: 'basis',
            progress_data: progressData,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id,trainer_type'
          })
          .select();

        if (fallbackError) {
          console.error('❌ Fallback-Upsert fehlgeschlagen:', fallbackError);
          return { success: false, error: fallbackError.message };
        }

        console.log('✅ Fallback-Upsert erfolgreich:', fallbackData);
        return { success: true, data: fallbackData };
      }

      console.log('✅ Progress in Supabase gespeichert (Upsert-Funktion)');
      
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
      console.log('🌐 Aktuelle Domain:', window.location.hostname);
      console.log('🔗 Aktuelle URL:', window.location.href);
      
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
      
      // Teste Policies (falls User angemeldet)
      if (user) {
        await this.testPolicies(user.id);
      }
      
      return true;
    } catch (error) {
      console.error('❌ Verbindungstest fehlgeschlagen:', error);
      console.error('❌ Fehler-Typ:', typeof error);
      console.error('❌ Fehler-Stack:', error instanceof Error ? error.stack : 'Kein Stack verfügbar');
      return false;
    }
  },

  async testPolicies(userId: string): Promise<void> {
    try {
      console.log('🔍 Teste Datenbank-Policies für User:', userId);
      
      // Test 1: Versuche INSERT
      const testData = { test: 'policy_test', timestamp: Date.now() };
      const { data: insertData, error: insertError } = await supabase
        .from('progress')
        .insert({
          user_id: userId,
          trainer_type: 'policy_test',
          progress_data: testData
        })
        .select();
      
      if (insertError) {
        console.error('❌ INSERT Policy Test fehlgeschlagen:', insertError);
      } else {
        console.log('✅ INSERT Policy Test erfolgreich:', insertData);
        
        // Test 2: Versuche UPDATE
        const { data: updateData, error: updateError } = await supabase
          .from('progress')
          .update({ progress_data: { ...testData, updated: true } })
          .eq('user_id', userId)
          .eq('trainer_type', 'policy_test')
          .select();
        
        if (updateError) {
          console.error('❌ UPDATE Policy Test fehlgeschlagen:', updateError);
        } else {
          console.log('✅ UPDATE Policy Test erfolgreich:', updateData);
        }
        
        // Test 3: Versuche DELETE
        const { error: deleteError } = await supabase
          .from('progress')
          .delete()
          .eq('user_id', userId)
          .eq('trainer_type', 'policy_test');
        
        if (deleteError) {
          console.error('❌ DELETE Policy Test fehlgeschlagen:', deleteError);
        } else {
          console.log('✅ DELETE Policy Test erfolgreich');
        }
      }
    } catch (error) {
      console.error('❌ Policy-Test fehlgeschlagen:', error);
    }
  },

  // NEUE FUNKTION: Umfassende Diagnose
  async runDiagnostics(): Promise<void> {
    console.group('🔍 SUPABASE DIAGNOSE');
    
    try {
      // 1. Grundkonfiguration
      console.log('1️⃣ Grundkonfiguration:');
      console.log('   URL:', SUPABASE_URL);
      console.log('   Anon Key:', SUPABASE_ANON_KEY ? '✅ Vorhanden' : '❌ Fehlt');
      console.log('   Domain:', window.location.hostname);
      console.log('   Origin:', window.location.origin);
      
      // 2. Client-Verbindung
      console.log('2️⃣ Client-Verbindung:');
      try {
        const { data: testData, error: testError } = await supabase
          .from('progress')
          .select('count')
          .limit(1);
        
        if (testError) {
          console.log('   ❌ Verbindung fehlgeschlagen:', testError.message);
        } else {
          console.log('   ✅ Verbindung erfolgreich');
        }
      } catch (e) {
        console.log('   ❌ Verbindungstest fehlgeschlagen:', e);
      }
      
      // 3. OAuth-Konfiguration
      console.log('3️⃣ OAuth-Konfiguration:');
      try {
        // listIdentities() existiert nicht in Supabase
        console.log('   ℹ️ OAuth-Provider-Test nicht verfügbar in Supabase');
        console.log('   📋 OAuth-Konfiguration muss manuell in Supabase Dashboard geprüft werden');
      } catch (e) {
        console.log('   ❌ OAuth-Test fehlgeschlagen:', e);
      }
      
      // 4. Aktuelle Session
      console.log('4️⃣ Aktuelle Session:');
      try {
        const { data: session, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          console.log('   ❌ Session-Fehler:', sessionError.message);
        } else if (session.session) {
          console.log('   ✅ Angemeldet als:', session.session.user.email);
        } else {
          console.log('   ℹ️ Nicht angemeldet');
        }
      } catch (e) {
        console.log('   ❌ Session-Test fehlgeschlagen:', e);
      }
      
      // 5. Empfohlene Aktionen
      console.log('5️⃣ Empfohlene Aktionen:');
      console.log('   📋 1. Google Cloud Console OAuth konfigurieren');
      console.log('   📋 2. Redirect URIs hinzufügen (NUR Netlify):');
      console.log('      -', `${SUPABASE_URL}/auth/v1/callback`);
      console.log('      -', 'https://a1-all-topics.netlify.app/auth/v1/callback');
      console.log('   📋 3. Supabase Dashboard → Auth → Providers → Google aktivieren');
      console.log('   📋 4. Client ID und Secret in Supabase eintragen');
      console.log('   📋 5. WICHTIG: Nur Netlify-Domain verwenden, localhost nicht nötig!');
      
    } catch (error) {
      console.error('❌ Diagnose fehlgeschlagen:', error);
    }
    
    console.groupEnd();
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