"use strict";
// dom.ts
// Zentrale DOM-Element-Referenzen mit Type-Safety
Object.defineProperty(exports, "__esModule", { value: true });
exports.dom = void 0;
// Helper function für sichere Element-Abfrage
function getElement(id) {
    var element = document.getElementById(id);
    if (!element) {
        console.error("Element with id '".concat(id, "' not found!"));
        // Erstelle ein Dummy-Element um Crashes zu vermeiden
        return document.createElement('div');
    }
    return element;
}
// SVG Speaker Icon
var SVG_SPEAKER_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n    <path fill-rule=\"evenodd\" d=\"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z\" clip-rule=\"evenodd\" />\n</svg>";
// Export das zentrale DOM-Objekt
exports.dom = {
    // Navigation Views
    navigationViewEl: getElement('navigation-view'),
    trainerMainViewEl: getElement('trainer-main-view'),
    navigationContainerEl: getElement('navigation-container'),
    backToMainTopicsButton: getElement('back-to-main-topics'),
    navigationTitleEl: getElement('navigation-title'),
    // Trainer Header
    backToSubtopicsButton: getElement('back-to-subtopics'),
    currentTrainingTitleEl: getElement('current-training-title'),
    modeButtonGridEl: getElement('mode-button-grid'),
    // Question & Display Areas
    questionDisplayEl: getElement('question-display-area'),
    exampleSentenceDisplayEl: getElement('example-sentence-display'),
    wordLineContainerEl: getElement('word-line-container'),
    sentenceLineContainerEl: getElement('sentence-line-container'),
    // Audio Buttons
    audioWordButtonEl: getElement('audio-word-button'),
    audioSentenceButtonEl: getElement('audio-sentence-button'),
    // Multiple Choice UI
    mcUiEl: getElement('mc-de-en-ui'),
    mcAnswersContainerEl: getElement('mc-answers-container'),
    // Spelling Mode UI
    spellingModeUiEl: getElement('spelling-mode-ui'),
    singleInputContainerEl: getElement('single-input-container'),
    spellingInputSingleEl: getElement('spelling-input-single'),
    nounInputContainerEl: getElement('noun-input-container'),
    spellingInputNoun1El: getElement('spelling-input-noun-1'),
    spellingInputNoun2El: getElement('spelling-input-noun-2'),
    checkSpellingButton: getElement('check-spelling-button'),
    // Cloze Mode UI
    clozeUiEl: getElement('cloze-adj-de-ui'),
    clozeHintContainerEl: getElement('cloze-hint-container'),
    clozeSentenceContainerEl: getElement('cloze-sentence-container'),
    checkClozeButton: getElement('check-cloze-button'),
    // Sentence Translation UI
    sentenceUiEl: getElement('sentence-translation-en-de-ui'),
    sentenceWordInputContainerEl: getElement('sentence-word-input-container'),
    checkSentenceButton: getElement('check-sentence-translation-button'),
    // Feedback & Continue
    feedbackContainerEl: getElement('feedback-container'),
    continueButton: getElement('continue-button'),
    messageBoxEl: getElement('message-box'),
    // Practice Statistics
    practiceStatsViewEl: getElement('practice-stats-view'),
    correctInRoundPracticeEl: getElement('correct-in-round-practice'),
    attemptedInRoundPracticeEl: getElement('attempted-in-round-practice'),
    accuracyInRoundPracticeEl: getElement('accuracy-in-round-practice'),
    categoryStatsContainerEl: getElement('category-stats-container'),
    // Test Statistics
    testStatsViewEl: getElement('test-stats-view'),
    testProgressEl: getElement('test-progress'),
    testAccuracyEl: getElement('test-accuracy'),
    correctInRoundTestEl: getElement('correct-in-round-test'),
    attemptedInRoundTestEl: getElement('attempted-in-round-test'),
    accuracyInRoundTestEl: getElement('accuracy-in-round-test'),
    // Test Modal
    testSelectionModalEl: getElement('test-selection-modal'),
    // Umlaut Buttons
    umlautButtonsContainer: getElement('umlaut-buttons-container'),
    // SVG Icons
    SVG_SPEAKER_ICON: SVG_SPEAKER_ICON
};
