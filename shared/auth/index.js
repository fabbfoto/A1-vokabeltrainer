// shared/auth/index.js - FINALE VERSION MIT ALLEN KORREKTEN PFADEN

import { getAuth, onIdTokenChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth';
import { app } from './firebase-config';

// KORRIGIERTE PFADE: Die Imports zeigen jetzt auf die Ordner 'services' und 'ui'.
import { AuthService } from '../services/auth-service';
import { SyncService } from '../services/sync-service';
import { AuthUI } from '../ui/auth-ui';

export function initializeAuth(trainerId, uiConfig) {
    console.log('[initializeAuth] Starte die Initialisierung der Shared-Module...');

    const authService = new AuthService();
    const syncService = new SyncService(trainerId, authService);
    const authUI = new AuthUI(trainerId, uiConfig, authService);

    const auth = getAuth(app);
    onIdTokenChanged(auth, (user) => {
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

    return { authService, authUI, syncService };
}