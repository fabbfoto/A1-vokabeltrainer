import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ModeManager } from '../../../src/services/mode-manager';
import type { TrainerState } from '../../../src/core/types/trainer';

describe('ModeManager', () => {
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
  });

  describe('switchToMode', () => {
    it('should switch to learning mode', () => {
      ModeManager.switchToMode(mockState, 'learning');
      expect(mockState.test.isTestModeActive).toBe(false);
    });

    it('should switch to testing mode', () => {
      ModeManager.switchToMode(mockState, 'testing');
      expect(mockState.test.isTestModeActive).toBe(true);
    });

    it('should reset test state when switching to learning mode', () => {
      mockState.test.isTestModeActive = true;
      mockState.test.currentTest = { testId: 'test-1' } as any;
      
      ModeManager.switchToMode(mockState, 'learning');
      
      expect(mockState.test.isTestModeActive).toBe(false);
      expect(mockState.test.currentTest).toBeNull();
    });
  });

  describe('isInTestMode', () => {
    it('should return false when not in test mode', () => {
      expect(ModeManager.isInTestMode(mockState)).toBe(false);
    });

    it('should return true when in test mode', () => {
      mockState.test.isTestModeActive = true;
      expect(ModeManager.isInTestMode(mockState)).toBe(true);
    });
  });

  describe('isInLearningMode', () => {
    it('should return true when not in test mode', () => {
      expect(ModeManager.isInLearningMode(mockState)).toBe(true);
    });

    it('should return false when in test mode', () => {
      mockState.test.isTestModeActive = true;
      expect(ModeManager.isInLearningMode(mockState)).toBe(false);
    });
  });

  describe('getCurrentMode', () => {
    it('should return learning when not in test mode', () => {
      expect(ModeManager.getCurrentMode(mockState)).toBe('learning');
    });

    it('should return testing when in test mode', () => {
      mockState.test.isTestModeActive = true;
      expect(ModeManager.getCurrentMode(mockState)).toBe('testing');
    });
  });

  describe('validateModeTransition', () => {
    it('should allow transition from learning to testing', () => {
      const result = ModeManager.validateModeTransition(mockState, 'testing');
      expect(result.isValid).toBe(true);
    });

    it('should allow transition from testing to learning', () => {
      mockState.test.isTestModeActive = true;
      const result = ModeManager.validateModeTransition(mockState, 'learning');
      expect(result.isValid).toBe(true);
    });

    it('should prevent transition when test is active and has results', () => {
      mockState.test.isTestModeActive = true;
      mockState.test.testResults = [{ testId: 'test-1' }] as any;
      
      const result = ModeManager.validateModeTransition(mockState, 'learning');
      expect(result.isValid).toBe(false);
      expect(result.reason).toContain('Test results pending');
    });
  });

  describe('resetTestState', () => {
    it('should reset all test-related state', () => {
      mockState.test.isTestModeActive = true;
      mockState.test.currentTest = { testId: 'test-1' } as any;
      mockState.test.testResults = [{ testId: 'test-1' }] as any;
      mockState.test.testStartTime = Date.now();
      
      ModeManager.resetTestState(mockState);
      
      expect(mockState.test.isTestModeActive).toBe(false);
      expect(mockState.test.currentTest).toBeNull();
      expect(mockState.test.testResults).toEqual([]);
      expect(mockState.test.testStartTime).toBeNull();
    });
  });

  describe('getModeInfo', () => {
    it('should return learning mode info', () => {
      const info = ModeManager.getModeInfo(mockState);
      expect(info.currentMode).toBe('learning');
      expect(info.isTestMode).toBe(false);
      expect(info.isLearningMode).toBe(true);
    });

    it('should return testing mode info', () => {
      mockState.test.isTestModeActive = true;
      const info = ModeManager.getModeInfo(mockState);
      expect(info.currentMode).toBe('testing');
      expect(info.isTestMode).toBe(true);
      expect(info.isLearningMode).toBe(false);
    });
  });
}); 