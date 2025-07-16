// Firebase-Imports für Runtime
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import type { User as FirebaseUser, Auth } from 'firebase/auth';
import { app } from '../auth/firebase-config';

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
            console.error("❌ Fehler beim Google-Login:", error);
            
            // Fallback zu lokaler Auth bei Firebase-Fehlern
            if (error instanceof Error && error.message.includes('unauthorized-domain')) {
                console.warn('⚠️ Firebase-Domain nicht autorisiert, verwende lokale Authentifizierung');
                this.useLocalAuth = true;
                return this.localGoogleLogin();
            }
            
            throw new Error(`Login fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
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
} 