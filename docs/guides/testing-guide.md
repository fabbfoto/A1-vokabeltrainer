# Testing Guide: A1 Vokabeltrainer

## 🎯 Testing-Philosophie

Unser Testing-Ansatz folgt der Test-Pyramide:
- **Viele Unit Tests**: Schnell, isoliert, kostengünstig
- **Wenige Integration Tests**: Wichtige Service-Interaktionen
- **Minimale E2E Tests**: Kritische User-Journeys

## 🏗️ Test-Architektur

### Test-Struktur
```
tests/
├── setup.ts                    # Globales Test-Setup
├── unit/                       # Unit Tests
│   ├── services/              # Service Unit Tests
│   └── utils/                 # Utils Unit Tests
└── integration/               # Integration Tests
    └── auth/                  # Auth-Flow Tests
```

### Test-Konfiguration
- **Vitest**: Schneller Test-Runner
- **jsdom**: Browser-Environment
- **Path-Aliases**: Konsistente Imports
- **Mocking**: Umfassende Mocks

## 🧪 Unit Tests

### Service Tests

#### Beispiel: AuthService Test
```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AuthService } from '@services/auth-service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    vi.clearAllMocks();
    authService = new AuthService();
  });

  describe('isLoggedIn', () => {
    it('should return false when no user is logged in', () => {
      expect(authService.isLoggedIn()).toBe(false);
    });

    it('should return true when user is logged in', () => {
      const mockUser = { uid: 'test-uid' };
      authService.currentUser = mockUser;
      expect(authService.isLoggedIn()).toBe(true);
    });
  });
});
```

#### Best Practices für Service Tests
1. **Isolation**: Jeder Test ist unabhängig
2. **Mocking**: Externe Dependencies mocken
3. **Setup/Teardown**: `beforeEach` für saubere Tests
4. **Descriptive Names**: Klare Test-Beschreibungen

### Utils Tests

#### Beispiel: Helfer-Funktionen
```typescript
import { describe, it, expect } from 'vitest';
import { vergleicheAntwort, shuffleArray } from '@utils/helfer';

describe('Helfer Functions', () => {
  describe('vergleicheAntwort', () => {
    it('should handle case insensitive comparison', () => {
      expect(vergleicheAntwort('haus', 'Haus')).toBe(true);
      expect(vergleicheAntwort('HAUS', 'Haus')).toBe(true);
    });

    it('should handle umlauts correctly', () => {
      expect(vergleicheAntwort('Müller', 'Müller')).toBe(true);
      expect(vergleicheAntwort('Muller', 'Müller')).toBe(false);
    });
  });
});
```

## 🔗 Integration Tests

### Auth-Flow Tests

#### Beispiel: Service-Integration
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { initializeAuth } from '@infrastructure/auth';

describe('Auth Flow Integration', () => {
  beforeEach(() => {
    // Setup mocks
  });

  it('should initialize all services correctly', async () => {
    const services = initializeAuth('test-trainer', {
      buttonContainerId: 'auth-button-container',
      rankingContainerId: 'ranking-container'
    });

    expect(services.authService).toBeInstanceOf(AuthService);
    expect(services.syncService).toBeInstanceOf(SyncService);
    expect(services.rankingService).toBeInstanceOf(RankingService);
  });
});
```

## 🎭 Mocking-Strategie

### Firebase Mocks
```typescript
// tests/setup.ts
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    currentUser: null,
    onIdTokenChanged: vi.fn(),
    signInWithPopup: vi.fn(),
    signOut: vi.fn()
  })),
  signInWithPopup: vi.fn(),
  signOut: vi.fn()
}));
```

### Browser API Mocks
```typescript
// localStorage Mock
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  },
  writable: true
});
```

### Service Mocks
```typescript
// Service Mock Beispiel
const mockAuthService = {
  isLoggedIn: vi.fn(() => false),
  getCurrentUser: vi.fn(() => null),
  login: vi.fn(),
  logout: vi.fn()
};
```

## 📊 Test-Coverage

### Coverage-Konfiguration
```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'tests/',
        '**/*.d.ts'
      ]
    }
  }
});
```

### Coverage-Ziele
- **Statements**: > 80%
- **Branches**: > 70%
- **Functions**: > 80%
- **Lines**: > 80%

## 🚀 Test-Ausführung

### NPM Scripts
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

### Test-Runner Script
```bash
# Alle Tests
./tests/run-tests.sh

# Spezifische Tests
./tests/run-tests.sh unit
./tests/run-tests.sh integration
./tests/run-tests.sh services
```

## 📝 Test-Writing Guidelines

### Test-Struktur (AAA Pattern)
```typescript
describe('Feature', () => {
  it('should do something', () => {
    // Arrange - Setup
    const service = new MyService();
    
    // Act - Execute
    const result = service.doSomething();
    
    // Assert - Verify
    expect(result).toBe(expectedValue);
  });
});
```

### Test-Naming
```typescript
// ✅ Gut
it('should return user data when valid ID is provided', () => {});
it('should throw error when user not found', () => {});
it('should handle empty input gracefully', () => {});

// ❌ Schlecht
it('should work', () => {});
it('test1', () => {});
it('does something', () => {});
```

### Assertions
```typescript
// Exakte Werte
expect(result).toBe(expectedValue);
expect(result).toEqual(expectedObject);

// Typen
expect(result).toBeInstanceOf(MyClass);
expect(typeof result).toBe('string');

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// Async
await expect(asyncFunction()).resolves.toBe(expectedValue);
await expect(asyncFunction()).rejects.toThrow('Error message');
```

## 🔧 Debugging Tests

### Vitest UI
```bash
npm run test:ui
```
- Visuelle Test-Ausführung
- Live-Reload bei Änderungen
- Detaillierte Fehlerberichte

### Watch-Modus
```bash
npm run test:watch
```
- Automatische Test-Ausführung bei Änderungen
- Filterung nach Dateinamen
- Interaktive Test-Auswahl

### Debug-Logging
```typescript
// In Tests
console.log('Debug info:', data);

// Mit vi.spyOn
const consoleSpy = vi.spyOn(console, 'log');
expect(consoleSpy).toHaveBeenCalledWith('Expected message');
```

## 🚨 Common Issues

### Mock-Probleme
```typescript
// Problem: Mock wird nicht angewendet
// Lösung: Mock vor Import definieren
vi.mock('firebase/auth');
import { getAuth } from 'firebase/auth';
```

### Async-Tests
```typescript
// Problem: Async-Test schlägt fehl
// Lösung: await verwenden
it('should handle async operation', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expectedValue);
});
```

### Path-Alias-Probleme
```typescript
// Problem: Path-Alias nicht erkannt
// Lösung: vitest.config.ts überprüfen
resolve: {
  alias: {
    '@services': resolve(__dirname, './src/services')
  }
}
```

## 📚 Weiterführende Ressourcen

- [Vitest Dokumentation](https://vitest.dev/)
- [Testing Best Practices](https://vitest.dev/guide/best-practices.html)
- [Mocking Guide](https://vitest.dev/guide/mocking.html)
- [Coverage Documentation](https://vitest.dev/guide/coverage.html) 