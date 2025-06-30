// dom.ts
// Zentrale DOM-Element-Referenzen mit Type-Safety

export interface DOMElements {
    // Navigation Views
    navigationViewEl: HTMLElement;
    trainerMainViewEl: HTMLElement;
    navigationContainerEl: HTMLElement;
    backToMainTopicsButton: HTMLButtonElement;
    navigationTitleEl: HTMLElement;
    
    // Trainer Header
    backToSubtopicsButton: HTMLButtonElement;
    currentTrainingTitleEl: HTMLElement;
    modeButtonGridEl: HTMLElement;
    
    // Question & Display Areas
    questionDisplayEl: HTMLElement;
    exampleSentenceDisplayEl: HTMLElement;
    wordLineContainerEl: HTMLElement;
    sentenceLineContainerEl: HTMLElement;
    
    // Audio Buttons
    audioWordButtonEl: HTMLButtonElement;
    audioSentenceButtonEl: HTMLButtonElement;
    
    // Multiple Choice UI
    mcUiEl: HTMLElement;
    mcAnswersContainerEl: HTMLElement;
    
    // Spelling Mode UI
    spellingModeUiEl: HTMLElement;
    singleInputContainerEl: HTMLElement;
    spellingInputSingleEl: HTMLInputElement;
    nounInputContainerEl: HTMLElement;
    spellingInputNoun1El: HTMLInputElement;
    spellingInputNoun2El: HTMLInputElement;
    checkSpellingButton: HTMLButtonElement;
    
    // Cloze Mode UI
    clozeUiEl: HTMLElement;
    clozeHintContainerEl: HTMLElement;
    clozeSentenceContainerEl: HTMLElement;
    checkClozeButton: HTMLButtonElement;
    
    // Sentence Translation UI
    sentenceUiEl: HTMLElement;
    sentenceWordInputContainerEl: HTMLElement;
    checkSentenceButton: HTMLButtonElement;
    
    // Feedback & Continue
    feedbackContainerEl: HTMLElement;
    continueButton: HTMLButtonElement;
    messageBoxEl: HTMLElement;
    
    // Practice Statistics
    practiceStatsViewEl: HTMLElement;
    correctInRoundPracticeEl: HTMLElement;
    attemptedInRoundPracticeEl: HTMLElement;
    accuracyInRoundPracticeEl: HTMLElement;
    categoryStatsContainerEl: HTMLElement;
    
    // Test Statistics
    testStatsViewEl: HTMLElement;
    testProgressEl: HTMLElement;
    testAccuracyEl: HTMLElement;
    correctInRoundTestEl: HTMLElement;
    attemptedInRoundTestEl: HTMLElement;
    accuracyInRoundTestEl: HTMLElement;
    
    // Test Modal
    testSelectionModalEl: HTMLElement;
    
    // Umlaut Buttons
    umlautButtonsContainer: HTMLElement;
    
    // SVG Icons
    SVG_SPEAKER_ICON: string;
}

// Helper function für sichere Element-Abfrage
function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id '${id}' not found!`);
        // Erstelle ein Dummy-Element um Crashes zu vermeiden
        return document.createElement('div') as unknown as T;
    }
    return element as T;
}

// SVG Speaker Icon
const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`;

// Export das zentrale DOM-Objekt
export const dom: DOMElements = {
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
    continueButton: getElement<HTMLButtonElement>('continue-button'),
    messageBoxEl: getElement<HTMLElement>('message-box'),
    
    // Practice Statistics - 🔧 FIX: Korrekte IDs verwenden
    practiceStatsViewEl: getElement<HTMLElement>('practice-stats-view'),
    correctInRoundPracticeEl: getElement<HTMLElement>('correct-in-round-practice'),
    attemptedInRoundPracticeEl: getElement<HTMLElement>('attempted-in-round-practice'),
    // 🔧 FIX: 'accuracy-in-round-practice' existiert nicht → verwende 'accuracy-bar'
    accuracyInRoundPracticeEl: getElement<HTMLElement>('accuracy-bar'),
    categoryStatsContainerEl: getElement<HTMLElement>('category-stats-container'),
    
    // Test Statistics - 🔧 FIX: Korrekte IDs aus index.html verwenden
    testStatsViewEl: getElement<HTMLElement>('test-stats-view'),
    // 🔧 FIX: 'test-progress' → 'test-progress-bar'
    testProgressEl: getElement<HTMLElement>('test-progress-bar'),
    // 🔧 FIX: 'test-accuracy' → 'test-accuracy-bar'
    testAccuracyEl: getElement<HTMLElement>('test-accuracy-bar'),
    // 🔧 FIX: 'correct-in-round-test' → 'test-progress-text' (repurpose)
    correctInRoundTestEl: getElement<HTMLElement>('test-progress-text'),
    // 🔧 FIX: 'attempted-in-round-test' → 'test-progress-text' (same element)
    attemptedInRoundTestEl: getElement<HTMLElement>('test-progress-text'),
    // 🔧 FIX: 'accuracy-in-round-test' → 'test-accuracy-text'
    accuracyInRoundTestEl: getElement<HTMLElement>('test-accuracy-text'),
    
    // Test Modal
    testSelectionModalEl: getElement<HTMLElement>('test-selection-modal'),
    
    // Umlaut Buttons
    umlautButtonsContainer: getElement<HTMLElement>('umlaut-buttons-container'),
    
    // SVG Icons
    SVG_SPEAKER_ICON: SVG_SPEAKER_ICON
};