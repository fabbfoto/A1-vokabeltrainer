// ui/test-modal.ts
// Test-Modal und Test-bezogene UI Funktionen

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;
type LearningModes = any;
type UICallbacks = any;

// Import für Fortschritts-Funktionen
import { calculateProgressPercentage, getProgressColorClass } from './statistics.js';

/**
 * Zeigt das Test-Auswahl-Modal an.
 */
export function showTestModal(
    dom: DOMElements,
    state: TrainerState,
    testType: 'global' | 'mainTopic',
    topic: string,
    callbacks: UICallbacks,
    learningModes: LearningModes
): void {
    // Update progress bars bevor Modal geöffnet wird
    updateTestModeProgressBars(dom, state);
    
    // Modal Element erstellen oder finden
    let modal = document.getElementById('test-modal');
    if (!modal) {
        modal = createTestModal();
        document.body.appendChild(modal);
    }
    
    // Modal Titel setzen
    const modalTitle = modal.querySelector('#test-modal-title') as HTMLElement;
    if (modalTitle) {
        modalTitle.textContent = testType === 'global' 
            ? '🎯 Globaler Test - Modus wählen' 
            : `🎯 Test: ${topic} - Modus wählen`;
    }
    
    // Modal anzeigen
    modal.classList.remove('hidden');
    
    // Event Listener für Modus-Buttons
    const modeButtons = modal.querySelectorAll('[data-test-mode]');
    modeButtons.forEach(button => {
        const btn = button as HTMLElement;
        btn.onclick = () => {
            const selectedMode = btn.dataset.testMode;
            if (selectedMode) {
                closeTestModal();
                
                // Test starten
                if (testType === 'global') {
                    callbacks.starteGesamtTest(selectedMode);
                } else {
                    callbacks.starteHauptthemaTest(selectedMode);
                }
            }
        };
    });
    
    // Close Button
    const closeButton = modal.querySelector('#close-test-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeTestModal);
    }
    
    // Click outside to close
    modal.addEventListener('click', (e: Event) => {
        if (e.target === modal) {
            closeTestModal();
        }
    });
}

/**
 * Erstellt das Test-Modal HTML.
 */
function createTestModal(): HTMLElement {
    const modal = document.createElement('div');
    modal.id = 'test-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div class="flex justify-between items-center mb-4">
                <h2 id="test-modal-title" class="text-xl font-bold text-gray-700"></h2>
                <button id="close-test-modal" class="text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="space-y-3">
                <button data-test-mode="mc-de-en" class="test-mode-button w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                    <div class="font-semibold">Bedeutung</div>
                    <div class="text-sm opacity-90">Multiple Choice - Deutsche Wörter → Englische Bedeutung</div>
                    <div class="test-mode-progress mt-2"></div>
                </button>
                
                <button data-test-mode="type-de-adj" class="test-mode-button w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
                    <div class="font-semibold">Schreibweise</div>
                    <div class="text-sm opacity-90">Rechtschreibung mit Artikel-Erkennung</div>
                    <div class="test-mode-progress mt-2"></div>
                </button>
                
                <button data-test-mode="cloze-adj-de" class="test-mode-button w-full bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                    <div class="font-semibold">Lückentext</div>
                    <div class="text-sm opacity-90">Lückentexte mit Hinweisen</div>
                    <div class="test-mode-progress mt-2"></div>
                </button>
                
                <button data-test-mode="sentence-translation-en-de" class="test-mode-button w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    <div class="font-semibold">Satzübersetzung</div>
                    <div class="text-sm opacity-90">English → Deutsch</div>
                    <div class="test-mode-progress mt-2"></div>
                </button>
            </div>
        </div>
    `;
    
    return modal;
}

/**
 * Schließt das Test-Modal.
 */
export function closeTestModal(): void {
    const modal = document.getElementById('test-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * Aktualisiert die Fortschrittsbalken im Test-Modal.
 */
export function updateTestModeProgressBars(dom: DOMElements, state: TrainerState): void {
    const modal = document.getElementById('test-modal');
    if (!modal) return;
    
    const modes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
    
    modes.forEach(mode => {
        const button = modal.querySelector(`[data-test-mode="${mode}"]`);
        if (!button) return;
        
        const progressContainer = button.querySelector('.test-mode-progress');
        if (!progressContainer) return;
        
        // Hole letztes Test-Ergebnis für diesen Modus
        const testKey = state.currentMainTopic 
            ? `mainTopic-${state.currentMainTopic}-${mode}`
            : `global-${mode}`;
            
        const lastScore = state.lastTestScores[testKey];
        
        if (lastScore) {
            const percentage = Math.round(lastScore.accuracy * 100);
            const colorClass = percentage >= 80 ? 'bg-green-400' : percentage >= 60 ? 'bg-yellow-400' : 'bg-red-400';
            
            progressContainer.innerHTML = `
                <div class="flex items-center justify-between text-xs mt-1">
                    <span>Letzter Test: ${percentage}%</span>
                    <span>${lastScore.correct}/${lastScore.total}</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div class="${colorClass} h-2 rounded-full transition-all duration-300" style="width: ${percentage}%"></div>
                </div>
            `;
        } else {
            progressContainer.innerHTML = `
                <div class="text-xs text-gray-300 mt-1">Noch kein Test durchgeführt</div>
            `;
        }
    });
}

/**
 * Initialisiert Test-Modal Event Listener.
 */
export function initTestModalListeners(
    dom: DOMElements,
    state: TrainerState,
    callbacks: UICallbacks,
    learningModes: LearningModes
): void {
    // Listen for custom events to show test modal
    window.addEventListener('showTestModal', ((e: CustomEvent) => {
        const { type, topic } = e.detail;
        showTestModal(dom, state, type, topic, callbacks, learningModes);
    }) as EventListener);
}