# Kontext-Dokumentation: A1-Vokabeltrainer

## 1. Projektziel

Eine erweiterbare Vokabeltrainer-Plattform für Deutsch als Fremdsprache (DaF) auf dem Goethe A1-Niveau. Die App besteht aus zwei eigenständigen Trainer-Anwendungen, die sich eine gemeinsame Code-Basis für Helferfunktionen und Styling teilen:

-   **`Basis-Trainer` (`packages/trainer-basis/`):** Fokussiert auf grundlegenden Wortschatz, unterteilt in Wortgruppen (z.B. Farben, Zahlen, Monate). Bietet verschiedene Lernmodi (Bedeutung, Schreibweise, Lückentext, Satzübersetzung) und einen Gesamttestmodus. Implementiert eine farbliche Kasus-Hervorhebung in Beispielsätzen.
-   **`Themen-Trainer` (`packages/trainer-themen/`):** Strukturiert Vokabeln thematisch (z.B. Person, Reisen) mit Unterthemen. Bietet ebenfalls verschiedene Lernmodi und einen Testmodus. Nutzt eine detailliertere Vokabularstruktur mit grammatischen Informationen (Wortart, Konjugation etc.).

**NEU: Schwarz-Rot-Gold Fortschrittssystem** - Alle Fortschrittsbalken verwenden die deutschen Nationalfarben zur Motivation und thematischen Passung.

Ziel ist es, eine robuste und benutzerfreundliche Lernumgebung zu schaffen, die leicht mit neuen Vokabeln und potenziell weiteren Funktionen erweitert werden kann.

## 2. Architektur & Dateistruktur

Das Projekt nutzt einen Monorepo-ähnlichen Ansatz mit geteilten Ressourcen. Die wichtigsten Pfade sind:

```
A1-VOKABELTRAINER/
│
├── .gitignore
├── kontext.md
├── netlify.toml # Enthält den Build-Befehl für Netlify
├── package.json
├── sw.js # Service Worker für PWA
│
├── packages/
│   ├── trainer-basis/
│   │   ├── index.html
│   │   ├── trainer.js
│   │   └── vokabular.js
│   │
│   └── trainer-themen/
│       ├── index.html
│       ├── manifest.json # Einzige Manifest-Datei des Projekts
│       ├── trainer.js
│       ├── dom.js # Zentralisiert DOM-Referenzen
│       ├── ui.js # UI-Manipulation und Darstellung
│       ├── vokabular.js # Hauptvokabular-Import
│       └── vokabular_*.js # Aufgeteilte Themenbereiche
│
├── shared/
│   ├── helfer.js # Allgemeine Hilfsfunktionen + Farbschema-System
│   ├── style.css # Geteilte CSS-Stile + Schwarz-Rot-Gold Farben
│   ├── ui-modes.js # Logik für die einzelnen Lernmodi-Setups
│   └── assets/
│       └── (z.B. icon-192.png, icon-512.png)
│
└── netlify/
    └── functions/
        └── getGoogleVoice.js # Serverless Function für Sprachausgabe
```

## 3. Technologie-Stack

-   **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
-   **Architektur:** Modulare Code-Basis mit ES6-Modulen (`import`/`export`).
-   **Styling:** TailwindCSS (via CDN in den jeweiligen `index.html`-Dateien) und eine zentrale, geteilte `shared/style.css` für projektspezifische Stile.
-   **Farbschema:** Schwarz-Rot-Gold Fortschrittssystem mit dynamischer Farbzuweisung basierend auf Lernfortschritt.
-   **Sprachausgabe:** Nutzt Google Cloud Text-to-Speech über eine Netlify Serverless Function (`/.netlify/functions/getGoogleVoice`).
-   **Besonderheiten:** Progressive Web App (PWA) mit Service Worker (`sw.js`) für Offline-Fähigkeiten (hauptsächlich für den `trainer-themen`).

## 4. Build- & Deployment-Prozess

