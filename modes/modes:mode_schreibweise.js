import { parseNounString, vergleicheAntwort } from '../helfer.js';

export function setupSchreibweiseMode(
    ui,
    { questionDisplayEl, exampleSentenceDisplayEl, typeInputEl, checkTypeButton, wordLineContainerEl, sentenceLineContainerEl },
    { currentWordData, isLaenderCategory },
    { processAnswer }
) {
    ui.style.display = 'block';
    let questionWord;
    let correctAnswerString;
    let exampleSentence = currentWordData.example_en || "";

    if (isLaenderCategory) {
        questionWord = currentWordData.english_country;
        correctAnswerString = currentWordData.country;
        exampleSentence = "";
        typeInputEl.style.width = '';
        typeInputEl.style.maxWidth = '250px';
    } else {
        questionWord = currentWordData.english;
        if (currentWordData.nomen_notation) {
            typeInputEl.style.width = '100%';
            typeInputEl.style.maxWidth = '450px';
            const parsed = parseNounString(currentWordData.nomen_notation);
            if (parsed.isPluralOnly) {
                correctAnswerString = `die ${parsed.singular} (Pl.)`;
            } else {
                const artikelMap = { 'r': 'der', 'e': 'die', 's': 'das' };
                correctAnswerString = `${artikelMap[parsed.genus]} ${parsed.singular}, ${parsed.pluralInfo}`;
            }
        } else {
            typeInputEl.style.width = '';
            typeInputEl.style.maxWidth = '250px';
            correctAnswerString = currentWordData.german;
        }
    }

    questionDisplayEl.textContent = questionWord;
    exampleSentenceDisplayEl.textContent = exampleSentence;
    wordLineContainerEl.style.display = 'flex';
    sentenceLineContainerEl.style.display = 'flex';
    typeInputEl.value = '';
    typeInputEl.disabled = false;
    
    checkTypeButton.onclick = () => {
        processAnswer(vergleicheAntwort(typeInputEl.value, correctAnswerString), correctAnswerString);
        typeInputEl.disabled = true;
    };
    setTimeout(() => typeInputEl.focus(), 100);
    typeInputEl.onkeydown = (event) => { if (event.key === 'Enter') { event.preventDefault(); if (!checkTypeButton.disabled) checkTypeButton.click(); } };
}