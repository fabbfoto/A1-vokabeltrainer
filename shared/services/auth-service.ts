// Firebase-Imports für Runtime
// @ts-ignore
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { app } from '../auth/firebase-config';

// TypeScript-Typen für Firebase
type User = any;
type Auth = any;

export class AuthService {
    public auth: Auth;
    public currentUser: User | null;

    constructor() {
        this.auth = getAuth(app);
        this.currentUser = this.auth.currentUser;

        // Richte einen internen Listener ein, um den currentUser immer aktuell zu halten
        onAuthStateChanged(this.auth, (user: User | null) => {
            this.currentUser = user;
        });
    }

    /**
     * Prüft synchron, ob ein Benutzer gerade angemeldet ist.
     */
    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    /**
     * Gibt die E-Mail des aktuellen Benutzers zurück.
     */
    getUserEmail(): string | null {
        return this.currentUser ? this.currentUser.email : null;
    }

    /**
     * Startet den Google Login-Prozess mit einem Popup.
     */
    async loginWithGoogle(): Promise<void> {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(this.auth, provider);
            // Der onIdTokenChanged-Listener in index.js wird dies automatisch erkennen
            // und die notwendigen Aktionen auslösen.
        } catch (error: unknown) {
            console.error("Fehler beim Google-Login:", error);
            alert("Login fehlgeschlagen. Bitte versuche es erneut.");
        }
    }

    /**
     * Meldet den aktuellen Benutzer ab.
     */
    async logout(): Promise<void> {
        try {
            await signOut(this.auth);
            // Der onIdTokenChanged-Listener in index.js wird dies ebenfalls erkennen.
        } catch (error: unknown) {
            console.error("Fehler beim Logout:", error);
        }
    }
} 