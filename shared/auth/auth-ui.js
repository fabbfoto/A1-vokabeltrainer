// shared/auth/auth-ui.js - FINALE VERSION

export class AuthUI {

    constructor(trainerId, uiConfig, authService) {
        this.options = uiConfig;
        this.authService = authService;
        this.syncButton = null;
        this.initialized = false; 

        // Initialisierung direkt im Konstruktor aufrufen, um den Button sofort zu rendern
        this.initialize();
    }

    initialize() {
        // Sync Button erstellen/aktualisieren basierend auf dem aktuellen Auth-Status
        // Beim Initialisieren fragen wir den Auth-Service direkt nach dem Status
        this.renderSyncButton(this.authService.isLoggedIn(), this.authService.getUserEmail());

        // Modal Event Listeners einrichten
        this.setupModalListeners();
        
        this.initialized = true;
    }

    // Stellt den korrekten Zustand des Sync-Buttons her (wird angezeigt oder nicht)
    renderSyncButton(isLoggedIn, userEmail = null) {
        const container = document.getElementById(this.options.buttonContainerId);
        if (!container) {
            console.error(`AuthUI: Container-Element mit der ID '${this.options.buttonContainerId}' nicht gefunden.`);
            return;
        }

        // Entferne alten Button, falls er noch existiert
        if (this.syncButton) {
            this.syncButton.remove();
            this.syncButton = null;
        }

        this.syncButton = document.createElement('button');
        this.syncButton.id = 'device-sync-btn';

        if (isLoggedIn) {
            // =================================================================
            // ALLERLETZTE ANPASSUNG (BREITE & HÄKCHEN)
            // =================================================================
            
            // 1. Korrekte Breite im Grid: Wir verwenden 'col-span-3', um alle 3 Spalten einzunehmen.
            this.syncButton.className = 'col-span-3 rounded-lg py-2 font-semibold text-white cursor-default';
            
            // 2. Kein Häkchen: Das '✓' wurde aus dem Text entfernt.
            this.syncButton.innerHTML = `${userEmail || 'Angemeldet'}`;
            
            this.syncButton.style.background = 'linear-gradient(to right, #000000, #DD0000, #FFCC00)';
            this.syncButton.disabled = true;

        } else {
            // Logged-out-Zustand (unverändert)
            this.syncButton.className = `${this.options.buttonColumns || ''} rounded-lg py-2 font-semibold transition-colors duration-200`;
            this.syncButton.style.backgroundColor = '#3b82f6';
            this.syncButton.style.color = 'white';
            this.syncButton.innerHTML = '🔄 Geräte synchronisieren';
            this.syncButton.addEventListener('click', () => this.showAuthModal());
        }
        
        container.appendChild(this.syncButton);
    }

    // updateUIAfterLogin leitet die Benutzer-Informationen jetzt weiter.
    updateUIAfterLogin(user) {
        console.log('[AuthUI] updateUIAfterLogin aufgerufen, zeichne Button neu.');
        this.renderSyncButton(true, user.email);
    }

    // updateUIAfterLogout sagt klar, dass der User ausgeloggt ist.
    updateUIAfterLogout() {
        console.log('[AuthUI] updateUIAfterLogout aufgerufen, zeichne Button neu.');
        this.renderSyncButton(false, null);
    }

    // Richtet alle Event-Listener für das Authentifizierungs-Modal ein.
    setupModalListeners() {
        const authModalOverlay = document.getElementById('auth-modal-overlay');
        const modalCloseBtn = document.querySelector('.close-modal-btn'); // Korrigiert auf die Klasse im HTML
        const googleAuthBtn = document.getElementById('google-signin-btn'); // Korrigiert auf die ID im HTML

        if (!authModalOverlay) {
            console.warn('AuthUI: Auth-Modal-Overlay nicht gefunden. Modal-Funktionalität eingeschränkt.');
            return;
        }

        // Event Listener für den Close-Button
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => this.hideAuthModal());
        } else {
            console.warn('AuthUI: Modal-Close-Button (.close-modal-btn) nicht gefunden.');
        }

        // Event Listener für Klick außerhalb des Modals
        authModalOverlay.addEventListener('click', (event) => {
            if (event.target === authModalOverlay) {
                this.hideAuthModal();
            }
        });

        // Event Listener für Google Login Button
        if (googleAuthBtn) {
            googleAuthBtn.addEventListener('click', async () => {
                const result = await this.authService.loginWithGoogle();
                if (result.success) {
                    console.log('Google Login erfolgreich:', result.message);
                    this.hideAuthModal();
                    // updateUIAfterLogin wird durch den onIdTokenChanged Listener ausgelöst
                } else {
                    if (result.message) {
                        console.error('Google Login fehlgeschlagen:', result.message);
                        // Hier könnte man eine Fehlermeldung in der UI anzeigen
                    }
                }
            });
        } else {
            console.warn('AuthUI: Google-Signin-Button (#google-signin-btn) nicht gefunden.');
        }

        // Optional: Email/Password Formular-Logik, falls vorhanden
        const emailForm = document.getElementById('email-form');
        if (emailForm) {
            emailForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const emailInput = document.getElementById('email-input');
                const email = emailInput.value;
                // Hier würde die Logik für den E-Mail-Link-Login aufgerufen
                console.log('Email-Login angefordert für:', email);
                alert('E-Mail-Login ist noch nicht implementiert. Bitte nutze Google.');
            });
        }
    }

    showAuthModal() {
        console.log('[AuthUI] showAuthModal aufgerufen.');
        const authModalOverlay = document.getElementById('auth-modal-overlay');
        if (authModalOverlay) {
            authModalOverlay.classList.remove('hidden');
            authModalOverlay.style.display = 'flex'; // Sicherstellen, dass es sichtbar ist
        }
    }

    hideAuthModal() {
        console.log('[AuthUI] hideAuthModal aufgerufen.');
        const authModalOverlay = document.getElementById('auth-modal-overlay');
        if (authModalOverlay) {
            authModalOverlay.classList.add('hidden');
            authModalOverlay.style.display = 'none'; // Sicherstellen, dass es versteckt ist
        }
    }
}
