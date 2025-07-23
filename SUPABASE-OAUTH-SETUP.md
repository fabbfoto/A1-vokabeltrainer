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
   - **Authorized redirect URIs hinzufügen (NUR Netlify):**
     ```
     https://ezjihsafleestqanpgdc.supabase.co/auth/v1/callback
     https://a1-all-topics.netlify.app/auth/v1/callback
     ```
     **Wichtig:** Nur die Netlify-Domain verwenden, localhost ist nicht nötig!

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

1. **Gehe zu https://a1-all-topics.netlify.app/**
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
- **Wichtig:** Nur Netlify-Domain verwenden, localhost nicht nötig!

**Problem: "invalid_client"**
- **Lösung:** Überprüfe Client ID und Client Secret

**Problem: "access_denied"**
- **Lösung:** Stelle sicher, dass die Google+ API aktiviert ist

### 5. Netlify Domain

Deine Netlify-Domain ist bereits bekannt:
```
https://a1-all-topics.netlify.app
```

**Verwende diese Domain in den Redirect URIs:**
```
https://a1-all-topics.netlify.app/auth/v1/callback
```

### 6. Verifikation

Nach erfolgreicher Konfiguration solltest du:
- ✅ Dich mit Google anmelden können
- ✅ "✅ Angemeldet als: [email]" in der Konsole sehen
- ✅ Progress-Daten in Supabase gespeichert werden
- ✅ Nach Ab-/Anmeldung deine Daten wiederfinden

### 7. Wichtige Hinweise

- **Nur Netlify:** Die App wird nur auf Netlify verwendet, localhost ist nicht nötig
- **Redirect URIs:** Nur die Netlify-Domain in Google Cloud Console eintragen
- **Testing:** Immer auf https://a1-all-topics.netlify.app/ testen 