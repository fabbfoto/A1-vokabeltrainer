// shared/events/navigation-events.js
// Zentrale Event-Definitionen für konsistente Verwendung

export const NavigationEvents = {
    CHANGED: 'navigationChanged',
    
    // Helper-Funktion zum Dispatchen
    dispatch(isRoot, additionalData = {}) {
        const event = new CustomEvent(this.CHANGED, {
            detail: {
                isRoot: isRoot,
                timestamp: Date.now(),
                ...additionalData
            }
        });
        window.dispatchEvent(event);
    },
    
    // Helper für Root-Navigation
    dispatchRoot() {
        this.dispatch(true);
    },
    
    // Helper für Sub-Navigation
    dispatchSub(subInfo = {}) {
        this.dispatch(false, subInfo);
    }
};