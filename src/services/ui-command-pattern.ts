// shared/services/ui-command-pattern.ts
import type { TrainerState, DOMElements } from '../core/types/trainer';
import { ModeManager, AppMode } from './mode-manager';

// Command Interface
interface UICommand {
  execute(state: TrainerState, dom: DOMElements): void;
  canExecute(state: TrainerState): boolean;
}

// Konkrete Commands für verschiedene Aktionen
export class ShowSuccessFeedbackCommand implements UICommand {
  execute(state: TrainerState, dom: DOMElements): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    switch (currentMode) {
      case 'learning':
        // Im Lernmodus: Grüner Balken + automatisch weiter
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = '<span class="feedback-correct">Richtig!</span>';
        }
        setTimeout(() => {
          // loadNextTask() aufrufen
        }, 1500);
        break;
        
      case 'testing':
        // Im Testmodus: KEIN visuelles Feedback
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = '';
        }
        // Sofort weiter
        break;
        
      case 'correcting':
        // Im Korrekturmodus: Grüner Balken + manuell weiter
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = '<span class="feedback-correct">Richtig!</span>';
        }
        break;
    }
  }

  canExecute(state: TrainerState): boolean {
    return true; // Kann immer ausgeführt werden
  }
}

export class ShowErrorFeedbackCommand implements UICommand {
  constructor(private correctAnswer?: string) {}

  execute(state: TrainerState, dom: DOMElements): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    switch (currentMode) {
      case 'learning':
        // Im Lernmodus: Rote Anzeige + Korrekturmodus
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect" style="color: #ef4444; font-weight: bold; font-size: 1.5rem; text-align: center; display: block; margin: 1rem 0;">${this.correctAnswer || ''}</span>`;
        }
        if (dom.correctionSolutionEl) {
          dom.correctionSolutionEl.classList.remove('hidden');
        }
        if (dom.continueButton) {
          dom.continueButton.classList.remove('hidden');
        }
        break;
        
      case 'testing':
        // Im Testmodus: KEIN visuelles Feedback
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = '';
        }
        break;
        
      case 'correcting':
        // Im Korrekturmodus: Rote Anzeige
        if (dom.feedbackContainerEl) {
          dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect" style="color: #ef4444; font-weight: bold; font-size: 1.5rem; text-align: center; display: block; margin: 1rem 0;">${this.correctAnswer || ''}</span>`;
        }
        break;
    }
  }

  canExecute(state: TrainerState): boolean {
    return true;
  }
}

export class ContinueToNextTaskCommand implements UICommand {
  execute(state: TrainerState, dom: DOMElements): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    switch (currentMode) {
      case 'learning':
        // Im Lernmodus: UI zurücksetzen und nächste Aufgabe
        this.resetUI(dom);
        // loadNextTask() aufrufen
        break;
        
      case 'testing':
        // Im Testmodus: Sofort zur nächsten Aufgabe
        // loadNextTask() aufrufen
        break;
        
      case 'correcting':
        // Im Korrekturmodus: UI zurücksetzen und nächste Aufgabe
        this.resetUI(dom);
        state.training.isCorrectionMode = false;
        // loadNextTask() aufrufen
        break;
    }
  }

  canExecute(state: TrainerState): boolean {
    return true;
  }

  private resetUI(dom: DOMElements): void {
    if (dom.feedbackContainerEl) {
      dom.feedbackContainerEl.innerHTML = '';
    }
    if (dom.correctionSolutionEl) {
      dom.correctionSolutionEl.classList.add('hidden');
    }
    if (dom.continueButton) {
      dom.continueButton.classList.add('hidden');
    }
    
    // Alle visuellen Fehleranzeigen entfernen
    document.querySelectorAll('.feedback-incorrect').forEach(el => el.remove());
    document.querySelectorAll('.border-red-500, .bg-de-red/10').forEach(el => {
      el.classList.remove('border-red-500', 'bg-de-red/10');
      el.classList.add('border-de-gray-300');
    });
  }
}

// Command Invoker
export class UICommandInvoker {
  private commands: UICommand[] = [];

  addCommand(command: UICommand): void {
    this.commands.push(command);
  }

  executeCommands(state: TrainerState, dom: DOMElements): void {
    for (const command of this.commands) {
      if (command.canExecute(state)) {
        command.execute(state, dom);
      }
    }
    this.commands = []; // Commands nach Ausführung leeren
  }

  clearCommands(): void {
    this.commands = [];
  }
} 