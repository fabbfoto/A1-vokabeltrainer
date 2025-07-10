// shared/types/trainer.ts
// Neue State-Types für das Refactoring

import type { Word, TopicId, SubTopicId, WordId } from './vocabulary';
import type { TestConfiguration, TestResult } from './index';

// ========== BRANDED TYPES (WICHTIG - WERDEN NOCH VERWENDET) ==========
export type ModeId = string & { __brand: 'ModeId' };
export type TestId = string & { __brand: 'TestId' };
export type SessionId = string & { __brand: 'SessionId' };

// ========== LEARNING MODES (WICHTIG - WERDEN NOCH VERWENDET) ==========
export type LearningModeType = 
  | 'multipleChoice'
  | 'spelling'
  | 'cloze'
  | 'sentenceTranslation'
  | 'listening'
  | 'pronunciation';

export interface LearningMode {
  id: ModeId;
  name: string;
  type: LearningModeType;
  setupFunction: () => void;
  isActive: boolean;
}

export interface LearningModes {
  [modeId: string]: LearningMode;
}

// ========== TEST SYSTEM (WICHTIG - WERDEN NOCH VERWENDET) ==========
export type TestType = 'subTopic' | 'mainTopic' | 'global' | 'custom';
export type TestVariant = 'chaos' | 'structured';
export type TestCategory = 'bedeutung' | 'schreibweise' | 'luecke' | 'satz';

export const CATEGORY_MODE_MAP: Record<TestCategory, ModeId> = {
  'bedeutung': 'mc-de-en' as ModeId,
  'schreibweise': 'type-de-adj' as ModeId,
  'luecke': 'cloze-adj-de' as ModeId,
  'satz': 'sentence-translation-en-de' as ModeId
};

export interface TestScore {
  testId: TestId;
  correct: number;
  total: number;
  accuracy: number;
  timestamp: Date;
  testType: TestType;
  topicId?: TopicId;
  subTopicId?: SubTopicId;
  duration: number;
  modesUsed: ModeId[];
  startTime: number;
  endTime: number;
  averageTimePerQuestion: number;
  timePenalty: number;
  finalScore: number;
}

export interface WordTestResult {
  wordId: WordId;
  modeId: ModeId;
  correct: boolean;
  attempts: number;
  timeSpent: number;
  startTime: number;
  endTime: number;
}

export interface TestRecommendation {
  type: 'repeat' | 'practice' | 'advance';
  wordIds: WordId[];
  suggestedMode?: ModeId;
  reason: string;
}

// ========== UTILITY FUNCTIONS (WICHTIG - WERDEN NOCH VERWENDET) ==========
export function createTestId(id: string): TestId {
  return id as TestId;
}

