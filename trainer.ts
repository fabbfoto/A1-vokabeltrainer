// trainer.ts - ENDGÜLTIGE, VOLLSTÄNDIGE UND KORRIGIERTE VERSION

import type {
    Word,
    TrainerState,
    VocabularyStructure,
    LearningModes,
    UICallbacks,
    AuthUI,
    ModeId,
    TopicId,
    SubTopicId,
    WordId,
    TestScore,
    TestConfiguration,
    TestResult,
    TestId,
    TestType,
    TestCategory
} from './src/core/types/trainer';

import { dom } from './dom';
import type { DOMElements } from './src/core/types/ui';
import { vokabular } from './vokabular';
import { shuffleArray } from './src/utils/helfer';
import * as uiModes from './src/utils/ui-modes';
import * as ui from './src/ui/views/index';
import { NavigationEvents } from './src/core/events/navigation-events';
import { updateErrorCounts } from './src/ui/views/statistics';
import { generateTestQuestions, TestGenerationResult } from './src/utils/test-generator';
import { calculateTestScore, calculateAverageTimePerQuestion, CATEGORY_MODE_MAP } from './src/core/types/trainer';
import { showTestResultModal } from './src/ui/components/test-result-modal';
import { ModeManager } from './src/services/mode-manager';
import { ErrorCounterManager } from './src/services/error-counter-manager';
// import { validateVocabulary } from './validate-vocabulary'; // TEMPORÄR DEAKTIVIERT
import { supabase, supabaseAuth, supabaseProgress } from './src/services/supabase';

let currentUser: any = null;

