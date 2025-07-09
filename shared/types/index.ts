// shared/types/index.ts - WORKING VERSION
// All types defined directly to avoid import chain issues

// ========== BRANDED TYPES ==========
export type WordId = string & { __brand: 'WordId' };
export type TopicId = string & { __brand: 'TopicId' };
export type SubTopicId = string & { __brand: 'SubTopicId' };
export type ModeId = string & { __brand: 'ModeId' };
export type TestId = string & { __brand: 'TestId' };
export type SessionId = string & { __brand: 'SessionId' };
export type UserId = string & { __brand: 'UserId' };
export type SessionToken = string & { __brand: 'SessionToken' };
export type DocumentId = string & { __brand: 'DocumentId' };

// ========== VOCABULARY TYPES ==========
export type WordType = 
  | 'noun' 
  | 'verb' 
  | 'adjective' 
  | 'adverb' 
  | 'preposition' 
  | 'pronoun' 
  | 'conjunction' 
  | 'interjection';

export type Article = 'der' | 'die' | 'das' | 'der/die' | 'der/das' | 'die/das';
export type AuxiliaryVerb = 'haben' | 'sein';
export type CaseType = 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv' | 'verb' | 'none';

export interface CaseElement {
  text: string;
  case: CaseType;
}

export interface Conjugation {
  ich?: string;
  du?: string;
  er?: string;
  wir?: string;
  ihr?: string;
  sie?: string;
}

export interface Imperative {
  du?: string;
  ihr?: string;
  Sie?: string;
}

interface BaseWord {
  id: WordId;
  german: string;
  english: string;
  exampleGerman?: CaseElement[];
  exampleEnglish?: string;
  clozeParts?: string[];
  clozeAnswers?: string[];
}

export interface Noun extends BaseWord {
  wordType: 'noun';
  article: Article;
  plural: string | null;
}

export interface Verb extends BaseWord {
  wordType: 'verb';
  separable: boolean;
  auxiliaryVerb?: AuxiliaryVerb;
  pastParticiple?: string;
  presentConjugation?: Conjugation;
  imperative?: Imperative;
}

export interface Adjective extends BaseWord {
  wordType: 'adjective';
}

export interface Adverb extends BaseWord {
  wordType: 'adverb';
}

export interface Preposition extends BaseWord {
  wordType: 'preposition';
}

export interface Pronoun extends BaseWord {
  wordType: 'pronoun';
}

export interface Conjunction extends BaseWord {
  wordType: 'conjunction';
}

export interface Interjection extends BaseWord {
  wordType: 'interjection';
}

export type Word = 
  | Noun 
  | Verb 
  | Adjective 
  | Adverb 
  | Preposition 
  | Pronoun 
  | Conjunction 
  | Interjection;

export type SubTopic = Word[];

export interface MainTopic {
  [subTopicName: string]: SubTopic;
}

export interface VocabularyStructure {
  [mainTopicName: string]: MainTopic;
}

// ========== TRAINER TYPES ==========
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

export interface Progress {
  [topicKey: string]: {
    [modeId: string]: Set<WordId> | WordId[];
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

export type TestType = 'subTopic' | 'mainTopic' | 'global' | 'custom';

// Neue Test-Varianten
export type TestVariant = 'chaos' | 'structured';
export type TestCategory = 'bedeutung' | 'schreibweise' | 'luecke' | 'satz';

// Mapping zwischen Kategorien und Modi
export const CATEGORY_MODE_MAP: Record<TestCategory, ModeId> = {
  'bedeutung': 'mc-de-en' as ModeId,
  'schreibweise': 'type-de-adj' as ModeId,
  'luecke': 'cloze-adj-de' as ModeId,
  'satz': 'sentence-translation-en-de' as ModeId
};

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
  variant: TestVariant;
  selectedCategory?: TestCategory;
  taskDistribution?: Record<ModeId, number>;
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
  duration: number;
  modesUsed: ModeId[];
  // Neue Zeitmessung-Felder
  startTime: number; // Unix timestamp
  endTime: number; // Unix timestamp
  averageTimePerQuestion: number; // in seconds
  timePenalty: number; // Punkteabzug für Zeit
  finalScore: number; // Score nach Zeitabzug
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
  timeSpent: number;
}

export interface TestRecommendation {
  type: 'repeat' | 'practice' | 'advance';
  wordIds: WordId[];
  suggestedMode?: ModeId;
  reason: string;
}

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
  testModeRotation: ModeId[];
  currentTestModeIndex: number;
  
  // Neue Zeitmessung-Felder für Tests
  testStartTime: number | null; // Unix timestamp
  currentQuestionStartTime: number | null; // Unix timestamp
  questionTimes: number[]; // Array der Zeiten pro Frage in Sekunden
  
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
  lastUsedModeByTopic?: { [key: string]: ModeId };
  
  // Correction Mode State (für didaktisches Feedback)
  isCorrectionMode: boolean;
  // UI-Helper für globalen Enter-Handler im Korrekturmodus
  _removeCorrectionEnterHandler?: (() => void);
  
  // Statistics State
  perfectRunsByMode: Record<string, number>; // Zählt perfekte Durchläufe pro Modus
}

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

