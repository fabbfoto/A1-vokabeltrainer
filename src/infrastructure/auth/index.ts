// shared/auth/index.ts - FINALE VERSION MIT ALLEN KORREKTEN PFADEN

import { getAuth, onIdTokenChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { app } from './firebase-config';

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
                // Warte kurz, damit Firebase bereit ist
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Hole alle lokalen Fortschrittsdaten
                const localProgress = localStorage.getItem('trainer-progress');
                const localWordsToRepeat = localStorage.getItem('trainer-words-to-repeat');
                
                if (localProgress) {
                    console.log('📤 Synchronisiere lokalen Fortschritt nach Firebase...');
                    const progressData = JSON.parse(localProgress);
                    await syncService.saveProgress(progressData);
                    console.log('✅ Fortschritt synchronisiert');
                }
                
                if (localWordsToRepeat) {
                    console.log('📤 Synchronisiere Fehlerwörter nach Firebase...');
                    const errorData = JSON.parse(localWordsToRepeat);
                    await syncService.saveProgress({ wordsToRepeatByMode: errorData });
                    console.log('✅ Fehlerwörter synchronisiert');
                }
                
                // 3. Hole die neuesten Daten von Firebase
                console.log('📥 Hole aktuelle Daten von Firebase...');
                // Der realtime listener kümmert sich darum
                
            } catch (error) {
                console.error('❌ Fehler bei der Synchronisation:', error);
            }
            
            // 4. UI aktualisieren
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