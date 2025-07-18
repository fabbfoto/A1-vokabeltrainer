# Entwickler-Guide: A1 Vokabeltrainer

## 🚀 Schnellstart

### Voraussetzungen
- Node.js >= 18.0.0
- npm oder pnpm
- VS Code (empfohlen) mit TypeScript-Erweiterung

### Setup
```bash
# Repository klonen
git clone <repository-url>
cd A1-vokabeltrainer-typescript

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## 📁 Projektstruktur

```
A1-vokabeltrainer-typescript/
├── src/                        # Hauptquellcode
│   ├── core/                   # Kern-Funktionalitäten
│   │   ├── auth/               # Firebase Authentifizierung
│   │   ├── services/           # Business Logic Services
│   │   ├── types/              # TypeScript Typdefinitionen
│   │   ├── utils/              # Utility-Funktionen
│   │   ├── events/             # Event-System
│   │   └── infrastructure/     # Infrastruktur-Services
│   ├── ui/                     # UI-Komponenten
│   │   ├── components/         # Wiederverwendbare UI-Komponenten
│   │   └── views/              # View-spezifische UI-Komponenten
│   └── utils/                  # Projekt-spezifische Utils
├── tests/                      # Test-Dateien
│   ├── unit/                   # Unit Tests
│   ├── integration/            # Integration Tests
│   └── setup.ts                # Test-Setup
├── docs/                       # Dokumentation
│   ├── adr/                    # Architecture Decision Records
│   └── guides/                 # Entwickler-Guides
└── netlify/                    # Deployment-Konfiguration
```

## 🔧 Entwicklung

### Path-Aliases verwenden

Statt relativer Imports verwenden wir semantische Path-Aliases:

```typescript
// ❌ Nicht empfohlen
import { AuthService } from '../../../services/auth-service';

// ✅ Empfohlen
import { AuthService } from '@services/auth-service';
```

### Verfügbare Path-Aliases

| Alias | Pfad | Beschreibung |
|-------|------|--------------|
| `@core/*` | `src/core/*` | Kern-Funktionalitäten |
| `@services/*` | `src/services/*` | Business Logic Services |
| `@ui/*` | `src/ui/*` | UI-Komponenten |
| `@ui/views/*` | `src/ui/views/*` | View-spezifische UI |
| `@ui/components/*` | `src/ui/components/*` | Wiederverwendbare UI |
| `@utils/*` | `src/utils/*` | Projekt-spezifische Utils |
| `@infrastructure/*` | `src/infrastructure/*` | Infrastruktur-Services |

### Neue Dateien erstellen

#### Service erstellen
```typescript
// src/services/my-service.ts
import type { MyServiceConfig } from '@core/types/my-service';

export class MyService {
  constructor(private config: MyServiceConfig) {}

  async doSomething(): Promise<void> {
    // Implementation
  }
}
```

#### UI-Komponente erstellen
```typescript
// src/ui/components/my-component.ts
import type { DOMElements } from '@core/types/ui';

export class MyComponent {
  constructor(private elements: DOMElements) {}

  render(): void {
    // UI-Logik
  }
}
```

#### View erstellen
```typescript
// src/ui/views/my-view.ts
import { MyComponent } from '@ui/components/my-component';
import type { TrainerState } from '@core/types/trainer';

export class MyView {
  constructor(private state: TrainerState) {}

  initialize(): void {
    // View-Initialisierung
  }
}
```

## 🧪 Testing

### Test-Typen

#### Unit Tests
```typescript
// tests/unit/services/my-service.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { MyService } from '@services/my-service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    service = new MyService({});
  });

  it('should do something', async () => {
    await service.doSomething();
    // Assertions
  });
});
```

#### Integration Tests
```typescript
// tests/integration/my-feature.test.ts
import { describe, it, expect } from 'vitest';
import { initializeAuth } from '@infrastructure/auth';

describe('My Feature Integration', () => {
  it('should work end-to-end', async () => {
    const services = initializeAuth('test', {});
    // Integration test logic
  });
});
```

### Test-Scripts

```bash
# Alle Tests
npm run test

# Spezifische Test-Typen
npm run test:unit
npm run test:integration
npm run test:services
npm run test:utils
npm run test:auth

# Mit Coverage
npm run test:coverage

# Watch-Modus
npm run test:watch

# Test-UI
npm run test:ui
```

## 🔍 Code-Qualität

### ESLint-Regeln

Das Projekt verwendet strikte ESLint-Regeln:

- **TypeScript-spezifisch**: `@typescript-eslint/*`
- **Import-Restriktionen**: Keine `shared/`-Imports
- **Code-Style**: Konsistente Formatierung

### Prettier

Automatische Code-Formatierung:
```bash
npm run format
```

### Type-Checking

TypeScript-Kompilierung prüfen:
```bash
npm run type-check
```

## 🚀 Build & Deployment

### Development
```bash
npm run dev          # Entwicklungsserver
npm run dev:safe     # Sichere Entwicklung
npm run dev:clean    # Clean Development
```

### Production
```bash
npm run build        # Production Build
npm run preview      # Build Preview
npm run build:analyze # Bundle-Analyse
```

### Deployment
Das Projekt ist für Netlify konfiguriert:
- Automatisches Deployment bei Git-Push
- Netlify Functions für Backend-Logik
- CDN für statische Assets

## 📚 Best Practices

### Code-Organisation

1. **Single Responsibility**: Jede Datei hat eine klare Verantwortlichkeit
2. **Dependency Injection**: Services werden injiziert, nicht direkt instanziiert
3. **Type Safety**: Strikte TypeScript-Nutzung
4. **Error Handling**: Umfassende Fehlerbehandlung

### Naming Conventions

- **Dateien**: kebab-case (`auth-service.ts`)
- **Klassen**: PascalCase (`AuthService`)
- **Funktionen**: camelCase (`getUserData`)
- **Konstanten**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Types**: PascalCase (`UserData`)

### Import-Reihenfolge

```typescript
// 1. Externe Dependencies
import { getAuth } from 'firebase/auth';

// 2. Path-Alias Imports
import { AuthService } from '@services/auth-service';
import type { User } from '@core/types/auth';

// 3. Relative Imports (nur wenn nötig)
import { helper } from './helper';
```

### Error Handling

```typescript
// Services
try {
  await this.performAction();
} catch (error) {
  console.error('Action failed:', error);
  throw new Error('User-friendly message');
}

// UI-Komponenten
if (!this.elements.container) {
  console.warn('Container element not found');
  return;
}
```

## 🔧 Debugging

### Development Tools

1. **Browser DevTools**: Für UI-Debugging
2. **TypeScript**: Compile-time Fehler
3. **ESLint**: Code-Qualität
4. **Vitest**: Test-Debugging

### Logging

```typescript
// Entwicklung
console.log('Debug info:', data);

// Production
console.error('Error occurred:', error);
console.warn('Warning:', warning);
```

### Common Issues

#### Path-Alias nicht erkannt
- TypeScript-Server neu starten
- `tsconfig.json` überprüfen
- IDE-Cache löschen

#### Tests schlagen fehl
- `npm install` ausführen
- Mock-Konfiguration prüfen
- Test-Setup überprüfen

#### Build-Fehler
- TypeScript-Fehler beheben
- Import-Pfade prüfen
- Dependencies aktualisieren

## 📖 Weiterführende Dokumentation

- [Architecture Decision Records](./adr/)
- [Testing Guide](./testing-guide.md)
- [API Documentation](./api-docs.md)
- [Deployment Guide](./deployment-guide.md) 