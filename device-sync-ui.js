// device-sync-ui.js - Komplette UI für Device-Synchronisation
import { firebaseSyncService } from './firebase-sync.js';

class DeviceSyncUI {
  constructor() {
    this.modal = null;
    this.currentSyncCode = null;
    this.currentSyncType = null;
    this.isInitialized = false;
  }

  /**
   * Initialisiert die Device-Sync UI
   */
  async initialize() {
    try {
      // Warte auf Firebase-Initialisierung
      if (!firebaseSyncService.isInitialized) {
        console.log('⏳ Warte auf Firebase-Initialisierung...');
        await new Promise(resolve => {
          const checkInit = () => {
            if (firebaseSyncService.isInitialized) {
              resolve();
            } else {
              setTimeout(checkInit, 100);
            }
          };
          checkInit();
        });
      }

      // Füge Sync-Button zum Hauptmenü hinzu
      this.addSyncButtonToMainMenu();
      
      // Prüfe auf Auto-Sync aus URL
      this.checkForAutoSync();
      
      // Event Listener für Firebase-Events
      this.setupEventListeners();
      
      this.isInitialized = true;
      console.log('✅ Device-Sync UI initialisiert');
      
    } catch (error) {
      console.error('❌ Fehler bei Device-Sync UI Initialisierung:', error);
    }
  }

  /**
   * Fügt den Sync-Button zum Hauptmenü hinzu
   */
  addSyncButtonToMainMenu() {
    // Prüfe ob Button bereits existiert
    if (document.getElementById('device-sync-trigger')) {
      console.log('ℹ️ Sync-Button bereits vorhanden');
      return;
    }

    // Erstelle den Sync-Button
    const syncButton = document.createElement('button');
    syncButton.id = 'device-sync-trigger';
    syncButton.className = 'sync-activation-trigger';
    syncButton.innerHTML = `
      📱💻 Geräte verbinden
      <span style="font-size: 12px; opacity: 0.8;">MacBook + Smartphone</span>
    `;
    syncButton.onclick = () => this.openDeviceSyncModal();

    // Versuche verschiedene Container zu finden
    const possibleContainers = [
      '#navigation-container',
      '.card',
      '#main-menu',
      '.main-container',
      'body'
    ];

    let container = null;
    for (const selector of possibleContainers) {
      container = document.querySelector(selector);
      if (container) break;
    }

    if (container) {
      // Füge Button mit etwas Abstand hinzu
      const buttonContainer = document.createElement('div');
      buttonContainer.style.marginTop = '1rem';
      buttonContainer.appendChild(syncButton);
      container.appendChild(buttonContainer);
      
      console.log('✅ Sync-Button zum Hauptmenü hinzugefügt');
    } else {
      console.warn('⚠️ Konnte keinen Container für Sync-Button finden');
    }
  }

  /**
   * Prüft auf Auto-Sync aus URL
   */
  checkForAutoSync() {
    const autoSyncCode = firebaseSyncService.checkForSyncCode();
    if (autoSyncCode) {
      console.log('🔗 Auto-Sync erkannt:', autoSyncCode);
      // Öffne Modal nach kurzer Verzögerung
      setTimeout(() => {
        this.openDeviceSyncModal();
        this.handleAutoSync(autoSyncCode);
      }, 1000);
    }
  }

  /**
   * Setup Event Listeners für Firebase-Events
   */
  setupEventListeners() {
    window.addEventListener('firebaseSyncUpdate', (event) => {
      const { type, data } = event.detail;
      
      switch (type) {
        case 'deviceConnected':
          this.handleDeviceConnected(data);
          break;
        case 'deviceSyncCompleted':
          this.handleDeviceSyncCompleted(data);
          break;
        case 'deviceSyncError':
          this.handleDeviceSyncError(data);
          break;
        case 'autoSyncRequested':
          this.handleAutoSync(data.syncCode);
          break;
      }
    });
  }

