// shared/auth/firebase-config.ts
// Firebase-Imports als any deklarieren für Kompatibilität
const { initializeApp, getAuth, getFirestore } = (window as any).firebase || {};

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface DeviceInfo {
  browser: string;
  userAgent: string;
  platform: string;
  language: string;
  timestamp: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};

export const app: any = initializeApp(firebaseConfig);
const auth: any = getAuth(app);
const db: any = getFirestore(app);

function getCurrentDeviceInfo(): DeviceInfo {
    let browserName: string = 'Unknown';
    const userAgent: string = navigator.userAgent;
    
    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
        browserName = "Samsung Internet";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
        browserName = "Microsoft Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    }
    
    return {
        browser: browserName,
        userAgent: userAgent,
        platform: navigator.platform,
        language: navigator.language,
        timestamp: new Date().toISOString()
    };
}

export { auth, db, getCurrentDeviceInfo }; 