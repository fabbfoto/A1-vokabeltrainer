// Integration Tests für Performance-Features
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { memoryManager } from '../../../src/utils/memory-manager';
import { performanceMonitor } from '../../../src/utils/performance-monitor';
import { lazyLoader } from '../../../src/ui/lazy-loader';
import type { Word } from '../../../src/core/types/trainer';

describe('Performance Integration Tests', () => {
    beforeEach(() => {
        // Reset all singletons
        (memoryManager as any).constructor.instance = undefined;
        (performanceMonitor as any).constructor.instance = undefined;
        (lazyLoader as any).constructor.instance = undefined;
        
        // Clear all caches
        memoryManager.clearCache();
        performanceMonitor.clearMetrics();
        lazyLoader.clearCache();
        
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('Memory Manager Integration', () => {
        it('should handle large vocabulary sets efficiently', () => {
            const largeVocabulary: Word[] = Array.from({ length: 1000 }, (_, i) => ({
                id: `word-${i}`,
                german: `Wort${i}`,
                english: `word${i}`,
                wordType: 'noun',
                article: 'das',
                plural: `Wörter${i}`,
                topicId: 'test',
                subTopicId: 'test-sub',
                difficulty: 'easy'
            }));

            // Cache large vocabulary
            memoryManager.cacheVocabulary('test-topic', largeVocabulary);
            
            // Verify memory stats
            const stats = memoryManager.getCacheStats();
            expect(stats.wordCacheSize).toBe(1000);
            expect(stats.vocabularyCacheSize).toBe(1);
            expect(stats.totalMemoryUsage).toBe(1001);
        });

        it('should handle cache eviction when limit is reached', () => {
            // Set small cache size
            memoryManager.setMaxCacheSize(2);
            
            const words: Word[] = [
                {
                    id: 'word-1',
                    german: 'Haus',
                    english: 'house',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Häuser',
                    topicId: 'test',
                    subTopicId: 'test-sub',
                    difficulty: 'easy'
                },
                {
                    id: 'word-2',
                    german: 'Auto',
                    english: 'car',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Autos',
                    topicId: 'test',
                    subTopicId: 'test-sub',
                    difficulty: 'easy'
                },
                {
                    id: 'word-3',
                    german: 'Buch',
                    english: 'book',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Bücher',
                    topicId: 'test',
                    subTopicId: 'test-sub',
                    difficulty: 'easy'
                }
            ];

            // Add words to cache
            words.forEach(word => memoryManager.cacheWord(word));
            
            // Verify cache size is maintained
            const stats = memoryManager.getCacheStats();
            expect(stats.wordCacheSize).toBeLessThanOrEqual(2);
        });
    });

    describe('Performance Monitor Integration', () => {
        it('should monitor component load performance', () => {
            // Monitor component loads
            performanceMonitor.monitorComponentLoad('navigation');
            performanceMonitor.monitorComponentLoad('statistics');
            
            // End component loads
            performanceMonitor.endComponentLoad('navigation');
            performanceMonitor.endComponentLoad('statistics');
            
            // Verify metrics are recorded
            const report = performanceMonitor.getPerformanceReport();
            expect(report.averageMetrics).toHaveProperty('componentLoad_navigation');
            expect(report.averageMetrics).toHaveProperty('componentLoad_statistics');
        });

        it('should detect performance issues and provide recommendations', () => {
            // Simulate slow operations
            const slowOperation = 'componentLoad_slow-component';
            
            // Mock performance.now to simulate slow operation
            const originalNow = performance.now;
            let time = 1000;
            performance.now = vi.fn(() => {
                time += 1000; // 1 second increments
                return time;
            });
            
            performanceMonitor.startTimer(slowOperation);
            performanceMonitor.endTimer(slowOperation);
            
            // Restore original
            performance.now = originalNow;
            
            // Verify recommendations are generated
            const report = performanceMonitor.getPerformanceReport();
            expect(report.recommendations.length).toBeGreaterThan(0);
            expect(report.recommendations.some(rec => 
                rec.includes('Consider lazy loading for slow-component')
            )).toBe(true);
        });

        it('should integrate with memory monitoring', () => {
            // Mock high memory usage
            Object.defineProperty(window, 'performance', {
                value: {
                    now: performance.now,
                    memory: {
                        usedJSHeapSize: 100 * 1024 * 1024, // 100MB
                        totalJSHeapSize: 150 * 1024 * 1024 // 150MB
                    }
                },
                writable: true
            });

            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            performanceMonitor.monitorMemoryUsage();
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('High memory usage')
            );
        });
    });

    describe('Lazy Loader Integration', () => {
        it('should integrate with performance monitoring', async () => {
            // Monitor lazy loading performance
            performanceMonitor.monitorComponentLoad('lazy-navigation');
            
            await lazyLoader.loadNavigation();
            
            performanceMonitor.endComponentLoad('lazy-navigation');
            
            // Verify performance metrics
            const report = performanceMonitor.getPerformanceReport();
            expect(report.averageMetrics).toHaveProperty('componentLoad_lazy-navigation');
        });

        it('should handle concurrent component loading', async () => {
            // Load multiple components concurrently
            const promises = [
                lazyLoader.loadNavigation(),
                lazyLoader.loadStatistics(),
                lazyLoader.loadTestResultModal()
            ];
            
            const results = await Promise.all(promises);
            
            // Verify all components loaded successfully
            expect(results).toHaveLength(3);
            results.forEach(result => {
                expect(result).toBeDefined();
            });
            
            // Verify cache status
            const cacheStatus = lazyLoader.getCacheStatus();
            expect(cacheStatus.loaded).toContain('navigation');
            expect(cacheStatus.loaded).toContain('statistics');
            expect(cacheStatus.loaded).toContain('test-result-modal');
        });

        it('should integrate with memory management', async () => {
            // Load components
            await lazyLoader.loadNavigation();
            await lazyLoader.loadStatistics();
            
            // Verify memory usage
            const memoryStats = memoryManager.getCacheStats();
            expect(memoryStats.totalMemoryUsage).toBeGreaterThan(0);
            
            // Clear caches
            lazyLoader.clearCache();
            memoryManager.clearCache();
            
            // Verify caches are cleared
            const cacheStatus = lazyLoader.getCacheStatus();
            expect(cacheStatus.loaded.length).toBe(0);
            
            const finalMemoryStats = memoryManager.getCacheStats();
            expect(finalMemoryStats.totalMemoryUsage).toBe(0);
        });
    });

    describe('End-to-End Performance Workflow', () => {
        it('should handle complete performance optimization workflow', async () => {
            // 1. Start performance monitoring
            performanceMonitor.monitorPageLoad();
            
            // 2. Load components with lazy loading
            performanceMonitor.monitorComponentLoad('navigation');
            await lazyLoader.loadNavigation();
            performanceMonitor.endComponentLoad('navigation');
            
            // 3. Cache vocabulary
            const testWords: Word[] = [
                {
                    id: 'word-1',
                    german: 'Haus',
                    english: 'house',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Häuser',
                    topicId: 'test',
                    subTopicId: 'test-sub',
                    difficulty: 'easy'
                }
            ];
            memoryManager.cacheVocabulary('test-topic', testWords);
            
            // 4. Monitor memory usage
            performanceMonitor.monitorMemoryUsage();
            
            // 5. Generate performance report
            const report = performanceMonitor.getPerformanceReport();
            
            // 6. Verify comprehensive report
            expect(report.averageMetrics).toHaveProperty('componentLoad_navigation');
            expect(report.memoryStats.totalMemoryUsage).toBeGreaterThan(0);
            expect(Array.isArray(report.recommendations)).toBe(true);
            
            // 7. Optimize performance
            performanceMonitor.optimizePerformance();
            
            // 8. Verify optimization results
            const finalReport = performanceMonitor.getPerformanceReport();
            expect(finalReport.averageMetrics).toEqual({});
        });

        it('should handle performance degradation gracefully', async () => {
            // Simulate performance degradation
            const slowOperation = 'apiCall_slow-api';
            
            // Mock very slow operation
            const originalNow = performance.now;
            let time = 1000;
            performance.now = vi.fn(() => {
                time += 5000; // 5 second increments
                return time;
            });
            
            performanceMonitor.startTimer(slowOperation);
            performanceMonitor.endTimer(slowOperation);
            
            // Restore original
            performance.now = originalNow;
            
            // Verify performance issues are detected
            const report = performanceMonitor.getPerformanceReport();
            expect(report.slowestOperations[0].operation).toBe(slowOperation);
            expect(report.slowestOperations[0].averageTime).toBeGreaterThan(4000);
            
            // Verify recommendations are provided
            expect(report.recommendations.some(rec => 
                rec.includes('Optimize API call slow-api')
            )).toBe(true);
        });
    });

    describe('Error Handling Integration', () => {
        it('should handle lazy loading errors gracefully', async () => {
            // Mock import failure
            vi.doMock('../../../src/ui/views/navigation', () => {
                throw new Error('Module not found');
            });
            
            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            try {
                await lazyLoader.loadNavigation();
            } catch (error) {
                // Error should be handled gracefully
                expect(error).toBeDefined();
            }
            
            expect(consoleSpy).toHaveBeenCalled();
        });

        it('should handle memory allocation errors', () => {
            // Mock memory allocation failure
            const originalSet = Map.prototype.set;
            Map.prototype.set = vi.fn().mockImplementation(() => {
                throw new Error('Memory allocation failed');
            });
            
            const testWord: Word = {
                id: 'test-word',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'test',
                subTopicId: 'test-sub',
                difficulty: 'easy'
            };
            
            expect(() => {
                memoryManager.cacheWord(testWord);
            }).toThrow('Memory allocation failed');
            
            // Restore original
            Map.prototype.set = originalSet;
        });
    });
}); 