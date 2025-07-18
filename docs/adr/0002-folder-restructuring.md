# ADR-0002: Ordner-Restrukturierung zu src/-basiertem Layout

## Status
Accepted

## Context
Das Projekt hatte eine verstreute Ordnerstruktur mit `shared/`, `ui/` und `utils/` im Root-Verzeichnis. Dies führte zu:
- Inkonsistenten Import-Pfaden
- Schwieriger Navigation im Codebase
- Unklarer Trennung zwischen Core-Logik und UI-Komponenten
- Problemen bei der Skalierung

## Decision
Wir restrukturieren das Projekt zu einer `src/`-basierten Architektur:

```
src/
├── core/                      # Kern-Funktionalitäten
│   ├── auth/                  # Firebase Authentifizierung
│   ├── services/              # Business Logic Services
│   ├── types/                 # TypeScript Typdefinitionen
│   ├── utils/                 # Utility-Funktionen
│   ├── events/                # Event-System
│   └── infrastructure/        # Infrastruktur-Services
├── ui/                        # UI-Komponenten
│   ├── components/            # Wiederverwendbare UI-Komponenten
│   └── views/                 # View-spezifische UI-Komponenten
└── utils/                     # Projekt-spezifische Utils
```

### Migration-Schritte:
1. **UI-Ordner**: `ui/` → `src/ui/views/`
2. **Utils-Ordner**: `utils/` → `src/utils/` (Zusammenführung)
3. **Shared-Ordner**: `shared/` → `src/core/` (bereits migriert)
4. **Path-Aliases**: Erweiterte Aliases für bessere Imports

## Consequences

### Positive
- **Klare Hierarchie**: Alle Source-Code unter `src/`
- **Bessere Organisation**: Trennung zwischen Core und UI
- **Konsistente Imports**: Einheitliche Import-Pfade
- **Skalierbarkeit**: Einfache Erweiterung der Struktur
- **Path-Aliases**: Saubere Import-Statements

### Negative
- **Breaking Changes**: Alle Import-Pfade mussten aktualisiert werden
- **Migration-Aufwand**: Einmaliger Aufwand für die Umstellung
- **Lernkurve**: Neue Ordnerstruktur muss verstanden werden

## Implementation
- Alle Dateien in neue Struktur verschoben
- Import-Pfade in allen Dateien aktualisiert
- Path-Aliases in `tsconfig.json` erweitert
- ESLint-Regel gegen `shared/`-Imports hinzugefügt
- README.md mit neuer Struktur aktualisiert 