// shared/services/mode-manager.ts
import type { ModeId, LearningMode, TrainerState } from '../types/trainer';

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
    if (state.training.isCorrectionMode) return 'correcting';
    if (state.test.isTestModeActive) return 'testing';
    if (state.training.isRepeatSessionActive) return 'repeating';
    return 'learning';
  }
  

  
  // Zu neuem Modus wechseln
  static switchToMode(state: TrainerState, newMode: AppMode): void {
    
    
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
        // Korrektur-Handler entfernen - wird in trainer.ts gehandhabt
        break;
        
      case 'testing':
        // Test-spezifische Aufräumarbeiten
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
        break;
    }
  }
  
  private static updateLegacyFlags(state: TrainerState, newMode: AppMode): void {
    // Alle Flags zurücksetzen
    state.test.isTestModeActive = false;
    state.training.isCorrectionMode = false;
    state.training.isRepeatSessionActive = false;
    
    // Neuen Modus setzen
    switch (newMode) {
      case 'testing':
        state.test.isTestModeActive = true;
        break;
      case 'correcting':
        state.training.isCorrectionMode = true;
        break;
      case 'repeating':
        state.training.isRepeatSessionActive = true;
        break;
      // 'learning' braucht keine speziellen Flags
    }
  }
  
  private static initializeMode(state: TrainerState, newMode: AppMode): void {
    switch (newMode) {
      case 'testing':
        // Test-Zeitmessung starten
        state.test.testStartTime = Date.now();
        state.test.currentQuestionStartTime = Date.now();
        state.test.questionTimes = [];

        break;
        
      case 'repeating':

        break;
        
      case 'correcting':

        break;
        
      case 'learning':

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