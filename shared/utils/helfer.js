"use strict";
//import { Word } from '../types/index';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.speak = speak;
exports.vergleicheAntwort = vergleicheAntwort;
exports.shuffleArray = shuffleArray;
exports.setUIMode = setUIMode;
exports.splitSentence = splitSentence;
exports.calculateProgressPercentage = calculateProgressPercentage;
exports.getProgressColorClass = getProgressColorClass;
exports.insertTextAtCursor = insertTextAtCursor;
exports.parseNounString = parseNounString;
function speak(text_1) {
    return __awaiter(this, arguments, void 0, function (text, lang) {
        var NETLIFY_FUNCTION_PATH, response, data, audio, error_1;
        if (lang === void 0) { lang = 'de-DE'; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    NETLIFY_FUNCTION_PATH = '/.netlify/functions/getGoogleVoice';
                    if (window.currentAudio) {
                        window.currentAudio.pause();
                        window.currentAudio.currentTime = 0;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetch(NETLIFY_FUNCTION_PATH, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ text: text, lang: lang }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Fehler beim Abrufen der Audio-Datei: ".concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (!data.audioUrl) return [3 /*break*/, 5];
                    audio = new Audio(data.audioUrl);
                    window.currentAudio = audio;
                    return [4 /*yield*/, audio.play()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5: throw new Error('Keine Audio-URL erhalten');
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error('[speak] Fehler beim Abspielen der Sprache:', error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function vergleicheAntwort(userAnswer, correctAnswer, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.ignorePunctuation, ignorePunctuation = _c === void 0 ? false : _c;
    var processedUserAnswer = userAnswer.trim().toLowerCase();
    var processedCorrectAnswer = correctAnswer.trim().toLowerCase();
    if (ignorePunctuation) {
        var punctuationRegex = /[.,;:!?'"„"»«]/g;
        processedUserAnswer = processedUserAnswer.replace(punctuationRegex, "");
        processedCorrectAnswer = processedCorrectAnswer.replace(punctuationRegex, "");
    }
    return processedUserAnswer === processedCorrectAnswer;
}
function shuffleArray(array) {
    var _a;
    var shuffled = __spreadArray([], array, true);
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
    }
    return shuffled;
}
function setUIMode(modeId) {
    console.log("[setUIMode] Aufgerufen mit modeId: ".concat(modeId));
    var uiModes = document.querySelectorAll('.ui-mode');
    console.log("[setUIMode] ".concat(uiModes.length, " Elemente mit Klasse .ui-mode gefunden."));
    if (uiModes.length === 0) {
        console.warn("[setUIMode] Keine Elemente mit der Klasse '.ui-mode' gefunden. UI-Umschaltung funktioniert nicht.");
    }
    uiModes.forEach(function (modeEl) {
        console.log("[setUIMode] Verarbeite Element: #".concat(modeEl.id));
        if (modeEl.id === modeId) {
            console.log("[setUIMode] Zeige Element #".concat(modeEl.id));
            modeEl.classList.remove('hidden-view');
            if (modeEl.id === 'trainer-main-view' || modeEl.id === 'navigation-view') {
                modeEl.style.display = 'flex';
            }
            else {
                modeEl.style.display = 'block';
            }
            console.log("[setUIMode] Style f\u00FCr #".concat(modeEl.id, ": display=").concat(modeEl.style.display, ", Klassen=").concat(modeEl.className));
        }
        else {
            console.log("[setUIMode] Verstecke Element #".concat(modeEl.id));
            modeEl.style.display = 'none';
            console.log("[setUIMode] Style f\u00FCr #".concat(modeEl.id, ": display=").concat(modeEl.style.display, ", Klassen=").concat(modeEl.className));
        }
    });
    var activeElement = document.getElementById(modeId);
    if (activeElement && activeElement.style.display !== 'none') {
        console.log("[setUIMode] Element #".concat(modeId, " sollte jetzt sichtbar sein."));
    }
    else if (activeElement) {
        console.error("[setUIMode] FEHLER: Element #".concat(modeId, " ist nach dem Anzeigen immer noch versteckt! display: ").concat(activeElement.style.display));
    }
    else {
        console.error("[setUIMode] FEHLER: Element mit ID #".concat(modeId, " wurde nicht im DOM gefunden!"));
    }
}
function splitSentence(sentence) {
    if (typeof sentence !== 'string')
        return [];
    return sentence.match(/\S+/g) || [];
}
var currentColorTheme = localStorage.getItem('vokabeltrainer-theme') || 'german';
function calculateProgressPercentage(completed, total) {
    if (total === 0)
        return 0;
    return Math.round((completed / total) * 100);
}
function getProgressColorClass(completed, total) {
    var percentage = calculateProgressPercentage(completed, total);
    if (currentColorTheme === 'german') {
        if (percentage < 34)
            return 'color-black-sr';
        if (percentage < 67)
            return 'color-red-sr';
        return 'color-gold-sr';
    }
    return 'color-original';
}
function insertTextAtCursor(inputElement, text) {
    if (!inputElement)
        return;
    var start = inputElement.selectionStart || 0;
    var end = inputElement.selectionEnd || 0;
    var oldValue = inputElement.value;
    inputElement.value = oldValue.substring(0, start) + text + oldValue.substring(end);
    inputElement.selectionStart = inputElement.selectionEnd = start + text.length;
    inputElement.focus();
    var event = new Event('input', { bubbles: true, cancelable: true });
    inputElement.dispatchEvent(event);
}
function parseNounString(nounString) {
    if (!nounString)
        return null;
    if (nounString.includes('(Pl.)')) {
        return {
            genus: 'e',
            singular: nounString.replace(' (Pl.)', '').trim(),
            pluralInfo: '(Pl.)',
            isPluralOnly: true
        };
    }
    var parts = nounString.split(',');
    if (parts.length < 2) {
        var firstSpaceIndex = nounString.indexOf(' ');
        if (firstSpaceIndex > -1) {
            var genus_1 = nounString.charAt(0);
            var singular_1 = nounString.substring(1, firstSpaceIndex).trim();
            var pluralInfo_1 = nounString.substring(firstSpaceIndex).trim();
            return { genus: genus_1, singular: singular_1, pluralInfo: pluralInfo_1, isPluralOnly: false };
        }
        return null;
    }
    var firstPart = parts[0].trim();
    var genus = firstPart.charAt(0);
    var singular = firstPart.substring(1).trim();
    var pluralInfo = parts[1].trim();
    return { genus: genus, singular: singular, pluralInfo: pluralInfo, isPluralOnly: false };
}
