// firebase-config.js - Firebase v9+ Modular SDK Konfiguration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, enableNetwork, disableNetwork } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// =========================================================================
// HIER IST DIE STELLE, DIE DU ÄNDERN MUSST
// Die folgenden Werte müssen zu deinem Projekt "vokabeltrainer-app-462515" passen.
// =========================================================================
const firebaseConfig = {
  // 1. HIER KOMMT DEIN NEUER "API-Schlüssel 1" HINEIN
  apiKey: "AIzaSyB2kPYj9oY3-3bLO3Gzvws9qZOfKIowycY",

  // 2. DIESE WERTE MÜSSEN AUCH KORRIGIERT WERDEN!
  authDomain: "vokabeltrainer-app-462515.firebaseapp.com",
  projectId: "vokabeltrainer-app-462515",
  storageBucket: "vokabeltrainer-app-462515.appspot.com",

  // Diese Werte findest du in den Projekteinstellungen deines Firebase-Projekts
  messagingSenderId: "DEINE_MESSAGING_SENDER_ID",
  appId: "DEINE_APP_ID",
  measurementId: "DEINE_MEASUREMENT_ID" // optional
};
// =========================================================================
// ENDE DES ZU ÄNDERNDEN BEREICHS
// =========================================================================


// Der Rest deines Codes bleibt gleich.
// Netlify Domain Fix (Dieser Teil ist wahrscheinlich nicht mehr nötig, wenn die Konfiguration stimmt)
if (window.location.hostname.includes('netlify.app')) {
    // Verwende direkte Auth ohne Domain-Redirect
    firebaseConfig.authDomain = 'vokabeltrainer-app-462515.firebaseapp.com';
    // Deaktiviere Popup/Redirect Auth für Netlify
    window.localStorage.setItem('firebase:authUser:' + firebaseConfig.apiKey + ':[DEFAULT]', null);
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

let isOnline = navigator.onLine;
let connectionListeners = [];

export function onConnectionChange(callback) {
  connectionListeners.push(callback);
}

export function getConnectionStatus() {
  return isOnline;
}

window.addEventListener('online', () => {
  isOnline = true;
  enableNetwork(db);
  connectionListeners.forEach(callback => callback(true));
});

window.addEventListener('offline', () => {
  isOnline = false;
  disableNetwork(db);
  connectionListeners.forEach(callback => callback(false));
});

export async function initializeAuth() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('✅ Benutzer authentifiziert:', user.uid);
        resolve(user);
      } else {
        try {
          console.log('🔄 Melde Benutzer anonym an...');
          const userCredential = await signInAnonymously(auth);
          console.log('✅ Anonyme Anmeldung erfolgreich:', userCredential.user.uid);
          resolve(userCredential.user);
        } catch (error) {
          console.error('❌ Fehler bei anonymer Anmeldung:', error);
          reject(error);
        }
      }
    });
  });
}

let deviceSyncService = null;

export function getDeviceSyncService() {
  return deviceSyncService;
}

export function setDeviceSyncService(service) {
  deviceSyncService = service;
}

export function getCurrentDeviceInfo() {
  const userAgent = navigator.userAgent;
  let deviceType = 'desktop';
  let deviceName = '🖥️ Desktop';
  
  if (/Mobi|Android/i.test(userAgent)) {
    deviceType = 'mobile';
    deviceName = '📱 Smartphone';
  } else if (/iPad/i.test(userAgent)) {
    deviceType = 'tablet';
    deviceName = '📱 Tablet';
  }
  
  const browserName = getBrowserName();
  
  return {
    deviceType,
    deviceName,
    browserName,
    userAgent: userAgent.substring(0, 100),
    timestamp: Date.now()
  };
}

function getBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Browser';
}
```

Ich habe die entscheidende Stelle für dich markiert und die Werte auf das richtige Projekt (`vokabeltrainer-app-462515`) aktualisiert.

**Was du jetzt tun musst:**
1.  Kopiere den Wert von "API-Schlüssel 1" aus der Google Cloud Console.
2.  Setze ihn an der markierten Stelle bei `apiKey` ein.
3.  Gehe in deine **Firebase-Projekteinstellungen** (nicht Google Cloud) für das Projekt `vokabeltrainer-app-462515`. Dort findest du die korrekten Werte für `messagingSenderId` und `appId`. Kopiere diese ebenfalls in den Code.
4.  Speichere die Datei und lade sie auf Netlify hoch.

Danach sollte deine App funktionieren. Der Fehler lag die ganze Zeit darin, dass die Cloud-Einstellungen und der Code nicht zum selben Projekt gehört