// ui.js - KORRIGIERTE VERSION ohne shared-Dependencies
// Diese Datei ist ausschließlich für die Manipulation des DOM und die Darstellung von UI-Zuständen zuständig.

import { NavigationEvents } from './shared/events/navigation-events.js';
import { ButtonFactory } from './shared/styles/button-factory.js';

// INLINE HILFSFUNKTIONEN (anstatt shared/helfer.js Import)
function insertTextAtCursor(input, text) {
    if (!input) return;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const currentValue = input.value;
    input.value = currentValue.substring(0, start) + text + currentValue.substring(end);
    input.selectionStart = input.selectionEnd = start + text.length;
    input.focus();
}

function calculateProgressPercentage(completed, total) {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

function getProgressColorClass(completed, total) {
    const percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34) return 'color-black-sr';
    if (percentage < 67) return 'color-red-sr';
    return 'color-gold-sr';
}

/**
 * Zeigt eine temporäre Nachricht (Toast) an.
 * @param {object} dom - Das DOM-Objekt mit Element-Referenzen.
 * @param {string} message - Die anzuzeigende Nachricht.
 * @param {string} type - 'success', 'info' oder 'error'.
 * @param {number} duration - Anzeigedauer in Millisekunden.
 */
export function showMessage(dom, message, type = 'error', duration = 3000) {
    dom.messageBoxEl.textContent = message;
    dom.messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`;
    dom.messageBoxEl.classList.remove('hidden');
    setTimeout(() => dom.messageBoxEl.classList.add('hidden'), duration);
}

/**
 * Versteckt alle spezifischen Lernmodus-UIs und setzt Feedback-Container zurück.
 * @param {object} dom - Das DOM-Objekt mit Element-Referenzen.
 */
export function hideAllUIs(dom) {
    [dom.mcUiEl, dom.spellingModeUiEl, dom.clozeUiEl, dom.sentenceUiEl].forEach(uiEl => { if (uiEl) uiEl.style.display = 'none'; });
    if (dom.clozeHintContainerEl) dom.clozeHintContainerEl.style.display = 'none';
    dom.continueButton.classList.add('hidden');
    dom.feedbackContainerEl.innerHTML = '';
    dom.questionDisplayEl.textContent = '';
    dom.exampleSentenceDisplayEl.textContent = '';
    [dom.audioWordButtonEl, dom.audioSentenceButtonEl].forEach(btn => { if(btn) { btn.onclick = null; btn.style.display = 'none'; } });
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'none';
}

/**
 * Aktualisiert die Fehlerzähler auf den Wiederholungs-Buttons.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function updateErrorCounts(dom, state, learningModes) {
    Object.keys(learningModes).forEach(mode => {
        const repeatButton = document.getElementById(`mode-repeat-${mode}`);
        if (repeatButton) {
            const countSpan = repeatButton.querySelector('.count-display');
            const errorCount = state.wordsToRepeatByMode[mode]?.size || 0;
            countSpan.textContent = errorCount;
            repeatButton.disabled = errorCount === 0;
        }
    });
}

/**
 * Aktualisiert die detaillierte Statistik-Ansicht für die aktuelle Kategorie.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function updateCategoryStats(dom, state, learningModes) {
    dom.categoryStatsContainerEl.innerHTML = '';
    const totalItemsInSet = state.currentVocabularySet.length;
    if (totalItemsInSet === 0) return;

    const title = document.createElement('p');
    title.className = 'text-xs text-gray-500 text-center mb-1';
    title.textContent = 'Fortschritt pro Übungsmodus:';
    dom.categoryStatsContainerEl.appendChild(title);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'text-xs text-gray-600 space-y-1';
    
    Object.keys(learningModes).forEach(modeId => {
        const modeInfo = learningModes[modeId];
        
        // KORREKTUR: Verwende den korrekten Progress-Schlüssel für Themen-Trainer
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const masteredCount = state.globalProgress[progressKey]?.[modeId]?.size || 0;
        const percentage = totalItemsInSet > 0 ? (masteredCount / totalItemsInSet) * 100 : 0;

        // Verwende Farbschema-System
        const colorClass = getProgressColorClass(masteredCount, totalItemsInSet);

        const item = document.createElement('div');
        item.className = 'category-stat-item';
        item.innerHTML = `<span class="category-stat-text">${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}</span><div class="category-progress-bar-bg"><div class="category-progress-bar-fg ${colorClass}" style="width: ${percentage}%;"></div></div>`;
        itemsContainer.appendChild(item);
    });
    dom.categoryStatsContainerEl.appendChild(itemsContainer);
}

/**
 * Aktualisiert die Haupt-Statistiken in der Übungsrunde.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function updatePracticeStats(dom, state, learningModes) {
    dom.correctInRoundPracticeEl.textContent = state.correctInRound;
    dom.attemptedInRoundPracticeEl.textContent = state.attemptedInRound;
    const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;

    // NEU: Verwende Farbschema-System
    const colorClass = getProgressColorClass(accuracy, 100);
    dom.accuracyBarEl.style.width = `${accuracy}%`;
    dom.accuracyBarEl.className = `stats-bar ${colorClass}`;
    updateCategoryStats(dom, state, learningModes);
}

/**
 * Aktualisiert die Statistiken in der Test-Ansicht.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 */
export function updateTestStats(dom, state) {
    const totalQuestions = state.currentVocabularySet.length;
    dom.testProgressTextEl.textContent = `${state.attemptedInRound} / ${totalQuestions}`;
    dom.testAccuracyTextEl.textContent = `${state.correctInRound} / ${state.attemptedInRound}`;
    const progressPercentage = totalQuestions > 0 ? (state.attemptedInRound / totalQuestions) * 100 : 0;
    const accuracyPercentage = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;
    
    // NEU: Verwende Farbschema-System
    const progressColorClass = getProgressColorClass(state.attemptedInRound, totalQuestions);
    const accuracyColorClass = getProgressColorClass(state.correctInRound, state.attemptedInRound);
    dom.testProgressEl.style.width = `${progressPercentage}%`;
    dom.testProgressEl.className = `stats-bar ${progressColorClass}`;
    dom.testAccuracyBarEl.style.width = `${accuracyPercentage}%`;
    dom.testAccuracyBarEl.className = `stats-bar ${accuracyColorClass}`;
}

/**
 * Aktualisiert die Fortschrittsbalken auf den Testauswahl-Buttons.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 */
export function updateTestModeProgressBars(dom, state) {
    const testOptionsButtons = dom.testOptionsGridEl.querySelectorAll('.wortgruppe-button');
    testOptionsButtons.forEach(button => {
        const testType = button.dataset.testType;
        const testScope = button.dataset.testScope || 'global';
        const testTopic = button.dataset.testTopic || '';
        const testSubtopic = button.dataset.testSubtopic || '';
        
        // Erstelle erweiterten Schlüssel für verschiedene Test-Typen
        let scoreKey = testType; // Fallback für alte globale Tests
        if (testScope === 'subtopic') {
            scoreKey = `subtopic-${testTopic}-${testSubtopic}-${testType}`;
        } else if (testScope === 'mainTopic') {
            scoreKey = `mainTopic-${testTopic}-${testType}`;
        } else if (testScope === 'global') {
            scoreKey = `global-${testType}`;
        }
        
        const score = state.lastTestScores ? state.lastTestScores[scoreKey] : null;
        const progressBar = button.querySelector('.progress-bar-fill');
        if (score && progressBar) {
            const percentage = score.accuracy * 100; // score.accuracy ist bereits 0-1
            // NEU: Verwende Farbschema-System
            const colorClass = getProgressColorClass(percentage, 100);
            progressBar.style.width = `${percentage}%`;
            progressBar.className = `progress-bar-fill ${colorClass}`;
        } else if (progressBar) {
            progressBar.style.width = '0%';
            progressBar.className = 'progress-bar-fill color-black-sr'; // Setzt auf Schwarz/Grau zurück
        }
    });
}

/**
 * Zeigt die Hauptthemen-Übersicht an.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} vokabular - Das Vokabular-Objekt.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function displayMainTopics(dom, state, vokabular, learningModes) {
    dom.navigationContainerEl.innerHTML = '';
    const mainTopicNames = Object.keys(vokabular);
    const numberOfModes = Object.keys(learningModes).length;

    mainTopicNames.forEach(topicName => {
        // KORRIGIERTE FORTSCHRITTS-AGGREGATION für Themen-Trainer
        let totalWordsInMainTopic = 0;
        let completedTasksInMainTopic = 0;

        // Iteriere über alle Unterthemen des Hauptthemas
        for (const subTopicName in vokabular[topicName]) {
            if (Object.hasOwnProperty.call(vokabular[topicName], subTopicName)) {
                const wordsInSubTopic = vokabular[topicName][subTopicName]?.length || 0;
                totalWordsInMainTopic += wordsInSubTopic;

                // KORREKTUR: Verwende den korrekten Progress-Schlüssel
                const progressKey = `${topicName}|${subTopicName}`;
                if (state.globalProgress[progressKey]) {
                    completedTasksInMainTopic += Object.values(state.globalProgress[progressKey])
                        .reduce((sum, modeSet) => sum + modeSet.size, 0);
                }
            }
        }

        const totalTasksInMainTopic = totalWordsInMainTopic * numberOfModes;

        // Verwende Farbschema-System
        const colorClass = getProgressColorClass(completedTasksInMainTopic, totalTasksInMainTopic);
        const percentage = calculateProgressPercentage(completedTasksInMainTopic, totalTasksInMainTopic);

        const button = ButtonFactory.createThemeButton(topicName, {
            data: { mainTopic: topicName },
            progress: percentage,
            progressClass: colorClass
        });

        dom.navigationContainerEl.appendChild(button);
    });

    // Globaler Test-Button hinzufügen
    const testButton = ButtonFactory.createTestButton(
        '🧪 Globaler Test',
        {
            size: 'large',
            fullWidth: true
        }
    );
    testButton.id = 'start-test-mode-btn';
    dom.navigationContainerEl.appendChild(testButton);

    // Ansicht umschalten
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationTitleEl.textContent = "Themen";

    // Sende Event: Wir sind auf der Hauptseite
    NavigationEvents.dispatchRoot();
}

/**
 * Zeigt die Unterthemen für ein ausgewähltes Hauptthema an - MIT TEST-BUTTONS.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} vokabular - Das Vokabular-Objekt.
 * @param {string} mainTopicName - Der Name des Hauptthemas.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function displaySubTopics(dom, state, vokabular, mainTopicName, learningModes) {
    state.currentMainTopic = mainTopicName;
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';
    const numberOfModes = Object.keys(learningModes).length;

    Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
        // NUR der normale Unterthema-Button (KEIN Test-Button)
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg';
        button.dataset.subTopic = subTopicName;

        const wordsInSubTopic = vokabular[mainTopicName][subTopicName];
        const totalTasks = wordsInSubTopic.length * numberOfModes;
        
        const progressKey = `${mainTopicName}|${subTopicName}`;
        const completedTasks = state.globalProgress[progressKey] ? 
            Object.values(state.globalProgress[progressKey]).reduce((sum, set) => sum + set.size, 0) : 0;
        
        const colorClass = getProgressColorClass(completedTasks, totalTasks);
        const percentage = calculateProgressPercentage(completedTasks, totalTasks);

        button.innerHTML = `<span class="button-text-label">${subTopicName.replace(/\//g, '/<wbr>')}</span><div class="progress-bar-container"><div class="progress-bar-fill ${colorClass}" style="width: ${percentage}%;"></div></div>`;
        
        dom.navigationContainerEl.appendChild(button);
    });

    // EINZIGER Test-Button: Hauptthema-Gesamttest
    const mainTopicTestButton = ButtonFactory.createTestButton(
        `🎯 ${mainTopicName} Gesamttest`,
        {
            size: 'large',
            fullWidth: true,
            data: { testMainTopicOnly: mainTopicName }
        }
    );
    dom.navigationContainerEl.appendChild(mainTopicTestButton);

    // Sende Event: Wir sind in einem Unterthema
    NavigationEvents.dispatchSub({
        mainTopic: mainTopicName,
        level: 'subtopic'
    });
}

