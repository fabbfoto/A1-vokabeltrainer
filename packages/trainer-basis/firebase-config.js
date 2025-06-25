// packages/trainer-basis/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvbEE9u2-y1sB8COT3zw4dQ6nJAry2Z2g",
  authDomain: "a1-vokabeltrainer.firebaseapp.com",
  projectId: "a1-vokabeltrainer",
  storageBucket: "a1-vokabeltrainer.firebasestorage.app",
  messagingSenderId: "149333337863",
  appId: "1:149333337863:web:71e5894cca5086024c47a2",
  measurementId: "G-WZELR67WKZ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function getCurrentDeviceInfo() {
    let browserName = 'Unknown';
  const userAgent = navigator.userAgent;
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
