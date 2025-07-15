// Importiere Typen aus shared/types
import type { Word, TopicId, SubTopicId, ModeId, TestCategory } from '../shared/types/trainer';
import type { VocabularyStructure } from '../shared/types/vocabulary';

// Konstante für Kategorie-Modus-Mapping
const CATEGORY_MODE_MAP: Record<TestCategory, ModeId> = {
  'bedeutung': 'mc-de-en' as ModeId,
  'schreibweise': 'type-de-adj' as ModeId,
  'luecke': 'cloze-adj-de' as ModeId,
  'satz': 'sentence-translation-en-de' as ModeId
};

// NEU: Globale Ranglisten-Konfiguration
const GLOBAL_RANKING_CONFIG = {
  // Kategorie-Quota für 20 Fragen
  KATEGORIE_QUOTA: {
    "Einkaufen": 3,      // 15% von 20 Fragen
    "Essen & Trinken": 3,
    "Freizeit & Unterhaltung": 3,
    "Kommunikationsmittel": 2,  // 10%
    "Lernen": 2,
    "Menschlicher Körper & Gesundheit": 2,
    "Persönliche Beziehungen": 1,  // 5%
    "Person": 1,
    "Reisen & Verkehr": 1,  // 5%
    "Umwelt": 1,  // 5%
    "Wohnen": 1   // 5%
  },
  // Test-Modus-Quota für 20 Fragen
  TEST_MODE_QUOTA: {
    "bedeutung": 5,        // 25% von 20 Fragen
    "luecke": 5,           // 25%
    "schreibweise": 5,     // 25%
    "satz": 5              // 25%
  }
};

// Hilfsfunktion
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export interface TestGeneratorConfig {
  variant: 'chaos' | 'structured' | 'global-ranking';
  scope: 'global' | 'mainTopic' | 'subTopic';
  topicId?: TopicId;
  subTopicId?: SubTopicId;
  category?: TestCategory;
  totalQuestions: number;
}

export interface TestGenerationResult {
  words: Word[];
  modeDistribution: Record<ModeId, number>;
  modeRotation?: ModeId[];
  testModeMapping?: Array<{ word: Word; testMode: TestCategory }>;
}

export function generateTestQuestions(
  vokabular: VocabularyStructure,
  config: TestGeneratorConfig
): TestGenerationResult {
  const { variant, scope, topicId, category, totalQuestions = 20 } = config;
  
  console.log('Test-Generator Config:', config);
  
  // NEU: Spezielle Logik für globale Ranglisten
  if (variant === 'global-ranking') {
    return generateGlobalRankingTest(vokabular, totalQuestions);
  }
  
  // 1. Sammle alle relevanten Wörter
  let allWords: Word[] = [];
  
  if (scope === 'global') {
    Object.keys(vokabular).forEach(mainTopicKey => {
      const mainTopic = vokabular[mainTopicKey];
      Object.keys(mainTopic).forEach(subTopicKey => {
        const subTopic = mainTopic[subTopicKey];
        if (Array.isArray(subTopic)) {
          allWords.push(...(subTopic as Word[]));
        }
      });
    });
    console.log(`Globaler Test: ${allWords.length} Wörter gefunden`);
  } else if (scope === 'mainTopic' && topicId) {
    const mainTopic = vokabular[topicId];
    if (mainTopic) {
      Object.keys(mainTopic).forEach(subTopicKey => {
        const subTopic = mainTopic[subTopicKey];
        if (Array.isArray(subTopic)) {
          allWords.push(...(subTopic as Word[]));
        }
      });
    }
    console.log(`MainTopic Test (${topicId}): ${allWords.length} Wörter gefunden`);
  }
  
  // 2. Mische alle Wörter
  const shuffledWords = shuffleArray(allWords);
  
  // 3. Erstelle Modus-Verteilung und Rotation
  const modeKeys = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'] as const;
  let modeDistribution = Object.fromEntries(modeKeys.map(k => [k as ModeId, 0])) as Record<ModeId, number>;
  let modeRotation: ModeId[] = [];
  
  if (variant === 'chaos') {
    modeDistribution = Object.fromEntries(modeKeys.map(k => [k as ModeId, 5])) as Record<ModeId, number>;
    // Erstelle Rotation für Chaos-Modus
    Object.keys(modeDistribution).forEach(mode => {
      const count = modeDistribution[mode as ModeId];
      for (let i = 0; i < count; i++) {
        modeRotation.push(mode as ModeId);
      }
    });
    modeRotation = shuffleArray(modeRotation);
  } else if (variant === 'structured' && category) {
    // Nur eine Kategorie für strukturiert
    const mode = CATEGORY_MODE_MAP[category];
    modeDistribution[mode] = totalQuestions;
    // Keine Rotation bei strukturiert
    for (let i = 0; i < totalQuestions; i++) {
      modeRotation.push(mode);
    }
  }
  
  // 4. Wähle Wörter aus (mit Verteilung über Unterthemen)
  const selectedWords = distributeAcrossSubtopics(shuffledWords, totalQuestions);
  
  console.log(`Test generiert: ${selectedWords.length} Wörter ausgewählt`);
  console.log('Modus-Verteilung:', modeDistribution);
  
  return {
    words: selectedWords,
    modeDistribution,
    modeRotation
  };
}

