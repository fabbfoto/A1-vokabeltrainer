// shared/events/navigation-events.ts
// Zentrale Event-Definitionen für konsistente Verwendung

// Typen für Navigation-Events
export interface NavigationEventDetail {
    isRoot: boolean;
    timestamp: number;
    [key: string]: unknown; // Für zusätzliche Daten
}

export interface SubNavigationInfo {
    [key: string]: unknown; // Flexible Struktur für Sub-Navigation-Daten
}

export const NavigationEvents = {
    CHANGED: 'navigationChanged' as const,
    
    // Helper-Funktion zum Dispatchen
    dispatch(isRoot: boolean, additionalData: Record<string, unknown> = {}): void {
        const event = new CustomEvent<NavigationEventDetail>(this.CHANGED, {
            detail: {
                isRoot: isRoot,
                timestamp: Date.now(),
                ...additionalData
            }
        });
        window.dispatchEvent(event);
    },
    
    // Helper für Root-Navigation
    dispatchRoot(): void {
        this.dispatch(true);
    },
    
    // Helper für Sub-Navigation
    dispatchSub(subInfo: SubNavigationInfo = {}): void {
        this.dispatch(false, subInfo);
    }
}; 