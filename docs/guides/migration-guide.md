# Migration Guide: Von alter zu neuer Struktur

## 🔄 Überblick der Änderungen

### Vorher (Alte Struktur)
```
A1-vokabeltrainer-typescript/
├── shared/                    # Gemeinsame Module
│   ├── auth/                  # Firebase Authentifizierung
│   ├── services/              # Business Logic Services
│   ├── types/                 # TypeScript Typdefinitionen
│   ├── utils/                 # Utility-Funktionen
│   └── ui/                    # UI-Komponenten
├── ui/                        # UI-Layer
├── utils/                     # Projekt-spezifische Utils
└── ...
```

### Nachher (Neue Struktur)
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
└── ...
```

## 📁 Ordner-Migration

### 1. Shared → Core
```bash
# Alte Imports
import { AuthService } from '../shared/services/auth-service';
import type { User } from '../shared/types/auth';

# Neue Imports
import { AuthService } from '@services/auth-service';
import type { User } from '@core/types/auth';
```

### 2. UI → src/ui/views
```bash
# Alte Imports
import { Navigation } from './ui/navigation';
import { Statistics } from './ui/statistics';

# Neue Imports
import { Navigation } from '@ui/views/navigation';
import { Statistics } from '@ui/views/statistics';
```

### 3. Utils → src/utils
```bash
# Alte Imports
import { testGenerator } from './utils/test-generator';

# Neue Imports
import { testGenerator } from '@utils/test-generator';
```

## 🔗 Import-Migration

### Path-Aliases verwenden

#### Vorher (Relative Imports)
```typescript
// Lange, schwer lesbare Pfade
import { AuthService } from '../../../shared/services/auth-service';
import { ErrorHandler } from '../../utils/error-handler';
import { Navigation } from '../ui/navigation';
```

#### Nachher (Path-Aliases)
```typescript
// Saubere, semantische Imports
import { AuthService } from '@services/auth-service';
import { ErrorHandler } from '@utils/error-handler';
import { Navigation } from '@ui/views/navigation';
```

### Verfügbare Path-Aliases

| Alter Pfad | Neuer Alias | Beschreibung |
|------------|-------------|--------------|
| `shared/services/*` | `@services/*` | Business Logic Services |
| `shared/types/*` | `@core/types/*` | TypeScript Typdefinitionen |
| `shared/utils/*` | `@core/utils/*` | Core Utility-Funktionen |
| `shared/auth/*` | `@core/auth/*` | Firebase Authentifizierung |
| `ui/*` | `@ui/views/*` | View-spezifische UI |
| `utils/*` | `@utils/*` | Projekt-spezifische Utils |

## 🛠️ Code-Anpassungen

### 1. Import-Statements aktualisieren

#### Automatische Migration
```bash
# Alle Dateien durchsuchen und Imports aktualisieren
find src/ -name "*.ts" -exec sed -i '' 's|\.\./\.\./shared/|@core/|g' {} \;
find src/ -name "*.ts" -exec sed -i '' 's|\.\./ui/|@ui/views/|g' {} \;
find src/ -name "*.ts" -exec sed -i '' 's|\.\./utils/|@utils/|g' {} \;
```

#### Manuelle Überprüfung
Nach der automatischen Migration müssen alle Imports manuell überprüft werden:

```typescript
// ❌ Falsch (alte Pfade)
import { AuthService } from '@core/services/auth-service';

// ✅ Richtig (neue Pfade)
import { AuthService } from '@services/auth-service';
```

### 2. TypeScript-Konfiguration

#### tsconfig.json aktualisieren
```json
{
  "compilerOptions": {
    "baseUrl": ".",
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
}
```

### 3. ESLint-Konfiguration

#### .eslintrc.json aktualisieren
```json
{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": ["**/shared/**"]
    }]
  }
}
```

## 🧪 Testing-Migration

### 1. Test-Imports aktualisieren
```typescript
// Vorher
import { AuthService } from '../../../src/services/auth-service';

// Nachher
import { AuthService } from '@services/auth-service';
```

### 2. Test-Konfiguration
```typescript
// vitest.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@core': resolve(__dirname, './src/core'),
      '@services': resolve(__dirname, './src/services'),
      '@ui': resolve(__dirname, './src/ui'),
      '@utils': resolve(__dirname, './src/utils'),
      '@infrastructure': resolve(__dirname, './src/infrastructure')
    }
  }
});
```

## 🚨 Häufige Probleme

### 1. Path-Alias nicht erkannt
```bash
# Problem: TypeScript erkennt Path-Alias nicht
# Lösung: TypeScript-Server neu starten
# VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### 2. Build-Fehler nach Migration
```bash
# Problem: Vite kann Path-Aliases nicht auflösen
# Lösung: vite.config.ts aktualisieren
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@services': resolve(__dirname, './src/services')
    }
  }
});
```

### 3. ESLint-Fehler
```bash
# Problem: ESLint versteht Path-Aliases nicht
# Lösung: eslint-import-resolver-typescript installieren
npm install --save-dev eslint-import-resolver-typescript
```

## ✅ Migration-Checkliste

### Vor der Migration
- [ ] Backup des aktuellen Codes erstellen
- [ ] Alle Tests laufen erfolgreich
- [ ] Build-Prozess funktioniert
- [ ] Team über Migration informieren

### Während der Migration
- [ ] Ordner-Struktur erstellen
- [ ] Dateien verschieben
- [ ] Import-Pfade aktualisieren
- [ ] TypeScript-Konfiguration anpassen
- [ ] ESLint-Konfiguration aktualisieren
- [ ] Test-Konfiguration anpassen

### Nach der Migration
- [ ] Alle Tests laufen erfolgreich
- [ ] Build-Prozess funktioniert
- [ ] Entwicklungsserver startet
- [ ] Code-Formatierung funktioniert
- [ ] Linting-Fehler behoben
- [ ] Dokumentation aktualisiert

## 🔧 Rollback-Plan

Falls die Migration Probleme verursacht:

```bash
# 1. Git-Status prüfen
git status

# 2. Änderungen verwerfen
git reset --hard HEAD

# 3. Oder zu spezifischem Commit zurückkehren
git reset --hard <commit-hash>

# 4. Dependencies neu installieren
npm install
```

## 📚 Nächste Schritte

Nach erfolgreicher Migration:

1. **Neue Features** mit Path-Aliases entwickeln
2. **Tests** für neue Komponenten schreiben
3. **Dokumentation** aktualisieren
4. **Team** in neue Struktur einweisen
5. **Best Practices** etablieren

## 🆘 Support

Bei Problemen während der Migration:

1. **Dokumentation** prüfen
2. **Git-History** durchsuchen
3. **Issues** im Repository erstellen
4. **Team** um Hilfe bitten 