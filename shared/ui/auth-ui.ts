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
    public container: HTMLElement | null = null;
    
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
        this.container = container;

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
            
            // Zeige anonymen Username falls gesetzt
            const displayName = this.authService.isAnonymousUser() 
                ? this.authService.getAnonymousUsername() 
                : userEmail;
            
            this.syncButton.innerHTML = `${displayName || 'Angemeldet'} (Klick zum Abmelden)`;
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

    public updateUIAfterLogin(user: { uid: string; email: string | null; displayName: string | null }): void {
        this.renderSyncButton(true, user.email);
    }

    public updateUIAfterLogout(): void {
        this.renderSyncButton(false, null);
    }

    public async showAuthModal(): Promise<void> {
        try {
            // Führe Google Login durch
            const user = await this.authService.loginWithGoogle();
            
            // Zeige anonyme Username-Auswahl nach erfolgreichem Login
            await this.showAnonymousUsernameModal();
            
        } catch (error) {
            console.error('Login fehlgeschlagen:', error);
        }
    }

    /**
     * Zeigt Modal zur anonymen Username-Auswahl
     */
    private async showAnonymousUsernameModal(): Promise<void> {
        // Prüfe ob User bereits einen anonymen Username hat
        if (this.authService.isAnonymousUser()) {
            return; // Bereits gesetzt
        }

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';
        
        modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-bold text-blue-700 mb-2">🏆 Globales Ranking</h2>
                    <p class="text-gray-600">
                        Für das globale Ranking kannst du einen anonymen Benutzernamen wählen, 
                        um deine Privatsphäre zu schützen.
                    </p>
                </div>
                
                <div class="space-y-4">
                    <div class="flex items-center">
                        <input type="radio" id="use-real-name" name="username-choice" value="real" class="mr-2">
                        <label for="use-real-name" class="text-sm font-medium">
                            Echten Namen verwenden (${this.authService.getDisplayName() || 'E-Mail'})
                        </label>
                    </div>
                    
                    <div class="flex items-center">
                        <input type="radio" id="use-anonymous" name="username-choice" value="anonymous" class="mr-2" checked>
                        <label for="use-anonymous" class="text-sm font-medium">
                            Anonymen Namen verwenden
                        </label>
                    </div>
                    
                    <div id="anonymous-username-section" class="mt-4">
                        <label for="anonymous-username" class="block text-sm font-medium text-gray-700 mb-2">
                            Anonymer Benutzername:
                        </label>
                        <input type="text" id="anonymous-username" 
                               placeholder="z.B. Anonymous2024, LanguageLearner, etc."
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                        <div class="flex gap-2 mt-2">
                            <button id="generate-random-username" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition-colors">
                                🎲 Zufällig generieren
                            </button>
                            <button id="suggest-usernames" class="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition-colors">
                                💡 Vorschläge
                            </button>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">
                            💡 <strong>Datenschutz:</strong> Verwende niemals deinen echten Namen oder persönliche Informationen.
                        </p>
                    </div>
                </div>
                
                <div class="flex gap-3 mt-6">
                    <button id="save-username" class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                        Speichern
                    </button>
                    <button id="skip-username" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
                        Überspringen
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event-Handler
        const realNameRadio = document.getElementById('use-real-name') as HTMLInputElement;
        const anonymousRadio = document.getElementById('use-anonymous') as HTMLInputElement;
        const anonymousSection = document.getElementById('anonymous-username-section') as HTMLDivElement;
        const usernameInput = document.getElementById('anonymous-username') as HTMLInputElement;
        const generateBtn = document.getElementById('generate-random-username') as HTMLButtonElement;
        const suggestBtn = document.getElementById('suggest-usernames') as HTMLButtonElement;
        const saveBtn = document.getElementById('save-username') as HTMLButtonElement;
        const skipBtn = document.getElementById('skip-username') as HTMLButtonElement;

        // Radio-Button Handler
        realNameRadio?.addEventListener('change', () => {
            anonymousSection.style.display = 'none';
        });

        anonymousRadio?.addEventListener('change', () => {
            anonymousSection.style.display = 'block';
        });

        // Zufälligen Username generieren
        generateBtn?.addEventListener('click', () => {
            usernameInput.value = this.authService.generateAnonymousUsername();
        });

        // Username-Vorschläge
        suggestBtn?.addEventListener('click', () => {
            const suggestions = [
                'Anonymous2024', 'LanguageLearner', 'Student123', 'GlobalUser',
                'LearningPro', 'Champion2024', 'MasterLearner', 'EliteStudent',
                'NinjaUser', 'Hero2024', 'LegendaryLearner', 'StarStudent',
                'GuruUser', 'Wizard2024', 'GlobalChampion'
            ];
            
            const suggestionModal = document.createElement('div');
            suggestionModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            suggestionModal.innerHTML = `
                <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4">💡 Anonyme Benutzernamen vorschlagen</h3>
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        ${suggestions.map(name => `
                            <button class="suggestion-btn px-3 py-2 text-sm border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
                                ${name}
                            </button>
                        `).join('')}
                    </div>
                    <div class="flex justify-end">
                        <button id="close-suggestions" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
                            Schließen
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(suggestionModal);
            
            suggestionModal.querySelectorAll('.suggestion-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    usernameInput.value = (btn as HTMLElement).textContent || '';
                    suggestionModal.remove();
                });
            });
            
            suggestionModal.querySelector('#close-suggestions')?.addEventListener('click', () => {
                suggestionModal.remove();
            });
        });

        // Speichern
        saveBtn?.addEventListener('click', async () => {
            const choice = (document.querySelector('input[name="username-choice"]:checked') as HTMLInputElement)?.value;
            
            if (choice === 'anonymous') {
                const username = usernameInput.value.trim();
                if (username) {
                    await this.authService.setAnonymousUsername(username);
                } else {
                    // Fallback: Zufälligen Username generieren
                    await this.authService.setAnonymousUsername(this.authService.generateAnonymousUsername());
                }
            }
            
            modal.remove();
            this.renderSyncButton(true, this.authService.getUserEmail());
        });

        // Überspringen
        skipBtn?.addEventListener('click', () => {
            modal.remove();
            this.renderSyncButton(true, this.authService.getUserEmail());
        });

        // Initialisiere mit zufälligem Username
        usernameInput.value = this.authService.generateAnonymousUsername();
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