- **Hosting:** Netlify
- **Production Branch:** `v2.0-entwicklung` (Änderungen auf diesem Branch werden automatisch live geschaltet).
- **Build-Konfiguration:** Gesteuert durch `netlify.toml`.
  - **Build Command:** Abhängig vom Branch. Für den Haupt-Branch (`v2.0-entwicklung`) werden die Dateien aus den `packages/` Ordnern in ein `dist`-Verzeichnis kopiert. Für den speziellen Themen-Trainer-Branch wird eine vereinfachte Struktur verwendet, bei der die Dateien direkt aus dem Root-Verzeichnis veröffentlicht werden (`command = "echo 'No build needed...'", publish = "."`).
  - **Publish Directory:** `dist` für den Haupt-Branch, `.` für den speziellen Themen-Trainer-Branch.
- **Serverless Functions:** Die Sprachausgabe-Funktion (`netlify/functions/getGoogleVoice.js`) wird von Netlify automatisch deployed.
- **Test-Veröffentlichungen (Deploy Previews):** Sollen für Pull Requests auf den `v2.0-entwicklung`-Branch aktiviert werden, um Änderungen vor dem Livegang zu prüfen.

## 5. Wichtige Konzepte & Logik

### 5.1. Allgemeine Konzepte
-   **UI-Steuerung (`setUIMode`):**
    -   Die Sichtbarkeit der Haupt-UI-Bereiche (z.B. Wortgruppen-Auswahl, Trainer-Ansicht) wird durch die zentrale Funktion `setUIMode(modeId)` in `shared/helfer.js` gesteuert.
    -   Diese Funktion manipuliert die `display`-Eigenschaft von HTML-Containern, die die Klasse `.ui-mode` und eine eindeutige ID besitzen (z.B. `id="wortgruppen-selector"`, `id="trainer-main-view"`).
    -   Die Klasse `hidden-view` (`display: none !important;`) wird ebenfalls berücksichtigt und bei Bedarf entfernt.

-   **Schwarz-Rot-Gold Farbschema-System (NEU):**
    -   Zentralisiert in `shared/helfer.js` durch die Funktion `getProgressColorClass(completed, total)`
    -   Automatische Farbzuweisung basierend auf Fortschritt: 0-33% Schwarz, 34-66% Rot, 67-100% Gold
    -   Unterstützt Fallback auf ursprüngliches Blau-System (`color-original`)
    -   CSS-Klassen: `.color-black-sr`, `.color-red-sr`, `.color-gold-sr` mit optionalem Glanz-Effekt für Gold
    -   Motivationsfaktor durch thematische Verbindung zu Deutschland/Deutsch lernen

-   **State Management:**
    -   Jeder Trainer (`trainer-basis/trainer.js`, `trainer-themen/trainer.js`) verwaltet seinen eigenen lokalen `state`-Objekt.
    -   Dieses Objekt enthält den aktuellen Zustand der Anwendung, wie z.B. die ausgewählte Wortgruppe/Thema, das aktuelle Wort, den Lernmodus, Fortschrittsdaten etc.
    -   **Unterschiedlicher Progress-Schlüssel:**
        - Basis-Trainer: `state.globalProgress[wortgruppeName][modus]`
        - Themen-Trainer: `state.globalProgress["MainTopic|SubTopic"][modus]`

-   **DOM-Handling:**
    -   Referenzen zu häufig genutzten DOM-Elementen werden einmalig nach dem `DOMContentLoaded`-Event in einer `initializeDOMReferences()`-Funktion gesammelt und in Variablen gespeichert.
    -   Im Themen-Trainer: Zusätzliche Zentralisierung durch `dom.js`-Modul für bessere Wartbarkeit.

-   **Umlaut-Eingabe:**
    -   Erfolgt über dedizierte HTML-Buttons (`.umlaut-button` oder `.umlaut-btn`).
    -   Die Logik ist in `initUmlautButtons()` (in den jeweiligen `trainer.js`-Dateien) gekapselt und nutzt die `insertTextAtCursor(inputElement, text)`-Funktion aus `shared/helfer.js`.
    -   Unterstützt Großschreibung von Umlauten durch Drücken der Shift-Taste.

