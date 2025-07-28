# Vokabular-Erstellungs-Anleitung für Claude

## Übersicht

Diese Anleitung ermöglicht es Claude, neue Vokabular-Dateien zu erstellen, die exakt dem bestehenden Format entsprechen. Dadurch können neue Trainer-Themen einfach durch Austausch der Vokabular-Dateien erstellt werden.

## 📁 TypeScript-Definitionen (KRITISCH)

### Core Vocabulary Types
```typescript
// src/core/types/vocabulary.ts - WICHTIGSTE DEFINITIONEN

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

// ========== EXAMPLE SENTENCE INTERFACES ==========
export interface ExampleSentencePart {
  id?: WordId;
  text: string;
  case?: CaseType;
  kasus?: CaseType; // Legacy-Kompatibilität
}

export interface ExampleSentenceData {
  exampleGerman?: ExampleSentencePart[] | string;
  exampleEnglish?: string;
  example_de?: ExampleSentencePart[] | string;
  example_en?: string;
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
  deutsch?: string; // Legacy-Kompatibilität
  beispiel?: string; // Legacy-Kompatibilität
  artikel?: string; // Für Artikel-Training
  exampleGerman?: ExampleSentencePart[];
  exampleEnglish?: string;
  clozeParts?: string[];
  clozeAnswers?: string[];
}

// ========== DISCRIMINATED UNION WORD TYPES ==========
export interface Noun extends BaseWord {
  wordType: 'noun';
  article?: Article; // Optional für Unterrichtsfächer ohne Artikel
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

// ========== UTILITY FUNCTIONS ==========
export function createWordId(id: string): WordId {
  return id as WordId;
}

export function createVocabulary<T extends VocabularyStructure>(vocabulary: T): T {
  return vocabulary;
}
```

### Trainer Constants
```typescript
// src/core/types/trainer.ts - KRITISCHE KONSTANTEN

export const TRAINER_CONSTANTS = {
  // Antwort-Vergleich
  ANSWER_COMPARISON: {
    DEFAULT_CASE_SENSITIVE: false,
    SPELLING_MODE_CASE_SENSITIVE: true,
    CLOZE_MODE_CASE_SENSITIVE: true,
    SENTENCE_MODE_CASE_SENSITIVE: true,
    IGNORE_PUNCTUATION_DEFAULT: false
  },
  
  // Umlaute und Sonderzeichen
  SPECIAL_CHARS: {
    UMLAUTS: {
      'ä': 'ae', 'ö': 'oe', 'ü': 'ue',
      'Ä': 'AE', 'Ö': 'OE', 'Ü': 'UE',
      'ß': 'ss'
    },
    // WICHTIG: ß und ss sind NICHT äquivalent
    SS_BETA_DISTINCT: true
  }
} as const;
```

### Hilfsfunktionen für Antwortvergleich
```typescript
// src/utils/helfer.ts - WICHTIGE FUNKTIONEN

export function vergleicheAntwort(userAnswer: string, correctAnswer: string, { ignorePunctuation = false, caseSensitive = false } = {}): boolean {
  let processedUserAnswer = userAnswer.trim();
  let processedCorrectAnswer = correctAnswer.trim();
  
  // Nur zu Kleinbuchstaben konvertieren, wenn caseSensitive = false
  if (!caseSensitive) {
    processedUserAnswer = processedUserAnswer.toLowerCase();
    processedCorrectAnswer = processedCorrectAnswer.toLowerCase();
  }
  
  // Artikel am Anfang entfernen (der, die, das, ein, eine, einen, einem, einer, eines)
  const artikelRegex = /^(der|die|das|ein|eine|einen|einem|einer|eines)\s+/i;
  processedUserAnswer = processedUserAnswer.replace(artikelRegex, '');
  processedCorrectAnswer = processedCorrectAnswer.replace(artikelRegex, '');
  
  if (ignorePunctuation) {
    const punctuationRegex = /[.,;:!?'"„"»«]/g;
    processedUserAnswer = processedUserAnswer.replace(punctuationRegex, "");
    processedCorrectAnswer = processedCorrectAnswer.replace(punctuationRegex, "");
  }
  
  return processedUserAnswer === processedCorrectAnswer;
}
```

## 🏗️ Struktur einer Vokabular-Datei

### Grundstruktur
```typescript
// vokabular_[thema].ts
import type { VocabularyStructure, Word, Noun, Verb, Adjective, WordId } from './src/core/types/vocabulary';
import { createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabular[Thema]: VocabularyStructure = createVocabulary({
    "Hauptthema": {
        "Unterthema": [
            // Wörter hier...
        ]
    }
});
```

### Dateiname-Konvention
- Format: `vokabular_[thema].ts`
- Beispiel: `vokabular_berufe.ts`, `vokabular_essen.ts`

## 📝 Worttypen und ihre Strukturen

### 1. Nomen (Nouns)
```typescript
{
    id: createWordId("thema-unterthema-001"),
    wordType: 'noun',
    german: "Haus",
    article: "das", // der, die, das
    plural: "Häuser", // oder null wenn kein Plural
    english: "house",
    exampleGerman: [
        { text: "Das", case: "none" },
        { text: " ", case: "none" },
        { text: "Haus", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "ist", case: "verb" },
        { text: " ", case: "none" },
        { text: "groß", case: "none" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "The house is big.",
    clozeParts: ["Das ", " ist groß."],
    clozeAnswers: ["Haus"]
} as Noun
```

### 2. Verben (Verbs)
```typescript
{
    id: createWordId("thema-unterthema-002"),
    wordType: 'verb',
    german: "gehen",
    english: "to go",
    separable: false, // true für trennbare Verben
    auxiliaryVerb: "sein", // haben oder sein
    pastParticiple: "gegangen",
    presentConjugation: { 
        ich: "gehe", 
        du: "gehst", 
        er: "geht", 
        wir: "gehen", 
        ihr: "geht", 
        sie: "gehen" 
    },
    imperative: { 
        du: "Geh!", 
        ihr: "Geht!" 
    },
    exampleGerman: [
        { text: "Ich", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "gehe", case: "verb" },
        { text: " ", case: "none" },
        { text: "zur", case: "none" },
        { text: " ", case: "none" },
        { text: "Schule", case: "dativ" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "I go to school.",
    clozeParts: ["Ich ", " zur Schule."],
    clozeAnswers: ["gehe"]
} as Verb
```

### 3. Adjektive (Adjectives)
```typescript
{
    id: createWordId("thema-unterthema-003"),
    wordType: 'adjective',
    german: "groß",
    english: "big",
    exampleGerman: [
        { text: "Das", case: "none" },
        { text: " ", case: "none" },
        { text: "Haus", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "ist", case: "verb" },
        { text: " ", case: "none" },
        { text: "groß", case: "none" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "The house is big.",
    clozeParts: ["Das Haus ist ", "."],
    clozeAnswers: ["groß"]
} as Adjective
```

## 🔧 Wichtige Regeln und Konventionen

### ID-Namensgebung
- Format: `"thema-unterthema-001"`
- Beispiel: `"berufe-arzt-001"`, `"essen-obst-002"`
- Verwende immer `createWordId()` für IDs

### Beispielsätze (Example Sentences)
- **Struktur**: Array von `ExampleSentencePart` Objekten
- **Case-Typen**: `"nominativ"`, `"akkusativ"`, `"dativ"`, `"genitiv"`, `"verb"`, `"none"`
- **Leerzeichen**: Explizit als separate Objekte mit `{ text: " ", case: "none" }`
- **Satzzeichen**: Als separate Objekte mit `{ text: ".", case: "none" }`

### Cloze-Übungen
- **clozeParts**: Array von Strings, die den Satz in Teile aufteilen
- **clozeAnswers**: Array von Strings mit den korrekten Antworten
- **Beispiel**: 
  - `clozeParts: ["Das ", " ist groß."]`
  - `clozeAnswers: ["Haus"]`

