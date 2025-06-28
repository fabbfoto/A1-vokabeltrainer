// User Type
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  lastLogin: Date;
}

// Vokabel Type
export interface Word {
  id: string;
  german: string;
  english: string;
  artikel?: string;
  plural?: string;
  exampleSentence?: string;
  hint?: string;
  clozeText?: string;
  translation?: string;
  wortart?: string;
  example_de?: any;
  example_en?: string;
  cloze_parts?: string[];
  cloze_answers?: string[];
  [key: string]: any;
}

// Learning Mode Types
export type LearningMode = 
  | 'mc-de-en' 
  | 'type-de-adj' 
  | 'cloze-adj-de' 
  | 'sentence-translation-en-de';

// Progress Type
export interface Progress {
  [progressKey: string]: {
    [mode: string]: Set<string>;
  };
}

// Test Types
export type TestType = 'subtopic' | 'mainTopic' | 'global';

// Test Result
export interface TestResult {
  correct: number;
  total: number;
  accuracy: number;
  timestamp?: number;
  testType?: TestType;
  topic?: string;
  subtopic?: string;
}

// Vocabulary Structure Type
export interface VocabularyStructure {
  [mainTopic: string]: {
    [subTopic: string]: Word[];
  };
}

// Learning Mode Configuration
export interface LearningModeConfig {
  name: string;
  setupFunc: () => void;
}

// Learning Modes Object Type
export type LearningModesObject = Record<LearningMode, LearningModeConfig>;

// Auth Service Types
export interface AuthService {
  isLoggedIn(): boolean;
}

export interface AuthUI {
  hide(): void;
  show(): void;
  updateUIAfterLogin(user: any): void;
  updateUIAfterLogout(): void;
}

export interface SyncService {
  onSyncUpdate(callback: (type: string, data: any) => void): void;
  startRealtimeSync(userId: string): void;
  stopRealtimeSync(): void;
  saveProgress(progress: any): void;
}

// Callbacks Type
export interface UICallbacks {
  handleNavigation: (event: Event) => void;
  starteGesamtTest: (modus: LearningMode) => void;
  starteHauptthemaTest: (modus: LearningMode, mainTopicName: string) => void;
  getVokabular: () => VocabularyStructure;
}

// State Interface für trainer.ts
export interface AppState {
  currentMainTopic: string | null;
  currentSubTopic: string | null;
  currentVocabularySet: Word[];
  shuffledVocabForMode: Word[];
  currentWordIndexInShuffled: number;
  currentWordData: Word | null;
  currentMode: LearningMode | null;
  isTestModeActive: boolean;
  isRepeatSessionActive: boolean;
  correctInRound: number;
  attemptedInRound: number;
  globalProgress: Progress;
  masteredWordsByMode: Record<string, Set<string>>;
  wordsToRepeatByMode: Record<string, Set<string>>;
  lastTestScores: Record<string, TestResult>;
  activeTextInput: HTMLInputElement | null;
  testType: TestType | null;
  testKey: string | null;
  previousMainTopic: string | null;
  previousSubTopic: string | null;
}