import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ErrorCounterManager } from '../../../src/services/error-counter-manager';
import type { TrainerState } from '../../../src/core/types/trainer';

describe('ErrorCounterManager', () => {
  let errorManager: ErrorCounterManager;
  let mockState: TrainerState;

  beforeEach(() => {
    vi.clearAllMocks();
    
    mockState = {
      navigation: {
        currentMainTopic: null,
        currentSubTopic: null,
        previousMainTopic: null,
        previousSubTopic: null,
        lastUsedModeByTopic: {}
      },
      training: {
        currentVocabularySet: [],
        shuffledWordsForMode: [],
        currentWordIndex: 0,
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
        currentError: null
      },
      progress: {
        globalProgress: {},
        masteredWordsByMode: {},
        wordsToRepeatByMode: {},
        perfectRunsByMode: {},
        lastTestScores: {}
      },
      test: {
        isTestModeActive: false,
        currentTest: null,
        testResults: [],
        testModeRotation: [],
        currentTestModeIndex: 0,
        testStartTime: null,
        currentQuestionStartTime: null,
        questionTimes: [],
        lastTestScores: {},
        isRepeatSessionActive: false
      },
      isCorrectionMode: false
    };

    errorManager = new ErrorCounterManager(mockState);
  });

  describe('constructor', () => {
    it('should initialize with empty error counts', () => {
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
      expect(errorManager.getErrorCount('spelling')).toBe(0);
    });
  });

  describe('addError', () => {
    it('should add error for a specific mode', () => {
      errorManager.addError('mc-de-en', 'word-1');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(1);
    });

    it('should not add duplicate errors for the same word', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('mc-de-en', 'word-1');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(1);
    });

    it('should add multiple errors for different words', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('mc-de-en', 'word-2');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(2);
    });
  });

  describe('removeError', () => {
    it('should remove error for a specific word', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.removeError('mc-de-en', 'word-1');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
    });

    it('should handle removing non-existent error', () => {
      errorManager.removeError('mc-de-en', 'word-1');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
    });
  });

  describe('getErrorCount', () => {
    it('should return 0 for mode with no errors', () => {
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
    });

    it('should return correct count for mode with errors', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('mc-de-en', 'word-2');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(2);
    });
  });

  describe('getErrorWords', () => {
    it('should return empty array for mode with no errors', () => {
      expect(errorManager.getErrorWords('mc-de-en')).toEqual([]);
    });

    it('should return array of error words', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('mc-de-en', 'word-2');
      expect(errorManager.getErrorWords('mc-de-en')).toEqual(['word-1', 'word-2']);
    });
  });

  describe('clearErrors', () => {
    it('should clear all errors for a specific mode', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('spelling', 'word-2');
      errorManager.clearErrors('mc-de-en');
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
      expect(errorManager.getErrorCount('spelling')).toBe(1);
    });
  });

  describe('clearAllErrors', () => {
    it('should clear all errors for all modes', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('spelling', 'word-2');
      errorManager.clearAllErrors();
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
      expect(errorManager.getErrorCount('spelling')).toBe(0);
    });
  });

  describe('hasErrors', () => {
    it('should return false when no errors exist', () => {
      expect(errorManager.hasErrors()).toBe(false);
    });

    it('should return true when errors exist', () => {
      errorManager.addError('mc-de-en', 'word-1');
      expect(errorManager.hasErrors()).toBe(true);
    });
  });

  describe('getTotalErrorCount', () => {
    it('should return 0 when no errors exist', () => {
      expect(errorManager.getTotalErrorCount()).toBe(0);
    });

    it('should return total count across all modes', () => {
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.addError('mc-de-en', 'word-2');
      errorManager.addError('spelling', 'word-3');
      expect(errorManager.getTotalErrorCount()).toBe(3);
    });
  });

  describe('onUpdate callback', () => {
    it('should call update callback when errors change', () => {
      const mockCallback = vi.fn();
      errorManager.onUpdate(mockCallback);
      
      errorManager.addError('mc-de-en', 'word-1');
      expect(mockCallback).toHaveBeenCalled();
    });
  });

  describe('loadFromStorage', () => {
    it('should load errors from localStorage', () => {
      const mockStorage = {
        'error-counts': JSON.stringify({
          'mc-de-en': ['word-1', 'word-2'],
          'spelling': ['word-3']
        })
      };
      
      vi.spyOn(localStorage, 'getItem').mockImplementation((key) => mockStorage[key] || null);
      
      errorManager.loadFromStorage();
      
      expect(errorManager.getErrorCount('mc-de-en')).toBe(2);
      expect(errorManager.getErrorCount('spelling')).toBe(1);
    });

    it('should handle empty storage', () => {
      vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
      
      errorManager.loadFromStorage();
      
      expect(errorManager.getErrorCount('mc-de-en')).toBe(0);
    });
  });

  describe('saveToStorage', () => {
    it('should save errors to localStorage', () => {
      const mockSetItem = vi.spyOn(localStorage, 'setItem');
      
      errorManager.addError('mc-de-en', 'word-1');
      errorManager.saveToStorage();
      
      expect(mockSetItem).toHaveBeenCalledWith('error-counts', expect.any(String));
    });
  });
}); 