-   **Sprachausgabe (`speak`):**
    -   Die Funktion `speak(text, lang)` in `shared/helfer.js` sendet eine Anfrage an die Netlify Serverless Function `/.netlify/functions/getGoogleVoice`.
    -   Diese Funktion gibt Base64-kodierten MP3-Audio-Inhalt zurück, der dann im Browser abgespielt wird.
    -   Lokales Testen der Sprachausgabe erfordert ein Deployment auf Netlify (z.B. Deploy Preview).

-   **Fortschrittsverfolgung:**
    -   Der Lernfortschritt wird im `localStorage` gespeichert (`goetheA1Progress`).
    -   `state.globalProgress` speichert gemasterte Wörter pro Wortgruppe/Thema und Modus.
    -   `state.masteredWordsByMode` und `state.wordsToRepeatByMode` verwalten den Fortschritt und Fehler innerhalb einer aktuellen Lernsitzung.
    -   Die eindeutige `id` jeder Vokabel (`state.currentWordData.id`) wird zur Identifizierung verwendet.

-   **Lernmodi (`shared/ui-modes.js`):**
    -   Jeder Lernmodus (z.B. Multiple Choice, Schreibweise) hat eine eigene `setup...Mode()`-Funktion.
    -   Diese Funktionen sind dafür zuständig, die spezifische UI für den Modus zu initialisieren, Eingabefelder vorzubereiten und Event-Listener für die Antwortverarbeitung zu setzen.
    -   Die Antwortverarbeitung erfolgt über eine zentrale `processAnswer(isCorrect, correctAnswer)`-Funktion im jeweiligen `trainer.js`.

### 5.2. Spezifische Logik `trainer-basis`
-   **Vokabularstruktur (`packages/trainer-basis/vokabular.js`):**
    -   Vokabeln sind in Wortgruppen organisiert.
    -   Das Feld `example_de` ist ein Array von Objekten (`{text: "...", kasus: "..."}`), um die farbliche Kasus-Hervorhebung zu ermöglichen.
    -   Jede Vokabel hat eine eindeutige `id` (Format: "basis-[nummer]").

-   **Kasus-Hervorhebung:**
    -   In `setupMcDeEnMode` (in `shared/ui-modes.js`) werden `<span>`-Elemente für jeden Teil des `example_de`-Arrays erstellt.
    -   Entsprechende CSS-Klassen (`.kasus-nominativ`, `.kasus-verb` etc. aus `shared/style.css`) werden basierend auf der `kasus`-Eigenschaft zugewiesen.

-   **Testmodus:**
    -   Ein Gesamttest kann für verschiedene Lernmodi gestartet werden.
    -   Wählt zufällig Vokabeln aus allen Wortgruppen aus (2 pro Wortgruppe).
    -   Speichert die letzten Testergebnisse im `localStorage` (`goetheA1LastTestScores`).

-   **Fortschrittsberechnung:**
    -   Verwendet `getProgressColorClass(completed, total)` für einheitliche Farbgebung
    -   Alle Statistikbalken (Rundentanzeige, Kategorie-Stats, Wortgruppen-Übersicht) verwenden das Schwarz-Rot-Gold System

### 5.3. Spezifische Logik `trainer-themen`
-   **Modulare Architektur:**
    -   `trainer.js`: Hauptlogik und State-Management
    -   `ui.js`: UI-Manipulation und DOM-Updates
    -   `dom.js`: Zentralisierte DOM-Referenzen
    -   Bessere Trennung von Logik und Darstellung

-   **Vokabularstruktur (`packages/trainer-themen/vokabular_*.js`):**
    -   Vokabeln sind hierarchisch in Haupt- und Unterthemen organisiert.
    -   Aufgeteilt in thematische Dateien (z.B. `vokabular_person.js`, `vokabular_reisen_verkehr.js`)
    -   Enthält detailliertere grammatische Informationen pro Vokabel (z.B. `wortart`, `artikel`, `plural`, `konjugation_praesens`).
    -   `example_de` ist hier aktuell noch ein einfacher String (keine Kasus-Hervorhebung implementiert).
    -   Jede Vokabel hat eine eindeutige `id` (Format: "thema-kategorie-nummer").

