// Inhalt für die neue Datei: state.js

const state = {
    // Der komplette Anwendungszustand an einem Ort
    currentVocabularySet: [],
    shuffledVocabForMode: [],
    currentWortgruppeName: "",
    currentMode: 'mc-de-en',
    currentWordData: null,
    currentWordIndexInShuffled: -1,
    correctInRound: 0,
    attemptedInRound: 0,
    globalProgress: {},
    masteredWordsByMode: {},
    wordsToRepeatByMode: {},
    isRepeatSessionActive: false
};

// Wir exportieren das gesamte Objekt als "Standard"-Export
export default state;