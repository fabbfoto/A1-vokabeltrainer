import { Word } from './index';

// Interface für den gesamten State des Trainers
export interface TrainerState {
  // Navigation
  currentMainTopic: string | null;
  currentSubTopic: string | null;
  previousMainTopic: string | null;
  previousSubTopic: string | null;
  
  // Vokabular
  currentVocabularySet: Word[];
  shuffledVocabForMode: Word[];
  currentWordIndexInShuffled: number;
  currentWordData: Word | null;
  
  // Modus
  currentMode: string | null;
  isTestModeActive: boolean;
  isRepeatSessionActive: boolean;
  
  // Fortschritt
  correctInRound: number;
  attemptedInRound: number;
  globalProgress: GlobalProgress;
  masteredWordsByMode: Record<string, Set<string>>;
  wordsToRepeatByMode: Record<string, Set<string>>;
  
  // Test
  testType: 'subtopic' | 'mainTopic' | 'global' | null;
  testKey: string | null;
  lastTestScores: Record<string, TestScore>;
  
  // UI
  activeTextInput: HTMLInputElement | null;
}

// Interface für globalen Fortschritt
export interface GlobalProgress {
  [progressKey: string]: {
    [mode: string]: Set<string>;
  };
}

// Interface für Test-Ergebnisse
export interface TestScore {
  score?: number;
  date?: string;
  accuracy: number;
  totalWords?: number;
  correct: number;
  total: number;
  timestamp?: number;
  testType?: 'subtopic' | 'mainTopic' | 'global' | null;
  topic?: string | null;
  subtopic?: string | null;
}

// Interface für Lernmodi
export interface LearningModeInfo {
  id: string;
  name: string;
  setupFunc: () => void;
  checkFunc: () => void;
}

// Interface für Callbacks
export interface TrainerCallbacks {
  handleNavigation: (event: Event) => void;
  starteGesamtTest: (modus: string) => void;
  starteHauptthemaTest: (modus: string, hauptthema: string) => void;
  getVokabular: () => any; // TODO: Vokabular-Type definieren
}