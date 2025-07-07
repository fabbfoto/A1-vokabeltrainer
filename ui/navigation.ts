// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen

import type { DOMElements } from '../shared/types/ui';
import type { TrainerState, VocabularyStructure, LearningModes, UICallbacks, TopicId, SubTopicId, ModeId } from '../shared/types/index';
import type { TestCategory } from '../shared/types/trainer';

import { NavigationEvents } from '../shared/events/navigation-events';
import { createTopicButton, createActionButton } from '../shared/styles/button-factory';


// --- PRIVATE HILFSFUNKTIONEN ---

function fillGridWithPlaceholders(container: HTMLElement, currentItemCount: number, maxGridSlots: number = 12): void {
    const oldPlaceholders = container.querySelectorAll('[data-placeholder="true"]');
    oldPlaceholders.forEach(placeholder => placeholder.remove());
    const missingSlots = maxGridSlots - currentItemCount;
    for (let i = 0; i < missingSlots; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'min-h-[90px] max-h-[110px] opacity-0 pointer-events-none';
        placeholder.setAttribute('data-placeholder', 'true');
        container.appendChild(placeholder);
    }
}

function calculateProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34) return 'bg-de-black';
    if (percentage < 67) return 'bg-de-red';
    return 'bg-de-gold';
}

function optimizeSubTopicGrid(container: HTMLElement): void {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.className.includes('min-h-[90px]')) {
            button.classList.add('min-h-[90px]', 'max-h-[110px]');
        }
    });
}

/**
 * Erstellt einen Test-Button mit Icon
 */
function createTestButton(
    id: string,
    text: string,
    icon: string,
    variant: 'chaos' | 'structured',
    dataset: Record<string, string>
): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    // Tailwind-Klassen basierend auf Variante
    const baseClasses = 'relative overflow-hidden transition-all duration-200 transform hover:scale-105 rounded-lg py-3 px-4 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2';
    if (variant === 'chaos') {
        button.className = `${baseClasses} bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white`;
    } else {
        button.className = `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white`;
    }
    // Dataset attributes
    Object.entries(dataset).forEach(([key, value]) => {
        button.dataset[key] = value;
    });
    // Inhalt mit Icon
    button.innerHTML = `
        <span class="text-xl">${icon}</span>
        <span>${text}</span>
    `;
    return button;
}

// --- PRIVATE ANZEIGEFUNKTIONEN ---

/**
 * Rendert die Hauptthemen-Buttons.
 * Wird von showMainTopicNavigation aufgerufen.
 */
export function displayMainTopics(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, learningModes: LearningModes): void {
    dom.navigationContainerEl.innerHTML = '';
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max';
    const numberOfModes = Object.keys(learningModes).length;

    Object.keys(vokabular).forEach(mainTopicName => {
        let totalWords = 0;
        let totalMastered = 0;
        Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
            const words = vokabular[mainTopicName][subTopicName];
            const progressKey = `${mainTopicName}|${subTopicName}`;
            const progressForKey = state.globalProgress[progressKey] || {};
            totalWords += words.length * numberOfModes;
            Object.keys(learningModes).forEach(modeId => {
                const masteredSet = progressForKey[modeId];
                if (masteredSet instanceof Set) {
                    totalMastered += masteredSet.size;
                } else if (Array.isArray(masteredSet)) {
                    totalMastered += masteredSet.length;
                }
            });
        });

        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const progressColorClass = getProgressColorClass(totalMastered, totalWords);
        const button = createTopicButton(mainTopicName, percentage, progressColorClass);
        button.dataset.mainTopic = mainTopicName;
        dom.navigationContainerEl.appendChild(button);
    });

    // Container für Test-Buttons
    const testContainer = document.createElement('div');
    testContainer.className = 'col-span-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4';
    // Chaos-Test Button
    const globalChaosTest = createTestButton(
        'global-chaos-test',
        'Globaler Chaos-Test',
        '🎲',
        'chaos',
        { testVariant: 'chaos', testScope: 'global' }
    );
    // Struktur-Test Button
    const globalStructuredTest = createTestButton(
        'global-structured-test',
        'Globaler Struktur-Test',
        '📋',
        'structured',
        { testVariant: 'structured', testScope: 'global' }
    );
    testContainer.appendChild(globalChaosTest);
    testContainer.appendChild(globalStructuredTest);
    dom.navigationContainerEl.appendChild(testContainer);

    const syncButton = createActionButton('sync', 'Geräte verbinden');
    syncButton.className = '';
    syncButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    dom.navigationContainerEl.appendChild(syncButton);
    
    // Copyright Footer
    const existingFooter = dom.navigationViewEl.querySelector('.copyright-footer');
    if (!existingFooter) {
        const footerDiv = document.createElement('div');
        footerDiv.className = 'copyright-footer mt-8 text-center text-xs text-gray-400';
        footerDiv.innerHTML = `<p>© 2025 Frank Burkert - A1 Vokabeltrainer</p><p class="mt-1">Nur für Bildungszwecke · v2.0</p>`;
        dom.navigationViewEl.appendChild(footerDiv);
    }
}

