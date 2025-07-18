# Architecture Decision Records (ADRs)

## 📋 Übersicht

Architecture Decision Records (ADRs) dokumentieren wichtige architektonische Entscheidungen im Projekt. Sie helfen dabei, die Begründung für bestimmte technische Entscheidungen zu verstehen und zu bewahren.

## 🗂️ ADR-Liste

| ADR | Titel | Status | Datum | Beschreibung |
|-----|-------|--------|-------|--------------|
| [ADR-0001](./0001-typescript-migration.md) | TypeScript-Migration | Accepted | 2024 | Migration von JavaScript zu TypeScript |
| [ADR-0002](./0002-folder-restructuring.md) | Ordner-Restrukturierung | Accepted | 2024 | Umstellung auf src/-basiertes Layout |
| [ADR-0003](./0003-testing-strategy.md) | Testing-Strategie | Accepted | 2024 | Vitest-basierte Testing-Strategie |
| [ADR-0004](./0004-path-aliases.md) | Path-Aliases | Accepted | 2024 | Semantische Import-Pfade |

## 📝 ADR-Template

Für neue ADRs verwende folgendes Template:

```markdown
# ADR-XXXX: [Titel]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[Problemstellung und Kontext]

## Decision
[Getroffene Entscheidung]

## Consequences

### Positive
[Positive Auswirkungen]

### Negative
[Negative Auswirkungen]

## Implementation
[Implementierungsdetails]
```

## 🔄 ADR-Lifecycle

1. **Proposed**: ADR wird vorgeschlagen
2. **Accepted**: ADR wird akzeptiert und implementiert
3. **Deprecated**: ADR wird nicht mehr verwendet
4. **Superseded**: ADR wird durch eine neue Entscheidung ersetzt

## 📚 Weitere Ressourcen

- [ADR-Format](https://adr.github.io/)
- [ADR-Tools](https://github.com/joelparkerhenderson/architecture_decision_record)
- [Best Practices](https://github.com/joelparkerhenderson/architecture_decision_record/blob/main/adr_template_by_michael_nygard.md) 