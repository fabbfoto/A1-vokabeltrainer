// shared/services/mode-dependency-injection.ts
import type { TrainerState } from '../types/trainer';
import type { DOMElements } from '../types/ui';
import { ModeManager, AppMode } from './mode-manager';

// Service Interfaces
interface IFeedbackService {
  showSuccess(state: TrainerState, dom: DOMElements): void;
  showError(state: TrainerState, dom: DOMElements, correctAnswer?: string): void;
  hide(state: TrainerState, dom: DOMElements): void;
}

interface INavigationService {
  nextTask(state: TrainerState): void;
  resetUI(state: TrainerState, dom: DOMElements): void;
}

interface IErrorManagementService {
  addError(state: TrainerState, wordId: string): void;
  removeError(state: TrainerState, wordId: string): void;
  getErrorCount(state: TrainerState): number;
}

// Konkrete Implementierungen
export class FeedbackService implements IFeedbackService {
  showSuccess(state: TrainerState, dom: DOMElements): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    if (currentMode === 'testing') {
      // Im Testmodus: Kein visuelles Feedback
      return;
    }
    
    dom.feedbackContainerEl.innerHTML = '<span class="feedback-correct">Richtig!</span>';
  }

  showError(state: TrainerState, dom: DOMElements, correctAnswer?: string): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    if (currentMode === 'testing') {
      // Im Testmodus: Kein visuelles Feedback
      return;
    }
    
    dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">Falsch! Richtig: ${correctAnswer || ''}</span>`;
    
    if (currentMode === 'learning') {
      dom.correctionSolutionEl.classList.remove('hidden');
      dom.continueButton.classList.remove('hidden');
    }
  }

  hide(state: TrainerState, dom: DOMElements): void {
    dom.feedbackContainerEl.innerHTML = '';
    dom.correctionSolutionEl.classList.add('hidden');
    dom.continueButton.classList.add('hidden');
  }
}

export class NavigationService implements INavigationService {
  nextTask(state: TrainerState): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    switch (currentMode) {
      case 'learning':
        // Automatisch nach 1.5s weiter
        setTimeout(() => {
          // loadNextTask() aufrufen
        }, 1500);
        break;
        
      case 'testing':
        // Sofort weiter
        // loadNextTask() aufrufen
        break;
        
      case 'correcting':
        // Nur manuell über "Weiter"-Button
        break;
    }
  }

  resetUI(state: TrainerState, dom: DOMElements): void {
    // Alle visuellen Fehleranzeigen entfernen
    document.querySelectorAll('.feedback-incorrect').forEach(el => el.remove());
    document.querySelectorAll('.border-red-500, .bg-red-100').forEach(el => {
      el.classList.remove('border-red-500', 'bg-red-100');
      el.classList.add('border-gray-300');
    });
  }
}

export class ErrorManagementService implements IErrorManagementService {
  addError(state: TrainerState, wordId: string): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    // Nur im Lernmodus Fehler hinzufügen
    if (currentMode === 'learning' || currentMode === 'correcting') {
      // Fehler zur Liste hinzufügen
    }
  }

  removeError(state: TrainerState, wordId: string): void {
    const currentMode = ModeManager.getCurrentMode(state);
    
    // Nur im Lernmodus Fehler entfernen
    if (currentMode === 'learning' || currentMode === 'correcting') {
      // Fehler aus Liste entfernen
    }
  }

  getErrorCount(state: TrainerState): number {
    // Fehleranzahl zurückgeben
    return 0; // Placeholder
  }
}

// Dependency Container
export class ModeDependencyContainer {
  private static instance: ModeDependencyContainer;
  private services: Map<string, any> = new Map();

  static getInstance(): ModeDependencyContainer {
    if (!ModeDependencyContainer.instance) {
      ModeDependencyContainer.instance = new ModeDependencyContainer();
    }
    return ModeDependencyContainer.instance;
  }

  register<T>(serviceName: string, service: T): void {
    this.services.set(serviceName, service);
  }

  get<T>(serviceName: string): T {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as T;
  }

  // Convenience-Methoden für häufig verwendete Services
  getFeedbackService(): IFeedbackService {
    return this.get<IFeedbackService>('feedbackService');
  }

  getNavigationService(): INavigationService {
    return this.get<INavigationService>('navigationService');
  }

  getErrorManagementService(): IErrorManagementService {
    return this.get<IErrorManagementService>('errorManagementService');
  }
}

// Service-Initialisierung
export function initializeModeServices(): void {
  const container = ModeDependencyContainer.getInstance();
  
  container.register('feedbackService', new FeedbackService());
  container.register('navigationService', new NavigationService());
  container.register('errorManagementService', new ErrorManagementService());
} 