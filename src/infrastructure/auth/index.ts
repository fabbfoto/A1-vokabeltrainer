// shared/auth/index.ts - FINALE VERSION MIT ALLEN KORREKTEN PFADEN

import { getAuth, onIdTokenChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { app } from './firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase-config';

// KORRIGIERTE PFADE: Die Imports zeigen jetzt auf die Ordner 'services' und 'ui'.
import { AuthService } from '../../services/auth-service';
import { SyncService } from '../../services/sync-service';
import { AuthUI } from '../../ui/components/auth-ui';
import { RankingService } from '../../services/ranking-service';
import { RankingUI } from '../../ui/components/ranking-ui';

interface UIConfig {
    buttonContainerId: string;
    rankingContainerId?: string;
}

interface AuthServices {
    authService: AuthService;
    authUI: AuthUI;
    syncService: SyncService;
    rankingService: RankingService;
    rankingUI: RankingUI;
}

export function initializeAuth(trainerId: string, uiConfig: UIConfig): AuthServices {


    const authService = new AuthService();
    const syncService = new SyncService(trainerId, authService);
    const authUI = new AuthUI(trainerId, uiConfig, authService);
    
    // NEU: Ranking-System initialisieren
    const rankingService = new RankingService(authService);
    const rankingUI = new RankingUI(rankingService, {
        containerId: uiConfig.rankingContainerId || 'ranking-container',
        showUserStats: true,
        showGlobalRankings: true,
        showTopicRankings: true,
        showWeeklyRankings: true
    });

    const auth = getAuth(app);
    onIdTokenChanged(auth, async (user: User | null) => {
        if (user) {
            console.log('🔐 Benutzer angemeldet:', user.email);
            // 1. Starte Echtzeit-Synchronisation
            syncService.startRealtimeSync(user.uid);
            // 2. Lade lokale Daten und synchronisiere sie mit Firebase
            try {
                // Warte, bis Firebase bereit ist
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Lade zuerst Firebase-Daten
                console.log('📥 Lade Fortschritt von Firebase...');
                try {
                    const docPath = `users/${user.uid}/progress/${trainerId}`;
                    const docRef = doc(db, docPath);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const firebaseData = docSnap.data();
                        if (firebaseData.globalProgress) {
                            console.log('✅ Firebase-Daten gefunden, synchronisiere lokal...');
                            localStorage.setItem('trainer-progress', JSON.stringify(firebaseData.globalProgress));
                            // Trigger UI-Update
                            window.dispatchEvent(new CustomEvent('firebase-progress-updated', { 
                                detail: { progress: firebaseData.globalProgress } 
                            }));
                        }
                    } else {
                        // Keine Firebase-Daten, lade lokale Daten hoch
                        const localProgress = localStorage.getItem('trainer-progress');
                        if (localProgress) {
                            console.log('📤 Keine Firebase-Daten gefunden, lade lokale Daten hoch...');
                            const progressData = JSON.parse(localProgress);
                            await syncService.saveProgress(progressData);
                        }
                    }
                } catch (error) {
                    console.error('❌ Fehler beim Laden der Firebase-Daten:', error);
                }
            } catch (error) {
                console.error('❌ Fehler bei der Synchronisation:', error);
            }
            // 3. UI aktualisieren
            authUI.updateUIAfterLogin({ uid: user.uid, email: user.email, displayName: user.displayName });
        } else {
            console.log('🔓 Benutzer abgemeldet');
            syncService.stopRealtimeSync();
            authUI.updateUIAfterLogout();
        }
    });

    // NEU: Ranking-UI global verfügbar machen
    if (typeof window !== 'undefined') {
        (window as any).rankingUI = rankingUI;
    }

    return { authService, authUI, syncService, rankingService, rankingUI };
} 