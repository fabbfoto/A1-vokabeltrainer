// shared/utils/error-handler.ts
// Zentrale Error-Handling-Klasse für besseres Debugging

export enum ErrorSeverity {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}

export enum ErrorCategory {
    UI = 'ui',
    STATE = 'state',
    NETWORK = 'network',
    VALIDATION = 'validation',
    AUTH = 'auth',
    STORAGE = 'storage',
    PERFORMANCE = 'performance'
}

export interface ErrorLog {
    id: string;
    timestamp: Date;
    severity: ErrorSeverity;
    category: ErrorCategory;
    message: string;
    details?: any;
    stack?: string;
    context?: Record<string, any>;
    userId?: string;
    sessionId?: string;
}

export class ErrorHandler {
    private static instance: ErrorHandler;
    private errorLogs: ErrorLog[] = [];
    private maxLogs = 1000;
    private isProduction = process.env.NODE_ENV === 'production';
    
    private constructor() {
        this.setupGlobalErrorHandling();
    }
    
    static getInstance(): ErrorHandler {
        if (!ErrorHandler.instance) {
            ErrorHandler.instance = new ErrorHandler();
        }
        return ErrorHandler.instance;
    }
    
    /**
     * Loggt einen Fehler mit verschiedenen Schweregraden
     */
    log(
        message: string,
        severity: ErrorSeverity = ErrorSeverity.MEDIUM,
        category: ErrorCategory = ErrorCategory.UI,
        details?: any,
        context?: Record<string, any>
    ): void {
        const errorLog: ErrorLog = {
            id: this.generateErrorId(),
            timestamp: new Date(),
            severity,
            category,
            message,
            details,
            stack: new Error().stack,
            context: {
                ...context,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: Date.now()
            }
        };
        
        this.errorLogs.push(errorLog);
        this.cleanupOldLogs();
        
        // Console-Ausgabe basierend auf Schweregrad
        this.logToConsole(errorLog);
        
        // Kritische Fehler an externe Services senden
        if (severity === ErrorSeverity.CRITICAL) {
            this.sendToExternalService(errorLog);
        }
    }
    
    /**
     * Loggt einen JavaScript-Fehler
     */
    logError(error: Error, context?: Record<string, any>): void {
        this.log(
            error.message,
            ErrorSeverity.HIGH,
            ErrorCategory.UI,
            { name: error.name, stack: error.stack },
            context
        );
    }
    
    /**
     * Loggt eine Warnung
     */
    warn(message: string, details?: any, context?: Record<string, any>): void {
        this.log(message, ErrorSeverity.LOW, ErrorCategory.UI, details, context);
    }
    
    /**
     * Loggt eine Info-Nachricht
     */
    info(message: string, details?: any, context?: Record<string, any>): void {
        if (!this.isProduction) {
            console.info(`[INFO] ${message}`, details, context);
        }
    }
    
    /**
     * Behandelt einen Fehler mit Recovery-Strategien
     */
    handleError(
        error: Error,
        recoveryStrategy?: () => void,
        context?: Record<string, any>
    ): void {
        this.logError(error, context);
        
        if (recoveryStrategy) {
            try {
                recoveryStrategy();
            } catch (recoveryError) {
                this.log(
                    'Recovery strategy failed',
                    ErrorSeverity.HIGH,
                    ErrorCategory.UI,
                    { originalError: error.message, recoveryError: (recoveryError as Error).message },
                    context
                );
            }
        }
    }
    
    /**
     * Validiert Daten und loggt Validierungsfehler
     */
    validate<T>(
        data: T,
        validator: (data: T) => boolean,
        errorMessage: string,
        context?: Record<string, any>
    ): boolean {
        try {
            const isValid = validator(data);
            if (!isValid) {
                this.log(
                    errorMessage,
                    ErrorSeverity.MEDIUM,
                    ErrorCategory.VALIDATION,
                    { data },
                    context
                );
            }
            return isValid;
        } catch (error) {
            this.logError(error as Error, context);
            return false;
        }
    }
    
    /**
     * Performance-Monitoring
     */
    measurePerformance<T>(
        name: string,
        fn: () => T,
        context?: Record<string, any>
    ): T {
        const startTime = performance.now();
        try {
            const result = fn();
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            if (duration > 100) { // Warnung bei langsamen Operationen
                this.log(
                    `Performance warning: ${name} took ${duration.toFixed(2)}ms`,
                    ErrorSeverity.LOW,
                    ErrorCategory.PERFORMANCE,
                    { duration, name },
                    context
                );
            }
            
            return result;
        } catch (error) {
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            this.log(
                `Performance error: ${name} failed after ${duration.toFixed(2)}ms`,
                ErrorSeverity.MEDIUM,
                ErrorCategory.PERFORMANCE,
                { duration, name, error: (error as Error).message },
                context
            );
            
            throw error;
        }
    }
    
