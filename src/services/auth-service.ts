// Firebase-Imports für Runtime
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import type { User as FirebaseUser, Auth } from 'firebase/auth';
import { app } from '../infrastructure/auth/firebase-config';

// ========== ENHANCED USER INTERFACE ==========
export interface AppUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: {
        creationTime: string | null;
        lastSignInTime: string | null;
    };
    // Neue Felder für anonyme Username-Funktionalität
    anonymousUsername?: string;
    isAnonymousUser?: boolean;
}

// ========== AUTH SERVICE WITH FULL TYPE SAFETY ==========
export class AuthService {
    public auth: Auth;
    public currentUser: AppUser | null;
    private firebaseUser: FirebaseUser | null;
    private useLocalAuth: boolean = false;

    constructor() {
        this.auth = getAuth(app);
        this.firebaseUser = this.auth.currentUser;
        this.currentUser = this.firebaseUser ? this.convertFirebaseUser(this.firebaseUser) : null;

        // Prüfe ob Firebase verfügbar ist
        this.checkFirebaseAvailability();

        // Richte einen internen Listener ein, um den currentUser immer aktuell zu halten
        onAuthStateChanged(this.auth, (user: FirebaseUser | null) => {
            this.firebaseUser = user;
            this.currentUser = user ? this.convertFirebaseUser(user) : null;
        });
    }

    /**
     * Prüft ob Firebase verfügbar ist
     */
    private checkFirebaseAvailability(): void {
        try {
            // Teste Firebase-Verbindung
            const testAuth = getAuth();
            this.useLocalAuth = false;
        } catch (error) {
            console.warn('⚠️ Firebase nicht verfügbar, verwende lokale Authentifizierung');
            this.useLocalAuth = true;
            this.initializeLocalAuth();
        }
    }

    /**
     * Initialisiert lokale Authentifizierung
     */
    private initializeLocalAuth(): void {
        // Lade gespeicherten User aus localStorage
        const savedUser = localStorage.getItem('local_auth_user');
        if (savedUser) {
            try {
                this.currentUser = JSON.parse(savedUser);
            } catch (error) {
                console.error('Fehler beim Laden des gespeicherten Users:', error);
            }
        }
    }

    /**
     * Konvertiert Firebase User zu AppUser für bessere Typsicherheit
     */
    private convertFirebaseUser(firebaseUser: FirebaseUser): AppUser {
        // Lade anonyme Username-Daten aus localStorage
        const storedData = localStorage.getItem(`user_${firebaseUser.uid}_anonymous`);
        const anonymousData = storedData ? JSON.parse(storedData) : {};
        
        return {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            emailVerified: firebaseUser.emailVerified,
            isAnonymous: firebaseUser.isAnonymous,
            metadata: {
                creationTime: firebaseUser.metadata.creationTime ?? null,
                lastSignInTime: firebaseUser.metadata.lastSignInTime ?? null
            },
            anonymousUsername: anonymousData.anonymousUsername,
            isAnonymousUser: anonymousData.isAnonymousUser || false
        };
    }

    /**
     * Generiert einen zufälligen anonymen Username
     */
    generateAnonymousUsername(): string {
        const prefixes = [
            'Anonymous', 'Learner', 'Student', 'User', 'Player', 
            'Champion', 'Master', 'Pro', 'Elite', 'Ninja', 
            'Hero', 'Legend', 'Star', 'Guru', 'Wizard'
        ];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(Math.random() * 9999);
        return `${prefix}${number}`;
    }

    /**
     * Setzt einen anonymen Username für den aktuellen User
     */
    async setAnonymousUsername(username: string): Promise<void> {
        if (!this.currentUser) {
            throw new Error('Kein User angemeldet');
        }

        // Speichere in localStorage
        const anonymousData = {
            anonymousUsername: username,
            isAnonymousUser: true
        };
        localStorage.setItem(`user_${this.currentUser.uid}_anonymous`, JSON.stringify(anonymousData));

        // Aktualisiere Firebase DisplayName (optional, für Konsistenz)
        if (this.firebaseUser && !this.useLocalAuth) {
            try {
                await updateProfile(this.firebaseUser, {
                    displayName: username
                });
            } catch (error) {
                console.warn('Konnte Firebase DisplayName nicht aktualisieren:', error);
            }
        }

        // Aktualisiere currentUser
        this.currentUser.anonymousUsername = username;
        this.currentUser.isAnonymousUser = true;

        // Speichere lokal falls lokale Auth verwendet wird
        if (this.useLocalAuth) {
            localStorage.setItem('local_auth_user', JSON.stringify(this.currentUser));
        }
    }

    /**
     * Gibt den anonymen Username zurück (falls gesetzt)
     */
    getAnonymousUsername(): string | null {
        return this.currentUser?.anonymousUsername || null;
    }

    /**
     * Prüft, ob der User anonym ist
     */
    isAnonymousUser(): boolean {
        return this.currentUser?.isAnonymousUser || false;
    }

    /**
     * Gibt den Anzeigenamen zurück (anonym oder normal)
     */
    getDisplayNameForRanking(): string {
        if (this.currentUser?.isAnonymousUser && this.currentUser?.anonymousUsername) {
            return this.currentUser.anonymousUsername;
        }
        return this.currentUser?.displayName || this.currentUser?.email || 'Anonymous';
    }

    /**
     * Prüft synchron, ob ein Benutzer gerade angemeldet ist.
     */
    isLoggedIn(): boolean {
        return this.currentUser !== null;
    }

