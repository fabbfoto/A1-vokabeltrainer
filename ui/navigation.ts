// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen
// 🔧 KORRIGIERT: Einheitliche Button-Höhen für perfektes Grid-Layout

import { NavigationEvents } from '../shared/events/navigation-events';
import { createTopicButton, createActionButton } from '../shared/styles/button-factory';
import type { DOMElements } from '../dom';
type TrainerState = any;
type VocabularyStructure = any;
type LearningModes = any;
type UICallbacks = any;

/**
 * 🎯 GRID-STABILITÄT: Fülle Grid mit unsichtbaren Platzhaltern auf 12 Slots
 * Verhindert Layout-Springen zwischen verschiedenen Themen-Anzahlen
 */
function fillGridWithPlaceholders(container: HTMLElement, currentItemCount: number, maxGridSlots: number = 12): void {
    // Entferne alte Platzhalter falls vorhanden
    const oldPlaceholders = container.querySelectorAll('[data-placeholder="true"]');
    oldPlaceholders.forEach(placeholder => placeholder.remove());
    
    const missingSlots = maxGridSlots - currentItemCount;
    
    for (let i = 0; i < missingSlots; i++) {
        const placeholder = document.createElement('div');
        // Unsichtbarer Platzhalter mit gleicher Höhe wie echte Buttons
        placeholder.className = 'min-h-[90px] max-h-[110px] opacity-0 pointer-events-none';
        placeholder.setAttribute('data-placeholder', 'true');
        container.appendChild(placeholder);
    }
    
    console.log(`📐 Grid gefüllt: ${currentItemCount} echte + ${missingSlots} Platzhalter = ${maxGridSlots} Slots`);
}

// Hilfsfunktionen (bereits in shared/utils/helfer.ts, aber hier für Konsistenz)
function calculateProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

// Hilfsfunktion für Deutschland-Farben bei Fortschrittsbalken
function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);

    // Deutschland-Farben aus Tailwind Config
    if (percentage < 34) {
        return 'bg-de-black';
    } else if (percentage < 67) {
        return 'bg-de-red';
    } else {
        return 'bg-de-gold';
    }
}

// 🎯 GRID-OPTIMIERUNG: Stelle sicher, dass alle Buttons perfekt aligned sind
function optimizeSubTopicGrid(container: HTMLElement): void {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        // Falls ein Button nicht die richtigen Klassen hat, korrigiere ihn
        if (!button.className.includes('min-h-[90px]')) {
            button.classList.add('min-h-[90px]', 'max-h-[110px]');
        }
    });
}

/**
 * 🔧 KORRIGIERTE displayMainTopics Funktion 
 * Zeigt die Hauptthemen-Übersicht an mit einheitlichen Button-Höhen
 */
