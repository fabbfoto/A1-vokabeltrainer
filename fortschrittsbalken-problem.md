# Problem: Fortschrittsbalken im A1-Vokabeltrainer

## Kontext
Wir entwickeln einen digitalen Vokabeltrainer für das Niveau A1 (Deutsch), der verschiedene didaktische Module (z.B. Schreibweise, Multiple Choice) enthält. Die Anwendung ist mit TypeScript und Vite gebaut, das UI wird mit Tailwind CSS gestaltet. Ziel ist eine moderne, didaktisch hochwertige Lernumgebung.

## Das Problem
Die Fortschrittsbalken, die den Lernfortschritt und die aktuelle Runden-Genauigkeit anzeigen sollen, funktionieren nicht wie erwartet:
- **Die Balken werden entweder gar nicht angezeigt oder ihre Breite/Anzeige aktualisiert sich nicht korrekt.**
- Die zugrundeliegenden DOM-Elemente (z.B. `#accuracy-bar`, `#test-progress-bar`, `#test-accuracy-bar`) sind im HTML vorhanden, werden aber offenbar nicht immer korrekt angesprochen oder gestylt.
- Die Logik zur Aktualisierung der Balken befindet sich in `ui/statistics.ts` (Funktion `updatePracticeStats`).
- Die Anwendung verwendet Tailwind-Klassen für Farben und Layout, die Breite der Balken wird per Inline-Style (`element.style.width = ...`) gesetzt.

## Bisherige Lösungsversuche
- **DOM-Referenzen geprüft:** Die IDs der Balken wurden mehrfach mit den tatsächlichen HTML-IDs abgeglichen.
- **Debugging:** Es wurden zahlreiche `console.log`-Ausgaben eingefügt, um zu prüfen, ob die DOM-Elemente gefunden werden und wie ihre Styles gesetzt werden.
- **Testfunktionen:** Es wurden temporär Testfunktionen eingebaut, die beim Laden der Seite die Balken sichtbar machen sollten (z.B. auf 50%, 75%, 90%).
- **Tailwind-Klassen:** Die Farbgebung der Balken erfolgt über Tailwind-Klassen (`bg-green-500`, `bg-yellow-500`, `bg-red-500`), die Breite über Inline-Styles.
- **Rückbau:** Alle experimentellen Debug- und Test-Codes wurden wieder entfernt, um den Ursprungszustand wiederherzustellen.

## Offene Fragen für Dritte
- Gibt es bekannte Probleme mit der Kombination aus Tailwind CSS und dynamisch gesetzten Inline-Styles (z.B. width) bei Fortschrittsbalken?
- Kann es sein, dass die DOM-Elemente zu einem Zeitpunkt angesprochen werden, an dem sie noch nicht im DOM sind?
- Gibt es Best Practices, wie Fortschrittsbalken in modernen TypeScript/Tailwind-Projekten am zuverlässigsten umgesetzt werden?
- Welche Debugging-Strategie wäre am effektivsten, um das Problem weiter einzugrenzen?

## Relevante Dateien
- `ui/statistics.ts` (Logik für Fortschrittsbalken)
- `index.html` (enthält die Balken-Elemente)
- `trainer.ts` (Initialisierung, State-Management)

---
**Kontakt:**
- Entwickler: Frank Burkert
- Projekt: A1-Vokabeltrainer
- Stand: [Datum hier eintragen] 