-   **Navigation:**
    -   Eine 3-Ebenen-Navigation (Hauptthemen -> Unterthemen -> Trainer).
    -   Gesteuert durch Funktionen wie `displayMainTopics`, `displaySubTopics`, `startTraining` in `ui.js`.
    -   Progress-Schlüssel: `"MainTopic|SubTopic"` Format für localStorage

-   **PWA (`sw.js`, `manifest.json`):**
    -   Der Service Worker (`sw.js`) ist primär für den Themen-Trainer konfiguriert, um Caching und Offline-Fähigkeiten zu ermöglichen.
    -   Das `manifest.json` befindet sich im `trainer-themen`-Ordner und wird im Build-Prozess in das `dist`-Verzeichnis kopiert.

## 6. Farbschema-System (Schwarz-Rot-Gold)

### 6.1. Implementierung
-   **CSS-Klassen (`shared/style.css`):**
    ```css
    .color-black-sr { background-color: #1f2937; } /* 0-33% */
    .color-red-sr { background-color: #dc2626; }   /* 34-66% */
    .color-gold-sr { background-color: #f59e0b; }  /* 67-100% */
    .color-original { background-color: #3b82f6; } /* Fallback */
    ```

-   **JavaScript-Logik (`shared/helfer.js`):**
    ```javascript
    getProgressColorClass(completed, total) // Hauptfunktion
    setColorTheme(themeName)                // Theme-Wechsel
    updateAllProgressBars()                 // Globale Aktualisierung
    ```

### 6.2. Anwendungsbereiche
-   **Alle Fortschrittsbalken:** Wortgruppen, Themen, Unterthemen
-   **Statistik-Anzeigen:** Rundentanzeige, Genauigkeitsbalken
-   **Kategorie-Übersichten:** 4 kleine Balken pro Lernmodus
-   **Test-Resultate:** Testergebnis-Anzeigen

### 6.3. Motivationspsychologie
-   **Schwarz (0-33%):** Anfangsphase, neutral
-   **Rot (34-66%):** Fortschritt erkennbar, motivierend
-   **Gold (67-100%):** Meisterschaft erreicht, belohnend
-   **Thematische Verbindung:** Deutsche Nationalfarben für deutschen Sprachtrainer

## 7. Zukünftige Entwicklungsziele

### 7.1. Priorität 1: Test-Button Verbesserungen
-   **Aktuelle Situation:** Basis-Trainer hat funktionierenden Test-Button, Themen-Trainer Test-Modal existiert aber funktioniert nicht optimal
-   **Ziele:**
    -   Einheitliche Test-Button Implementierung für beide Trainer
    -   Verbesserte Test-Modal Funktionalität im Themen-Trainer
    -   Erweiterte Test-Optionen (pro Thema, gemischte Tests)
    -   Bessere Test-Statistiken und -Auswertungen
    -   Test-Verlauf und Performance-Tracking

### 7.2. Geplante Features (mittelfristig)
-   **Erweiterte Statistiken:** Detaillierte Lernanalysen, Zeittracking
-   **Spaced Repetition:** Intelligente Wiederholungsalgorithmen
-   **Export/Import:** Fortschritt sichern und übertragen
-   **Accessibility:** ARIA-Labels, Keyboard-Navigation, Screenreader-Support
-   **Dark Mode:** Alternative Farbschemata
-   **Mobile Optimierung:** Verbesserte Touch-Interfaces

### 7.3. Technische Verbesserungen
-   **TypeScript Migration:** Bessere Type-Safety
-   **Unit Testing:** Automatisierte Tests für kritische Funktionen
-   **Bundle Optimization:** Performance-Verbesserungen
-   **Offline-First:** Erweiterte PWA-Funktionalitäten

## 8. Aktueller Stand & Hinweise für die Weiterentwicklung

