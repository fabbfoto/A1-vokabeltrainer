# Kontext-Dokumentation: A1-Vokabeltrainer

## 1. Projektziel

Eine erweiterbare Vokabeltrainer-Plattform für Deutsch als Fremdsprache (DaF) auf dem Goethe A1-Niveau. Die App bietet zwei Trainer-Anwendungen aus einer gemeinsamen Code-Basis: einen `Basis-Trainer` und einen `Themen-Trainer`. A1-VOKABELTRAINER/
│
├── .gitignore
├── kontext.md
├── netlify.toml        # Enthält den Build-Befehl für Netlify
├── package.json
├── sw.js               # Service Worker für PWA
│
├── packages/
│   ├── trainer-basis/
│   │   ├── index.html
│   │   ├── trainer.js
│   │   └── vokabular.js
│   │
│   └── trainer-themen/
│       ├── index.html
│       ├── manifest.json   # Einzige Manifest-Datei des Projekts
│       ├── trainer.js
│       └── vokabular.js
│
└── shared/
├── helfer.js
├── style.css
├── ui-modes.js
└── assets/
└── (z.B. icon-192.png, icon-512.png)

## 4. Build- & Deployment-Prozess

- **Hosting:** Netlify
- **Production Branch:** `v2.0-entwicklung` (Änderungen auf diesem Branch werden automatisch live geschaltet).
- **Build-Konfiguration:** Gesteuert durch `netlify.toml`.
  - **Build Command:** Erstellt einen `dist`-Ordner, kopiert die `trainer-basis`-Dateien und die `shared`-Dateien hinein. Kopiert `manifest.json` aus dem `trainer-themen`-Ordner.
  - **Publish Directory:** `dist`
- **Test-Veröffentlichungen (Deploy Previews):** Sollen für Pull Requests auf den `v2.0-entwicklung`-Branch aktiviert werden, um Änderungen vor dem Livegang zu prüfen.

## 5. Wichtige Konzepte & Logik

- **UI-Steuerung:** Die Sichtbarkeit von App-Bereichen wird durch die zentrale Funktion `setUIMode(modeId)` in `shared/helfer.js` gesteuert. Diese Funktion manipuliert `display`-Eigenschaften von Containern, die die Klasse `.ui-mode` und eine eindeutige ID besitzen.
- **DOM-Handling:** DOM-Referenzen werden einmalig nach dem `DOMContentLoaded`-Event geholt.
- **Umlaut-Eingabe:** Erfolgt über dedizierte HTML-Buttons, deren Logik in `initUmlautButtons()` in `shared/helfer.js` gekapselt ist.


## 2. Technologie-Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **Architektur:** Modulare Code-Basis mit ES6-Modulen (`import`/`export`).
- **Styling:** TailwindCSS (via CDN) und eine zentrale, geteilte `style.css`.
- **Besonderheiten:** Progressive Web App (PWA) mit Service Worker (`sw.js`).

## 3. Architektur & Dateistruktur

Das Projekt nutzt einen Monorepo-Ansatz. Die wichtigsten Pfade sind: