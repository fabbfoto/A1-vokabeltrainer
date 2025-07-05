// ui/index.ts
// Zentrale Export-Datei für alle UI-Module

// Navigation exports
export {
    displayMainTopics,
    displaySubTopics,
    initNavigationListeners,
    showSubTopicNavigation,
    showTrainingModes,
    showMainTopicNavigation
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
export async function initEventListeners(dom: any, state: any, callbacks: any, learningModes: any, vokabular: any): Promise<void> {
    // Import die einzelnen Init-Funktionen und warte auf deren Abschluss
    const navigationModule = await import('./navigation');
    navigationModule.initNavigationListeners(dom, state, callbacks, learningModes, vokabular);
    
    const testModalModule = await import('./test-modal');
    testModalModule.initTestModalListeners(dom, state, callbacks, learningModes);
}