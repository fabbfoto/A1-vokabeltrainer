// packages/trainer-basis/firebase-sync.js
// Firebase Sync Service für Basistrainer mit Device-Sync
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  serverTimestamp,
  writeBatch,
  query,
  where,
  limit,
  orderBy,
  deleteDoc
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { db, auth, getCurrentDeviceInfo } from './firebase-config.js';

class FirebaseSyncService {
  constructor() {
    this.userId = null;
    this.unsubscribeProgress = null;
    this.unsubscribeTestScores = null;
    this.unsubscribeDeviceSync = null;
    this.localData = {
      progress: {},
      testScores: {}
    };
    this.syncQueue = [];
    this.isInitialized = false;
    this.isOnline = navigator.onLine;
    
    // Device-Sync Eigenschaften
    this.currentDevice = getCurrentDeviceInfo();
    this.syncCodes = new Map();
    this.pendingSyncRequests = new Map();
    
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
        progress: Object.keys(this.localData.progress).length + ' Einträge',
        testScores: Object.keys(this.localData.testScores).length + ' Einträge'
      });
    } catch (error) {
      console.error('❌ Fehler beim Laden lokaler Daten:', error);
    }
  }

  // Starte Cloud-Synchronisation
  async startCloudSync() {
    if (!this.userId) return;
    
    try {
      // Sync lokale Daten zur Cloud beim Start
      await this.syncLocalToCloud();
      
      // Setze Realtime Listeners
      this.setupRealtimeListeners();
      
      console.log('☁️ Cloud-Synchronisation gestartet');
    } catch (error) {
      console.error('❌ Fehler beim Starten der Cloud-Synchronisation:', error);
    }
  }

  // Sync lokale Daten zur Cloud
  async syncLocalToCloud() {
    if (!this.isOnline || !this.userId) return;
    
    const batch = writeBatch(db);
    
    try {
      // Sync Progress
      const progressRef = doc(db, 'userProgress', this.userId);
      batch.set(progressRef, {
        data: this.localData.progress,
        lastUpdated: serverTimestamp(),
        deviceInfo: this.currentDevice
      }, { merge: true });
      
      // Sync Test Scores
      const testScoresRef = doc(db, 'userTestScores', this.userId);
      batch.set(testScoresRef, {
        data: this.localData.testScores,
        lastUpdated: serverTimestamp(),
        deviceInfo: this.currentDevice
      }, { merge: true });
      
      await batch.commit();
      console.log('✅ Lokale Daten zur Cloud synchronisiert');
    } catch (error) {
      console.error('❌ Fehler beim Sync zur Cloud:', error);
      // Füge zur Sync-Queue hinzu für späteren Retry
      this.addToSyncQueue('syncLocalToCloud');
    }
  }

  // Setze Realtime Listeners für Cloud-Updates
  setupRealtimeListeners() {
    if (!this.userId) return;
    
    // Progress Listener
    const progressRef = doc(db, 'userProgress', this.userId);
    this.unsubscribeProgress = onSnapshot(progressRef, (doc) => {
      if (doc.exists()) {
        const cloudData = doc.data();
        this.handleCloudUpdate('progress', cloudData.data);
      }
    }, (error) => {
      console.error('❌ Progress Listener Fehler:', error);
    });
    
    // Test Scores Listener
    const testScoresRef = doc(db, 'userTestScores', this.userId);
    this.unsubscribeTestScores = onSnapshot(testScoresRef, (doc) => {
      if (doc.exists()) {
        const cloudData = doc.data();
        this.handleCloudUpdate('testScores', cloudData.data);
      }
    }, (error) => {
      console.error('❌ Test Scores Listener Fehler:', error);
    });
  }

  // Handle Cloud Updates
  handleCloudUpdate(type, cloudData) {
    if (!cloudData) return;
    
    // Merge Cloud-Daten mit lokalen Daten
    if (type === 'progress') {
      // Intelligente Merge-Strategie für Progress
      const mergedProgress = this.mergeProgress(this.localData.progress, cloudData);
      this.localData.progress = mergedProgress;
      localStorage.setItem('goetheA1Progress', JSON.stringify(mergedProgress));
      
      // Dispatche Event für UI-Update
      window.dispatchEvent(new CustomEvent('firebaseSyncUpdate', {
        detail: { type: 'progressUpdated', data: mergedProgress }
      }));
    } else if (type === 'testScores') {
      // Merge Test Scores (neueste Scores gewinnen)
      const mergedScores = this.mergeTestScores(this.localData.testScores, cloudData);
      this.localData.testScores = mergedScores;
      localStorage.setItem('goetheA1LastTestScores', JSON.stringify(mergedScores));
      
      // Dispatche Event für UI-Update
      window.dispatchEvent(new CustomEvent('firebaseSyncUpdate', {
        detail: { type: 'testScoresUpdated', data: mergedScores }
      }));
    }
  }

  // Intelligente Progress-Merge-Funktion
  mergeProgress(localProgress, cloudProgress) {
    const merged = { ...localProgress };
    
    for (const gruppe in cloudProgress) {
      if (!merged[gruppe]) {
        merged[gruppe] = {};
      }
      
      for (const mode in cloudProgress[gruppe]) {
        if (!merged[gruppe][mode]) {
          merged[gruppe][mode] = [];
        }
        
        // Kombiniere Arrays und entferne Duplikate
        const localSet = new Set(merged[gruppe][mode]);
        const cloudSet = new Set(cloudProgress[gruppe][mode]);
        const combinedSet = new Set([...localSet, ...cloudSet]);
        merged[gruppe][mode] = Array.from(combinedSet);
      }
    }
    
    return merged;
  }

  // Merge Test Scores (neueste gewinnt)
  mergeTestScores(localScores, cloudScores) {
    const merged = { ...localScores };
    
    for (const testKey in cloudScores) {
      const localScore = merged[testKey];
      const cloudScore = cloudScores[testKey];
      
      // Wenn kein lokaler Score oder Cloud-Score ist neuer
      if (!localScore || 
          (cloudScore.timestamp && localScore.timestamp && cloudScore.timestamp > localScore.timestamp)) {
        merged[testKey] = cloudScore;
      }
    }
    
    return merged;
  }

  // Speichere Progress
  async saveProgress(progressData) {
    this.localData.progress = progressData;
    localStorage.setItem('goetheA1Progress', JSON.stringify(progressData));
    
    if (this.isOnline && this.userId) {
      try {
        const progressRef = doc(db, 'userProgress', this.userId);
        await setDoc(progressRef, {
          data: progressData,
          lastUpdated: serverTimestamp(),
          deviceInfo: this.currentDevice
        }, { merge: true });
        
        console.log('✅ Progress in Cloud gespeichert');
      } catch (error) {
        console.error('❌ Fehler beim Speichern des Progress:', error);
        this.addToSyncQueue('progress', progressData);
      }
    }
  }

  // Speichere Test Scores
  async saveTestScores(testScoresData) {
    this.localData.testScores = testScoresData;
    localStorage.setItem('goetheA1LastTestScores', JSON.stringify(testScoresData));
    
    if (this.isOnline && this.userId) {
      try {
        const testScoresRef = doc(db, 'userTestScores', this.userId);
        await setDoc(testScoresRef, {
          data: testScoresData,
          lastUpdated: serverTimestamp(),
          deviceInfo: this.currentDevice
        }, { merge: true });
        
        console.log('✅ Test Scores in Cloud gespeichert');
      } catch (error) {
        console.error('❌ Fehler beim Speichern der Test Scores:', error);
        this.addToSyncQueue('testScores', testScoresData);
      }
    }
  }

  // Handle Connection Changes
  async handleConnectionChange(isOnline) {
    if (isOnline) {
      console.log('🌐 Wieder online - starte Sync...');
      await this.processSyncQueue();
    } else {
      console.log('📵 Offline - Daten werden lokal gespeichert');
    }
  }

  // Sync Queue Management
  addToSyncQueue(type, data = null) {
    this.syncQueue.push({
      type,
      data,
      timestamp: Date.now()
    });
  }

  async processSyncQueue() {
    if (this.syncQueue.length === 0) return;
    
    console.log(`📤 Verarbeite ${this.syncQueue.length} ausstehende Sync-Operationen...`);
    
    const processedItems = [];
    
    for (const item of this.syncQueue) {
      try {
        switch (item.type) {
          case 'progress':
            await this.saveProgress(item.data);
            break;
          case 'testScores':
            await this.saveTestScores(item.data);
            break;
          case 'syncLocalToCloud':
            await this.syncLocalToCloud();
            break;
        }
        processedItems.push(item);
      } catch (error) {
        console.error(`❌ Fehler beim Verarbeiten von ${item.type}:`, error);
      }
    }
    
    // Entferne erfolgreich verarbeitete Items
    this.syncQueue = this.syncQueue.filter(item => !processedItems.includes(item));
  }

  // Device Sync Methods
  async createDeviceSyncSession() {
    if (!this.userId) return null;
    
    try {
      const syncCode = this.generateSyncCode();
      const sessionRef = doc(db, 'deviceSyncSessions', syncCode);
      
      await setDoc(sessionRef, {
        createdBy: this.userId,
        createdAt: serverTimestamp(),
        deviceInfo: this.currentDevice,
        status: 'waiting',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000) // 15 Minuten
      });
      
      // Setze Listener für eingehende Verbindungen
      this.listenForSyncConnection(syncCode);
      
      return syncCode;
    } catch (error) {
      console.error('❌ Fehler beim Erstellen der Sync-Session:', error);
      return null;
    }
  }

  generateSyncCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  listenForSyncConnection(syncCode) {
    const sessionRef = doc(db, 'deviceSyncSessions', syncCode);
    
    const unsubscribe = onSnapshot(sessionRef, async (doc) => {
      if (doc.exists()) {
        const session = doc.data();
        
        if (session.status === 'connected' && session.connectedBy !== this.userId) {
          console.log('✅ Gerät verbunden! Starte bidirektionale Synchronisation...');
          
          // Sync Daten zum verbundenen Gerät
          await this.syncToConnectedDevice(session.connectedBy);
          
          // Cleanup
          unsubscribe();
          await this.cleanupSyncSession(syncCode);
        }
      }
    });
    
    // Speichere Unsubscribe für Cleanup
    this.syncCodes.set(syncCode, unsubscribe);
    
    // Auto-Cleanup nach 15 Minuten
    setTimeout(() => {
      this.cleanupSyncSession(syncCode);
    }, 15 * 60 * 1000);
  }

  async connectToDevice(syncCode) {
    if (!this.userId) return false;
    
    try {
      const sessionRef = doc(db, 'deviceSyncSessions', syncCode);
      const sessionDoc = await getDoc(sessionRef);
      
      if (!sessionDoc.exists()) {
        throw new Error('Sync-Code nicht gefunden');
      }
      
      const session = sessionDoc.data();
      
      if (session.status !== 'waiting') {
        throw new Error('Sync-Session ist nicht mehr aktiv');
      }
      
      // Markiere als verbunden
      await setDoc(sessionRef, {
        status: 'connected',
        connectedBy: this.userId,
        connectedAt: serverTimestamp(),
        connectedDevice: this.currentDevice
      }, { merge: true });
      
      // Sync Daten vom anderen Gerät
      await this.syncFromDevice(session.createdBy);
      
      return true;
    } catch (error) {
      console.error('❌ Fehler beim Verbinden:', error);
      throw error;
    }
  }

  async syncToConnectedDevice(targetUserId) {
    // Kopiere aktuelle Daten zum Ziel-User
    const batch = writeBatch(db);
    
    const targetProgressRef = doc(db, 'userProgress', targetUserId);
    batch.set(targetProgressRef, {
      data: this.localData.progress,
      lastUpdated: serverTimestamp(),
      syncedFrom: this.userId
    }, { merge: true });
    
    const targetScoresRef = doc(db, 'userTestScores', targetUserId);
    batch.set(targetScoresRef, {
      data: this.localData.testScores,
      lastUpdated: serverTimestamp(),
      syncedFrom: this.userId
    }, { merge: true });
    
    await batch.commit();
    console.log('✅ Daten zum verbundenen Gerät synchronisiert');
  }

  async syncFromDevice(sourceUserId) {
    // Hole Daten vom Quell-User
    const progressDoc = await getDoc(doc(db, 'userProgress', sourceUserId));
    const scoresDoc = await getDoc(doc(db, 'userTestScores', sourceUserId));
    
    if (progressDoc.exists()) {
      this.handleCloudUpdate('progress', progressDoc.data().data);
    }
    
    if (scoresDoc.exists()) {
      this.handleCloudUpdate('testScores', scoresDoc.data().data);
    }
    
    console.log('✅ Daten vom anderen Gerät empfangen');
  }

  async cleanupSyncSession(syncCode) {
    // Entferne Listener
    const unsubscribe = this.syncCodes.get(syncCode);
    if (unsubscribe) {
      unsubscribe();
      this.syncCodes.delete(syncCode);
    }
    
    // Lösche Session aus Firestore
    try {
      await deleteDoc(doc(db, 'deviceSyncSessions', syncCode));
    } catch (error) {
      console.error('Fehler beim Cleanup:', error);
    }
  }

  // Cleanup beim Beenden
  cleanup() {
    if (this.unsubscribeProgress) this.unsubscribeProgress();
    if (this.unsubscribeTestScores) this.unsubscribeTestScores();
    if (this.unsubscribeDeviceSync) this.unsubscribeDeviceSync();
    
    // Cleanup alle Sync-Sessions
    this.syncCodes.forEach((unsubscribe) => unsubscribe());
    this.syncCodes.clear();
  }
}

// Exportiere Singleton-Instanz
export const firebaseSyncService = new FirebaseSyncService();