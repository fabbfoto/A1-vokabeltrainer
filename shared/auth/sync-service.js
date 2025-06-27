// shared/auth/sync-service.js
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc,
    onSnapshot,
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
import { app } from './firebase-config.js';

export class SyncService {
    constructor(trainerType = 'basis', authService) {
        this.db = getFirestore(app);
        this.trainerType = trainerType; // 'basis' oder 'themen'
        this.authService = authService; // AuthService Instanz speichern
        this.syncListeners = [];
        this.unsubscribe = null;
    }

    // Realtime Sync starten
    startRealtimeSync(userId) {
        const docPath = `users/${userId}/progress/${this.trainerType}`;
        
        this.unsubscribe = onSnapshot(
            doc(this.db, docPath),
            (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    this.notifyListeners('remoteUpdate', data);
                }
            },
            (error) => {
                console.error('Sync-Fehler:', error);
            }
        );
    }

    // Realtime Sync stoppen
    stopRealtimeSync() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
            console.log('☁️ Realtime-Sync gestoppt.');
        }
    }

    // Progress speichern
    async saveProgress(progressData) {
        const user = this.authService.currentUser;
        if (!user) {
            console.warn('Kein User eingeloggt - Progress nur lokal gespeichert');
            return { success: false, reason: 'not_logged_in' };
        }

        try {
            const docPath = `users/${user.uid}/progress/${this.trainerType}`;
            
            await setDoc(doc(this.db, docPath), {
                ...progressData,
                lastUpdated: serverTimestamp(),
                deviceInfo: this.getDeviceInfo()
            }, { merge: true });

            return { success: true };
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
            return { success: false, error };
        }
    }

    // Progress laden
    async loadProgress() {
        const user = this.authService.currentUser;
        if (!user) return null;

        try {
            const docPath = `users/${user.uid}/progress/${this.trainerType}`;
            const docSnap = await getDoc(doc(this.db, docPath));
            
            if (docSnap.exists()) {
                return docSnap.data();
            }
            return null;
        } catch (error) {
            console.error('Fehler beim Laden:', error);
            return null;
        }
    }

    // Test Scores speichern (Basis-Trainer spezifisch)
    async saveTestScores(scores) {
        if (this.trainerType !== 'basis') return;
        
        const user = this.authService.currentUser;
        if (!user) return { success: false };

        try {
            const docPath = `users/${user.uid}/testScores/basis`;
            
            await setDoc(doc(this.db, docPath), {
                scores,
                lastUpdated: serverTimestamp()
            });

            return { success: true };
        } catch (error) {
            console.error('Fehler beim Speichern der Test-Scores:', error);
            return { success: false, error };
        }
    }

    // Sync Listener hinzufügen
    onSyncUpdate(callback) {
        this.syncListeners.push(callback);
    }

    // Alle Listener benachrichtigen
    notifyListeners(type, data) {
        this.syncListeners.forEach(callback => callback(type, data));
    }

    // Device Info für Sync
    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            timestamp: new Date().toISOString()
        };
    }
}