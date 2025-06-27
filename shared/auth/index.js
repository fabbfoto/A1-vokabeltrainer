// shared/auth/index.js

import { getAuth, onIdTokenChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { app } from './firebase-config.js'; // Stellt sicher, dass 'app' hier importiert wird

import { AuthService } from './auth-service.js';
import { SyncService } from './sync-service.js';
import { AuthUI } from './auth-ui.js';


export function initializeAuth(trainerId, uiConfig) {
    console.log('[initializeAuth] Starte die Initialisierung der Shared-Module...');

    // 1. Erstelle Instanzen aller Services
    const authService = new AuthService();
    const syncService = new SyncService(trainerId, authService); // Pass authService to SyncService
    const authUI = new AuthUI(uiConfig, authService); // authUI benötigt den authService

    // 2. Erstelle den zentralen Auth-Listener als "Dirigent"
    const auth = getAuth(app);
    onIdTokenChanged(auth, (user) => {
        authService.currentUser = user; // Keep authService's state in sync

        if (user) {
            // Wenn ein User eingeloggt ist (oder sein Token erneuert wurde)...
            console.log(`[Auth Listener] User ist eingeloggt: ${user.uid}. Starte Echtzeit-Synchronisation.`);
            syncService.startRealtimeSync(user.uid);
            authUI.updateUIAfterLogin(user);

        } else {
            // Wenn kein User (mehr) eingeloggt ist...
            console.log('[Auth Listener] User ist ausgeloggt. Stoppe Synchronisation.');
            syncService.stopRealtimeSync();
            authUI.updateUIAfterLogout();
        }
    });

    // 3. Gib die Service-Instanzen zurück. Der Listener kümmert sich um den Start.
    return {
        authService,
        authUI,
        syncService
    };
}