// shared/types/trainer.ts
// Professional trainer state and learning logic types

import type { Word, WordId, TopicId, SubTopicId } from './vocabulary.js';

// ========== BRANDED TYPES ==========
export type ModeId = string & { __brand: 'ModeId' };
export type TestId = string & { __brand: 'TestId' };
export type SessionId = string & { __brand: 'SessionId' };

// ========== LEARNING MODES ==========
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

// ========== PROGRESS TRACKING ==========
export interface Progress {
  [topicKey: string]: {
    [modeId: string]: Set<WordId> | WordId[]; // Set for runtime, Array for storage
  };
}

export interface WordProgress {
  wordId: WordId;
  modeId: ModeId;
  attempts: number;
  correctAttempts: number;
  lastAttempt: Date;
  masteryLevel: 'learning' | 'practiced' | 'mastered';
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

// ========== TEST SYSTEM ==========
export type TestType = 'subTopic' | 'mainTopic' | 'global' | 'custom';

export interface TestConfiguration {
  id: TestId;
  type: TestType;
  name: string; // General name for the configuration
  testTitle: string; // The title displayed during the test run
  topicId?: TopicId;
  subTopicId?: SubTopicId;
  wordIds?: WordId[];
  modes: ModeId[]; // All possible modes for this test configuration
  mode: ModeId; // The single mode selected for this specific test run
  minAccuracy: number;
  maxAttempts: number;
}

export interface TestScore {
  testId: TestId;
  correct: number;
  total: number;
  accuracy: number;
  timestamp: Date;
  testType: TestType;
  topicId?: TopicId;
  subTopicId?: SubTopicId;
  duration: number; // in seconds
  modesUsed: ModeId[];
}

export interface TestResult {
  testId: TestId;
  passed: boolean;
  score: TestScore;
  wordResults: WordTestResult[];
  recommendations: TestRecommendation[];
}

export interface WordTestResult {
  wordId: WordId;
  modeId: ModeId;
  correct: boolean;
  attempts: number;
  timeSpent: number; // in seconds
}

export interface TestRecommendation {
  type: 'repeat' | 'practice' | 'advance';
  wordIds: WordId[];
  suggestedMode?: ModeId;
  reason: string;
}

// ========== TRAINER STATE ==========
export interface TrainerState {
  // Navigation State
  currentMainTopic: TopicId | null;
  currentSubTopic: SubTopicId | null;
  previousMainTopic: TopicId | null;
  previousSubTopic: SubTopicId | null;
  
  // Learning Session State
  currentVocabularySet: Word[];
  shuffledWordsForMode: Word[];
  currentWordIndex: number;
  currentWord: Word | null;
  currentMode: ModeId | null;
  sessionId: SessionId | null;
  
  // Test State
  isTestModeActive: boolean;
  isRepeatSessionActive: boolean;
  currentTest: TestConfiguration | null;
  testResults: TestResult[];
  
  // Progress State
  correctInCurrentRound: number;
  attemptedInCurrentRound: number;
  globalProgress: Progress;
  masteredWordsByMode: Record<string, Set<WordId>>;
  wordsToRepeatByMode: Record<string, Set<WordId>>;
  lastTestScores: Record<string, TestScore>;
  sessionStats: SessionStats[];
  
  // UI State
  activeTextInput: HTMLInputElement | null;
  isLoading: boolean;
  currentError: string | null;
}

// ========== TRAINER ACTIONS ==========
export type TrainerAction = 
  | { type: 'NAVIGATE_TO_TOPIC'; payload: { mainTopic: TopicId; subTopic?: SubTopicId } }
  | { type: 'START_MODE'; payload: { mode: ModeId; words: Word[] } }
  | { type: 'SUBMIT_ANSWER'; payload: { isCorrect: boolean; timeSpent: number } }
  | { type: 'NEXT_WORD' }
  | { type: 'START_TEST'; payload: { testConfig: TestConfiguration } }
  | { type: 'COMPLETE_TEST'; payload: { testResult: TestResult } }
  | { type: 'UPDATE_PROGRESS'; payload: { wordId: WordId; modeId: ModeId; correct: boolean } }
  | { type: 'SET_ERROR'; payload: { error: string } }
  | { type: 'CLEAR_ERROR' }
  | { type: 'SET_LOADING'; payload: { isLoading: boolean } };

// ========== UTILITY FUNCTIONS ==========
export function createModeId(id: string): ModeId {
  return id as ModeId;
}

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

export function calculateMasteryLevel(attempts: number, correctAttempts: number): WordProgress['masteryLevel'] {
  if (attempts === 0) return 'learning';
  const accuracy = correctAttempts / attempts;
  if (accuracy >= 0.9 && attempts >= 3) return 'mastered';
  if (accuracy >= 0.7 && attempts >= 2) return 'practiced';
  return 'learning';
}

export function shouldRepeatWord(wordProgress: WordProgress): boolean {
  return wordProgress.masteryLevel === 'learning' || 
         (wordProgress.masteryLevel === 'practiced' && 
          Date.now() - wordProgress.lastAttempt.getTime() > 24 * 60 * 60 * 1000); // 24 hours
}