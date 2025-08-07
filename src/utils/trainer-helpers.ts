// Trainer Helper Functions - Extrahiert aus trainer.ts
import type { TrainerState, ModeId, TopicId, SubTopicId, WordId } from '../core/types/trainer';

// Topic Key Management
export function getTopicKey(main: TopicId | null, sub: SubTopicId | null): string {
    if (!main || !sub) return '';
    return `${main}|${sub}`;
}

// Mode Management
export function getCurrentMode(state: TrainerState): ModeId | null {
    return state.training.currentMode;
}

export function isCurrentModeValid(state: TrainerState): boolean {
    return state.training.currentMode !== null;
}

// Progress Management
export function getProgressForMode(state: TrainerState, progressKey: string): Set<WordId> {
    if (!state.progress.globalProgress[progressKey]) {
        state.progress.globalProgress[progressKey] = {};
    }
    if (!state.progress.globalProgress[progressKey][state.training.currentMode!]) {
        state.progress.globalProgress[progressKey][state.training.currentMode!] = new Set();
    }
    const progress = state.progress.globalProgress[progressKey][state.training.currentMode!];
    return progress || new Set();
}

export function setProgressForMode(state: TrainerState, progressKey: string, progress: Set<WordId>): void {
    if (!state.progress.globalProgress[progressKey]) {
        state.progress.globalProgress[progressKey] = {};
    }
    state.progress.globalProgress[progressKey][state.training.currentMode!] = progress;
}

export function getWordsToRepeatForMode(state: TrainerState): Set<WordId> {
    return state.progress.wordsToRepeatByMode[state.training.currentMode!] || new Set();
}

export function setWordsToRepeatForMode(state: TrainerState, words: Set<WordId>): void {
    state.progress.wordsToRepeatByMode[state.training.currentMode!] = words;
}

// Safe Mode Setting
export function safeSetMode(state: TrainerState, modeId: ModeId | null, isRepeat: boolean = false): void {
    if (modeId) {
        state.training.currentMode = modeId;
        state.training.attemptedInCurrentRound = 0;
        state.training.correctInCurrentRound = 0;
        state.training.isCorrectionMode = false;
    }
}

// Test Mode Management
export function exitTestMode(state: TrainerState): void {
    state.test.isTestModeActive = false;
    state.test.testStartTime = null;
    state.test.currentTest = null;
    state.training.currentMode = null;
    state.training.currentWord = null;
    state.training.shuffledWordsForMode = [];
    state.training.attemptedInCurrentRound = 0;
    state.training.correctInCurrentRound = 0;
    state.training.isCorrectionMode = false;
}

// Statistics Management
export function updateStatistics(state: TrainerState): void {
    // Update statistics based on current state
    const accuracy = state.training.attemptedInCurrentRound > 0 
        ? state.training.correctInCurrentRound / state.training.attemptedInCurrentRound 
        : 0;
    
    console.log(`📊 Statistiken: ${state.training.correctInCurrentRound}/${state.training.attemptedInCurrentRound} (${(accuracy * 100).toFixed(1)}%)`);
}

// Progress Management
export function updateProgress(state: TrainerState, isCorrect: boolean): void {
    if (isCorrect) {
        state.training.correctInCurrentRound++;
    }
    state.training.attemptedInCurrentRound++;
}

// Error Management
export function addToErrorList(state: TrainerState): void {
    if (!state.training.currentWord || !state.training.currentMode) return;
    
    if (!state.progress.wordsToRepeatByMode[state.training.currentMode]) {
        state.progress.wordsToRepeatByMode[state.training.currentMode] = new Set();
    }
    const errorSet = state.progress.wordsToRepeatByMode[state.training.currentMode];
    if (errorSet) {
        errorSet.add(state.training.currentWord.id);
    }
}

export function removeFromErrorList(state: TrainerState): void {
    if (!state.training.currentWord || !state.training.currentMode) return;
    
    const errorSet = state.progress.wordsToRepeatByMode[state.training.currentMode];
    if (errorSet) {
        errorSet.delete(state.training.currentWord.id);
        
        // Leere Sets entfernen
        if (errorSet.size === 0) {
            delete state.progress.wordsToRepeatByMode[state.training.currentMode];
        }
    }
}

// Validation Helpers
export function validateState(state: TrainerState): boolean {
    return !!(
        state.navigation.currentMainTopic &&
        state.navigation.currentSubTopic &&
        state.training.currentMode
    );
}

export function validateWord(word: any): boolean {
    return !!(
        word &&
        word.id &&
        word.german &&
        word.english
    );
}

// Time Management
export function getCurrentTime(): number {
    return Date.now();
}

export function calculateTimeSpent(startTime: number): number {
    return (getCurrentTime() - startTime) / 1000;
}

// Array Management
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i]!;
        shuffled[i] = shuffled[j]!;
        shuffled[j] = temp;
    }
    return shuffled;
}

// String Management
export function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

export function compareStrings(str1: string, str2: string): boolean {
    return normalizeString(str1) === normalizeString(str2);
} 