// ========== UI CALLBACK TYPES ==========
export interface NavigationCallbacks {
  handleTopicSelection: (mainTopic: TopicId, subTopic?: SubTopicId) => void;
  handleBackNavigation: () => void;
  handleModeSelection: (mode: ModeId) => void;
}

export interface LearningCallbacks {
  processAnswer: (isCorrect: boolean, correctAnswer?: string, timeSpent?: number) => void;
  loadNextWord: () => void;
  speakWord: (word: string) => void;
  speakSentence: (sentence: string) => void;
}

export interface TestCallbacks {
  startTest: (testConfig: TestConfiguration) => void;
  submitTestAnswer: (isCorrect: boolean, timeSpent: number) => void;
  completeTest: (testResult: TestResult) => void;
}

export interface UIStateCallbacks {
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  showError: (error: string) => void;
  clearError: () => void;
}

export interface UICallbacks extends NavigationCallbacks, LearningCallbacks, TestCallbacks, UIStateCallbacks {
  updateProgress: (wordId: WordId, mode: ModeId, correct: boolean) => void;
  setMode: (modeId: ModeId, isRepeat: boolean) => void;
  startRepeatSession: (mode: string) => void;
}

export type MessageType = 'success' | 'error' | 'info' | 'warning';

export type UIMode = 'navigation' | 'learning' | 'testing' | 'statistics';

export interface UIState {
  currentMode: UIMode;
  isLoading: boolean;
  currentError: string | null;
  activeModals: string[];
}

export interface UIMessage {
  id: string;
  type: MessageType;
  message: string;
  timestamp: Date;
  autoHide?: boolean;
  duration?: number;
}

// ========== API TYPES ==========
export interface User {
  id: UserId;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  lastLoginAt: Date;
  preferences: UserPreferences;
  subscription?: UserSubscription;
}

export interface UserPreferences {
  language: string;
  theme: 'light' | 'dark' | 'auto';
  soundEnabled: boolean;
  animationsEnabled: boolean;
  reminderSettings: ReminderSettings;
}

export interface ReminderSettings {
  enabled: boolean;
  frequency: 'daily' | 'weekly' | 'custom';
  time: string;
  days?: number[];
}

export interface UserSubscription {
  plan: 'free' | 'premium' | 'family';
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  features: string[];
}

export interface AuthCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: SessionToken;
  error?: string;
  requiresEmailVerification?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: SessionToken | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthUI {
  show: () => void;
  hide: () => void;
  container?: HTMLElement | null;
}

export interface AuthService {
  login: (credentials: AuthCredentials) => Promise<AuthResult>;
  logout: () => Promise<void>;
  register: (credentials: AuthCredentials) => Promise<AuthResult>;
  getCurrentUser: () => User | null;
  isLoggedIn: () => boolean;
}

export interface InitializeAuthResult {
  authService: AuthService;
  authUI: AuthUI;
  syncService: SyncService;
}

export interface UserData {
  progress: Progress;
  masteredWords: Record<string, WordId[]>;
  wordsToRepeat: Record<string, WordId[]>;
  testScores: Record<string, TestScore>;
  sessionStats: SessionStats[];
}

export interface SyncService {
  saveProgress: (data: Partial<UserData>) => Promise<void>;
  loadProgress: () => Promise<UserData>;
  onSyncUpdate: (callback: (data: UserData) => void) => void;
}

export interface SyncConflict {
  field: string;
  localValue: any;
  serverValue: any;
  resolution: 'local' | 'server' | 'merge';
}

export interface SyncResult {
  success: boolean;
  conflicts?: SyncConflict[];
  error?: string;
}

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

export function createWordId(id: string): WordId {
  return id as WordId;
}

export function createTopicId(id: string): TopicId {
  return id as TopicId;
}

export function createSubTopicId(id: string): SubTopicId {
  return id as SubTopicId;
}

export function createUserId(id: string): UserId {
  return id as UserId;
}

export function createSessionToken(token: string): SessionToken {
  return token as SessionToken;
}

export function createDocumentId(id: string): DocumentId {
  return id as DocumentId;
}

// Neue Funktionen für Score-Berechnung mit Zeitfaktor
export function calculateTestScore(
  correct: number, 
  total: number, 
  timeInSeconds: number, 
  timePenaltyPerSecond: number = 2
): { baseScore: number; timePenalty: number; finalScore: number } {
  // Vereinfachte Berechnung: Nur Prozent der richtigen Antworten
  const percentCorrect = total > 0 ? (correct / total) * 100 : 0;
  const baseScore = Math.round(percentCorrect);
  
  // Kein Zeitabzug mehr - nur reiner Prozentsatz
  const timePenalty = 0;
  const finalScore = baseScore;
  
  return {
    baseScore,
    timePenalty,
    finalScore
  };
}

// Neue Funktion für durchschnittliche Zeit pro Frage
export function calculateAverageTimePerQuestion(questionTimes: number[]): number {
  if (questionTimes.length === 0) return 0;
  const totalTime = questionTimes.reduce((sum, time) => sum + time, 0);
  return totalTime / questionTimes.length;
}

// ========== LEGACY COMPATIBILITY ==========
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

export type LegacyVocabularyStructure = {
  [mainTopic: string]: {
    [subTopic: string]: LegacyWord[];
  };
};