// ========== SUPABASE AUTH BUTTON ==========
async function createAuthButton() {
  const authContainer = document.getElementById('auth-button-container');
  if (!authContainer) return;
  
  // WICHTIG: Warte kurz, damit Supabase den State aktualisieren kann
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Vorherige Buttons entfernen
  authContainer.innerHTML = '';

  // Prüfe den aktuellen Anmeldestatus
  const user = await supabaseAuth.getUser();
  
  if (user) {
    // Benutzer ist angemeldet - zeige Abmelde-Button
    const button = document.createElement('button');
    button.className = 'w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg hover:brightness-110 transition-colors flex items-center gap-2 shadow-lg font-semibold justify-center';
    
    // Zeige den richtigen Namen
    const displayName = user.user_metadata?.anonymous_username || user.email || 'Angemeldet';
    button.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"/></svg><span>Abmelden (${displayName})</span>`;
    
    button.addEventListener('click', async () => {
      if (confirm('Möchtest du dich wirklich abmelden?')) {
        try {
          await supabaseAuth.signOut();
          alert('Erfolgreich abgemeldet!');
          createAuthButton();
        } catch (error) {
          console.error('Fehler beim Abmelden:', error);
          alert('Fehler beim Abmelden: ' + (error as Error).message);
        }
      }
    });
    
    authContainer.appendChild(button);
  } else {
    // Benutzer ist nicht angemeldet - zeige Anmelde-Button
    const button = document.createElement('button');
    button.className = 'w-full px-4 py-2 bg-gradient-to-r from-black via-[#F23054] to-[#F2AE2E] text-white rounded-lg hover:brightness-110 transition-colors flex items-center gap-2 shadow-lg font-semibold justify-center';
    button.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"/></svg><span>Anmelden</span>`;

    // Dropdown-Menü (wie gehabt)
    const dropdown = document.createElement('div');
    dropdown.className = 'hidden absolute right-0 mt-2 w-64 bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-lg shadow-xl p-4 flex flex-col gap-2';
    dropdown.style.minWidth = '220px';

    // DSGVO-konforme Optionen zuerst anzeigen
    const dsgvoHeader = document.createElement('div');
    dsgvoHeader.className = 'text-xs text-blue-200 font-semibold mb-2 border-b border-blue-700 pb-2';
    dsgvoHeader.textContent = 'DSGVO-konform & anonym';

    // Anonymer Benutzername Option (Empfohlen)
    const anonymousBtn = document.createElement('button');
    anonymousBtn.className = 'w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-700 transition-colors text-left';
    anonymousBtn.innerHTML = `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg><div><div class="font-semibold">Anonym lernen</div><div class="text-xs text-blue-300">Mit Benutzername anmelden/registrieren</div></div>`;

    // Anonymer Benutzername Formular
    const anonymousForm = document.createElement('form');
    anonymousForm.className = 'flex flex-col gap-2 mt-2';
    anonymousForm.innerHTML = `
      <input type="text" name="username" placeholder="Dein Benutzername (min. 6 Zeichen)" class="px-3 py-2 rounded bg-blue-900 text-white placeholder-blue-300 focus:outline-none text-sm" />
      <input type="password" name="password" placeholder="Passwort (min. 6 Zeichen)" class="px-3 py-2 rounded bg-blue-900 text-white placeholder-blue-300 focus:outline-none text-sm" />
      <button type="submit" class="bg-blue-700 hover:bg-blue-800 rounded px-3 py-2 mt-1 text-sm">Anmelden / Registrieren</button>
      <div class="text-xs text-blue-300 mt-1">
        • Existiert dein Account? → Du wirst angemeldet<br>
        • Neu hier? → Account wird erstellt
      </div>
      <button type="button" class="text-xs text-blue-200 hover:underline mt-1" id="cancel-anonymous">Abbrechen</button>
    `;
    anonymousForm.style.display = 'none';

    anonymousForm.onsubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      const usernameInput = anonymousForm.querySelector('input[name="username"]') as HTMLInputElement;
      const passwordInput = anonymousForm.querySelector('input[name="password"]') as HTMLInputElement;
      
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      
      // Validierung
      if (username.length < 6) {
        alert('Benutzername muss mindestens 6 Zeichen lang sein');
        usernameInput.focus();
        return;
      }
      
      if (password.length < 6) {
        alert('Passwort muss mindestens 6 Zeichen lang sein');
        passwordInput.focus();
        return;
      }
      
      console.log('🔄 Starte Anmeldung für:', username);
      
      const submitButton = anonymousForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Prüfe...';
      
      try {
        // WICHTIG: Zuerst prüfen ob der Benutzer existiert
        // Versuche zuerst einen Login
        try {
          console.log('🔄 Versuche Login mit vorhandenem Account...');
          const loginResult = await supabaseAuth.loginWithAnonymousUsername(username, password);
          console.log('✅ Login erfolgreich:', loginResult);
          alert('Willkommen zurück, ' + username + '!');
          dropdown.classList.add('hidden');
          anonymousForm.reset();
          createAuthButton();
          return; // Wichtig: Hier beenden wenn Login erfolgreich
        } catch (loginError) {
          const loginErrorMessage = (loginError as Error).message;
          
          // Nur wenn der Login fehlschlägt weil der Account nicht existiert, 
          // versuchen wir eine Registrierung
          if (loginErrorMessage.includes('Benutzername oder Passwort falsch') || 
              loginErrorMessage.includes('Invalid login credentials')) {
            console.log('🔄 Account existiert nicht, versuche Registrierung...');
            submitButton.textContent = 'Registriere...';
            
            try {
              const result = await supabaseAuth.signInWithAnonymousUsername(username, password);
              console.log('✅ Registrierung erfolgreich:', result);
              alert('Willkommen, ' + username + '! Dein Account wurde erstellt.');
              dropdown.classList.add('hidden');
              anonymousForm.reset();
              createAuthButton();
            } catch (registerError) {
              const registerErrorMessage = (registerError as Error).message;
              console.error('❌ Registrierung fehlgeschlagen:', registerErrorMessage);
              
              if (registerErrorMessage.includes('Benutzername bereits vergeben')) {
                alert('Dieser Benutzername ist bereits vergeben. Bitte wähle einen anderen.');
              } else {
                alert('Fehler bei der Registrierung: ' + registerErrorMessage);
              }
            }
          } else {
            // Anderer Login-Fehler (falsches Passwort etc.)
            console.error('❌ Login fehlgeschlagen:', loginErrorMessage);
            alert('Login fehlgeschlagen: ' + loginErrorMessage);
          }
        }
      } catch (error) {
        console.error('❌ Unerwarteter Fehler:', error);
        alert('Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut.');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText || 'Registrieren';
      }
    };

    anonymousBtn.onclick = () => {
      anonymousBtn.style.display = 'none';
      anonymousForm.style.display = '';
    };

    anonymousForm.querySelector('#cancel-anonymous')!.addEventListener('click', () => {
      anonymousForm.style.display = 'none';
      anonymousBtn.style.display = '';
    });

    // Trennlinie
    const divider = document.createElement('div');
    divider.className = 'text-xs text-blue-300 text-center my-2 border-t border-blue-700 pt-2';
    divider.textContent = 'oder';

    // Google-Login-Option
    const googleBtn = document.createElement('button');
    googleBtn.className = 'w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-700 transition-colors';
    googleBtn.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.318 13.084A7.963 7.963 0 0018 10c0-.638-.07-1.257-.2-1.852H10v3.504h4.318z"/><path d="M10 18c2.16 0 3.97-.72 5.293-1.963l-2.56-2.09C11.97 14.633 11.05 15 10 15c-2.07 0-3.82-1.4-4.44-3.29H2.86v2.07A7.997 7.997 0 0010 18z"/><path d="M5.56 11.71A4.978 4.978 0 015 10c0-.34.03-.67.09-.99V6.94H2.86A7.997 7.997 0 002 10c0 1.26.29 2.45.8 3.5l2.76-1.79z"/><path d="M10 5c1.13 0 2.14.39 2.94 1.15l2.2-2.2C17.45 2.09 14.97 1 12 1 7.7 1 3.44 4.24 2.86 6.94l2.7 2.09C6.18 7.4 7.93 6 10 6z"/></svg><span>Mit Google anmelden</span>`;
    googleBtn.onclick = () => {
      supabaseAuth.signInWithGoogle().catch(error => {
        console.error('Login-Fehler:', error);
        alert('Login fehlgeschlagen. Bitte versuche es später erneut.');
      });
    };

    // E-Mail-Login-Option
    const emailBtn = document.createElement('button');
    emailBtn.className = 'w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-700 transition-colors';
    emailBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm8 0a8 8 0 11-16 0 8 8 0 0116 0z"/></svg><span>Mit E-Mail anmelden</span>`;

    // E-Mail-Login-Formular (wird beim Klick auf emailBtn angezeigt)
    const emailForm = document.createElement('form');
    emailForm.className = 'flex flex-col gap-2 mt-2';
    emailForm.innerHTML = `
      <input type="email" name="email" placeholder="E-Mail" required class="px-3 py-2 rounded bg-blue-900 text-white placeholder-blue-300 focus:outline-none" />
      <input type="password" name="password" placeholder="Passwort" required class="px-3 py-2 rounded bg-blue-900 text-white placeholder-blue-300 focus:outline-none" />
      <button type="submit" class="bg-blue-700 hover:bg-blue-800 rounded px-3 py-2 mt-1">Login</button>
      <button type="button" class="text-xs text-blue-200 hover:underline mt-1" id="cancel-email-login">Abbrechen</button>
    `;
    emailForm.style.display = 'none';

    emailForm.onsubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(emailForm);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        alert('Login fehlgeschlagen: ' + error.message);
      } else {
        dropdown.classList.add('hidden');
        emailForm.reset();
        createAuthButton();
      }
    };
    emailForm.querySelector('#cancel-email-login')!.addEventListener('click', () => {
      emailForm.style.display = 'none';
      emailBtn.style.display = '';
    });

    emailBtn.onclick = () => {
      emailBtn.style.display = 'none';
      emailForm.style.display = '';
    };

    // DSGVO-Hinweis
    const dsgvoInfo = document.createElement('div');
    dsgvoInfo.className = 'text-xs text-blue-200 mt-2 p-2 bg-blue-900/50 rounded';
    dsgvoInfo.innerHTML = `
      <div class="font-semibold mb-1">🔒 DSGVO-konform</div>
      <div>• Anonymer Benutzername: Keine E-Mail, keine persönlichen Daten</div>
      <div>• Passwort wird für Sicherheit benötigt</div>
      <div>• Fortschritt wird gespeichert</div>
      <div>• Du kannst dich immer wieder anmelden</div>
    `;

    // Elemente zum Dropdown hinzufügen
    dropdown.appendChild(dsgvoHeader);
    dropdown.appendChild(anonymousBtn);
    dropdown.appendChild(anonymousForm);
    dropdown.appendChild(divider);
    dropdown.appendChild(googleBtn);
    dropdown.appendChild(emailBtn);
    dropdown.appendChild(emailForm);
    dropdown.appendChild(dsgvoInfo);

    // Dropdown-Logik
    let dropdownOpen = false;
    
    // Verhindere das Schließen des Dropdowns bei Klicks innerhalb
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    // Verhindere das Schließen bei Formular-Submission
    dropdown.addEventListener('submit', (e) => {
      e.stopPropagation();
    });
    
    button.onclick = (e) => {
      e.stopPropagation();
      dropdownOpen = !dropdownOpen;
      if (dropdownOpen) {
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    };

    // Schließe Dropdown bei Klick außerhalb
    document.addEventListener('click', () => {
      dropdownOpen = false;
      dropdown.classList.add('hidden');
    });

    // Container für Button und Dropdown
    const container = document.createElement('div');
    container.className = 'relative';
    container.appendChild(button);
    container.appendChild(dropdown);
    authContainer.appendChild(container);
  }
}
// ========== ENDE AUTH BUTTON ==========

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {

    // NEU: Firebase Auth initialisieren
    let authUI: AuthUI = {
        show: () => {},
        hide: () => {},
        container: null
    };
    let syncService: any; // SyncService wurde entfernt
    let rankingService: any; // RankingService wurde entfernt

    try {
        // Firebase Auth initialisieren
        
        authUI = {
            show: () => { },
            hide: () => { },
            container: null
        };
        
        syncService = {
            db: null,
            unsubscribe: null,
            trainerType: 'a1-vokabeltrainer',
            listeners: new Map(),
            authService: null,
            syncStatus: 'disconnected',
            onSyncUpdate: () => { },
            saveProgress: async () => { },
            saveTestScores: async () => { },
            loadProgress: async () => ({}),
            loadTestScores: async () => ({}),
            startRealtimeSync: () => { },
            stopRealtimeSync: () => { },
            syncProgress: async () => { },
            syncTestScores: async () => { },
            notifyListeners: () => { },
            clearListeners: () => { },
            getSyncStatus: () => 'disconnected',
            isConnected: () => false,
            getLastSyncTime: () => null
        } as unknown as any; // SyncService wurde entfernt
        
        rankingService = {
            authService: null,
            submitTestResult: async () => { 
                return 'mock-result-id';
            },
            getRankings: async () => [],
            getUserStats: async () => null,
            getTopicRankings: async () => [],
            getWeeklyRankings: async () => [],
            getGlobalRankings: async () => [],
            getTestTypeRankings: async () => [],
            getCurrentUserRanking: async () => null,
            getTopUsers: async () => [],
            getWeeklyTopUsers: async () => []
        } as unknown as any; // RankingService wurde entfernt
    } catch (error) {
        console.error('Initialisierung von syncService/rankingService fehlgeschlagen:', error);
    }

    NavigationEvents.dispatchRoot();
    
    // NEU: Tastenkombination zum Schließen des "Perfekt!"-Popups
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ui.closeSuccessPopup(dom);
        }
    });

    const state: TrainerState = {
        navigation: {
            currentMainTopic: null,
            currentSubTopic: null,
            previousMainTopic: null,
            previousSubTopic: null,
            lastUsedModeByTopic: {},
        },
        training: {
            currentVocabularySet: [],
            shuffledWordsForMode: [],
            currentWordIndex: 0,
            currentWord: null,
            currentMode: null,
            sessionId: null,
            isRepeatSessionActive: false,
            isCorrectionMode: false,
            correctInCurrentRound: 0,
            attemptedInCurrentRound: 0,
            sessionStats: [],
            activeTextInput: null,
            isLoading: false,
            currentError: null,
        },
        progress: {
            globalProgress: {} as Record<string, Record<string, Set<WordId>>>,
            masteredWordsByMode: {},
            wordsToRepeatByMode: {},
            perfectRunsByMode: {},
            lastTestScores: {},
        },
        
        // Test State
        test: {
            isTestModeActive: false,
            currentTest: null,
            testResults: [],
            testModeRotation: [] as ModeId[],
            currentTestModeIndex: 0,
            testStartTime: null,
            currentQuestionStartTime: null,
            questionTimes: [],
            lastTestScores: {},
            isRepeatSessionActive: false,
        },
        
        // UI-bezogene Properties
        isCorrectionMode: false,
    };

    supabaseAuth.onAuthStateChange(async (user) => {
      currentUser = user;
      if (user) {
        console.log('✅ Angemeldet als:', user.email);
        // Progress von Supabase laden
        try {
          const cloudProgress = await supabaseProgress.load();
          if (cloudProgress) {
            console.log('☁️ Cloud-Progress erhalten:', cloudProgress);
            
            // Merge Cloud-Progress mit lokalem Progress
            Object.keys(cloudProgress).forEach(topicKey => {
              if (!state.progress.globalProgress[topicKey]) {
                state.progress.globalProgress[topicKey] = {};
              }
              
              Object.keys(cloudProgress[topicKey]).forEach(mode => {
                const cloudData = cloudProgress[topicKey][mode];
                const localData = state.progress.globalProgress[topicKey][mode as ModeId];
                
                if (Array.isArray(cloudData)) {
                  // Merge Cloud und lokale Daten
                  const mergedSet = new Set<WordId>();
                  
                  // Füge lokale Daten hinzu (falls vorhanden)
                  if (localData instanceof Set) {
                    localData.forEach(id => mergedSet.add(id));
                  }
                  
                  // Füge Cloud-Daten hinzu
                  cloudData.forEach(id => mergedSet.add(id as WordId));
                  
                  state.progress.globalProgress[topicKey][mode as ModeId] = mergedSet;
                  console.log(`Merged ${topicKey}/${mode}: ${mergedSet.size} Wörter`);
                }
              });
            });
            
            // Speichere den gemergten Progress lokal
            saveProgress();
            console.log('✅ Cloud-Progress gemerged und gespeichert');
            
            // UI aktualisieren um die geladenen Daten anzuzeigen
            // Nur wenn bereits in Trainings-Ansicht
            if (state.navigation.currentMainTopic && state.navigation.currentSubTopic) {
              if (typeof ui?.showTrainingModes === 'function') {
                ui.showTrainingModes(dom, state);
              }
            }
          }
        } catch (error) {
          console.error('Fehler beim Laden aus Cloud:', error);
        }
      } else {
        console.log('🚪 Ausgeloggt');
        // Progress-State NICHT zurücksetzen - nur lokal speichern
        // Der lokale Progress bleibt erhalten für den Fall einer Wiederanmeldung
        saveProgress();
        
        // UI aktualisieren um den aktuellen lokalen Stand anzuzeigen
        // Nur wenn bereits in Trainings-Ansicht
        if (state.navigation.currentMainTopic && state.navigation.currentSubTopic) {
          if (typeof ui?.showTrainingModes === 'function') {
            ui.showTrainingModes(dom, state);
          }
        }
      }
    });

    // Test-Tracking für detaillierte Auswertung
    const testAnswerLog: Array<{
        word: Word;
        userAnswer: string;
        correctAnswer: string;
        isCorrect: boolean;
        mode: ModeId;
        timeSpent: number;
    }> = [];

    // ErrorManager initialisieren
    const errorManager = new ErrorCounterManager(state);

    // Registriere UI-Update Callback
    errorManager.onUpdate(() => {
        try {
            console.log('[ErrorManager] UI Update triggered');
            updateRepeatButtons();
        } catch (error) {
            console.error('[ErrorManager] UI Update failed:', error);
        }
    });

    // Lade gespeicherte Fehler
    try {
        errorManager.loadFromStorage();
    } catch (error) {
        console.error('[ErrorManager] Failed to load from storage:', error);
    }

    function loadProgress(): void {
        console.log('📂 Lade Progress...');
        // Versuche zuerst trainer-progress aus localStorage
        let saved = localStorage.getItem('trainer-progress');
        // Falls nicht vorhanden, versuche Firebase-Key
        if (!saved) {
            const firebaseSaved = localStorage.getItem('a1ThemenProgress');
            if (firebaseSaved) {
                try {
                    const firebaseData = JSON.parse(firebaseSaved);
                    const converted: Record<string, Record<string, string[]>> = {};
                    for (const hauptthema in firebaseData) {
                        for (const unterthema in firebaseData[hauptthema]) {
                            const key = `${hauptthema}|${unterthema}`;
                            converted[key] = firebaseData[hauptthema][unterthema];
                        }
                    }
                    saved = JSON.stringify(converted);
                } catch (e) {
                    console.error('❌ Fehler bei Firebase-Konvertierung:', e);
                }
            }
        }
        // Lade Progress und stelle SICHER dass es Sets sind
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                state.progress.globalProgress = {};
                Object.keys(parsed).forEach(topicKey => {
                    state.progress.globalProgress[topicKey] = {};
                    if (typeof parsed[topicKey] === 'object' && parsed[topicKey] !== null) {
                        Object.keys(parsed[topicKey]).forEach(mode => {
                            const data = parsed[topicKey][mode];
                            if (Array.isArray(data)) {
                                state.progress.globalProgress[topicKey][mode as ModeId] = new Set(data);
                            } else if (data instanceof Set) {
                                state.progress.globalProgress[topicKey][mode as ModeId] = data;
                            } else {
                                state.progress.globalProgress[topicKey][mode as ModeId] = new Set();
                            }
                        });
                    } else {
                        console.warn(`⚠️ Ungültige Daten für ${topicKey}`);
                    }
                });
                console.log('✅ Progress geladen:', Object.keys(state.progress.globalProgress).length, 'Themen');
                
                // UI aktualisieren um den geladenen Progress anzuzeigen
                if (typeof ui?.showTrainingModes === 'function') {
                    ui.showTrainingModes(dom, state);
                }
            } catch (e) {
                console.error('❌ Fehler beim Laden des Progress:', e);
                state.progress.globalProgress = {};
            }
        } else {
            state.progress.globalProgress = {};
        }
    }

    function reloadProgressFromFirebase(): void {
        console.log('🔄 Versuche Progress von Firebase neu zu laden...');
        // Warte kurz, bis Firebase bereit ist
        setTimeout(() => {
            const firebaseSaved = localStorage.getItem('trainer-progress-firebase');
            if (firebaseSaved) {
                try {
                    const parsed = JSON.parse(firebaseSaved);
                    console.log('📥 Firebase-Progress gefunden, merge mit lokalem State...');
                    // Merge Firebase-Daten mit existierendem State
                    Object.keys(parsed).forEach(topicKey => {
                        if (!state.progress.globalProgress[topicKey]) {
                            state.progress.globalProgress[topicKey] = {};
                        }
                        if (typeof parsed[topicKey] === 'object' && parsed[topicKey] !== null) {
                            Object.keys(parsed[topicKey]).forEach(mode => {
                                const data = parsed[topicKey][mode];
                                if (Array.isArray(data) && data.length > 0) {
                                    // Merge Arrays - behalte alle einzigartigen Werte
                                    const existingSet = state.progress.globalProgress[topicKey][mode as ModeId] || new Set();
                                    const newSet = new Set([...existingSet, ...data]);
                                    state.progress.globalProgress[topicKey][mode as ModeId] = newSet;
                                }
                            });
                        }
                    });
                    // Speichere gemergten Progress
                    saveProgress();
                    console.log('✅ Firebase-Progress erfolgreich gemerged');
                    // UI aktualisieren - aber nur wenn bereits in Trainings-Ansicht
                    if (state.navigation.currentMainTopic && state.navigation.currentSubTopic) {
                        ui.showTrainingModes(dom, state);
                    }
                } catch (e) {
                    console.error('❌ Fehler beim Mergen des Firebase-Progress:', e);
                }
            }
        }, 2000); // 2 Sekunden warten
    }

    function saveProgress(): void {
        try {
            // Immer lokal speichern
            localStorage.setItem('trainer-progress', JSON.stringify(state.progress.globalProgress));
            console.log('💾 Lokaler Progress gespeichert');
            
            // Wenn angemeldet, auch in Supabase speichern
            if (currentUser) {
                // Konvertiere Sets zu Arrays für JSON
                const progressToSave: any = {};
                Object.keys(state.progress.globalProgress).forEach(topicKey => {
                    progressToSave[topicKey] = {};
                    Object.keys(state.progress.globalProgress[topicKey]).forEach(mode => {
                        const data = state.progress.globalProgress[topicKey][mode];
                        if (data instanceof Set) {
                            progressToSave[topicKey][mode] = Array.from(data);
                        } else {
                            progressToSave[topicKey][mode] = data;
                        }
                    });
                });
                
                // Async speichern mit Rückgabewert-Verarbeitung
                supabaseProgress.save(progressToSave).then(result => {
                    if (result.success) {
                        console.log('✅ Cloud-Speicherung erfolgreich:', result);
                    } else {
                        console.error('❌ Cloud-Speicherung fehlgeschlagen:', result);
                        // Zeige Benutzer-Feedback
                        if (typeof ui?.showMessage === 'function') {
                            ui.showMessage(dom, 'Cloud-Speicherung fehlgeschlagen - Daten nur lokal gespeichert', 'error');
                        }
                    }
                }).catch(error => {
                    console.error('❌ Unerwarteter Cloud-Speicherfehler:', error);
                });
            } else {
                console.log('ℹ️ Nicht angemeldet - nur lokal gespeichert');
            }
        } catch (e) {
            console.warn('Fehler beim Speichern:', e);
        }
    }

    function loadMasteredWords(): void {
        const saved = localStorage.getItem('trainer-mastered-words');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                Object.keys(parsed).forEach(mode => {
                    state.progress.masteredWordsByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
                });
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden der mastered words:', e);
            }
        }
    }

    function saveMasteredWords(): void {
        try {
            const toSave: Record<string, WordId[]> = {};
            Object.keys(state.progress.masteredWordsByMode).forEach(key => {
                const mode = key as ModeId;
                toSave[mode] = Array.from(state.progress.masteredWordsByMode[mode]!);
            });
            localStorage.setItem('trainer-mastered-words', JSON.stringify(toSave));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern mastered words:', e);
        }
    }

    // loadWordsToRepeat und saveWordsToRepeat wurden durch ErrorCounterManager ersetzt

    function loadLastTestScores(): void {
        const saved = localStorage.getItem('trainer-last-test-scores');
        if (saved) {
            try {
                state.test.lastTestScores = JSON.parse(saved);
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden test scores:', e);
            }
        }
    }

    function saveLastTestScores(): void {
        try {
            localStorage.setItem('trainer-last-test-scores', JSON.stringify(state.test.lastTestScores));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern test scores:', e);
        }
    }

    function loadPerfectRuns(): void {
        const saved = localStorage.getItem('trainer-perfect-runs');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Stelle sicher, dass die Werte Zahlen sind
                Object.keys(parsed).forEach(mode => {
                    const value = parsed[mode];
                    if (typeof value === 'number' && value >= 0) {
                        state.progress.perfectRunsByMode[mode as ModeId] = value;
                    } else {
                        state.progress.perfectRunsByMode[mode as ModeId] = 0;
                    }
                });
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden der perfect runs:', e);
                state.progress.perfectRunsByMode = {};
            }
        }
    }

    function savePerfectRuns(): void {
        try {
            localStorage.setItem('trainer-perfect-runs', JSON.stringify(state.progress.perfectRunsByMode));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern perfect runs:', e);
        }
    }



    function updateRepeatButtons(): void {
        console.log('[updateRepeatButtons] Called');
        
        // Robuste Implementierung
        Object.keys(learningModes).forEach((modeId) => {
            try {
                const button = document.getElementById(`mode-repeat-${modeId}`);
                if (!button) {
                    console.warn(`Button nicht gefunden: mode-repeat-${modeId}`);
                    return;
                }
                
                const countSpan = button.querySelector('.count-display');
                if (!countSpan) {
                    console.warn(`Count-Display nicht gefunden für ${modeId}`);
                    return;
                }
                
                // Fehleranzahl abrufen
                const errorCount = errorManager.getErrorCount(modeId as ModeId);
                
                // UI direkt aktualisieren
                countSpan.textContent = errorCount.toString();
                
                // Button-Status
                if (errorCount === 0) {
                    button.classList.add('opacity-50', 'cursor-not-allowed');
                    button.setAttribute('disabled', 'true');
                } else {
                    button.classList.remove('opacity-50', 'cursor-not-allowed');
                    button.removeAttribute('disabled');
                }
                
                console.log(`[updateRepeatButtons] ${modeId}: ${errorCount} Fehler`);
            } catch (error) {
                console.error(`[updateRepeatButtons] Fehler bei ${modeId}:`, error);
            }
        });
    }

    // Test-Funktion für Supabase-Verbindung
    async function testSupabaseConnection() {
        console.log('🧪 Teste Supabase-Verbindung...');
        const isConnected = await supabaseProgress.testConnection();
        
        if (isConnected) {
            console.log('✅ Supabase-Verbindung funktioniert');
            if (typeof ui?.showMessage === 'function') {
                ui.showMessage(dom, 'Supabase-Verbindung: OK', 'success');
            }
        } else {
            console.error('❌ Supabase-Verbindung fehlgeschlagen');
            if (typeof ui?.showMessage === 'function') {
                ui.showMessage(dom, 'Supabase-Verbindung: FEHLER - Daten nur lokal gespeichert', 'error');
            }
        }
        
        return isConnected;
    }

    // Teste Verbindung beim Start
    testSupabaseConnection();

    loadProgress();
    loadMasteredWords();
    // loadWordsToRepeat() wird jetzt durch errorManager.loadFromStorage() ersetzt
    loadLastTestScores();
    loadPerfectRuns();

    function processAnswer(isCorrect: boolean, correctAnswer?: string, timeSpent?: number, userAnswer?: string): void {
        console.log('🔧 processAnswer:', { isCorrect, correctAnswer, userAnswer, testMode: state.test.isTestModeActive });
        
        // NEU: Spezieller Fall für "continue" - direkt zur nächsten Aufgabe
        if (userAnswer === 'continue') {
            loadNextTask();
            return;
        }
        
        state.training.attemptedInCurrentRound++;

        // BUGFIX: Bei der letzten Aufgabe sicherstellen, dass die Statistik aktualisiert wird
        const isLastQuestion = state.training.currentWordIndex === state.training.shuffledWordsForMode.length - 1;
        if (isLastQuestion) {
            console.log('[BUGFIX] Letzte Aufgabe - Force Update der Statistik');
        }

        // WICHTIG: updateStatistics in Try-Catch wrappen
        try {
            updateStatistics();
            
            // BUGFIX: Bei der letzten Aufgabe nochmal verzögert aktualisieren
            if (isLastQuestion) {
                setTimeout(() => {
                    console.log('[BUGFIX] Verzögertes Update für letzte Aufgabe');
                    updateStatistics();
                    // Hauptfortschrittsbalken wurde entfernt - keine DOM-Manipulation mehr nötig
                }, 100);
            }
        } catch (error) {
            console.error('❌ Statistik-Update fehlgeschlagen:', error);
        }
        
        // KRITISCH: Korrektur IMMER anzeigen im Lernmodus, egal was passiert
        if (!state.test.isTestModeActive && !isCorrect && correctAnswer) {
            console.log('🔴 Zeige Korrektur für:', correctAnswer);
            
            // Direkt die DOM-Elemente manipulieren
            if (dom.correctionSolutionEl) {
                dom.correctionSolutionEl.textContent = correctAnswer;
                dom.correctionSolutionEl.classList.remove('hidden');
                dom.correctionSolutionEl.style.display = 'block';
                dom.correctionSolutionEl.style.color = '#ef4444';
                dom.correctionSolutionEl.style.fontSize = '1.5rem';
                dom.correctionSolutionEl.style.fontWeight = 'bold';
            }
            
            if (dom.continueButton) {
                dom.continueButton.classList.remove('hidden');
                dom.continueButton.style.display = 'block';
                dom.continueButton.focus();
            }
            
            // Korrekturmodus aktivieren
            state.training.isCorrectionMode = true;
            
            // WICHTIG: Fehler zur Liste hinzufügen
            try {
                addToErrorList();
                // UI sofort aktualisieren
                updateRepeatButtons();
            } catch (error) {
                console.error('Fehler beim Hinzufügen zur Fehlerliste:', error);
            }
            
            // Verhindere weiteres Processing
            return;
        }
        
        // Test-Antworten protokollieren
        if (state.test.isTestModeActive && state.training.currentWord) {
            const timeSpent = state.test.currentQuestionStartTime 
                ? (Date.now() - state.test.currentQuestionStartTime) / 1000 
                : 0;
            
            // NEU: Korrekte Benutzerantwort ermitteln
            let userAnswer = '';
            if (state.training.currentMode === 'mc-de-en') {
                // Bei Multiple Choice: Benutzerantwort aus dem DOM holen
                const selectedButton = document.querySelector('.choice-button.selected');
                userAnswer = selectedButton?.textContent?.trim() || '';
            } else if (state.training.currentMode === 'type-de-adj') {
                // Bei Schreibweise: Aus dem Input-Feld
                const input = document.querySelector('#word-input') as HTMLInputElement;
                userAnswer = input?.value?.trim() || '';
            } else if (state.training.currentMode === 'cloze-adj-de') {
                // Bei Lücken: Aus dem Input-Feld
                const input = document.querySelector('#cloze-input') as HTMLInputElement;
                userAnswer = input?.value?.trim() || '';
            } else if (state.training.currentMode === 'sentence-translation-en-de') {
                // Bei Satzübersetzung: Aus den Input-Feldern
                const inputs = document.querySelectorAll('#sentence-word-input-container input[type="text"]') as NodeListOf<HTMLInputElement>;
                userAnswer = Array.from(inputs).map(input => input.value.trim()).join(' ');
            }
                
            testAnswerLog.push({
                word: state.training.currentWord,
                userAnswer: userAnswer || '', // Verwende übergebene Benutzerantwort oder leeren String
                correctAnswer: correctAnswer || state.training.currentWord.german,
                isCorrect: isCorrect,
                mode: state.training.currentMode || 'unknown' as ModeId,
                timeSpent: timeSpent
            });
            
            console.log('📝 Test-Antwort protokolliert:', {
                word: state.training.currentWord.english,
                userAnswer,
                correctAnswer: correctAnswer || state.training.currentWord.german,
                isCorrect,
                mode: state.training.currentMode
            });
        }
        
        // Zeitmessung für Test-Modus
        if (ModeManager.isInTestMode(state) && state.test.currentQuestionStartTime) {
            const questionTime = (Date.now() - state.test.currentQuestionStartTime) / 1000;
            state.test.questionTimes.push(questionTime);
        }
        
        // Aktueller Modus bestimmt das Verhalten
        const currentMode = ModeManager.getCurrentMode(state);
        
        console.log('🔧 processAnswer - Modus:', currentMode, 'isCorrect:', isCorrect, 'currentMode:', state.training.currentMode);
        
        switch (currentMode) {
            case 'correcting':
                // Im Korrekturmodus nur Statistiken aktualisieren
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                } else {
                    addToErrorList();
                }
                updateStatistics();
                // KEIN automatisches Weitergehen!
                break;
                
            case 'testing':
                // Im Test-Modus: IMMER zur nächsten Frage weitergehen
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                }
                // Statistiken aktualisieren
                updateStatistics();
                // IMMER zur nächsten Frage weitergehen im Test-Modus!
                console.log('✅ Test-Modus: Lade nächste Aufgabe...');
                loadNextTask();
                break;
                
            case 'repeating':
                // Im Wiederholungs-Modus
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                    updateProgress(true);
                    removeFromErrorList();
                    
                    // Prüfe ob noch Fehler da sind
                    const remainingErrors = state.training.currentMode ? errorManager.getErrorCount(state.training.currentMode) : 0;
                    if (remainingErrors === 0) {
                        handleNoMoreErrors();
                        return;
                    }
                    
                    setTimeout(() => loadNextTask(), 1500);
                } else {
                    // Wechsle zu Korrekturmodus
                    ModeManager.switchToMode(state, 'correcting');
                    showCorrectionUI(correctAnswer);
                }
                break;
                
            case 'learning':
            default:
                // Normaler Lernmodus
                if (isCorrect) {
                    console.log('🔧 Richtige Antwort im Lernmodus');
                    state.training.correctInCurrentRound++;
                    updateProgress(true);
                    
                    // Fehler aus der Liste entfernen, falls vorhanden
                    removeFromErrorList();
                    
                    // Einfaches Feedback
                    dom.feedbackContainerEl.innerHTML = `<div class="mt-4 animate-bounce"><span class="inline-flex items-center gap-2 px-6 py-3 bg-[#F2AE2E]/10 rounded-xl border-2 border-[#F2AE2E]"><span class="text-2xl">✨</span><span class="text-2xl font-bold text-[#F2AE2E]">Richtig!</span><span class="text-2xl">🎉</span></span></div>`;
                    setTimeout(() => {
                        loadNextTask();
                    }, 1200);
                } else {
                    console.log('🔧 Falsche Antwort im Lernmodus - zeige Korrektur-UI');
                    // Fehler hinzufügen
                    addToErrorList();
                    
                    // Korrektur-UI anzeigen
                    showCorrectionUI(correctAnswer);
                }
                break;
        }
    }

    // Hilfsfunktionen
    function addToErrorList(): void {
        try {
            if (state.training.currentWord && state.training.currentMode) {
                errorManager.addError(
                    state.training.currentWord.id, 
                    state.training.currentMode
                );
            }
        } catch (error) {
            console.error('❌ Fehler beim Hinzufügen zur Fehlerliste:', error);
        }
    }

    function removeFromErrorList(): void {
        try {
            if (state.training.currentWord && state.training.currentMode) {
                // Entferne den Fehler - der ErrorManager macht das UI-Update automatisch
                errorManager.removeError(
                    state.training.currentWord.id, 
                    state.training.currentMode
                );
            }
        } catch (error) {
            console.error('❌ Fehler beim Entfernen aus Fehlerliste:', error);
        }
    }

    function updateStatistics(): void {
        if (ModeManager.isInTestMode(state)) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
        }
    }

    function showCorrectionUI(correctAnswer?: string): void {
        // Korrektur-UI nur im Lernmodus anzeigen, nicht im Testmodus
        if (!state.test.isTestModeActive) {
            
            console.log('🔧 showCorrectionUI aufgerufen mit:', correctAnswer);
            
            // NUR das rote Korrekturwort anzeigen - OHNE "Falsch! Richtig:" - GRÖSSER
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect" style="color: #ef4444; font-weight: bold; font-size: 1.5rem; text-align: center; display: block; margin: 1rem 0;">${correctAnswer || ''}</span>`;
            
            // Korrekturmodus aktivieren
            state.training.isCorrectionMode = true;
            
            // Weiter-Button anzeigen
            dom.continueButton.classList.remove('hidden');
            dom.continueButton.focus();
            
            // KRITISCH: Stelle sicher, dass der Button sichtbar ist
            if (dom.continueButton) {
                dom.continueButton.style.display = 'block';
                console.log('🔧 Weiter-Button sichtbar gemacht');
            } else {
                console.error('❌ Weiter-Button nicht gefunden!');
            }
        } else {
            // Test-Modus: Kein visuelles Feedback
            console.log('Test-Modus: Kein visuelles Feedback für falsche Antwort');
        }
    }

    function updateProgress(isCorrect: boolean): void {
        if (isCorrect && state.training.currentWord && state.training.currentMode) {
            const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
            
            if (!state.progress.globalProgress[progressKey]) {
                state.progress.globalProgress[progressKey] = {};
            }
            if (!state.progress.globalProgress[progressKey][state.training.currentMode]) {
                state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
            }
            
            // Stelle sicher, dass es ein Set ist
            let progressSet = state.progress.globalProgress[progressKey][state.training.currentMode];
            if (!(progressSet instanceof Set)) {
                if (Array.isArray(progressSet)) {
                    progressSet = new Set(progressSet);
                    state.progress.globalProgress[progressKey][state.training.currentMode] = progressSet;
                } else {
                    progressSet = new Set();
                    state.progress.globalProgress[progressKey][state.training.currentMode] = progressSet;
                }
            }
            
            progressSet.add(state.training.currentWord.id);
            saveProgress();
        }
    }

    function handleNoMoreErrors(): void {
        state.test.isRepeatSessionActive = false;
        
        // Filtere Vokabeln, die noch nicht richtig beantwortet wurden
        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
        const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
        const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
        
        const remainingWords = state.training.currentVocabularySet.filter(word => 
            !progressSet.has(word.id)
        );
        
        if (remainingWords.length > 0) {
            state.training.shuffledWordsForMode = shuffleArray(remainingWords);
            state.training.currentWordIndex = -1;
            ui.showMessage(dom, `Weiter mit ${remainingWords.length} noch nicht beantworteten Vokabeln.`, 'info');
            setTimeout(() => loadNextTask(), 1000);
        } else {
            // Alle Vokabeln wurden richtig beantwortet
            if (state.training.currentMode) {
                const runCount = (state.progress.perfectRunsByMode[state.training.currentMode] || 0) + 1;
                const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                ui.showSuccessMessageWithButton(
                    dom, 
                    `Perfekt! (${runText})`, 
                    'Übung wiederholen',
                    () => {
                        const progressKey = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
                        if (progressKey && state.progress.globalProgress[progressKey] && state.training.currentMode) {
                            state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                            saveProgress();
                        }
                        if (state.training.currentMode !== null) {
                            setMode(state.training.currentMode, false);
                        }
                    }
                );
            }
        }
    }

    const learningModes: LearningModes = {
        'mc-de-en': { id: 'mc-de-en' as ModeId, name: 'Bedeutung', type: 'multipleChoice', setupFunction: () => uiModes.setupMultipleChoiceMode(dom, state, processAnswer), isActive: false },
        'type-de-adj': { id: 'type-de-adj' as ModeId, name: 'Schreibweise', type: 'spelling', setupFunction: () => uiModes.setupSpellingMode(dom, state, processAnswer), isActive: false },
        'cloze-adj-de': { id: 'cloze-adj-de' as ModeId, name: 'Lückentext', type: 'cloze', setupFunction: () => uiModes.setupClozeMode(dom, state, processAnswer), isActive: false },
        'sentence-translation-en-de': { id: 'sentence-translation-en-de' as ModeId, name: 'Satzübersetzung', type: 'sentenceTranslation', setupFunction: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer), isActive: false }
    };

    function loadNextTask(): void {
        
        // KRITISCH: Alle visuellen Fehleranzeigen zurücksetzen
        dom.feedbackContainerEl.innerHTML = '';
        dom.correctionSolutionEl.classList.add('hidden');
        dom.continueButton.classList.add('hidden');
        
        // KRITISCH: Stelle sicher, dass die UI-Elemente versteckt sind
        if (dom.correctionSolutionEl) {
            dom.correctionSolutionEl.style.display = 'none';
        }
        if (dom.continueButton) {
            dom.continueButton.style.display = 'none';
        }
        
        // Alle visuellen Fehleranzeigen entfernen
        document.querySelectorAll('.feedback-incorrect').forEach(el => el.remove());
        document.querySelectorAll('.border-red-500, .bg-red-100').forEach(el => {
            el.classList.remove('border-red-500', 'bg-red-100');
            el.classList.add('border-de-gray-300');
        });
        
        // Korrekturmodus zurücksetzen
        state.training.isCorrectionMode = false;
        
        // KRITISCH: Fehlerzähler-UI aktualisieren
        ui.updateErrorCounts(dom, state, learningModes);
        
        ui.hideAllUIs(dom);
        
        // Erhöhe Index
        state.training.currentWordIndex++;
        
        // Prüfe ob wir am Ende der Liste sind
        if (state.training.currentWordIndex >= state.training.shuffledWordsForMode.length) {
            if (state.test.isTestModeActive) {
                handleTestCompletion();
                return;
            }
            
            // Shuffle und von vorne beginnen
            if (state.test.isRepeatSessionActive) {
                // Im Wiederholungsmodus: Prüfe ob noch Fehler da sind
                const remainingErrors = state.training.currentMode ? errorManager.getErrorCount(state.training.currentMode) : 0;
                if (remainingErrors === 0) {
                    // Keine Fehler mehr - wechsle zu "noch nicht richtig beantworteten" Vokabeln
                    state.test.isRepeatSessionActive = false;
                    
                    // Filtere Vokabeln, die noch nicht richtig beantwortet wurden
                    const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                    const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
                    const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
                    
                    const remainingWords = state.training.currentVocabularySet.filter(word => 
                        !progressSet.has(word.id)
                    );
                    
                    if (remainingWords.length > 0) {
                        state.training.shuffledWordsForMode = shuffleArray(remainingWords);
                        ui.showMessage(dom, `Weiter mit ${remainingWords.length} noch nicht beantworteten Vokabeln.`, 'info');
                    } else {
                        // Alle Vokabeln wurden richtig beantwortet - Modus beenden
                        if (state.training.currentMode) {
                            const runCount = (state.progress.perfectRunsByMode[state.training.currentMode] || 0) + 1;
                            const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                            ui.showSuccessMessageWithButton(
                                dom, 
                                `Perfekt! (${runText})`, 
                                'Übung wiederholen',
                                () => {
                                    const progressKey = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
                                    if (progressKey && state.progress.globalProgress[progressKey] && state.training.currentMode) {
                                        state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                                        saveProgress();
                                    }
                                    if (state.training.currentMode !== null) {
                                        setMode(state.training.currentMode, false);
                                    }
                                }
                            );
                        } else {
                            ui.showMessage(dom, 'Perfekt! Alle Vokabeln in diesem Modus wurden richtig beantwortet.', 'success');
                        }
                        
                        // Fortschritt für diesen Modus zurücksetzen
                        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                        if (state.progress.globalProgress[progressKey] && state.training.currentMode) {
                            state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                            saveProgress();
                        }
                        return;
                    }
                } else {
                    // Noch Fehler da - shuffle Fehlerliste
                    const errorWords = state.training.currentVocabularySet.filter(word => 
                        state.training.currentMode && state.progress.wordsToRepeatByMode[state.training.currentMode]?.has(word.id as WordId)
                    );
                    state.training.shuffledWordsForMode = shuffleArray(errorWords);
                }
            } else {
                // Normaler Modus - nur noch nicht richtig beantwortete Wörter
                const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
                const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
                
                const remainingWords = state.training.currentVocabularySet.filter(word => 
                    !progressSet.has(word.id)
                );
                
                if (remainingWords.length > 0) {
                    state.training.shuffledWordsForMode = shuffleArray(remainingWords);
                } else {
                    // Alle Wörter wurden richtig beantwortet
                    // Erhöhe Perfect Run Counter
                    if (state.training.currentMode) {
                        // Initialisiere mit 0 falls undefined
                        if (state.progress.perfectRunsByMode[state.training.currentMode] === undefined) {
                            state.progress.perfectRunsByMode[state.training.currentMode] = 0;
                        }
                        state.progress.perfectRunsByMode[state.training.currentMode]++;
                        savePerfectRuns();
                        
                        const runCount = state.progress.perfectRunsByMode[state.training.currentMode];
                        const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                        ui.showSuccessPopup(dom, state);
                    } else {
                        ui.showMessage(dom, 'Perfekt! Alle Vokabeln in diesem Modus wurden richtig beantwortet.', 'success');
                    }
                    
                    return;
                }
            }
            
            state.training.currentWordIndex = 0;
        }
        
        // Hole nächstes Wort
        state.training.currentWord = state.training.shuffledWordsForMode[state.training.currentWordIndex];
        
        // Mode-Rotation NUR für Chaos-Test
        if (state.test.isTestModeActive && state.test.currentTest) {
            if (state.test.currentTest.variant === 'chaos') {
                // Chaos-Test: Rotation durch verschiedene Modi
                state.training.currentMode = state.test.testModeRotation[state.test.currentTestModeIndex % state.test.testModeRotation.length];
                state.test.currentTestModeIndex++;
                console.log('🎯 Chaos-Test Modus:', state.training.currentMode);
            } else if (state.test.currentTest.variant === 'structured' && state.test.currentTest.selectedCategory) {
                // Strukturiert: Immer der gleiche Modus basierend auf Kategorie
                const category = state.test.currentTest.selectedCategory as TestCategory;
                state.training.currentMode = CATEGORY_MODE_MAP[category];
                console.log('📐 Struktur-Test Modus:', category, '→', state.training.currentMode);
            }
        }
        
        if (!state.training.currentWord) {
            console.error('Kein Wort gefunden!');
            return;
        }
        
        // Setup für den aktuellen Modus
        const modeInfo = state.training.currentMode ? learningModes[state.training.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`[loadNextTask] Keine Setup-Funktion für Modus "${state.training.currentMode}" gefunden`);
        }
        
        // Zeitmessung für neue Frage starten (nur im Test-Modus)
        if (state.test.isTestModeActive) {
            state.test.currentQuestionStartTime = Date.now();
        }
        
        // Statistiken aktualisieren
        if (state.test.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
            ui.updateCategoryStats(dom, state, learningModes);
        }
        // BUGFIX: Chaos-Test Eingabefelder aktivieren
        // Stelle sicher, dass alle UI-Elemente zurückgesetzt und aktivierbar sind
        setTimeout(() => {
            document.querySelectorAll('button, input').forEach(element => {
                if (element instanceof HTMLButtonElement || element instanceof HTMLInputElement) {
                    element.disabled = false;
                    element.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
            document.querySelectorAll('.choice-button').forEach(btn => {
                btn.removeAttribute('disabled');
                btn.classList.remove('opacity-50');
            });
        }, 50);
    }

    function getTopicKey(main: TopicId|null, sub: SubTopicId|null) {
        return main && sub ? `${main}|${sub}` : '';
    }

    // Hilfsfunktion für sichere Mode-Zugriffe
    function getCurrentMode(): ModeId | null {
        return state.training.currentMode;
    }

    function isCurrentModeValid(): boolean {
        return state.training.currentMode !== null;
    }

    // Sichere Zugriffe auf State mit Null-Checks
    function getProgressForMode(progressKey: string): Set<WordId> {
        if (!state.training.currentMode) return new Set();
        const progress = state.progress.globalProgress[progressKey]?.[state.training.currentMode];
        if (progress instanceof Set) {
            return progress;
        }
        return new Set();
    }

    function setProgressForMode(progressKey: string, progress: Set<WordId>): void {
        if (!state.training.currentMode) return;
        if (!state.progress.globalProgress[progressKey]) {
            state.progress.globalProgress[progressKey] = {};
        }
        state.progress.globalProgress[progressKey][state.training.currentMode] = progress;
    }

    function getWordsToRepeatForMode(): Set<WordId> {
        if (!state.training.currentMode) return new Set();
        return state.progress.wordsToRepeatByMode[state.training.currentMode] || new Set();
    }

    function setWordsToRepeatForMode(words: Set<WordId>): void {
        if (!state.training.currentMode) return;
        state.progress.wordsToRepeatByMode[state.training.currentMode] = words;
    }

    function safeSetMode(modeId: ModeId | null, isRepeat: boolean = false): void {
        if (modeId) {
            setMode(modeId, isRepeat);
        }
    }

    // Testmodus sauber verlassen
    function exitTestMode(): void {
        
        // Test-spezifische States zurücksetzen
        state.test.isTestModeActive = false;
        state.test.currentTest = null;
        state.test.testModeRotation = [];
        state.test.currentTestModeIndex = 0;
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
        
        // WICHTIG: Zähler für Lernmodus zurücksetzen
        state.training.correctInCurrentRound = 0;
        state.training.attemptedInCurrentRound = 0;
        state.training.currentWordIndex = -1;
        
        // Test-Statistiken verstecken, Practice-Statistiken zeigen
        dom.testStatsViewEl.classList.add('hidden');
        dom.practiceStatsViewEl.classList.remove('hidden');
        
        // KRITISCH: Mode-Button-Grid wieder anzeigen
        dom.modeButtonGridEl.classList.remove('hidden');
        
        // Haupt-View wiederherstellen
        dom.trainerMainViewEl.classList.remove('hidden');
        dom.navigationViewEl.classList.add('hidden');
        
        // UI-Elemente zurücksetzen
        ui.hideAllUIs(dom);
        
        // Felder und Aufgaben-UI wieder anzeigen
        ui.showTrainingModes(dom, state);
        
        // Fehlerzähler aktualisieren
        updateRepeatButtons();
        
        // Statistiken für Lernmodus aktualisieren
        ui.updatePracticeStats(dom, state, learningModes);
        ui.updateCategoryStats(dom, state, learningModes);
    }

    function setMode(modeId: ModeId, isRepeat: boolean = false): void {
        // Wenn Testmodus aktiv war, alles zurücksetzen
        if (state.test.isTestModeActive) {
            exitTestMode();
        }
        
        // FEHLERZÄHLER ZURÜCKSETZEN nur für normale Übungen (nicht für Wiederholungen)
        if (!isRepeat) {
            state.training.correctInCurrentRound = 0;
            state.training.attemptedInCurrentRound = 0;
            
            // Fehlerzähler für diesen Modus zurücksetzen
            errorManager.clearErrors(modeId);
            
            // Firebase Progress zurücksetzen (falls verfügbar)
            if ((window as unknown as { firebaseSyncService?: { saveProgress: (data: Record<string, unknown>) => void } }).firebaseSyncService) {
                try {
                    // Leeren Progress an Firebase senden
                    const emptyProgress: Record<string, unknown> = {};
                    (window as unknown as { firebaseSyncService: { saveProgress: (data: Record<string, unknown>) => void } }).firebaseSyncService.saveProgress(emptyProgress);
                } catch (error) {
                    console.warn('⚠️ Fehler beim Firebase-Reset:', error);
                }
            }
        }
        
        state.training.currentMode = modeId;
        state.test.isTestModeActive = false;
        state.test.isRepeatSessionActive = isRepeat;
        const key = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
        if (key) state.navigation.lastUsedModeByTopic[key] = modeId;
        let wordsForSession: Word[] = [];
        if (isRepeat) {
            const wordIdsToRepeat = errorManager.getErrors(modeId);
            if (wordIdsToRepeat.size === 0) {
                ui.showMessage(dom, 'Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.test.isRepeatSessionActive = false;
                return;
            }
            
            // Filtere Wörter die wiederholt werden müssen
            wordsForSession = state.training.currentVocabularySet.filter(word => 
                wordIdsToRepeat.has(word.id as WordId)
            );
            
            if (wordsForSession.length === 0) {
                ui.showMessage(dom, 'Fehler beim Laden der Wiederholungswörter.', 'error');
                return;
            }
            
        } else {
            // Normaler Modus - nur noch nicht richtig beantwortete Wörter
            const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
            const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
            const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
            
            wordsForSession = state.training.currentVocabularySet.filter(word => 
                !progressSet.has(word.id)
            );
            
        }
        state.training.shuffledWordsForMode = shuffleArray(wordsForSession);
        state.training.currentWordIndex = -1;
        state.training.correctInCurrentRound = 0;
        state.training.attemptedInCurrentRound = 0;

        document.querySelectorAll('#mode-button-grid .mode-button').forEach(btn => {
            if (!btn.id.includes('repeat')) {
                btn.classList.remove('bg-de-blue', 'text-white', 'border-de-blue');
                btn.classList.add('border-de-gray-300');
            } else {
                btn.classList.remove('bg-de-red/10', 'text-de-red');
                btn.classList.add('bg-red-100', 'text-red-500');
            }
        });
        if (isRepeat) {
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            repeatButton?.classList.remove('bg-red-100', 'text-red-500');
            repeatButton?.classList.add('bg-de-red', 'text-white');
        } else {
            const modeButton = document.getElementById(`mode-${modeId}`);
            modeButton?.classList.remove('border-de-gray-300');
            modeButton?.classList.add('bg-de-blue', 'text-white', 'border-de-blue');
        }
        loadNextTask();
        // Umlaut-Buttons nach jedem Moduswechsel initialisieren
        // Verzögert ausführen, damit die Input-Felder im DOM sind
        setTimeout(() => {
            // Dynamischer Import für konsistente Chunk-Strategie
            import('./src/ui/views/umlaut-buttons').then(mod => {
                mod.initializeUmlautButtons('setup', dom, state, { modeId });
            });
        }, 200); // Längere Verzögerung für dynamisch erstellte Input-Felder
    }

    function startTestUI(testTitle: string, modus: ModeId): void {
        if (authUI) authUI.hide();
        ui.hideAllUIs(dom);
        dom.trainerMainViewEl.classList.remove('hidden');
        dom.navigationViewEl.classList.add('hidden');
        const modusName = learningModes[modus]?.name || "Test";
        dom.currentTrainingTitleEl.textContent = `${testTitle} - ${modusName}`;
        dom.practiceStatsViewEl.classList.add('hidden');
        dom.testStatsViewEl.classList.remove('hidden');
        dom.modeButtonGridEl.classList.add('hidden');
        ui.updateTestStats(dom, state);
        ui.updateErrorCounts(dom, state, learningModes);
        loadNextTask();
    }

    async function handleTestCompletion(): Promise<void> {
        const accuracy = state.training.attemptedInCurrentRound > 0 ? (state.training.correctInCurrentRound / state.training.attemptedInCurrentRound) : 0;
        
        // Zeitmessung für Test-Abschluss
        const testEndTime = Date.now();
        const totalTestTime = state.test.testStartTime ? (testEndTime - state.test.testStartTime) / 1000 : 0; // in Sekunden
        const averageTimePerQuestion = calculateAverageTimePerQuestion(state.test.questionTimes);
        
        // Score-Berechnung mit Zeitfaktor
        const scoreCalculation = calculateTestScore(
            state.training.correctInCurrentRound,
            state.training.attemptedInCurrentRound,
            totalTestTime,
            2 // 2 Punkte Abzug pro Sekunde
        );
        
        if (!state.test.lastTestScores) state.test.lastTestScores = {};
        const testScore: TestScore = {
            testId: `test_${Date.now()}` as TestId,
            correct: state.training.correctInCurrentRound,
            total: state.training.attemptedInCurrentRound,
            accuracy: accuracy,
            timestamp: new Date(),
            testType: 'subTopic',
            topicId: state.navigation.currentMainTopic!,
            subTopicId: state.navigation.currentSubTopic!,
            duration: totalTestTime,
            modesUsed: state.training.currentMode ? [state.training.currentMode] : [],
            // Neue Zeitmessung-Felder
            startTime: state.test.testStartTime || 0,
            endTime: testEndTime,
            averageTimePerQuestion: averageTimePerQuestion,
            timePenalty: scoreCalculation.timePenalty,
            finalScore: scoreCalculation.finalScore
        };
        
        const testKey = `${state.navigation.currentMainTopic}-${state.navigation.currentSubTopic}-${state.training.currentMode}`;
        state.test.lastTestScores[testKey] = testScore;
        
        // Erweiterte Test-Keys für neue Varianten
        if (state.test.currentTest) {
            const variantKey = `${testKey}-${state.test.currentTest.variant}`;
            state.test.lastTestScores[variantKey] = testScore;
            if (state.test.currentTest.selectedCategory) {
                const categoryKey = `${testKey}-${state.test.currentTest.selectedCategory}`;
                state.test.lastTestScores[categoryKey] = testScore;
            }
        }
        
        saveLastTestScores();
        
        // Erweiterte Erfolgsmeldung mit Zeit und Score
        const timeMessage = `⏱️ Zeit: ${Math.floor(totalTestTime)}s (Ø ${averageTimePerQuestion.toFixed(1)}s/Frage)`;
        const scoreMessage = `🏆 Score: ${scoreCalculation.finalScore} (${scoreCalculation.baseScore} - ${scoreCalculation.timePenalty} Zeitstrafe)`;
        const accuracyMessage = `📊 Genauigkeit: ${Math.round(accuracy * 100)}%`;
        
        // KORREKTUR: Nur eine Zeile, keine mehrzeilige Template-Literal!
        const completionMessage = `Test beendet! ${accuracyMessage} | ${timeMessage} | ${scoreMessage}`;
        ui.showMessage(dom, completionMessage, accuracy >= 0.8 ? 'success' : 'info');
        
        state.test.isTestModeActive = false;
        ui.updateTestStats(dom, state);
        
        // WordTestResults aus dem Log erstellen
        const wordResults = testAnswerLog.map((entry, index) => ({
            wordId: entry.word.id,
            modeId: entry.mode,
            correct: entry.isCorrect,
            attempts: 1,
            timeSpent: entry.timeSpent,
            startTime: state.test.testStartTime || Date.now(),
            endTime: Date.now(),
            // Zusätzliche Felder für die Auswertung
            word: entry.word,
            userAnswer: entry.userAnswer,
            correctAnswer: entry.correctAnswer
        }));

        // Empfehlungen basierend auf Fehlern
        const incorrectWords = testAnswerLog
            .filter(entry => !entry.isCorrect)
            .map(entry => entry.word.id);

        const recommendations = incorrectWords.length > 0 ? [{
            type: 'repeat' as const,
            wordIds: incorrectWords,
            suggestedMode: state.training.currentMode || 'mc-de-en' as ModeId,
            reason: `Wiederhole ${incorrectWords.length} falsch beantwortete Wörter`
        }] : [];
        
        // Konvertiere TestScore zu TestResult für die Modal-Anzeige
        const testResult: TestResult = {
            testId: testScore.testId,
            score: testScore,
            wordResults: wordResults,
            recommendations: recommendations
        };

        // ENTFERNT: Automatische Ranking-Submission
        // Ranking wird jetzt nur über die Test-Ergebnis-Modal mit Datenschutz-Option durchgeführt

        showTestResultModal(testResult, state.test.currentTest as unknown as Record<string, unknown> || undefined);
        
        // Test-Log für nächsten Test zurücksetzen
        testAnswerLog.length = 0;
        
        // KRITISCH: Test-Modus beenden und zum Lernmodus zurückkehren
        exitTestMode();
        
        // Zeitmessung zurücksetzen
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
    }

    const callbacks: UICallbacks = {
        handleTopicSelection: (mainTopic: TopicId, subTopic: SubTopicId) => {
            state.navigation.currentMainTopic = mainTopic;
            state.navigation.currentSubTopic = subTopic;
            
            const topicVokabular = vokabular[mainTopic]?.[subTopic] || [];
            if (!topicVokabular) {
                console.error(`Kein Vokabular für ${mainTopic} > ${subTopic} gefunden.`);
                return;
            }
            state.training.currentVocabularySet = topicVokabular;
            
            ui.showTrainingModes(dom, state);
            updateRepeatButtons();

            // KORREKTUR: Letzten Modus laden oder Standardmodus starten
            const topicKey = getTopicKey(mainTopic, subTopic);
            const lastMode = state.navigation.lastUsedModeByTopic[topicKey];
            const startMode = lastMode || ('mc-de-en' as ModeId);
            setMode(startMode, false);
        },
        handleBackNavigation: () => {
            if (state.navigation.currentSubTopic && state.navigation.currentMainTopic) {
                ui.showSubTopicNavigation(dom, state, vokabular, state.navigation.currentMainTopic, learningModes);
            } else {
                ui.showMainTopicNavigation(dom, state, vokabular, learningModes);
            }
        },
        handleModeSelection: setMode,
        handleAnswer: (isCorrect: boolean, correctAnswer?: string) => {
            processAnswer(isCorrect, correctAnswer);
        },
        handleTestCompletion: () => {
            console.log('Test abgeschlossen');
        },
        startTest: (testConfig: TestConfiguration) => {
            console.log('Starte Test:', testConfig.testTitle);
            
            // Wechsle zu Test-Modus
            ModeManager.switchToMode(state, 'testing');
            
            // NEU: Zeitmessung starten
            state.test.testStartTime = Date.now();
            state.test.questionTimes = [];
            state.test.isTestModeActive = true;
            
            // Generiere Test-Aufgaben
            const result = generateTestQuestions(vokabular, {
                variant: testConfig.testType === 'global' ? 'global-ranking' : testConfig.variant,
                scope: testConfig.testType as 'subTopic' | 'mainTopic' | 'global',
                topicId: testConfig.topicId || '' as TopicId,
                category: testConfig.selectedCategory as import('./src/core/types/trainer').TestCategory,
                totalQuestions: 20
            });
            
            // NEU: Debug-Ausgabe
            console.log('Test-Generator Ergebnis:', {
                wordsCount: result.words.length,
                modeRotation: result.modeRotation,
                scope: testConfig.testType,
                variant: testConfig.variant
            });
            
            // NEU: Prüfung ob Wörter generiert wurden
            if (!result.words || result.words.length === 0) {
                console.error('Keine Wörter für Test generiert!');
                ui.showMessage(dom, 'Fehler: Keine Wörter für Test gefunden!', 'error');
                return;
            }
            
            // State für Test vorbereiten
            state.test.currentTest = testConfig;
            state.training.currentVocabularySet = result.words as import('./src/core/types/trainer').Word[];
            state.training.shuffledWordsForMode = result.words as import('./src/core/types/trainer').Word[];
            state.training.currentWordIndex = -1;
            state.training.correctInCurrentRound = 0;
            state.training.attemptedInCurrentRound = 0;
            
            // NEU: Test-Modus-Mapping für Global-Ranking-Test speichern
            if (testConfig.testType === 'global' && result.testModeMapping) {
                state.test.testModeMapping = result.testModeMapping;
                console.log('🎯 Test-Modus-Mapping für Global-Ranking gesetzt:', result.testModeMapping.length, 'Einträge');
            }
            
            // Mode-Rotation für Chaos-Test und Global-Ranking-Test
            if ((testConfig.variant === 'chaos' || testConfig.testType === 'global') && result.modeRotation) {
                state.test.testModeRotation = result.modeRotation as import('./src/core/types/trainer').ModeId[];
                state.test.currentTestModeIndex = 0;
                console.log('🎯 Mode-Rotation für Test gesetzt:', result.modeRotation);
            } else {
                state.training.currentMode = testConfig.mode as ModeId || null;
            }
            
            // UI für Test starten
            startTestUI(testConfig.testTitle || 'Test', testConfig.mode as ModeId || 'mc-de-en' as ModeId);
        },
    };

    document.addEventListener('topic-selected', (e: Event) => {
        const { mainTopic, subTopic } = (e as CustomEvent).detail;
        callbacks.handleTopicSelection(mainTopic as TopicId, subTopic as SubTopicId);
    });
    document.addEventListener('back-navigation', () => {
        callbacks.handleBackNavigation?.();
    });
    document.addEventListener('mode-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        callbacks.handleModeSelection(mode as ModeId);
    });
    document.addEventListener('test-selected', (e: Event) => {
        const { testConfig } = (e as CustomEvent).detail;
        callbacks.startTest!(testConfig);
    });
    document.addEventListener('repeat-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        callbacks.startRepeatSession!(mode as ModeId);
    });
    

    // Navigation Event Listeners initialisieren
    ui.initNavigationListeners(dom, state, callbacks, learningModes, vokabular);
    ui.initializeModeButtons(callbacks, learningModes);
    ui.initializeRepeatButtons(callbacks, learningModes);

    // KORREKTUR: Event Listener für den "Zurück"-Button im Trainer explizit hinzufügen
    dom.backToSubtopicsButton.addEventListener('click', () => {
        callbacks.handleBackNavigation?.();
    });
    
    // Initialansicht
    ui.showMainTopicNavigation(dom, state, vokabular, learningModes);

    // Initialen Fehlerzählerstand anzeigen
    updateRepeatButtons();

    // Event-Listener für Weiter-Button (nur einmalig registrieren)
    dom.continueButton.addEventListener('click', () => {
        
        // Verlasse Korrekturmodus
        state.training.isCorrectionMode = false;
        
        // UI zurücksetzen
        dom.correctionSolutionEl.classList.add('hidden');
        dom.continueButton.classList.add('hidden');
        dom.feedbackContainerEl.innerHTML = '';
        
        // KRITISCH: Stelle sicher, dass die UI-Elemente versteckt sind
        if (dom.correctionSolutionEl) {
            dom.correctionSolutionEl.style.display = 'none';
        }
        if (dom.continueButton) {
            dom.continueButton.style.display = 'none';
        }
        
        // KRITISCH: Alle visuellen Fehleranzeigen zurücksetzen
        document.querySelectorAll('.feedback-incorrect').forEach(el => el.remove());
        document.querySelectorAll('.border-red-500, .bg-red-100').forEach(el => {
            el.classList.remove('border-red-500', 'bg-red-100');
            el.classList.add('border-de-gray-300');
        });
        
        // Nächstes Wort laden
        loadNextTask();
    });

    // Globale initUmlautButtons Funktion für die Browser-Lösung
    // ENTFERNT: Doppelte Implementierung - wird jetzt durch ui/umlaut-buttons.ts gehandhabt
    (window as unknown as { initUmlautButtons: () => void }).initUmlautButtons = function() {
        // Die TypeScript-Implementierung in ui/umlaut-buttons.ts übernimmt jetzt alles
    };

    // Firebase Progress Event Listener
    window.addEventListener('firebase-progress-updated', (event: any) => {
        console.log('🔄 Firebase-Progress-Update empfangen');
        if (event.detail && event.detail.progress) {
            // Merge Firebase-Daten mit lokalem State
            const firebaseProgress = event.detail.progress;
            Object.keys(firebaseProgress).forEach(topicKey => {
                if (!state.progress.globalProgress[topicKey]) {
                    state.progress.globalProgress[topicKey] = {};
                }
                Object.keys(firebaseProgress[topicKey]).forEach(mode => {
                    const data = firebaseProgress[topicKey][mode];
                    if (Array.isArray(data)) {
                        state.progress.globalProgress[topicKey][mode] = new Set(data);
                    }
                });
            });
            // UI aktualisieren - aber nur wenn bereits in Trainings-Ansicht
            if (state.navigation.currentMainTopic && state.navigation.currentSubTopic) {
                ui.showTrainingModes(dom, state);
            }
        }
    });

    window.addEventListener('firebase-auth-success', () => {
        console.log('🔐 Firebase-Auth erfolgreich, lade Progress neu...');
        // Nur laden wenn bereits in Trainings-Ansicht
        if (state.navigation.currentMainTopic && state.navigation.currentSubTopic) {
            reloadProgressFromFirebase();
        }
    });

    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));
    
    // Vokabular-Validierung - TEMPORÄR DEAKTIVIERT
    // console.log('🔍 Starte Vokabular-Validierung...');
    // const validationResult = validateVocabulary();
    // if (!validationResult.isValid) {
    //     console.error('❌ Vokabular-Validierung fehlgeschlagen!');
    //     console.error('Fehler:', validationResult.errors);
    // } else {
    //     console.log('✅ Vokabular-Validierung erfolgreich!');
    // }

    // Am Ende von document.addEventListener('DOMContentLoaded', ...)
    (window as unknown as { loadNextTask: typeof loadNextTask }).loadNextTask = loadNextTask;

    // exitTestMode global verfügbar machen für Modal
    (window as unknown as { exitTestMode: typeof exitTestMode }).exitTestMode = exitTestMode;

    // Globale Funktionen für Test-Auswertung
    (window as any).exitTestMode = exitTestMode;
    (window as any).setMode = setMode;
    (window as any).state = state as any;

    // ErrorManager global verfügbar machen für Debugging
    (window as any).errorManager = errorManager;
    
    // RankingUI ist bereits global verfügbar durch shared/auth/index.ts

    // Debug-Funktionen für Browser-Konsole
    (window as any).debugErrorCounts = () => {
        console.group('🔍 Aktuelle Fehlerzähler');
        Object.keys(learningModes).forEach(mode => {
            const count = errorManager.getErrorCount(mode as ModeId);
            console.log(`${mode}: ${count} Fehler`);
        });
        console.groupEnd();
    };

    (window as any).forceUpdateErrorUI = () => {
        console.log('🔄 Erzwinge UI-Update...');
        updateRepeatButtons();
        ui.updateErrorCounts(dom, state, learningModes);
    };

    // Debug-Funktionen für Auth
    (window as any).checkAuthStatus = async () => {
        console.log('🔍 Prüfe Auth-Status...');
        const user = await supabaseAuth.getUser();
        console.log('👤 Benutzer:', user);
        console.log('📦 localStorage anonymous_session:', localStorage.getItem('anonymous_session'));
        createAuthButton();
    };
    
    // Debug-Funktion zum Löschen des FrankBest Accounts
    (window as any).deleteFrankBestAccount = async () => {
        console.log('🗑️ Lösche FrankBest Account...');
        try {
            const result = await supabaseAuth.deleteAnonymousAccount('FrankBest');
            console.log('✅ Account gelöscht:', result);
            alert('FrankBest Account wurde gelöscht. Du kannst dich jetzt neu registrieren.');
        } catch (error) {
            console.error('❌ Fehler beim Löschen:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler';
            alert('Fehler beim Löschen: ' + errorMessage);
        }
    };

    // Debug-Funktion für Supabase-Diagnose
    (window as any).diagnoseSupabase = async () => {
        console.log('🔍 Starte Supabase-Diagnose...');
        
        try {
            // 1. Teste Verbindung
            console.log('1️⃣ Teste Supabase-Verbindung...');
            const { data: connectionTest, error: connectionError } = await supabase
                .from('progress')
                .select('count')
                .limit(1);
            
            if (connectionError) {
                console.error('❌ Verbindungsfehler:', connectionError);
                alert('Supabase-Verbindung fehlgeschlagen: ' + connectionError.message);
                return;
            }
            console.log('✅ Verbindung erfolgreich');
            
            // 2. Teste Auth-Status
            console.log('2️⃣ Teste Auth-Status...');
            const user = await supabaseAuth.getUser();
            if (!user) {
                console.error('❌ Kein Benutzer angemeldet');
                alert('Kein Benutzer angemeldet! Bitte melde dich zuerst an.');
                return;
            }
            console.log('✅ Benutzer angemeldet:', user.id);
            
            // 3. Teste Progress-Tabelle
            console.log('3️⃣ Teste Progress-Tabelle...');
            const { data: progressData, error: progressError } = await supabase
                .from('progress')
                .select('*')
                .eq('user_id', user.id)
                .limit(1);
            
            if (progressError) {
                console.error('❌ Progress-Tabellen-Fehler:', progressError);
                alert('Progress-Tabelle nicht erreichbar: ' + progressError.message);
                return;
            }
            console.log('✅ Progress-Tabelle erreichbar');
            
            // 4. Teste Speichern
            console.log('4️⃣ Teste Speichern...');
            const testData = { test: 'diagnose', timestamp: new Date().toISOString() };
            const saveResult = await supabaseProgress.save(testData);
            
            if (!saveResult.success) {
                console.error('❌ Speicherfehler:', saveResult);
                alert('Speichern fehlgeschlagen: ' + (saveResult.error || saveResult.reason));
                return;
            }
            console.log('✅ Speichern erfolgreich');
            
            // 5. Teste Laden
            console.log('5️⃣ Teste Laden...');
            const loadResult = await supabaseProgress.load();
            if (loadResult) {
                console.log('✅ Laden erfolgreich:', loadResult);
            } else {
                console.warn('⚠️ Laden fehlgeschlagen oder keine Daten');
            }
            
            alert('Supabase-Diagnose abgeschlossen! Siehe Konsole für Details.');
            
        } catch (error) {
            console.error('❌ Diagnose-Fehler:', error);
            alert('Diagnose fehlgeschlagen: ' + (error as Error).message);
        }
    };

    // Auth-State-Listener für automatische Button-Updates
    supabaseAuth.onAuthStateChange((user) => {
        console.log('🔐 Auth-State geändert:', user ? 'Angemeldet' : 'Abgemeldet');
        if (user) {
            console.log('👤 Benutzer:', user.user_metadata?.anonymous_username || user.email);
        }
        createAuthButton(); // Button bei jeder Auth-Änderung aktualisieren
    });

    // Initial Auth-Button erstellen
    createAuthButton();

});