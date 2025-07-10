// shared/ui/test-result-modal.ts
import type { TestResult } from '../types/trainer';

export function showTestResultModal(testResult: TestResult, testConfig?: any) {
  // Prüfe, ob schon ein Modal existiert
  if (document.getElementById('test-result-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'test-result-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';

  const score = testResult.score;
  const date = new Date(score.timestamp);
  const dateString = date.toLocaleDateString('de-DE') + ' ' + date.toLocaleTimeString('de-DE');

  // Berechne die richtigen Antworten basierend auf der Genauigkeit
  const correctAnswers = score.correct;
  const totalQuestions = score.total;
  
  // Formatiere die Zeit in Minuten:Sekunden
  const minutes = Math.floor(score.duration / 60);
  const seconds = Math.floor(score.duration % 60);
  const timeFormatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full mx-4 text-center animate-fade-in">
      <h2 class="text-2xl font-bold mb-2 text-blue-700">Test abgeschlossen!</h2>
      <div class="mb-4 text-gray-700">
        <div class="text-lg font-semibold mb-1">${testConfig?.testTitle || 'Test'}</div>
        <div class="text-sm text-gray-500 mb-2">${dateString}</div>
      </div>
      
      <!-- Hauptergebnis - groß und klar -->
      <div class="bg-gray-50 rounded-lg p-6 mb-4">
        <div class="text-4xl font-bold ${correctAnswers >= totalQuestions * 0.8 ? 'text-green-600' : correctAnswers >= totalQuestions * 0.5 ? 'text-yellow-600' : 'text-red-600'}">
          ${correctAnswers} von ${totalQuestions}
        </div>
        <div class="text-lg text-gray-600 mt-2">richtig beantwortet</div>
      </div>
      
      <!-- Zeit-Info -->
      <div class="bg-blue-50 rounded-lg p-4 mb-4">
        <div class="text-2xl font-semibold text-blue-700">Zeit: ${timeFormatted}</div>
        <div class="text-sm text-gray-600">Durchschnitt: ${score.averageTimePerQuestion.toFixed(1)}s pro Frage</div>
      </div>
      
      <!-- Zusätzliche Details -->
      <div class="text-sm text-gray-500 mb-4">
        <div>Typ: <span class="font-semibold text-gray-700">${testConfig?.variant === 'chaos' ? 'Chaos' : 'Strukturiert'}</span></div>
        <div>Thema: <span class="font-semibold text-gray-700">${testConfig?.topicId || '-'}</span></div>
      </div>
      
      <button id="close-test-result-modal" class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
        Schließen
      </button>
      <button id="show-my-stats" class="mt-2 ml-2 px-4 py-2 bg-gray-100 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-semibold">
        Meine Statistiken
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  // Schließen-Button
  document.getElementById('close-test-result-modal')?.addEventListener('click', () => {
    modal.remove();
  });

  // Statistiken-Button
  document.getElementById('show-my-stats')?.addEventListener('click', () => {
    modal.remove();
    if ((window as any).rankingUI) {
      (window as any).rankingUI.showUserStats();
    }
  });
} 