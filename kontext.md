# A2 Vokabular Reorganisation - Arbeitsanleitung

## 📋 Projektziel

Reorganisation von **1.443 A2-Vokabeln** aus einer Excel-Datei in strukturierte TypeScript-Dateien für einen Deutsch-Lerntrainer.

### Ausgangslage
- **Excel-Datei:** `A2Wortliste.xlsx`
  - Sheet 1: "Blatt 1 - A2-a-z" → 1.206 Wörter
  - Sheet 2: "Blatt 1 - a2-Wortgruppen 2" → 237 Wörter
  - **Gesamt:** 1.443 Wörter
- **Problem:** 391 verschiedene Themen (viel zu granular!)
- **Lösung:** Konsolidierung in 15 Hauptkategorien

## 🎯 Zielstruktur

### 15 Hauptkategorien mit geschätzten Wortanzahlen:
1. **Alltag, Wohnen** (~170 Wörter)
2. **Essen, Trinken** (~140 Wörter)
3. **Kommunikation, Medien** (~120 Wörter)
4. **Verkehr, Reisen** (~130 Wörter)
5. **Zeit, Ort** (~110 Wörter)
6. **Arbeit, Bildung** (~100 Wörter)
7. **Körper, Gesundheit** (~80 Wörter)
8. **Sport, Freizeit** (~70 Wörter)
9. **Kleidung, Aussehen** (~60 Wörter)
10. **Soziales, Gefühle** (~90 Wörter)
11. **Geld, Einkaufen** (~70 Wörter)
12. **Eigenschaften, Zustände** (~100 Wörter)
13. **Natur, Wetter** (~60 Wörter)
14. **Allgemeine Konzepte** (~106 Wörter)
15. **Wortgruppen** (237 Wörter - separates Sheet)

### Wichtige Regeln:
- **Mindestens 10-12 Wörter** pro Unterkategorie
- **Keine Bindestriche** in Kategoriennamen (Kommas verwenden)
- **Jedes Wort** muss in Excel als "verwendet" markiert werden

## 📊 Excel-Struktur

### Spalten in "Blatt 1 - A2-a-z":
1. **Wort** - Das deutsche Wort
2. **Artikel** - der/die/das (bei Nomen)
3. **Plural** - Pluralform
4. **Wortart** - Nomen, Verb, Adjektiv, etc.
5. **Englisch** - Englische Übersetzung
6. **Beispielsatz Deutsch**
7. **Beispielsatz Englisch**
8. **Thema** - Original-Themenzuordnung
9. **Verwendet** - FALSE/TRUE (KRITISCH!)
10. **Modul** - (optional)
11. **Anmerkungen** - Für Tracking-Notizen

## 🔄 Arbeitsablauf

### Schritt 1: Wörter sammeln
```javascript
// Für jede Hauptkategorie:
// 1. Relevante Original-Themen identifizieren
// 2. Alle zugehörigen Wörter aus Excel sammeln
// 3. Nach Wortart und Thema gruppieren
```

### Schritt 2: Unterkategorien bilden
- Thematisch sinnvolle Gruppen mit 10-15 Wörtern
- Ausgewogene Mischung von Wortarten
- Lernbare Einheiten

### Schritt 3: TypeScript-Datei erstellen
```typescript
// vokabular_alltag_wohnen.ts
export const vokabularAlltagWohnen: VocabularyStructure = createVocabulary({
    "Alltag, Wohnen": {
        "Räume und Gebäude": [...],
        "Möbel": [...],
        // etc.
    }
});
```

### Schritt 4: Excel-Tracking
**KRITISCH:** Für JEDES verwendete Wort:
1. Notiere die Excel-Zeilennummer
2. Setze "Verwendet" von FALSE auf TRUE
3. Füge Notiz in "Anmerkungen": "Kategorie: Alltag,Wohnen/Räume"

## 📝 Tracking-Format

