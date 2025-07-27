// Mobile-Einstellungen Komponente
import { HapticFeedback } from '../../utils/haptic-feedback';

export class MobileSettings {
  private hapticFeedback: HapticFeedback;
  private settingsContainer: HTMLElement | null = null;

  constructor() {
    this.hapticFeedback = new HapticFeedback();
    this.hapticFeedback.loadSettings();
  }

  showSettings(): void {
    this.createSettingsModal();
  }

  private createSettingsModal(): void {
    // Bestehenden Modal entfernen
    const existingModal = document.getElementById('mobile-settings-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'mobile-settings-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    
    const content = document.createElement('div');
    content.className = 'bg-white rounded-2xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto';
    
    content.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">Mobile-Einstellungen</h2>
        <button id="close-settings" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
      </div>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-medium text-gray-800">Haptisches Feedback</h3>
            <p class="text-sm text-gray-600">Vibration bei Interaktionen</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="haptic-toggle" class="sr-only peer" ${this.hapticFeedback.isEnabled ? 'checked' : ''}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-medium text-gray-800">Swipe-Navigation</h3>
            <p class="text-sm text-gray-600">Zurück mit Wisch-Geste</p>
          </div>
          <div class="text-green-500 text-sm font-medium">Aktiv</div>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 class="font-medium text-gray-800">Offline-Modus</h3>
            <p class="text-sm text-gray-600">Funktioniert ohne Internet</p>
          </div>
          <div class="text-green-500 text-sm font-medium">Verfügbar</div>
        </div>
      </div>
      
      <div class="mt-6 pt-4 border-t border-gray-200">
        <button id="test-haptic" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Haptisches Feedback testen
        </button>
      </div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    this.attachEventListeners(modal);
  }

  private attachEventListeners(modal: HTMLElement): void {
    // Schließen-Button
    const closeBtn = modal.querySelector('#close-settings');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.remove();
      });
    }

    // Haptic Toggle
    const hapticToggle = modal.querySelector('#haptic-toggle') as HTMLInputElement;
    if (hapticToggle) {
      hapticToggle.addEventListener('change', () => {
        this.hapticFeedback.toggle();
      });
    }

    // Test-Button
    const testBtn = modal.querySelector('#test-haptic');
    if (testBtn) {
      testBtn.addEventListener('click', () => {
        this.hapticFeedback.medium();
      });
    }

    // Modal außerhalb schließen
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  // Haptic Feedback für verschiedene Aktionen
  buttonClick(): void {
    this.hapticFeedback.light();
  }

  navigation(): void {
    this.hapticFeedback.navigation();
  }

  testResult(isCorrect: boolean): void {
    this.hapticFeedback.testResult(isCorrect);
  }
} 