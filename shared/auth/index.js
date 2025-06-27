// shared/auth/index.js
// Zentrale Export-Datei für alle Auth-Module

export { authService } from './auth-service.js';
export { AuthUI } from './auth-ui.js';
export { createSyncService } from './sync-service.js';

// Convenience Funktion für einfache Initialisierung
export async function initializeAuth(trainerType = 'basis', options = {}) {
    const { authService } = await import('./auth-service.js');
    const { AuthUI } = await import('./auth-ui.js');
    const { createSyncService } = await import('./sync-service.js');
    
    // Auth UI initialisieren
    const authUI = new AuthUI(options);
    await authUI.initialize();
    
    // Sync Service initialisieren
    const syncService = createSyncService(trainerType);
    syncService.initialize();
    
    return {
        authService,
        authUI,
        syncService
    };
}