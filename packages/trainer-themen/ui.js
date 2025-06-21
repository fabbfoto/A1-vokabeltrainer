// packages/trainer-themen/ui.js
// Diese Datei ist ausschließlich für die Manipulation des DOM und die Darstellung von UI-Zuständen zuständig.
// Sie erhält alle notwendigen Daten von der Logik-Schicht (trainer.js).
import { insertTextAtCursor, calculateProgressPercentage, getProgressColorClass } from '/shared/helfer.js';

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
        const score = state.lastTestScores ? state.lastTestScores[testType] : null;
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
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg';
        button.dataset.mainTopic = topicName;

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

        button.innerHTML = `<span class="button-text-label">${topicName}</span><div class="progress-bar-container"><div class="progress-bar-fill ${colorClass}" style="width: ${percentage}%;"></div></div>`;
        dom.navigationContainerEl.appendChild(button);
    });

    // Test-Button hinzufügen
    const testButton = document.createElement('button');
    testButton.id = 'start-test-mode-btn';
    testButton.className = 'col-span-2 sm:col-span-3 rounded-lg py-2 font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white transition-colors duration-200';
    testButton.textContent = 'Test';
    dom.navigationContainerEl.appendChild(testButton);

    // Ansicht umschalten
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationTitleEl.textContent = "Themen";
}

/**
 * Zeigt die Unterthemen für ein ausgewähltes Hauptthema an.
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
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg';
        button.dataset.subTopic = subTopicName;

        const wordsInSubTopic = vokabular[mainTopicName][subTopicName];
        const totalTasks = wordsInSubTopic.length * numberOfModes;
        
        // KORREKTUR: Verwende den korrekten Progress-Schlüssel
        const progressKey = `${mainTopicName}|${subTopicName}`;
        const completedTasks = state.globalProgress[progressKey] ? 
            Object.values(state.globalProgress[progressKey]).reduce((sum, set) => sum + set.size, 0) : 0;
        
        // Verwende Farbschema-System
        const colorClass = getProgressColorClass(completedTasks, totalTasks);
        const percentage = calculateProgressPercentage(completedTasks, totalTasks);

        button.innerHTML = `<span class="button-text-label">${subTopicName.replace(/\//g, '/<wbr>')}</span><div class="progress-bar-container"><div class="progress-bar-fill ${colorClass}" style="width: ${percentage}%;"></div></div>`;
        dom.navigationContainerEl.appendChild(button);
    });
}

/**
 * Initialisiert alle zentralen Event-Listener der Anwendung.
 * @param {object} dom - Das DOM-Objekt.
 * @param {object} state - Das State-Objekt.
 * @param {object} callbacks - Objekt mit Callback-Funktionen zur Logik-Schicht.
 * @param {object} learningModes - Das Objekt mit den Lernmodi.
 */
export function initEventListeners(dom, state, callbacks, learningModes) {
    // Event-Listener für die Navigation
    dom.navigationContainerEl.addEventListener('click', (e) => callbacks.handleNavigation(e)); // Hauptnavigation
    dom.backToMainTopicsButton.addEventListener('click', () => displayMainTopics(dom, state, callbacks.getVokabular(), learningModes));
    dom.backToSubtopicsButton.addEventListener('click', () => {
        if (state.currentMainTopic) {
            displaySubTopics(dom, state, callbacks.getVokabular(), state.currentMainTopic, learningModes);
        } else {
            displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
        }
        dom.navigationViewEl.classList.remove('hidden-view');
        dom.trainerMainViewEl.classList.add('hidden-view'); // Versteckt den Trainer
    });

    // Test Modal
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
            if (selectedTestType) {
                dom.testSelectionModalEl.classList.add('hidden-view');
                callbacks.starteGesamtTest(selectedTestType);
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