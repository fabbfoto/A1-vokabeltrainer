// shared/types/index.ts
// Vollständige Type-Definitionen für den A1-Vokabeltrainer

// ========== USER & AUTH TYPES ==========
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  lastLogin: Date;
}

// ========== VOKABEL TYPES ==========
export interface Word {
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

// ========== PROGRESS & LEARNING TYPES ==========
export interface Progress {
  [topicKey: string]: {
    [mode: string]: Set<string> | string[]; // Set für Runtime, Array für Storage
  };
}

export interface TestScore {
  correct: number;
  total: number;
  accuracy: number;
  timestamp: number;
  testType: 'subtopic' | 'mainTopic' | 'global';
  topic?: string;
  subtopic?: string;
}

export interface LearningMode {
  name: string;
  setupFunc: () => void;
}

export interface LearningModes {
  [modeId: string]: LearningMode;
}

// ========== STATE TYPES ==========
export interface TrainerState {
  // Navigation
  currentMainTopic: string | null;
  currentSubTopic: string | null;
  previousMainTopic: string | null;
  previousSubTopic: string | null;
  
  // Vokabeln & Training
  currentVocabularySet: Word[];
  shuffledVocabForMode: Word[];
  currentWordIndexInShuffled: number;
  currentWordData: Word | null;
  currentMode: string | null;
  
  // Test-System
  isTestModeActive: boolean;
  isRepeatSessionActive: boolean;
  testType: 'subtopic' | 'mainTopic' | 'global' | null;
  testKey: string | null;
  
  // Fortschritt
  correctInRound: number;
  attemptedInRound: number;
  globalProgress: Progress;
  masteredWordsByMode: Record<string, Set<string>>;
  wordsToRepeatByMode: Record<string, Set<string>>;
  lastTestScores: Record<string, TestScore>;
  
  // UI
  activeTextInput: HTMLInputElement | null;
}

// ========== VOKABULAR STRUCTURE ==========
export interface VocabularyStructure {
  [mainTopic: string]: {
    [subTopic: string]: Word[];
  };
}

// ========== UI CALLBACK TYPES ==========
export interface UICallbacks {
  handleNavigation: (event: Event) => void;
  starteGesamtTest: (modus: string) => void;
  starteHauptthemaTest: (modus: string) => void;
  getVokabular: () => VocabularyStructure;
}

// ========== AUTH SERVICE TYPES ==========
export interface AuthService {
  isLoggedIn: () => boolean;
  getUserEmail: () => string | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  currentUser: User | null;
}

export interface AuthUI {
  show: () => void;
  hide: () => void;
  updateUIAfterLogin: (user: User) => void;
  updateUIAfterLogout: () => void;
}

export interface SyncService {
  startRealtimeSync: (userId: string) => void;
  stopRealtimeSync: () => void;
  saveProgress: (progressData: Progress) => Promise<void>;
  onSyncUpdate: (callback: (type: string, data: any) => void) => void;
}

// ========== DOM TYPES ==========
export interface DOMElements {
  navigationViewEl: HTMLElement;
  trainerMainViewEl: HTMLElement;
  navigationContainerEl: HTMLElement;
  backToMainTopicsButton: HTMLButtonElement;
  navigationTitleEl: HTMLElement;
  backToSubtopicsButton: HTMLButtonElement;
  currentTrainingTitleEl: HTMLElement;
  modeButtonGridEl: HTMLElement;
  questionDisplayEl: HTMLElement;
  exampleSentenceDisplayEl: HTMLElement;
  mcUiEl: HTMLElement;
  mcAnswersContainerEl: HTMLElement;
  spellingModeUiEl: HTMLElement;
  singleInputContainerEl: HTMLElement;
  spellingInputSingleEl: HTMLInputElement;
  nounInputContainerEl: HTMLElement;
  spellingInputNoun1El: HTMLInputElement;
  spellingInputNoun2El: HTMLInputElement;
  checkSpellingButton: HTMLButtonElement;
  clozeUiEl: HTMLElement;
  clozeHintContainerEl: HTMLElement;
  clozeSentenceContainerEl: HTMLElement;
  checkClozeButton: HTMLButtonElement;
  sentenceUiEl: HTMLElement;
  sentenceWordInputContainerEl: HTMLElement;
  checkSentenceButton: HTMLButtonElement;
  feedbackContainerEl: HTMLElement;
  continueButton: HTMLButtonElement;
  messageBoxEl: HTMLElement;
  wordLineContainerEl: HTMLElement;
  sentenceLineContainerEl: HTMLElement;
  audioWordButtonEl: HTMLButtonElement;
  audioSentenceButtonEl: HTMLButtonElement;
  practiceStatsViewEl: HTMLElement;
  testStatsViewEl: HTMLElement;
  correctInRoundPracticeEl: HTMLElement;
  attemptedInRoundPracticeEl: HTMLElement;
  accuracyInRoundPracticeEl: HTMLElement;
  categoryStatsContainerEl: HTMLElement;
  testProgressEl: HTMLElement;
  testAccuracyEl: HTMLElement;
  correctInRoundTestEl: HTMLElement;
  attemptedInRoundTestEl: HTMLElement;
  accuracyInRoundTestEl: HTMLElement;
  testSelectionModalEl: HTMLElement;
  umlautButtonsContainer: HTMLElement;
}

// ========== FUNCTION PARAMETER TYPES ==========
export type ProcessAnswerFunction = (isCorrect: boolean, correctAnswer: string) => void;

export interface InitializeAuthResult {
  authService: AuthService;
  authUI: AuthUI;
  syncService: SyncService;
}