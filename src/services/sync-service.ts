// shared/services/sync-service.ts - VOLLSTÄNDIGE VERSION MIT VOLLER TYPSICHERHEIT

// Firebase-Imports aus der Konfiguration
import { app, db } from '../infrastructure/auth/firebase-config';
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import type { Firestore, Unsubscribe, DocumentSnapshot, FirestoreError } from 'firebase/firestore';
import type { AuthService } from './auth-service';
import type { TrainerState, Progress, UserData } from '../core/types/trainer';

// ========== TYPED INTERFACES ==========
export type SyncEventType = 'remoteUpdate' | 'localUpdate' | 'error';

export interface SyncEvent {
    type: SyncEventType;
    data: RemoteUpdateData | LocalUpdateData | ErrorData;
    timestamp: Date;
}

export interface RemoteUpdateData {
    progress: UserData;
    lastModified: Date;
    userId: string;
}

export interface LocalUpdateData {
    progress: Partial<UserData>;
    userId: string;
}

export interface ErrorData {
    error: string;
    code?: string;
    details?: unknown;
}

export interface SyncListener {
    (event: SyncEvent): void;
}

export interface ProgressData extends Partial<UserData> {
    lastSync?: Date;
    version?: string;
}

export interface SyncStatus {
    isConnected: boolean;
    lastSync: Date | null;
    pendingChanges: number;
    errors: ErrorData[];
}

// ========== SYNC SERVICE MIT VOLLER TYPSICHERHEIT ==========
export class SyncService {
    private db: Firestore;
    private unsubscribe: Unsubscribe | null = null;
    private trainerType: string = 'basis';
    private listeners: SyncListener[] = [];
    private authService: AuthService | null = null;
    private syncStatus: SyncStatus = {
        isConnected: false,
        lastSync: null,
        pendingChanges: 0,
        errors: []
    };

    constructor(trainerId?: string, authService?: AuthService) {
        this.db = db;
        this.trainerType = trainerId || 'basis';
        this.authService = authService || null;
    }

    /**
     * Startet die Echtzeit-Synchronisation für den Fortschritt eines Benutzers.
     * @param userId - Die ID des angemeldeten Benutzers.
     */
    public async startRealtimeSync(userId: string): Promise<void> {
        // Beende eine eventuell noch laufende, alte Synchronisation
        this.stopRealtimeSync(); 
        
        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);

        this.unsubscribe = onSnapshot(docRef, 
            (doc: DocumentSnapshot) => {
        
                this.syncStatus.isConnected = true;
                this.syncStatus.lastSync = new Date();
                
                if (doc.exists()) {
                    const data = doc.data() as ProgressData;
                    const remoteUpdate: RemoteUpdateData = {
                        progress: data as UserData,
                        lastModified: data.lastSync ? new Date(data.lastSync) : new Date(),
                        userId: userId
                    };
                    
                    this.notifyListeners({
                        type: 'remoteUpdate',
                        data: remoteUpdate,
                        timestamp: new Date()
                    });
                }
            }, 
            (error: FirestoreError) => {
                console.error("❌ Fehler in startRealtimeSync:", error);
                this.syncStatus.isConnected = false;
                this.syncStatus.errors.push({
                    error: error.message,
                    code: error.code,
                    details: error
                });
                
                this.notifyListeners({
                    type: 'error',
                    data: {
                        error: error.message,
                        code: error.code,
                        details: error
                    },
                    timestamp: new Date()
                });
            }
        );

        // Initiale Synchronisation beim Start
        console.log('🔄 Starte initiale Synchronisation...');
        try {
            const initialDoc = await getDoc(docRef);
            if (initialDoc.exists()) {
                const data = initialDoc.data() as ProgressData;
                console.log('📥 Firebase-Daten gefunden, aktualisiere lokal...');
                // Speichere Firebase-Daten lokal
                if (data) {
                    localStorage.setItem('trainer-progress', JSON.stringify(data));
                }
            } else {
                console.log('📤 Keine Firebase-Daten gefunden');
            }
        } catch (error) {
            console.error('❌ Fehler bei initialer Synchronisation:', error);
        }
    }

    /**
     * Beendet die Echtzeit-Synchronisation.
     */
    public stopRealtimeSync(): void {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
            this.syncStatus.isConnected = false;
    
        }
    }

    /**
     * Speichert den gesamten Lernfortschritt in Firestore.
     * @param progressData - Das Fortschritts-Objekt.
     */
    public async saveProgress(progressData: ProgressData): Promise<void> {
        const userId = this.authService?.getUserId();
        if (!userId) {
            console.warn('⚠️ Nicht speichern, da kein User angemeldet ist');
            return;
        }

        const docPath = `users/${userId}/progress/${this.trainerType}`;
        const docRef = doc(this.db, docPath);
        
        const dataToSave: ProgressData = {
            ...progressData,
            lastSync: new Date(),
            version: '1.0'
        };
        
        try {
            await setDoc(docRef, dataToSave, { merge: true });
    
            
            this.notifyListeners({
                type: 'localUpdate',
                data: {
                    progress: progressData,
                    userId: userId
                },
                timestamp: new Date()
            });
        } catch (error: unknown) {
            const errorData: ErrorData = {
                error: error instanceof Error ? error.message : 'Unbekannter Fehler',
                details: error
            };
            
            console.error("❌ Fehler beim Speichern des Fortschritts:", error);
            this.syncStatus.errors.push(errorData);
            
            this.notifyListeners({
                type: 'error',
                data: errorData,
                timestamp: new Date()
            });
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
     * @param event - Das Sync-Event mit Typ und Daten.
     */
    private notifyListeners(event: SyncEvent): void {
        this.listeners.forEach(listener => listener(event));
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

    /**
     * Gibt den aktuellen Sync-Status zurück.
     */
    public getSyncStatus(): SyncStatus {
        return { ...this.syncStatus };
    }

    /**
     * Löscht alle gespeicherten Fehler.
     */
    public clearErrors(): void {
        this.syncStatus.errors = [];
    }
} 