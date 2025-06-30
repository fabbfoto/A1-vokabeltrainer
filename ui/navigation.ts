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

// Hilfsfunktion für Deutschland-Farben bei Fortschrittsbalken
function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);

    // Original CSS Farben
    if (percentage < 34) {
        return 'color-black-sr'; // Wird zu #1f2937
    } else if (percentage < 67) {
        return 'color-red-sr';   // Wird zu #dc2626
    } else {
        return 'color-gold-sr';   // Wird zu #f59e0b
    }
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
    
    state.currentMainTopic = null;
    state.currentSubTopic = null;
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationContainerEl.innerHTML = '';
    
    // Grid-Layout für 3 Spalten
    // Grid Layout - 3 Spalten für Desktop, responsive für Mobile
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
    
    const numberOfModes = Object.keys(learningModes).length;
    
    // Hauptthemen erstellen - ORIGINAL WORTGRUPPE-BUTTON STYLE
    Object.keys(vokabular).forEach(mainTopicName => {
        const button = document.createElement('button');
        
        // Original CSS: min-height: 70px (rechteckig, nicht quadratisch!)
        button.className = 'wortgruppe-button relative flex flex-col items-center justify-center p-4 text-center cursor-pointer font-medium transition-all duration-300 border rounded-lg whitespace-normal break-words';
        
        // Original Farben exakt
        button.style.backgroundColor = '#e9e9ed';
        button.style.color = '#374151';
        button.style.borderColor = '#d1d5db';
        button.style.minHeight = '70px'; // WICHTIG: Rechteckig, nicht quadratisch!
        
        // Berechne Fortschritt
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
        
        // Button Inhalt - EXAKT wie Original
        const textSpan = document.createElement('span');
        textSpan.className = 'button-text-label';
        textSpan.textContent = mainTopicName;
        
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-bar-container w-full mt-2';
        progressContainer.style.backgroundColor = '#d1d5db'; // Grauer Hintergrund für Balken
        progressContainer.style.height = '8px';
        progressContainer.style.borderRadius = '4px';
        progressContainer.style.overflow = 'hidden';
        
        const progressBar = document.createElement('div');
        progressBar.className = `progress-bar-fill ${progressColorClass}`;
        progressBar.style.width = `${percentage}%`;
        progressBar.style.height = '100%';
        progressBar.style.transition = 'width 0.5s ease-in-out';
        
        progressContainer.appendChild(progressBar);
        button.appendChild(textSpan);
        button.appendChild(progressContainer);
        
        // Hover-Effekt - WICHTIG: Balken bleibt sichtbar!
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#d1d5db';
            // Balken-Container bekommt dunkleren Hintergrund beim Hover
            progressContainer.style.backgroundColor = '#b5b5bd';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#e9e9ed';
            progressContainer.style.backgroundColor = '#d1d5db';
        });
        
        button.dataset.mainTopic = mainTopicName;
        dom.navigationContainerEl.appendChild(button);
    });
    
    // Globaler Test Button - Original Style
    const globalTestButton = document.createElement('button');
    globalTestButton.id = 'start-test-mode-btn';
    globalTestButton.className = 'col-span-full text-white font-semibold py-3 px-6 rounded-lg border-none cursor-pointer transition-all duration-300';
    globalTestButton.style.background = 'linear-gradient(135deg, #6b7280 0%, #374151 100%)';
    globalTestButton.innerHTML = '<span>🎯</span> Globaler Test';
    
    globalTestButton.addEventListener('mouseenter', () => {
        globalTestButton.style.background = 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)';
        globalTestButton.style.transform = 'translateY(-2px)';
        globalTestButton.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.15)';
    });
    
    globalTestButton.addEventListener('mouseleave', () => {
        globalTestButton.style.background = 'linear-gradient(135deg, #6b7280 0%, #374151 100%)';
        globalTestButton.style.transform = 'translateY(0)';
        globalTestButton.style.boxShadow = 'none';
    });
    
    dom.navigationContainerEl.appendChild(globalTestButton);
    
    // Geräte verbinden Button
    const syncButton = document.createElement('button');
    syncButton.id = 'device-sync-btn';
    syncButton.className = 'col-span-full text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2';
    syncButton.style.background = 'linear-gradient(to right, #000000 0%, #DD0000 50%, #FFCE00 100%)';
    syncButton.innerHTML = '<span>📱🇩🇪</span><span>Geräte verbinden</span>';
    
    syncButton.addEventListener('mouseenter', () => {
        syncButton.style.background = 'linear-gradient(to right, #1a1a1a 0%, #ff0000 50%, #ffd700 100%)';
    });
    
    syncButton.addEventListener('mouseleave', () => {
        syncButton.style.background = 'linear-gradient(to right, #000000 0%, #DD0000 50%, #FFCE00 100%)';
    });
    
    dom.navigationContainerEl.appendChild(syncButton);

    // Copyright nur auf Hauptseite anzeigen
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
}

