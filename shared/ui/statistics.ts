import type { DOMElements } from '../types/ui';
import type { TrainerState, LearningModes } from '../types/trainer';

export function updateErrorCounts(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    Object.keys(learningModes).forEach(mode => {
        const repeatButton = document.getElementById(`mode-repeat-${mode}`);
        if (!repeatButton) return;
        const countSpan = repeatButton.querySelector('.count-display');
        if (!countSpan) return;
        const errorCount = state.progress.wordsToRepeatByMode[mode as import('../types/trainer').ModeId]?.size || 0;
        countSpan.textContent = errorCount.toString();
    });
} 