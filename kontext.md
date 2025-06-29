# Kontext: Themen-Trainer - Projektdokumentation

## 📋 Projektübersicht

Der **Themen-Trainer** ist eine moderne, webbasierte Vokabel-Lernapplikation für Deutsch als Fremdsprache (Goethe A1 Niveau). Die Anwendung verwendet eine **3-Ebenen-Navigation** (Hauptthemen → Unterthemen → Lernmodi) und bietet sowohl Übungs- als auch Test-Funktionalitäten.

## 🏗️ Architektur & Dateistruktur

### Hauptdateien
```
├── trainer.ts          # Kernlogik, State-Management, Koordination
├── dom.ts             # Zentrale DOM-Element-Referenzen  
├── vokabular.js       # Vokabeldaten (verschachtelte Struktur)
├── /ui/               # UI-Module (aufgeteilt aus ui.js)
│   ├── index.ts       # Re-export aller UI-Module
│   ├── navigation.ts  # Themen-Navigation
│   ├── statistics.ts  # Fortschritts-Anzeigen
│   ├── test-modal.ts  # Test-Auswahl Modal
│   ├── feedback.ts    # Nachrichten & UI-Reset
│   └── umlaut-buttons.ts # Umlaut-Eingabe
└── /shared/
    ├── types/
    │   └── index.ts   # TypeScript Type-Definitionen
    ├── utils/
    │   └── helfer.ts  # Utility-Funktionen
    └── ui-modes.js    # Lernmodus-spezifische UI-Logik
```

### Architektur-Prinzipien
- **trainer.ts**: Orchestriert den Anwendungszustand und ruft UI-Funktionen auf
- **UI-Module**: Reine DOM-Manipulation und Darstellungslogik
- **Modulare Trennung**: Klare Separation of Concerns
- **Callback-System**: UI kommuniziert über Callbacks mit trainer.ts

## 🎯 Funktionale Struktur

### 3-Ebenen-Navigation
1. **Hauptthemen** (z.B. "Person", "Umwelt", "Essen und Trinken")
2. **Unterthemen** (z.B. "Familie", "Aussehen", "Beruf")
3. **Lernmodi** (4 verschiedene Übungstypen)

### Lernmodi
1. **mc-de-en** (Bedeutung): Multiple Choice - Deutsche Wörter → Englische Bedeutung
2. **type-de-adj** (Schreibweise): Rechtschreibung mit Artikel-Erkennung
3. **cloze-adj-de** (Lückentext): Lückentexte mit Hinweisen
4. **sentence-translation-en-de** (Satzübersetzung): English → Deutsch

### Test-System
- **Hauptthema-Test**: Alle Unterthemen eines Hauptthemas (max. 30 Aufgaben)
- **Globaler Test**: Zufällige Aufgaben aus allen Themen (36 Aufgaben)
- **Erweiterte Test-Schlüssel**: Separate Speicherung für verschiedene Test-Typen

## 🎨 Design-System

### Deutschland-Farben-Schema
- **Schwarz/Grau** (0-33%): Wenig Fortschritt - `color-black-sr`
- **Rot** (34-66%): Mittlerer Fortschritt - `color-red-sr`  
- **Gold** (67-100%): Hoher Fortschritt - `color-gold-sr`

### UI-Komponenten
- **Fortschrittsbalken**: Konsistente Deutschland-Farben überall
- **Toast-Nachrichten**: Grün (Erfolg), Blau (Info), Rot (Fehler)
- **Button-Typen**: 
  - Themen-Buttons mit Fortschrittsbalken
  - Hauptthema-Test: Orange-rot Gradient
  - Globaler Test: Dunkelgrau
- **Responsive Design**: Grid-Layout für verschiedene Bildschirmgrößen

## 💾 State-Management & Persistenz

### State-Objekt (trainer.ts)
```typescript
interface TrainerState {
    // Navigation
    currentMainTopic: string | null;
    currentSubTopic: string | null;
    previousMainTopic: string | null;
    previousSubTopic: string | null;
    
    // Vokabeln & Training
    currentVocabularySet: Word[];
    shuffledVocabForMode: Word[];
    currentWordData: Word | null;
    currentMode: LearningModes | null;
    
    // Test-System
    isTestModeActive: boolean;
    testType: 'mainTopic' | 'global' | null;
    testKey: string | null;
    
    // Fortschritt
    correctInRound: number;
    attemptedInRound: number;
    globalProgress: ProgressData;
    masteredWordsByMode: { [mode: string]: Set<string> };
    wordsToRepeatByMode: { [mode: string]: Set<string> };
    
    // UI-Hilfsmittel
    activeTextInput: HTMLInputElement | null;
}
```

### LocalStorage-Persistenz
- **`goetheA1Progress`**: Lernfortschritt pro Thema/Modus
- **`goetheA1LastTestScores`**: Test-Ergebnisse mit Zeitstempel

## 🚀 TypeScript Migration Status (Stand: 29.06.2025)

