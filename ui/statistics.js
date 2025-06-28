"use strict";
// ui/statistics.ts
// Statistik und Fortschritts-Anzeige Funktionen
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateProgressPercentage = calculateProgressPercentage;
exports.getProgressColorClass = getProgressColorClass;
exports.updateErrorCounts = updateErrorCounts;
exports.updateCategoryStats = updateCategoryStats;
exports.updatePracticeStats = updatePracticeStats;
exports.updateTestStats = updateTestStats;
/**
 * Berechnet den Fortschritt in Prozent.
 */
function calculateProgressPercentage(completed, total) {
    if (total === 0)
        return 0;
    return Math.round((completed / total) * 100);
}
/**
 * Gibt die Farb-CSS-Klasse basierend auf dem Fortschritt zurück (Deutschland-Farben).
 */
function getProgressColorClass(completed, total) {
    var percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34)
        return 'color-black-sr';
    if (percentage < 67)
        return 'color-red-sr';
    return 'color-gold-sr';
}
/**
 * Aktualisiert die Fehlerzähler auf den Wiederholungs-Buttons.
 */
function updateErrorCounts(dom, state, learningModes) {
    Object.keys(learningModes).forEach(function (mode) {
        var _a;
        var repeatButton = document.getElementById("mode-repeat-".concat(mode));
        if (repeatButton) {
            var countSpan = repeatButton.querySelector('.count-display');
            var errorCount = ((_a = state.wordsToRepeatByMode[mode]) === null || _a === void 0 ? void 0 : _a.size) || 0;
            if (countSpan) {
                countSpan.textContent = errorCount.toString();
            }
            repeatButton.disabled = errorCount === 0;
        }
    });
}
/**
 * Aktualisiert die detaillierte Statistik-Ansicht für die aktuelle Kategorie.
 */
function updateCategoryStats(dom, state, learningModes) {
    dom.categoryStatsContainerEl.innerHTML = '';
    var totalItemsInSet = state.currentVocabularySet.length;
    if (totalItemsInSet === 0)
        return;
    var title = document.createElement('p');
    title.className = 'text-xs text-gray-500 text-center mb-1';
    title.textContent = 'Fortschritt pro Übungsmodus:';
    dom.categoryStatsContainerEl.appendChild(title);
    var itemsContainer = document.createElement('div');
    itemsContainer.className = 'text-xs text-gray-600 space-y-1';
    Object.keys(learningModes).forEach(function (modeId) {
        var _a;
        var modeInfo = learningModes[modeId];
        // Verwende den korrekten Progress-Schlüssel für Themen-Trainer
        var progressKey = "".concat(state.currentMainTopic, "|").concat(state.currentSubTopic);
        var progressData = (_a = state.globalProgress[progressKey]) === null || _a === void 0 ? void 0 : _a[modeId];
        var masteredCount = (progressData === null || progressData === void 0 ? void 0 : progressData.size) || 0;
        var percentage = calculateProgressPercentage(masteredCount, totalItemsInSet);
        // Verwende Farbschema-System
        var colorClass = getProgressColorClass(masteredCount, totalItemsInSet);
        var item = document.createElement('div');
        item.className = 'category-stat-item';
        item.innerHTML = "\n            <span class=\"category-stat-text\">".concat(modeInfo.name, ": ").concat(masteredCount, " / ").concat(totalItemsInSet, "</span>\n            <div class=\"category-progress-bar-bg\">\n                <div class=\"category-progress-bar-fg ").concat(colorClass, "\" style=\"width: ").concat(percentage, "%;\"></div>\n            </div>\n        ");
        itemsContainer.appendChild(item);
    });
    dom.categoryStatsContainerEl.appendChild(itemsContainer);
}
/**
 * Aktualisiert die Haupt-Statistiken in der Übungsrunde.
 */
function updatePracticeStats(dom, state, learningModes) {
    dom.correctInRoundPracticeEl.textContent = state.correctInRound.toString();
    dom.attemptedInRoundPracticeEl.textContent = state.attemptedInRound.toString();
    var accuracy = state.attemptedInRound > 0
        ? (state.correctInRound / state.attemptedInRound) * 100
        : 0;
    dom.accuracyInRoundPracticeEl.textContent = "".concat(accuracy.toFixed(0), "%");
    // Farbkodierung für Genauigkeit
    if (accuracy >= 80) {
        dom.accuracyInRoundPracticeEl.className = 'text-green-600 font-semibold';
    }
    else if (accuracy >= 60) {
        dom.accuracyInRoundPracticeEl.className = 'text-yellow-600 font-semibold';
    }
    else {
        dom.accuracyInRoundPracticeEl.className = 'text-red-600 font-semibold';
    }
    updateCategoryStats(dom, state, learningModes);
}
/**
 * Aktualisiert die Test-Statistiken während eines Tests.
 */
function updateTestStats(dom, state) {
    var correct = state.correctInRound;
    var total = state.shuffledVocabForMode.length;
    var attempted = state.attemptedInRound;
    var progress = calculateProgressPercentage(attempted, total);
    var accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
    // Fortschrittsbalken
    dom.testProgressEl.style.width = "".concat(progress, "%");
    dom.testProgressEl.classList.remove('color-black-sr', 'color-red-sr', 'color-gold-sr');
    var colorClass = getProgressColorClass(attempted, total);
    dom.testProgressEl.classList.add(colorClass);
    // Genauigkeitsbalken
    dom.testAccuracyEl.style.width = "".concat(accuracy, "%");
    dom.testAccuracyEl.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-green-500');
    if (accuracy >= 80) {
        dom.testAccuracyEl.classList.add('bg-green-500');
    }
    else if (accuracy >= 60) {
        dom.testAccuracyEl.classList.add('bg-yellow-500');
    }
    else {
        dom.testAccuracyEl.classList.add('bg-red-500');
    }
    // Text-Updates
    dom.correctInRoundTestEl.textContent = correct.toString();
    dom.attemptedInRoundTestEl.textContent = "".concat(attempted, " / ").concat(total);
    dom.accuracyInRoundTestEl.textContent = "".concat(accuracy.toFixed(0), "%");
    // Farbkodierung für Genauigkeit
    if (accuracy >= 80) {
        dom.accuracyInRoundTestEl.className = 'text-green-600 font-bold';
    }
    else if (accuracy >= 60) {
        dom.accuracyInRoundTestEl.className = 'text-yellow-600 font-bold';
    }
    else {
        dom.accuracyInRoundTestEl.className = 'text-red-600 font-bold';
    }
}
