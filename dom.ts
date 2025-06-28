// packages/trainer-themen/dom.ts
// This file centralizes all DOM element lookups for the theme trainer.

// DOM Elements Interface
interface DOMElements {
    navigationViewEl: HTMLElement | null;
    trainerMainViewEl: HTMLElement | null;
    navigationContainerEl: HTMLElement | null;
    backToMainTopicsButton: HTMLButtonElement | null;
    navigationTitleEl: HTMLElement | null;
    backToSubtopicsButton: HTMLButtonElement | null;
    currentTrainingTitleEl: HTMLElement | null;
    modeButtonGridEl: HTMLElement | null;
    questionDisplayEl: HTMLElement | null;
    exampleSentenceDisplayEl: HTMLElement | null;
    mcUiEl: HTMLElement | null;
    mcAnswersContainerEl: HTMLElement | null;
    spellingModeUiEl: HTMLElement | null;
    singleInputContainerEl: HTMLElement | null;
    spellingInputSingleEl: HTMLInputElement | null;
    nounInputContainerEl: HTMLElement | null;
    spellingInputNoun1El: HTMLInputElement | null;
    spellingInputNoun2El: HTMLInputElement | null;
    checkSpellingButton: HTMLButtonElement | null;
    clozeUiEl: HTMLElement | null;
    clozeHintContainerEl: HTMLElement | null;
    clozeSentenceContainerEl: HTMLElement | null;
    checkClozeButton: HTMLButtonElement | null;
    sentenceUiEl: HTMLElement | null;
    sentenceWordInputContainerEl: HTMLElement | null;
    checkSentenceButton: HTMLButtonElement | null;
    feedbackContainerEl: HTMLElement | null;
    continueButton: HTMLButtonElement | null;
    messageBoxEl: HTMLElement | null;
    wordLineContainerEl: HTMLElement | null;
    sentenceLineContainerEl: HTMLElement | null;
    audioWordButtonEl: HTMLButtonElement | null;
    audioSentenceButtonEl: HTMLButtonElement | null;
    practiceStatsViewEl: HTMLElement | null;
    correctInRoundPracticeEl: HTMLElement | null;
    attemptedInRoundPracticeEl: HTMLElement | null;
    accuracyBarEl: HTMLElement | null;
    categoryStatsContainerEl: HTMLElement | null;
    testStatsViewEl: HTMLElement | null;
    testProgressTextEl: HTMLElement | null;
    testProgressEl: HTMLElement | null;
    testAccuracyTextEl: HTMLElement | null;
    testAccuracyBarEl: HTMLElement | null;
    testSelectionModalEl: HTMLElement | null;
    testOptionsGridEl: HTMLElement | null;
    umlautButtonsContainerEl: HTMLElement | null;
    SVG_SPEAKER_ICON: string;
}

export const dom: DOMElements = {
    navigationViewEl: document.getElementById('navigation-view'),
    trainerMainViewEl: document.getElementById('trainer-main-view'),
    navigationContainerEl: document.getElementById('navigation-container'),
    backToMainTopicsButton: document.getElementById('back-to-main-topics') as HTMLButtonElement,
    navigationTitleEl: document.getElementById('navigation-title'),
    backToSubtopicsButton: document.getElementById('back-to-subtopics') as HTMLButtonElement,
    currentTrainingTitleEl: document.getElementById('current-training-title'),
    modeButtonGridEl: document.getElementById('mode-button-grid'),
    questionDisplayEl: document.getElementById('question-display-area'),
    exampleSentenceDisplayEl: document.getElementById('example-sentence-display'),
    mcUiEl: document.getElementById('mc-de-en-ui'),
    mcAnswersContainerEl: document.getElementById('mc-answers-container'),
    spellingModeUiEl: document.getElementById('spelling-mode-ui'),
    singleInputContainerEl: document.getElementById('single-input-container'),
    spellingInputSingleEl: document.getElementById('spelling-input-single') as HTMLInputElement,
    nounInputContainerEl: document.getElementById('noun-input-container'),
    spellingInputNoun1El: document.getElementById('spelling-input-noun-1') as HTMLInputElement,
    spellingInputNoun2El: document.getElementById('spelling-input-noun-2') as HTMLInputElement,
    checkSpellingButton: document.getElementById('check-spelling-button') as HTMLButtonElement,
    clozeUiEl: document.getElementById('cloze-adj-de-ui'),
    clozeHintContainerEl: document.getElementById('cloze-hint-container'),
    clozeSentenceContainerEl: document.getElementById('cloze-sentence-container'),
    checkClozeButton: document.getElementById('check-cloze-button') as HTMLButtonElement,
    sentenceUiEl: document.getElementById('sentence-translation-en-de-ui'),
    sentenceWordInputContainerEl: document.getElementById('sentence-word-input-container'),
    checkSentenceButton: document.getElementById('check-sentence-translation-button') as HTMLButtonElement,
    feedbackContainerEl: document.getElementById('feedback-container'),
    continueButton: document.getElementById('continue-button') as HTMLButtonElement,
    messageBoxEl: document.getElementById('message-box'),
    wordLineContainerEl: document.getElementById('word-line-container'),
    sentenceLineContainerEl: document.getElementById('sentence-line-container'),
    audioWordButtonEl: document.getElementById('audio-word-button') as HTMLButtonElement,
    audioSentenceButtonEl: document.getElementById('audio-sentence-button') as HTMLButtonElement,
    practiceStatsViewEl: document.getElementById('practice-stats-view'),
    correctInRoundPracticeEl: document.getElementById('correct-in-round-practice'),
    attemptedInRoundPracticeEl: document.getElementById('attempted-in-round-practice'),
    accuracyBarEl: document.getElementById('accuracy-bar'),
    categoryStatsContainerEl: document.getElementById('category-stats-container'),
    testStatsViewEl: document.getElementById('test-stats-view'),
    testProgressTextEl: document.getElementById('test-progress-text'),
    testProgressEl: document.getElementById('test-progress-bar'),
    testAccuracyTextEl: document.getElementById('test-accuracy-text'),
    testAccuracyBarEl: document.getElementById('test-accuracy-bar'),
    testSelectionModalEl: document.getElementById('test-selection-modal'),
    testOptionsGridEl: document.getElementById('test-options-grid'),
    umlautButtonsContainerEl: document.getElementById('umlaut-buttons-container'),
    SVG_SPEAKER_ICON: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 12H4a1 1 0 00-1 1v2a1 1 0 001 1h1.858l4.47 4.47A1 1 0 0012 20V4a1 1 0 00-1.672-.748L5.858 12z" /></svg>`
};