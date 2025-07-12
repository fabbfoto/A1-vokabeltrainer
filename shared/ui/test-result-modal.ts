// shared/ui/test-result-modal.ts
import type { TestResult, WordTestResult } from '../types/trainer';

interface ExtendedWordTestResult extends WordTestResult {
    word?: any; // Word type
    userAnswer?: string;
    correctAnswer?: string;
}

// Erweitere Window-Interface für exitTestMode
declare global {
  interface Window {
    exitTestMode?: () => void;
    setMode?: (modeId: string, isRepeat: boolean) => void;
    state?: any;
  }
}

export function showTestResultModal(testResult: TestResult, testConfig?: Record<string, unknown>) {
  if (document.getElementById('test-result-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'test-result-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 overflow-y-auto';

  const score = testResult.score;
  const wordResults = testResult.wordResults as ExtendedWordTestResult[];
  
  // Gruppiere Ergebnisse nach richtig/falsch
  const correctWords = wordResults.filter(r => r.correct);
  const incorrectWords = wordResults.filter(r => !r.correct);
  
  // Statistiken
  const avgTimeCorrect = correctWords.length > 0 
      ? correctWords.reduce((sum, r) => sum + r.timeSpent, 0) / correctWords.length 
      : 0;
  const avgTimeIncorrect = incorrectWords.length > 0 
      ? incorrectWords.reduce((sum, r) => sum + r.timeSpent, 0) / incorrectWords.length 
      : 0;

  modal.innerHTML = `
      <div class="bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="text-center mb-6">
              <h2 class="text-3xl font-bold text-blue-700 mb-2">Test-Auswertung</h2>
              <div class="text-lg text-gray-600">${testConfig?.testTitle || 'Test'}</div>
          </div>
          
          <!-- Hauptergebnis -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
              <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                      <div class="text-3xl font-bold ${score.accuracy >= 0.8 ? 'text-green-600' : score.accuracy >= 0.5 ? 'text-yellow-600' : 'text-red-600'}">
                          ${Math.round(score.accuracy * 100)}%
                      </div>
                      <div class="text-sm text-gray-600">Genauigkeit</div>
                  </div>
                  <div>
                      <div class="text-3xl font-bold text-blue-600">${score.correct}/${score.total}</div>
                      <div class="text-sm text-gray-600">Richtige Antworten</div>
                  </div>
                  <div>
                      <div class="text-3xl font-bold text-purple-600">${Math.floor(score.duration / 60)}:${(score.duration % 60).toFixed(0).padStart(2, '0')}</div>
                      <div class="text-sm text-gray-600">Zeit</div>
                  </div>
              </div>
          </div>
          
          <!-- Detaillierte Ergebnisse -->
          <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4">Detaillierte Ergebnisse</h3>
              
              <!-- Falsche Antworten -->
              ${incorrectWords.length > 0 ? `
                  <div class="mb-6">
                      <h4 class="text-lg font-medium text-red-600 mb-3">❌ Falsche Antworten (${incorrectWords.length})</h4>
                      <div class="space-y-2">
                          ${incorrectWords.map(result => `
                              <div class="bg-red-50 border border-red-200 rounded-lg p-3">
                                  <div class="flex justify-between items-start">
                                      <div class="flex-1">
                                          <div class="font-medium">${result.word?.english || 'N/A'}</div>
                                          <div class="text-sm text-gray-600 mt-1">
                                              <span class="text-red-600">Deine Antwort: ${result.userAnswer || '(keine Antwort)'}</span>
                                              <br>
                                              <span class="text-green-600 font-medium">Richtig: ${result.correctAnswer || result.word?.german || 'N/A'}</span>
                                          </div>
                                      </div>
                                      <div class="text-sm text-gray-500">${result.timeSpent.toFixed(1)}s</div>
                                  </div>
                              </div>
                          `).join('')}
                      </div>
                  </div>
              ` : ''}
              
              <!-- Richtige Antworten -->
              <div>
                  <h4 class="text-lg font-medium text-green-600 mb-3">✅ Richtige Antworten (${correctWords.length})</h4>
                  <div class="grid grid-cols-2 gap-2">
                      ${correctWords.map(result => `
                          <div class="bg-green-50 border border-green-200 rounded-lg p-2">
                              <div class="flex justify-between items-center">
                                  <div>
                                      <div class="font-medium text-sm">${result.word?.english || 'N/A'}</div>
                                      <div class="text-xs text-gray-600">${result.word?.german || 'N/A'}</div>
                                  </div>
                                  <div class="text-xs text-gray-500">${result.timeSpent.toFixed(1)}s</div>
                              </div>
                          </div>
                      `).join('')}
                  </div>
              </div>
          </div>
          
          <!-- Statistiken -->
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-2">Zeitanalyse</h4>
              <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>Ø Zeit richtige Antworten: <span class="font-medium">${avgTimeCorrect.toFixed(1)}s</span></div>
                  <div>Ø Zeit falsche Antworten: <span class="font-medium">${avgTimeIncorrect.toFixed(1)}s</span></div>
              </div>
          </div>
          
          <!-- Aktions-Buttons -->
          <div class="flex flex-wrap gap-3 justify-center">
              ${incorrectWords.length > 0 ? `
                  <button id="practice-incorrect-words" class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                      🔄 Falsche Wörter üben (${incorrectWords.length})
                  </button>
              ` : ''}
              
              <button id="save-test-result" class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold">
                  💾 Ergebnis speichern
              </button>
              
              <button id="close-test-result-modal" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  ✅ Schließen
              </button>
          </div>
      </div>
  `;

  document.body.appendChild(modal);

  // Event Handlers
  document.getElementById('close-test-result-modal')?.addEventListener('click', () => {
    modal.remove();
    // Test-Modus beenden
    if (window.exitTestMode && typeof window.exitTestMode === 'function') {
      window.exitTestMode();
    }
  });

  // Falsche Wörter üben
  document.getElementById('practice-incorrect-words')?.addEventListener('click', () => {
    modal.remove();
    
    // Falsche Wörter in die Fehlerliste eintragen
    const incorrectWordIds = incorrectWords.map(r => r.wordId);
    
    if (window.state && window.state.training.currentMode) {
      const mode = window.state.training.currentMode;
      if (!window.state.progress.wordsToRepeatByMode[mode]) {
        window.state.progress.wordsToRepeatByMode[mode] = new Set();
      }
      incorrectWordIds.forEach(id => {
        window.state.progress.wordsToRepeatByMode[mode].add(id);
      });
      
      // Speichern wird automatisch durch ErrorManager gehandhabt
    }
    
    // Test-Modus beenden und Wiederholungsmodus starten
    if (window.exitTestMode) window.exitTestMode();
    if (window.setMode && window.state?.training.currentMode) {
      window.setMode(window.state.training.currentMode, true); // true = Wiederholungsmodus
    }
  });

  // Ergebnis speichern
  document.getElementById('save-test-result')?.addEventListener('click', () => {
    // Langzeit-Statistik speichern
    const testHistory = JSON.parse(localStorage.getItem('test-history') || '[]');
    testHistory.push({
      date: new Date().toISOString(),
      score: score,
      wordResults: wordResults.map(r => ({
        wordId: r.wordId,
        correct: r.correct,
        timeSpent: r.timeSpent
      })),
      config: testConfig
    });
    
    // Maximal 100 Tests speichern
    if (testHistory.length > 100) {
      testHistory.shift();
    }
    
    localStorage.setItem('test-history', JSON.stringify(testHistory));
    
    // Feedback
    const button = document.getElementById('save-test-result') as HTMLButtonElement;
    button.textContent = '✅ Gespeichert!';
    button.disabled = true;
    button.classList.add('opacity-50');
  });
} 