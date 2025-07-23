// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen

import type { DOMElements } from '../../core/types/ui';
import type { TrainerState, VocabularyStructure, LearningModes, UICallbacks, TopicId, SubTopicId, ModeId, TestConfiguration, TestId } from '../../core/types/trainer';
import type { TestCategory } from '../../core/types/trainer';

import { NavigationEvents } from '../../core/events/navigation-events';
import { createTopicButton, createActionButton } from '../components/button-factory';


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
    if (percentage >= 100) return 'bg-[#F2AE2E]';
    if (percentage >= 75) return 'bg-de-blue';
    if (percentage >= 50) return 'bg-de-gold';
    if (percentage >= 25) return 'bg-de-gold-dark';
    return 'bg-de-gray-400';
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
    const baseClasses = 'relative overflow-hidden transition-all duration-200 transform hover:scale-105 rounded-lg py-3 px-4 font-medium shadow-de-gray-300/50 hover:shadow-de-gray-400/50 flex items-center justify-center gap-2';
    if (variant === 'chaos') {
        button.className = `${baseClasses} bg-de-red hover:bg-de-red/90 text-white`;
    } else {
        button.className = `${baseClasses} bg-de-blue hover:bg-de-blue/90 text-white`;
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
            const progressForKey = state.progress.globalProgress[progressKey] || {};
            totalWords += words.length * numberOfModes;
            Object.keys(learningModes).forEach(modeId => {
                const masteredSet = progressForKey[modeId as ModeId];
                if (masteredSet instanceof Set) {
                    totalMastered += masteredSet.size;
                } else if (Array.isArray(masteredSet)) {
                    totalMastered += (masteredSet as string[]).length;
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

    // NEU: Ranking-Button
    const rankingButton = createActionButton('ranking', '🏆 Ranglisten');
    rankingButton.className = '';
    rankingButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2', 'mt-2', 'bg-de-gold', 'hover:bg-de-gold/90', 'text-white');
    
    // Event Listener für Ranking-Button
    rankingButton.addEventListener('click', () => {
        // Globale Rangliste anzeigen
        if ((window as any).rankingUI) {
            (window as any).rankingUI.showGlobalRankings();
        }
    });
    
    dom.navigationContainerEl.appendChild(rankingButton);
    
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
        const progressForKey = state.progress.globalProgress[progressKey] || {};
        let completedTasks = 0;
        Object.values(progressForKey).forEach((masteredSet: Set<string> | string[]) => {
            completedTasks += (masteredSet instanceof Set ? masteredSet.size : masteredSet.length);
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
    state.navigation.currentMainTopic = null;
    state.navigation.currentSubTopic = null;
    dom.navigationViewEl.classList.remove('hidden');
    dom.trainerMainViewEl.classList.add('hidden');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    
    // Standard-Titel für Trainings-Ansicht setzen
    dom.currentTrainingTitleEl.textContent = 'Thema auswählen';
    
    // KORREKTUR: Ruft die Anzeigefunktion mit allen nötigen Parametern auf.
    displayMainTopics(dom, state, vokabular, learningModes);
}

/**
 * Zeigt die Unterthemen-Navigation für ein gewähltes Hauptthema an.
 */
export function showSubTopicNavigation(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, mainTopic: TopicId, learningModes: LearningModes): void {
    NavigationEvents.dispatchSub();
    state.navigation.currentMainTopic = mainTopic;
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
    
    // Standard-Anzeige wenn keine Themen ausgewählt sind
    if (!state.navigation.currentMainTopic || !state.navigation.currentSubTopic) {
        dom.currentTrainingTitleEl.textContent = 'Thema auswählen';
    } else {
        dom.currentTrainingTitleEl.textContent = `${state.navigation.currentMainTopic} > ${state.navigation.currentSubTopic}`;
    }
}

/**
 * Initialisiert die Klick-Handler für die normalen Lernmodus-Buttons.
 */
export function initializeModeButtons(callbacks: UICallbacks, learningModes: LearningModes): void {
    Object.keys(learningModes).forEach(modeId => {
        const button = document.getElementById(`mode-${modeId}`);
        if (button) {
            button.addEventListener('click', () => callbacks.handleModeSelection?.(modeId as ModeId, false));
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
                    callbacks.handleModeSelection?.(modeId as ModeId, true);
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
            callbacks.handleTopicSelection(state.navigation.currentMainTopic!, subTopicButton.dataset.subTopic! as SubTopicId);
        } else if (testButton) {
            const variant = testButton.dataset.testVariant as 'chaos' | 'structured';
            const scope = testButton.dataset.testScope as 'global' | 'mainTopic';
            const topicId = testButton.dataset.topicId;
            if (variant === 'chaos') {
                // Chaos-Test direkt starten - für globale Tests wird das Ergebnis in die Rangliste gespeichert
                const testConfig: TestConfiguration = {
                    testId: `test_${Date.now()}` as TestId,
                    testType: scope === 'global' ? 'global' : 'mainTopic',
                    variant: 'chaos', // Immer Chaos für Chaos-Tests
                    topicId: topicId as TopicId,
                    testTitle: scope === 'global' ? 'Globaler Chaos-Test' : `${topicId} Chaos-Test`,
                    modeIds: ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'] as ModeId[],
                    mode: 'mc-de-en' as ModeId,
                    questionCount: 20,
                    categories: ['bedeutung', 'schreibweise', 'luecke', 'satz']
                };
                callbacks.startTest?.(testConfig);
            } else if (variant === 'structured') {
                // Struktur-Test - Modal für Kategorie-Auswahl
                import('./test-modal').then(module => {
                    module.showCategoryModal(scope, topicId, 
                        scope === 'global' ? 'Globaler Struktur-Test' : `${topicId} Struktur-Test`, 
                        callbacks);
                });
            }
        }
    });

    dom.backToMainTopicsButton.addEventListener('click', () => {
        // KORREKTUR: Alle nötigen Argumente werden übergeben.
        showMainTopicNavigation(dom, state, vokabular, learningModes);
    });
    
    // NEU: Ranking-Button Event-Listener
    const rankingButton = document.getElementById('ranking-btn');
    if (rankingButton) {
        rankingButton.addEventListener('click', () => {
            const windowWithRanking = window as unknown as { rankingUI?: { showRankingNavigation: () => void } };
            if (windowWithRanking.rankingUI) {
                windowWithRanking.rankingUI.showRankingNavigation();
            } else {
                console.warn('Ranking-UI nicht verfügbar');
            }
        });
    }
}