import { vergleicheAntwort } from '../helfer.js';

export function setupSatzuebersetzungMode(
    ui,
    { questionDisplayEl, sentenceWordInputContainerEl, checkSentenceButton, wordLineContainerEl },
    { currentWordData },
    { processAnswer }
) {
    ui.style.display = 'block';
    questionDisplayEl.textContent = currentWordData.example_en;
    wordLineContainerEl.style.display = 'flex';

    const germanSentence = currentWordData.example_de;
    const words = germanSentence.split(" ");
    sentenceWordInputContainerEl.innerHTML = '';
    
    const handleEnter = (event) => { 
        if (event.key === 'Enter') { 
            event.preventDefault(); 
            if (!checkSentenceButton.disabled) checkSentenceButton.click(); 
        } 
    };

    words.forEach((word) => {
        const input = document.createElement('input'); 
        input.type = 'text'; 
        input.className = 'word-input-box';
        input.style.width = `${Math.max(word.length, 3) + 2}ch`;
        input.addEventListener('keydown', handleEnter);
        sentenceWordInputContainerEl.appendChild(input);
    });

    checkSentenceButton.onclick = () => {
        const inputs = sentenceWordInputContainerEl.querySelectorAll('input');
        const userInputSentence = Array.from(inputs).map(input => input.value).join(' ');
        processAnswer(vergleicheAntwort(userInputSentence, germanSentence), germanSentence);
        inputs.forEach(input => input.disabled = true);
    };

    if (sentenceWordInputContainerEl.firstChild) {
        setTimeout(() => sentenceWordInputContainerEl.firstChild.focus(), 100);
    }
}