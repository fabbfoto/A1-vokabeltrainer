# A1 Vokabeltrainer - Architektur für Modus-Trennung

## Problem
Die ursprüngliche Implementierung hatte eine Vermischung zwischen Testmodus- und Lernmodus-Logik, was zu inkonsistentem Verhalten führte:
- Rote Fehleranzeigen blieben stehen
- Korrekturen wurden nicht richtig verarbeitet
- UI-Verhalten war unvorhersagbar

## Lösung: Saubere Architektur mit Design Patterns

### 1. Strategy Pattern (Strategie-Muster)
**Datei:** `shared/services/mode-manager.ts`

Jeder Modus hat seine eigene Strategie:
- `LearningModeStrategy`: Sofortiges Feedback, Korrekturmodus
- `TestingModeStrategy`: Kein visuelles Feedback, sofort weiter
- `CorrectionModeStrategy`: Manuelles Weitergehen

```typescript
// Verwendung
const currentMode = ModeManager.getCurrentMode(state);
const strategy = ModeManager.strategies[currentMode];
strategy.processAnswer(state, isCorrect, correctAnswer);
```

### 2. State Machine Pattern (Zustandsmaschine)
**Datei:** `shared/services/mode-state-machine.ts`

Definiert erlaubte Übergänge zwischen Modi:
- `learning` → `correcting` (bei falscher Antwort)
- `correcting` → `learning` (nach Korrektur)
- `learning` → `testing` (Test starten)
- `testing` → `learning` (Test beenden)

### 3. Command Pattern (Befehl-Muster)
**Datei:** `shared/services/ui-command-pattern.ts`

Kapselt UI-Aktionen in Commands:
- `ShowSuccessFeedbackCommand`
- `ShowErrorFeedbackCommand`
- `ContinueToNextTaskCommand`

### 4. Dependency Injection
**Datei:** `shared/services/mode-dependency-injection.ts`

Reduziert Abhängigkeiten zwischen Komponenten:
- `IFeedbackService`
- `INavigationService`
- `IErrorManagementService`

## Prinzipien für die Zukunft

### 1. **Single Responsibility Principle (SRP)**
Jede Klasse hat nur eine Verantwortlichkeit:
- `ModeManager`: Modus-Verwaltung
- `FeedbackService`: Feedback-Anzeige
- `NavigationService`: Navigation

### 2. **Open/Closed Principle (OCP)**
Erweiterbar ohne Änderung bestehender Code:
- Neue Modi durch neue Strategien
- Neue UI-Aktionen durch neue Commands

### 3. **Dependency Inversion Principle (DIP)**
Abhängigkeiten von Abstraktionen, nicht von Konkretionen:
- Services über Interfaces
- Dependency Container für Injektion

### 4. **Don't Repeat Yourself (DRY)**
Keine Code-Duplikation:
- Gemeinsame Logik in Basis-Klassen
- Modus-spezifische Logik in Strategien

## Verwendung in der Praxis

### Neue Funktion hinzufügen:
1. **Strategie erweitern**: Neue Methode in `ModeStrategy` Interface
2. **Konkrete Implementierung**: In jeder Strategie-Klasse implementieren
3. **State Machine erweitern**: Neue Übergänge definieren
4. **Command erstellen**: UI-Aktion kapseln

### Neuen Modus hinzufügen:
1. **Neue Strategie erstellen**: `NewModeStrategy` implementieren
2. **State Machine erweitern**: Übergänge definieren
3. **Services anpassen**: Modus-spezifische Logik hinzufügen

## Vorteile dieser Architektur

### 1. **Klare Trennung**
- Testmodus und Lernmodus sind komplett getrennt
- Keine Vermischung der Logik
- Vorhersagbares Verhalten

### 2. **Wartbarkeit**
- Änderungen in einem Modus beeinflussen andere nicht
- Einfaches Debugging durch klare Verantwortlichkeiten
- Testbare Komponenten

### 3. **Erweiterbarkeit**
- Neue Modi einfach hinzufügbar
- Neue UI-Aktionen ohne Code-Änderungen
- Flexible Konfiguration

### 4. **Robustheit**
- Validierung von Zustandsübergängen
- Fehlerbehandlung pro Modus
- Konsistente Datenhaltung

## Best Practices

### 1. **Immer über den ModeManager arbeiten**
```typescript
// ❌ Falsch
if (state.test.isTestModeActive) { ... }

// ✅ Richtig
if (ModeManager.isInTestMode(state)) { ... }
```

### 2. **Strategien für modus-spezifische Logik verwenden**
```typescript
// ❌ Falsch
switch (currentMode) {
  case 'learning': // Logik hier
  case 'testing': // Logik hier
}

// ✅ Richtig
const strategy = ModeManager.strategies[currentMode];
strategy.processAnswer(state, isCorrect, correctAnswer);
```

### 3. **Commands für UI-Aktionen verwenden**
```typescript
// ❌ Falsch
dom.feedbackContainerEl.innerHTML = '...';

// ✅ Richtig
const command = new ShowSuccessFeedbackCommand();
commandInvoker.addCommand(command);
commandInvoker.executeCommands(state, dom);
```

### 4. **Services über Dependency Injection verwenden**
```typescript
// ❌ Falsch
const feedbackService = new FeedbackService();

// ✅ Richtig
const container = ModeDependencyContainer.getInstance();
const feedbackService = container.getFeedbackService();
```

## Debugging

### 1. **Modus-Status prüfen**
```typescript
console.log('Aktueller Modus:', ModeManager.getCurrentMode(state));
console.log('Ist Testmodus:', ModeManager.isInTestMode(state));
```

### 2. **Zustandsübergänge verfolgen**
```typescript
ModeStateMachine.processTransitions(state);
```

### 3. **Strategie-Ausführung debuggen**
```typescript
const strategy = ModeManager.strategies[currentMode];
console.log('Verwende Strategie:', strategy.constructor.name);
```

Diese Architektur stellt sicher, dass Testmodus und Lernmodus sauber getrennt bleiben und zukünftige Erweiterungen einfach und sicher sind. 