### Artikel-Regeln
- **Bestimmte Artikel**: `"der"`, `"die"`, `"das"`
- **Unbestimmte Artikel**: `"ein"`, `"eine"`, `"einen"`, `"einem"`, `"einer"`, `"eines"`
- **Kein Artikel**: `null` oder weglassen für Unterrichtsfächer

### Plural-Regeln
- **Normaler Plural**: `"Häuser"`, `"Autos"`
- **Kein Plural**: `null` (für Stoffe, Abstrakta)
- **Umlaut-Plural**: `"Väter"`, `"Mütter"`

## 🚨 Kritische Fehler zu vermeiden

### 1. TypeScript-Typen
- Verwende IMMER die definierten Interfaces (`Noun`, `Verb`, `Adjective`)
- Verwende `as Noun`, `as Verb`, `as Adjective` am Ende jedes Objekts
- Verwende `createVocabulary()` für die Hauptstruktur

### 2. Grammatikalische Korrektheit
- Beispielsätze müssen grammatikalisch korrekt sein
- Case-Markierungen müssen stimmen
- Verben müssen korrekt konjugiert werden

### 3. Konsistenz
- Alle Wörter in einer Datei sollten zum gleichen Thema gehören
- Unterthemen sollten logisch gruppiert sein
- ID-Namen sollten konsistent sein

### 4. Vollständigkeit
- Jedes Wort braucht: `id`, `wordType`, `german`, `english`
- Verben brauchen: `separable`, `auxiliaryVerb`, `pastParticiple`, `presentConjugation`, `imperative`
- Nomen brauchen: `article`, `plural`
- Alle Wörter brauchen: `exampleGerman`, `exampleEnglish`, `clozeParts`, `clozeAnswers`

## 📋 Checkliste für neue Vokabular-Dateien

### Vor der Erstellung
- [ ] Thema und Unterthemen definiert
- [ ] Wortliste mit deutschen und englischen Begriffen erstellt
- [ ] Grammatikalische Informationen gesammelt (Artikel, Plural, Konjugationen)

### Während der Erstellung
- [ ] TypeScript-Imports korrekt
- [ ] Alle IDs eindeutig und konsistent
- [ ] Alle Beispielsätze grammatikalisch korrekt
- [ ] Cloze-Übungen sinnvoll und vollständig
- [ ] Verben korrekt konjugiert
- [ ] Nomen mit korrekten Artikeln und Pluralformen

### Nach der Erstellung
- [ ] TypeScript-Kompilierung erfolgreich
- [ ] Alle Typen korrekt (`as Noun`, `as Verb`, etc.)
- [ ] Datei kann in den Trainer importiert werden
- [ ] Wörter werden korrekt angezeigt

## 🎯 Echte Beispiele aus bestehenden Vokabular-Dateien

### Beispiel 1: Nomen aus vokabular_person.ts
```typescript
{
    id: createWordId("person-name-001"),
    wordType: 'noun',
    german: "Name",
    article: "der",
    plural: "Namen",
    english: "name",
    exampleGerman: [
        { text: "Wie", case: "none" },
        { text: " ", case: "none" },
        { text: "ist", case: "verb" },
        { text: " ", case: "none" },
        { text: "dein Name", case: "nominativ" },
        { text: "?", case: "none" }
    ],
    exampleEnglish: "What is your name?",
    clozeParts: ["Wie ist dein ", "?"],
    clozeAnswers: ["Name"]
} as Noun
```

### Beispiel 2: Verb aus vokabular_lernen.ts
```typescript
{
    id: createWordId("lernen-sprachenlernen-005"),
    wordType: 'verb',
    german: "schreiben",
    english: "to write",
    separable: false,
    auxiliaryVerb: "haben",
    pastParticiple: "geschrieben",
    presentConjugation: { 
        ich: "schreibe", 
        du: "schreibst", 
        er: "schreibt", 
        wir: "schreiben", 
        ihr: "schreibt", 
        sie: "schreiben" 
    },
    imperative: { 
        du: "Schreib!", 
        ihr: "Schreibt!" 
    },
    exampleGerman: [
        { text: "Ich", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "schreibe", case: "verb" },
        { text: " ", case: "none" },
        { text: "einen", case: "none" },
        { text: " ", case: "none" },
        { text: "Brief", case: "akkusativ" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "I am writing a letter.",
    clozeParts: ["Ich ", " einen Brief."],
    clozeAnswers: ["schreibe"]
} as Verb
```

