// A1-VOKABELTRAINER/packages/trainer-basis/firebase-config.js
// --- NEUE, SAUBERE VERSION ---

// Importieren der notwendigen Firebase-Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// ====================================================================
// HIER IHRE FIREBASE-KONFIGURATION AUS DER CONSOLE EINFÜGEN
// ====================================================================
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};// ====================================================================

// Firebase-App initialisieren
const app = initializeApp(firebaseConfig);

// Die Dienste holen, die wir in anderen Dateien verwenden wollen
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * ÜBERWACHT DEN LOGIN-STATUS DES BENUTZERS.
 * Dies ist das Herzstück der Authentifizierung.
 * Wenn kein Benutzer angemeldet ist, wird automatisch ein anonymer Account erstellt.
 */
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Der Benutzer ist angemeldet (entweder anonym oder permanent).
    // Die 'user' Variable enthält die wichtige UID (user.uid).
    console.log("Firebase Auth: Benutzer ist angemeldet mit UID:", user.uid);
    // Hier könnte man z.B. den Lade-Prozess für den Fortschritt anstoßen.
    
  } else {
    // Es ist kein Benutzer angemeldet.
    // Wir erstellen sofort und unsichtbar einen neuen, anonymen Account.
    console.log("Firebase Auth: Kein Benutzer gefunden. Erstelle anonymen Account...");
    signInAnonymously(auth).catch((error) => {
      console.error("Firebase Auth: Fehler beim Erstellen des anonymen Accounts:", error);
    });
  }
});

// Wir exportieren die initialisierten Dienste, damit andere Dateien
// wie trainer.js oder firebase-sync.js darauf zugreifen können.
export { auth, db };