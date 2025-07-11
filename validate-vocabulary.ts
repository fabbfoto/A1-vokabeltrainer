// validate-vocabulary.ts
// Validierungsfunktion für alle Vokabular-Dateien

import { vokabular } from './vokabular';
import type { Word } from './shared/types/vocabulary';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalWords: number;
    wordsWithExampleGerman: number;
    wordsWithExampleEnglish: number;
    wordsWithClozeData: number;
  };
}

export function validateVocabulary(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let totalWords = 0;
  let wordsWithExampleGerman = 0;
  let wordsWithExampleEnglish = 0;
  let wordsWithClozeData = 0;

  console.log('🔍 Starte Vokabular-Validierung...');

  for (const [mainTopic, mainTopicData] of Object.entries(vokabular)) {
    console.log(`📚 Prüfe Hauptthema: ${mainTopic}`);
    for (const [subTopic, words] of Object.entries(mainTopicData)) {
      console.log(`  📖 Prüfe Unterthema: ${subTopic} (${words.length} Wörter)`);
      words.forEach((word, index) => {
        totalWords++;
        const wordPath = `${mainTopic} > ${subTopic} > ${word.german || 'UNKNOWN'} (${index})`;
        if ('exampleGerman' in word && word.exampleGerman) {
          wordsWithExampleGerman++;
        }
        if ('exampleEnglish' in word && word.exampleEnglish) {
          wordsWithExampleEnglish++;
        }
        if ('clozeParts' in word && word.clozeParts && word.clozeParts.length > 0) {
          wordsWithClozeData++;
        }
        // Nur grundlegende Validierung:
        if (!word.id) {
          errors.push(`${wordPath}: Keine ID`);
        }
        if (!word.german) {
          errors.push(`${wordPath}: Kein deutsches Wort`);
        }
        if (!word.english) {
          errors.push(`${wordPath}: Keine englische Übersetzung`);
        }
      });
    }
  }

  const result: ValidationResult = {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalWords,
      wordsWithExampleGerman,
      wordsWithExampleEnglish,
      wordsWithClozeData
    }
  };

  console.log('📊 Validierung abgeschlossen:');
  console.log(`  ✅ Gesamtanzahl Wörter: ${totalWords}`);
  console.log(`  ✅ Wörter mit exampleGerman: ${wordsWithExampleGerman}`);
  console.log(`  ✅ Wörter mit exampleEnglish: ${wordsWithExampleEnglish}`);
  console.log(`  ✅ Wörter mit Cloze-Daten: ${wordsWithClozeData}`);
  console.log(`  ❌ Fehler gefunden: ${errors.length}`);

  if (errors.length > 0) {
    console.error('❌ Validierungsfehler:', errors);
    console.error('=== DETAILLIERTE FEHLERLISTE ===');
    errors.forEach((error, index) => {
      console.error(`${index + 1}. ${error}`);
    });
    console.error('=== ENDE FEHLERLISTE ===');
  } else {
    console.log('🎉 Alle Vokabular-Dateien sind korrekt!');
  }

  return result;
}

// Automatische Validierung beim Import
if (typeof window !== 'undefined') {
  // Browser-Umgebung
  (window as any).validateVocabulary = validateVocabulary;
  console.log('🔍 Vokabular-Validierung verfügbar: window.validateVocabulary()');
} else {
  // Node.js-Umgebung
  validateVocabulary();
} 