/**
 * Erstellt Test-Modal für verschiedene Test-Typen.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {string} testType - 'subtopic', 'mainTopic', oder 'global'.
 * @param {string} topicName - Name des Themas.
 * @param {string} subTopicName - Name des Unterthemas (nur bei subtopic).
 * @param {object} learningModes - Lernmodi-Objekt.
 */
export function showTestModal(dom, state, testType, topicName, subTopicName, learningModes) {
    // Test-Modal Titel setzen
    const modalTitle = dom.testSelectionModalEl.querySelector('h2');
    if (modalTitle) {
        switch(testType) {
            case 'subtopic':
                modalTitle.textContent = `Test: ${subTopicName}`;
                break;
            case 'mainTopic':
                modalTitle.textContent = `Gesamttest: ${topicName}`;
                break;
            case 'global':
                modalTitle.textContent = 'Globaler Gesamttest';
                break;
        }
    }

    // Test-Optionen Grid leeren und neu befüllen
    dom.testOptionsGridEl.innerHTML = '';
    
    Object.keys(learningModes).forEach(modeId => {
        const modeInfo = learningModes[modeId];
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg';
        button.dataset.testType = modeId;
        button.dataset.testScope = testType;
        button.dataset.testTopic = topicName;
        if (subTopicName) button.dataset.testSubtopic = subTopicName;

        // Test-spezifischen Fortschritt anzeigen (wenn verfügbar)
        let progressPercentage = 0;
        let colorClass = 'color-black-sr';
        
        // Erstelle erweiterten Schlüssel für Test-Scores
        let scoreKey = modeId; // Fallback für alte globale Tests
        if (testType === 'subtopic') {
            scoreKey = `subtopic-${topicName}-${subTopicName}-${modeId}`;
        } else if (testType === 'mainTopic') {
            scoreKey = `mainTopic-${topicName}-${modeId}`;
        } else if (testType === 'global') {
            scoreKey = `global-${modeId}`;
        }
        
        if (state.lastTestScores && state.lastTestScores[scoreKey]) {
            const score = state.lastTestScores[scoreKey];
            progressPercentage = Math.round(score.accuracy * 100);
            colorClass = getProgressColorClass(progressPercentage, 100);
        }

        button.innerHTML = `
            <span class="button-text-label">${modeInfo.name}</span>
            <div class="progress-bar-container">
                <div class="progress-bar-fill ${colorClass}" style="width: ${progressPercentage}%;"></div>
            </div>
        `;
        
        dom.testOptionsGridEl.appendChild(button);
    });

    // Modal anzeigen
    dom.testSelectionModalEl.classList.remove('hidden-view');
}

