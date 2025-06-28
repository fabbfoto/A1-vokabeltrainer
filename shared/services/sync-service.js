// shared/services/sync-service.js - VOLLSTÄNDIGE VERSION

import { getFirestore, doc, onSnapshot, setDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore';
import { app } from '../auth/firebase-config';

export class SyncService {
    constructor() {
        this.db = getFirestore(app);
        this.unsubscribe = null;
        this.trainerType = 'basis'; // Standardwert, kann später angepasst werden
        this.listeners = []; // Für Benachrichtigungen über Updates
    }

    /**
     * Startet die Echtzeit-Synchronisation für den Fortschritt eines Benutzers.
     * @param {string} userId - Die ID des angemeldeten Benutzers.
     */
    startRealtimeSync(userId) {
        // Beende eine eventuell noch laufende, alte Synchronisation
        this.stopRealtimeSync(); 
        
        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);

        this.unsubscribe = onSnapshot(docRef, (doc) => {
            console.log("Firestore: Daten-Update erhalten.");
            if (doc.exists()) {
                this.notifyListeners('remoteUpdate', doc.data());
            }
        }, (error) => {
            console.error("Fehler in startRealtimeSync:", error);
        });
    }

    /**
     * Beendet die Echtzeit-Synchronisation.
     */
    stopRealtimeSync() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
            console.log("Firestore: Synchronisation gestoppt.");
        }
    }

    /**
     * Speichert den gesamten Lernfortschritt in Firestore.
     * @param {object} progressData - Das Fortschritts-Objekt.
     */
    async saveProgress(progressData) {
        const userId = this.authService?.currentUser?.uid; // Benötigt eine Referenz zum AuthService
        if (!userId) return; // Nicht speichern, wenn kein User da ist

        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);
        try {
            await setDoc(docRef, progressData, { merge: true });
        } catch (error) {
            console.error("Fehler beim Speichern des Fortschritts:", error);
        }
    }

    /**
     * Registriert eine Callback-Funktion, die bei Updates aufgerufen wird.
     * @param {function} callback - Die Funktion, die bei Updates aufgerufen wird.
     */
    onSyncUpdate(callback) {
        this.listeners.push(callback);
    }
    
    /**
     * Benachrichtigt alle registrierten Listener über ein Update.
     * @param {string} type - Die Art des Updates (z.B. 'remoteUpdate').
     * @param {object} data - Die Daten des Updates.
     */
    notifyListeners(type, data) {
        this.listeners.forEach(listener => listener(type, data));
    }
}