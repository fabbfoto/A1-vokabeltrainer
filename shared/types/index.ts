// shared/types/index.ts
// Professional barrel export for all type definitions
// This is the single entry point for all types in the application

// ========== VOCABULARY TYPES ==========
export type {
  // Branded Types
  WordId,
  TopicId,
  SubTopicId,
  
  // Core Types
  WordType,
  Article,
  AuxiliaryVerb,
  CaseType,
  
  // Grammar Interfaces
  CaseElement,
  Conjugation,
  Imperative,
  
  // Word Types (Discriminated Union)
  Word,
  Noun,
  Verb,
  Adjective,
  Adverb,
  Preposition,
  Pronoun,
  Conjunction,
  Interjection,
  
  // Vocabulary Structure
  SubTopic,
  MainTopic,
  VocabularyStructure
} from './vocabulary.js';

// Export vocabulary utilities
export {
  // Type Guards
  isNoun,
  isVerb,
  isAdjective,
  isAdverb,
  isPreposition,
  isPronoun,
  isConjunction,
  isInterjection,
  
  // Utility Functions
  createWordId,
  createTopicId,
  createSubTopicId,
  createVocabulary,
  getMainTopics,
  getSubTopics,
  getWordCount,
  getTopicCounts,
  validateWord
} from './vocabulary.js';

// ========== TRAINER TYPES ==========
export type {
  // Branded Types
  ModeId,
  TestId,
  SessionId,
  
  // Learning Types
  LearningModeType,
  LearningMode,
  LearningModes,
  
  // Progress Types
  Progress,
  WordProgress,
  SessionStats,
  
  // Test Types
  TestType,
  TestConfiguration,
  TestScore,
  TestResult,
  WordTestResult,
  TestRecommendation,
  
  // State Types
  TrainerState,
  TrainerAction
} from './trainer.js';

// Export trainer utilities
export {
  createModeId,
  createTestId,
  createSessionId,
  calculateAccuracy,
  calculateMasteryLevel,
  shouldRepeatWord
} from './trainer.js';

// ========== UI TYPES ==========
export type {
  // DOM Types
  DOMElements,
  
  // Callback Types
  NavigationCallbacks,
  LearningCallbacks,
  TestCallbacks,
  UIStateCallbacks,
  UICallbacks,
  
  // UI State Types
  MessageType,
  UIMode,
  UIState,
  UIMessage,
  
  // Component Types
  ButtonVariant,
  ButtonSize,
  ButtonConfig,
  ProgressBarConfig,
  ModalConfig,
  ModalButton,
  FormField,
  FormConfig,
  
  // Learning Mode UI Types
  LearningModeSetup,
  MultipleChoiceSetup,
  SpellingModeSetup,
  ClozeSetup,
  SentenceTranslationSetup,
  
  // Event Types
  CustomUIEvent,
  NavigationEvent,
  LearningEvent,
  
  // Utility Types
  ElementRef,
  ComponentProps,
  RenderFunction,
  
  // Accessibility Types
  A11yConfig,
  KeyboardShortcut
} from './ui.js';

// ========== API TYPES ==========
export type {
  // Branded Types
  UserId,
  SessionToken,
  DocumentId,
  
  // User Types
  User,
  UserPreferences,
  ReminderSettings,
  UserSubscription,
  
  // Authentication Types
  AuthCredentials,
  AuthResult,
  AuthState,
  AuthUI,
  AuthService,
  InitializeAuthResult,
  
  // Sync Types
  UserData,
  SyncService,
  SyncConflict,
  SyncResult,
  
  // Firestore Types
  FirestoreUser,
  FirestoreProgress,
  FirestoreTestScore,
  FirestoreSessionStats,
  
  // Achievement Types
  Achievement,
  StreakData,
  
  // API Response Types
  APIResponse,
  APIError,
  PaginatedResponse,
  
  // Voice & Audio Types
  VoiceConfig,
  AudioResponse,
  TTSService,
  VoiceOption,
  
  // Analytics Types
  AnalyticsEvent,
  LearningAnalytics,
  WeeklyProgress,
  AnalyticsService
} from './api.js';

