# Path-Aliases Verwendung

## Verfügbare Aliases

Die folgenden Path-Aliases sind in der `tsconfig.json` konfiguriert:

```json
{
  "paths": {
    "@core/*": ["./src/core/*"],
    "@services/*": ["./src/services/*"],
    "@ui/*": ["./src/ui/*"],
    "@utils/*": ["./src/utils/*"],
    "@infrastructure/*": ["./src/infrastructure/*"]
  }
}
```

## Verwendungsbeispiele

### Vorher (ohne Aliases)
```typescript
import { AuthService } from '../services/auth-service';
import { ErrorHandler } from '../utils/error-handler';
import { TrainerState } from '../core/types/trainer';
```

### Nachher (mit Aliases)
```typescript
import { AuthService } from '@services/auth-service';
import { ErrorHandler } from '@utils/error-handler';
import { TrainerState } from '@core/types/trainer';
```

## Vorteile

- **Sauberere Imports**: Keine relativen Pfade mehr
- **Bessere Wartbarkeit**: Einfacheres Verschieben von Dateien
- **Konsistente Struktur**: Klare Trennung nach Funktionsbereichen
- **IDE-Support**: Bessere Autocomplete-Funktionen

## ESLint-Regel

Die ESLint-Konfiguration enthält eine Regel, die `shared/` Imports verbietet:

```json
{
  "no-restricted-imports": ["error", {
    "patterns": ["**/shared/**"]
  }]
}
```

Dies stellt sicher, dass nur die neue `src/` Struktur verwendet wird.

## Migration

Um bestehende Imports zu migrieren:

1. Ersetze `../shared/` durch `@core/`
2. Ersetze `../services/` durch `@services/`
3. Ersetze `../ui/` durch `@ui/`
4. Ersetze `../utils/` durch `@utils/`
5. Ersetze `../infrastructure/` durch `@infrastructure/` 