// firebase-config.js - Firebase v9+ Modular SDK Konfiguration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore, enableNetwork, disableNetwork } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// HIER DEINE FIREBASE-KONFIGURATION EINFÜGEN
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

// ... Rest des Codes folgt im nächsten Schritt
// Firebase initialisieren



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
// ===== DEINE BESTEHENDE firebase-config.js =====
// (alles bleibt wie es ist)

const firebaseConfig = { ... };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// ... all dein bestehender Code ...

// ===== HIER FÜGST DU NUR DAS HINZU =====
// Device Sync Management
let deviceSyncService = null;

export function getDeviceSyncService() {
  return deviceSyncService;
}

export function setDeviceSyncService(service) {
  deviceSyncService = service;
}

// Device Information
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