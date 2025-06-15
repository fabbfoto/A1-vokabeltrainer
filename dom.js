// Inhalt für die neue Datei: dom.js

export const wortgruppenSelectorContainerEl = document.getElementById('wortgruppen-selector-container');
export const wortgruppenButtonsEl = document.getElementById('wortgruppen-buttons');
export const trainerMainViewEl = document.getElementById('trainer-main-view');
export const backToWortgruppenButton = document.getElementById('back-to-wortgruppen');
export const currentWortgruppeTitleEl = document.getElementById('current-wortgruppe-title');
export const wordLineContainerEl = document.getElementById('word-line-container');
export const sentenceLineContainerEl = document.getElementById('sentence-line-container');
export const questionDisplayEl = document.getElementById('question-display-area');
export const exampleSentenceDisplayEl = document.getElementById('example-sentence-display');
export const audioWordButtonEl = document.getElementById('audio-word-button');
export const audioSentenceButtonEl = document.getElementById('audio-sentence-button');
export const feedbackContainerEl = document.getElementById('feedback-container');
export const continueButton = document.getElementById('continue-button');
export const correctInRoundEl = document.getElementById('correct-in-round');
export const attemptedInRoundEl = document.getElementById('attempted-in-round');
export const accuracyBarEl = document.getElementById('accuracy-bar');
export const messageBoxEl = document.getElementById('message-box');
export const categoryStatsContainerEl = document.getElementById('category-stats-container');
export const landAdjColumnEl = document.getElementById('land-adj-column');

// --- UI-Modi ---

// Multiple Choice
export const mcUiEl = document.getElementById('mc-de-en-ui');
export const mcAnswersContainerEl = document.getElementById('mc-answers-container');

// --- HIER BEGINNEN DIE ÄNDERUNGEN ---

// Spelling Mode (Schreibweise)
export const spellingModeUiEl = document.getElementById('spelling-mode-ui');
export const singleInputContainerEl = document.getElementById('single-input-container');
export const nounInputContainerEl = document.getElementById('noun-input-container');
export const spellingInputSingleEl = document.getElementById('spelling-input-single');
export const spellingInputNoun1El = document.getElementById('spelling-input-noun-1');
export const spellingInputNoun2El = document.getElementById('spelling-input-noun-2');
export const checkSpellingButton = document.getElementById('check-spelling-button');

// --- HIER ENDEN DIE ÄNDERUNGEN ---

// Lückentext
export const clozeUiEl = document.getElementById('cloze-adj-de-ui');
export const clozeSentenceContainerEl = document.getElementById('cloze-sentence-container');
export const checkClozeButton = document.getElementById('check-cloze-button');

// Satzübersetzung
export const sentenceUiEl = document.getElementById('sentence-translation-en-de-ui');
export const sentenceWordInputContainerEl = document.getElementById('sentence-word-input-container');
export const checkSentenceButton = document.getElementById('check-sentence-translation-button');

export const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" /></svg>`;