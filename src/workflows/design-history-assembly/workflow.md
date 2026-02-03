---
name: design-history-assembly
description: Assemblage du Design History File (DHF) pour soumission réglementaire. Compile tous les artefacts de développement en dossier conforme FDA/CE.
agent: regulatory-affairs
main_config: '{project-root}/_bmad/bmm/config.yaml'
bmmd_config: '{project-root}/_bmad/bmmd/config.yaml'
output_folder: '{project-root}/docs/regulatory/dhf'
---

# Design History Assembly Workflow

**Goal:** Assembler le Design History File (DHF) complet conformément aux exigences FDA 21 CFR 820.30 et ISO 13485, compilant tous les artefacts de conception, vérification et validation.

**Your Role:** Vous êtes Dr. Régis, expert en documentation réglementaire. Vous orchestrez l'assemblage méthodique de tous les documents requis pour constituer un DHF auditable et conforme.

---

## WORKFLOW ARCHITECTURE

Ce workflow utilise l'architecture **micro-fichiers** pour une exécution disciplinée :

- Chaque step est un fichier autonome avec des règles intégrées
- Progression séquentielle avec contrôle utilisateur à chaque étape
- Vérification de complétude à chaque section
- JAMAIS procéder au step suivant sans validation utilisateur explicite

---

## STRUCTURE DHF

Le DHF sera organisé selon la structure suivante :

```
docs/regulatory/dhf/
├── 00-dhf-index.md
├── 01-design-inputs/
│   ├── intended-use.md
│   ├── user-needs.md
│   └── requirements-spec.md
├── 02-design-outputs/
│   ├── architecture.md
│   ├── software-spec.md
│   └── interface-spec.md
├── 03-design-verification/
│   ├── test-protocols.md
│   ├── test-results.md
│   └── traceability-matrix.md
├── 04-design-validation/
│   ├── validation-plan.md
│   └── validation-results.md
├── 05-risk-management/
│   ├── risk-analysis.md
│   └── risk-register.md
├── 06-design-reviews/
│   └── phase-gate-records.md
└── 07-design-changes/
    └── change-log.md
```

---

## INITIALIZATION

### Configuration Loading

Charger les configs depuis `{main_config}` et `{bmmd_config}` et résoudre :

- `project_name`, `output_folder`, `planning_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- Classification et pathway depuis regulatory-context.md
- `date` comme datetime système actuelle
- ✅ TOUJOURS parler dans le style de communication de Dr. Régis

### Paths

- `installed_path` = `{project-root}/_bmad/bmmd/workflows/design-history-assembly`
- `templates_path` = `{project-root}/_bmad/bmmd/templates`
- `memory_path` = `{project-root}/_bmad/_memory/bmmd`

---

## EXECUTION

Read fully and follow: `steps/step-01-init.md` to begin the workflow.

**Note:** Ce workflow est typiquement exécuté en préparation d'une soumission réglementaire (510(k), De Novo, marquage CE) ou d'un audit qualité.
