// vokabular-types.ts
// Type-Definitionen für die Vokabular-Struktur

export type Wortart = 
  | 'Nomen' 
  | 'Verb' 
  | 'Adjektiv' 
  | 'Adverb' 
  | 'Präposition' 
  | 'Pronomen' 
  | 'Konjunktion' 
  | 'Interjektion';

export type Article = 'der' | 'die' | 'das' | 'der/die' | 'der/das' | 'die/das';

export type Hilfsverb = 'haben' | 'sein';

export interface BaseWord {
  id: string;
  wordType: string;
  german: string;
  english: string;
  exampleGerman?: CaseElement[];
  exampleEnglish?: string;
  clozeParts?: string[];
  clozeAnswers?: string[];
}

export interface Nomen extends BaseWord {
  wordType: 'noun';
  article: Article;
  plural: string | null;
}

export interface Verb extends BaseWord {
  wordType: 'verb';
  separable: boolean;
  auxiliaryVerb?: Hilfsverb;
  pastParticiple?: string;
  presentConjugation?: Konjugation;
  imperative?: Imperativ;
}

export interface Adjektiv extends BaseWord {
  wordType: 'adjective';
}

export interface Adverb extends BaseWord {
  wordType: 'adverb';
}

export interface Präposition extends BaseWord {
  wordType: 'preposition';
}

export interface Pronomen extends BaseWord {
  wordType: 'pronoun';
}

export interface Konjunktion extends BaseWord {
  wordType: 'conjunction';
}

export interface Interjektion extends BaseWord {
  wordType: 'interjection';
}

export interface Konjugation {
  ich: string;
  du: string;
  er: string;
  sie: string;
  es: string;
  wir: string;
  ihr: string;
  Sie: string;
}

export interface Imperativ {
  du: string;
  ihr: string;
  Sie: string;
}

export type Word =
  | Nomen
  | Verb
  | Adjektiv
  | Adverb
  | Präposition
  | Pronomen
  | Konjunktion
  | Interjektion;

export type CaseElement = {
  text: string;
  case: string;
};

// Type für ein Unterthema (z.B. "Name", "Geschlecht")
export type Unterthema = Word[];

// Type für ein Hauptthema (z.B. "Person")
export interface Hauptthema {
  [unterthema: string]: Unterthema;
}

// Type für die gesamte Vokabular-Struktur
export interface VokabularStruktur {
  [hauptthema: string]: Hauptthema;
}

// Type Guards für Type-Safety
export function isNomen(word: Word): word is Nomen {
  return word.wordType === 'noun';
}

export function isVerb(word: Word): word is Verb {
  return word.wordType === 'verb';
}

export function isAdjektiv(word: Word): word is Adjektiv {
  return word.wordType === 'adjective';
}

// Helper function für Type-sichere Vokabular-Erstellung
export function createVokabular<T extends VokabularStruktur>(vokabular: T): T {
  return vokabular;
}