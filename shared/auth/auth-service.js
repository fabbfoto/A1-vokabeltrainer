// shared/auth/auth-service.js
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { app } from './firebase-config.js';

class AuthService {
    constructor() {
        this.auth = getAuth(app);
        this.currentUser = null;
        this.authStateListeners = [];
        
        // Auth State überwachen
        onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
            this.notifyListeners(user);
        });
    }

    // Login mit Google
    async loginWithGoogle() {
        // Prüfe ob bereits eingeloggt
        if (this.currentUser) {
            return {
                success: false,
                message: 'Sie sind bereits angemeldet!',
                user: this.currentUser
            };
        }

        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(this.auth, provider);
            
            return {
                success: true,
                message: `Erfolgreich angemeldet als ${result.user.email}`,
                user: result.user
            };
            
        } catch (error) {
            // Benutzerfreundliche Fehlermeldungen
            let message = 'Anmeldung fehlgeschlagen.';
            
            switch(error.code) {
                case 'auth/popup-blocked':
                    message = 'Der Login wurde vom Browser blockiert. Bitte erlauben Sie Popups für diese Seite.';
                    break;
                case 'auth/popup-closed-by-user':
                    message = null; // Keine Meldung wenn User abbricht
                    break;
                case 'auth/account-exists-with-different-credential':
                    message = 'Dieses Konto ist bereits mit einer anderen Anmeldemethode verknüpft.';
                    break;
            }
            
            return {
                success: false,
                message: message,
                error: error
            };
        }
    }

    // Logout
    async logout() {
        try {
            await signOut(this.auth);
            return { success: true };
        } catch (error) {
            return { success: false, error };
        }
    }

    // Auth State Listener hinzufügen
    onAuthStateChange(callback) {
        this.authStateListeners.push(callback);
        // Sofort mit aktuellem Status aufrufen
        callback(this.currentUser);
    }

    // Alle Listener benachrichtigen
    notifyListeners(user) {
        this.authStateListeners.forEach(callback => callback(user));
    }

    // Hilfsmethoden
    isLoggedIn() {
        return !!this.currentUser;
    }

    getUserEmail() {
        return this.currentUser?.email || null;
    }

    getUserDisplayName() {
        return this.currentUser?.displayName || this.getUserEmail() || 'Anonym';
    }
}

// Singleton Export
export const authService = new AuthService();