/**
 * Zeigt die Unterthemen eines Hauptthemas an.
 * KORRIGIERT: Verwendet jetzt das gleiche 3-Spalten-Layout wie die Hauptthemen
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
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';
    
    // WICHTIG: Gleiche Grid-Layout wie Hauptthemen - 3 Spalten!
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';

    const subTopics = Object.keys(vokabular[mainTopicName]);
    const numberOfModes = Object.keys(learningModes).length;
    
    subTopics.forEach(subTopicName => {
        const button = document.createElement('button');
        
        // EXAKT gleiche Klassen wie bei Hauptthemen
        button.className = 'wortgruppe-button relative flex flex-col items-center justify-center p-4 text-center cursor-pointer font-medium transition-all duration-300 border rounded-lg whitespace-normal break-words';
        
        // EXAKT gleiche Styles wie bei Hauptthemen
        button.style.backgroundColor = '#e9e9ed';
        button.style.color = '#374151';
        button.style.borderColor = '#d1d5db';
        button.style.minHeight = '70px'; // Rechteckig wie Hauptthemen
        
        // Fortschritt berechnen
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
        
        // EXAKT gleiche HTML-Struktur wie bei Hauptthemen
        button.innerHTML = `
            <div class="text-base font-medium mb-2">${subTopicName.replace(/\//g, '/<br>')}</div>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-auto">
                <div class="h-full rounded-full transition-all duration-300 ${progressColorClass}" 
                         style="width: ${percentage}%">
                    </div>
            </div>
        `;
        
        button.dataset.subTopic = subTopicName;
        
        // Hover-Effekte wie bei Hauptthemen
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#d1d5db';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#e9e9ed';
        });
        
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
        
        dom.navigationContainerEl.appendChild(button);
    });

    // Hauptthema-Test Button - überspannt alle 3 Spalten
    const mainTopicTestButton = document.createElement('button');
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    
    // WICHTIG: Position nach den Unterthemen-Buttons
    mainTopicTestButton.style.gridColumn = '1 / -1'; // Überspannt alle Spalten
    mainTopicTestButton.style.marginTop = '1rem'; // Abstand nach oben
    
    // Flexbox Layout für bessere Zentrierung
    mainTopicTestButton.innerHTML = `
        <div class="flex items-center justify-center gap-2">
            <span>🎯</span>
            <span>${mainTopicName} Gesamttest</span>
        </div>
        <div class="text-xs opacity-90 mt-1">(Alle Unterthemen)</div>
    `;
    
    // Klassen für den Test-Button
    mainTopicTestButton.className = 'col-span-full flex flex-col items-center justify-center text-white font-bold py-4 px-6 rounded-lg border-none cursor-pointer transition-all duration-300 relative overflow-hidden';
    
    // Deutschland-Farben Gradient statt Orange
    mainTopicTestButton.style.background = 'linear-gradient(135deg, #1f2937 0%, #dc2626 50%, #f59e0b 100%)';
    mainTopicTestButton.style.minHeight = '70px';
    
    // Hover-Effekt mit helleren Deutschland-Farben
    mainTopicTestButton.addEventListener('mouseenter', () => {
        mainTopicTestButton.style.background = 'linear-gradient(135deg, #374151 0%, #ef4444 50%, #fbbf24 100%)';
        mainTopicTestButton.style.transform = 'translateY(-2px)';
        mainTopicTestButton.style.boxShadow = '0 6px 20px 0 rgba(0, 0, 0, 0.25)';
    });
    mainTopicTestButton.addEventListener('mouseleave', () => {
        mainTopicTestButton.style.background = 'linear-gradient(135deg, #1f2937 0%, #dc2626 50%, #f59e0b 100%)';
        mainTopicTestButton.style.transform = 'translateY(0)';
        mainTopicTestButton.style.boxShadow = 'none';
    });
    
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