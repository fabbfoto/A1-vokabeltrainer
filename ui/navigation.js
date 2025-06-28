"use strict";
// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayMainTopics = displayMainTopics;
exports.displaySubTopics = displaySubTopics;
exports.initNavigationListeners = initNavigationListeners;
var navigation_events_js_1 = require("../shared/events/navigation-events.js");
// Hilfsfunktionen (später in statistics.ts verschieben)
function calculateProgressPercentage(completed, total) {
    if (total === 0)
        return 0;
    return Math.round((completed / total) * 100);
}
function getProgressColorClass(completed, total) {
    var percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34)
        return 'color-black-sr';
    if (percentage < 67)
        return 'color-red-sr';
    return 'color-gold-sr';
}
/**
 * Zeigt die Hauptthemen-Übersicht an.
 */
function displayMainTopics(dom, state, vokabular, learningModes) {
    navigation_events_js_1.NavigationEvents.dispatchRoot();
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationContainerEl.innerHTML = '';
    var mainTopics = Object.keys(vokabular);
    mainTopics.forEach(function (mainTopicName) {
        var button = document.createElement('button');
        button.className = 'topic-button w-full p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow';
        button.innerHTML = "\n          <div class=\"topic-title text-lg font-semibold text-gray-700\"></div>\n          <div class=\"w-full bg-gray-200 rounded-full h-2 mt-2\">\n            <div class=\"topic-progress-bar h-2 rounded-full transition-all duration-300\"></div>\n          </div>\n        ";
        button.dataset.mainTopic = mainTopicName;
        var title = button.querySelector('.topic-title');
        var progressBar = button.querySelector('.topic-progress-bar');
        title.textContent = mainTopicName;
        // Fortschritt berechnen
        var subTopics = Object.keys(vokabular[mainTopicName]);
        var totalWords = 0;
        var totalMastered = 0;
        subTopics.forEach(function (subTopicName) {
            var words = vokabular[mainTopicName][subTopicName];
            var progressKey = "".concat(mainTopicName, "|").concat(subTopicName);
            var progressForKey = state.globalProgress[progressKey] || {};
            Object.keys(learningModes).forEach(function (modeId) {
                var _a;
                totalWords += words.length;
                var masteredInMode = ((_a = progressForKey[modeId]) === null || _a === void 0 ? void 0 : _a.size) || 0;
                totalMastered += masteredInMode;
            });
        });
        var percentage = calculateProgressPercentage(totalMastered, totalWords);
        var colorClass = getProgressColorClass(totalMastered, totalWords);
        progressBar.style.width = "".concat(percentage, "%");
        progressBar.classList.add(colorClass);
        progressBar.setAttribute('aria-valuenow', percentage.toString());
        dom.navigationContainerEl.appendChild(button);
    });
    // Globaler Test-Button
    var globalTestButton = document.createElement('button');
    globalTestButton.id = 'start-test-mode-btn';
    globalTestButton.className = 'w-full bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-700 transition-colors duration-200';
    globalTestButton.textContent = '🎯 Globaler Test (Alle Themen)';
    dom.navigationContainerEl.appendChild(globalTestButton);
}
/**
 * Zeigt die Unterthemen eines Hauptthemas an.
 */
function displaySubTopics(dom, state, vokabular, mainTopicName, learningModes) {
    navigation_events_js_1.NavigationEvents.dispatchSubtopic();
    state.currentMainTopic = mainTopicName;
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';
    var subTopics = Object.keys(vokabular[mainTopicName]);
    subTopics.forEach(function (subTopicName) {
        var button = document.createElement('button');
        button.className = 'topic-button w-full p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow';
        button.innerHTML = "\n          <div class=\"topic-title text-lg font-semibold text-gray-700\"></div>\n          <div class=\"w-full bg-gray-200 rounded-full h-2 mt-2\">\n            <div class=\"topic-progress-bar h-2 rounded-full transition-all duration-300\"></div>\n          </div>\n        ";
        button.dataset.subTopic = subTopicName;
        var title = button.querySelector('.topic-title');
        var progressBar = button.querySelector('.topic-progress-bar');
        title.textContent = subTopicName;
        // Fortschritt berechnen
        var words = vokabular[mainTopicName][subTopicName];
        var progressKey = "".concat(mainTopicName, "|").concat(subTopicName);
        var progressForKey = state.globalProgress[progressKey] || {};
        var totalWords = 0;
        var totalMastered = 0;
        Object.keys(learningModes).forEach(function (modeId) {
            var _a;
            totalWords += words.length;
            var masteredInMode = ((_a = progressForKey[modeId]) === null || _a === void 0 ? void 0 : _a.size) || 0;
            totalMastered += masteredInMode;
        });
        var percentage = calculateProgressPercentage(totalMastered, totalWords);
        var colorClass = getProgressColorClass(totalMastered, totalWords);
        progressBar.style.width = "".concat(percentage, "%");
        progressBar.classList.add(colorClass);
        progressBar.setAttribute('aria-valuenow', percentage.toString());
        dom.navigationContainerEl.appendChild(button);
    });
    // Hauptthema-Test Button
    var mainTopicTestButton = document.createElement('button');
    mainTopicTestButton.className = 'w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105';
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    mainTopicTestButton.innerHTML = "\uD83C\uDFAF Test: ".concat(mainTopicName, " <span class=\"text-sm\">(Alle Unterthemen)</span>");
    dom.navigationContainerEl.appendChild(mainTopicTestButton);
}
/**
 * Initialisiert die Navigation-Event-Listener.
 * Nur der Navigation-relevante Teil der ursprünglichen initEventListeners Funktion.
 */
function initNavigationListeners(dom, state, callbacks, learningModes) {
    // Navigation Container Click Handler
    dom.navigationContainerEl.addEventListener('click', function (e) {
        var target = e.target;
        var mainTopicButton = target.closest('[data-main-topic]');
        var subTopicButton = target.closest('[data-sub-topic]');
        var globalTestButton = target.closest('#start-test-mode-btn');
        var mainTopicTestButton = target.closest('[data-test-main-topic-only]');
        if (mainTopicButton || subTopicButton) {
            callbacks.handleNavigation(e);
        }
        else if (globalTestButton) {
            // Trigger test modal (wird in test-modal.ts behandelt)
            var event_1 = new CustomEvent('showTestModal', {
                detail: { type: 'global', topic: 'Alle Themen' }
            });
            window.dispatchEvent(event_1);
        }
        else if (mainTopicTestButton) {
            var mainTopic = mainTopicTestButton.dataset.testMainTopicOnly;
            // Trigger test modal für Hauptthema
            var event_2 = new CustomEvent('showTestModal', {
                detail: { type: 'mainTopic', topic: mainTopic }
            });
            window.dispatchEvent(event_2);
        }
    });
    // Back to Main Topics Button
    dom.backToMainTopicsButton.addEventListener('click', function () {
        displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
    });
}
