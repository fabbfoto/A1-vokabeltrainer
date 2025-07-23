// dom.ts
// Zentrale DOM-Element-Referenzen mit Type-Safety und robuster Validierung

import type { DOMElements } from './src/core/types/ui';

// ========== DOM VALIDATION AND ERROR HANDLING ==========

interface DOMValidationResult {
    isValid: boolean;
    missingElements: string[];
    errors: string[];
}

// Hilfsfunktion für sichere Element-Abfrage mit Validierung
function getElement<T extends HTMLElement>(id: string, required: boolean = true): T {
    const element = document.getElementById(id);
    
    if (!element) {
        const errorMsg = `Required DOM element with id '${id}' not found!`;
        
        if (required) {
            console.error(errorMsg);
            throw new Error(errorMsg);
        } else {
            console.warn(`Optional DOM element with id '${id}' not found.`);
            return document.createElement('div') as unknown as T;
        }
    }
    
    return element as T;
}

// Validiert alle erforderlichen DOM-Elemente
function validateDOMElements(): DOMValidationResult {
    const requiredElementIds = [
        'navigation-view',
        'trainer-main-view',
        'navigation-container',
        'back-to-main-topics',
        'navigation-title',
        'back-to-subtopics',
        'current-training-title',
        'mode-button-grid',
        'question-display-area',
        'example-sentence-display',
        'word-line-container',
        'sentence-line-container',
        'word-sentence-block',
        'audio-word-button',
        'audio-sentence-button',
        'mc-de-en-ui',
        'mc-answers-container',
        'spelling-mode-ui',
        'single-input-container',
        'spelling-input-single',
        'noun-input-container',
        'spelling-input-article',
        'spelling-input-noun-1',
        'spelling-input-noun-2',
        'check-spelling-button',
        'cloze-adj-de-ui',
        'cloze-hint-container',
        'cloze-sentence-container',
        'check-cloze-button',
        'sentence-translation-en-de-ui',
        'sentence-word-input-container',
        'check-sentence-translation-button',
        'feedback-container',
        'correction-solution',
        'continue-button',
        'message-box',
        'practice-stats-view',
        'correct-in-round-practice',
        'attempted-in-round-practice',
        'accuracy-bar',
        'category-stats-container',
        'test-stats-view',
        'test-progress-bar',
        'test-accuracy-bar',
        'test-progress-text',
        'test-accuracy-text',
        'test-selection-modal',
        'loading-indicator',
        'umlaut-buttons-container'
    ];

    const missingElements: string[] = [];
    const errors: string[] = [];

    for (const id of requiredElementIds) {
        const element = document.getElementById(id);
        if (!element) {
            missingElements.push(id);
            errors.push(`Missing required DOM element: ${id}`);
        }
    }

    return {
        isValid: missingElements.length === 0,
        missingElements,
        errors
    };
}

// ========== DOM INITIALIZATION ==========

