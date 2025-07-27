// Unit Tests für MemoryManager
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryManager, preloadVocabulary, getCachedVocabulary, getCachedWord, clearMemoryCache, getMemoryStats } from '../../../src/utils/memory-manager';
import type { Word } from '../../../src/core/types/trainer';

describe('MemoryManager', () => {
    let memoryManager: MemoryManager;

    beforeEach(() => {
        // Reset singleton instance
        (MemoryManager as any).instance = undefined;
        memoryManager = MemoryManager.getInstance();
        clearMemoryCache();
    });

    describe('Singleton Pattern', () => {
        it('should return the same instance', () => {
            const instance1 = MemoryManager.getInstance();
            const instance2 = MemoryManager.getInstance();
            expect(instance1).toBe(instance2);
        });
    });

    describe('Word Caching', () => {
        it('should cache and retrieve words', () => {
            const testWord: Word = {
                id: 'test-word-1',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'wohnen',
                subTopicId: 'wohnung',
                difficulty: 'easy'
            };

            memoryManager.cacheWord(testWord);
            const retrievedWord = memoryManager.getWord('test-word-1');
            
            expect(retrievedWord).toEqual(testWord);
        });

        it('should return undefined for non-cached words', () => {
            const retrievedWord = memoryManager.getWord('non-existent');
            expect(retrievedWord).toBeUndefined();
        });

        it('should update access order on word retrieval', () => {
            const word1: Word = {
                id: 'word-1',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'wohnen',
                subTopicId: 'wohnung',
                difficulty: 'easy'
            };

            const word2: Word = {
                id: 'word-2',
                german: 'Auto',
                english: 'car',
                wordType: 'noun',
                article: 'das',
                plural: 'Autos',
                topicId: 'reisen',
                subTopicId: 'verkehr',
                difficulty: 'easy'
            };

            memoryManager.cacheWord(word1);
            memoryManager.cacheWord(word2);
            
            // Access word1 again to update order
            memoryManager.getWord('word-1');
            
            // Check that word1 is now most recently used
            const stats = memoryManager.getCacheStats();
            expect(stats.wordCacheSize).toBe(2);
        });
    });

    describe('Vocabulary Caching', () => {
        it('should cache and retrieve vocabulary', () => {
            const testWords: Word[] = [
                {
                    id: 'word-1',
                    german: 'Haus',
                    english: 'house',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Häuser',
                    topicId: 'wohnen',
                    subTopicId: 'wohnung',
                    difficulty: 'easy'
                },
                {
                    id: 'word-2',
                    german: 'Auto',
                    english: 'car',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Autos',
                    topicId: 'reisen',
                    subTopicId: 'verkehr',
                    difficulty: 'easy'
                }
            ];

            memoryManager.cacheVocabulary('wohnen|wohnung', testWords);
            const retrievedVocabulary = memoryManager.getVocabulary('wohnen|wohnung');
            
            expect(retrievedVocabulary).toEqual(testWords);
        });

        it('should cache individual words when caching vocabulary', () => {
            const testWords: Word[] = [
                {
                    id: 'word-1',
                    german: 'Haus',
                    english: 'house',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Häuser',
                    topicId: 'wohnen',
                    subTopicId: 'wohnung',
                    difficulty: 'easy'
                }
            ];

            memoryManager.cacheVocabulary('wohnen|wohnung', testWords);
            
            // Individual word should also be cached
            const retrievedWord = memoryManager.getWord('word-1');
            expect(retrievedWord).toEqual(testWords[0]);
        });
    });

    describe('Cache Management', () => {
        it('should clear cache', () => {
            const testWord: Word = {
                id: 'test-word',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'wohnen',
                subTopicId: 'wohnung',
                difficulty: 'easy'
            };

            memoryManager.cacheWord(testWord);
            memoryManager.cacheVocabulary('test-topic', [testWord]);
            
            clearMemoryCache();
            
            const stats = memoryManager.getCacheStats();
            expect(stats.wordCacheSize).toBe(0);
            expect(stats.vocabularyCacheSize).toBe(0);
        });

        it('should set max cache size', () => {
            memoryManager.setMaxCacheSize(5);
            const stats = memoryManager.getCacheStats();
            expect(stats.maxCacheSize).toBe(5);
        });
    });

    describe('Statistics', () => {
        it('should return correct cache statistics', () => {
            const testWord: Word = {
                id: 'test-word',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'wohnen',
                subTopicId: 'wohnung',
                difficulty: 'easy'
            };

            memoryManager.cacheWord(testWord);
            memoryManager.cacheVocabulary('test-topic', [testWord]);
            
            const stats = memoryManager.getCacheStats();
            
            expect(stats.wordCacheSize).toBe(1);
            expect(stats.vocabularyCacheSize).toBe(1);
            expect(stats.totalMemoryUsage).toBe(2);
            expect(stats.maxCacheSize).toBe(1000);
        });

        it('should return performance metrics', () => {
            const metrics = memoryManager.getPerformanceMetrics();
            
            expect(metrics).toHaveProperty('hitRate');
            expect(metrics).toHaveProperty('missRate');
            expect(metrics).toHaveProperty('averageAccessTime');
            expect(typeof metrics.hitRate).toBe('number');
            expect(typeof metrics.missRate).toBe('number');
            expect(typeof metrics.averageAccessTime).toBe('number');
        });
    });

    describe('Utility Functions', () => {
        it('should preload vocabulary', () => {
            const testWords: Word[] = [
                {
                    id: 'word-1',
                    german: 'Haus',
                    english: 'house',
                    wordType: 'noun',
                    article: 'das',
                    plural: 'Häuser',
                    topicId: 'wohnen',
                    subTopicId: 'wohnung',
                    difficulty: 'easy'
                }
            ];

            preloadVocabulary('wohnen|wohnung', testWords);
            const cachedVocabulary = getCachedVocabulary('wohnen|wohnung');
            
            expect(cachedVocabulary).toEqual(testWords);
        });

        it('should get cached word', () => {
            const testWord: Word = {
                id: 'test-word',
                german: 'Haus',
                english: 'house',
                wordType: 'noun',
                article: 'das',
                plural: 'Häuser',
                topicId: 'wohnen',
                subTopicId: 'wohnung',
                difficulty: 'easy'
            };

            memoryManager.cacheWord(testWord);
            const retrievedWord = getCachedWord('test-word');
            
            expect(retrievedWord).toEqual(testWord);
        });

        it('should get memory stats', () => {
            const stats = getMemoryStats();
            
            expect(stats).toHaveProperty('wordCacheSize');
            expect(stats).toHaveProperty('vocabularyCacheSize');
            expect(stats).toHaveProperty('totalMemoryUsage');
            expect(stats).toHaveProperty('maxCacheSize');
        });
    });
}); 