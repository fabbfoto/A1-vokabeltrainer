import { Word, TopicId, SubTopicId } from '../shared/types/vocabulary';
import { ModeId, TestCategory, CATEGORY_MODE_MAP } from '../shared/types/trainer';
import { shuffleArray } from '../shared/utils/helfer';

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
    Object.values(vokabular).forEach(mainTopic => {
      Object.values(mainTopic as any).forEach(subTopic => {
        if (Array.isArray(subTopic)) {
          allWords.push(...(subTopic as Word[]));
        }
      });
    });
  } else if (scope === 'mainTopic' && topicId) {
    const mainTopic = vokabular[topicId];
    if (mainTopic) {
      Object.values(mainTopic).forEach(subTopic => {
        if (Array.isArray(subTopic)) {
          allWords.push(...(subTopic as Word[]));
        }
      });
    }
  }
  
  // 2. Mische alle Wörter
  const shuffledWords = shuffleArray(allWords);
  
  // 3. Erstelle Modus-Verteilung und Rotation
  let modeDistribution: Record<ModeId, number> = {};
  let modeRotation: ModeId[] = [];
  
  if (variant === 'chaos') {
    // Gleichmäßige Verteilung für Chaos
    modeDistribution = {
      'mc-de-en': 5,
      'type-de-adj': 5,
      'cloze-adj-de': 5,
      'sentence-translation-en-de': 5
    } as Record<ModeId, number>;
    
    // Erstelle Rotation für Chaos-Modus
    Object.entries(modeDistribution).forEach(([mode, count]) => {
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
  const wordsBySubtopic: Map<string, Word[]> = new Map();
  
  words.forEach(word => {
    const parts = word.id.split('-');
    const subtopicKey = parts.slice(0, 2).join('-');
    
    if (!wordsBySubtopic.has(subtopicKey)) {
      wordsBySubtopic.set(subtopicKey, []);
    }
    wordsBySubtopic.get(subtopicKey)!.push(word);
  });
  
  // Verteile gleichmäßig
  const selected: Word[] = [];
  const subtopics = Array.from(wordsBySubtopic.keys());
  const wordsPerSubtopic = Math.max(1, Math.floor(count / subtopics.length));
  
  subtopics.forEach(subtopic => {
    const subtopicWords = wordsBySubtopic.get(subtopic)!;
    const shuffled = shuffleArray(subtopicWords);
    selected.push(...shuffled.slice(0, wordsPerSubtopic));
  });
  
  // Fülle auf falls nötig
  while (selected.length < count && words.length > selected.length) {
    const remaining = words.filter(w => !selected.includes(w));
    if (remaining.length > 0) {
      selected.push(remaining[Math.floor(Math.random() * remaining.length)]);
    } else {
      break;
    }
  }
  
  return shuffleArray(selected).slice(0, count);
} 