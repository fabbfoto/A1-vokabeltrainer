// Performance Monitor - Performance-Überwachung und Optimierung
import { memoryManager } from './memory-manager';
import { lazyLoader } from '../ui/lazy-loader';

// Performance Monitoring für bessere Optimierung
export class PerformanceMonitor {
    private static instance: PerformanceMonitor;
    private metrics: Map<string, number[]> = new Map();
    private startTimes: Map<string, number> = new Map();
    private performanceThresholds = {
        pageLoad: 3000, // 3 seconds
        componentLoad: 500, // 500ms
        apiCall: 2000, // 2 seconds
        memoryUsage: 50 * 1024 * 1024 // 50MB
    };

    static getInstance(): PerformanceMonitor {
        if (!PerformanceMonitor.instance) {
            PerformanceMonitor.instance = new PerformanceMonitor();
        }
        return PerformanceMonitor.instance;
    }

    // Timing Functions
    startTimer(operation: string): void {
        this.startTimes.set(operation, performance.now());
    }

    endTimer(operation: string): number {
        const startTime = this.startTimes.get(operation);
        if (!startTime) {
            console.warn(`Timer for operation '${operation}' was not started`);
            return 0;
        }

        const duration = performance.now() - startTime;
        this.recordMetric(operation, duration);
        this.startTimes.delete(operation);

        // Check if performance threshold is exceeded
        this.checkPerformanceThreshold(operation, duration);

        return duration;
    }

    // Metric Recording
    private recordMetric(operation: string, value: number): void {
        if (!this.metrics.has(operation)) {
            this.metrics.set(operation, []);
        }
        this.metrics.get(operation)!.push(value);
    }

    // Performance Threshold Checking
    private checkPerformanceThreshold(operation: string, duration: number): void {
        const threshold = this.performanceThresholds[operation as keyof typeof this.performanceThresholds];
        if (threshold && duration > threshold) {
            console.warn(`⚠️ Performance warning: ${operation} took ${duration.toFixed(2)}ms (threshold: ${threshold}ms)`);
            this.reportPerformanceIssue(operation, duration, threshold);
        }
    }

    private reportPerformanceIssue(operation: string, duration: number, threshold: number): void {
        // TODO: Send performance issue to analytics or monitoring service
        console.error(`🚨 Performance issue detected: ${operation} exceeded threshold by ${(duration - threshold).toFixed(2)}ms`);
    }

    // Memory Monitoring
    monitorMemoryUsage(): void {
        if ('memory' in performance) {
            const memoryInfo = (performance as any).memory;
            const usedMemory = memoryInfo.usedJSHeapSize;
            const totalMemory = memoryInfo.totalJSHeapSize;
            const memoryUsage = (usedMemory / totalMemory) * 100;

            this.recordMetric('memoryUsage', memoryUsage);

            if (usedMemory > this.performanceThresholds.memoryUsage) {
                console.warn(`⚠️ High memory usage: ${(usedMemory / 1024 / 1024).toFixed(2)}MB`);
                this.optimizeMemory();
            }
        }
    }

    private optimizeMemory(): void {
        console.log('🔧 Optimizing memory usage...');
        
        // Clear caches
        memoryManager.clearCache();
        lazyLoader.clearCache();
        
        // Force garbage collection if available
        if ('gc' in window) {
            (window as any).gc();
        }
        
        console.log('✅ Memory optimization completed');
    }

    // Component Load Monitoring
    monitorComponentLoad(componentName: string): void {
        this.startTimer(`componentLoad_${componentName}`);
    }

    endComponentLoad(componentName: string): number {
        return this.endTimer(`componentLoad_${componentName}`);
    }

    // API Call Monitoring
    monitorApiCall(apiName: string): void {
        this.startTimer(`apiCall_${apiName}`);
    }

    endApiCall(apiName: string): number {
        return this.endTimer(`apiCall_${apiName}`);
    }

    // Page Load Monitoring
    monitorPageLoad(): void {
        this.startTimer('pageLoad');
        
        // Monitor when page is fully loaded
        if (document.readyState === 'complete') {
            this.endPageLoad();
        } else {
            window.addEventListener('load', () => {
                this.endPageLoad();
            });
        }
    }

    private endPageLoad(): number {
        return this.endTimer('pageLoad');
    }

    // Performance Analytics
    getPerformanceReport(): {
        averageMetrics: Record<string, number>;
        slowestOperations: Array<{ operation: string; averageTime: number }>;
        memoryStats: any;
        recommendations: string[];
    } {
        const averageMetrics: Record<string, number> = {};
        const operationAverages: Array<{ operation: string; averageTime: number }> = [];

        // Calculate averages
        this.metrics.forEach((values, operation) => {
            const average = values.reduce((sum, val) => sum + val, 0) / values.length;
            averageMetrics[operation] = average;
            operationAverages.push({ operation, averageTime: average });
        });

        // Sort by average time (slowest first)
        operationAverages.sort((a, b) => b.averageTime - a.averageTime);

        // Generate recommendations
        const recommendations = this.generateRecommendations(averageMetrics);

        return {
            averageMetrics,
            slowestOperations: operationAverages.slice(0, 5), // Top 5 slowest
            memoryStats: memoryManager.getCacheStats(),
            recommendations
        };
    }

    private generateRecommendations(metrics: Record<string, number>): string[] {
        const recommendations: string[] = [];

        // Check for slow component loads
        Object.entries(metrics).forEach(([operation, time]) => {
            if (operation.startsWith('componentLoad_') && time > 500) {
                recommendations.push(`Consider lazy loading for ${operation.replace('componentLoad_', '')}`);
            }
            
            if (operation.startsWith('apiCall_') && time > 2000) {
                recommendations.push(`Optimize API call ${operation.replace('apiCall_', '')} - consider caching`);
            }
        });

        // Memory recommendations
        const memoryStats = memoryManager.getCacheStats();
        if (memoryStats.totalMemoryUsage > 500) {
            recommendations.push('Consider reducing cache size to improve memory usage');
        }

        return recommendations;
    }

    // Performance Optimization
    optimizePerformance(): void {
        console.log('🚀 Starting performance optimization...');
        
        // Clear old metrics
        this.metrics.clear();
        
        // Optimize memory
        this.optimizeMemory();
        
        // Preload critical components
        this.preloadCriticalComponents();
        
        console.log('✅ Performance optimization completed');
    }

    private async preloadCriticalComponents(): Promise<void> {
        try {
            await lazyLoader.preloadComponents();
        } catch (error) {
            console.warn('Failed to preload components:', error);
        }
    }

    // Utility Methods
    clearMetrics(): void {
        this.metrics.clear();
        this.startTimes.clear();
    }

    getMetrics(): Map<string, number[]> {
        return new Map(this.metrics);
    }
}

// Convenience functions
export const performanceMonitor = PerformanceMonitor.getInstance();

// Global performance monitoring
export function startPerformanceMonitoring(): void {
    performanceMonitor.monitorPageLoad();
    
    // Monitor memory usage periodically
    setInterval(() => {
        performanceMonitor.monitorMemoryUsage();
    }, 30000); // Every 30 seconds
    
    console.log('📊 Performance monitoring started');
}

export function getPerformanceReport(): any {
    return performanceMonitor.getPerformanceReport();
}

export function optimizePerformance(): void {
    performanceMonitor.optimizePerformance();
} 