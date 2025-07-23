# Supabase Google OAuth Setup

## Problem
Die Anmeldung mit Google funktioniert nicht, obwohl die Supabase-Verbindung OK ist.

## Lösung: Google OAuth in Supabase konfigurieren

### 1. Google Cloud Console Setup

1. **Gehe zu [Google Cloud Console](https://console.cloud.google.com/)**
2. **Erstelle ein neues Projekt oder wähle ein bestehendes**
3. **Aktiviere die Google+ API:**
   - Gehe zu "APIs & Services" → "Library"
   - Suche nach "Google+ API" und aktiviere sie

4. **Erstelle OAuth 2.0 Credentials:**
   - Gehe zu "APIs & Services" → "Credentials"
   - Klicke "Create Credentials" → "OAuth 2.0 Client IDs"
   - Wähle "Web application"
   - **Authorized redirect URIs hinzufügen:**
     ```
     https://ezjihsafleestqanpgdc.supabase.co/auth/v1/callback
     http://localhost:5177/auth/v1/callback
     http://localhost:5176/auth/v1/callback
     http://localhost:5175/auth/v1/callback
     http://localhost:5174/auth/v1/callback
     http://localhost:5173/auth/v1/callback
     ```

5. **Notiere dir:**
   - Client ID
   - Client Secret

### 2. Supabase Dashboard Setup

1. **Gehe zu deinem [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Wähle dein Projekt aus**
3. **Gehe zu "Authentication" → "Providers"**
4. **Aktiviere Google:**
   - Toggle "Enable" für Google
   - **Client ID:** Deine Google Client ID
   - **Client Secret:** Dein Google Client Secret
   - **Redirect URL:** `https://ezjihsafleestqanpgdc.supabase.co/auth/v1/callback`

### 3. Teste die Konfiguration

1. **Lade die Anwendung neu**
2. **Schaue in die Browser-Konsole (F12)**
3. **Klicke auf "Anmelden"**
4. **Erwarte diese Logs:**
   ```
   🔍 Teste OAuth-Konfiguration...
   ✅ OAuth-Provider verfügbar: [...]
   🔐 Starte Google OAuth Anmeldung...
   ✅ Google OAuth gestartet: {...}
   ```

### 4. Häufige Probleme

**Problem: "redirect_uri_mismatch"**
- **Lösung:** Stelle sicher, dass die Redirect URI in Google Cloud Console exakt mit der in Supabase übereinstimmt

**Problem: "invalid_client"**
- **Lösung:** Überprüfe Client ID und Client Secret

**Problem: "access_denied"**
- **Lösung:** Stelle sicher, dass die Google+ API aktiviert ist

### 5. Alternative: Lokale Entwicklung

Für lokale Entwicklung kannst du auch diese Redirect URIs hinzufügen:
```
http://localhost:3000/auth/v1/callback
http://localhost:5173/auth/v1/callback
http://localhost:5174/auth/v1/callback
http://localhost:5175/auth/v1/callback
http://localhost:5176/auth/v1/callback
http://localhost:5177/auth/v1/callback
```

### 6. Verifikation

Nach erfolgreicher Konfiguration solltest du:
- ✅ Dich mit Google anmelden können
- ✅ "✅ Angemeldet als: [email]" in der Konsole sehen
- ✅ Progress-Daten in Supabase gespeichert werden
- ✅ Nach Ab-/Anmeldung deine Daten wiederfinden 