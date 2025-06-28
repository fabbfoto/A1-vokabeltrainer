// ui/index.ts
// Zentrale Export-Datei für alle UI-Module

// Navigation exports
export {
    displayMainTopics,
    displaySubTopics,
    initNavigationListeners
} from './navigation';

// Statistics exports
export {
    calculateProgressPercentage,
    getProgressColorClass,
    updateErrorCounts,
    updateCategoryStats,
    updatePracticeStats,
    updateTestStats
} from './statistics';

// Test Modal exports
export {
    showTestModal,
    closeTestModal,
    updateTestModeProgressBars,
    initTestModalListeners
} from './test-modal';

// Feedback exports
export {
    showMessage,
    hideAllUIs,
    showCorrectFeedback,
    showIncorrectFeedback,
    setupAudioButtons
} from './feedback';

// Umlaut Button exports
export {
    insertTextAtCursor,
    setupUmlautButtons,
    hideUmlautButtons,
    registerInputForUmlauts,
    initUmlautSupport,
    createUmlautButtonsUI
} from './umlaut-buttons';

// Combined init function for all UI event listeners
export function initEventListeners(dom: any, state: any, callbacks: any, learningModes: any): void {
    // Import die einzelnen Init-Funktionen
    import('./navigation').then(({ initNavigationListeners }) => {
        initNavigationListeners(dom, state, callbacks, learningModes);
    });
    
    import('./test-modal').then(({ initTestModalListeners }) => {
        initTestModalListeners(dom, state, callbacks, learningModes);
    });
}