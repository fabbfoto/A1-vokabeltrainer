# Dokumentation: A1 Vokabeltrainer

## 📚 Übersicht

Diese Dokumentation bietet umfassende Informationen für Entwickler, die am A1 Vokabeltrainer-Projekt arbeiten.

## 🗂️ Dokumentationsstruktur

```
docs/
├── README.md                   # Diese Datei
├── adr/                        # Architecture Decision Records
│   ├── 0001-typescript-migration.md
│   ├── 0002-folder-restructuring.md
│   ├── 0003-testing-strategy.md
│   └── 0004-path-aliases.md
└── guides/                     # Entwickler-Guides
    ├── developer-guide.md      # Haupt-Entwickler-Guide
    ├── testing-guide.md        # Testing-Dokumentation
    └── migration-guide.md      # Migration von alter Struktur
```

## 🏗️ Architecture Decision Records (ADRs)

ADRs dokumentieren wichtige architektonische Entscheidungen und deren Begründungen:

### [ADR-0001: TypeScript-Migration](./adr/0001-typescript-migration.md)
- **Status**: Accepted
- **Beschreibung**: Migration von JavaScript zu TypeScript
- **Auswirkungen**: Typsicherheit, bessere IDE-Unterstützung

### [ADR-0002: Ordner-Restrukturierung](./adr/0002-folder-restructuring.md)
- **Status**: Accepted
- **Beschreibung**: Umstellung auf src/-basiertes Layout
- **Auswirkungen**: Bessere Organisation, konsistente Imports

### [ADR-0003: Testing-Strategie](./adr/0003-testing-strategy.md)
- **Status**: Accepted
- **Beschreibung**: Vitest-basierte Testing-Strategie
- **Auswirkungen**: Schnelle Tests, umfassende Coverage

### [ADR-0004: Path-Aliases](./adr/0004-path-aliases.md)
- **Status**: Accepted
- **Beschreibung**: Semantische Import-Pfade
- **Auswirkungen**: Lesbarer Code, Refactoring-sicher

## 📖 Entwickler-Guides

### [Haupt-Entwickler-Guide](./guides/developer-guide.md)
Der umfassende Guide für alle Entwickler:

- **Schnellstart**: Setup und erste Schritte
- **Projektstruktur**: Detaillierte Erklärung der Ordner
- **Entwicklung**: Best Practices und Guidelines
- **Testing**: Test-Strategie und -Ausführung
- **Build & Deployment**: Production-Ready Setup
- **Debugging**: Troubleshooting und Common Issues

### [Testing-Guide](./guides/testing-guide.md)
Spezifische Dokumentation für Testing:

- **Testing-Philosophie**: Test-Pyramide und -Strategie
- **Unit Tests**: Service- und Utils-Tests
- **Integration Tests**: Service-Interaktionen
- **Mocking-Strategie**: Firebase und Browser-APIs
- **Test-Coverage**: Konfiguration und Ziele
- **Debugging Tests**: Vitest UI und Watch-Modus

### [Migration-Guide](./guides/migration-guide.md)
Hilfe bei der Migration von der alten Struktur:

- **Überblick**: Vorher/Nachher-Vergleich
- **Ordner-Migration**: Schritt-für-Schritt Anleitung
- **Import-Migration**: Path-Aliases verwenden
- **Code-Anpassungen**: Automatische und manuelle Updates
- **Häufige Probleme**: Troubleshooting
- **Rollback-Plan**: Sicherheitsnetz bei Problemen

## 🚀 Schnellstart für neue Entwickler

### 1. Repository klonen
```bash
git clone <repository-url>
cd A1-vokabeltrainer-typescript
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Entwicklungsserver starten
```bash
npm run dev
```

### 4. Tests ausführen
```bash
npm run test
```

## 📋 Wichtige Befehle

### Entwicklung
```bash
npm run dev              # Entwicklungsserver
npm run dev:safe         # Sichere Entwicklung
npm run type-check       # TypeScript-Prüfung
npm run lint             # ESLint-Prüfung
npm run format           # Code-Formatierung
```

### Testing
```bash
npm run test             # Alle Tests
npm run test:unit        # Unit Tests
npm run test:integration # Integration Tests
npm run test:coverage    # Mit Coverage
npm run test:ui          # Vitest UI
```

### Build & Deployment
```bash
npm run build            # Production Build
npm run preview          # Build Preview
npm run build:analyze    # Bundle-Analyse
```

## 🔗 Path-Aliases

Das Projekt verwendet semantische Path-Aliases für saubere Imports:

| Alias | Pfad | Beschreibung |
|-------|------|--------------|
| `@core/*` | `src/core/*` | Kern-Funktionalitäten |
| `@services/*` | `src/services/*` | Business Logic Services |
| `@ui/*` | `src/ui/*` | UI-Komponenten |
| `@ui/views/*` | `src/ui/views/*` | View-spezifische UI |
| `@ui/components/*` | `src/ui/components/*` | Wiederverwendbare UI |
| `@utils/*` | `src/utils/*` | Projekt-spezifische Utils |
| `@infrastructure/*` | `src/infrastructure/*` | Infrastruktur-Services |

### Beispiel
```typescript
// ✅ Empfohlen
import { AuthService } from '@services/auth-service';
import { Navigation } from '@ui/views/navigation';

// ❌ Nicht empfohlen
import { AuthService } from '../../../services/auth-service';
```

## 🧪 Testing-Strategie

### Test-Pyramide
```
    ┌─────────────┐
    │ Integration │ ← Wenige, wichtige End-to-End Tests
    ├─────────────┤
    │   Unit      │ ← Viele, schnelle Komponenten-Tests
    └─────────────┘
```

### Test-Typen
- **Unit Tests**: Einzelne Funktionen und Services
- **Integration Tests**: Service-Interaktionen
- **Component Tests**: UI-Komponenten (zukünftig)

## 📝 Code-Qualität

### ESLint-Regeln
- TypeScript-spezifische Regeln
- Import-Restriktionen (keine `shared/`-Imports)
- Konsistente Code-Formatierung

### Prettier
Automatische Code-Formatierung für konsistenten Stil.

### Type-Checking
Strikte TypeScript-Konfiguration für Typsicherheit.

## 🔧 Entwicklungsumgebung

### Empfohlene Tools
- **VS Code** mit TypeScript-Erweiterung
- **Node.js** >= 18.0.0
- **npm** oder **pnpm**

### VS Code Extensions
- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- Vitest

## 🆘 Support & Hilfe

### Bei Problemen
1. **Dokumentation** durchsuchen
2. **Issues** im Repository prüfen
3. **Team** um Hilfe bitten
4. **Git-History** durchsuchen

### Nützliche Links
- [Projekt-Repository](https://github.com/fabbfoto/A1-vokabeltrainer)
- [Vitest Dokumentation](https://vitest.dev/)
- [TypeScript Handbuch](https://www.typescriptlang.org/docs/)
- [Vite Dokumentation](https://vitejs.dev/)

## 📈 Weiterentwicklung

### Geplante Verbesserungen
- [ ] E2E Tests mit Playwright
- [ ] Performance-Monitoring
- [ ] Accessibility-Tests
- [ ] Internationalisierung (i18n)

### Beitragen
1. Fork des Repositories
2. Feature-Branch erstellen
3. Änderungen implementieren
4. Tests schreiben
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE.md](../LICENSE.md) für Details. 