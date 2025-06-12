import { parseNounString, formatPluralInfoForDisplay } from '../helfer.js';

export function setupBedeutungMode(
    ui,
    { questionDisplayEl, exampleSentenceDisplayEl, audioWordButtonEl, audioSentenceButtonEl, mcAnswersContainerEl, wordLineContainerEl, sentenceLineContainerEl },
    { currentWordData, alleVokabeln, isLaenderCategory },
    { speak, processAnswer, shuffleArray, SVG_SPEAKER_ICON }
) {
    ui.style.display = 'block';
    let displayGermanWord;
    let correctAnswerEN;

    if (isLaenderCategory) {
        displayGermanWord = currentWordData.country;
        correctAnswerEN = currentWordData.english_country;
    } else {
        displayGermanWord = currentWordData.german;
        correctAnswerEN = currentWordData.english;
        if (currentWordData.nomen_notation) {
             const parsed = parseNounString(currentWordData.nomen_notation);
             if (parsed && !parsed.isPluralOnly) {
                const artikelMap = { 'r': 'der', 'e': 'die', 's': 'das' };
                const formattedPlural = formatPluralInfoForDisplay(parsed.pluralInfo, parsed.singular);
                displayGermanWord = `${artikelMap[parsed.genus] || ''} ${parsed.singular}, ${formattedPlural}`;
            } else if (parsed && parsed.isPluralOnly) {
                displayGermanWord = `die ${parsed.singular} (Pl.)`;
            }
        }
    }

    questionDisplayEl.textContent = displayGermanWord;
    exampleSentenceDisplayEl.textContent = currentWordData.example_de;
    audioWordButtonEl.innerHTML = SVG_SPEAKER_ICON;
    audioWordButtonEl.onclick = () => speak(displayGermanWord);
    audioSentenceButtonEl.innerHTML = SVG_SPEAKER_ICON;
    audioSentenceButtonEl.onclick = () => speak(currentWordData.example_de, 'de-DE');
    wordLineContainerEl.style.display = 'flex';
    sentenceLineContainerEl.style.display = 'flex';
    audioWordButtonEl.style.display = 'block';
    audioSentenceButtonEl.style.display = 'block';

    let potentialDistractors = shuffleArray(alleVokabeln.map(v => (v.english || v.english_country || "??").split(',')[0].trim()).filter(e => e !== correctAnswerEN && e !== "??")).slice(0, 3);
    let options = shuffleArray([correctAnswerEN, ...potentialDistractors]);
    mcAnswersContainerEl.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'answer-button w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg';
        button.textContent = option;
        button.onclick = () => processAnswer(option === correctAnswerEN, correctAnswerEN);
        mcAnswersContainerEl.appendChild(button);
    });
}