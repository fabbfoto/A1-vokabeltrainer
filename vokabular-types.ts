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

export type Artikel = 'der' | 'die' | 'das' | 'der/die' | 'der/das' | 'die/das';

export type Hilfsverb = 'haben' | 'sein';

export interface KasusElement {
  text: string;
  kasus: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv' | 'verb' | 'none';
}

export interface Konjugation {
  ich?: string;
  du?: string;
  er?: string;
  wir?: string;
  ihr?: string;
  sie?: string;
}

export interface Imperativ {
  du?: string;
  ihr?: string;
  Sie?: string;
}

// Basis-Interface für alle Wörter
export interface BaseWord {
  id: string;
  german: string;
  english: string;
  example_de?: KasusElement[];
  example_en?: string;
  cloze_parts?: string[];
  cloze_answers?: string[];
}

// Spezifische Interfaces für verschiedene Wortarten
export interface Nomen extends BaseWord {
  wortart: 'Nomen';
  artikel: Artikel;
  plural: string | null;
}

export interface Verb extends BaseWord {
  wortart: 'Verb';
  trennbar: boolean;
  hilfsverb_perfekt?: Hilfsverb;
  partizip_ii?: string;
  konjugation_praesens?: Konjugation;
  imperativ?: Imperativ;
}

export interface Adjektiv extends BaseWord {
  wortart: 'Adjektiv';
}

export interface Adverb extends BaseWord {
  wortart: 'Adverb';
}

export interface Präposition extends BaseWord {
  wortart: 'Präposition';
}

export interface Pronomen extends BaseWord {
  wortart: 'Pronomen';
}

export interface Konjunktion extends BaseWord {
  wortart: 'Konjunktion';
}

export interface Interjektion extends BaseWord {
  wortart: 'Interjektion';
}

// Union Type für alle Worttypen
export type Word = 
  | Nomen 
  | Verb 
  | Adjektiv 
  | Adverb 
  | Präposition 
  | Pronomen 
  | Konjunktion 
  | Interjektion;

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
  return word.wortart === 'Nomen';
}

export function isVerb(word: Word): word is Verb {
  return word.wortart === 'Verb';
}

export function isAdjektiv(word: Word): word is Adjektiv {
  return word.wortart === 'Adjektiv';
}

// Helper function für Type-sichere Vokabular-Erstellung
export function createVokabular<T extends VokabularStruktur>(vokabular: T): T {
  return vokabular;
}