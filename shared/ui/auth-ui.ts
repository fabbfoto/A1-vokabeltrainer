// shared/ui/auth-ui.ts - Perfekte Event-basierte Version

import type { AuthService } from '../services/auth-service';
import type { TrainerState } from '../types/trainer';

interface UIConfig {
    buttonContainerId: string;
    hideOnNavigation?: boolean;
    buttonClasses?: {
        loggedIn?: string;
        loggedOut?: string;
    };
}

interface NavigationEvent extends CustomEvent {
    detail: {
        isRoot: boolean;
    };
}

export class AuthUI {
    private options: UIConfig;
    private authService: AuthService;
    private syncButton: HTMLButtonElement | null = null;
    private isVisible: boolean = true;
    private boundNavigationHandler: ((event: NavigationEvent) => void) | null = null;
    
    constructor(trainerId: string, uiConfig: UIConfig, authService: AuthService) {
        this.options = uiConfig;
        this.authService = authService;
        
        // Setup Event-Listener wenn konfiguriert
        this.setupNavigationListener();
    }
    
    private setupNavigationListener(): void {
        // Nur wenn hideOnNavigation aktiviert ist
        if (this.options.hideOnNavigation) {
            // Speichere gebundene Funktion für späteres removeEventListener
            this.boundNavigationHandler = this.handleNavigationChange.bind(this);
            window.addEventListener('navigationChanged', this.boundNavigationHandler as EventListener);
        }
    }
    
    private handleNavigationChange(event: NavigationEvent): void {
        // Prüfe ob wir auf der Root-Seite sind
        const isRoot = event.detail && event.detail.isRoot;
        
        if (isRoot) {
            this.show();
        } else {
            this.hide();
        }
    }
    
    public hide(): void {
        this.isVisible = false;
        if (this.syncButton) {
            this.syncButton.style.display = 'none';
        }
    }
    
    public show(): void {
        this.isVisible = true;
        if (this.syncButton) {
            this.syncButton.style.display = '';
        }
    }
    
    public renderSyncButton(isLoggedIn: boolean, userEmail: string | null = null): void {
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
            let loggedInClasses = 'rounded-lg py-2 px-4 font-semibold text-white transition-colors duration-200';
            if (this.options.buttonClasses && this.options.buttonClasses.loggedIn) {
                loggedInClasses = this.options.buttonClasses.loggedIn;
            }
            
            this.syncButton.className = loggedInClasses;
            this.syncButton.innerHTML = `${userEmail || 'Angemeldet'} (Klick zum Abmelden)`;
            this.syncButton.style.background = 'linear-gradient(to right, #000000, #DD0000, #FFCC00)';
            this.syncButton.style.cursor = 'pointer';
            this.syncButton.addEventListener('click', () => this.authService.logout());
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

    public updateUIAfterLogin(user: TrainerState): void {
        console.log('[AuthUI] updateUIAfterLogin aufgerufen, zeichne Button neu.');
        this.renderSyncButton(true, user.email);
    }

    public updateUIAfterLogout(): void {
        console.log('[AuthUI] updateUIAfterLogout aufgerufen, zeichne Button neu.');
        this.renderSyncButton(false, null);
    }

    public showAuthModal(): void {
        console.log('[AuthUI] showAuthModal aufgerufen.');
        this.authService.loginWithGoogle();
    }
    
    // Cleanup-Methode für Event-Listener
    public destroy(): void {
        if (this.boundNavigationHandler) {
            window.removeEventListener('navigationChanged', this.boundNavigationHandler as EventListener);
            this.boundNavigationHandler = null;
        }
        
        if (this.syncButton) {
            this.syncButton.remove();
            this.syncButton = null;
        }
    }
} 