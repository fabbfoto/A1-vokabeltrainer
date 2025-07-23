# 🔥 Firebase Setup für A1 Vokabeltrainer

## 🚨 **WICHTIG: Firebase-Konfiguration erforderlich**

Die App benötigt Firebase für:
- ✅ **Globale Rangliste** - Vergleich mit anderen Nutzern weltweit
- ✅ **Geräte-Synchronisation** - Fortschritt auf allen deinen Geräten
- ✅ **Benutzer-Authentifizierung** - Sichere Anmeldung mit Google

## 🔧 **Schritt-für-Schritt Setup**

### **1. Firebase Console öffnen**
1. Gehe zu [Firebase Console](https://console.firebase.google.com/)
2. Wähle dein Projekt `a1-vokabeltrainer`
3. Falls das Projekt nicht existiert, erstelle es mit der ID `a1-vokabeltrainer`

### **2. Authentication konfigurieren**
1. Gehe zu **Authentication** → **Sign-in method**
2. Aktiviere **Google** als Sign-in Provider
3. Gehe zu **Authentication** → **Settings** → **Authorized domains**
4. Füge diese Domains hinzu:
   ```
   a1-all-topics.netlify.app
   localhost
   127.0.0.1
   ```

### **3. Firestore Database einrichten**
1. Gehe zu **Firestore Database** → **Create database**
2. Wähle **Start in test mode** (für Entwicklung)
3. Wähle einen Standort (z.B. `europe-west3`)

### **4. Firestore-Regeln konfigurieren**
Gehe zu **Firestore Database** → **Rules** und verwende diese Regeln:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Ranking-Daten: Jeder kann lesen, nur angemeldete User können schreiben
    match /rankings/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User-Daten: Nur der eigene User kann lesen/schreiben
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Fortschritt-Daten: Nur der eigene User kann lesen/schreiben
    match /progress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### **5. Projekt-Einstellungen prüfen**
1. Gehe zu **Project Settings** (Zahnrad-Symbol)
2. Prüfe, ob die **Web-App** korrekt registriert ist
3. Die Konfiguration sollte so aussehen:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};
```

## 🧪 **Test der Konfiguration**

### **Lokaler Test**
1. Starte die App: `npm run dev`
2. Gehe zu `http://localhost:5173`
3. Klicke auf "Geräte synchronisieren"
4. Teste Google-Login

### **Netlify Test**
1. Gehe zu `https://a1-all-topics.netlify.app`
2. Klicke auf "Geräte synchronisieren"
3. Teste Google-Login

## 🚨 **Fehlerbehebung**

### **"Domain nicht autorisiert"**
- ✅ Prüfe, ob `a1-all-topics.netlify.app` in Firebase Authorized Domains steht
- ✅ Warte 5-10 Minuten nach dem Hinzufügen der Domain

### **"Google-Login nicht aktiviert"**
- ✅ Gehe zu Authentication → Sign-in method → Google → Enable

### **"Firestore-Regeln verweigern Zugriff"**
- ✅ Prüfe die Firestore-Regeln (oben)
- ✅ Stelle sicher, dass die Datenbank im Test-Modus ist

### **"Netzwerkfehler"**
- ✅ Prüfe deine Internetverbindung
- ✅ Prüfe, ob Firebase-Projekt aktiv ist

## 📱 **Features nach Firebase-Setup**

### **✅ Funktioniert dann:**
- 🔐 Google-Login auf allen Geräten
- 🏆 Globale Rangliste mit anonymen Usernames
- 📊 Fortschritt-Synchronisation zwischen Geräten
- 💾 Sichere Datenspeicherung in der Cloud
- 🔄 Echtzeit-Updates der Rankings

### **🔄 Fallback-Funktionen:**
- 📱 Lokale Speicherung falls Firebase nicht verfügbar
- 🎯 Anonyme Username-Generierung
- 💾 Offline-Modus für Tests

## 🆘 **Hilfe benötigt?**

Falls du Probleme mit der Firebase-Konfiguration hast:
1. Prüfe die Browser-Konsole auf Fehlermeldungen
2. Stelle sicher, dass alle Domains autorisiert sind
3. Warte 5-10 Minuten nach Änderungen
4. Teste mit einem anderen Browser

Die App funktioniert auch ohne Firebase im lokalen Modus, aber für die volle Funktionalität (Rangliste + Synchronisation) ist Firebase erforderlich. 