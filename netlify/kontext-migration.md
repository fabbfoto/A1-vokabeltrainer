# A1-Vokabeltrainer Kontext

Der A1-Vokabeltrainer ist eine modulare Lernanwendung für Deutsch als Fremdsprache (A1). Er bietet verschiedene Trainingsmodi (Multiple Choice, Schreibweise, Lückentext, Satzübersetzung) und eine thematische Navigation. Die Migration von JavaScript zu TypeScript und Vite ist im Gange.

## 2. Zielsetzung der Migration

- **Vollständige Migration** von JS zu TypeScript (inkl. Typisierung aller Datenstrukturen)
- **Feature-Parität**: Jede Funktion des alten Trainers muss exakt wie zuvor funktionieren
- **Moderne Build-Umgebung**: Vite als Dev-Server, modulare Struktur
- **Wartbarkeit & Erweiterbarkeit**: Klare Typen, modulare UI, zentrale State-Verwaltung
- **Design erst nach Funktion**: Erst wenn alle Features laufen, wird das Design optimiert

## 3. Feature-Checkliste (Alt vs. Neu)

| Feature                        | Alt (JS) | Neu (TS) | Status         |
|-------------------------------|:--------:|:--------:|:--------------|
| Themen-/Subthemen-Navigation  |    ✔️    |    ✔️    | OK            |
| Multiple Choice               |    ✔️    |    ✔️    | OK            |
| Schreibweise                  |    ✔️    |    ✔️    | OK            |
| Lückentext                    |    ✔️    |    ✔️    | OK            |
| Satzübersetzung               |    ✔️    |    ✔️    | OK            |
| Fortschrittsbalken            |    ✔️    |    ✔️    | OK            |
| Beispiel-Satz (Kasus-Farbe)   |    ✔️    |    ✔️    | OK            |
| Umlaut-Buttons                |    ✔️    |    ✔️    | OK            |
| Navigation „Zurück“           |    ✔️    |    ✔️    | OK            |
| Statistiken                   |    ✔️    |    ✔️    | OK            |
| Globaler Test                 |    ✔️    |    ✔️    | OK            |
| Geräte-Sync (Firebase)        |    ✔️    |    ❌    | Ausstehend    |
| Responsive Design             |    ✔️    |    ✔️    | OK            |
| Minimal-Design                |    ✔️    |    ✔️    | OK            |

## 4. Systematischer Migrationsplan

1. **Vokabular-Migration**
   - Alle Vokabular-Dateien nach TypeScript, einheitliches Schema (`VocabularyStructure`, `createVocabulary`)
   - Typisierung und Validierung
2. **TypeScript-Konfiguration**
   - `tsconfig.json` modernisieren, Fehler beheben
   - Editor/Cache-Probleme lösen
3. **Abhängigkeiten & Build**
   - Fehlende Pakete installieren, Build-Probleme lösen
4. **UI-Logik & Navigation**
   - Event-Listener, Button-Logik, DOM-Attribute prüfen und reparieren
   - Navigation und Modus-Umschaltung testen
5. **Trainingsmodi & Aufgabenfluss**
   - Aufgabenanzeige, Fortschritt, Feedback, automatische Weiterleitung nach Antwort
   - Statistiken und Fortschrittsbalken prüfen
6. **Beispielsatz-Feature**
   - Kasus-Färbung, Satzanzeige, Kompatibilität mit alten und neuen Feldern
7. **Design-Reset & Wiederherstellung**
   - Erst alles Styling entfernen, dann nach Feature-Parität das Design (Tailwind) wiederherstellen
8. **Firebase-Sync**
   - Nach Abschluss aller Features re-integrieren

## 5. Hinweise zu Design & Funktionalität

- **Design folgt Funktion:** Erst wenn alle Features laufen, wird das Design optimiert (Tailwind, Farben, Abstände etc.)
- **Zentrale UI-Elemente:** Button-Factory, Progressbars, Navigation, Feedback
- **Kasus-Färbung:** Per Tailwind-Klassen, Mapping in Helper-Funktion
- **State-Management:** Fortschritt als Set, Serialisierung/Deserialisierung beachten
- **Testing:** Immer mit leerem localStorage und frischem Build testen

## 6. ToDo-Liste für vollständige Parität

- [ ] Letzte TypeScript-Fehler beheben
- [ ] Letzte Styling-Details prüfen (Buttons, Progressbars, Satzanzeige)
- [ ] Geräte-Sync (Firebase) reaktivieren und testen
- [ ] Endgültige Feature-Checkliste abgleichen
- [ ] Code- und Design-Review durchführen

## 7. Hinweise für zukünftige Entwicklung

- **Feature-Entwicklung:** Immer erst Funktion, dann Design
- **Type-Safety:** Keine `any`-Typen, alle Datenstrukturen typisieren
- **Modularisierung:** Neue Features als eigene Module/Komponenten
- **Testing:** Automatisierte Tests für Kernfunktionen anstreben
- **Dokumentation:** Kontext.md und README aktuell halten

---

*Letztes Update: $(date +%Y-%m-%d)*
