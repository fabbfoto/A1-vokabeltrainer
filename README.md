# A1 Vokabeltrainer TypeScript

Ein moderner, TypeScript-basierter Vokabeltrainer für A1-Deutsch mit erweiterten Features und optimierter Architektur.

## 🚀 Features

- **Vollständige TypeScript-Integration** mit strenger Typisierung
- **Modulare Architektur** mit klarer Trennung von Concerns
- **Performance-Optimierungen** mit Lazy Loading und Caching
- **Erweiterte Error-Behandlung** mit zentralem Logging
- **Responsive UI** mit Tailwind CSS
- **Firebase-Integration** für Synchronisation und Authentifizierung
- **Test-System** mit verschiedenen Lernmodi
- **Progress-Tracking** mit detaillierten Statistiken

## 🛠️ Technologie-Stack

- **TypeScript** - Vollständige Typisierung
- **Vite** - Moderne Build-Tool
- **Tailwind CSS** - Utility-First CSS Framework
- **Firebase** - Backend-as-a-Service
- **ESLint + Prettier** - Code-Qualität und Formatierung
- **Vitest** - Unit Testing

## 📦 Installation

```bash
# Dependencies installieren
pnpm install

# Entwicklungsserver starten
pnpm dev

# Production Build
pnpm build

# Code-Qualität prüfen
pnpm lint
pnpm type-check

# Tests ausführen
pnpm test
```

## 📚 Dokumentation

### 🏗️ Architecture Decision Records (ADRs)
- [ADR-0001: TypeScript-Migration](./docs/adr/0001-typescript-migration.md) - Migration von JavaScript zu TypeScript
- [ADR-0002: Ordner-Restrukturierung](./docs/adr/0002-folder-restructuring.md) - Umstellung auf src/-basiertes Layout
- [ADR-0003: Testing-Strategie](./docs/adr/0003-testing-strategy.md) - Vitest-basierte Testing-Strategie
- [ADR-0004: Path-Aliases](./docs/adr/0004-path-aliases.md) - Semantische Import-Pfade

### 📖 Entwickler-Guides
- [Entwickler-Guide](./docs/guides/developer-guide.md) - Umfassender Guide für Entwickler
- [Testing-Guide](./docs/guides/testing-guide.md) - Testing-Dokumentation und Best Practices
- [Migration-Guide](./docs/guides/migration-guide.md) - Migration von der alten Struktur

### 📋 Weitere Dokumentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architektur-Übersicht
- [TEST-PLAN.md](./TEST-PLAN.md) - Test-Strategie
- [FIREBASE-SETUP.md](./FIREBASE-SETUP.md) - Firebase-Konfiguration
- [TYPESCRIPT-MIGRATION-COMPLETE.md](./TYPESCRIPT-MIGRATION-COMPLETE.md) - TypeScript-Migration
- [TYPESCRIPT-TYPIZATION-IMPROVEMENTS.md](./TYPESCRIPT-TYPIZATION-IMPROVEMENTS.md) - TypeScript-Verbesserungen

## 🏗️ Projektstruktur

```
A1-vokabeltrainer-typescript/
├── src/                       # Hauptquellcode
│   ├── core/                  # Kern-Funktionalitäten
│   │   ├── auth/              # Firebase Authentifizierung
│   │   ├── services/          # Business Logic Services
│   │   ├── types/             # TypeScript Typdefinitionen
│   │   ├── utils/             # Utility-Funktionen
│   │   ├── events/            # Event-System
│   │   └── infrastructure/    # Infrastruktur-Services
│   ├── ui/                    # UI-Komponenten
│   │   ├── components/        # Wiederverwendbare UI-Komponenten
│   │   └── views/             # View-spezifische UI-Komponenten
│   └── utils/                 # Projekt-spezifische Utils
├── packages/                  # Zusätzliche Pakete
└── netlify/                   # Netlify-spezifische Konfiguration
```

## 🔧 Neue Verbesserungen

### 1. Performance-Optimierungen
- **Lazy Loading** für Vokabeln
- **Debounced Updates** für UI-Performance
- **Memory Management** mit LRU-Cache
- **Batch Processing** für UI-Updates

