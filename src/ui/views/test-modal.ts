// ui/test-modal.ts
// Test-Modal-Funktionen

import type { DOMElements } from '../../core/types/ui';
import type { TrainerState, UICallbacks, LearningModes, TestConfiguration, TestId, TopicId, ModeId, TestCategory } from '../../core/types/trainer';
import { CATEGORY_MODE_MAP } from '../../core/types/trainer';

// Modal instance
let categoryModal: HTMLElement | null = null;
let modalKeyboardHandler: ModalKeyboardHandler | null = null;

/**
 * Keyboard-Handler für Modal
 */
class ModalKeyboardHandler {
    private focusableElements: HTMLElement[] = [];
    private currentFocusIndex = 0;
    
    constructor(private modalElement: HTMLElement, private onClose: () => void) {
        this.initializeFocusableElements();
        this.attachEventListeners();
    }
    
    private initializeFocusableElements(): void {
        this.focusableElements = Array.from(
            this.modalElement.querySelectorAll('button:not([disabled])')
        );
    }
    
    private attachEventListeners(): void {
        this.handleKeyDown = this.handleKeyDown.bind(this);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    
    private handleKeyDown(e: KeyboardEvent): void {
        if (this.modalElement.classList.contains('hidden')) return;
        
        switch(e.key) {
            case 'Escape':
                e.preventDefault();
                this.onClose();
                break;
            case 'Tab':
                e.preventDefault();
                this.handleTabNavigation(e.shiftKey);
                break;
        }
    }
    
    private handleTabNavigation(reverse: boolean): void {
        if (this.focusableElements.length === 0) return;
        
        if (reverse) {
            this.currentFocusIndex = this.currentFocusIndex === 0 
                ? this.focusableElements.length - 1 
                : this.currentFocusIndex - 1;
        } else {
            this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableElements.length;
        }
        
        this.focusableElements[this.currentFocusIndex]?.focus();
    }
    
    public destroy(): void {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
}

/**
 * Erstellt das Kategorie-Modal
 */
function createCategoryModal(): HTMLElement {
    const modal = document.createElement('div');
    modal.id = 'category-selection-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'category-modal-title');
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-de-gray-400/50 p-6 max-w-md w-full transform transition-all duration-300">
            <div class="flex justify-between items-center mb-6">
                <h2 id="category-modal-title" class="text-xl font-bold text-gray-700">Kategorie wählen</h2>
                <button id="close-category-modal" class="text-gray-500 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Modal schließen">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="space-y-3">
                <button data-category="bedeutung" class="category-button w-full py-4 px-6 rounded-lg font-medium text-white bg-de-blue hover:bg-de-blue/90 transform hover:scale-105 transition-all duration-200 shadow-de-gray-200/50 hover:shadow-de-gray-300/50 flex flex-col items-start">
                    <span class="font-semibold text-lg">Bedeutung</span>
                    <span class="text-sm opacity-90 mt-1">Multiple Choice - Deutsch → Englisch</span>
                </button>
                
                <button data-category="schreibweise" class="category-button w-full py-4 px-6 rounded-lg font-medium text-white bg-de-green hover:bg-de-green/90 transform hover:scale-105 transition-all duration-200 shadow-de-gray-200/50 hover:shadow-de-gray-300/50 flex flex-col items-start">
                    <span class="font-semibold text-lg">Schreibweise</span>
                    <span class="text-sm opacity-90 mt-1">Rechtschreibung mit Artikel</span>
                </button>
                
                <button data-category="luecke" class="category-button w-full py-4 px-6 rounded-lg font-medium text-white bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex flex-col items-start">
                    <span class="font-semibold text-lg">Lückentext</span>
                    <span class="text-sm opacity-90 mt-1">Sätze vervollständigen</span>
                </button>
                
                <button data-category="satz" class="category-button w-full py-4 px-6 rounded-lg font-medium text-white bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex flex-col items-start">
                    <span class="font-semibold text-lg">Satzübersetzung</span>
                    <span class="text-sm opacity-90 mt-1">Englisch → Deutsch übersetzen</span>
                </button>
            </div>
        </div>
    `;
    
    return modal;
}

/**
 * Zeigt das Kategorie-Modal
 */
export function showCategoryModal(
    scope: 'global' | 'mainTopic',
    mainTopic: string | undefined,
    title: string,
    callbacks: UICallbacks
): void {
    // Modal erstellen falls nicht vorhanden
    if (!categoryModal) {
        categoryModal = createCategoryModal();
        document.body.appendChild(categoryModal);
    }
    
    // Titel setzen
    const titleElement = categoryModal.querySelector('#category-modal-title');
    if (titleElement) {
        titleElement.textContent = title + ' - Kategorie wählen';
    }
    
    // Modal anzeigen
    categoryModal.classList.remove('hidden');
    
    // Keyboard handler
    if (modalKeyboardHandler) {
        modalKeyboardHandler.destroy();
    }
    modalKeyboardHandler = new ModalKeyboardHandler(categoryModal, closeCategoryModal);
    
    // Event Listener für Kategorie-Buttons
    const categoryButtons = categoryModal.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
        const btn = button as HTMLElement;
        btn.onclick = () => {
            const category = btn.dataset.category as TestCategory;
            closeCategoryModal();
            
            // Test-Konfiguration erstellen
            const mode = CATEGORY_MODE_MAP[category];
            const testConfig: TestConfiguration = {
                testId: `test_${Date.now()}` as TestId,
                testType: scope === 'global' ? 'global' : 'mainTopic',
                variant: 'structured',
                selectedCategory: category,
                topicId: mainTopic as TopicId,
                testTitle: `${title} - ${getCategoryDisplayName(category)}`,
                modeIds: [mode],
                mode: mode,
                questionCount: 10,
                categories: [category]
            };
            
            callbacks.startTest?.(testConfig);
        };
    });
    
    // Close button
    const closeButton = categoryModal.querySelector('#close-category-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeCategoryModal);
    }
    
    // Click outside to close
    categoryModal.addEventListener('click', (e: Event) => {
        if (e.target === categoryModal) {
            closeCategoryModal();
        }
    });
}

/**
 * Schließt das Kategorie-Modal
 */
export function closeCategoryModal(): void {
    if (categoryModal) {
        categoryModal.classList.add('hidden');
    }
    if (modalKeyboardHandler) {
        modalKeyboardHandler.destroy();
        modalKeyboardHandler = null;
    }
}

/**
 * Hilfsfunktion für Kategorie-Namen
 */
function getCategoryDisplayName(category: TestCategory): string {
    const names: Record<TestCategory, string> = {
        'bedeutung': 'Bedeutung',
        'schreibweise': 'Schreibweise',
        'luecke': 'Lückentext',
        'satz': 'Satzübersetzung'
    };
    return names[category] || category;
}

/**
 * Initialisiert Event Listener
 */
export function initTestModalListeners(
    dom: DOMElements,
    state: TrainerState,
    callbacks: UICallbacks,
    learningModes: LearningModes
): void {
    // Chaos-Test Event
    window.addEventListener('startChaosTest', ((e: CustomEvent) => {
        const { scope, mainTopic, title } = e.detail;
        
        // Test-Konfiguration für Chaos
        const testConfig: TestConfiguration = {
            testId: `test_${Date.now()}` as TestId,
            testType: scope === 'global' ? 'global' : 'mainTopic',
            variant: 'chaos',
            topicId: mainTopic as TopicId,
            testTitle: title,
            modeIds: ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'] as ModeId[],
            mode: 'mixed' as ModeId, // Spezieller Modus
            questionCount: 20,
            categories: ['bedeutung', 'schreibweise', 'luecke', 'satz']
        };
        
        callbacks.startTest?.(testConfig);
    }) as EventListener);
    
    // Kategorie-Modal Event
    window.addEventListener('showCategoryModal', ((e: CustomEvent) => {
        const { scope, mainTopic, title } = e.detail;
        showCategoryModal(scope, mainTopic, title, callbacks);
    }) as EventListener);
}

// Alte Funktionen als Stubs für Kompatibilität
export function showTestModal() {
    console.warn('showTestModal ist veraltet, verwende showCategoryModal');
}

export function closeTestModal() {
    closeCategoryModal();
}

export function updateTestModeProgressBars() {
    // Nicht mehr benötigt
}