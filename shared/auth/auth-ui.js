// shared/auth/auth-ui.js

export class AuthUI {
    constructor(options = {}, authService) {
        this.authService = authService;
        // Konfigurierbare Optionen
        this.options = {
            buttonContainerId: options.buttonContainerId || 'wortgruppen-buttons',
            buttonColumns: options.buttonColumns || 'col-span-3',
            showEmailInButton: options.showEmailInButton || false,
            hideButtonWhenLoggedIn: options.hideButtonWhenLoggedIn || true,
            ...options
        };
        this.modal = null;
        this.syncButton = null;

        this.initialize();
    }

    initialize() {
        // Sync Button erstellen
        this.createSyncButton();

        // Modal Event Listeners
        this.setupModalListeners();
        
        this.initialized = true;
    }

    // Sync Button erstellen/aktualisieren
    createSyncButton() {
        const container = document.getElementById(this.options.buttonContainerId);
        if (!container) return;

        // Entferne alten Button falls vorhanden
        if (this.syncButton) {
            this.syncButton.remove();
        }

        // Nur Button erstellen wenn nicht eingeloggt
        if (!this.authService.isLoggedIn()) {
            this.syncButton = document.createElement('button');
            this.syncButton.id = 'device-sync-btn';
            this.syncButton.className = `${this.options.buttonColumns} rounded-lg py-2 font-semibold transition-colors duration-200`;
            this.syncButton.style.backgroundColor = '#3b82f6';
            this.syncButton.style.color = 'white';
            this.syncButton.innerHTML = '🔄 Geräte synchronisieren';
            
            this.syncButton.addEventListener('click', () => {
                this.showAuthModal();
            });
            
            container.appendChild(this.syncButton);
        }
    }

    // Wird vom zentralen Listener in index.js aufgerufen
    updateUIAfterLogin(user) {
        if (!this.syncButton) return;

        if (this.options.hideButtonWhenLoggedIn) {
            this.syncButton.remove();
            this.syncButton = null;
        } else if (this.options.showEmailInButton) {
            this.syncButton.innerHTML = `✓ ${user.email || 'Angemeldet'}`;
            this.syncButton.style.backgroundColor = '#10b981';
            this.syncButton.disabled = true;
        }
    }

    // Wird vom zentralen Listener in index.js aufgerufen
    updateUIAfterLogout() {
        this.createSyncButton();
    }

    // Auth Modal anzeigen
    showAuthModal() {
        if (this.authService.isLoggedIn()) {
            alert(`Sie sind bereits als ${this.authService.getUserEmail()} angemeldet!`);
            return;
        }

        this.modal = document.getElementById('auth-modal-overlay');
        if (this.modal) {
            this.modal.classList.remove('hidden');
            this.modal.classList.add('visible');
        }
    }

    // Modal schließen
    hideAuthModal() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            this.modal.classList.remove('visible');
        }
    }

    // Modal Event Listeners
    setupModalListeners() {
        // Close Button
        const closeBtn = document.querySelector('.close-modal-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hideAuthModal();
            });
        }

        // Google Login Button
        const googleBtn = document.getElementById('google-signin-btn');
        if (googleBtn) {
            googleBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                
                const result = await this.authService.loginWithGoogle();
                
                if (result.success) {
                    this.hideAuthModal();
                } else if (result.message) {
                    alert(result.message);
                }
            });
        }

        // Klick außerhalb des Modals
        const modalOverlay = document.getElementById('auth-modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.hideAuthModal();
                }
            });
        }
    }
}