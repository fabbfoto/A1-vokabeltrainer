# ADR-0001: TypeScript-Migration

## Status
Accepted

## Context
Das Projekt war ursprünglich in JavaScript geschrieben und benötigte eine bessere Typsicherheit, bessere IDE-Unterstützung und eine modernere Entwicklungsumgebung.

## Decision
Wir migrieren das gesamte Projekt von JavaScript zu TypeScript mit folgenden Entscheidungen:

- **Vollständige Migration**: Alle `.js` Dateien werden zu `.ts` konvertiert
- **Strikte TypeScript-Konfiguration**: `strict: true` in `tsconfig.json`
- **Path-Aliases**: Verwendung von `@core/*`, `@services/*`, `@ui/*` etc.
- **ESLint Integration**: TypeScript-spezifische Linting-Regeln
- **Vite Build-System**: Moderne Build-Toolchain mit TypeScript-Support

## Consequences

### Positive
- **Typsicherheit**: Compile-time Fehlererkennung
- **Bessere IDE-Unterstützung**: IntelliSense, Refactoring-Tools
- **Dokumentation**: Types dienen als lebende Dokumentation
- **Wartbarkeit**: Einfachere Refaktorierung und Code-Änderungen

### Negative
- **Lernkurve**: Team muss TypeScript lernen
- **Build-Zeit**: Zusätzliche Compile-Zeit
- **Bundle-Größe**: Minimale Erhöhung durch Type-Definitionen

## Implementation
- Alle JavaScript-Dateien zu TypeScript konvertiert
- TypeScript-Konfiguration mit strikten Regeln
- ESLint mit TypeScript-Plugin konfiguriert
- Path-Aliases in `tsconfig.json` definiert
- Build-Pipeline auf Vite umgestellt 