// NEU: Spezielle Funktion für globale Ranglisten-Tests
function generateGlobalRankingTest(
  vokabular: VocabularyStructure,
  totalQuestions: number = 20
): TestGenerationResult {
  console.log('🎯 Generiere globalen Ranglisten-Test mit ausgewogener Verteilung');
  
  // 1. Sammle Wörter nach Kategorien
  const wordsByCategory: Record<string, Word[]> = {};
  
  Object.keys(vokabular).forEach(mainTopicKey => {
    const mainTopic = vokabular[mainTopicKey];
    Object.keys(mainTopic).forEach(subTopicKey => {
      const subTopic = mainTopic[subTopicKey];
      if (Array.isArray(subTopic)) {
        const category = getCategoryFromTopic(mainTopicKey, subTopicKey);
        if (!wordsByCategory[category]) {
          wordsByCategory[category] = [];
        }
        wordsByCategory[category].push(...(subTopic as Word[]));
      }
    });
  });
  
  console.log('Debug: Gefundene Kategorien:', Object.keys(wordsByCategory));
  console.log('Debug: Wörter pro Kategorie:', Object.fromEntries(
    Object.entries(wordsByCategory).map(([cat, words]) => [cat, words.length])
  ));
  
  // 2. Wähle Wörter nach Kategorie-Quota
  const selectedWords: Word[] = [];
  for (const [category, quota] of Object.entries(GLOBAL_RANKING_CONFIG.KATEGORIE_QUOTA)) {
    const categoryWords = wordsByCategory[category] || [];
    if (categoryWords.length > 0) {
      const shuffled = shuffleArray(categoryWords);
      selectedWords.push(...shuffled.slice(0, quota));
    }
  }
  
  // Fallback: Falls keine Wörter nach Kategorien gefunden, nimm alle verfügbaren
  if (selectedWords.length === 0) {
    console.log('⚠️ Keine Wörter nach Kategorien gefunden, verwende Fallback');
    const allWords: Word[] = [];
    Object.keys(vokabular).forEach(mainTopicKey => {
      const mainTopic = vokabular[mainTopicKey];
      Object.keys(mainTopic).forEach(subTopicKey => {
        const subTopic = mainTopic[subTopicKey];
        if (Array.isArray(subTopic)) {
          allWords.push(...(subTopic as Word[]));
        }
      });
    });
    const shuffled = shuffleArray(allWords);
    selectedWords.push(...shuffled.slice(0, totalQuestions));
  }
  
  // 3. Erstelle Test-Modus-Mapping
  const testModes: TestCategory[] = [];
  for (const [mode, quota] of Object.entries(GLOBAL_RANKING_CONFIG.TEST_MODE_QUOTA)) {
    for (let i = 0; i < quota; i++) {
      testModes.push(mode as TestCategory);
    }
  }
  
  // 4. Mische Test-Modi und erstelle Mapping
  const shuffledModes = shuffleArray(testModes);
  const testModeMapping = selectedWords.map((word, index) => ({
    word,
    testMode: shuffledModes[index] || 'bedeutung'
  }));
  
  // 5. Finale zufällige Reihenfolge
  const finalMapping = shuffleArray(testModeMapping);
  
  // 6. Modus-Verteilung für Kompatibilität
  const modeDistribution: Record<ModeId, number> = {
    'mc-de-en': 0,
    'type-de-adj': 0,
    'cloze-adj-de': 0,
    'sentence-translation-en-de': 0
  } as Record<ModeId, number>;
  
  finalMapping.forEach(({ testMode }) => {
    const mode = CATEGORY_MODE_MAP[testMode];
    modeDistribution[mode]++;
  });
  
  console.log('✅ Globaler Ranglisten-Test generiert:');
  console.log('- Kategorie-Verteilung:', GLOBAL_RANKING_CONFIG.KATEGORIE_QUOTA);
  console.log('- Test-Modus-Verteilung:', GLOBAL_RANKING_CONFIG.TEST_MODE_QUOTA);
  console.log('- Finale Modus-Verteilung:', modeDistribution);
  
  console.log('Debug: Finale Wörter-Anzahl:', finalMapping.length);
  
  return {
    words: finalMapping.map(m => m.word),
    modeDistribution,
    modeRotation: finalMapping.map(m => CATEGORY_MODE_MAP[m.testMode]),
    testModeMapping: finalMapping
  };
}

