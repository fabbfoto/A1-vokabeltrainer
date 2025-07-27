// Unit Tests für UILazyLoader
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { UILazyLoader, lazyLoader, showMainTopicNavigation, showTrainingModes, updateErrorCounts, showTestResultModal } from '../../../src/ui/lazy-loader';
import type { DOMElements } from '../../../src/core/types/ui';
import type { TrainerState } from '../../../src/core/types/trainer';

// Mock DOM elements
const mockDOM: DOMElements = {
    navigationView: document.createElement('div'),
    trainerMainView: document.createElement('div'),
    navigationContainer: document.createElement('div'),
    trainingModesContainer: document.createElement('div'),
    errorCountsContainer: document.createElement('div'),
    testResultModal: document.createElement('div')
} as DOMElements;

// Mock state
const mockState: TrainerState = {
    navigation: {
        currentMainTopic: 'wohnen',
        currentSubTopic: 'wohnung'
    },
    training: {
        currentMode: 'learning',
        isCorrectionMode: false,
        correctInCurrentRound: 0,
        attemptedInCurrentRound: 0,
        shuffledWordsForMode: []
    },
    test: {
        isTestModeActive: false,
        currentQuestionIndex: 0,
        testQuestions: [],
        testResults: []
    }
} as TrainerState;

// Mock modules
const mockNavigation = {
    showMainTopicNavigation: vi.fn(),
    showTrainingModes: vi.fn()
};

const mockStatistics = {
    updateErrorCounts: vi.fn()
};

const mockTestResultModal = {
    showTestResultModal: vi.fn()
};

const mockRankingUI = {
    showRankings: vi.fn()
};

// Mock dynamic imports
vi.mock('../../../src/ui/views/navigation', () => ({
    default: mockNavigation
}));

vi.mock('../../../src/ui/views/statistics', () => ({
    default: mockStatistics
}));

vi.mock('../../../src/ui/components/test-result-modal', () => ({
    default: mockTestResultModal
}));

vi.mock('../../../src/ui/components/ranking-ui', () => ({
    default: mockRankingUI
}));

describe('UILazyLoader', () => {
    let lazyLoaderInstance: UILazyLoader;

    beforeEach(() => {
        // Reset singleton instance
        (UILazyLoader as any).instance = undefined;
        lazyLoaderInstance = UILazyLoader.getInstance();
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('Singleton Pattern', () => {
        it('should return the same instance', () => {
            const instance1 = UILazyLoader.getInstance();
            const instance2 = UILazyLoader.getInstance();
            expect(instance1).toBe(instance2);
        });
    });

    describe('Component Loading', () => {
        it('should load navigation component', async () => {
            const result = await lazyLoaderInstance.loadNavigation();
            
            expect(result).toBeDefined();
            expect(result).toHaveProperty('showMainTopicNavigation');
            expect(result).toHaveProperty('showTrainingModes');
        });

        it('should load statistics component', async () => {
            const result = await lazyLoaderInstance.loadStatistics();
            
            expect(result).toBeDefined();
            expect(result).toHaveProperty('updateErrorCounts');
        });

        it('should load test result modal component', async () => {
            const result = await lazyLoaderInstance.loadTestResultModal();
            
            expect(result).toBeDefined();
            expect(result).toHaveProperty('showTestResultModal');
        });

        it('should load ranking UI component', async () => {
            const result = await lazyLoaderInstance.loadRankingUI();
            
            expect(result).toBeDefined();
            expect(result).toHaveProperty('showRankings');
        });
    });

    describe('Caching', () => {
        it('should cache loaded components', async () => {
            // Load component first time
            const result1 = await lazyLoaderInstance.loadNavigation();
            
            // Load component second time (should use cache)
            const result2 = await lazyLoaderInstance.loadNavigation();
            
            expect(result1).toBe(result2);
        });

        it('should track loaded components', async () => {
            await lazyLoaderInstance.loadNavigation();
            await lazyLoaderInstance.loadStatistics();
            
            const cacheStatus = lazyLoaderInstance.getCacheStatus();
            
            expect(cacheStatus.loaded).toContain('navigation');
            expect(cacheStatus.loaded).toContain('statistics');
            expect(cacheStatus.cacheSize).toBe(2);
        });
    });

    describe('Preloading', () => {
        it('should preload critical components', async () => {
            const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            
            await lazyLoaderInstance.preloadComponents();
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Preloading UI components')
            );
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('UI components preloaded')
            );
        });

        it('should handle preload errors gracefully', async () => {
            // Mock import to throw error
            vi.doMock('../../../src/ui/views/navigation', () => {
                throw new Error('Import failed');
            });
            
            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            await lazyLoaderInstance.preloadComponents();
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Failed to preload components')
            );
        });
    });

    describe('Cache Management', () => {
        it('should clear cache', async () => {
            await lazyLoaderInstance.loadNavigation();
            await lazyLoaderInstance.loadStatistics();
            
            // Verify components are cached
            let cacheStatus = lazyLoaderInstance.getCacheStatus();
            expect(cacheStatus.loaded.length).toBeGreaterThan(0);
            
            // Clear cache
            lazyLoaderInstance.clearCache();
            
            // Verify cache is cleared
            cacheStatus = lazyLoaderInstance.getCacheStatus();
            expect(cacheStatus.loaded.length).toBe(0);
            expect(cacheStatus.cacheSize).toBe(0);
        });

        it('should log cache clearing', () => {
            const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            
            lazyLoaderInstance.clearCache();
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('UI component cache cleared')
            );
        });
    });

    describe('Cache Status', () => {
        it('should return cache status', async () => {
            await lazyLoaderInstance.loadNavigation();
            
            const cacheStatus = lazyLoaderInstance.getCacheStatus();
            
            expect(cacheStatus).toHaveProperty('loaded');
            expect(cacheStatus).toHaveProperty('cacheSize');
            expect(Array.isArray(cacheStatus.loaded)).toBe(true);
            expect(typeof cacheStatus.cacheSize).toBe('number');
        });
    });
});

