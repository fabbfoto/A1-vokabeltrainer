// shared/services/navigation-state-manager.ts
// Navigation State Manager für das A1 Vokabeltrainer Refactoring

import type { 
    NavigationState, 
    NavigationStateManager as INavigationStateManager,
    TopicId, 
    SubTopicId, 
    ModeId 
} from '../types/trainer';
import { createInitialNavigationState } from '../types/trainer';

export class NavigationStateManager implements INavigationStateManager {
    private state: NavigationState;
    private subscribers: Array<(state: NavigationState) => void> = [];

    constructor(initialState?: Partial<NavigationState>) {
        this.state = {
            ...createInitialNavigationState(),
            ...initialState
        };
    }

    // ========== STATE MANAGER INTERFACE ==========
    getState(): NavigationState {
        return { ...this.state };
    }

    setState(newState: Partial<NavigationState>): void {
        this.state = { ...this.state, ...newState };
        this.notifySubscribers();
    }

    subscribe(callback: (state: NavigationState) => void): () => void {
        this.subscribers.push(callback);
        
        // Return unsubscribe function
        return () => {
            const index = this.subscribers.indexOf(callback);
            if (index > -1) {
                this.subscribers.splice(index, 1);
            }
        };
    }

    // ========== NAVIGATION STATE MANAGER INTERFACE ==========
    setCurrentTopic(mainTopic: TopicId, subTopic: SubTopicId): void {
        // Speichere vorherige Position für "Zurück"-Funktionalität
        this.state.previousMainTopic = this.state.currentMainTopic;
        this.state.previousSubTopic = this.state.currentSubTopic;
        
        // Setze neue Position
        this.state.currentMainTopic = mainTopic;
        this.state.currentSubTopic = subTopic;
        
        this.notifySubscribers();
    }

    goBack(): boolean {
        if (this.state.previousMainTopic === null) {
            return false; // Keine vorherige Position verfügbar
        }

        // Tausche aktuelle und vorherige Position
        const tempMain = this.state.currentMainTopic;
        const tempSub = this.state.currentSubTopic;
        
        this.state.currentMainTopic = this.state.previousMainTopic;
        this.state.currentSubTopic = this.state.previousSubTopic;
        
        this.state.previousMainTopic = tempMain;
        this.state.previousSubTopic = tempSub;
        
        this.notifySubscribers();
        return true;
    }

    setLastUsedMode(topicKey: string, mode: ModeId): void {
        this.state.lastUsedModeByTopic[topicKey] = mode;
        this.notifySubscribers();
    }

    getLastUsedMode(topicKey: string): ModeId | undefined {
        return this.state.lastUsedModeByTopic[topicKey];
    }

    // ========== UTILITY METHODS ==========
    getCurrentTopicKey(): string | null {
        if (!this.state.currentMainTopic || !this.state.currentSubTopic) {
            return null;
        }
        return `${this.state.currentMainTopic}|${this.state.currentSubTopic}`;
    }

    hasPreviousTopic(): boolean {
        return this.state.previousMainTopic !== null;
    }

    reset(): void {
        this.state = createInitialNavigationState();
        this.notifySubscribers();
    }

    // ========== PRIVATE METHODS ==========
    private notifySubscribers(): void {
        const stateCopy = this.getState();
        this.subscribers.forEach(callback => {
            try {
                callback(stateCopy);
            } catch (error) {
                console.error('Error in navigation state subscriber:', error);
            }
        });
    }
}

// ========== SINGLETON INSTANCE ==========
// Für globale Verwendung (optional)
let globalNavigationManager: NavigationStateManager | null = null;

export function getGlobalNavigationManager(): NavigationStateManager {
    if (!globalNavigationManager) {
        globalNavigationManager = new NavigationStateManager();
    }
    return globalNavigationManager;
}

export function setGlobalNavigationManager(manager: NavigationStateManager): void {
    globalNavigationManager = manager;
} 