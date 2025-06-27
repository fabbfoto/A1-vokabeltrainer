// shared/ui/auth-ui.js - FINALE, VOLLSTÄNDIGE VERSION

// Die Klasse wird mit 'export' für andere Dateien verfügbar gemacht.
export class AuthUI {

    constructor(trainerId, uiConfig, authService) {
        this.options = uiConfig;
        this.authService = authService;
        this.syncButton = null;
    }

    renderSyncButton(isLoggedIn, userEmail = null) {
        const container = document.getElementById(this.options.buttonContainerId);
        if (!container) {
            console.error(`AuthUI: Container-Element mit der ID '${this.options.buttonContainerId}' nicht gefunden.`);
            return;
        }

        if (this.syncButton) {
            this.syncButton.remove();
            this.syncButton = null;
        }

        this.syncButton = document.createElement('button');
        this.syncButton.id = 'device-sync-btn';

        if (isLoggedIn) {
            // "Angemeldet"-Zustand mit voller Breite und Deutschland-Farben
            this.syncButton.className = 'col-span-3 rounded-lg py-2 font-semibold text-white cursor-default';
            this.syncButton.innerHTML = `${userEmail || 'Angemeldet'}`; // Ohne Häkchen
            this.syncButton.style.background = 'linear-gradient(to right, #000000, #DD0000, #FFCC00)';
            this.syncButton.disabled = true;
        } else {
            // "Ausgeloggt"-Zustand mit blauem Button
            this.syncButton.className = `${this.options.buttonColumns || ''} rounded-lg py-2 font-semibold transition-colors duration-200`;
            this.syncButton.style.backgroundColor = '#3b82f6';
            this.syncButton.style.color = 'white';
            this.syncButton.innerHTML = '🔄 Geräte synchronisieren';
            this.syncButton.addEventListener('click', () => this.showAuthModal());
        }
        
        container.appendChild(this.syncButton);
    }

    updateUIAfterLogin(user) {
        console.log('[AuthUI] updateUIAfterLogin aufgerufen, zeichne Button neu.');
        this.renderSyncButton(true, user.email);
    }

    updateUIAfterLogout() {
        console.log('[AuthUI] updateUIAfterLogout aufgerufen, zeichne Button neu.');
        this.renderSyncButton(false, null);
    }

    showAuthModal() {
        console.log('[AuthUI] showAuthModal aufgerufen.');
        // Ruft die Login-Logik im AuthService auf.
        this.authService.loginWithGoogle();
    }
}