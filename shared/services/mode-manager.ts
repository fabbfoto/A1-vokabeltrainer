// shared/services/mode-manager.ts
import type { ModeId, LearningMode, TrainerState } from '../types/trainer';

// Definiere die verschiedenen App-Modi
export type AppMode = 
  | 'learning'      // Normaler Lernmodus mit Korrekturen
  | 'testing'       // Test-Modus ohne Korrekturen
  | 'repeating'     // Wiederholungs-Modus für Fehler
  | 'correcting';

// Strategy Interface für Modus-spezifische Logik
interface ModeStrategy {
  processAnswer(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void;
  showFeedback(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void;
  handleNextTask(state: TrainerState): void;
  cleanup(state: TrainerState): void;
}

// Konkrete Strategien für jeden Modus
class LearningModeStrategy implements ModeStrategy {
  processAnswer(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    if (isCorrect) {
      state.training.correctInCurrentRound++;
      // Fehler aus Liste entfernen
      if (state.training.currentMode) {
        // Hier würde removeFromErrorList() aufgerufen werden
      }
    } else {
      // Fehler hinzufügen und Korrekturmodus aktivieren
      state.training.isCorrectionMode = true;
    }
  }

  showFeedback(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    // Im Lernmodus: Sofortiges Feedback
    if (isCorrect) {
      // Grüner Balken für richtig
    } else {
      // Rote Anzeige für falsch + Korrektur
    }
  }

  handleNextTask(state: TrainerState): void {
    // Im Lernmodus: Automatisch weiter nach 1.5s bei richtigen Antworten
    // Bei falschen: Warten auf "Weiter"-Button
  }

  cleanup(state: TrainerState): void {
    // Lernmodus-spezifische Bereinigung
  }
}

class TestingModeStrategy implements ModeStrategy {
  processAnswer(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    // Im Testmodus: Nur Statistiken sammeln, keine Fehlerliste
    if (isCorrect) {
      state.training.correctInCurrentRound++;
    }
    // Keine Fehler hinzufügen, keine Korrekturmodus
  }

  showFeedback(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    // Im Testmodus: KEIN visuelles Feedback
    // Erst am Ende wird ausgewertet
  }

  handleNextTask(state: TrainerState): void {
    // Im Testmodus: Sofort zur nächsten Aufgabe
  }

  cleanup(state: TrainerState): void {
    // Testmodus-spezifische Bereinigung
  }
}

class CorrectionModeStrategy implements ModeStrategy {
  processAnswer(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    // Im Korrekturmodus: Nur Statistiken, kein automatisches Weitergehen
    if (isCorrect) {
      state.training.correctInCurrentRound++;
    }
  }

  showFeedback(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    // Im Korrekturmodus: Sofortiges Feedback
  }

  handleNextTask(state: TrainerState): void {
    // Im Korrekturmodus: Nur manuell über "Weiter"-Button
  }

  cleanup(state: TrainerState): void {
    // Korrekturmodus-spezifische Bereinigung
  }
}

export class ModeManager {
  private static strategies: Record<AppMode, ModeStrategy> = {
    learning: new LearningModeStrategy(),
    testing: new TestingModeStrategy(),
    correcting: new CorrectionModeStrategy(),
    repeating: new LearningModeStrategy() // Wiederholung nutzt Lernmodus-Strategie
  };

  // Aktuellen Modus abrufen (Kompatibilität mit alten Flags)
  static getCurrentMode(state: TrainerState): AppMode {
    // Priorisierte Reihenfolge wichtig!
    if (state.training.isCorrectionMode) return 'correcting';
    if (state.test.isTestModeActive) return 'testing';
    if (state.training.isRepeatSessionActive) return 'repeating';
    return 'learning';
  }

  // Strategy Pattern: Modus-spezifische Logik delegieren
  static processAnswer(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    const currentMode = this.getCurrentMode(state);
    const strategy = this.strategies[currentMode];
    strategy.processAnswer(state, isCorrect, correctAnswer);
  }

  static showFeedback(state: TrainerState, isCorrect: boolean, correctAnswer?: string): void {
    const currentMode = this.getCurrentMode(state);
    const strategy = this.strategies[currentMode];
    strategy.showFeedback(state, isCorrect, correctAnswer);
  }

  static handleNextTask(state: TrainerState): void {
    const currentMode = this.getCurrentMode(state);
    const strategy = this.strategies[currentMode];
    strategy.handleNextTask(state);
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
    const strategy = this.strategies[currentMode];
    strategy.cleanup(state);
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