// shared/auth/index.ts - FINALE VERSION MIT ALLEN KORREKTEN PFADEN

// @ts-ignore
import { getAuth, onIdTokenChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { app } from './firebase-config';

// KORRIGIERTE PFADE: Die Imports zeigen jetzt auf die Ordner 'services' und 'ui'.
import { AuthService } from '../services/auth-service';
import { SyncService } from '../services/sync-service';
import { AuthUI } from '../ui/auth-ui';
import { RankingService } from '../services/ranking-service';
import { RankingUI } from '../ui/ranking-ui';

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
    console.log('[initializeAuth] Starte die Initialisierung der Shared-Module...');

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
    onIdTokenChanged(auth, (user: any) => {
        if (user) {
            console.log(`[Auth Listener] User ist eingeloggt: ${user.uid}. Starte Echtzeit-Synchronisation.`);
            syncService.startRealtimeSync(user.uid);
            authUI.updateUIAfterLogin(user);
        } else {
            console.log('[Auth Listener] User ist ausgeloggt. Stoppe Synchronisation.');
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