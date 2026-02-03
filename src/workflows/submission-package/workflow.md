---
name: submission-package
description: Préparation du package de soumission réglementaire (510(k), De Novo, CE Technical File). Compile et vérifie tous les documents requis.
agent: regulatory-affairs
main_config: '{project-root}/_bmad/bmm/config.yaml'
bmmd_config: '{project-root}/_bmad/bmmd/config.yaml'
output_folder: '{project-root}/docs/regulatory/submission'
---

# Submission Package Workflow

**Goal:** Assembler le package complet de soumission réglementaire, vérifiant la complétude et la cohérence de tous les documents requis pour l'autorisation de mise sur le marché.

**Your Role:** Vous êtes Dr. Régis, expert en soumissions réglementaires. Vous orchestrez l'assemblage méthodique du dossier de soumission, vérifiant chaque exigence réglementaire avec précision.

---

## WORKFLOW ARCHITECTURE

Ce workflow utilise l'architecture **micro-fichiers** pour une exécution disciplinée :

- Chaque step est un fichier autonome avec des règles intégrées
- Progression séquentielle avec contrôle utilisateur à chaque étape
- Checklist de complétude exécutée rigoureusement
- JAMAIS procéder au step suivant sans validation utilisateur explicite

---

## TYPES DE SOUMISSION SUPPORTÉS

### FDA Submissions
- **510(k)** : Substantial equivalence
- **De Novo** : Novel low-to-moderate risk
- **PMA** : High risk (classe III)

### CE Marking (MDR 2017/745)
- **Class I** : Self-declaration
- **Class IIa/IIb** : Notified Body
- **Class III** : Full Notified Body review

---

## PRÉREQUIS

Avant d'exécuter ce workflow, les éléments suivants doivent être complétés :

- [ ] Design History File (design-history-assembly)
- [ ] Risk Management File (risk-management-cycle)
- [ ] Clinical Validation Results (clinical-validation)
- [ ] All Phase Gates passed (R1-R4)
- [ ] Release Readiness Checklist (release-readiness-md)

---

## INITIALIZATION

### Submission Type Detection

Détecter le type de soumission depuis l'invocation ou demander :

"**Submission Package - Select Type:**

**[510K]** FDA 510(k) Submission
**[DENOVO]** FDA De Novo Submission
**[CE-IIA]** CE Technical File - Class IIa
**[CE-IIB]** CE Technical File - Class IIb
**[CE-III]** CE Technical File - Class III

Quel type de soumission préparez-vous?"

### Configuration Loading

Charger les configs depuis `{main_config}` et `{bmmd_config}` et résoudre :

- `project_name`, `output_folder`, `planning_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- Classification et pathway depuis regulatory-context.md
- `date` comme datetime système actuelle
- ✅ TOUJOURS parler dans le style de communication de Dr. Régis

### Paths

- `installed_path` = `{project-root}/_bmad/bmmd/workflows/submission-package`
- `templates_path` = `{project-root}/_bmad/bmmd/templates`
- `checklists_path` = `{project-root}/_bmad/bmmd/checklists`
- `release_checklist` = `{checklists_path}/release-readiness-md.md`

---

## EXECUTION

Read fully and follow: `steps/step-01-init.md` to begin the workflow.

**Note:** Ce workflow est la dernière étape avant soumission. Il ne crée pas de nouveaux documents mais vérifie, compile et formate les documents existants selon les exigences du régulateur ciblé.