    /**
     * Async Performance-Monitoring
     */
    async measureAsyncPerformance<T>(
        name: string,
        fn: () => Promise<T>,
        context?: Record<string, any>
    ): Promise<T> {
        const startTime = performance.now();
        try {
            const result = await fn();
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            if (duration > 500) { // Warnung bei langsamen async Operationen
                this.log(
                    `Async performance warning: ${name} took ${duration.toFixed(2)}ms`,
                    ErrorSeverity.LOW,
                    ErrorCategory.PERFORMANCE,
                    { duration, name },
                    context
                );
            }
            
            return result;
        } catch (error) {
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            this.log(
                `Async performance error: ${name} failed after ${duration.toFixed(2)}ms`,
                ErrorSeverity.MEDIUM,
                ErrorCategory.PERFORMANCE,
                { duration, name, error: (error as Error).message },
                context
            );
            
            throw error;
        }
    }
    
    /**
     * Gibt alle Error-Logs zurück
     */
    getLogs(): ErrorLog[] {
        return [...this.errorLogs];
    }
    
    /**
     * Gibt Error-Logs nach Kriterien gefiltert zurück
     */
    getLogsByFilter(filter: {
        severity?: ErrorSeverity;
        category?: ErrorCategory;
        since?: Date;
        limit?: number;
    }): ErrorLog[] {
        let filtered = this.errorLogs;
        
        if (filter.severity) {
            filtered = filtered.filter(log => log.severity === filter.severity);
        }
        
        if (filter.category) {
            filtered = filtered.filter(log => log.category === filter.category);
        }
        
        if (filter.since) {
            filtered = filtered.filter(log => log.timestamp >= filter.since!);
        }
        
        if (filter.limit) {
            filtered = filtered.slice(-filter.limit);
        }
        
        return filtered;
    }
    
    /**
     * Löscht alle Error-Logs
     */
    clearLogs(): void {
        this.errorLogs = [];
    }
    
    /**
     * Exportiert Error-Logs als JSON
     */
    exportLogs(): string {
        return JSON.stringify(this.errorLogs, null, 2);
    }
    
    private generateErrorId(): string {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    private cleanupOldLogs(): void {
        if (this.errorLogs.length > this.maxLogs) {
            this.errorLogs = this.errorLogs.slice(-this.maxLogs);
        }
    }
    
    private logToConsole(errorLog: ErrorLog): void {
        const prefix = `[${errorLog.severity.toUpperCase()}]`;
        const category = `[${errorLog.category.toUpperCase()}]`;
        
        switch (errorLog.severity) {
            case ErrorSeverity.CRITICAL:
                console.error(`${prefix} ${category} ${errorLog.message}`, errorLog.details, errorLog.context);
                break;
            case ErrorSeverity.HIGH:
                console.error(`${prefix} ${category} ${errorLog.message}`, errorLog.details);
                break;
            case ErrorSeverity.MEDIUM:
                console.warn(`${prefix} ${category} ${errorLog.message}`, errorLog.details);
                break;
            case ErrorSeverity.LOW:
                if (!this.isProduction) {
                    console.log(`${prefix} ${category} ${errorLog.message}`, errorLog.details);
                }
                break;
        }
    }
    
    private setupGlobalErrorHandling(): void {
        // Unhandled Promise Rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.log(
                'Unhandled Promise Rejection',
                ErrorSeverity.HIGH,
                ErrorCategory.UI,
                { reason: event.reason },
                { type: 'unhandledrejection' }
            );
        });
        
        // Global Error Handler
        window.addEventListener('error', (event) => {
            this.log(
                'Global JavaScript Error',
                ErrorSeverity.HIGH,
                ErrorCategory.UI,
                { 
                    message: event.message,
                    filename: event.filename,
                    lineno: event.lineno,
                    colno: event.colno
                },
                { type: 'global-error' }
            );
        });
    }
    
    private sendToExternalService(errorLog: ErrorLog): void {
        // Hier könnte die Integration mit externen Error-Tracking-Services erfolgen
        // z.B. Sentry, LogRocket, etc.
        if (!this.isProduction) {
            console.log('Would send to external service:', errorLog);
        }
    }
}

// Export der globalen Instanz
export const errorHandler = ErrorHandler.getInstance(); 