// Memory Manager - Performance-Optimierung
import type { Word, WordId } from '../core/types/trainer';

// Memory Management für bessere Performance
export class MemoryManager {
    private static instance: MemoryManager;
    private wordCache = new Map<WordId, Word>();
    private vocabularyCache = new Map<string, Word[]>();
    private maxCacheSize = 1000;
    private accessOrder: string[] = [];

    static getInstance(): MemoryManager {
        if (!MemoryManager.instance) {
            MemoryManager.instance = new MemoryManager();
        }
        return MemoryManager.instance;
    }

    // Word Caching
    cacheWord(word: Word): void {
        if (this.wordCache.size >= this.maxCacheSize) {
            this.evictOldest();
        }
        
        this.wordCache.set(word.id, word);
        this.updateAccessOrder(word.id);
    }

    getWord(wordId: WordId): Word | undefined {
        const word = this.wordCache.get(wordId);
        if (word) {
            this.updateAccessOrder(wordId);
        }
        return word;
    }

    // Vocabulary Caching
    cacheVocabulary(topicKey: string, words: Word[]): void {
        if (this.vocabularyCache.size >= this.maxCacheSize) {
            this.evictOldestVocabulary();
        }
        
        this.vocabularyCache.set(topicKey, words);
        this.updateAccessOrder(topicKey);
        
        // Cache individual words
        words.forEach(word => this.cacheWord(word));
    }

    getVocabulary(topicKey: string): Word[] | undefined {
        const vocabulary = this.vocabularyCache.get(topicKey);
        if (vocabulary) {
            this.updateAccessOrder(topicKey);
        }
        return vocabulary;
    }

    // Cache Management
    private evictOldest(): void {
        if (this.accessOrder.length === 0) return;
        
        const oldestKey = this.accessOrder.shift()!;
        this.wordCache.delete(oldestKey as WordId);
    }

    private evictOldestVocabulary(): void {
        if (this.accessOrder.length === 0) return;
        
        const oldestKey = this.accessOrder.shift()!;
        this.vocabularyCache.delete(oldestKey);
    }

    private updateAccessOrder(key: string): void {
        // Remove from current position
        const index = this.accessOrder.indexOf(key);
        if (index > -1) {
            this.accessOrder.splice(index, 1);
        }
        
        // Add to end (most recently used)
        this.accessOrder.push(key);
    }

    // Memory Management
    clearCache(): void {
        this.wordCache.clear();
        this.vocabularyCache.clear();
        this.accessOrder = [];
        console.log('🗑️ Memory cache cleared');
    }

    setMaxCacheSize(size: number): void {
        this.maxCacheSize = size;
        this.enforceCacheSize();
    }

    private enforceCacheSize(): void {
        while (this.wordCache.size > this.maxCacheSize) {
            this.evictOldest();
        }
        while (this.vocabularyCache.size > this.maxCacheSize) {
            this.evictOldestVocabulary();
        }
    }

    // Statistics
    getCacheStats(): {
        wordCacheSize: number;
        vocabularyCacheSize: number;
        totalMemoryUsage: number;
        maxCacheSize: number;
    } {
        return {
            wordCacheSize: this.wordCache.size,
            vocabularyCacheSize: this.vocabularyCache.size,
            totalMemoryUsage: this.wordCache.size + this.vocabularyCache.size,
            maxCacheSize: this.maxCacheSize
        };
    }

    // Performance Monitoring
    getPerformanceMetrics(): {
        hitRate: number;
        missRate: number;
        averageAccessTime: number;
    } {
        // TODO: Implement actual performance metrics
        return {
            hitRate: 0.85, // Placeholder
            missRate: 0.15, // Placeholder
            averageAccessTime: 0.1 // Placeholder in milliseconds
        };
    }
}

// Convenience functions
export const memoryManager = MemoryManager.getInstance();

// Utility functions for vocabulary management
export function preloadVocabulary(topicKey: string, words: Word[]): void {
    memoryManager.cacheVocabulary(topicKey, words);
}

export function getCachedVocabulary(topicKey: string): Word[] | undefined {
    return memoryManager.getVocabulary(topicKey);
}

export function getCachedWord(wordId: WordId): Word | undefined {
    return memoryManager.getWord(wordId);
}

export function clearMemoryCache(): void {
    memoryManager.clearCache();
}

export function getMemoryStats(): any {
    return memoryManager.getCacheStats();
} 