### 8.1. Implementierter Stand (Januar 2025)
-   **Schwarz-Rot-Gold Farbschema:** Vollständig implementiert in beiden Trainern
-   **Modulare Architektur:** Themen-Trainer mit verbesserter Code-Struktur
-   **Kasus-Hervorhebung:** Funktional im Basis-Trainer
-   **Sprachausgabe:** Stabil über Netlify Functions
-   **Fortschrittsverfolgung:** Persistent über localStorage
-   **PWA-Funktionalität:** Grundlegend implementiert

### 8.2. Bekannte Herausforderungen
-   **Continue vs. Claude Workflow:** Continue eignet sich für einfache Copy-Paste Operationen, nicht für komplexe Architektur-Änderungen
-   **Browser-Storage Limitierung:** Artifacts unterstützen keine localStorage APIs
-   **Cross-Trainer Konsistenz:** Unterschiedliche Datenstrukturen zwischen Basis- und Themen-Trainer

### 8.3. Bewährte Entwicklungspraktiken
-   **Schrittweise Implementation:** Kleine, testbare Änderungen
-   **Backup-Strategie:** Git-Commits oder Ordner-Kopien vor größeren Änderungen
-   **Tool-Kombination:** Claude für Architektur, Continue für mechanische Umsetzung
-   **Umfangreiches Testen:** Beide Trainer nach jeder Änderung prüfen

### 8.4. Wichtige Hinweise für zukünftige Arbeiten
-   **Code-Änderungen:** Bei Änderungen, die von diesem Assistenten vorgeschlagen werden, ist es oft sicherer, ganze Dateien zu ersetzen (wenn der vollständige Inhalt bereitgestellt wird) oder sehr präzise Diff-Anweisungen zu befolgen.
-   **Testen:** Nach jeder signifikanten Änderung sollten die Kernfunktionen gründlich getestet werden:
        -   Navigation zwischen Wortgruppen/Themen und den Trainer-Ansichten
        -   Funktionalität aller Lernmodi
        -   Korrekte Fortschrittsanzeige (Balken und Zahlen) mit Schwarz-Rot-Gold Farben
        -   Funktionierende Fehlerwiederholung
        -   Korrekte Audioausgabe (erfordert Test auf Netlify Deploy Preview)
        -   Umlaut-Eingabe (inkl. Shift-Taste für Großbuchstaben)
-   **Git-Workflow:** Regelmäßige, kleine Commits mit aussagekräftigen Nachrichten. Netlify Deploy Previews intensiv nutzen.
-   **Konsistenz:** Verwendung von `state.currentWordData.id` als eindeutiger Bezeichner für Vokabeln beibehalten.
-   **Datenstrukturen:** Änderungen an zentralen Datenstrukturen erfordern sorgfältige Überprüfung aller abhängigen Code-Stellen.
-   **Browser-Konsole:** Bei unerwartetem Verhalten ist die Browser-Konsole (F12) das wichtigste Debugging-Werkzeug.

## 9. Entwicklungs-Workflow Empfehlungen

### 9.1. Für neue Features
1. **Planung mit Claude:** Architektur und vollständige Code-Erstellung
2. **Schrittweise Umsetzung:** Manual Copy-Paste oder präzise Continue-Anweisungen
3. **Umfangreiches Testing:** Beide Trainer in allen Modi testen
4. **Rollback-Plan:** Git oder Backup-Ordner ready

### 9.2. Tool-Einsatz Strategie
-   **Claude:** Komplexe Features, Architektur-Entscheidungen, Code-Reviews
-   **Continue:** Mechanische Copy-Paste Aufgaben, einfache Einzeländerungen
-   **Entwickler:** Koordination, Testing, finale Entscheidungen

### 9.3. Traffic-Optimierung
-   **Claude erstellt:** Komplette, getestete Lösungen in Artifacts
-   **Continue führt aus:** Exakte Copy-Paste Operationen ohne eigene Interpretation
-   **Minimaler Austausch:** Weniger Iterationen durch vollständige Lösungen

---

**Letzte Aktualisierung:** Januar 2025
**Aktueller Fokus:** Test-Button Implementierung und Verbesserung
**Entwicklungsstatus:** Stabil, produktionsreif mit Schwarz-Rot-Gold System