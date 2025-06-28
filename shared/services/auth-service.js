// shared/services/auth-service.js - VOLLSTÄNDIGE VERSION

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth';
import { app } from '../auth/firebase-config';

export class AuthService {
    constructor() {
        this.auth = getAuth(app);
        this.currentUser = this.auth.currentUser;

        // Richte einen internen Listener ein, um den currentUser immer aktuell zu halten
        onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
        });
    }

    /**
     * Prüft synchron, ob ein Benutzer gerade angemeldet ist.
     * @returns {boolean}
     */
    isLoggedIn() {
        return !!this.currentUser;
    }

    /**
     * Gibt die E-Mail des aktuellen Benutzers zurück.
     * @returns {string|null}
     */
    getUserEmail() {
        return this.currentUser ? this.currentUser.email : null;
    }

    /**
     * Startet den Google Login-Prozess mit einem Popup.
     */
    async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(this.auth, provider);
            // Der onIdTokenChanged-Listener in index.js wird dies automatisch erkennen
            // und die notwendigen Aktionen auslösen.
        } catch (error) {
            console.error("Fehler beim Google-Login:", error);
            alert("Login fehlgeschlagen. Bitte versuche es erneut.");
        }
    }

    /**
     * Meldet den aktuellen Benutzer ab.
     */
    async logout() {
        try {
            await signOut(this.auth);
            // Der onIdTokenChanged-Listener in index.js wird dies ebenfalls erkennen.
        } catch (error) {
            console.error("Fehler beim Logout:", error);
        }
    }
}