    /**
     * Gibt die E-Mail des aktuellen Benutzers zurück.
     */
    getUserEmail(): string | null {
        return this.currentUser?.email ?? null;
    }

    /**
     * Gibt die User-ID des aktuellen Benutzers zurück.
     */
    getUserId(): string | null {
        return this.currentUser?.uid ?? null;
    }

    /**
     * Gibt den Anzeigenamen des aktuellen Benutzers zurück.
     */
    getDisplayName(): string | null {
        return this.currentUser?.displayName ?? null;
    }

    /**
     * Prüft, ob der aktuelle Benutzer verifiziert ist.
     */
    isEmailVerified(): boolean {
        return this.currentUser?.emailVerified ?? false;
    }

    /**
     * Startet den Google Login-Prozess mit einem Popup.
     */
    async loginWithGoogle(): Promise<AppUser> {
        if (this.useLocalAuth) {
            // Lokale Authentifizierung ohne Firebase
            return this.localGoogleLogin();
        }

        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(this.auth, provider);
            const user = this.convertFirebaseUser(result.user);
    
            return user;
        } catch (error: unknown) {
            this.handleFirebaseError(error, 'Google Login');
            return this.localGoogleLogin();
        }
    }

    /**
     * Lokale Google-Login-Simulation
     */
    private async localGoogleLogin(): Promise<AppUser> {
        // Simuliere Google-Login mit lokalem User
        const localUser: AppUser = {
            uid: `local_${Date.now()}`,
            email: 'user@example.com',
            displayName: 'Local User',
            photoURL: null,
            emailVerified: true,
            isAnonymous: false,
            metadata: {
                creationTime: new Date().toISOString(),
                lastSignInTime: new Date().toISOString()
            }
        };

        this.currentUser = localUser;
        localStorage.setItem('local_auth_user', JSON.stringify(localUser));
        
        console.log('✅ Lokale Authentifizierung erfolgreich');
        return localUser;
    }

    /**
     * Meldet den aktuellen Benutzer ab.
     */
    async logout(): Promise<void> {
        try {
            if (!this.useLocalAuth) {
                await signOut(this.auth);
            } else {
                // Lokale Abmeldung
                this.currentUser = null;
                localStorage.removeItem('local_auth_user');
            }
    
        } catch (error: unknown) {
            console.error("❌ Fehler beim Logout:", error);
            throw new Error(`Logout fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
        }
    }

    /**
     * Gibt den Firebase User zurück (für Firebase-spezifische Operationen)
     */
    getFirebaseUser(): FirebaseUser | null {
        return this.firebaseUser;
    }

    /**
     * Prüft ob lokale Authentifizierung verwendet wird
     */
    isUsingLocalAuth(): boolean {
        return this.useLocalAuth;
    }

    // ========== ENHANCED FIREBASE ERROR HANDLING ==========
    private handleFirebaseError(error: any, operation: string): void {
        console.error(`Firebase ${operation} error:`, error);
        
        // Spezifische Fehlerbehandlung
        if (error.code === 'auth/unauthorized-domain') {
            console.error('❌ Domain nicht in Firebase autorisiert!');
            console.error('🔧 Lösung: Füge "a1-all-topics.netlify.app" zu Firebase Authorized Domains hinzu');
            this.showDomainError();
        } else if (error.code === 'auth/network-request-failed') {
            console.error('🌐 Netzwerkfehler - Firebase nicht erreichbar');
        } else if (error.code === 'auth/operation-not-allowed') {
            console.error('🚫 Google-Login nicht aktiviert in Firebase');
        }
        
        // Fallback zu lokaler Authentifizierung
        this.fallbackToLocalAuth();
    }
    
    private showDomainError(): void {
        // Zeige Benutzer-freundliche Fehlermeldung
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-4 right-4 bg-de-red/10 border border-de-red text-de-red px-4 py-3 rounded z-50';
        errorDiv.innerHTML = `
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-de-red" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium">
                        Firebase-Domain nicht autorisiert
                    </p>
                    <p class="text-xs mt-1">
                        Bitte füge "a1-all-topics.netlify.app" zu Firebase hinzu
                    </p>
                </div>
                <div class="ml-auto pl-3">
                    <button onclick="this.parentElement.parentElement.remove()" class="text-de-red hover:text-de-red">
                        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(errorDiv);
        
        // Automatisch nach 10 Sekunden entfernen
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 10000);
    }
    
    private fallbackToLocalAuth(): void {
        console.log('🔄 Fallback zu lokaler Authentifizierung');
        this.useLocalAuth = true;
        
        // Lokale User-Daten laden falls vorhanden
        const localUser = this.getLocalUser();
        if (localUser) {
            this.currentUser = localUser;
            this.notifyAuthStateChange();
        }
    }
    
    /**
     * Lädt lokale User-Daten aus localStorage
     */
    private getLocalUser(): AppUser | null {
        try {
            const userData = localStorage.getItem('local_auth_user');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Fehler beim Laden lokaler User-Daten:', error);
            return null;
        }
    }
    
    /**
     * Benachrichtigt alle Listener über Auth-Status-Änderungen
     */
    private notifyAuthStateChange(): void {
        // Event für Auth-Status-Änderungen auslösen
        const event = new CustomEvent('authStateChanged', {
            detail: { user: this.currentUser }
        });
        window.dispatchEvent(event);
    }
} 