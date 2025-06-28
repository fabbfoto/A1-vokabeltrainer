// shared/ui/auth-ui.js - Perfekte Event-basierte Version

export class AuthUI {
    constructor(trainerId, uiConfig, authService) {
        this.options = uiConfig;
        this.authService = authService;
        this.syncButton = null;
        this.isVisible = true;
        this.boundNavigationHandler = null;
        
        // Setup Event-Listener wenn konfiguriert
        this.setupNavigationListener();
    }
    
    setupNavigationListener() {
        // Nur wenn hideOnNavigation aktiviert ist
        if (this.options.hideOnNavigation) {
            // Speichere gebundene Funktion für späteres removeEventListener
            this.boundNavigationHandler = this.handleNavigationChange.bind(this);
            window.addEventListener('navigationChanged', this.boundNavigationHandler);
        }
    }
    
    handleNavigationChange(event) {
        // Prüfe ob wir auf der Root-Seite sind
        const isRoot = event.detail && event.detail.isRoot;
        
        if (isRoot) {
            this.show();
        } else {
            this.hide();
        }
    }
    
    hide() {
        this.isVisible = false;
        if (this.syncButton) {
            this.syncButton.style.display = 'none';
        }
    }
    
    show() {
        this.isVisible = true;
        if (this.syncButton) {
            this.syncButton.style.display = '';
        }
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
        
        // Respektiere den Sichtbarkeitsstatus
        if (!this.isVisible) {
            this.syncButton.style.display = 'none';
        }

        if (isLoggedIn) {
            let loggedInClasses = 'rounded-lg py-2 px-4 font-semibold text-white cursor-default';
            if (this.options.buttonClasses && this.options.buttonClasses.loggedIn) {
                loggedInClasses = this.options.buttonClasses.loggedIn;
            }
            
            this.syncButton.className = loggedInClasses;
            this.syncButton.innerHTML = `${userEmail || 'Angemeldet'}`;
            this.syncButton.style.background = 'linear-gradient(to right, #000000, #DD0000, #FFCC00)';
            this.syncButton.disabled = true;
        } else {
            let loggedOutClasses = 'rounded-lg py-2 px-4 font-semibold transition-colors duration-200';
            if (this.options.buttonClasses && this.options.buttonClasses.loggedOut) {
                loggedOutClasses = this.options.buttonClasses.loggedOut;
            }
            
            this.syncButton.className = loggedOutClasses;
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
        this.authService.loginWithGoogle();
    }
    
    // Cleanup-Methode für Event-Listener
    destroy() {
        if (this.boundNavigationHandler) {
            window.removeEventListener('navigationChanged', this.boundNavigationHandler);
            this.boundNavigationHandler = null;
        }
        
        if (this.syncButton) {
            this.syncButton.remove();
            this.syncButton = null;
        }
    }
}