describe('Lazy Loading Wrapper Functions', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('showMainTopicNavigation', () => {
        it('should call navigation component', async () => {
            const mockVokabular = { test: 'data' };
            const mockLearningModes = { test: 'modes' };
            
            await showMainTopicNavigation(mockDOM, mockState, mockVokabular, mockLearningModes);
            
            expect(mockNavigation.showMainTopicNavigation).toHaveBeenCalledWith(
                mockDOM, mockState, mockVokabular, mockLearningModes
            );
        });
    });

    describe('showTrainingModes', () => {
        it('should call navigation component', async () => {
            await showTrainingModes(mockDOM, mockState);
            
            expect(mockNavigation.showTrainingModes).toHaveBeenCalledWith(
                mockDOM, mockState
            );
        });
    });

    describe('updateErrorCounts', () => {
        it('should call statistics component', async () => {
            const mockLearningModes = { test: 'modes' };
            
            await updateErrorCounts(mockDOM, mockState, mockLearningModes);
            
            expect(mockStatistics.updateErrorCounts).toHaveBeenCalledWith(
                mockDOM, mockState, mockLearningModes
            );
        });
    });

    describe('showTestResultModal', () => {
        it('should call test result modal component', async () => {
            const mockTestResult = { test: 'result' };
            const mockTestConfig = { test: 'config' };
            
            await showTestResultModal(mockTestResult, mockTestConfig);
            
            expect(mockTestResultModal.showTestResultModal).toHaveBeenCalledWith(
                mockTestResult, mockTestConfig
            );
        });

        it('should call test result modal without config', async () => {
            const mockTestResult = { test: 'result' };
            
            await showTestResultModal(mockTestResult);
            
            expect(mockTestResultModal.showTestResultModal).toHaveBeenCalledWith(
                mockTestResult, undefined
            );
        });
    });
});

describe('Global Lazy Loader Instance', () => {
    it('should provide global instance', () => {
        expect(lazyLoader).toBeInstanceOf(UILazyLoader);
    });

    it('should be the same instance as getInstance', () => {
        const instance = UILazyLoader.getInstance();
        expect(lazyLoader).toBe(instance);
    });
}); 