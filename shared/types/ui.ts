// shared/types/ui.ts
// Professional UI and DOM element types

import type { Word, TopicId, SubTopicId } from './vocabulary.js';
import type { TrainerState, ModeId, TestConfiguration } from './trainer.js';
// ========== DOM ELEMENTS INTERFACE - HINZUGEFÜGT ==========
export interface DOMElements {
    // Navigation Views
    navigationViewEl: HTMLElement;
    trainerMainViewEl: HTMLElement;
    navigationContainerEl: HTMLElement;
    backToMainTopicsButton: HTMLButtonElement;
    navigationTitleEl: HTMLElement;
    
    // Trainer Header
    backToSubtopicsButton: HTMLButtonElement;
    currentTrainingTitleEl: HTMLElement;
    modeButtonGridEl: HTMLElement;
    
    // Question & Display Areas
    questionDisplayEl: HTMLElement;
    exampleSentenceDisplayEl: HTMLElement;
    wordLineContainerEl: HTMLElement;
    sentenceLineContainerEl: HTMLElement;
    wordSentenceBlockEl: HTMLElement;
    
    // Audio Buttons
    audioWordButtonEl: HTMLButtonElement;
    audioSentenceButtonEl: HTMLButtonElement;
    
    // Multiple Choice UI
    mcUiEl: HTMLElement;
    mcAnswersContainerEl: HTMLElement;
    
    // Spelling Mode UI
    spellingModeUiEl: HTMLElement;
    singleInputContainerEl: HTMLElement;
    spellingInputSingleEl: HTMLInputElement;
    nounInputContainerEl: HTMLElement;
    spellingInputNoun1El: HTMLInputElement;
    spellingInputNoun2El: HTMLInputElement;
    checkSpellingButton: HTMLButtonElement;
    
    // Cloze Mode UI
    clozeUiEl: HTMLElement;
    clozeHintContainerEl: HTMLElement;
    clozeSentenceContainerEl: HTMLElement;
    checkClozeButton: HTMLButtonElement;
    
    // Sentence Translation UI
    sentenceUiEl: HTMLElement;
    sentenceWordInputContainerEl: HTMLElement;
    checkSentenceButton: HTMLButtonElement;
    
    // Feedback & Continue
    feedbackContainerEl: HTMLElement;
    continueButton: HTMLButtonElement;
    messageBoxEl: HTMLElement;
    
    // Practice Statistics
    practiceStatsViewEl: HTMLElement;
    correctInRoundPracticeEl: HTMLElement;
    attemptedInRoundPracticeEl: HTMLElement;
    accuracyInRoundPracticeEl: HTMLElement;
    categoryStatsContainerEl: HTMLElement;
    
    // Test Statistics
    testStatsViewEl: HTMLElement;
    testProgressEl: HTMLElement;
    testAccuracyEl: HTMLElement;
    correctInRoundTestEl: HTMLElement;
    attemptedInRoundTestEl: HTMLElement;
    accuracyInRoundTestEl: HTMLElement;
    
    // Test Modal
    testSelectionModalEl: HTMLElement;
    
    // Umlaut Buttons
    umlautButtonsContainer: HTMLElement;
    
    // SVG Icons
    SVG_SPEAKER_ICON: string;
}

// ========== UI CALLBACK INTERFACES ==========
export interface NavigationCallbacks {
  handleTopicSelection: (mainTopic: TopicId, subTopic?: SubTopicId) => void;
  handleBackNavigation: () => void;
  handleModeSelection: (mode: ModeId) => void;
}

export interface LearningCallbacks {
  processAnswer: (isCorrect: boolean, correctAnswer?: string, timeSpent?: number) => void;
  nextWord: () => void;
  repeatWord: () => void;
  speakWord: (text: string, language?: string) => void;
}

export interface TestCallbacks {
  startTest: (testConfig: TestConfiguration) => void;
  completeTest: () => void;
  cancelTest: () => void;
}

