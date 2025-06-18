1. Projektziel

Eine erweiterbare Vokabeltrainer-Plattform für Deutsch als Fremdsprache (DaF) auf dem Goethe A1-Niveau. Die App bietet zwei lauffähige Trainer-Anwendungen:

Basis-Trainer: Basiert auf den 18 grundlegenden Wortgruppen des Goethe-Instituts.
Themen-Trainer: Bietet einen umfassenden, thematischen Lernpfad, der auf einer 3-Ebenen-Navigationsstruktur basiert (Haupt-Thema -> Unter-Thema -> Training).
Die App unterstützt Schüler durch Lese-, Hör- (Audio-Integration in Vorbereitung) und Schreibübungen und enthält einen Testmodus.

2. Technologie-Stack

Frontend: Vanilla JavaScript (ES6+), HTML5, CSS3.
Architektur: Modulare Code-Basis mit ES6-Modulen (import/export).
Styling: TailwindCSS (via CDN) und eine zentrale, geteilte style.css.
Besonderheiten: Progressive Web App (PWA) mit Service Worker (sw.js) für Offline-Fähigkeit.
Backend/Deployment: Netlify Hosting mit Netlify Functions für die geplante Google Cloud Text-to-Speech API.
3. Architektur & Dateistruktur (Monorepo)

Das Projekt nutzt einen Monorepo-Ansatz, um zwei Trainer-Anwendungen mit einer gemeinsamen Code-Basis (shared/) zu verwalten. Dies vermeidet Code-Duplizierung und vereinfacht die Wartung.

shared/: Zentraler Ordner für wiederverwendbaren Code (helfer.js, ui-modes.js, style.css).
packages/: Enthält die spezifischen Pakete für jede Trainer-Anwendung.
trainer-basis/: Die ursprüngliche App mit 2-Ebenen-Navigation, jetzt an die neue Architektur angepasst.
trainer-themen/: Die neue, erweiterte App mit 3-Ebenen-Navigation.
4. Development-Workflow & Wichtige Konzepte

Integrierter Code-Assistent: Die Entwicklung und das Refactoring werden durch einen direkt in VS Code integrierten Gemini-Assistenten unterstützt. Komplexe, dateiübergreifende Änderungen werden über präzise Anweisungen an den Assistenten delegiert.
Sicheres DOM-Handling: DOM-Referenzen werden einmalig nach dem DOMContentLoaded-Event geholt.
Monorepo & Geteilter Code: Kernlogik und Styles werden im shared-Ordner zentral verwaltet.
Stabile UI: Das Layout wird responsiv (Media Queries) und robust (min-height, flexbox) gestaltet, um störende Größenänderungen der Benutzeroberfläche bei dynamischen Inhalten zu verhindern.
5. Abgeschlossene Meilensteine

☑️ Grundfunktionen & Refactoring (V1): Die Basis-Features und eine erste modulare Architektur wurden erfolgreich umgesetzt.

☑️ Monorepo-Architektur (V2): Das Projekt wurde erfolgreich in eine Monorepo-Struktur überführt, um zwei Trainer-Anwendungen mit geteiltem Code zu ermöglichen.

☑️ Proof of Concept: Themen-Trainer (V3): Der erste Themen-Trainer wurde auf Basis der neuen Architektur erfolgreich als "Proof of Concept" implementiert und diverse UI-Layout-Bugs wurden behoben.

☑️ Modernisierung & Stabilisierung (V4):

trainer-basis wiederhergestellt: Der Basis-Trainer wurde vollständig an die neue ES6-Modul-Struktur und die geteilte Code-Basis angepasst und ist wieder voll lauffähig.
Umlaut-Eingabe überarbeitet: Die fehleranfällige, automatische Umlaut-Konvertierung wurde entfernt und durch eine benutzerfreundliche Button-Lösung ersetzt, die in beiden Trainern implementiert ist.
Workflow optimiert: Der Gemini-Code-Assistent wurde erfolgreich in VS Code integriert und für komplexe Refactoring-Aufgaben genutzt.
6. Nächster Meilenstein: App-Finalisierung und Content-Ausbau

Ziel:
Die App-Struktur zu einem kohärenten Ganzen zusammenfügen und den Themen-Trainer mit Inhalten füllen, um ihn zu einem vollwertigen Lernwerkzeug zu machen.

Technische Umsetzung (TODOs):

Haupt-Startbildschirm erstellen (/index.html):

Erstellung einer zentralen index.html im Hauptverzeichnis des Projekts.
Diese Seite dient als "Weiche" und lässt den Nutzer zwischen dem "Basis-Trainer" und dem "Themen-Trainer" wählen.
Content-Erweiterung (packages/trainer-themen/vokabular.js):

Systematisches Erfassen und Zuordnen der Vokabeln aus dem Goethe-PDF zu den restlichen Haupt- und Unter-Themen (z.B. "Wohnen", "Essen & Trinken", "Reisen/Verkehr").
Konsequente Anwendung der erweiterten Objekt-Struktur (mit id, wortart, Verb-Details etc.).
Backend-Integration (Audio):

Implementierung der Netlify Function für die Anbindung an die Google Cloud Text-to-Speech API.
Anpassung der speak-Funktion in /shared/helfer.js, um die Netlify Function aufzurufen und die Audio-Ausgabe in der gesamten App zu aktivieren.

aktuelles Problem: 1. Entfernung des alten Systems:
Wir haben den Code-Assistenten angewiesen, alle Spuren der alten Logik restlos aus dem Projekt zu entfernen.

Die Funktion konvertiereUmlaute wurde aus der geteilten Helfer-Datei (/shared/helfer.js) gelöscht.
Die zugehörige "Aktivierungs-Funktion" (aktiviereUmlautKonverter) und alle ihre Aufrufe wurden aus den ui-modes.js- und trainer.js-Dateien beider Trainer (basis und themen) entfernt.
Ergebnis: Die App versucht nicht mehr, Eingaben automatisch umzuwandeln.
2. Implementierung der neuen Button-Lösung:
Als Ersatz haben wir eine sichtbare und kontrollierbare Lösung eingebaut:

HTML: In die index.html-Dateien beider Trainer wurde ein neuer Bereich mit vier Buttons für die Zeichen ä, ö, ü und ß hinzugefügt. Diese erscheinen direkt im Schreibweise-Modus.
CSS: In der /shared/style.css haben wir diese Buttons so gestaltet, dass sie klar als klickbare Eingabehilfe erkennbar sind.
JavaScript: In beiden trainer.js-Dateien wurde eine neue Funktion initUmlautButtons implementiert. Diese sorgt dafür, dass bei einem Klick auf einen der neuen Buttons der jeweilige Buchstabe an der aktuellen Cursor-Position in das aktive Textfeld eingefügt wird.

wir arbeiten mit dem google code assistent zusammen