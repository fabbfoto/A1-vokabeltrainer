"use strict";
// ui/index.ts
// Zentrale Export-Datei für alle UI-Module
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUmlautButtonsUI = exports.initUmlautSupport = exports.registerInputForUmlauts = exports.hideUmlautButtons = exports.setupUmlautButtons = exports.insertTextAtCursor = exports.setupAudioButtons = exports.showIncorrectFeedback = exports.showCorrectFeedback = exports.hideAllUIs = exports.showMessage = exports.initTestModalListeners = exports.updateTestModeProgressBars = exports.closeTestModal = exports.showTestModal = exports.updateTestStats = exports.updatePracticeStats = exports.updateCategoryStats = exports.updateErrorCounts = exports.getProgressColorClass = exports.calculateProgressPercentage = exports.initNavigationListeners = exports.displaySubTopics = exports.displayMainTopics = void 0;
exports.initEventListeners = initEventListeners;
// Navigation exports
var navigation_1 = require("./navigation");
Object.defineProperty(exports, "displayMainTopics", { enumerable: true, get: function () { return navigation_1.displayMainTopics; } });
Object.defineProperty(exports, "displaySubTopics", { enumerable: true, get: function () { return navigation_1.displaySubTopics; } });
Object.defineProperty(exports, "initNavigationListeners", { enumerable: true, get: function () { return navigation_1.initNavigationListeners; } });
// Statistics exports
var statistics_1 = require("./statistics");
Object.defineProperty(exports, "calculateProgressPercentage", { enumerable: true, get: function () { return statistics_1.calculateProgressPercentage; } });
Object.defineProperty(exports, "getProgressColorClass", { enumerable: true, get: function () { return statistics_1.getProgressColorClass; } });
Object.defineProperty(exports, "updateErrorCounts", { enumerable: true, get: function () { return statistics_1.updateErrorCounts; } });
Object.defineProperty(exports, "updateCategoryStats", { enumerable: true, get: function () { return statistics_1.updateCategoryStats; } });
Object.defineProperty(exports, "updatePracticeStats", { enumerable: true, get: function () { return statistics_1.updatePracticeStats; } });
Object.defineProperty(exports, "updateTestStats", { enumerable: true, get: function () { return statistics_1.updateTestStats; } });
// Test Modal exports
var test_modal_1 = require("./test-modal");
Object.defineProperty(exports, "showTestModal", { enumerable: true, get: function () { return test_modal_1.showTestModal; } });
Object.defineProperty(exports, "closeTestModal", { enumerable: true, get: function () { return test_modal_1.closeTestModal; } });
Object.defineProperty(exports, "updateTestModeProgressBars", { enumerable: true, get: function () { return test_modal_1.updateTestModeProgressBars; } });
Object.defineProperty(exports, "initTestModalListeners", { enumerable: true, get: function () { return test_modal_1.initTestModalListeners; } });
// Feedback exports
var feedback_1 = require("./feedback");
Object.defineProperty(exports, "showMessage", { enumerable: true, get: function () { return feedback_1.showMessage; } });
Object.defineProperty(exports, "hideAllUIs", { enumerable: true, get: function () { return feedback_1.hideAllUIs; } });
Object.defineProperty(exports, "showCorrectFeedback", { enumerable: true, get: function () { return feedback_1.showCorrectFeedback; } });
Object.defineProperty(exports, "showIncorrectFeedback", { enumerable: true, get: function () { return feedback_1.showIncorrectFeedback; } });
Object.defineProperty(exports, "setupAudioButtons", { enumerable: true, get: function () { return feedback_1.setupAudioButtons; } });
// Umlaut Button exports
var umlaut_buttons_1 = require("./umlaut-buttons");
Object.defineProperty(exports, "insertTextAtCursor", { enumerable: true, get: function () { return umlaut_buttons_1.insertTextAtCursor; } });
Object.defineProperty(exports, "setupUmlautButtons", { enumerable: true, get: function () { return umlaut_buttons_1.setupUmlautButtons; } });
Object.defineProperty(exports, "hideUmlautButtons", { enumerable: true, get: function () { return umlaut_buttons_1.hideUmlautButtons; } });
Object.defineProperty(exports, "registerInputForUmlauts", { enumerable: true, get: function () { return umlaut_buttons_1.registerInputForUmlauts; } });
Object.defineProperty(exports, "initUmlautSupport", { enumerable: true, get: function () { return umlaut_buttons_1.initUmlautSupport; } });
Object.defineProperty(exports, "createUmlautButtonsUI", { enumerable: true, get: function () { return umlaut_buttons_1.createUmlautButtonsUI; } });
// Combined init function for all UI event listeners
function initEventListeners(dom, state, callbacks, learningModes) {
    // Import die einzelnen Init-Funktionen
    Promise.resolve().then(function () { return require('./navigation'); }).then(function (_a) {
        var initNavigationListeners = _a.initNavigationListeners;
        initNavigationListeners(dom, state, callbacks, learningModes);
    });
    Promise.resolve().then(function () { return require('./test-modal'); }).then(function (_a) {
        var initTestModalListeners = _a.initTestModalListeners;
        initTestModalListeners(dom, state, callbacks, learningModes);
    });
}
