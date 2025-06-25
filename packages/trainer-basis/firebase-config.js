// packages/trainer-basis/firebase-config.js
// === KORRIGIERTE VERSION, DIE MIT firebase-sync.js FUNKTIONIERT ===

// Wichtig: Die URLs müssen in Anführungszeichen stehen, aber nicht in eckigen Klammern
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// ====================================================================
// HIER MUSS DEINE FIREBASE-KONFIGURATION AUS DER CONSOLE STEHEN
// ====================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};
// ====================================================================

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

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