export function createSessionId(): SessionId {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` as SessionId;
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function calculateTestScore(
  correct: number, 
  total: number, 
  timeInSeconds: number, 
  timePenaltyPerSecond: number = 2
): { baseScore: number; timePenalty: number; finalScore: number } {
  const percentCorrect = total > 0 ? (correct / total) * 100 : 0;
  const baseScore = Math.round(percentCorrect);
  const timePenalty = 0;
  const finalScore = baseScore;
  
  return {
    baseScore,
    timePenalty,
    finalScore
  };
}

export function calculateAverageTimePerQuestion(questionTimes: number[]): number {
  if (questionTimes.length === 0) return 0;
  const totalTime = questionTimes.reduce((sum, time) => sum + time, 0);
  return totalTime / questionTimes.length;
}

// ========== FEHLENDE TYPES (WERDEN NOCH VERWENDET) ==========
export interface Progress {
  [topicKey: string]: {
    [modeId: string]: Set<WordId> | WordId[];
  };
}

export interface SessionStats {
  sessionId: SessionId;
  startTime: Date;
  endTime?: Date;
  mode: ModeId;
  topicId?: TopicId;
  subTopicId?: SubTopicId;
  wordsAttempted: number;
  wordsCorrect: number;
  accuracy: number;
}

export interface WordProgress {
  wordId: WordId;
  modeId: ModeId;
  attempts: number;
  correctAttempts: number;
  lastAttempt: Date;
  masteryLevel: 'learning' | 'practiced' | 'mastered';
}

export function createModeId(id: string): ModeId {
  return id as ModeId;
}

export function calculateMasteryLevel(attempts: number, correctAttempts: number): WordProgress['masteryLevel'] {
  if (attempts === 0) return 'learning';
  const accuracy = correctAttempts / attempts;
  if (accuracy >= 0.9) return 'mastered';
  if (accuracy >= 0.7) return 'practiced';
  return 'learning';
}

export function shouldRepeatWord(wordProgress: WordProgress): boolean {
  return wordProgress.masteryLevel === 'learning' || 
         (wordProgress.masteryLevel === 'practiced' && 
          Date.now() - wordProgress.lastAttempt.getTime() > 24 * 60 * 60 * 1000);
}

// ========== NAVIGATION STATE ==========
export interface NavigationState {
    // Aktuelle Navigation
    currentMainTopic: TopicId | null;
    currentSubTopic: SubTopicId | null;
    previousMainTopic: TopicId | null;
    previousSubTopic: SubTopicId | null;
    
    // Letzte verwendete Modi pro Thema
    lastUsedModeByTopic: Record<string, ModeId>;
}

// ========== TRAINING STATE ==========
export interface TrainingState {
    // Aktuelle Training-Session
    currentVocabularySet: Word[];
    shuffledWordsForMode: Word[];
    currentWordIndex: number;
    currentWord: Word | null;
    currentMode: ModeId | null;
    sessionId: string | null;
    
    // Training-Modi
    isRepeatSessionActive: boolean;
    isCorrectionMode: boolean;
    
    // Session-Statistiken
    correctInCurrentRound: number;
    attemptedInCurrentRound: number;
    sessionStats: Array<{
        wordId: WordId;
        isCorrect: boolean;
        timestamp: number;
        mode: ModeId;
    }>;
    
    // UI-State
    activeTextInput: HTMLInputElement | null;
    isLoading: boolean;
    currentError: string | null;
}

// ========== PROGRESS STATE ==========
export interface ProgressState {
    // Lernfortschritt
    globalProgress: Record<string, Record<ModeId, Set<WordId>>>;
    masteredWordsByMode: Record<ModeId, Set<WordId>>;
    wordsToRepeatByMode: Record<ModeId, Set<WordId>>;
    perfectRunsByMode: Record<ModeId, number>;
    
    // Test-Ergebnisse
    lastTestScores: Record<string, TestResult>;
}

// ========== TEST STATE ==========
export interface TestState {
    // Test-Modus
    isTestModeActive: boolean;
    currentTest: TestConfiguration | null;
    testResults: TestResult[];
    
    // Test-Modus-Rotation (für Chaos-Tests)
    testModeRotation: ModeId[];
    currentTestModeIndex: number;
    
    // Zeitmessung
    testStartTime: number | null;
    currentQuestionStartTime: number | null;
    questionTimes: number[];
}

// ========== GESAMTER STATE ==========
export interface TrainerState {
    navigation: NavigationState;
    training: TrainingState;
    progress: ProgressState;
    test: TestState;
}

// ========== STATE MANAGER INTERFACES ==========
export interface StateManager<T> {
    getState(): T;
    setState(newState: Partial<T>): void;
    subscribe(callback: (state: T) => void): () => void;
}

export interface NavigationStateManager extends StateManager<NavigationState> {
    setCurrentTopic(mainTopic: TopicId, subTopic: SubTopicId): void;
    goBack(): void;
    setLastUsedMode(topicKey: string, mode: ModeId): void;
    getLastUsedMode(topicKey: string): ModeId | undefined;
}

export interface TrainingStateManager extends StateManager<TrainingState> {
    setVocabulary(words: Word[]): void;
    setMode(mode: ModeId, isRepeat?: boolean): void;
    nextWord(): void;
    resetSession(): void;
    addSessionStat(wordId: WordId, isCorrect: boolean, mode: ModeId): void;
}

export interface ProgressStateManager extends StateManager<ProgressState> {
    saveProgress(topicKey: string, mode: ModeId, wordId: WordId): void;
    removeProgress(topicKey: string, mode: ModeId, wordId: WordId): void;
    getProgress(topicKey: string, mode: ModeId): Set<WordId>;
    addToRepeatList(mode: ModeId, wordId: WordId): void;
    removeFromRepeatList(mode: ModeId, wordId: WordId): void;
    incrementPerfectRun(mode: ModeId): void;
    saveToLocalStorage(): void;
    loadFromLocalStorage(): void;
}

export interface TestStateManager extends StateManager<TestState> {
    startTest(config: TestConfiguration): void;
    endTest(): void;
    addTestResult(result: TestResult): void;
    startQuestionTimer(): void;
    endQuestionTimer(): void;
    getTestDuration(): number;
    getAverageTimePerQuestion(): number;
}

// ========== STATE INITIALIZATION ==========
export function createInitialNavigationState(): NavigationState {
    return {
        currentMainTopic: null,
        currentSubTopic: null,
        previousMainTopic: null,
        previousSubTopic: null,
        lastUsedModeByTopic: {},
    };
}

export function createInitialTrainingState(): TrainingState {
    return {
        currentVocabularySet: [],
        shuffledWordsForMode: [],
        currentWordIndex: -1,
        currentWord: null,
        currentMode: null,
        sessionId: null,
        isRepeatSessionActive: false,
        isCorrectionMode: false,
        correctInCurrentRound: 0,
        attemptedInCurrentRound: 0,
        sessionStats: [],
        activeTextInput: null,
        isLoading: false,
        currentError: null,
    };
}

export function createInitialProgressState(): ProgressState {
    return {
        globalProgress: {},
        masteredWordsByMode: {},
        wordsToRepeatByMode: {},
        perfectRunsByMode: {},
        lastTestScores: {},
    };
}

export function createInitialTestState(): TestState {
    return {
        isTestModeActive: false,
        currentTest: null,
        testResults: [],
        testModeRotation: [],
        currentTestModeIndex: 0,
        testStartTime: null,
        currentQuestionStartTime: null,
        questionTimes: [],
    };
}

export function createInitialTrainerState(): TrainerState {
    return {
        navigation: createInitialNavigationState(),
        training: createInitialTrainingState(),
        progress: createInitialProgressState(),
        test: createInitialTestState(),
    };
}

// ========== RE-EXPORTS ==========
export type { TestConfiguration, TestResult } from './index';