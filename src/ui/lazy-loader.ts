// Lazy Loader für UI-Komponenten - Performance-Optimierung
import type { DOMElements } from '../core/types/ui';
import type { TrainerState } from '../core/types/trainer';

const componentCache = new Map<string, any>();

export class UILazyLoader {
  private static instance: UILazyLoader;
  private loadedComponents = new Set<string>();

  static getInstance(): UILazyLoader {
    if (!UILazyLoader.instance) {
      UILazyLoader.instance = new UILazyLoader();
    }
    return UILazyLoader.instance;
  }

  async loadNavigation(): Promise<any> {
    if (this.loadedComponents.has('navigation')) {
      return componentCache.get('navigation');
    }
    const navigation = await import('./views/navigation');
    componentCache.set('navigation', navigation);
    this.loadedComponents.add('navigation');
    return navigation;
  }

  async loadStatistics(): Promise<any> {
    if (this.loadedComponents.has('statistics')) {
      return componentCache.get('statistics');
    }
    const statistics = await import('./views/statistics');
    componentCache.set('statistics', statistics);
    this.loadedComponents.add('statistics');
    return statistics;
  }

  async loadTestResultModal(): Promise<any> {
    if (this.loadedComponents.has('test-result-modal')) {
      return componentCache.get('test-result-modal');
    }
    const testResultModal = await import('./components/test-result-modal');
    componentCache.set('test-result-modal', testResultModal);
    this.loadedComponents.add('test-result-modal');
    return testResultModal;
  }

  async loadRankingUI(): Promise<any> {
    if (this.loadedComponents.has('ranking-ui')) {
      return componentCache.get('ranking-ui');
    }
    const rankingUI = await import('./components/ranking-ui');
    componentCache.set('ranking-ui', rankingUI);
    this.loadedComponents.add('ranking-ui');
    return rankingUI;
  }

  async preloadComponents(): Promise<void> {
    console.log('🚀 Preloading UI components...');
    const preloadPromises = [
      this.loadNavigation(),
      this.loadStatistics()
    ];
    await Promise.allSettled(preloadPromises);
    console.log('✅ UI components preloaded');
  }

  clearCache(): void {
    componentCache.clear();
    this.loadedComponents.clear();
    console.log('🗑️ UI component cache cleared');
  }

  getCacheStatus(): { loaded: string[], cacheSize: number } {
    return {
      loaded: Array.from(this.loadedComponents),
      cacheSize: componentCache.size
    };
  }
}

export const lazyLoader = UILazyLoader.getInstance();

// Wrapper-Funktionen für bessere Chunk-Trennung
export async function showMainTopicNavigation(dom: DOMElements, state: TrainerState, vokabular: any, learningModes: any): Promise<void> {
  const navigation = await lazyLoader.loadNavigation();
  return navigation.showMainTopicNavigation(dom, state, vokabular, learningModes);
}

export async function showTrainingModes(dom: DOMElements, state: TrainerState): Promise<void> {
  const navigation = await lazyLoader.loadNavigation();
  return navigation.showTrainingModes(dom, state);
}

export async function updateErrorCounts(dom: DOMElements, state: TrainerState): Promise<void> {
  const statistics = await lazyLoader.loadStatistics();
  return statistics.updateErrorCounts(dom, state);
}

export async function showTestResultModal(dom: DOMElements, result: any): Promise<void> {
  const testResultModal = await lazyLoader.loadTestResultModal();
  return testResultModal.showTestResultModal(dom, result);
}

export async function showRankingUI(dom: DOMElements): Promise<void> {
  const rankingUI = await lazyLoader.loadRankingUI();
  return rankingUI.showRankingUI(dom);
} 