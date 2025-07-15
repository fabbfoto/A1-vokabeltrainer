// shared/utils/performance-optimizer.ts
// Performance-Optimierungen für bessere Benutzererfahrung

import type { Word, WordId } from '../types/trainer';

/**
 * Debounce-Funktion für häufige Operationen
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;
    
    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Throttle-Funktion für UI-Updates
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false;
    
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Memoization für teure Berechnungen
 */
export function memoize<T extends (...args: any[]) => any>(
    func: T,
    keyGenerator?: (...args: Parameters<T>) => string
): T {
    const cache = new Map<string, ReturnType<T>>();
    
    return ((...args: Parameters<T>) => {
        const key = keyGenerator 
            ? keyGenerator(...args)
            : JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = func(...args);
        cache.set(key, result);
        return result;
    }) as T;
}

/**
 * Lazy Loading für Vokabeln
 */
export class LazyVocabularyLoader {
    private cache = new Map<string, Word[]>();
    private loading = new Set<string>();
    
    async loadVocabulary(topicKey: string, loader: () => Promise<Word[]>): Promise<Word[]> {
        // Prüfen ob bereits im Cache
        if (this.cache.has(topicKey)) {
            return this.cache.get(topicKey)!;
        }
        
        // Prüfen ob bereits beim Laden
        if (this.loading.has(topicKey)) {
            // Warten bis Laden abgeschlossen
            return new Promise((resolve) => {
                const checkCache = () => {
                    if (this.cache.has(topicKey)) {
                        resolve(this.cache.get(topicKey)!);
                    } else {
                        setTimeout(checkCache, 50);
                    }
                };
                checkCache();
            });
        }
        
        // Laden starten
        this.loading.add(topicKey);
        try {
            const vocabulary = await loader();
            this.cache.set(topicKey, vocabulary);
            return vocabulary;
        } finally {
            this.loading.delete(topicKey);
        }
    }
    
    clearCache(): void {
        this.cache.clear();
    }
    
    preloadVocabulary(topicKeys: string[], loader: (key: string) => Promise<Word[]>): void {
        topicKeys.forEach(key => {
            if (!this.cache.has(key) && !this.loading.has(key)) {
                this.loadVocabulary(key, () => loader(key));
            }
        });
    }
}

/**
 * Optimierte Wort-Suche mit Index
 */
export class OptimizedWordSearch {
    private wordIndex = new Map<string, Word[]>();
    private initialized = false;
    
    buildIndex(vocabulary: Word[]): void {
        this.wordIndex.clear();
        
        vocabulary.forEach(word => {
            // Index nach deutschen Wörtern
            const germanKey = word.german?.toLowerCase() || '';
            if (!this.wordIndex.has(germanKey)) {
                this.wordIndex.set(germanKey, []);
            }
            this.wordIndex.get(germanKey)!.push(word);
            
            // Index nach englischen Wörtern
            const englishKey = word.english?.toLowerCase() || '';
            if (!this.wordIndex.has(englishKey)) {
                this.wordIndex.set(englishKey, []);
            }
            this.wordIndex.get(englishKey)!.push(word);
        });
        
        this.initialized = true;
    }
    
    search(query: string): Word[] {
        if (!this.initialized) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        return this.wordIndex.get(normalizedQuery) || [];
    }
    
    searchPartial(query: string): Word[] {
        if (!this.initialized) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        const results: Word[] = [];
        
        for (const [key, words] of this.wordIndex.entries()) {
            if (key.includes(normalizedQuery)) {
                results.push(...words);
            }
        }
        
        return results;
    }
}

/**
 * Batch-Processing für UI-Updates
 */
export class BatchProcessor {
    private queue: (() => void)[] = [];
    private processing = false;
    private batchSize = 10;
    private delay = 16; // ~60fps
    
    add(task: () => void): void {
        this.queue.push(task);
        if (!this.processing) {
            this.process();
        }
    }
    
    private async process(): Promise<void> {
        this.processing = true;
        
        while (this.queue.length > 0) {
            const batch = this.queue.splice(0, this.batchSize);
            
            // Batch ausführen
            batch.forEach(task => {
                try {
                    task();
                } catch (error) {
                    console.error('Batch task error:', error);
                }
            });
            
            // Kurze Pause für UI-Responsivität
            if (this.queue.length > 0) {
                await new Promise(resolve => setTimeout(resolve, this.delay));
            }
        }
        
        this.processing = false;
    }
    
    setBatchSize(size: number): void {
        this.batchSize = Math.max(1, size);
    }
    
    setDelay(delay: number): void {
        this.delay = Math.max(0, delay);
    }
}

/**
 * Memory Management für große Datensätze
 */
export class MemoryManager {
    private maxCacheSize = 1000;
    private cache = new Map<string, any>();
    private accessOrder: string[] = [];
    
    set(key: string, value: any): void {
        // LRU Cache-Implementierung
        if (this.cache.has(key)) {
            this.accessOrder = this.accessOrder.filter(k => k !== key);
        } else if (this.cache.size >= this.maxCacheSize) {
            const oldestKey = this.accessOrder.shift();
            if (oldestKey) {
                this.cache.delete(oldestKey);
            }
        }
        
        this.cache.set(key, value);
        this.accessOrder.push(key);
    }
    
    get(key: string): any | undefined {
        if (this.cache.has(key)) {
            this.accessOrder = this.accessOrder.filter(k => k !== key);
            this.accessOrder.push(key);
            return this.cache.get(key);
        }
        return undefined;
    }
    
    clear(): void {
        this.cache.clear();
        this.accessOrder = [];
    }
    
    setMaxSize(size: number): void {
        this.maxCacheSize = Math.max(1, size);
        this.cleanup();
    }
    
    private cleanup(): void {
        while (this.cache.size > this.maxCacheSize) {
            const oldestKey = this.accessOrder.shift();
            if (oldestKey) {
                this.cache.delete(oldestKey);
            }
        }
    }
} 