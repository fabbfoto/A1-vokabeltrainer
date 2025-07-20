// shared/types/vocabulary.ts
// Professional vocabulary type system with discriminated unions - KORRIGIERT

// ========== BRANDED TYPES FOR TYPE SAFETY ==========
export type WordId = string & { __brand: 'WordId' };
export type TopicId = string & { __brand: 'TopicId' };
export type SubTopicId = string & { __brand: 'SubTopicId' };

// ========== CORE VOCABULARY ENUMS ==========
export type WordType = 
  | 'noun' 
  | 'verb' 
  | 'adjective' 
  | 'adverb' 
  | 'preposition' 
  | 'pronoun' 
  | 'conjunction' 
  | 'interjection';

export type Article = 'der' | 'die' | 'das' | 'der/die' | 'der/das' | 'die/das';

export type AuxiliaryVerb = 'haben' | 'sein';

export type CaseType = 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv' | 'verb' | 'none';

// ========== GRAMMAR INTERFACES ==========
export interface CaseElement {
  text: string;
  case: CaseType;
}

// ========== EXAMPLE SENTENCE INTERFACES ==========
export interface ExampleSentencePart {
  id?: WordId; // Optional ID for vocabulary files that include it
  text: string;
  case?: CaseType;
  kasus?: CaseType; // Legacy-Kompatibilität
}

export interface ExampleSentenceData {
  exampleGerman?: ExampleSentencePart[] | string;
  exampleEnglish?: string;
  example_de?: ExampleSentencePart[] | string; // Legacy-Kompatibilität
  example_en?: string; // Legacy-Kompatibilität
}

// ========== TYPE GUARDS FOR EXAMPLE SENTENCES ==========
export function isExampleSentencePartArray(value: unknown): value is ExampleSentencePart[] {
  console.log('[DEBUG] isExampleSentencePartArray checking:', value);
  const isArray = Array.isArray(value);
  console.log('[DEBUG] isArray:', isArray);
  
  if (!isArray) return false;
  
  const everyItemValid = value.every(item => {
    const isValid = typeof item === 'object' && item !== null && 'text' in item && typeof item.text === 'string';
    console.log('[DEBUG] item:', item, 'isValid:', isValid);
    return isValid;
  });
  
  console.log('[DEBUG] everyItemValid:', everyItemValid);
  return everyItemValid;
}

export function isExampleSentenceString(value: unknown): value is string {
  return typeof value === 'string';
}

export function getExampleSentenceText(exampleSentence: ExampleSentencePart[] | string | undefined | null): string {
  console.log('[DEBUG] getExampleSentenceText input:', exampleSentence);
  
  if (!exampleSentence) {
    console.log('[DEBUG] exampleSentence is null/undefined, returning empty string');
    return '';
  }
  
  if (isExampleSentencePartArray(exampleSentence)) {
    const result = exampleSentence.map(part => part.text).join(' ');
    console.log('[DEBUG] isExampleSentencePartArray true, result:', result);
    return result;
  }
  
  if (isExampleSentenceString(exampleSentence)) {
    console.log('[DEBUG] isExampleSentenceString true, result:', exampleSentence);
    return exampleSentence;
  }
  
  console.log('[DEBUG] No matching type found, returning empty string');
  return '';
}

// ========== CONJUGATION INTERFACES ==========
export interface Conjugation {
  ich?: string;
  du?: string;
  er?: string;
  wir?: string;
  ihr?: string;
  sie?: string;
}

export interface Imperative {
  du?: string;
  ihr?: string;
  Sie?: string;
}

// ========== BASE WORD INTERFACE ==========
interface BaseWord {
  id: WordId;
  german: string;
  english: string;
  exampleGerman?: ExampleSentencePart[];
  exampleEnglish?: string;
  clozeParts?: string[];
  clozeAnswers?: string[];
}

// ========== DISCRIMINATED UNION WORD TYPES ==========
export interface Noun extends BaseWord {
  wordType: 'noun';
  article: Article;
  plural: string | null;
}

export interface Verb extends BaseWord {
  wordType: 'verb';
  separable: boolean;
  auxiliaryVerb?: AuxiliaryVerb;
  pastParticiple?: string;
  presentConjugation?: Conjugation;
  imperative?: Imperative;
}

export interface Adjective extends BaseWord {
  wordType: 'adjective';
}

