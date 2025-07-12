// shared/services/mode-state-machine.ts
import type { TrainerState } from '../types/trainer';
import { ModeManager, AppMode } from './mode-manager';

// Zustandsübergänge definieren
type StateTransition = {
  from: AppMode;
  to: AppMode;
  condition: (state: TrainerState) => boolean;
  action: (state: TrainerState) => void;
};

export class ModeStateMachine {
  private static transitions: StateTransition[] = [
    // Lernmodus -> Korrekturmodus (bei falscher Antwort)
    {
      from: 'learning',
      to: 'correcting',
      condition: (state: TrainerState) => !state.test.isTestModeActive && state.training.isCorrectionMode,
      action: (state: TrainerState) => {
        // Korrekturmodus-spezifische Aktionen
        console.log('[StateMachine] Wechsel: learning -> correcting');
      }
    },

    // Korrekturmodus -> Lernmodus (nach Korrektur)
    {
      from: 'correcting',
      to: 'learning',
      condition: (state: TrainerState) => !state.training.isCorrectionMode && !state.test.isTestModeActive,
      action: (state: TrainerState) => {
        console.log('[StateMachine] Wechsel: correcting -> learning');
      }
    },

    // Lernmodus -> Testmodus (Test starten)
    {
      from: 'learning',
      to: 'testing',
      condition: (state: TrainerState) => state.test.isTestModeActive,
      action: (state: TrainerState) => {
        console.log('[StateMachine] Wechsel: learning -> testing');
      }
    },

    // Testmodus -> Lernmodus (Test beenden)
    {
      from: 'testing',
      to: 'learning',
      condition: (state: TrainerState) => !state.test.isTestModeActive,
      action: (state: TrainerState) => {
        console.log('[StateMachine] Wechsel: testing -> learning');
      }
    }
  ];

  // Prüfe und führe Zustandsübergänge aus
  static processTransitions(state: TrainerState): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    for (const transition of this.transitions) {
      if (transition.from === currentMode && transition.condition(state)) {
        transition.action(state);
        break;
      }
    }
  }

  // Validiere, ob ein Übergang erlaubt ist
  static isValidTransition(from: AppMode, to: AppMode): boolean {
    return this.transitions.some(t => t.from === from && t.to === to);
  }

  // Debug: Zeige alle möglichen Übergänge
  static getValidTransitions(from: AppMode): AppMode[] {
    return this.transitions
      .filter(t => t.from === from)
      .map(t => t.to);
  }
} 