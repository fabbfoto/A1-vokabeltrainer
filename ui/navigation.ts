// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen

// KORREKTUR: Echte Typen importieren statt 'any' zu verwenden
import type { DOMElements } from '../dom';
import type { TrainerState, VocabularyStructure, LearningModes, UICallbacks } from '../shared/types/index';

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

// --- PRIVATE ANZEIGEFUNKTIONEN ---

/**
 * Rendert die Hauptthemen-Buttons.
 * Wird von showMainTopicNavigation aufgerufen.
 */
function displayMainTopics(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, learningModes: LearningModes): void {
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
                totalMastered += progressForKey[modeId]?.size || 0;
            });
        });

        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const progressColorClass = getProgressColorClass(totalMastered, totalWords);
        const button = createTopicButton(mainTopicName, percentage, progressColorClass);
        button.dataset.mainTopic = mainTopicName;
        dom.navigationContainerEl.appendChild(button);
    });

    const globalTestButton = createActionButton('global-test', 'Globaler Test');
    globalTestButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    dom.navigationContainerEl.appendChild(globalTestButton);

    const syncButton = createActionButton('sync', 'Geräte verbinden');
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
function displaySubTopics(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, mainTopicName: string, learningModes: LearningModes): void {
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
    
    const mainTopicTestButton = createActionButton('main-topic-test', `${mainTopicName} Gesamttest`, '(Alle Unterthemen)');
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    mainTopicTestButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    dom.navigationContainerEl.appendChild(mainTopicTestButton);

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
export function showSubTopicNavigation(dom: DOMElements, state: TrainerState, vokabular: VocabularyStructure, mainTopic: string, learningModes: LearningModes): void {
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
 * Initialisiert die Navigation-Event-Listener.
 */
export function initNavigationListeners(dom: DOMElements, state: TrainerState, callbacks: UICallbacks, learningModes: LearningModes, vokabular: VocabularyStructure): void {
    dom.navigationContainerEl.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
        const globalTestButton = target.closest('#global-test-btn');
        const mainTopicTestButton = target.closest('[data-test-main-topic-only]') as HTMLElement;

        if (mainTopicButton) {
            const mainTopic = mainTopicButton.dataset.mainTopic!;
            showSubTopicNavigation(dom, state, vokabular, mainTopic, learningModes);
        } else if (subTopicButton) {
            callbacks.handleTopicSelection(state.currentMainTopic!, subTopicButton.dataset.subTopic!);
        } else if (globalTestButton) {
            window.dispatchEvent(new CustomEvent('showTestModal', { detail: { type: 'global', topic: 'Alle Themen' } }));
        } else if (mainTopicTestButton) {
            const mainTopic = mainTopicTestButton.dataset.testMainTopicOnly!;
            window.dispatchEvent(new CustomEvent('showTestModal', { detail: { type: 'mainTopic', topic: mainTopic } }));
        }
    });

    dom.backToMainTopicsButton.addEventListener('click', () => {
        // KORREKTUR: Alle nötigen Argumente werden übergeben.
        showMainTopicNavigation(dom, state, vokabular, learningModes);
    });
}