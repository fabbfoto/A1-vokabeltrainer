// shared/auth/index.js - KORRIGIERTE VERSION

import { getAuth, onIdTokenChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { app } from './firebase-config.js';

import { AuthService } from './auth-service.js';
import { SyncService } from './sync-service.js';
import { AuthUI } from './auth-ui.js';

export function initializeAuth(trainerId, uiConfig) {
    console.log('[initializeAuth] Starte die Initialisierung der Shared-Module...');

    // 1. Erstelle Instanzen aller Services
    const authService = new AuthService();
    const syncService = new SyncService(trainerId, authService); // SyncService braucht trainerId und authService
    
    // HIER WAR DER FEHLER: Die Reihenfolge von uiConfig und authService war vertauscht.
    // Jetzt ist sie KORREKT.
    const authUI = new AuthUI(trainerId, uiConfig, authService);

    // 2. Erstelle den zentralen Auth-Listener
    const auth = getAuth(app);
    onIdTokenChanged(auth, (user) => {
        if (user) {
            console.log(`[Auth Listener] User ist eingeloggt: ${user.uid}. Starte Echtzeit-Synchronisation.`);
            syncService.startRealtimeSync(user.uid);
            
            // WICHTIGE ÄNDERUNG: Wir übergeben das 'user'-Objekt direkt an die UI.
            authUI.updateUIAfterLogin(user);

        } else {
            console.log('[Auth Listener] User ist ausgeloggt. Stoppe Synchronisation.');
            syncService.stopRealtimeSync();
            
            // Hier ist kein 'user'-Objekt nötig.
            authUI.updateUIAfterLogout();
        }
    });

    // 3. Gib die Service-Instanzen zurück
    return { authService, authUI, syncService };
}
