// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen

import { NavigationEvents } from '../shared/events/navigation-events';
import { ButtonFactory } from '../shared/styles/button-factory';

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;
type VocabularyStructure = any;
type LearningModes = any;
type UICallbacks = any;

// Hilfsfunktionen (später in statistics.ts verschieben)
function calculateProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34) return 'color-black-sr';
    if (percentage < 67) return 'color-red-sr';
    return 'color-gold-sr';
}

/**
 * Zeigt die Hauptthemen-Übersicht an.
 */
export function displayMainTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchRoot();
    
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationContainerEl.innerHTML = '';

    const mainTopics = Object.keys(vokabular);
    
    mainTopics.forEach(mainTopicName => {
        const button = document.createElement('button');
        button.className = 'topic-button w-full p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow';
        button.innerHTML = `
          <div class="topic-title text-lg font-semibold text-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div class="topic-progress-bar h-2 rounded-full transition-all duration-300"></div>
          </div>
        `;
        button.dataset.mainTopic = mainTopicName;
        
        const title = button.querySelector('.topic-title');
        const progressBar = button.querySelector('.topic-progress-bar') as HTMLElement;
        
        title.textContent = mainTopicName;
        
        // Fortschritt berechnen
        const subTopics = Object.keys(vokabular[mainTopicName]);
        let totalWords = 0;
        let totalMastered = 0;
        
        subTopics.forEach(subTopicName => {
            const words = vokabular[mainTopicName][subTopicName];
            const progressKey = `${mainTopicName}|${subTopicName}`;
            const progressForKey = state.globalProgress[progressKey] || {};
            
            Object.keys(learningModes).forEach(modeId => {
                totalWords += words.length;
                const masteredInMode = progressForKey[modeId]?.size || 0;
                totalMastered += masteredInMode;
            });
        });
        
        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const colorClass = getProgressColorClass(totalMastered, totalWords);
        
        progressBar.style.width = `${percentage}%`;
        progressBar.classList.add(colorClass);
        progressBar.setAttribute('aria-valuenow', percentage.toString());
        
        dom.navigationContainerEl.appendChild(button);
    });

    // Globaler Test-Button
    const globalTestButton = document.createElement('button');
    globalTestButton.id = 'start-test-mode-btn';
    globalTestButton.className = 'w-full bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition-colors duration-200';
    globalTestButton.textContent = '🎯 Globaler Test (Alle Themen)';
    dom.navigationContainerEl.appendChild(globalTestButton);
}

/**
 * Zeigt die Unterthemen eines Hauptthemas an.
 */
export function displaySubTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    mainTopicName: string,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchSubtopic();
    
    state.currentMainTopic = mainTopicName;
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';

    const subTopics = Object.keys(vokabular[mainTopicName]);
    
    subTopics.forEach(subTopicName => {
        const button = document.createElement('button');
        button.className = 'topic-button w-full p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow';
        button.innerHTML = `
          <div class="topic-title text-lg font-semibold text-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div class="topic-progress-bar h-2 rounded-full transition-all duration-300"></div>
          </div>
        `;
        button.dataset.subTopic = subTopicName;
        
        const title = button.querySelector('.topic-title');
        const progressBar = button.querySelector('.topic-progress-bar') as HTMLElement;
        
        title.textContent = subTopicName;
        
        // Fortschritt berechnen
        const words = vokabular[mainTopicName][subTopicName];
        const progressKey = `${mainTopicName}|${subTopicName}`;
        const progressForKey = state.globalProgress[progressKey] || {};
        
        let totalWords = 0;
        let totalMastered = 0;
        
        Object.keys(learningModes).forEach(modeId => {
            totalWords += words.length;
            const masteredInMode = progressForKey[modeId]?.size || 0;
            totalMastered += masteredInMode;
        });
        
        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const colorClass = getProgressColorClass(totalMastered, totalWords);
        
        progressBar.style.width = `${percentage}%`;
        progressBar.classList.add(colorClass);
        progressBar.setAttribute('aria-valuenow', percentage.toString());
        
        dom.navigationContainerEl.appendChild(button);
    });

    // Hauptthema-Test Button
    const mainTopicTestButton = document.createElement('button');
    mainTopicTestButton.className = 'w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105';
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    mainTopicTestButton.innerHTML = `🎯 Test: ${mainTopicName} <span class="text-sm">(Alle Unterthemen)</span>`;
    dom.navigationContainerEl.appendChild(mainTopicTestButton);
}

/**
 * Initialisiert die Navigation-Event-Listener.
 * Nur der Navigation-relevante Teil der ursprünglichen initEventListeners Funktion.
 */
export function initNavigationListeners(
    dom: DOMElements,
    state: TrainerState,
    callbacks: UICallbacks,
    learningModes: LearningModes
): void {
    // Navigation Container Click Handler
    dom.navigationContainerEl.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
        const globalTestButton = target.closest('#start-test-mode-btn');
        const mainTopicTestButton = target.closest('[data-test-main-topic-only]') as HTMLElement;

        if (mainTopicButton || subTopicButton) {
            callbacks.handleNavigation(e);
        } else if (globalTestButton) {
            // Trigger test modal (wird in test-modal.ts behandelt)
            const event = new CustomEvent('showTestModal', { 
                detail: { type: 'global', topic: 'Alle Themen' } 
            });
            window.dispatchEvent(event);
        } else if (mainTopicTestButton) {
            const mainTopic = mainTopicTestButton.dataset.testMainTopicOnly;
            // Trigger test modal für Hauptthema
            const event = new CustomEvent('showTestModal', { 
                detail: { type: 'mainTopic', topic: mainTopic } 
            });
            window.dispatchEvent(event);
        }
    });

    // Back to Main Topics Button
    dom.backToMainTopicsButton.addEventListener('click', () => {
        displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
    });
}