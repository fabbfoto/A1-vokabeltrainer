# ADR-0004: Path-Aliases für saubere Imports

## Status
Accepted

## Context
Das Projekt hatte lange, schwer lesbare relative Import-Pfade:
```typescript
import { AuthService } from '../../../services/auth-service';
import { ErrorHandler } from '../../utils/error-handler';
```

Dies führte zu:
- Schwer lesbarem Code
- Problemen beim Refactoring
- Inkonsistenten Import-Pfaden
- Schwieriger Navigation

## Decision
Wir implementieren Path-Aliases in der `tsconfig.json` für saubere, semantische Imports:

### Konfigurierte Aliases:
```json
{
  "paths": {
    "@core/*": ["./src/core/*"],
    "@services/*": ["./src/services/*"],
    "@ui/*": ["./src/ui/*"],
    "@ui/views/*": ["./src/ui/views/*"],
    "@ui/components/*": ["./src/ui/components/*"],
    "@utils/*": ["./src/utils/*"],
    "@infrastructure/*": ["./src/infrastructure/*"]
  }
}
```

### Import-Beispiele:
```typescript
// Vorher
import { AuthService } from '../../../services/auth-service';

// Nachher
import { AuthService } from '@services/auth-service';
```

## Consequences

### Positive
- **Lesbarkeit**: Sofort erkennbar, woher Imports kommen
- **Refactoring-sicher**: Ordner können verschoben werden
- **Konsistenz**: Einheitliche Import-Patterns
- **IDE-Support**: Bessere Autocomplete und Navigation
- **Wartbarkeit**: Einfachere Code-Pflege

### Negative
- **Setup-Aufwand**: Konfiguration in tsconfig.json und vite.config.ts
- **Lernkurve**: Team muss neue Import-Patterns lernen
- **Tooling**: Alle Tools müssen Path-Aliases unterstützen

## Implementation

### TypeScript-Konfiguration:
- `tsconfig.json`: Path-Aliases definiert
- `vite.config.ts`: Vitest-Konfiguration mit Aliases
- `vitest.config.ts`: Test-Konfiguration mit Aliases

### Migration:
- Alle relativen Imports zu Alias-Imports konvertiert
- ESLint-Regel gegen `shared/`-Imports hinzugefügt
- Dokumentation der verfügbaren Aliases erstellt

### Tooling-Integration:
- Vite Build-System unterstützt Aliases
- Vitest Test-Runner unterstützt Aliases
- ESLint versteht Path-Aliases
- IDE-Integration (VS Code, WebStorm) funktioniert 