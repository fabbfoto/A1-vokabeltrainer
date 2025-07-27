// Unit Tests für PerformanceMonitor
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { PerformanceMonitor, startPerformanceMonitoring, getPerformanceReport, optimizePerformance } from '../../../src/utils/performance-monitor';

// Mock performance API
const mockPerformance = {
    now: vi.fn(() => 1000),
    memory: {
        usedJSHeapSize: 50 * 1024 * 1024, // 50MB
        totalJSHeapSize: 100 * 1024 * 1024 // 100MB
    }
};

// Mock window.performance
Object.defineProperty(window, 'performance', {
    value: mockPerformance,
    writable: true
});

describe('PerformanceMonitor', () => {
    let performanceMonitor: PerformanceMonitor;

    beforeEach(() => {
        // Reset singleton instance
        (PerformanceMonitor as any).instance = undefined;
        performanceMonitor = PerformanceMonitor.getInstance();
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('Singleton Pattern', () => {
        it('should return the same instance', () => {
            const instance1 = PerformanceMonitor.getInstance();
            const instance2 = PerformanceMonitor.getInstance();
            expect(instance1).toBe(instance2);
        });
    });

    describe('Timing Functions', () => {
        it('should start and end timer correctly', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            const duration = performanceMonitor.endTimer(operation);
            
            expect(duration).toBe(0); // Since we mocked performance.now to return same value
            expect(mockPerformance.now).toHaveBeenCalled();
        });

        it('should warn when ending timer that was not started', () => {
            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            performanceMonitor.endTimer('non-started-timer');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining("Timer for operation 'non-started-timer' was not started")
            );
        });

        it('should record metrics for timing operations', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            performanceMonitor.endTimer(operation);
            
            const report = performanceMonitor.getPerformanceReport();
            expect(report.averageMetrics).toHaveProperty(operation);
        });
    });

    describe('Component Load Monitoring', () => {
        it('should monitor component load times', () => {
            const componentName = 'navigation';
            
            performanceMonitor.monitorComponentLoad(componentName);
            const duration = performanceMonitor.endComponentLoad(componentName);
            
            expect(duration).toBe(0);
        });
    });

    describe('API Call Monitoring', () => {
        it('should monitor API call times', () => {
            const apiName = 'supabase-auth';
            
            performanceMonitor.monitorApiCall(apiName);
            const duration = performanceMonitor.endApiCall(apiName);
            
            expect(duration).toBe(0);
        });
    });

    describe('Memory Monitoring', () => {
        it('should monitor memory usage', () => {
            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            performanceMonitor.monitorMemoryUsage();
            
            // Should not warn since memory usage is within limits
            expect(consoleSpy).not.toHaveBeenCalled();
        });

        it('should warn when memory usage is high', () => {
            // Mock high memory usage
            Object.defineProperty(window, 'performance', {
                value: {
                    ...mockPerformance,
                    memory: {
                        usedJSHeapSize: 100 * 1024 * 1024, // 100MB
                        totalJSHeapSize: 150 * 1024 * 1024 // 150MB
                    }
                },
                writable: true
            });

            const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            
            performanceMonitor.monitorMemoryUsage();
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('High memory usage')
            );
            expect(consoleLogSpy).toHaveBeenCalledWith(
                expect.stringContaining('Optimizing memory usage')
            );
        });
    });

    describe('Performance Reports', () => {
        it('should generate performance report', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            performanceMonitor.endTimer(operation);
            
            const report = performanceMonitor.getPerformanceReport();
            
            expect(report).toHaveProperty('averageMetrics');
            expect(report).toHaveProperty('slowestOperations');
            expect(report).toHaveProperty('memoryStats');
            expect(report).toHaveProperty('recommendations');
            expect(Array.isArray(report.recommendations)).toBe(true);
        });

        it('should identify slow operations', () => {
            // Mock slow operation
            const slowOperation = 'slow-component-load';
            const fastOperation = 'fast-component-load';
            
            // Simulate slow operation
            vi.mocked(mockPerformance.now)
                .mockReturnValueOnce(1000) // start
                .mockReturnValueOnce(2000) // end (1000ms duration)
                .mockReturnValueOnce(2000) // start
                .mockReturnValueOnce(2100); // end (100ms duration)
            
            performanceMonitor.startTimer(slowOperation);
            performanceMonitor.endTimer(slowOperation);
            
            performanceMonitor.startTimer(fastOperation);
            performanceMonitor.endTimer(fastOperation);
            
            const report = performanceMonitor.getPerformanceReport();
            
            expect(report.slowestOperations[0].operation).toBe(slowOperation);
            expect(report.slowestOperations[0].averageTime).toBe(1000);
        });

        it('should generate recommendations for slow operations', () => {
            const slowOperation = 'componentLoad_slow-component';
            
            // Mock slow component load
            vi.mocked(mockPerformance.now)
                .mockReturnValueOnce(1000)
                .mockReturnValueOnce(2000); // 1000ms duration
            
            performanceMonitor.startTimer(slowOperation);
            performanceMonitor.endTimer(slowOperation);
            
            const report = performanceMonitor.getPerformanceReport();
            
            expect(report.recommendations).toContain(
                expect.stringContaining('Consider lazy loading for slow-component')
            );
        });
    });

    describe('Performance Optimization', () => {
        it('should optimize performance', () => {
            const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
            
            optimizePerformance();
            
            expect(consoleLogSpy).toHaveBeenCalledWith(
                expect.stringContaining('Starting performance optimization')
            );
            expect(consoleLogSpy).toHaveBeenCalledWith(
                expect.stringContaining('Performance optimization completed')
            );
        });

        it('should clear metrics during optimization', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            performanceMonitor.endTimer(operation);
            
            // Verify metrics exist
            let report = performanceMonitor.getPerformanceReport();
            expect(report.averageMetrics).toHaveProperty(operation);
            
            // Optimize performance
            optimizePerformance();
            
            // Verify metrics are cleared
            report = performanceMonitor.getPerformanceReport();
            expect(report.averageMetrics).not.toHaveProperty(operation);
        });
    });

    describe('Utility Functions', () => {
        it('should start performance monitoring', () => {
            const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            
            startPerformanceMonitoring();
            
            expect(consoleLogSpy).toHaveBeenCalledWith(
                expect.stringContaining('Performance monitoring started')
            );
        });

        it('should get performance report', () => {
            const report = getPerformanceReport();
            
            expect(report).toHaveProperty('averageMetrics');
            expect(report).toHaveProperty('slowestOperations');
            expect(report).toHaveProperty('memoryStats');
            expect(report).toHaveProperty('recommendations');
        });

        it('should optimize performance', () => {
            const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
            
            optimizePerformance();
            
            expect(consoleLogSpy).toHaveBeenCalledWith(
                expect.stringContaining('Starting performance optimization')
            );
        });
    });

    describe('Cache Management', () => {
        it('should clear metrics', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            performanceMonitor.endTimer(operation);
            
            // Verify metrics exist
            let metrics = performanceMonitor.getMetrics();
            expect(metrics.has(operation)).toBe(true);
            
            // Clear metrics
            performanceMonitor.clearMetrics();
            
            // Verify metrics are cleared
            metrics = performanceMonitor.getMetrics();
            expect(metrics.has(operation)).toBe(false);
        });

        it('should return metrics map', () => {
            const operation = 'test-operation';
            
            performanceMonitor.startTimer(operation);
            performanceMonitor.endTimer(operation);
            
            const metrics = performanceMonitor.getMetrics();
            
            expect(metrics).toBeInstanceOf(Map);
            expect(metrics.has(operation)).toBe(true);
        });
    });
}); 