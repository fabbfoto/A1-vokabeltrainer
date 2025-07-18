# ADR-0003: Testing-Strategie mit Vitest

## Status
Accepted

## Context
Das Projekt benötigte eine umfassende Testing-Strategie für:
- Code-Qualität und Zuverlässigkeit
- Regression-Tests bei Refaktorierungen
- Dokumentation der Funktionalität
- CI/CD-Integration

## Decision
Wir implementieren eine mehrschichtige Testing-Strategie mit Vitest:

### Test-Pyramide:
```
    ┌─────────────┐
    │ Integration │ ← Wenige, wichtige End-to-End Tests
    ├─────────────┤
    │   Unit      │ ← Viele, schnelle Komponenten-Tests
    └─────────────┘
```

### Test-Typen:
1. **Unit Tests**: Einzelne Funktionen und Services
2. **Integration Tests**: Service-Interaktionen und Auth-Flow
3. **Component Tests**: UI-Komponenten (zukünftig)

### Technologie-Stack:
- **Vitest**: Schneller Test-Runner mit Vite-Integration
- **jsdom**: Browser-Environment für DOM-Tests
- **Mocking**: Umfassende Mocks für externe Dependencies
- **Coverage**: Code-Coverage mit v8-Provider

## Consequences

### Positive
- **Schnelle Tests**: Vitest ist deutlich schneller als Jest
- **Vite-Integration**: Nahtlose Integration mit Build-System
- **TypeScript-Support**: Native TypeScript-Unterstützung
- **Coverage-Reports**: Detaillierte Coverage-Analyse
- **Watch-Modus**: Entwicklerfreundlicher Watch-Modus

### Negative
- **Setup-Aufwand**: Initiale Konfiguration und Mock-Setup
- **Lernkurve**: Team muss Testing-Patterns lernen
- **Wartungsaufwand**: Tests müssen bei Code-Änderungen aktualisiert werden

## Implementation

### Test-Struktur:
```
tests/
├── setup.ts                    # Globales Test-Setup
├── unit/
│   ├── services/              # Service Unit Tests
│   └── utils/                 # Utils Unit Tests
└── integration/
    └── auth/                  # Auth-Flow Integration Tests
```

### Konfiguration:
- `vitest.config.ts`: Test-Konfiguration mit Path-Aliases
- `tests/setup.ts`: Globale Mocks und Setup
- Package.json Scripts für verschiedene Test-Typen

### Mocking-Strategie:
- Firebase-Services vollständig gemockt
- Browser-APIs (localStorage, speechSynthesis) gemockt
- Externe Dependencies isoliert getestet 