export interface UIStateCallbacks {
  showMessage: (message: string, type: MessageType, duration?: number) => void;
  hideAllUIs: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export interface UICallbacks extends 
  NavigationCallbacks, 
  LearningCallbacks, 
  TestCallbacks, 
  UIStateCallbacks {
  // Combined interface for all UI callbacks
}

// ========== UI STATE TYPES ==========
export type MessageType = 'success' | 'error' | 'info' | 'warning';

export type UIMode = 
  | 'navigation'
  | 'learning'
  | 'test'
  | 'statistics'
  | 'settings';

export interface UIState {
  currentMode: UIMode;
  isModalOpen: boolean;
  activeModal: string | null;
  isLoading: boolean;
  messages: UIMessage[];
  activeInput: HTMLInputElement | null;
}

export interface UIMessage {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
  duration?: number;
}

// ========== BUTTON TYPES ==========
export type ButtonVariant = 
  | 'primary'
  | 'secondary' 
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'topic'
  | 'action';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonConfig {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

// ========== PROGRESS BAR TYPES ==========
export interface ProgressBarConfig {
  current: number;
  total: number;
  showPercentage?: boolean;
  showNumbers?: boolean;
  colorScheme?: 'default' | 'german' | 'success' | 'warning' | 'danger';
  animated?: boolean;
}

// ========== MODAL TYPES ==========
export interface ModalConfig {
  id: string;
  title: string;
  content: string | HTMLElement;
  buttons?: ModalButton[];
  closable?: boolean;
  backdrop?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export interface ModalButton {
  text: string;
  variant: ButtonVariant;
  onClick: () => void;
  closeModal?: boolean;
}

// ========== FORM TYPES ==========
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'password' | 'select' | 'checkbox' | 'radio';
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | null;
  options?: { value: string; label: string }[];
}

export interface FormConfig {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  onCancel?: () => void;
  submitText?: string;
  cancelText?: string;
}

// ========== LEARNING MODE UI TYPES ==========
export interface LearningModeSetup {
  mode: ModeId;
  setupFunction: (dom: DOMElements, state: TrainerState, callbacks: LearningCallbacks) => void;
  cleanupFunction?: (dom: DOMElements) => void;
  requiredElements: (keyof DOMElements)[];
}

export interface MultipleChoiceSetup extends LearningModeSetup {
  mode: ModeId; // should be ModeId, not string literal
  optionsCount: number;
  shuffleOptions: boolean;
}

export interface SpellingModeSetup extends LearningModeSetup {
  mode: ModeId;
  showHints: boolean;
  enableUmlauts: boolean;
}

export interface ClozeSetup extends LearningModeSetup {
  mode: ModeId;
  showContext: boolean;
  highlightTarget: boolean;
}

export interface SentenceTranslationSetup extends LearningModeSetup {
  mode: ModeId;
  wordByWord: boolean;
  enableUmlauts: boolean;
}

// ========== EVENT TYPES ==========
export interface CustomUIEvent extends Event {
  detail: {
    type: string;
    data?: any;
  };
}

export interface NavigationEvent extends CustomUIEvent {
  detail: {
    type: 'navigate';
    data: {
      from: string;
      to: string;
      mainTopic?: TopicId;
      subTopic?: SubTopicId;
    };
  };
}

export interface LearningEvent extends CustomUIEvent {
  detail: {
    type: 'answer' | 'next' | 'repeat' | 'hint';
    data: {
      word: Word;
      mode: ModeId;
      isCorrect?: boolean;
      answer?: string;
      timeSpent?: number;
    };
  };
}

// ========== UTILITY TYPES ==========
export type ElementRef<T extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[T];

export type ComponentProps<T = {}> = T & {
  className?: string;
  id?: string;
  'data-testid'?: string;
};

export type RenderFunction<T = {}> = (props: T) => HTMLElement;

// ========== ACCESSIBILITY TYPES ==========
export interface A11yConfig {
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHidden?: boolean;
  tabIndex?: number;
  keyboardShortcuts?: KeyboardShortcut[];
}

export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  action: () => void;
  description: string;
}