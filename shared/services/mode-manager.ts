// shared/services/mode-manager.ts
import type { ModeId, LearningMode } from '../types/trainer';

// Definiere die verschiedenen App-Modi
export type AppMode = 
  | 'learning'      // Normaler Lernmodus mit Korrekturen
  | 'testing'       // Test-Modus ohne Korrekturen
  | 'repeating'     // Wiederholungs-Modus für Fehler
  | 'correcting';   // Korrektur-Modus zeigt Lösung

export class ModeManager {
  
  // Aktuellen Modus abrufen (Kompatibilität mit alten Flags)
  static getCurrentMode(state: TrainerState): AppMode {
    // Priorisierte Reihenfolge wichtig!
    if (state.isCorrectionMode) return 'correcting';
    if (state.isTestModeActive) return 'testing';
    if (state.isRepeatSessionActive) return 'repeating';
    return 'learning';
  }
  

  
  // Zu neuem Modus wechseln
  static switchToMode(state: TrainerState, newMode: AppMode): void {
    console.log(`[ModeManager] Wechsle von ${this.getCurrentMode(state)} zu ${newMode}`);
    
    // Alten Modus beenden
    this.cleanupCurrentMode(state);
    
    // Neue Flags setzen (für Kompatibilität)
    this.updateLegacyFlags(state, newMode);
    
    // Modus-spezifische Initialisierung
    this.initializeMode(state, newMode);
  }
  
  private static cleanupCurrentMode(state: TrainerState): void {
    const currentMode = this.getCurrentMode(state);
    
    switch (currentMode) {
      case 'correcting':
        // Korrektur-Handler entfernen
        if (state._removeCorrectionEnterHandler) {
          state._removeCorrectionEnterHandler();
          state._removeCorrectionEnterHandler = undefined;
        }
        break;
        
      case 'testing':
        // Test-spezifische Aufräumarbeiten
        state.testStartTime = null;
        state.currentQuestionStartTime = null;
        state.questionTimes = [];
        break;
    }
  }
  
  private static updateLegacyFlags(state: TrainerState, newMode: AppMode): void {
    // Alle Flags zurücksetzen
    state.isTestModeActive = false;
    state.isCorrectionMode = false;
    state.isRepeatSessionActive = false;
    
    // Neuen Modus setzen
    switch (newMode) {
      case 'testing':
        state.isTestModeActive = true;
        break;
      case 'correcting':
        state.isCorrectionMode = true;
        break;
      case 'repeating':
        state.isRepeatSessionActive = true;
        break;
      // 'learning' braucht keine speziellen Flags
    }
  }
  
  private static initializeMode(state: TrainerState, newMode: AppMode): void {
    switch (newMode) {
      case 'testing':
        // Test-Zeitmessung starten
        state.testStartTime = Date.now();
        state.currentQuestionStartTime = Date.now();
        state.questionTimes = [];
        console.log('📝 Test-Modus aktiviert');
        break;
        
      case 'repeating':
        console.log('🔄 Wiederholungs-Modus aktiviert');
        break;
        
      case 'correcting':
        console.log('✏️ Korrektur-Modus aktiviert');
        break;
        
      case 'learning':
        console.log('📚 Lern-Modus aktiviert');
        break;
    }
  }
  
  // Hilfsfunktionen für Modi-Checks
  static isInTestMode(state: TrainerState): boolean {
    return this.getCurrentMode(state) === 'testing';
  }
  
  static isInCorrectionMode(state: TrainerState): boolean {
    return this.getCurrentMode(state) === 'correcting';
  }
  
  static isInRepeatMode(state: TrainerState): boolean {
    return this.getCurrentMode(state) === 'repeating';
  }
  
  static isInLearningMode(state: TrainerState): boolean {
    return this.getCurrentMode(state) === 'learning';
  }
} 