// Export API utilities
export {
  createUserId,
  createSessionToken,
  createDocumentId,
  toFirestoreTimestamp,
  fromFirestoreTimestamp,
  convertProgressToFirestore,
  convertProgressFromFirestore
} from './api.js';

// ========== LEGACY COMPATIBILITY ==========
// For backward compatibility during migration
// These will be removed once all files are migrated

/** @deprecated Use the new discriminated Word union type instead */
export interface LegacyWord {
  id: string;
  wortart?: 'Nomen' | 'Verb' | 'Adjektiv' | 'Adverb' | 'Präposition' | 'Pronomen' | 'Konjunktion' | 'Interjektion';
  german: string;
  english: string;
  artikel?: 'der' | 'die' | 'das';
  plural?: string;
  partizip_ii?: string;
  hilfsverb_perfekt?: 'haben' | 'sein';
  trennbar?: boolean;
  example_de?: Array<{ text: string; kasus: string }>;
  example_en?: string;
  cloze_parts?: string[];
  cloze_answers?: string[];
  konjugation_praesens?: Record<string, string>;
  imperativ?: Record<string, string>;
}

/** @deprecated Use VocabularyStructure instead */
export type LegacyVocabularyStructure = {
  [mainTopic: string]: {
    [subTopic: string]: LegacyWord[];
  };
};

// ========== TYPE UTILITIES ==========
// Advanced TypeScript utilities for the application

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type NonEmptyArray<T> = [T, ...T[]];

export type ValueOf<T> = T[keyof T];

export type KeysOf<T> = keyof T;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// ========== RUNTIME TYPE VALIDATION ==========
// Type guards and validators for runtime type checking

export function isWordId(value: unknown): value is WordId {
  return typeof value === 'string' && value.length > 0;
}

export function isTopicId(value: unknown): value is TopicId {
  return typeof value === 'string' && value.length > 0;
}

export function isModeId(value: unknown): value is ModeId {
  return typeof value === 'string' && value.length > 0;
}

export function isUserId(value: unknown): value is UserId {
  return typeof value === 'string' && value.length > 0;
}

export function isValidWord(value: unknown): value is Word {
  if (!value || typeof value !== 'object') return false;
  
  const word = value as any;
  return (
    isWordId(word.id) &&
    typeof word.german === 'string' &&
    typeof word.english === 'string' &&
    typeof word.wordType === 'string' &&
    ['noun', 'verb', 'adjective', 'adverb', 'preposition', 'pronoun', 'conjunction', 'interjection'].includes(word.wordType)
  );
}

export function isValidTrainerState(value: unknown): value is TrainerState {
  if (!value || typeof value !== 'object') return false;
  
  const state = value as any;
  return (
    typeof state.currentWordIndex === 'number' &&
    typeof state.correctInCurrentRound === 'number' &&
    typeof state.attemptedInCurrentRound === 'number' &&
    Array.isArray(state.currentVocabularySet) &&
    Array.isArray(state.shuffledWordsForMode)
  );
}

// ========== VERSION INFO ==========
export const TYPE_SYSTEM_VERSION = '2.0.0';
export const MIGRATION_DATE = '2025-07-01';
export const COMPATIBILITY_NOTES = 'Professional type system with discriminated unions and branded types';

// ========== TYPE DOCUMENTATION ==========
/**
 * @fileoverview
 * 
 * This is the central type system for the A1 German Vocabulary Trainer.
 * 
 * Key Features:
 * - Discriminated Unions for type safety
 * - Branded Types for preventing ID confusion
 * - Comprehensive vocabulary type modeling
 * - Professional API and UI type definitions
 * 
 * Migration Notes:
 * - Replaces both `shared/types/index.ts` and `vokabular-types.ts`
 * - Uses English naming convention throughout
 * - Maintains backward compatibility during transition
 * 
 * Usage:
 * ```typescript
 * import type { Word, TrainerState, VocabularyStructure } from './shared/types/index.js';
 * import { isNoun, createWordId, validateWord } from './shared/types/index.js';
 * ```
 */