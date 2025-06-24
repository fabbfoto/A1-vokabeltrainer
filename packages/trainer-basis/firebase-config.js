// packages/trainer-basis/firebase-config.js
// Firebase v9+ Modular SDK Konfiguration für Basistrainer
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, enableNetwork, disableNetwork } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// Firebase-Konfiguration (identisch mit Thementrainer)
const firebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Connection State Management
let isOnline = navigator.onLine;
let connectionListeners = [];

export function onConnectionChange(callback) {
  connectionListeners.push(callback);
}

export function getConnectionStatus() {
  return isOnline;
}

// Network Status Detection
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

// Anonyme Authentifizierung
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

// Device Info für Multi-Device Sync
export function getCurrentDeviceInfo() {
  const userAgent = navigator.userAgent;
  let deviceType = 'Desktop';
  
  if (/android/i.test(userAgent)) {
    deviceType = 'Android';
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    deviceType = 'iOS';
  } else if (/Windows Phone/i.test(userAgent)) {
    deviceType = 'Windows Phone';
  }
  
  return {
    type: deviceType,
    userAgent: userAgent.substring(0, 100),
    timestamp: Date.now()
  };
}