/**
 * Initialisiert alle zentralen Event-Listener der Anwendung - ERWEITERT für Tests.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} callbacks - Objekt mit Callback-Funktionen zur Logik-Schicht.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function initEventListeners(dom, state, callbacks, learningModes) {
    // Event-Listener für die Navigation - VEREINFACHT (nur noch Hauptthema-Tests)
    dom.navigationContainerEl.addEventListener('click', (e) => {
        const mainTopicButton = e.target.closest('[data-main-topic]');
        const subTopicButton = e.target.closest('[data-sub-topic]');
        const globalTestButton = e.target.closest('#start-test-mode-btn');
        const mainTopicTestButton = e.target.closest('[data-test-main-topic-only]');

        if (mainTopicButton) {
            callbacks.handleNavigation(e);
        } else if (subTopicButton) {
            callbacks.handleNavigation(e);
        } else if (globalTestButton) {
            showTestModal(dom, state, 'global', 'Alle Themen', null, learningModes);
        } else if (mainTopicTestButton) {
            const mainTopic = mainTopicTestButton.dataset.testMainTopicOnly;
            showTestModal(dom, state, 'mainTopic', mainTopic, null, learningModes);
        }
    });

    dom.backToMainTopicsButton.addEventListener('click', () => displayMainTopics(dom, state, callbacks.getVokabular(), learningModes));
    dom.backToSubtopicsButton.addEventListener('click', () => {
        // KORREKTUR: Prüfe zuerst, ob wir im Test-Modus sind
        if (state.isTestModeActive) {
            // Im Test-Modus: Test abbrechen und zur vorherigen Ansicht zurück
            state.isTestModeActive = false;
            
            // Intelligente Rücknavigation basierend auf Test-Typ
            if (state.testType === 'global') {
                // Globaler Test: zurück zur Hauptübersicht
                displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
            } else if (state.testType === 'mainTopic' && state.previousMainTopic) {
                // Hauptthema-Test: zurück zur Unterthemen-Ansicht des ursprünglichen Hauptthemas
                displaySubTopics(dom, state, callbacks.getVokabular(), state.previousMainTopic, learningModes);
            } else {
                // Fallback: zurück zur Hauptübersicht
                displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
            }
        } else if (state.currentMainTopic && state.currentMainTopic !== "Gesamttest") {
            // Normale Navigation: zurück zu den Unterthemen (aber nicht bei "Gesamttest")
            displaySubTopics(dom, state, callbacks.getVokabular(), state.currentMainTopic, learningModes);
        } else {
            // Fallback: zurück zur Hauptübersicht
            displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
        }
        dom.navigationViewEl.classList.remove('hidden-view');
        dom.trainerMainViewEl.classList.add('hidden-view');
    });

    // Test Modal - NUR für Hauptthema- und Global-Tests
    dom.testSelectionModalEl.addEventListener('click', (event) => {
        if (event.target === dom.testSelectionModalEl) {
            dom.testSelectionModalEl.classList.add('hidden-view');
        }
    });

    if (dom.testOptionsGridEl) {
        dom.testOptionsGridEl.addEventListener('click', (event) => {
            const selectedButton = event.target.closest('.wortgruppe-button');
            if (!selectedButton) return;
            
            const selectedTestType = selectedButton.dataset.testType;
            const testScope = selectedButton.dataset.testScope;
            const testTopic = selectedButton.dataset.testTopic;
            
            if (selectedTestType) {
                dom.testSelectionModalEl.classList.add('hidden-view');
                
                // NUR noch zwei Test-Typen
                switch(testScope) {
                    case 'mainTopic':
                        callbacks.starteHauptthemaTest(selectedTestType, testTopic);
                        break;
                    case 'global':
                        callbacks.starteGesamtTest(selectedTestType);
                        break;
                }
            }
        });
    }

    // Umlaut-Buttons
    if (dom.umlautButtonsContainerEl) {
        const buttons = dom.umlautButtonsContainerEl.querySelectorAll('.umlaut-button');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const charToInsert = event.shiftKey ? button.textContent.toUpperCase() : button.textContent;
                insertTextAtCursor(state.activeTextInput, charToInsert);
            });
        });
    }
}