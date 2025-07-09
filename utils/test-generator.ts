// Lokale Typen definieren (ohne komplexe Imports)
interface Word {
  german: string;
  english: string;
  id: string;
  wordType?: string;
}

type TopicId = string;
type SubTopicId = string;
type ModeId = 'mc-de-en' | 'type-de-adj' | 'cloze-adj-de' | 'sentence-translation-en-de';
type TestCategory = 'multiple-choice' | 'typing' | 'cloze' | 'translation';

// Konstante für Kategorie-Modus-Mapping
const CATEGORY_MODE_MAP: Record<TestCategory, ModeId> = {
  'multiple-choice': 'mc-de-en',
  'typing': 'type-de-adj',
  'cloze': 'cloze-adj-de',
  'translation': 'sentence-translation-en-de'
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
  variant: 'chaos' | 'structured';
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
}

export function generateTestQuestions(
  vokabular: any,
  config: TestGeneratorConfig
): TestGenerationResult {
  const { variant, scope, topicId, category, totalQuestions = 20 } = config;
  
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
  }
  
  // 2. Mische alle Wörter
  const shuffledWords = shuffleArray(allWords);
  
  // 3. Erstelle Modus-Verteilung und Rotation
  let modeDistribution: Record<ModeId, number> = {
    'mc-de-en': 0,
    'type-de-adj': 0,
    'cloze-adj-de': 0,
    'sentence-translation-en-de': 0
  };
  let modeRotation: ModeId[] = [];
  
  if (variant === 'chaos') {
    // Gleichmäßige Verteilung für Chaos
    modeDistribution = {
      'mc-de-en': 5,
      'type-de-adj': 5,
      'cloze-adj-de': 5,
      'sentence-translation-en-de': 5
    };
    
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
  
  return {
    words: selectedWords,
    modeDistribution,
    modeRotation
  };
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