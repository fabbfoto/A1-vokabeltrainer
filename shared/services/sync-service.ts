// shared/services/sync-service.ts - VOLLSTÄNDIGE VERSION

// Firebase-Imports aus der Konfiguration
import { app, db } from '../auth/firebase-config';
// @ts-ignore
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import type { AuthService } from './auth-service';
import type { TrainerState, Progress } from '../types/trainer';

interface SyncListener {
    (type: 'remoteUpdate' | 'localUpdate' | 'error', data: any): void;
}

interface ProgressData {
    [key: string]: any;
}

export class SyncService {
    private db: any; // Firebase Firestore instance
    private unsubscribe: any = null;
    private trainerType: string = 'basis'; // Standardwert, kann später angepasst werden
    private listeners: SyncListener[] = []; // Für Benachrichtigungen über Updates
    private authService: AuthService | null = null;

    constructor(trainerId?: string, authService?: AuthService) {
        this.db = db;
        this.trainerType = trainerId || 'basis';
        this.authService = authService || null;
    }

    /**
     * Startet die Echtzeit-Synchronisation für den Fortschritt eines Benutzers.
     * @param userId - Die ID des angemeldeten Benutzers.
     */
    public startRealtimeSync(userId: string): void {
        // Beende eine eventuell noch laufende, alte Synchronisation
        this.stopRealtimeSync(); 
        
        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);

        this.unsubscribe = onSnapshot(docRef, (doc: any) => {
            console.log("Firestore: Daten-Update erhalten.");
            if (doc.exists()) {
                this.notifyListeners('remoteUpdate', doc.data());
            }
        }, (error: any) => {
            console.error("Fehler in startRealtimeSync:", error);
            this.notifyListeners('error', error);
        });
    }

    /**
     * Beendet die Echtzeit-Synchronisation.
     */
    public stopRealtimeSync(): void {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
            console.log("Firestore: Synchronisation gestoppt.");
        }
    }

    /**
     * Speichert den gesamten Lernfortschritt in Firestore.
     * @param progressData - Das Fortschritts-Objekt.
     */
    public async saveProgress(progressData: Partial<UserData>): Promise<void> {
        const userId = this.authService?.currentUser?.id;
        if (!userId) {
            console.warn('Nicht speichern, da kein User angemeldet ist');
            return;
        }

        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);
        try {
            await setDoc(docRef, progressData, { merge: true });
            console.log('Fortschritt erfolgreich in Firestore gespeichert');
        } catch (error) {
            console.error("Fehler beim Speichern des Fortschritts:", error);
            this.notifyListeners('error', error);
        }
    }

    /**
     * Registriert eine Callback-Funktion, die bei Updates aufgerufen wird.
     * @param callback - Die Funktion, die bei Updates aufgerufen wird.
     */
    public onSyncUpdate(callback: SyncListener): void {
        this.listeners.push(callback);
    }
    
    /**
     * Benachrichtigt alle registrierten Listener über ein Update.
     * @param type - Die Art des Updates (z.B. 'remoteUpdate').
     * @param data - Die Daten des Updates.
     */
    private notifyListeners(type: 'remoteUpdate' | 'localUpdate' | 'error', data: any): void {
        this.listeners.forEach(listener => listener(type, data));
    }

    /**
     * Entfernt alle registrierten Listener.
     */
    public clearListeners(): void {
        this.listeners = [];
    }

    /**
     * Gibt den aktuellen Trainer-Typ zurück.
     */
    public getTrainerType(): string {
        return this.trainerType;
    }

    /**
     * Setzt den Trainer-Typ.
     * @param trainerType - Der neue Trainer-Typ.
     */
    public setTrainerType(trainerType: string): void {
        this.trainerType = trainerType;
    }
} 