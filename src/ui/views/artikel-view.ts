import type { Word } from '@core/types/vocabulary';
import type { TrainerState } from '@core/types/trainer';
import type { DOMElements } from '@core/types/ui';
import { getExampleSentenceText } from '@core/types/vocabulary';

export function renderArtikelUI(
    dom: DOMElements, 
    state: TrainerState, 
    word: Word,
    callbacks: {
        onAnswer: (artikel: string) => void;
        onShowWordInfo: () => void;
    }
): void {
    if (!dom.optionsContainer || !dom.wordDisplay || !dom.exampleDisplay) return;

    // Zeige Wort und Beispielsatz
    dom.wordDisplay.textContent = word.deutsch || word.german;
    dom.wordDisplay.className = 'text-2xl md:text-4xl font-bold text-center mb-4';
    
    if (dom.exampleDisplay && (word.beispiel || word.exampleGerman)) {
        dom.exampleDisplay.textContent = word.beispiel || getExampleSentenceText(word.exampleGerman);
        dom.exampleDisplay.className = 'text-lg md:text-xl text-gray-600 italic text-center mb-8';
    }

    // Artikel-Optionen - WICHTIG: Keine Farben am Anfang!
    const artikelOptionen = ['der', 'die', 'das'];
    dom.optionsContainer.innerHTML = `
        <div class="grid grid-cols-3 gap-4 mb-8">
            ${artikelOptionen.map(artikel => `
                <button 
                    id="artikel-option-${artikel}" 
                    class="artikel-option p-4 md:p-6 text-lg md:text-xl font-medium rounded-lg transition-all duration-200 bg-gray-100 hover:bg-gray-200 text-gray-800"
                    data-artikel="${artikel}">
                    ${artikel}
                </button>
            `).join('')}
        </div>
        <button 
            id="show-word-info" 
            class="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm">
            Wort-Info anzeigen
        </button>
    `;

    // Event Listener
    document.querySelectorAll('.artikel-option').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLButtonElement;
            const artikel = target.dataset.artikel;
            if (artikel) {
                handleArtikelSelection(artikel, word.artikel || '', callbacks.onAnswer);
            }
        });
    });

    const infoButton = document.getElementById('show-word-info');
    if (infoButton) {
        infoButton.addEventListener('click', callbacks.onShowWordInfo);
    }
}

function handleArtikelSelection(
    selectedArtikel: string,
    correctArtikel: string,
    onAnswer: (artikel: string) => void
): void {
    const selectedButton = document.getElementById(`artikel-option-${selectedArtikel}`);
    if (!selectedButton) return;

    const isCorrect = selectedArtikel === correctArtikel;

    // WICHTIG: Erst alle Buttons auf Grau zurücksetzen
    document.querySelectorAll('.artikel-option').forEach(btn => {
        btn.classList.remove('bg-green-500', 'bg-red-500', 'text-white', 'hover:bg-gray-200');
        btn.classList.add('bg-gray-100', 'text-gray-800');
    });

    // Dann Farben setzen basierend auf der Antwort
    if (isCorrect) {
        selectedButton.classList.remove('bg-gray-100', 'text-gray-800');
        selectedButton.classList.add('bg-green-500', 'text-white');
    } else {
        // Falsche Antwort rot
        selectedButton.classList.remove('bg-gray-100', 'text-gray-800');
        selectedButton.classList.add('bg-red-500', 'text-white');
        
        // Richtige Antwort grün
        const correctButton = document.getElementById(`artikel-option-${correctArtikel}`);
        if (correctButton) {
            correctButton.classList.remove('bg-gray-100', 'text-gray-800');
            correctButton.classList.add('bg-green-500', 'text-white');
        }
    }

    // Alle Buttons deaktivieren
    document.querySelectorAll('.artikel-option').forEach(btn => {
        btn.setAttribute('disabled', 'true');
        btn.classList.add('cursor-not-allowed');
    });

    // Callback aufrufen
    onAnswer(selectedArtikel);
} 