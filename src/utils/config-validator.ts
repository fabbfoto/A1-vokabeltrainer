import { TRAINER_CONSTANTS } from '../core/types/trainer';

// ========== KONFIGURATIONS-VALIDATOR ==========
// Schützt kritische Einstellungen vor versehentlicher Überschreibung

export class ConfigValidator {
  private static criticalSettings = new Set([
    'ANSWER_COMPARISON.SPELLING_MODE_CASE_SENSITIVE',
    'ANSWER_COMPARISON.CLOZE_MODE_CASE_SENSITIVE', 
    'ANSWER_COMPARISON.SENTENCE_MODE_CASE_SENSITIVE',
    'SPECIAL_CHARS.SS_BETA_DISTINCT',
    'AUTH.MIN_USERNAME_LENGTH',
    'AUTH.MIN_PASSWORD_LENGTH'
  ]);

  /**
   * Validiert, ob eine Einstellung kritisch ist und nicht überschrieben werden sollte
   */
  static isCriticalSetting(settingPath: string): boolean {
    return this.criticalSettings.has(settingPath);
  }

  /**
   * Überwacht Änderungen an kritischen Einstellungen
   */
  static validateSettingChange(settingPath: string, oldValue: unknown, newValue: unknown): boolean {
    if (!this.isCriticalSetting(settingPath)) {
      return true; // Nicht-kritische Einstellungen können geändert werden
    }

    // Kritische Einstellungen nur unter bestimmten Bedingungen ändern
    if (settingPath.includes('CASE_SENSITIVE')) {
      console.warn(`⚠️ KRITISCHE EINSTELLUNG: ${settingPath} wird geändert von ${oldValue} zu ${newValue}`);
      console.warn('⚠️ Stelle sicher, dass dies beabsichtigt ist!');
      
      // Nur in Development-Modus erlauben
      if (process.env.NODE_ENV === 'development') {
        return true;
      }
      
      console.error(`❌ KRITISCHE EINSTELLUNG ${settingPath} kann nicht in Production geändert werden!`);
      return false;
    }

    if (settingPath.includes('SS_BETA_DISTINCT')) {
      if (newValue === false) {
        console.error('❌ SS_BETA_DISTINCT darf NICHT auf false gesetzt werden!');
        return false;
      }
    }

    return true;
  }

  /**
   * Erzwingt kritische Einstellungen
   */
  static enforceCriticalSettings(): void {
    // Stelle sicher, dass kritische Einstellungen korrekt sind
    if (!TRAINER_CONSTANTS.ANSWER_COMPARISON.SPELLING_MODE_CASE_SENSITIVE) {
      console.error('❌ SPELLING_MODE_CASE_SENSITIVE muss true sein!');
      throw new Error('Kritische Einstellung wurde überschrieben: SPELLING_MODE_CASE_SENSITIVE');
    }

    if (!TRAINER_CONSTANTS.SPECIAL_CHARS.SS_BETA_DISTINCT) {
      console.error('❌ SS_BETA_DISTINCT muss true sein!');
      throw new Error('Kritische Einstellung wurde überschrieben: SS_BETA_DISTINCT');
    }

    console.log('✅ Alle kritischen Einstellungen sind korrekt');
  }

  /**
   * Überwacht die vergleicheAntwort Funktion
   */
  static validateAnswerComparison(
    userAnswer: string, 
    correctAnswer: string, 
    options: { caseSensitive?: boolean; ignorePunctuation?: boolean } = {}
  ): void {
    // Warnung wenn caseSensitive in Schreibweise-Modus false ist
    if (options.caseSensitive === false) {
      console.warn('⚠️ ACHTUNG: caseSensitive ist false - Groß-/Kleinschreibung wird ignoriert!');
    }

    // Warnung wenn ß/ss Konvertierung aktiviert ist
    if (userAnswer.includes('ss') && correctAnswer.includes('ß')) {
      console.warn('⚠️ ACHTUNG: ss/ß Konvertierung erkannt - prüfe ob beabsichtigt!');
    }
  }
}

// ========== ENDE KONFIGURATIONS-VALIDATOR ========== 