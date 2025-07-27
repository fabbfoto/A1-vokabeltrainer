# A1 Vokabeltrainer TypeScript

Ein moderner, performanter Vokabeltrainer für A1-Deutsch mit TypeScript, Vite und Supabase.

## 🚀 Features

### Core Features
- **Vollständige TypeScript-Migration** - Keine JavaScript-Dateien mehr
- **Moderne Architektur** - Saubere Trennung von Core, Services, UI und Utils
- **Performance-Optimierung** - Code-Splitting, Lazy Loading, Memory Management
- **Supabase Integration** - Cloud-Synchronisation und Authentifizierung
- **Responsive Design** - Tailwind CSS mit custom Farbpalette

### Learning Features
- **Multiple Lernmodi** - Lernen, Testen, Korrektur
- **Intelligente Fehleranalyse** - Fehlerzähler und Wiederholungslogik
- **Progress-Tracking** - Lokal und Cloud-synchronisiert
- **Statistiken** - Detaillierte Lernfortschritte
- **Vokabular-Management** - Strukturierte Kategorien und Unterkategorien

### Technical Features
- **Bundle-Optimierung** - 378.70 kB (57.56 kB gzipped)
- **Code-Splitting** - 8 optimierte Chunks
- **Lazy Loading** - UI-Komponenten werden bei Bedarf geladen
- **Memory Management** - LRU-Cache für Vokabular und Wörter
- **Performance Monitoring** - Echtzeit-Performance-Überwachung

## 🛠️ Technologie-Stack

- **Frontend**: TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (Auth, Database, Real-time)
- **Build**: Vite mit Rollup
- **Testing**: Vitest mit JSDOM
- **Deployment**: Netlify

## 📦 Installation

```bash
# Repository klonen
git clone <repository-url>
cd A1-vokabeltrainer-typescript

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build erstellen
npm run build

# Tests ausführen
npm run test
```

## 🏗️ Projektstruktur

```
src/
├── core/                 # Core Types und Events
│   ├── types/           # TypeScript-Definitionen
│   └── events/          # Event-Handler
├── services/            # Business Logic
│   ├── mode-manager.ts  # Lernmodus-Management
│   ├── supabase.ts      # Supabase Integration
│   └── error-counter-manager.ts
├── ui/                  # User Interface
│   ├── views/           # Haupt-Views
│   ├── components/      # Wiederverwendbare Komponenten
│   └── lazy-loader.ts   # Lazy Loading
├── utils/               # Utility Functions
│   ├── helfer.ts        # Helper Functions
│   ├── memory-manager.ts # Memory Management
│   └── performance-monitor.ts
└── tests/               # Test Suite
    ├── unit/            # Unit Tests
    └── integration/     # Integration Tests
```

## 🚀 Performance-Optimierungen

### Bundle-Optimierung
- **Code-Splitting**: 8 optimierte Chunks
- **Vendor-Chunk**: Externe Dependencies getrennt
- **Tree-Shaking**: Unused Code entfernt
- **Minification**: ESBuild für bessere Komprimierung

### Lazy Loading
- **UI-Komponenten**: Navigation, Statistics, Modals
- **Component Cache**: Wiederverwendung geladener Komponenten
- **Preloading**: Kritische Komponenten vorab geladen

### Memory Management
- **LRU-Cache**: Least Recently Used Eviction
- **Word-Caching**: Häufig verwendete Wörter gecacht
- **Vocabulary-Caching**: Themen-spezifische Arrays gecacht
- **Memory Monitoring**: Echtzeit-Überwachung

### Performance Monitoring
- **Timing-Functions**: Start/End Timer für Operationen
- **Component Load Monitoring**: UI-Komponenten Performance
- **API Call Monitoring**: Supabase-Operationen
- **Memory Usage Tracking**: Speicherverbrauch überwacht

## 🧪 Testing

```bash
# Alle Tests ausführen
npm run test

# Unit Tests
npm run test:unit

# Integration Tests
npm run test:integration

# Performance Tests
npm run test:performance
```

### Test Coverage
- **Unit Tests**: Core Functions, Services, Utils
- **Integration Tests**: Performance Features, Memory Management
- **Component Tests**: UI-Komponenten mit JSDOM

## 📊 Bundle-Analyse

```
dist/
├── main-Bnbe7EWS.js       378.70 kB (57.56 kB gzipped)
├── services-BjW-ta8W.js   132.50 kB (36.44 kB gzipped)
├── ui-components-DA7aoPWa.js 27.80 kB (6.31 kB gzipped)
├── ui-core-DboiKe2D.js    22.84 kB (6.39 kB gzipped)
├── utils-CJsFtR23.js      12.10 kB (4.49 kB gzipped)
├── vendor-UpLyytQT.js     1.74 kB (0.91 kB gzipped)
└── core-Ckz2BUhX.js       1.58 kB (0.77 kB gzipped)
```

## 🔧 Konfiguration

### Vite Config
- **Code-Splitting**: Manual Chunks für optimale Aufteilung
- **Path Aliases**: @, @core, @ui, @utils
- **Build Optimierung**: ESBuild, Sourcemaps deaktiviert
- **External Modules**: fsevents ausgeschlossen

### TypeScript Config
- **Strict Mode**: Vollständige Type-Safety
- **No JavaScript**: Nur TypeScript erlaubt
- **Path Mapping**: Alias-Support
- **Modern Target**: ES2020

## 🚀 Deployment

### Netlify
- **Automatic Deploy**: Git-basiert
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**: Supabase-Konfiguration

### Build Process
1. **TypeScript Check**: `tsc --noEmit`
2. **Linting**: ESLint mit TypeScript-Regeln
3. **Build**: Vite mit Rollup
4. **Optimization**: Code-Splitting und Minification

## 📈 Performance-Metriken

### Ladezeiten
- **Initial Load**: < 2s
- **Navigation**: < 100ms
- **Component Load**: < 50ms
- **Memory Usage**: < 50MB

### Cache-Performance
- **Hit Rate**: > 90%
- **Cache Size**: 1000 Einträge
- **Eviction**: LRU-Strategie

## 🔍 Monitoring

### Performance Monitor
- **Real-time Metrics**: Ladezeiten, Memory, API-Calls
- **Threshold Monitoring**: Performance-Grenzwerte
- **Optimization Recommendations**: Automatische Empfehlungen
- **Performance Reports**: Detaillierte Analysen

### Error Tracking
- **Error Counter**: Lernmodus-spezifisch
- **Error Analysis**: Intelligente Fehleranalyse
- **Progress Tracking**: Lokal und Cloud-synchronisiert

## 🤝 Contributing

1. **Fork** das Repository
2. **Feature Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **Commit** Änderungen (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** erstellen

## 📝 Changelog

### v2.0.0 - TypeScript Migration
- ✅ Vollständige TypeScript-Migration
- ✅ Performance-Optimierungen
- ✅ Code-Splitting und Lazy Loading
- ✅ Memory Management
- ✅ Performance Monitoring
- ✅ Comprehensive Testing Suite

### v1.0.0 - Initial Release
- ✅ Basis-Funktionalität
- ✅ Supabase Integration
- ✅ Responsive Design

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 🙏 Danksagungen

- **Supabase** für Backend-Services
- **Vite** für das Build-System
- **Tailwind CSS** für das Styling
- **Vitest** für das Testing-Framework 