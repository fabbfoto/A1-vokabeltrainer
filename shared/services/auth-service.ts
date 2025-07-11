// Firebase-Imports für Runtime
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
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
}

// ========== AUTH SERVICE WITH FULL TYPE SAFETY ==========
export class AuthService {
    public auth: Auth;
    public currentUser: AppUser | null;
    private firebaseUser: FirebaseUser | null;

    constructor() {
        this.auth = getAuth(app);
        this.firebaseUser = this.auth.currentUser;
        this.currentUser = this.firebaseUser ? this.convertFirebaseUser(this.firebaseUser) : null;

        // Richte einen internen Listener ein, um den currentUser immer aktuell zu halten
        onAuthStateChanged(this.auth, (user: FirebaseUser | null) => {
            this.firebaseUser = user;
            this.currentUser = user ? this.convertFirebaseUser(user) : null;
        });
    }

    /**
     * Konvertiert Firebase User zu AppUser für bessere Typsicherheit
     */
    private convertFirebaseUser(firebaseUser: FirebaseUser): AppUser {
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
            }
        };
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
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(this.auth, provider);
            const user = this.convertFirebaseUser(result.user);
            console.log('✅ Google Login erfolgreich:', user.email);
            return user;
        } catch (error: unknown) {
            console.error("❌ Fehler beim Google-Login:", error);
            throw new Error(`Login fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
        }
    }

    /**
     * Meldet den aktuellen Benutzer ab.
     */
    async logout(): Promise<void> {
        try {
            await signOut(this.auth);
            console.log('✅ Logout erfolgreich');
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
} 