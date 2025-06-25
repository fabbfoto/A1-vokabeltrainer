// packages/trainer-basis/device-sync-ui.js
// Multi-Device Sync UI für Basistrainer
import { getAuth, GoogleAuthProvider, linkWithPopup } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { firebaseSyncService } from './firebase-sync.js';

class DeviceSyncUI {
  constructor() {
    this.modal = null;
    this.isInitialized = false;
    this.currentSyncCode = null;
    this.currentShareLink = null;
    this.currentToken = null;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      // Erstelle Modal (initial versteckt) - Dies ist das Modal für die Geräte-Synchronisation
      this.createModal();
      // Erstelle und füge den Sync-Button hinzu, da er für die Event-Listener benötigt wird.
      this.createAndAppendSyncButton();
      // Event-Listener für das Auth-Modal einrichten
      this.initializeModalEventListeners();
      
      // Prüfe URL-Parameter für Sync-Code
      await this.checkUrlForSyncCode();
      
      this.isInitialized = true;
    } catch (error) {
      console.error('❌ Fehler bei Device-Sync UI Initialisierung:', error);
    }
  }

  // Füge diese neue Methode nach initialize() ein:
  createAndAppendSyncButton() {
    // Prüfe ob Button bereits existiert
    if (document.getElementById('show-auth-modal-btn')) {
      return;
    }
    
    // Erstelle Sync-Button
    const syncButton = document.createElement('button');
    syncButton.id = 'show-auth-modal-btn';
    syncButton.className = 'col-span-3 rounded-lg py-3 font-semibold bg-gradient-to-r from-black via-red-600 to-yellow-500 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105';
    syncButton.innerHTML = `
      <span class="flex items-center justify-center gap-2">
        <span>📱💻</span>
        <span>Geräte verbinden</span>
      </span>
    `;
    
    syncButton.addEventListener('click', () => {
      this.showAuthModal();
    });
    
    // Füge Button direkt zu wortgruppen-buttons hinzu
    const wortgruppenButtons = document.getElementById('wortgruppen-buttons');
    if (wortgruppenButtons) {
      wortgruppenButtons.appendChild(syncButton);
      console.log('✅ Sync-Button erfolgreich hinzugefügt');
    } else {
      console.warn('⚠️ wortgruppen-buttons Container nicht gefunden');
    }
  }

  /**
   * NEU: Richtet alle Event-Listener für das Authentifizierungs-Modal ein.
   * Diese Methode ist kompatibel mit der .visible-Klassenlogik.
   */
  initializeModalEventListeners() {
    // Alle benötigten Elemente aus dem DOM holen.
    const showModalBtn = document.getElementById('show-auth-modal-btn');
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const googleBtn = document.getElementById('google-signin-btn');
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');

    // Sicherheitsprüfung, ob alle HTML-Elemente vorhanden sind.
    if (!showModalBtn || !authModalOverlay || !closeModalBtn || !googleBtn || !emailForm) {
        console.error('Ein oder mehrere Modal-Elemente konnten nicht im DOM gefunden werden. Stelle sicher, dass der HTML-Code aus Schritt 1 in index.html eingefügt wurde.');
        return;
    }

    // --- Hilfsfunktionen ---
        const showModal = () => this.showAuthModal(); // Use instance method
        const hideModal = () => this.hideAuthModal(); // Use instance method

    // --- Event-Listener Zuweisung ---
    showModalBtn.addEventListener('click', showModal);
    closeModalBtn.addEventListener('click', hideModal);

    authModalOverlay.addEventListener('click', (event) => {
        if (event.target === authModalOverlay) {
            hideModal();
        }
    });

    googleBtn.addEventListener('click', async () => {
        console.log('Firebase: Google-Login-Prozess wird gestartet...');
        this.hideAuthModal(); // Modal nach Aktion schließen.

        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            // Der entscheidende Aufruf: Verknüpft den aktuellen anonymen Nutzer (auth.currentUser)
            // mit dem vom Nutzer im Popup ausgewählten Google-Konto.
            const result = await linkWithPopup(auth.currentUser, provider);

            const user = result.user;
            console.log('Erfolgreich verknüpft! Permanenter User:', user);
            alert(`Dein Account wurde erfolgreich mit ${user.email} verknüpft! Dein Lernfortschritt ist jetzt sicher.`);

        } catch (error) {
            // Professionelle Fehlerbehandlung
            console.error("Fehler bei der Verknüpfung mit Google: ", error.code, error.message);

            // Spezifische Fehler für eine bessere Nutzerführung
            if (error.code === 'auth/popup-closed-by-user') {
                alert('Anmeldung abgebrochen. Das Fenster wurde vor Abschluss geschlossen.');
            } else if (error.code === 'auth/credential-already-in-use') {
                alert('Fehler: Dieses Google-Konto ist bereits mit einem anderen Account in dieser App verknüpft.');
            } else if (error.code === 'auth/unauthorized-domain') {
                alert('Diese Domain ist nicht für Google-Login autorisiert. Bitte in Firebase Console hinzufügen.');
            } else if (error.code === 'auth/operation-not-allowed') {
                alert('Google-Login ist nicht aktiviert. Bitte in Firebase Console unter Authentication > Sign-in method aktivieren.');
            } else {
                alert('Ein unbekannter Fehler ist aufgetreten. Bitte versuche es erneut.');
            }
        }
    });

    emailForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Standard-Formular-Verhalten unterbinden.
        const email = emailInput.value;
        console.log(`Firebase: Login-Link wird an ${email} gesendet...`);
        alert(`Platzhalter: Ein Login-Link würde jetzt an ${email} gesendet.`);
        this.hideAuthModal(); // Modal nach Aktion schließen.
    });
  }

  appendSyncButton() {
    const wortgruppenButtons = document.getElementById('wortgruppen-buttons');
    if (wortgruppenButtons && this.syncButton && !document.getElementById('device-sync-btn')) {
      wortgruppenButtons.appendChild(this.syncButton);
    }
  }

  // NEU: Methoden zur Steuerung des Authentifizierungs-Modals (statisch in index.html)
  showAuthModal() {
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    if (authModalOverlay) {
        authModalOverlay.style.display = 'flex';
        authModalOverlay.classList.add('visible');
    }
  }

  hideAuthModal() {
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    if (authModalOverlay) {
        authModalOverlay.style.display = 'none';
      authModalOverlay.classList.remove('visible');
    }
  }

  // Bestehende createModal für das GERÄTE-SYNCHRONISATIONS-MODAL
  createModal() {
    // Erstelle Modal-Container
    this.modal = document.createElement('div');
    this.modal.id = 'device-sync-modal';
    this.modal.className = 'fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50 hidden';
    
    this.modal.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-gray-800">Geräte verbinden</h2>
          <button id="close-sync-modal" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div id="sync-content">
          <!-- Initial State -->
          <div id="sync-initial" class="text-center">
            <p class="mb-4 text-gray-600">Wähle eine Option:</p>
            <div class="space-y-3">
              <button id="create-sync-btn" class="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                🔗 Neuen Link erstellen
              </button>
              <button id="connect-sync-btn" class="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                📱 Mit Link verbinden
              </button>
            </div>
          </div>
          
          <!-- Create Link State -->
          <div id="sync-create" class="hidden">
            <div class="text-center">
              <p class="mb-4 text-gray-600">Teile diesen Link mit deinem anderen Gerät:</p>
              <div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
                <input id="sync-link-input" type="text" readonly class="w-full text-center font-mono text-sm bg-transparent border-none outline-none" />
              </div>
              <button id="copy-link-btn" class="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                📋 Link kopieren
              </button>
              <p class="mt-4 text-sm text-gray-500">Link ist 15 Minuten gültig</p>
            </div>
          </div>
          
          <!-- Connect State -->
          <div id="sync-connect" class="hidden">
            <div class="text-center">
              <p class="mb-4 text-gray-600">Öffne den Link vom anderen Gerät</p>
              <p class="text-sm text-gray-500">Die Verbindung wird automatisch hergestellt</p>
            </div>
          </div>
          
          <!-- Success State -->
          <div id="sync-success" class="hidden">
            <div class="text-center">
              <div class="mb-4">
                <span class="text-6xl">✅</span>
              </div>
              <h3 class="text-lg font-bold text-green-600 mb-2">Erfolgreich verbunden!</h3>
              <p class="text-gray-600">Deine Geräte sind jetzt synchronisiert</p>
            </div>
          </div>
          
          <!-- Error State -->
          <div id="sync-error" class="hidden">
            <div class="text-center">
              <div class="mb-4">
                <span class="text-6xl">❌</span>
              </div>
              <h3 class="text-lg font-bold text-red-600 mb-2">Verbindung fehlgeschlagen</h3>
              <p id="error-message" class="text-gray-600 mb-4"></p>
              <button id="retry-sync-btn" class="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Erneut versuchen
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.modal);
    
    // Event Listeners
    this.modal.querySelector('#close-sync-modal').addEventListener('click', () => this.hideModal());
    this.modal.querySelector('#create-sync-btn').addEventListener('click', () => this.createSyncLink());
    this.modal.querySelector('#connect-sync-btn').addEventListener('click', () => this.showConnectState());
    this.modal.querySelector('#copy-link-btn').addEventListener('click', () => this.copyLink());
    this.modal.querySelector('#retry-sync-btn').addEventListener('click', () => this.resetModal());
    
    // Click outside to close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.hideModal();
      }
    });
  }

  showDeviceSyncModal() { // Umbenannt für Klarheit
    this.resetModal();
    this.modal.classList.remove('hidden');
  }

  hideDeviceSyncModal() { // Umbenannt für Klarheit
    this.modal.classList.add('hidden');
  }

  resetModal() {
    // Verstecke alle States
    this.modal.querySelectorAll('#sync-content > div').forEach(div => {
      div.classList.add('hidden');
    });
    
    // Zeige Initial State
    this.modal.querySelector('#sync-initial').classList.remove('hidden');
  }

  showState(stateId) {
    this.modal.querySelectorAll('#sync-content > div').forEach(div => {
      div.classList.add('hidden');
    });
    
    this.modal.querySelector(`#sync-${stateId}`).classList.remove('hidden');
  }

  async createSyncLink() {
    this.showState('create');
    
    try {
      const syncData = await firebaseSyncService.createDeviceSyncSession();
      
      if (syncData && syncData.shareLink) {
        this.currentSyncCode = syncData.syncCode;
        this.currentShareLink = syncData.shareLink;
        this.currentToken = syncData.token;
        this.modal.querySelector('#sync-link-input').value = syncData.shareLink;
        
        // Automatisch kopieren
        this.copyLink();
      } else {
        throw new Error('Sync-Daten konnten nicht erstellt werden');
      }
    } catch (error) {
      this.showError('Link konnte nicht erstellt werden');
    }
  }

  async copyLink() {
    const input = this.modal.querySelector('#sync-link-input');
    const button = this.modal.querySelector('#copy-link-btn');
    
    try {
      // Moderne Clipboard API
      await navigator.clipboard.writeText(input.value);
      
      // Visuelles Feedback
      const originalText = button.innerHTML;
      button.innerHTML = '✅ Kopiert!';
      button.classList.add('bg-green-500', 'hover:bg-green-600');
      button.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
      }, 2000);
    } catch (error) {
      // Fallback für ältere Browser
      input.select();
      document.execCommand('copy');
      
      // Visuelles Feedback
      const originalText = button.innerHTML;
      button.innerHTML = '✅ Kopiert!';
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    }
  }

  showConnectState() {
    this.showState('connect');
    
    // Simuliere Verbindungsversuch
    setTimeout(() => {
      this.showError('Öffne zuerst den Link auf dem anderen Gerät');
    }, 2000);
  }

  async checkUrlForSyncCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const syncCode = urlParams.get('sync');
    
    if (syncCode) {
      console.log('🔗 Sync-Code in URL gefunden:', syncCode);
      
      // Zeige Modal
      this.showDeviceSyncModal(); // Verwendet umbenannte Methode
      this.showState('connect');
      
      try {
        // Versuche zu verbinden
        await firebaseSyncService.connectToDevice(syncCode);
        
        // Erfolg!
        this.showState('success');
        
        // Entferne Sync-Code aus URL
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('sync');
        window.history.replaceState({}, document.title, newUrl.toString());
        
        // Schließe Modal nach 3 Sekunden
        setTimeout(() => {
          this.hideDeviceSyncModal(); // Verwendet umbenannte Methode
          // Zeige Sync-Notification
          this.showSyncNotification('Geräte erfolgreich synchronisiert!');
        }, 3000);
        
      } catch (error) {
        console.error('❌ Verbindung fehlgeschlagen:', error);
        this.showError(error.message || 'Verbindung fehlgeschlagen');
      }
    }
  }

  showError(message) {
    this.showState('error');
    this.modal.querySelector('#error-message').textContent = message;
  }

  showSyncNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-gradient-to-r from-black via-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-full';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-2xl">🇩🇪</span>
        <span class="font-semibold">${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-y-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-y-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Exportiere Singleton-Instanz
export const deviceSyncUI = new DeviceSyncUI('#wortgruppen-buttons');