### Beispiel 3: Trennbare Verben aus vokabular_person.ts
```typescript
{
    id: createWordId("person-telefon-003"),
    wordType: 'verb',
    german: "anrufen",
    english: "to call (by phone)",
    separable: true,
    auxiliaryVerb: "haben",
    pastParticiple: "angerufen",
    exampleGerman: [
        { text: "Ich", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "rufe", case: "verb" },
        { text: " ", case: "none" },
        { text: "dich", case: "akkusativ" },
        { text: " ", case: "none" },
        { text: "morgen", case: "none" },
        { text: " ", case: "none" },
        { text: "an", case: "verb" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "I will call you tomorrow.",
    clozeParts: ["Ich rufe dich morgen ", "."],
    clozeAnswers: ["an"]
} as Verb
```

### Beispiel 4: Adjektive aus vokabular_person.ts
```typescript
{
    id: createWordId("person-alter-001"),
    wordType: 'adjective',
    german: "alt",
    english: "old",
    exampleGerman: [
        { text: "Wie", case: "none" },
        { text: " ", case: "none" },
        { text: "alt", case: "none" },
        { text: " ", case: "none" },
        { text: "bist", case: "verb" },
        { text: " ", case: "none" },
        { text: "du", case: "nominativ" },
        { text: "?", case: "none" }
    ],
    exampleEnglish: "How old are you?",
    clozeParts: ["Wie ", " bist du?"],
    clozeAnswers: ["alt"]
} as Adjective
```

### Beispiel 5: Nomen ohne Plural aus vokabular_lernen.ts
```typescript
{
    id: createWordId("lernen-schuleunterricht-002"),
    wordType: 'noun',
    german: "Unterricht",
    article: "der",
    plural: null, // oft ohne Plural
    english: "lesson(s) / class",
    exampleGerman: [
        { text: "Wir", case: "nominativ" },
        { text: " ", case: "none" },
        { text: "haben", case: "verb" },
        { text: " ", case: "none" },
        { text: "bis", case: "none" },
        { text: " ", case: "none" },
        { text: "ein", case: "none" },
        { text: " ", case: "none" },
        { text: "Uhr", case: "none" },
        { text: " ", case: "none" },
        { text: "Unterricht", case: "akkusativ" },
        { text: ".", case: "none" }
    ],
    exampleEnglish: "We have lessons until one o'clock.",
    clozeParts: ["Wir haben bis ein Uhr ", "."],
    clozeAnswers: ["Unterricht"]
} as Noun
```

## 🔄 Integration in den Trainer

Nach der Erstellung einer neuen Vokabular-Datei:

1. **Datei in das Projekt kopieren**
2. **In trainer.ts importieren**:
   ```typescript
   import { vokabularBerufe } from './vokabular_berufe';
   ```
3. **Zur Vokabular-Liste hinzufügen**:
   ```typescript
   const vocabularySets = {
     // ... bestehende Sets
     berufe: vokabularBerufe
   };
   ```

## 📚 Weitere Ressourcen

- **Grammatik-Regeln**: Deutsche Grammatik für A1-Niveau
- **Wortschatz**: Thematisch gruppierte Vokabeln
- **Beispielsätze**: Einfache, alltagsnahe Sätze
- **Konjugationen**: Regelmäßige und unregelmäßige Verben

---

**Hinweis**: Diese Anleitung ermöglicht es Claude, neue Vokabular-Dateien zu erstellen, die exakt dem bestehenden Format entsprechen und sofort in den Trainer integriert werden können. 