export interface Adverb extends BaseWord {
  wordType: 'adverb';
}

export interface Preposition extends BaseWord {
  wordType: 'preposition';
}

export interface Pronoun extends BaseWord {
  wordType: 'pronoun';
}

export interface Conjunction extends BaseWord {
  wordType: 'conjunction';
}

export interface Interjection extends BaseWord {
  wordType: 'interjection';
}

// ========== DISCRIMINATED UNION ==========
export type Word = 
  | Noun 
  | Verb 
  | Adjective 
  | Adverb 
  | Preposition 
  | Pronoun 
  | Conjunction 
  | Interjection;

// ========== VOCABULARY STRUCTURE ==========
export type SubTopic = Word[];

export interface MainTopic {
  [subTopicName: string]: SubTopic;
}

export interface VocabularyStructure {
  [mainTopicName: string]: MainTopic;
}

// ========== TYPE GUARDS ==========
export function isNoun(word: Word): word is Noun {
  return word.wordType === 'noun';
}

export function isVerb(word: Word): word is Verb {
  return word.wordType === 'verb';
}

export function isAdjective(word: Word): word is Adjective {
  return word.wordType === 'adjective';
}

export function isAdverb(word: Word): word is Adverb {
  return word.wordType === 'adverb';
}

export function isPreposition(word: Word): word is Preposition {
  return word.wordType === 'preposition';
}

export function isPronoun(word: Word): word is Pronoun {
  return word.wordType === 'pronoun';
}

export function isConjunction(word: Word): word is Conjunction {
  return word.wordType === 'conjunction';
}

export function isInterjection(word: Word): word is Interjection {
  return word.wordType === 'interjection';
}

// ========== UTILITY FUNCTIONS ==========
export function createWordId(id: string): WordId {
  return id as WordId;
}

export function createTopicId(id: string): TopicId {
  return id as TopicId;
}

export function createSubTopicId(id: string): SubTopicId {
  return id as SubTopicId;
}

// ========== VOCABULARY BUILDER HELPER ==========
export function createVocabulary<T extends VocabularyStructure>(vocabulary: T): T {
  return vocabulary;
}

// ========== VOCABULARY UTILITIES ==========
export function getMainTopics(vocabulary: VocabularyStructure): string[] {
  return Object.keys(vocabulary);
}

export function getSubTopics(vocabulary: VocabularyStructure, mainTopic: string): string[] {
  return vocabulary[mainTopic] ? Object.keys(vocabulary[mainTopic]) : [];
}

export function getWords(vocabulary: VocabularyStructure, mainTopic: string, subTopic: string): Word[] {
  return vocabulary[mainTopic]?.[subTopic] || [];
}

export function getAllWords(vocabulary: VocabularyStructure): Word[] {
  const allWords: Word[] = [];
  
  for (const mainTopic of Object.keys(vocabulary)) {
    for (const subTopic of Object.keys(vocabulary[mainTopic])) {
      allWords.push(...vocabulary[mainTopic][subTopic]);
    }
  }
  
  return allWords;
}

export function getWordById(vocabulary: VocabularyStructure, wordId: WordId): Word | undefined {
  const allWords = getAllWords(vocabulary);
  return allWords.find(word => word.id === wordId);
}

export function getWordsByType<T extends WordType>(vocabulary: VocabularyStructure, type: T): Extract<Word, { wordType: T }>[] {
  const allWords = getAllWords(vocabulary);
  return allWords.filter((word): word is Extract<Word, { wordType: T }> => word.wordType === type);
}

// ========== STATISTICS HELPERS ==========
export function getVocabularyStats(vocabulary: VocabularyStructure): {
  totalMainTopics: number;
  totalSubTopics: number;
  totalWords: number;
  wordsByType: Record<WordType, number>;
} {
  const allWords = getAllWords(vocabulary);
  const wordsByType: Record<WordType, number> = {
    noun: 0,
    verb: 0,
    adjective: 0,
    adverb: 0,
    preposition: 0,
    pronoun: 0,
    conjunction: 0,
    interjection: 0
  };

  for (const word of allWords) {
    wordsByType[word.wordType]++;
  }

  return {
    totalMainTopics: Object.keys(vocabulary).length,
    totalSubTopics: Object.values(vocabulary).reduce((sum, mainTopic) => sum + Object.keys(mainTopic).length, 0),
    totalWords: allWords.length,
    wordsByType
  };
}