### ✅ Bereits konvertiert
- TypeScript Setup komplett (tsconfig.json)
- Type-Definitionen erstellt (shared/types/index.ts)
- trainer.js → trainer.ts
- dom.js → dom.ts
- shared/utils/helfer.js → helfer.ts
- ui.js aufgeteilt in 5 TypeScript Module
- **NEU: Vite 4.5.14 erfolgreich eingerichtet** ✅
- **NEU: Alle .js Import-Extensions entfernt** ✅
- **NEU: splitSentence Funktion zu helfer.ts hinzugefügt** ✅

### 🚧 In Arbeit
- **AKTUELLES PROBLEM: Trainer startet nicht - keine Themen werden angezeigt**
- UI-Initialisierung debuggen
- Module-Loading überprüfen

### ❌ Noch zu erledigen
- Testing Setup (Jest/Vitest)
- Error Handling System
- State Management (Zustand/Redux)
- API Layer für Firebase
- Monitoring & Analytics

## 🌟 Besondere Features

### Umlaut-Unterstützung
- Virtuelle Umlaut-Buttons (ä, ö, ü, ß)
- Text-Insertion an Cursor-Position
- Shift-Support für Großbuchstaben

### Audio-Integration
- Text-to-Speech für deutsche Wörter und Sätze
- Speaker-Icons bei relevanten Aufgaben
- Dynamische Audio-Button-Erstellung

### Intelligente Wiederholung
- Falsch beantwortete Wörter werden gesammelt
- Separate Wiederholungs-Sessions pro Lernmodus
- Error-Counter auf Wiederholungs-Buttons

## 🔧 Aktueller Status (29.06.2025)

### Was wir heute erreicht haben
1. **Vite erfolgreich eingerichtet** ✅
   - Vite 4.5.14 läuft auf Port 5173
   - Hot Module Replacement funktioniert
   - TypeScript wird on-the-fly kompiliert

2. **Import-Probleme gelöst** ✅
   - Alle .js Extensions aus Imports entfernt
   - splitSentence Funktion zu helfer.ts hinzugefügt
   - Module Resolution funktioniert

3. **Development Setup** ✅
   - npm run dev startet Vite
   - Keine Build-Fehler mehr
   - Firebase-Warnungen sind harmlos

### Aktuelles Problem 🚨
**Der Trainer startet, aber zeigt keine Themen an:**
- Seite lädt mit "Themen" Überschrift
- Footer wird angezeigt
- Aber: Keine Themen-Buttons sichtbar
- Vermutung: UI-Initialisierung oder Module-Loading Problem

### Nächste Schritte zur Lösung
1. Browser-Konsole auf Fehler prüfen
2. Debuggen ob trainer.ts überhaupt ausgeführt wird
3. DOMContentLoaded Event überprüfen
4. Module-Loading im Network-Tab checken

### Unser Ziel 🎯
- Vokabeltrainer soll vollständig funktionieren
- Alle Themen und Navigation sichtbar
- TypeScript-Migration abschließen
- Moderne Development-Experience mit Vite

## 🔧 Technische Details

### Test-Navigation (Zurück-Button Fix)
```typescript
// In navigation.ts - backToSubtopicsButton Event-Listener
if (state.isTestModeActive) {
    state.isTestModeActive = false;
    
    if (state.testType === 'global') {
        displayMainTopics(...);
    } else if (state.testType === 'mainTopic' && state.previousMainTopic) {
        displaySubTopics(..., state.previousMainTopic, ...);
    }
}
```

### Benutzerinteraktion Flow
1. **Hauptthemen-Übersicht** → Thema auswählen
2. **Unterthemen-Übersicht** → Unterthema auswählen ODER Hauptthema-Test
3. **Lernmodus-Auswahl** → Modus wählen und üben
4. **Test-Modi** → Modal öffnen → Modus wählen → Test starten

## 📅 Nächste Schritte

### Priorität 1 - JETZT (Debug-Phase)
1. **Trainer zum Laufen bringen**
   - Console-Fehler analysieren
   - Module-Loading debuggen
   - UI-Initialisierung fixen

### Priorität 2 (Nach dem Fix)
1. **Funktionalität testen**
   - Alle Lernmodi durchgehen
   - Navigation überprüfen
   - LocalStorage Persistenz testen

### Priorität 3 (Diese Woche)
1. **TypeScript Migration abschließen**
   - Restliche .js Dateien konvertieren
   - Type-Safety überall gewährleisten
2. **Build-Optimierung**
   - Production Build testen
   - Bundle-Size optimieren

### Langfristig (Nächster Monat)
1. **Testing einführen**
2. **Error Handling verbessern**
3. **State Management modernisieren**
4. **CI/CD Pipeline aufsetzen**

## 📚 Für Entwickler

**Wichtige Befehle:**
```bash
# Development Server starten
npm run dev

# TypeScript kompilieren
npx tsc

# Production Build
npm run build

# Projekt-Struktur anzeigen
ls -la
```

**Debug-Tipps:**
- Browser-Konsole (F12) für Fehler checken
- Network Tab für 404 Fehler
- Vite zeigt Fehler direkt im Browser an
- Source Maps ermöglichen TypeScript-Debugging

**WICHTIG:** Der Trainer ist fast fertig migriert! Nur noch das Startup-Problem lösen, dann läuft alles mit moderner TypeScript/Vite Entwicklungsumgebung. 🚀