// NEU: Hilfsfunktion zur Kategorie-Zuordnung
function getCategoryFromTopic(mainTopic: string, subTopic: string): string {
  const categoryMap: Record<string, string> = {
    'einkaufen': 'Einkaufen',
    'essen_trinken': 'Essen & Trinken',
    'freizeit_unterhaltung': 'Freizeit & Unterhaltung',
    'kommunikationsmittel': 'Kommunikationsmittel',
    'lernen': 'Lernen',
    'menschlicher_koerper_gesundheit': 'Menschlicher Körper & Gesundheit',
    'persoenliche_beziehungen': 'Persönliche Beziehungen',
    'person': 'Person',
    'reisen_verkehr': 'Reisen & Verkehr',
    'umwelt': 'Umwelt',
    'wohnen': 'Wohnen'
  };
  
  return categoryMap[mainTopic] || 'Sonstiges';
}

function distributeAcrossSubtopics(words: Word[], count: number): Word[] {
  // Gruppiere nach Unterthema (basierend auf ID-Struktur)
  const wordsBySubtopic: Record<string, Word[]> = {};
  
  words.forEach(word => {
    const parts = word.id.split('-');
    const subtopicKey = parts.slice(0, 2).join('-');
    
    if (!wordsBySubtopic[subtopicKey]) {
      wordsBySubtopic[subtopicKey] = [];
    }
    wordsBySubtopic[subtopicKey].push(word);
  });
  
  // Verteile gleichmäßig
  const selected: Word[] = [];
  const subtopics = Object.keys(wordsBySubtopic);
  const wordsPerSubtopic = Math.max(1, Math.floor(count / subtopics.length));
  
  subtopics.forEach(subtopic => {
    const subtopicWords = wordsBySubtopic[subtopic];
    const shuffled = shuffleArray(subtopicWords);
    selected.push(...shuffled.slice(0, wordsPerSubtopic));
  });
  
  // Fülle auf falls nötig
  while (selected.length < count && words.length > selected.length) {
    const remaining = words.filter(w => !selected.some(selectedWord => selectedWord.id === w.id));
    if (remaining.length > 0) {
      selected.push(remaining[Math.floor(Math.random() * remaining.length)]);
    } else {
      break;
    }
  }
  
  return shuffleArray(selected).slice(0, count);
} 