### Dokumentation während der Arbeit:
```
=== UNTERKATEGORIE: "Räume und Gebäude" ===
Verwendete Wörter (15):
- Zeile 234: "Haus" (das, Häuser) → Alltag,Wohnen/Räume ✓
- Zeile 567: "Wohnung" (die, Wohnungen) → Alltag,Wohnen/Räume ✓
- Zeile 890: "Zimmer" (das, Zimmer) → Alltag,Wohnen/Räume ✓
[...]
Status: 15/170 Wörter der Kategorie verwendet
```

## 🚧 Aktueller Stand

### Begonnen: "Alltag, Wohnen"
- **Gefundene Wörter:** 181
- **Geplante Unterkategorien:** 15
- **Status:** In Bearbeitung

### Geplante Struktur für "Alltag, Wohnen" (181 Wörter)

1. **Räume und Gebäude** (17 Wörter) ✓ FERTIG
2. **Möbel** (~14 Wörter) - Tisch, Stuhl, Bett, Schrank, Sofa...
3. **Haushaltsgegenstände** (~15 Wörter) - Geschirr, Teller, Tasse...
4. **Gebäudeteile** (~12 Wörter) - Tür, Fenster, Wand, Boden, Treppe...
5. **Haushaltsgeräte** (~12 Wörter) - Staubsauger, Waschmaschine...
6. **Putzen und Reinigung** (~11 Wörter) - putzen, waschen, sauber...
7. **Hygiene** (~10 Wörter) - duschen, baden, Seife, Handtuch...
8. **Positionen im Haus** (~15 Wörter) - oben, unten, drinnen, draußen...
9. **Haushaltstätigkeiten** (~14 Wörter) - aufräumen, kochen, abwaschen...
10. **Wohnen allgemein** (~13 Wörter) - wohnen, mieten, umziehen, Nachbar...
11. **Alltagsroutine** (~11 Wörter) - aufstehen, schlafen, frühstücken...
12. **Ordnung und Organisation** (~10 Wörter) - ordnen, sortieren, Ordnung...
13. **Komfort und Atmosphäre** (~11 Wörter) - gemütlich, bequem, hell, warm...
14. **Küchenausstattung** (~13 Wörter) - Topf, Pfanne, Messer, Gabel...
15. **Verschiedenes Haushalt** (~13 Wörter) - Schlüssel, Müll, Post...
**Zugeordnete Wörter mit Excel-Zeilen:**
- ✓ Zeile 453: "Haus" (das, Häuser) = house
- ✓ Zeile 1165: "Wohnung" (die, Wohnungen) = apartment
- ✓ Zeile 1191: "Zimmer" (das, Zimmer) = room
- ✓ Zeile 573: "Küche" (die, Küchen) = kitchen
- ✓ Zeile 95: "Bad" (das, Bäder) = bathroom
- ✓ Zeile 859: "Schlafzimmer" (das, Schlafzimmer) = bedroom
- ✓ Zeile 1166: "Wohnzimmer" (das, Wohnzimmer) = living room
- ✓ Zeile 531: "Keller" (der, Keller) = cellar
- ✓ Zeile 101: "Balkon" (der, Balkone) = balcony
- ✓ Zeile 374: "Garage" (die, Garagen) = garage
- ✓ Zeile 187: "Büro" (das, Büros) = office
- ✓ Zeile 946: "Stock" (der, Stockwerke) = floor
- ✓ Zeile 281: "Erdgeschoss" (das, Erdgeschosse) = ground floor
- ✓ Zeile 255: "Eingang" (der, Eingänge) = entrance
- ✓ Zeile 70: "Ausgang" (der, Ausgänge) = exit
- ✓ Zeile 999: "Toilette" (die, Toiletten) = toilet
- ✓ Zeile 794: "Raum" (der, Räume) = room/space

**Status:** 17/181 Wörter verwendet

### Themen-Mapping für "Alltag, Wohnen":
Folgende Original-Themen gehören dazu:
- Wohnen, Haushalt, Möbel, Bad, Zimmer, Gebäude
- Reinigung, Hygiene, Einrichtung, Ordnung
- Ort, Position, Richtung (teilweise)
- Geschirr, Besteck, Behälter
- Und weitere verwandte Themen...

## ⚠️ Wichtige Hinweise

### 1. Excel-Synchronisation
- **NIEMALS** ein Wort verwenden ohne Excel-Markierung
- Bei Unsicherheit: Zeilennummer dokumentieren
- "Verwendet" Spalte ist der Master-Tracker

### 2. Wortformat im Code
```typescript
{
    id: createWordId("alltag-raeume-001"),
    wordType: 'noun',
    german: "Haus",
    article: "das",
    plural: "Häuser",
    english: "house",
    exampleGerman: [...], // IMMER Original aus Excel!
    exampleEnglish: "...",
    clozeParts: [...],
    clozeAnswers: [...]
} as Noun
```

### 3. Namenskonventionen
- Dateinamen: `vokabular_[kategorie].ts` (Unterstriche!)
- Kategoriennamen: "Alltag, Wohnen" (Kommas!)
- IDs: "kategorie-unterkategorie-001" (Bindestriche!)

### 4. Bestätigte Formatregeln
- **Beispielsätze:** IMMER die Original-Sätze aus Excel verwenden
- **Leerzeichen:** Als separate Objekte `{ text: " ", case: "none" }`
- **Case-Markierung:** Grammatikalisch korrekt (z.B. Dativ nach Präpositionen)
- **Alle Wörter haben Beispielsätze** (geprüft - keine fehlen)

## 🎯 Nächste Schritte

1. **Implementiere "Alltag, Wohnen"** komplett
   - [x] Erste Unterkategorie "Räume und Gebäude" (17 Wörter)
   - [ ] Möbel (~14 Wörter)
   - [ ] Haushaltsgegenstände (~15 Wörter)
   - [ ] Weitere 12 Unterkategorien
   - [ ] Excel-Tracking durchführen

2. **Validierung**
   - [ ] TypeScript kompiliert
   - [ ] Alle Wörter haben Beispielsätze
   - [ ] Keine Duplikate

3. **Fortfahren mit nächster Kategorie**
   - Als nächstes: "Essen, Trinken" (~140 Wörter)

## 📋 Verschobene Wörter (müssen in andere Hauptkategorien)

Folgende Wörter wurden bei "Räume und Gebäude" gefunden, gehören aber in andere Hauptkategorien:

### → Verkehr, Reisen
- Zeile 225: "Doppelzimmer" (Hotel-Kontext)
- Zeile 269: "Einzelzimmer" (Hotel-Kontext)
- Zeile 808: "Reisebüro"
- Zeile 1045: "Unterkunft"
- Zeile 863: "Schloss" (Sehenswürdigkeit)

### → Geld, Einkaufen
- Zeile 404: "Geschäft"
- Zeile 529: "Kaufhaus"
- Zeile 586: "Laden"

### → Sport, Freizeit
- Zeile 440: "Halle" (Sporthalle)
- Zeile 889: "Schwimmbad"

### → Körper, Gesundheit
- Zeile 565: "Krankenhaus"

### → Gebäudeteile (neue Unterkategorie in Alltag, Wohnen)
- Zeile 64: "Aufzug"
- Zeile 319: "Fenster"
- Zeile 1016: "Treppe"

### → Wohnen allgemein (neue Unterkategorie in Alltag, Wohnen)
- Zeile 655: "Miete"
- Zeile 1037: "Umzug"
- Zeile 1070: "Vermieter"
- Zeile 1071: "Vermieterin"

**Wichtig:** Diese Wörter NICHT vergessen! Sie müssen in den entsprechenden Kategorien untergebracht werden.

## 📞 Bei Fragen oder Problemen

- Prüfe die Original-Projektdokumentation: `vocabulary-creation-guide.md`
- Achte auf TypeScript-Typen in `src/core/types/vocabulary.ts`
- Bei Excel-Problemen: Zeilennummern sind ab Zeile 4 (Index 3)

---

**Letzte Aktualisierung:** Start der Reorganisation
**Nächster Meilenstein:** Erste Kategorie "Alltag, Wohnen" fertigstellen