### 2. Error Handling
- **Zentrale Error-Behandlung** mit verschiedenen Schweregraden
- **Performance-Monitoring** für langsame Operationen
- **Automatische Recovery-Strategien**
- **Strukturiertes Logging**

### 3. Code-Qualität
- **ESLint-Konfiguration** für konsistente Code-Standards
- **Prettier-Formatierung** für einheitliche Darstellung
- **TypeScript-Optimierungen** mit strengeren Regeln
- **Modulare Architektur** für bessere Wartbarkeit

### 4. Entwicklererfahrung
- **Erweiterte Scripts** für verschiedene Aufgaben
- **Bundle-Analyzer** für Performance-Optimierung
- **Test-Setup** mit Vitest
- **Hot-Reload** für schnelle Entwicklung

## 🎯 Lernmodi

### Multiple Choice
- Auswahl aus mehreren Antworten
- Sofortiges Feedback
- Beispielsätze mit Kasus-Farben

### Spelling Mode
- Texteingabe für deutsche Wörter
- Umlaut-Button-Integration
- Plural-Übungen

### Cloze Mode
- Lückentext-Übungen
- Kontext-basierte Aufgaben
- Grammatik-Fokus

### Sentence Translation
- Satzübersetzungen
- Wort-für-Wort-Eingabe
- Strukturierte Antworten

## 📊 Progress-Tracking

- **Persönliche Statistiken** pro Lernmodus
- **Fehler-Tracking** mit Wiederholungslisten
- **Test-Ergebnisse** mit detaillierten Auswertungen
- **Firebase-Synchronisation** für Geräte-übergreifende Nutzung

## 🔐 Authentifizierung

- **Google Sign-In** Integration
- **Firebase Auth** für sichere Authentifizierung
- **Automatische Synchronisation** der Lernfortschritte
- **Offline-Funktionalität** mit lokaler Speicherung

## 🧪 Testing

```bash
# Unit Tests ausführen
pnpm test

# Tests mit UI
pnpm test:ui

# Coverage-Report
pnpm test:coverage
```

## 📈 Performance-Monitoring

Das Projekt enthält integrierte Performance-Monitoring-Tools:

- **Automatische Performance-Warnungen** bei langsamen Operationen
- **Bundle-Analyzer** für Build-Optimierung
- **Memory-Management** für große Datensätze
- **Lazy Loading** für bessere Ladezeiten

## 🐛 Debugging

### Error-Handler verwenden
```typescript
import { errorHandler } from '@utils/error-handler';

// Fehler loggen
errorHandler.log('Benutzerdefinierte Nachricht', ErrorSeverity.MEDIUM);

// Performance messen
errorHandler.measurePerformance('operation-name', () => {
  // Teure Operation
});
```

### Logs exportieren
```typescript
// Alle Logs abrufen
const logs = errorHandler.getLogs();

// Logs exportieren
const jsonLogs = errorHandler.exportLogs();
```

## 🚀 Deployment

### Netlify
Das Projekt ist für Netlify optimiert:

```bash
# Build für Production
pnpm build

# Lokaler Preview
pnpm preview
```

### Environment Variables
```env
# Firebase-Konfiguration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-domain
VITE_FIREBASE_PROJECT_ID=your-project-id

# Google Cloud Text-to-Speech
GOOGLE_CLIENT_EMAIL=your-service-account-email
GOOGLE_PRIVATE_KEY=your-private-key
GOOGLE_PROJECT_ID=your-project-id
```

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

### Code-Standards
- Verwende TypeScript für alle neuen Dateien
- Folge den ESLint-Regeln
- Schreibe Tests für neue Features
- Dokumentiere komplexe Funktionen

## 📝 Changelog

### Version 2.0.0
- Vollständige TypeScript-Migration
- Performance-Optimierungen
- Erweiterte Error-Behandlung
- Verbesserte Code-Qualität
- Neue UI-Helper-Funktionen

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) Datei für Details.

## 🙏 Danksagungen

- **Natalie** für die ursprüngliche Konzeption
- **Firebase** für die Backend-Infrastruktur
- **Tailwind CSS** für das Styling-Framework
- **Vite** für das moderne Build-System
