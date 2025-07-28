# Vokabular-Erstellungs-Anleitung für Claude

## Übersicht

Diese Anleitung ermöglicht es Claude, neue Vokabular-Dateien zu erstellen, die exakt dem bestehenden Format entsprechen. Dadurch können neue Trainer-Themen einfach durch Austausch der Vokabular-Dateien erstellt werden.

## 📁 Benötigte Dateien für Claude

### 1. TypeScript-Definitionen (KRITISCH)
- `src/core/types/vocabulary.ts` - Hauptdefinition aller Typen und Interfaces
- `src/core/types/trainer.ts` - Trainer-spezifische Typen und Konstanten

### 2. Beispiel-Vokabular-Dateien
- `vokabular_person.ts` - Komplexe Datei mit allen Worttypen (Nomen, Verben, Adjektive)
- `vokabular_lernen.ts` - Mittlere Komplexität mit vielen Verben und Konjugationen
- `vokabular_Kommunikationsmittel.ts` - Einfachere Struktur mit verschiedenen Worttypen

### 3. Hilfsfunktionen
- `src/utils/helfer.ts` - Hilfsfunktionen für Antwortvergleich und Textverarbeitung

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

## 🎯 Beispiel: Komplette Vokabular-Datei

```typescript
// vokabular_berufe.ts
import type { VocabularyStructure, Word, Noun, Verb, Adjective, WordId } from './src/core/types/vocabulary';
import { createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularBerufe: VocabularyStructure = createVocabulary({
    "Berufe": {
        "Medizinische Berufe": [
            {
                id: createWordId("berufe-medizin-001"),
                wordType: 'noun',
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor",
                exampleGerman: [
                    { text: "Der", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Arzt", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hilft", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dem", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Patienten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The doctor helps the patient.",
                clozeParts: ["Der ", " hilft dem Patienten."],
                clozeAnswers: ["Arzt"]
            } as Noun,
            {
                id: createWordId("berufe-medizin-002"),
                wordType: 'noun',
                german: "Krankenschwester",
                article: "die",
                plural: "Krankenschwestern",
                english: "nurse",
                exampleGerman: [
                    { text: "Die", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Krankenschwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Krankenhaus", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nurse works in the hospital.",
                clozeParts: ["Die ", " arbeitet im Krankenhaus."],
                clozeAnswers: ["Krankenschwester"]
            } as Noun
        ],
        "Lehrende Berufe": [
            {
                id: createWordId("berufe-lehre-001"),
                wordType: 'noun',
                german: "Lehrer",
                article: "der",
                plural: "Lehrer",
                english: "teacher",
                exampleGerman: [
                    { text: "Der", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Lehrer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "erklärt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Grammatik", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher explains the grammar.",
                clozeParts: ["Der ", " erklärt die Grammatik."],
                clozeAnswers: ["Lehrer"]
            } as Noun
        ]
    }
});
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