// firebase-sync.js - Vollständiger Sync Service für A1-Vokabeltrainer
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  serverTimestamp,
  writeBatch 
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { db, auth } from './firebase-config.js';

class FirebaseSyncService {
  constructor() {
    this.userId = null;
    this.unsubscribeProgress = null;
    this.unsubscribeTestScores = null;
    this.localData = {
      progress: {},
      testScores: {}
    };
    this.syncQueue = [];
    this.isInitialized = false;
    this.isOnline = navigator.onLine;
    
    // Event Listeners für Connection Changes
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.handleConnectionChange(true);
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.handleConnectionChange(false);
    });
  }

  // Initialisierung des Sync Services
  async initialize() {
    try {
      console.log('🔄 Initialisiere Firebase Sync Service...');
      
      // Warte auf Authentifizierung
      const user = await this.waitForAuth();
      this.userId = user.uid;
      console.log('✅ User ID:', this.userId);
      
      // Lade lokale Daten
      this.loadLocalData();
      
      // Starte Cloud-Synchronisation
      await this.startCloudSync();
      
      this.isInitialized = true;
      console.log('✅ Firebase Sync Service initialisiert');
      
      return true;
    } catch (error) {
      console.error('❌ Fehler bei Sync Service Initialisierung:', error);
      this.isInitialized = false;
      return false;
    }
  }

  // Warte auf Firebase Auth Ready
  waitForAuth() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          unsubscribe();
          resolve(user);
        } else {
          // Versuche anonyme Anmeldung
          import('https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js')
            .then(({ signInAnonymously }) => {
              return signInAnonymously(auth);
            })
            .then((userCredential) => {
              unsubscribe();
              resolve(userCredential.user);
            })
            .catch((error) => {
              unsubscribe();
              reject(error);
            });
        }
      });
    });
  }

  // Lade lokale Daten aus localStorage
  loadLocalData() {
    try {
      const progressData = localStorage.getItem('goetheA1Progress');
      const testScoreData = localStorage.getItem('goetheA1LastTestScores');
      
      this.localData.progress = progressData ? JSON.parse(progressData) : {};
      this.localData.testScores = testScoreData ? JSON.parse(testScoreData) : {};
      
      console.log('📥 Lokale Daten geladen:', {
        progress: Object.keys(this.localData.progress).length,
        testScores: Object.keys(this.localData.testScores).length
      });
    } catch (error) {
      console.error('❌ Fehler beim Laden lokaler Daten:', error);
      this.localData = { progress: {}, testScores: {} };
    }
  }

  // Starte Cloud-Synchronisation mit Real-time Listeners
  async startCloudSync() {
    if (!this.userId) return;

    try {
      // Progress Sync
      const progressRef = doc(db, 'userProgress', this.userId);
      this.unsubscribeProgress = onSnapshot(progressRef, (doc) => {
        if (doc.exists()) {
          this.handleCloudProgressUpdate(doc.data());
        }
      }, (error) => {
        console.error('❌ Fehler bei Progress Sync:', error);
      });

      // Test Scores Sync  
      const testScoresRef = doc(db, 'userTestScores', this.userId);
      this.unsubscribeTestScores = onSnapshot(testScoresRef, (doc) => {
        if (doc.exists()) {
          this.handleCloudTestScoresUpdate(doc.data());
        }
      }, (error) => {
        console.error('❌ Fehler bei TestScores Sync:', error);
      });

      // Initial Sync: Upload lokale Daten falls Cloud leer ist
      await this.performInitialSync();
      
    } catch (error) {
      console.error('❌ Fehler beim Starten der Cloud-Synchronisation:', error);
    }
  }

  // Initial Sync - Upload lokaler Daten wenn Cloud leer
  async performInitialSync() {
    try {
      const progressRef = doc(db, 'userProgress', this.userId);
      const testScoresRef = doc(db, 'userTestScores', this.userId);
      
      const [progressDoc, testScoresDoc] = await Promise.all([
        getDoc(progressRef),
        getDoc(testScoresRef)
      ]);

      const batch = writeBatch(db);

      // Upload Progress falls Cloud leer
      if (!progressDoc.exists() && Object.keys(this.localData.progress).length > 0) {
        console.log('📤 Uploading lokaler Fortschritt zu Cloud...');
        batch.set(progressRef, {
          progress: this.localData.progress,
          lastUpdated: serverTimestamp(),
          version: 1
        });
      }

      // Upload Test Scores falls Cloud leer  
      if (!testScoresDoc.exists() && Object.keys(this.localData.testScores).length > 0) {
        console.log('📤 Uploading lokale Test-Ergebnisse zu Cloud...');
        batch.set(testScoresRef, {
          testScores: this.localData.testScores,
          lastUpdated: serverTimestamp(),
          version: 1
        });
      }

      await batch.commit();
      console.log('✅ Initial Sync abgeschlossen');
      
    } catch (error) {
      console.error('❌ Fehler beim Initial Sync:', error);
    }
  }

  // Handle Cloud Progress Updates
  handleCloudProgressUpdate(cloudData) {
    try {
      const cloudProgress = cloudData.progress || {};
      
      // Merge Cloud-Daten mit lokalen Daten
      const mergedProgress = this.mergeProgress(this.localData.progress, cloudProgress);
      
      // Speichere in localStorage
      localStorage.setItem('goetheA1Progress', JSON.stringify(mergedProgress));
      this.localData.progress = mergedProgress;
      
      // Trigger Event für UI Update
      this.dispatchSyncEvent('progressUpdated', mergedProgress);
      
      console.log('📥 Fortschritt von Cloud synchronisiert');
    } catch (error) {
      console.error('❌ Fehler bei Cloud Progress Update:', error);
    }
  }

  // Handle Cloud Test Scores Updates
  handleCloudTestScoresUpdate(cloudData) {
    try {
      const cloudTestScores = cloudData.testScores || {};
      
      // Merge mit lokalen Test Scores
      const mergedTestScores = this.mergeTestScores(this.localData.testScores, cloudTestScores);
      
      // Speichere in localStorage
      localStorage.setItem('goetheA1LastTestScores', JSON.stringify(mergedTestScores));
      this.localData.testScores = mergedTestScores;
      
      // Trigger Event für UI Update
      this.dispatchSyncEvent('testScoresUpdated', mergedTestScores);
      
      console.log('📥 Test-Ergebnisse von Cloud synchronisiert');
    } catch (error) {
      console.error('❌ Fehler bei Cloud TestScores Update:', error);
    }
  }

  // Intelligente Progress Merge-Logik
  mergeProgress(localProgress, cloudProgress) {
    const merged = { ...localProgress };
    
    for (const [progressKey, cloudModes] of Object.entries(cloudProgress)) {
      if (!merged[progressKey]) {
        merged[progressKey] = {};
      }
      
      for (const [mode, cloudWordsArray] of Object.entries(cloudModes)) {
        const localWords = merged[progressKey][mode] || [];
        const cloudWords = Array.isArray(cloudWordsArray) ? cloudWordsArray : [];
        
        // Union der Wort-IDs (Fortschritt ist additiv)
        const combinedWords = [...new Set([...localWords, ...cloudWords])];
        merged[progressKey][mode] = combinedWords;
      }
    }
    
    return merged;
  }

  // Intelligente Test Scores Merge-Logik
  mergeTestScores(localScores, cloudScores) {
    const merged = { ...localScores };
    
    for (const [testKey, cloudScore] of Object.entries(cloudScores)) {
      const localScore = merged[testKey];
      
      // Behalte das neueste Ergebnis basierend auf Zeitstempel
      if (!localScore || 
          (cloudScore.timestamp && cloudScore.timestamp > (localScore.timestamp || 0))) {
        merged[testKey] = cloudScore;
      }
    }
    
    return merged;
  }

  // Speichere Progress in Cloud
  async saveProgress(progressData) {
    if (!this.isInitialized || !this.userId) {
      localStorage.setItem('goetheA1Progress', JSON.stringify(progressData));
      return false;
    }

    try {
      const progressRef = doc(db, 'userProgress', this.userId);
      
      await setDoc(progressRef, {
        progress: progressData,
        lastUpdated: serverTimestamp(),
        version: 1
      }, { merge: true });

      localStorage.setItem('goetheA1Progress', JSON.stringify(progressData));
      this.localData.progress = progressData;
      
      console.log('✅ Fortschritt erfolgreich synchronisiert');
      return true;
      
    } catch (error) {
      console.error('❌ Fehler beim Speichern des Fortschritts:', error);
      localStorage.setItem('goetheA1Progress', JSON.stringify(progressData));
      return false;
    }
  }

  // Speichere Test Scores in Cloud
  async saveTestScores(testScoresData) {
    if (!this.isInitialized || !this.userId) {
      localStorage.setItem('goetheA1LastTestScores', JSON.stringify(testScoresData));
      return false;
    }

    try {
      const testScoresRef = doc(db, 'userTestScores', this.userId);
      
      await setDoc(testScoresRef, {
        testScores: testScoresData,
        lastUpdated: serverTimestamp(),
        version: 1
      }, { merge: true });

      localStorage.setItem('goetheA1LastTestScores', JSON.stringify(testScoresData));
      this.localData.testScores = testScoresData;
      
      console.log('✅ Test-Ergebnisse erfolgreich synchronisiert');
      return true;
      
    } catch (error) {
      console.error('❌ Fehler beim Speichern der Test-Ergebnisse:', error);
      localStorage.setItem('goetheA1LastTestScores', JSON.stringify(testScoresData));
      return false;
    }
  }

  // Connection Status Change Handler
  handleConnectionChange(isOnline) {
    if (isOnline && this.syncQueue.length > 0) {
      console.log('🔄 Verbindung wiederhergestellt, verarbeite Sync Queue...');
      this.processSyncQueue();
    }
    
    // Dispatch connection event
    this.dispatchSyncEvent('connectionChanged', isOnline);
  }

  // Sync Queue Processing (für Offline-Daten)
  async processSyncQueue() {
    while (this.syncQueue.length > 0) {
      const syncItem = this.syncQueue.shift();
      try {
        if (syncItem.type === 'progress') {
          await this.saveProgress(syncItem.data);
        } else if (syncItem.type === 'testScores') {
          await this.saveTestScores(syncItem.data);
        }
      } catch (error) {
        console.error('❌ Fehler beim Verarbeiten der Sync Queue:', error);
        this.syncQueue.push(syncItem);
        break;
      }
    }
  }

  // Dispatch Custom Events für UI Updates
  dispatchSyncEvent(eventType, data) {
    const event = new CustomEvent('firebaseSyncUpdate', {
      detail: { type: eventType, data }
    });
    window.dispatchEvent(event);
  }

  // Status Information
  getStatus() {
    return {
      isInitialized: this.isInitialized,
      userId: this.userId,
      isOnline: this.isOnline,
      syncQueueLength: this.syncQueue.length
    };
  }

  // Cleanup
  destroy() {
    if (this.unsubscribeProgress) {
      this.unsubscribeProgress();
    }
    if (this.unsubscribeTestScores) {
      this.unsubscribeTestScores();
    }
  }
}

// Singleton Export
export const firebaseSyncService = new FirebaseSyncService();