/**
 * Rendert die Unterthemen-Buttons.
 * Wird von showSubTopicNavigation aufgerufen.
 */
export function displaySubTopics(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, mainTopicName: TopicId, learningModes: LearningModes): void {
    dom.navigationContainerEl.innerHTML = '';
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max';
    const subTopics = Object.keys(vokabular[mainTopicName]);
    const numberOfModes = Object.keys(learningModes).length;

    subTopics.forEach(subTopicName => {
        const words = vokabular[mainTopicName][subTopicName];
        const totalPossibleTasks = words.length * numberOfModes;
        const progressKey = `${mainTopicName}|${subTopicName}`;
        const progressForKey = state.globalProgress[progressKey] || {};
        let completedTasks = 0;
        Object.values(progressForKey).forEach((masteredSet: any) => {
            completedTasks += (masteredSet.size || masteredSet.length || 0);
        });
        const percentage = calculateProgressPercentage(completedTasks, totalPossibleTasks);
        const progressColorClass = getProgressColorClass(completedTasks, totalPossibleTasks);
        const button = createTopicButton(subTopicName.replace(/\//g, '/<br>'), percentage, progressColorClass);
        button.dataset.subTopic = subTopicName;
        dom.navigationContainerEl.appendChild(button);
    });
    
    // Container für Test-Buttons
    const testContainer = document.createElement('div');
    testContainer.className = 'col-span-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4';
    // Chaos-Test Button
    const chaosTest = createTestButton(
        `${mainTopicName}-chaos-test`,
        `${mainTopicName} Chaos-Test`,
        '🎲',
        'chaos',
        { testVariant: 'chaos', testScope: 'mainTopic', topicId: mainTopicName }
    );
    // Struktur-Test Button
    const structuredTest = createTestButton(
        `${mainTopicName}-structured-test`,
        `${mainTopicName} Struktur-Test`,
        '📋',
        'structured',
        { testVariant: 'structured', testScope: 'mainTopic', topicId: mainTopicName }
    );
    testContainer.appendChild(chaosTest);
    testContainer.appendChild(structuredTest);
    dom.navigationContainerEl.appendChild(testContainer);

    optimizeSubTopicGrid(dom.navigationContainerEl);
    const totalContentItems = subTopics.length + 1;
    fillGridWithPlaceholders(dom.navigationContainerEl, totalContentItems, 12);
}

// --- ÖFFENTLICHE API-FUNKTIONEN ---

/**
 * Zeigt die Hauptthemen-Navigation an.
 */
export function showMainTopicNavigation(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, learningModes: LearningModes): void {
    NavigationEvents.dispatchRoot();
    state.currentMainTopic = null;
    state.currentSubTopic = null;
    dom.navigationViewEl.classList.remove('hidden');
    dom.trainerMainViewEl.classList.add('hidden');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    // KORREKTUR: Ruft die Anzeigefunktion mit allen nötigen Parametern auf.
    displayMainTopics(dom, state, vokabular, learningModes);
}

/**
 * Zeigt die Unterthemen-Navigation für ein gewähltes Hauptthema an.
 */
export function showSubTopicNavigation(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, mainTopic: TopicId, learningModes: LearningModes): void {
    NavigationEvents.dispatchSub();
    state.currentMainTopic = mainTopic;
    dom.navigationViewEl.classList.remove('hidden');
    dom.trainerMainViewEl.classList.add('hidden');
    dom.navigationTitleEl.textContent = mainTopic;
    dom.backToMainTopicsButton.classList.remove('hidden');
    // KORREKTUR: Ruft die Anzeigefunktion auf, um die Buttons tatsächlich zu rendern.
    displaySubTopics(dom, state, vokabular, mainTopic, learningModes);
}

/**
 * Zeigt die Trainings-Ansicht für ein gewähltes Thema an.
 */
export function showTrainingModes(dom: DOMElements, state: TrainerState): void {
    dom.navigationViewEl.classList.add('hidden');
    dom.trainerMainViewEl.classList.remove('hidden');
    dom.currentTrainingTitleEl.textContent = `${state.currentMainTopic} > ${state.currentSubTopic}`;
}

/**
 * Initialisiert die Klick-Handler für die normalen Lernmodus-Buttons.
 */
export function initializeModeButtons(callbacks: UICallbacks, learningModes: LearningModes): void {
    Object.keys(learningModes).forEach(modeId => {
        const button = document.getElementById(`mode-${modeId}`);
        if (button) {
            button.addEventListener('click', () => callbacks.setMode(modeId as ModeId, false));
        }
    });
}

/**
 * Initialisiert die Klick-Handler für die Fehler-Wiederholungs-Buttons.
 */
export function initializeRepeatButtons(callbacks: UICallbacks, learningModes: LearningModes): void {
    Object.keys(learningModes).forEach(modeId => {
        const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
        if (repeatButton) {
            repeatButton.addEventListener('click', () => {
                // Nur ausführen, wenn der Button nicht deaktiviert ist
                if (!(repeatButton as HTMLButtonElement).disabled) {
                    callbacks.setMode(modeId as ModeId, true);
                }
            });
        }
    });
}

/**
 * Initialisiert die Navigation-Event-Listener.
 */
export function initNavigationListeners(dom: DOMElements, state: TrainerState, callbacks: UICallbacks, learningModes: LearningModes, vokabular: VocabularyStructure): void {
    dom.navigationContainerEl.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
        // Test-Button Handler
        const testButton = target.closest('[data-test-variant]') as HTMLElement;
        if (mainTopicButton) {
            const mainTopic = mainTopicButton.dataset.mainTopic! as TopicId;
            showSubTopicNavigation(dom, state, vokabular, mainTopic, learningModes);
        } else if (subTopicButton) {
            callbacks.handleTopicSelection(state.currentMainTopic!, subTopicButton.dataset.subTopic! as SubTopicId);
        } else if (testButton) {
            const variant = testButton.dataset.testVariant as 'chaos' | 'structured';
            const scope = testButton.dataset.testScope as 'global' | 'mainTopic';
            const topicId = testButton.dataset.topicId;
            if (variant === 'chaos') {
                // Chaos-Test direkt starten
                const testConfig = {
                    id: `test_${Date.now()}` as any,
                    type: (scope === 'global' ? 'global' : 'mainTopic') as any,
                    variant: 'chaos' as any,
                    topicId: topicId as any,
                    name: scope === 'global' ? 'Globaler Chaos-Test' : `${topicId} Chaos-Test`,
                    testTitle: scope === 'global' ? 'Globaler Chaos-Test' : `${topicId} Chaos-Test`,
                    modes: ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'] as any,
                    mode: 'mc-de-en' as any,
                    minAccuracy: 0.8,
                    maxAttempts: 1,
                    taskDistribution: {
                        'mc-de-en': 5,
                        'type-de-adj': 5,
                        'cloze-adj-de': 5,
                        'sentence-translation-en-de': 5
                    } as any
                };
                callbacks.startTest(testConfig as any);
            } else {
                // Struktur-Test - Modal für Kategorie-Auswahl
                import('./test-modal').then(module => {
                    module.showCategoryModal(scope, topicId, 
                        scope === 'global' ? 'Globaler Struktur-Test' : `${topicId} Struktur-Test`, 
                        callbacks as any);
                });
            }
        }
    });

    dom.backToMainTopicsButton.addEventListener('click', () => {
        // KORREKTUR: Alle nötigen Argumente werden übergeben.
        showMainTopicNavigation(dom, state, vokabular, learningModes);
    });
}