export function displayMainTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchRoot();
    
    state.currentMainTopic = null;
    state.currentSubTopic = null;
    dom.navigationViewEl.classList.remove('hidden');
    dom.trainerMainViewEl.classList.add('hidden');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationContainerEl.innerHTML = '';
    
    // ✅ Grid-Layout für 3 Spalten mit auto-rows-max
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max';
    
    const numberOfModes = Object.keys(learningModes).length;
    
    // ✅ HAUPTTHEMEN BUTTONS - alle einheitliche Höhe
    Object.keys(vokabular).forEach(mainTopicName => {
        let totalWords = 0;
        let totalMastered = 0;
        
        Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
            const words = vokabular[mainTopicName][subTopicName];
            const progressKey = `${mainTopicName}|${subTopicName}`;
            const progressForKey = state.globalProgress[progressKey] || {};
            
            totalWords += words.length * numberOfModes;
            Object.keys(learningModes).forEach(modeId => {
                const masteredInMode = progressForKey[modeId]?.size || 0;
                totalMastered += masteredInMode;
            });
        });
        
        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const progressColorClass = getProgressColorClass(totalMastered, totalWords);
        
        // ✅ Button wird durch die zentrale Funktion erstellt
        const button = createTopicButton(mainTopicName, percentage, progressColorClass);
        button.dataset.mainTopic = mainTopicName;
        dom.navigationContainerEl.appendChild(button);
    });
    
    // ✅ ACTION BUTTONS - alle mit col-span-full und einheitlicher Höhe
    const globalTestButton = createActionButton('global-test', 'Globaler Test');
    globalTestButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    dom.navigationContainerEl.appendChild(globalTestButton);
    
    const syncButton = createActionButton('sync', 'Geräte verbinden');
    syncButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    dom.navigationContainerEl.appendChild(syncButton);

    // ✅ COPYRIGHT FOOTER
    const existingFooter = dom.navigationViewEl.querySelector('.copyright-footer');
    if (existingFooter) {
        existingFooter.remove();
    }

    const footerDiv = document.createElement('div');
    footerDiv.className = 'copyright-footer mt-8 text-center text-xs text-gray-400';
    footerDiv.innerHTML = `
        <p>© 2025 Frank Burkert - A1 Vokabeltrainer</p>
        <p class="mt-1">Nur für Bildungszwecke · v2.0</p>
    `;
    dom.navigationContainerEl.parentElement.appendChild(footerDiv);
    
    console.log(`✅ Hauptthemen-Grid optimiert:`, {
        topics: Object.keys(vokabular).length,
        totalButtons: Object.keys(vokabular).length + 2, // +2 für Test/Sync Buttons
        gridLayout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    });
}

/**
 * 🔧 KORRIGIERTE displaySubTopics Funktion 
 * Zeigt die Unterthemen eines Hauptthemas an mit einheitlichen Button-Höhen
 */
export function displaySubTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    mainTopicName: string,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchSub();

    state.currentMainTopic = mainTopicName;
    dom.navigationViewEl.classList.remove('hidden');
    dom.trainerMainViewEl.classList.add('hidden');
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';

    // 🔧 WICHTIG: Grid-Layout mit expliziter Höhenangabe
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max';

    const subTopics = Object.keys(vokabular[mainTopicName]);
    const numberOfModes = Object.keys(learningModes).length;

    // 📋 SUBTOPIC BUTTONS - alle bekommen einheitliche Höhe von createTopicButton
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

        // ✅ Button wird durch die zentrale Funktion erstellt (einheitliche Höhe!)
        const buttonText = subTopicName.replace(/\//g, '/<br>');
        const button = createTopicButton(buttonText, percentage, progressColorClass);
        
        button.dataset.subTopic = subTopicName;

        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });

        dom.navigationContainerEl.appendChild(button);
    });

    // 🎯 HAUPTTHEMA-TEST BUTTON - überspannt alle 3 Spalten mit GLEICHER HÖHE
    const mainTopicTestButton = createActionButton('main-topic-test', `${mainTopicName} Gesamttest`, '(Alle Unterthemen)');
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    
    // 🔧 WICHTIG: col-span-full für vollbreite über alle Spalten
    mainTopicTestButton.classList.add('col-span-full', 'lg:col-span-3', 'sm:col-span-2');
    
    dom.navigationContainerEl.appendChild(mainTopicTestButton);

    // 🎯 GRID-OPTIMIERUNG: Stelle sicher, dass alle Buttons perfekt aligned sind
    optimizeSubTopicGrid(dom.navigationContainerEl);
    
    // 🎯 NEUE LOGIK: Grid-Plätze auffüllen
    const subTopicCount = subTopics.length;
    const actionButtonCount = 1; // Hauptthema-Test Button
    const totalContentItems = subTopicCount + actionButtonCount;

    // Fülle auf 12 Slots auf für Konsistenz mit Hauptthemen-Ansicht
    fillGridWithPlaceholders(dom.navigationContainerEl, totalContentItems, 12);
    
    console.log(`✅ Unterthemen-Grid für "${mainTopicName}" optimiert:`, {
        subtopics: subTopics.length,
        totalButtons: subTopics.length + 1, // +1 für Test-Button
        gridLayout: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    });
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