  /**
   * Öffnet das Device-Sync Modal
   */
  async openDeviceSyncModal() {
    if (!this.modal) {
      this.createModal();
    }
    
    this.modal.classList.add('show');
    this.updateCurrentDeviceInfo();
  }

  /**
   * Erstellt das Modal HTML
   */
  createModal() {
    const modalHTML = `
      <div class="device-sync-modal" id="deviceSyncModal">
        <div class="sync-modal-container">
          <div class="sync-modal-header">
            <button class="sync-modal-close">×</button>
            <h2 class="sync-modal-title">🔗 Geräte verbinden</h2>
            <p class="sync-modal-subtitle">Synchronisiere deinen Fortschritt zwischen allen Geräten</p>
          </div>
          <div class="sync-modal-body">
            <div class="current-device-info" id="current-device-info">
              🖥️ Aktuelles Gerät wird erkannt...
            </div>
            <div class="sync-options" id="sync-options">
              <!-- Sync-Optionen werden hier eingefügt -->
            </div>
            <div id="statusMessages"></div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('deviceSyncModal');
    
    // Event Listeners
    this.modal.querySelector('.sync-modal-close').onclick = () => this.closeModal();
    this.modal.onclick = (e) => {
      if (e.target === this.modal) this.closeModal();
    };
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('show')) {
        this.closeModal();
      }
    });

    this.createSyncOptions();
  }

  /**
   * Erstellt die Sync-Optionen im Modal
   */
  createSyncOptions() {
    const optionsContainer = this.modal.querySelector('#sync-options');
    
    const optionsHTML = `
      <div class="sync-option" data-option="qr">
        <div class="sync-option-header">
          <div class="sync-option-icon qr">📱</div>
          <div>
            <h3 class="sync-option-title">QR-Code scannen</h3>
            <p class="sync-option-description">Am einfachsten für Smartphone</p>
          </div>
        </div>
        <div class="content-display" id="qr-content">
          <!-- QR-Code Content wird hier eingefügt -->
        </div>
      </div>

      <div class="sync-option" data-option="code">
        <div class="sync-option-header">
          <div class="sync-option-icon code">#️⃣</div>
          <div>
            <h3 class="sync-option-title">6-stelliger Code</h3>
            <p class="sync-option-description">Code eingeben oder teilen</p>
          </div>
        </div>
        <div class="content-display" id="code-content">
          <!-- Code Content wird hier eingefügt -->
        </div>
      </div>

      <div class="sync-option" data-option="link">
        <div class="sync-option-header">
          <div class="sync-option-icon link">🔗</div>
          <div>
            <h3 class="sync-option-title">Link teilen</h3>
            <p class="sync-option-description">Per WhatsApp, E-Mail, etc.</p>
          </div>
        </div>
        <div class="content-display" id="link-content">
          <!-- Link Content wird hier eingefügt -->
        </div>
      </div>
    `;

    optionsContainer.innerHTML = optionsHTML;

    // Event Listeners für Optionen
    optionsContainer.querySelectorAll('.sync-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const optionType = option.getAttribute('data-option');
        this.selectSyncOption(optionType);
      });
    });
  }

  /**
   * Wählt eine Sync-Option aus
   */
  async selectSyncOption(option) {
    try {
      // Deaktiviere alle Optionen
      this.modal.querySelectorAll('.sync-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.modal.querySelectorAll('.content-display').forEach(content => {
        content.classList.remove('active');
      });

      // Aktiviere gewählte Option
      const selectedOption = this.modal.querySelector(`[data-option="${option}"]`);
      selectedOption.classList.add('active');
      
      const contentDiv = document.getElementById(option + '-content');
      contentDiv.classList.add('active');

      this.currentSyncType = option;

      // Erstelle Sync-Session
      this.showStatusMessage('info', 'Erstelle Sync-Session...');
      this.currentSyncCode = await firebaseSyncService.createSyncSession();
      
      // Befülle Content basierend auf gewählter Option
      this.populateOptionContent(option, contentDiv);
      
      this.showStatusMessage('success', `${this.getOptionName(option)} bereit`);
      
    } catch (error) {
      this.showStatusMessage('error', `Fehler: ${error.message}`);
    }
  }

  /**
   * Befüllt den Content für die gewählte Option
   */
  populateOptionContent(option, contentDiv) {
    const syncCode = this.currentSyncCode;
    const syncLink = firebaseSyncService.generateSyncLink(syncCode);

    switch (option) {
      case 'qr':
        contentDiv.innerHTML = `
          <div class="qr-code-display">
            <div class="qr-code-placeholder" id="qrCodePlaceholder">
              <div style="width: 160px; height: 160px; background: #f3f4f6; border: 2px dashed #d1d5db; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 48px;">
                📱
              </div>
            </div>
            <p><strong>Scanne diesen Code mit deinem Smartphone</strong></p>
            <p style="font-size: 12px; color: #6b7280;">
              Öffne die Kamera-App und richte sie auf den QR-Code
            </p>
            <p style="font-size: 10px; color: #9ca3af; font-family: monospace;">
              Link: ${syncLink}
            </p>
          </div>
          <div class="sync-action-buttons">
            <button class="sync-btn sync-btn-primary" onclick="deviceSyncUI.generateQRCode()">
              QR-Code erstellen
            </button>
            <button class="sync-btn sync-btn-secondary" onclick="deviceSyncUI.refreshSync()">
              Neuer Code
            </button>
          </div>
        `;
        break;

      case 'code':
        contentDiv.innerHTML = `
          <div class="sync-code-display">
            <p><strong>Dein Sync-Code:</strong></p>
            <div class="sync-code-large">${syncCode}</div>
            <p style="font-size: 14px; color: #6b7280;">
              Gib diesen Code auf deinem anderen Gerät ein
            </p>
          </div>
          <div class="code-input-section">
            <p><strong>Code von anderem Gerät eingeben:</strong></p>
            <div class="sync-code-input" id="codeInputContainer">
              ${Array.from({length: 6}, (_, i) => 
                `<input type="text" class="code-digit-input" maxlength="1" 
                 oninput="deviceSyncUI.moveToNext(this, ${i})" 
                 onkeydown="deviceSyncUI.handleKeyDown(event, ${i})">`
              ).join('')}
            </div>
            <div class="sync-action-buttons">
              <button class="sync-btn sync-btn-primary" onclick="deviceSyncUI.connectWithCode()">
                Verbinden
              </button>
              <button class="sync-btn sync-btn-secondary" onclick="deviceSyncUI.refreshSync()">
                Neuer Code
              </button>
            </div>
          </div>
        `;
        break;

      case 'link':
        contentDiv.innerHTML = `
          <div class="sync-link-display">
            <p><strong>Sync-Link:</strong></p>
            <input type="text" class="sync-link-input" id="syncLinkInput"
                   value="${syncLink}" readonly>
            <p style="font-size: 14px; color: #6b7280;">
              Teile diesen Link mit deinem anderen Gerät
            </p>
          </div>
          <div class="sync-action-buttons">
            <button class="sync-btn sync-btn-success" onclick="deviceSyncUI.copyLink()">
              📋 Link kopieren
            </button>
            <button class="sync-btn sync-btn-primary" onclick="deviceSyncUI.shareLink()">
              📤 Teilen
            </button>
            <button class="sync-btn sync-btn-secondary" onclick="deviceSyncUI.refreshSync()">
              Neuer Link
            </button>
          </div>
        `;
        break;
    }
  }

  /**
   * Generiert QR-Code (Platzhalter)
   */
  generateQRCode() {
    const qrPlaceholder = document.getElementById('qrCodePlaceholder');
    if (!qrPlaceholder) return;

    this.showStatusMessage('info', '📱 QR-Code wird erstellt...');
    
    // Simuliere QR-Code Erstellung
    setTimeout(() => {
      qrPlaceholder.innerHTML = `
        <div style="width: 160px; height: 160px; background: 
        repeating-linear-gradient(0deg, #000, #000 3px, #fff 3px, #fff 6px),
        repeating-linear-gradient(90deg, #000, #000 3px, #fff 3px, #fff 6px);
        border-radius: 8px; position: relative;">
          <div style="position: absolute; top: 10px; left: 10px; width: 20px; height: 20px; background: #000;"></div>
          <div style="position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; background: #000;"></div>
          <div style="position: absolute; bottom: 10px; left: 10px; width: 20px; height: 20px; background: #000;"></div>
        </div>
      `;
      this.showStatusMessage('success', '✅ QR-Code erstellt! Bereit zum Scannen');
    }, 1000);
  }

  /**
   * Behandelt Eingabe in Code-Feldern
   */
  moveToNext(input, index) {
    // Konvertiere zu Großbuchstaben
    input.value = input.value.toUpperCase();
    
    // Springe zum nächsten Feld nur wenn aktuelles Feld ausgefüllt ist
    if (input.value.length === 1 && index < 5) {
      const nextInput = input.parentNode.children[index + 1];
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    }
    
    // Prüfe ob alle Felder ausgefüllt sind (ohne Seiteneffekte)
    this.checkCodeComplete();
  }

  /**
   * Prüft ob Code vollständig eingegeben wurde
   */
  checkCodeComplete() {
    const inputs = document.querySelectorAll('.code-digit-input');
    if (!inputs.length) return;
    
    const allFilled = Array.from(inputs).every(inp => inp.value.length === 1);
    
    if (allFilled) {
      const enteredCode = Array.from(inputs).map(inp => inp.value.toUpperCase()).join('');
      this.showStatusMessage('info', `Code eingegeben: ${enteredCode}`);
    }
  }

  /**
   * Behandelt Tastatureingaben in Code-Feldern
   */
  handleKeyDown(event, index) {
    // Backspace: Gehe zum vorherigen Feld
    if (event.key === 'Backspace') {
      if (!event.target.value && index > 0) {
        const prevInput = event.target.parentNode.children[index - 1];
        if (prevInput) {
          prevInput.focus();
          prevInput.select();
        }
      }
    }
    
    // Pfeiltasten: Navigation
    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      const prevInput = event.target.parentNode.children[index - 1];
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    }
    
    if (event.key === 'ArrowRight' && index < 5) {
      event.preventDefault();
      const nextInput = event.target.parentNode.children[index + 1];
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    }
  }

  /**
   * Verbindet mit eingegebenem Code
   */
  async connectWithCode() {
    const inputs = document.querySelectorAll('.code-digit-input');
    const enteredCode = Array.from(inputs).map(inp => inp.value.toUpperCase()).join('');
    
    if (enteredCode.length !== 6) {
      this.showStatusMessage('error', '❌ Bitte gib einen vollständigen 6-stelligen Code ein');
      return;
    }

    try {
      this.showStatusMessage('info', '🔄 Verbinde mit anderem Gerät...');
      
      await firebaseSyncService.joinSyncSession(enteredCode);
      
      this.showStatusMessage('success', '✅ Erfolgreich verbunden! Synchronisation läuft...');
      
      setTimeout(() => {
        this.closeModal();
      }, 3000);
      
    } catch (error) {
      this.showStatusMessage('error', `❌ ${error.message}`);
    }
  }

  /**
   * Kopiert Sync-Link
   */
  async copyLink() {
    const linkInput = document.getElementById('syncLinkInput');
    if (!linkInput) return;

    try {
      await navigator.clipboard.writeText(linkInput.value);
      this.showStatusMessage('success', '📋 Link in die Zwischenablage kopiert');
    } catch (error) {
      this.showStatusMessage('error', '❌ Kopieren fehlgeschlagen');
      // Fallback: Textfeld auswählen
      linkInput.select();
    }
  }

  /**
   * Teilt Sync-Link
   */
  async shareLink() {
    const linkInput = document.getElementById('syncLinkInput');
    if (!linkInput) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'A1 Vokabeltrainer - Geräte verbinden',
          text: 'Verbinde dich mit meinem Vokabeltrainer:',
          url: linkInput.value
        });
        this.showStatusMessage('success', '📤 Link geteilt');
      } catch (error) {
        if (error.name !== 'AbortError') {
          this.copyLink(); // Fallback
        }
      }
    } else {
      this.copyLink(); // Fallback
    }
  }

  /**
   * Erstellt neuen Sync-Code
   */
  async refreshSync() {
    try {
      this.showStatusMessage('info', '🔄 Erstelle neuen Sync-Code...');
      
      // Cleanup alter Code
      if (this.currentSyncCode) {
        await firebaseSyncService.cleanupSyncSession(this.currentSyncCode);
      }
      
      // Erstelle neuen Code
      this.currentSyncCode = await firebaseSyncService.createSyncSession();
      
      // Aktualisiere Content
      const contentDiv = document.getElementById(this.currentSyncType + '-content');
      this.populateOptionContent(this.currentSyncType, contentDiv);
      
      this.showStatusMessage('success', `✅ Neuer ${this.getOptionName(this.currentSyncType)} erstellt`);
      
    } catch (error) {
      this.showStatusMessage('error', `❌ ${error.message}`);
    }
  }

  /**
   * Behandelt Auto-Sync
   */
  async handleAutoSync(syncCode) {
    try {
      this.showStatusMessage('info', `🔄 Automatische Verbindung mit Code ${syncCode}...`);
      
      await firebaseSyncService.joinSyncSession(syncCode);
      
      this.showStatusMessage('success', '✅ Automatisch verbunden! Synchronisation läuft...');
      
      setTimeout(() => {
        this.closeModal();
      }, 3000);
      
    } catch (error) {
      this.showStatusMessage('error', `❌ Auto-Sync fehlgeschlagen: ${error.message}`);
    }
  }

  /**
   * Behandelt erfolgreiche Geräte-Verbindung
   */
  handleDeviceConnected(data) {
    const deviceName = data.guestDevice?.deviceName || 'Neues Gerät';
    this.showStatusMessage('success', `✅ ${deviceName} erfolgreich verbunden!`);
  }

  /**
   * Behandelt abgeschlossene Synchronisation
   */
  handleDeviceSyncCompleted(data) {
    const { mergedProgressItems, mergedTestScores } = data;
    this.showStatusMessage('success', 
      `🎉 Synchronisation abgeschlossen! ${mergedProgressItems} Fortschritt, ${mergedTestScores} Test-Ergebnisse`);
    
    setTimeout(() => {
      this.closeModal();
    }, 5000);
  }

  /**
   * Behandelt Sync-Fehler
   */
  handleDeviceSyncError(data) {
    this.showStatusMessage('error', `❌ Sync-Fehler: ${data.error}`);
  }

  /**
   * Hilfsfunktionen
   */
  getOptionName(option) {
    const names = {
      'qr': 'QR-Code',
      'code': '6-stelliger Code',
      'link': 'Link'
    };
    return names[option] || option;
  }

  updateCurrentDeviceInfo() {
    const deviceInfo = firebaseSyncService.currentDevice;
    const infoDiv = this.modal.querySelector('#current-device-info');
    if (infoDiv && deviceInfo) {
      infoDiv.textContent = `${deviceInfo.deviceName} - ${deviceInfo.browserName}`;
    }
  }

  showStatusMessage(type, message) {
    const container = this.modal.querySelector('#statusMessages');
    if (!container) return;
    
    container.innerHTML = '';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `sync-status-message sync-status-${type}`;
    messageDiv.textContent = message;
    container.appendChild(messageDiv);
    
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.remove('show');
      
      // Reset alle Optionen
      this.modal.querySelectorAll('.sync-option').forEach(option => {
        option.classList.remove('active');
      });
      this.modal.querySelectorAll('.content-display').forEach(content => {
        content.classList.remove('active');
      });
      
      this.currentSyncType = null;
    }
  }
}

// Globale Instanz
export const deviceSyncUI = new DeviceSyncUI();

// Globale Funktionen für onclick-Handler
window.deviceSyncUI = deviceSyncUI;