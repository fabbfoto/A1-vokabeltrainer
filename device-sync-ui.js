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
            <h2 class="sync-modal-title">🔗 Gerät hinzufügen</h2>
            <p class="sync-modal-subtitle">Teile den Link mit deinem anderen Gerät</p>
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
      <div class="sync-option" data-option="link">
        <div class="sync-option-header">
          <div class="sync-option-icon link">🔗</div>
          <div>
            <h3 class="sync-option-title">Link teilen</h3>
            <p class="sync-option-description">Teile den Link mit deinem anderen Gerät</p>
          </div>
        </div>
        <div class="content-display" id="link-content">
          <!-- Link Content wird hier eingefügt -->
        </div>
      </div>
    `;

    optionsContainer.innerHTML = optionsHTML;

    // Event Listener für Link-Option
    optionsContainer.querySelector('.sync-option').addEventListener('click', (e) => {
      this.selectSyncOption('link');
    });
  }

  /**
   * Wählt eine Sync-Option aus
   */
  async selectSyncOption(option) {
    if (option !== 'link') return;
    
    try {
      // Deaktiviere alle Optionen
      this.modal.querySelectorAll('.sync-option').forEach(opt => {
        opt.classList.remove('active');
      });
      this.modal.querySelectorAll('.content-display').forEach(content => {
        content.classList.remove('active');
      });

      // Aktiviere Link-Option
      const selectedOption = this.modal.querySelector(`[data-option="link"]`);
      selectedOption.classList.add('active');
      
      const contentDiv = document.getElementById('link-content');
      contentDiv.classList.add('active');

      this.currentSyncType = 'link';

      // Erstelle Sync-Session
      this.showStatusMessage('info', '🔄 Erstelle Sync-Link...');
      this.currentSyncCode = await firebaseSyncService.createSyncSession();
      
      // Befülle Link-Content
      this.populateOptionContent('link', contentDiv);
      
      this.showStatusMessage('success', '✅ Sync-Link bereit zum Teilen!');
      
    } catch (error) {
      this.showStatusMessage('error', `❌ Fehler: ${error.message}`);
    }
  }

  /**
   * Befüllt den Content für die gewählte Option
   */
  populateOptionContent(option, contentDiv) {
    const syncCode = this.currentSyncCode;
    const syncLink = firebaseSyncService.generateSyncLink(syncCode);

    if (option === 'link') {
      contentDiv.innerHTML = `
        <div class="sync-link-display">
          <p><strong>🔗 Dein Sync-Link:</strong></p>
          <div class="sync-link-container">
            <input type="text" class="sync-link-input" id="syncLinkInput"
                   value="${syncLink}" readonly>
            <button class="sync-link-copy-btn" onclick="deviceSyncUI.copyLink()" title="Kopieren">
              📋
            </button>
          </div>
          <p class="sync-link-description">
            Öffne diesen Link auf deinem anderen Gerät und die Synchronisation startet automatisch
          </p>
        </div>
        <div class="sync-action-buttons">
          <button class="sync-btn sync-btn-germany" onclick="deviceSyncUI.copyLink()">
            📋 Link kopieren
          </button>
          <button class="sync-btn sync-btn-germany" onclick="deviceSyncUI.shareLink()">
            📤 Link teilen
          </button>
          <button class="sync-btn sync-btn-secondary" onclick="deviceSyncUI.refreshSync()">
            🔄 Neuer Link
          </button>
        </div>
      `;
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
      
      this.showStatusMessage('success', `✅ Neuer Link erstellt`);
      
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
    return 'Link';
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