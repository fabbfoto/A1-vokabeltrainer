import type { TestScore, TestConfiguration } from '../types/index';

export function showTestResultModal(score: TestScore, testConfig?: TestConfiguration) {
  // Prüfe, ob schon ein Modal existiert
  if (document.getElementById('test-result-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'test-result-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';

  const date = new Date(score.timestamp);
  const dateString = date.toLocaleDateString('de-DE') + ' ' + date.toLocaleTimeString('de-DE');

  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full mx-4 text-center animate-fade-in">
      <h2 class="text-2xl font-bold mb-2 text-blue-700">Test abgeschlossen!</h2>
      <div class="mb-4 text-gray-700">
        <div class="text-lg font-semibold mb-1">${testConfig?.testTitle || 'Test'}</div>
        <div class="text-sm text-gray-500 mb-2">${dateString}</div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-blue-50 rounded-lg p-4">
          <div class="text-2xl font-bold text-blue-600">${score.finalScore}</div>
          <div class="text-xs text-gray-600">Score</div>
        </div>
        <div class="bg-green-50 rounded-lg p-4">
          <div class="text-2xl font-bold text-green-600">${Math.round(score.accuracy)}%</div>
          <div class="text-xs text-gray-600">Genauigkeit</div>
        </div>
        <div class="bg-yellow-50 rounded-lg p-4 col-span-2">
          <div class="text-lg font-semibold text-yellow-700">⏱️ ${Math.floor(score.duration)}s</div>
          <div class="text-xs text-gray-600">Gesamtzeit &nbsp;•&nbsp; Ø ${score.averageTimePerQuestion.toFixed(1)}s/Frage</div>
        </div>
      </div>
      <div class="mb-4 text-sm text-gray-500">
        <div>Typ: <span class="font-semibold text-gray-700">${testConfig?.variant || '-'}</span></div>
        <div>Thema: <span class="font-semibold text-gray-700">${testConfig?.topicId || '-'}</span></div>
        <div>Fragen: <span class="font-semibold text-gray-700">${score.total}</span></div>
      </div>
      <button id="close-test-result-modal" class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">Schließen</button>
      <button id="show-my-stats" class="mt-2 ml-2 px-4 py-2 bg-gray-100 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-semibold">Meine Statistiken</button>
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