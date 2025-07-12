import type { ModeId, WordId, TrainerState } from '../types/trainer';

export class ErrorCounterManager {
    private state: TrainerState;
    private updateCallbacks: Set<() => void> = new Set();
    private saveTimeout: NodeJS.Timeout | null = null;
    
    constructor(state: TrainerState) {
        this.state = state;
    }
    
    // Registriere UI-Update Callbacks
    onUpdate(callback: () => void): () => void {
        this.updateCallbacks.add(callback);
        return () => this.updateCallbacks.delete(callback);
    }
    
    // Zentrale Methode zum Hinzufügen von Fehlern
    addError(wordId: WordId, modeId: ModeId): void {
        console.log(`[ErrorManager] Adding error: ${wordId} in mode ${modeId}`);
        
        // 1. State aktualisieren
        if (!this.state.progress.wordsToRepeatByMode[modeId]) {
            this.state.progress.wordsToRepeatByMode[modeId] = new Set();
        }
        this.state.progress.wordsToRepeatByMode[modeId].add(wordId);
        
        // 2. Persistierung (debounced)
        this.scheduleSave();
        
        // 3. UI sofort aktualisieren
        this.notifyUIUpdate();
    }
    
    // Zentrale Methode zum Entfernen von Fehlern
    removeError(wordId: WordId, modeId: ModeId): void {
        console.log(`[ErrorManager] Removing error: ${wordId} from mode ${modeId}`);
        console.log(`[ErrorManager] Before removal - errors in ${modeId}:`, this.state.progress.wordsToRepeatByMode[modeId]?.size || 0);
        
        // 1. State aktualisieren
        if (this.state.progress.wordsToRepeatByMode[modeId]) {
            const wasPresent = this.state.progress.wordsToRepeatByMode[modeId].has(wordId);
            console.log(`[ErrorManager] Word ${wordId} was present: ${wasPresent}`);
            
            this.state.progress.wordsToRepeatByMode[modeId].delete(wordId);
            
            // Leere Sets entfernen
            if (this.state.progress.wordsToRepeatByMode[modeId].size === 0) {
                delete this.state.progress.wordsToRepeatByMode[modeId];
                console.log(`[ErrorManager] Deleted empty set for mode ${modeId}`);
            }
        } else {
            console.warn(`[ErrorManager] No error set found for mode ${modeId}`);
        }
        
        console.log(`[ErrorManager] After removal - errors in ${modeId}:`, this.state.progress.wordsToRepeatByMode[modeId]?.size || 0);
        
        // 2. KRITISCH: Direkte DOM-Manipulation als primäre Update-Methode
        this.updateButtonDirectly(modeId);
        
        // 3. Standard UI-Update als Backup
        this.notifyUIUpdate();
        
        // 4. Verzögertes Update als zweites Backup
        setTimeout(() => {
            this.updateButtonDirectly(modeId);
            this.notifyUIUpdate();
        }, 100);
        
        // 5. RequestAnimationFrame als drittes Backup
        requestAnimationFrame(() => {
            this.updateButtonDirectly(modeId);
        });
        
        // 6. Persistierung
        this.scheduleSave();
    }
    
    // Fehleranzahl für einen Modus abrufen
    getErrorCount(modeId: ModeId): number {
        return this.state.progress.wordsToRepeatByMode[modeId]?.size || 0;
    }
    
    // Alle Fehler für einen Modus abrufen
    getErrors(modeId: ModeId): Set<WordId> {
        return this.state.progress.wordsToRepeatByMode[modeId] || new Set();
    }
    
    // Fehler für einen Modus zurücksetzen
    clearErrors(modeId: ModeId): void {
        console.log(`[ErrorManager] Clearing all errors for mode ${modeId}`);
        
        delete this.state.progress.wordsToRepeatByMode[modeId];
        this.scheduleSave();
        this.notifyUIUpdate();
    }
    
    // Alle Fehler zurücksetzen
    clearAllErrors(): void {
        console.log(`[ErrorManager] Clearing ALL errors`);
        
        this.state.progress.wordsToRepeatByMode = {};
        this.scheduleSave();
        this.notifyUIUpdate();
    }
    
    // Private: Debounced Save
    private scheduleSave(): void {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
        
        this.saveTimeout = setTimeout(() => {
            this.saveToStorage();
        }, 500); // 500ms debounce
    }
    
    // Private: Speichern in localStorage und Firebase
    private saveToStorage(): void {
        try {
            // localStorage
            const toSave: Record<string, WordId[]> = {};
            Object.keys(this.state.progress.wordsToRepeatByMode).forEach(key => {
                const modeId = key as ModeId;
                toSave[modeId] = Array.from(this.state.progress.wordsToRepeatByMode[modeId]);
            });
            
            localStorage.setItem('trainer-words-to-repeat', JSON.stringify(toSave));
            console.log('[ErrorManager] Saved to localStorage');
            
            // Firebase (falls verfügbar)
            if ((window as any).firebaseSyncService) {
                (window as any).firebaseSyncService.saveProgress(toSave);
                console.log('[ErrorManager] Saved to Firebase');
            }
        } catch (error) {
            console.error('[ErrorManager] Failed to save:', error);
        }
    }
    
    // Private: UI-Updates auslösen
    private notifyUIUpdate(): void {
        // Alle registrierten Callbacks aufrufen
        this.updateCallbacks.forEach(callback => {
            try {
                callback();
            } catch (error) {
                console.error('[ErrorManager] UI update failed:', error);
            }
        });
    }
    
    // Neue Methode: Direkte DOM-Manipulation
    private updateButtonDirectly(modeId: ModeId): void {
        const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
        if (!repeatButton) {
            console.warn(`[ErrorManager] Button not found: mode-repeat-${modeId}`);
            return;
        }
        
        const countSpan = repeatButton.querySelector('.count-display');
        if (!countSpan) {
            console.warn(`[ErrorManager] Count display not found for ${modeId}`);
            return;
        }
        
        const errorCount = this.getErrorCount(modeId);
        console.log(`[ErrorManager] Direct DOM update: ${modeId} = ${errorCount}`);
        
        // Direkte Aktualisierung des Textes
        countSpan.textContent = errorCount.toString();
        
        // Button-Status aktualisieren
        if (errorCount === 0) {
            repeatButton.classList.add('opacity-50', 'cursor-not-allowed');
            repeatButton.setAttribute('disabled', 'true');
            repeatButton.classList.remove('bg-red-600', 'text-white');
            repeatButton.classList.add('bg-red-100', 'text-red-500');
        } else {
            repeatButton.classList.remove('opacity-50', 'cursor-not-allowed');
            repeatButton.removeAttribute('disabled');
        }
        
        // Force Browser Repaint
        repeatButton.style.display = 'none';
        repeatButton.offsetHeight; // Trigger reflow
        repeatButton.style.display = '';
    }
    
    // Lade Fehler aus localStorage
    loadFromStorage(): void {
        const saved = localStorage.getItem('trainer-words-to-repeat');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                Object.keys(parsed).forEach(mode => {
                    this.state.progress.wordsToRepeatByMode[mode as ModeId] = 
                        new Set(parsed[mode] as WordId[]);
                });
                console.log('[ErrorManager] Loaded from localStorage');
                this.notifyUIUpdate();
            } catch (error) {
                console.error('[ErrorManager] Failed to load:', error);
            }
        }
    }
} 