// SVG Speaker Icon
const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`;

// Initialisiert das DOM-Objekt mit Validierung
function initializeDOM(): DOMElements {
    // Validiere alle erforderlichen Elemente
    const validation = validateDOMElements();
    
    if (!validation.isValid) {
        console.error('DOM Validation Failed:', validation.errors);
        console.error('Missing Elements:', validation.missingElements);
        
        // In Entwicklungsumgebung: Fehler werfen
        if (process.env.NODE_ENV === 'development') {
            throw new Error(`DOM initialization failed. Missing elements: ${validation.missingElements.join(', ')}`);
        }
        
        // In Produktion: Warnung ausgeben, aber weitermachen
        console.warn('Continuing with missing DOM elements. Some functionality may be broken.');
    } else {
        console.log('✅ All required DOM elements found and validated.');
    }

    // Exportiert das zentrale DOM-Objekt, das mit den Elementen aus dem HTML befüllt wird.
    return {
        // Navigation Views
        navigationViewEl: getElement<HTMLElement>('navigation-view'),
        trainerMainViewEl: getElement<HTMLElement>('trainer-main-view'),
        navigationContainerEl: getElement<HTMLElement>('navigation-container'),
        backToMainTopicsButton: getElement<HTMLButtonElement>('back-to-main-topics'),
        navigationTitleEl: getElement<HTMLElement>('navigation-title'),
        
        // Trainer Header
        backToSubtopicsButton: getElement<HTMLButtonElement>('back-to-subtopics'),
        currentTrainingTitleEl: getElement<HTMLElement>('current-training-title'),
        modeButtonGridEl: getElement<HTMLElement>('mode-button-grid'),
        
        // Question & Display Areas
        questionDisplayEl: getElement<HTMLElement>('question-display-area'),
        exampleSentenceDisplayEl: getElement<HTMLElement>('example-sentence-display'),
        wordLineContainerEl: getElement<HTMLElement>('word-line-container'),
        sentenceLineContainerEl: getElement<HTMLElement>('sentence-line-container'),
        wordSentenceBlockEl: getElement<HTMLElement>('word-sentence-block'),
        
        // Audio Buttons
        audioWordButtonEl: getElement<HTMLButtonElement>('audio-word-button'),
        audioSentenceButtonEl: getElement<HTMLButtonElement>('audio-sentence-button'),
        
        // Multiple Choice UI
        mcUiEl: getElement<HTMLElement>('mc-de-en-ui'),
        mcAnswersContainerEl: getElement<HTMLElement>('mc-answers-container'),
        
        // Spelling Mode UI
        spellingModeUiEl: getElement<HTMLElement>('spelling-mode-ui'),
        singleInputContainerEl: getElement<HTMLElement>('single-input-container'),
        spellingInputSingleEl: getElement<HTMLInputElement>('spelling-input-single'),
        nounInputContainerEl: getElement<HTMLElement>('noun-input-container'),
        spellingInputArticleEl: getElement<HTMLInputElement>('spelling-input-article'),
        spellingInputNoun1El: getElement<HTMLInputElement>('spelling-input-noun-1'),
        spellingInputNoun2El: getElement<HTMLInputElement>('spelling-input-noun-2'),
        checkSpellingButton: getElement<HTMLButtonElement>('check-spelling-button'),
        
        // Cloze Mode UI
        clozeUiEl: getElement<HTMLElement>('cloze-adj-de-ui'),
        clozeHintContainerEl: getElement<HTMLElement>('cloze-hint-container'),
        clozeSentenceContainerEl: getElement<HTMLElement>('cloze-sentence-container'),
        checkClozeButton: getElement<HTMLButtonElement>('check-cloze-button'),
        
        // Sentence Translation UI
        sentenceUiEl: getElement<HTMLElement>('sentence-translation-en-de-ui'),
        sentenceWordInputContainerEl: getElement<HTMLElement>('sentence-word-input-container'),
        checkSentenceButton: getElement<HTMLButtonElement>('check-sentence-translation-button'),
        
        // Feedback & Continue
        feedbackContainerEl: getElement<HTMLElement>('feedback-container'),
        correctionSolutionEl: getElement<HTMLElement>('correction-solution'),
        continueButton: getElement<HTMLButtonElement>('continue-button'),
        messageBoxEl: getElement<HTMLElement>('message-box'),
        
        // Practice Statistics
        practiceStatsViewEl: getElement<HTMLElement>('practice-stats-view'),
        correctInRoundPracticeEl: getElement<HTMLElement>('correct-in-round-practice'),
        attemptedInRoundPracticeEl: getElement<HTMLElement>('attempted-in-round-practice'),
        accuracyInRoundPracticeEl: getElement<HTMLElement>('accuracy-bar'),
        categoryStatsContainerEl: getElement<HTMLElement>('category-stats-container'),
        
        // Test Statistics
        testStatsViewEl: getElement<HTMLElement>('test-stats-view'),
        testProgressEl: getElement<HTMLElement>('test-progress-bar'),
        testAccuracyEl: getElement<HTMLElement>('test-accuracy-bar'),
        correctInRoundTestEl: getElement<HTMLElement>('test-progress-text'),
        attemptedInRoundTestEl: getElement<HTMLElement>('test-progress-text'),
        accuracyInRoundTestEl: getElement<HTMLElement>('test-accuracy-text'),
        
        // Test Modal
        testSelectionModalEl: getElement<HTMLElement>('test-selection-modal'),
        
        // Loading Indicator
        loadingIndicatorEl: getElement<HTMLElement>('loading-indicator'),
        
        // Umlaut Buttons
        umlautButtonsContainer: getElement<HTMLElement>('umlaut-buttons-container'),
        
        // SVG Icons
        SVG_SPEAKER_ICON: SVG_SPEAKER_ICON,
        
        // Artikel View Elements
        optionsContainer: getElement<HTMLElement>('options-container'),
        wordDisplay: getElement<HTMLElement>('word-display'),
        exampleDisplay: getElement<HTMLElement>('example-display'),
        
        // Success Popup
        successPopup: getElement<HTMLElement>('success-popup')
    };
}

// ========== EXPORTS ==========

// Initialisiere das DOM-Objekt
export const dom: DOMElements = initializeDOM();

// Exportiere Validierungsfunktionen
export { validateDOMElements, getElement };
export type { DOMValidationResult };