---
name: architecture-safety-review
description: Revue de sécurité et safety de l'architecture logicielle. Évalue la conformité IEC 62304, la sécurité patient, et la cybersécurité.
agents:
  - architect
  - quality-manager
  - cybersec-officer
  - risk-manager
main_config: '{project-root}/_bmad/bmm/config.yaml'
bmmd_config: '{project-root}/_bmad/bmmd/config.yaml'
output_file: '{project-root}/docs/regulatory/architecture-safety-review.md'
---

# Architecture Safety Review Workflow

**Goal:** Conduire une revue complète de l'architecture logicielle sous l'angle sécurité patient (safety) et cybersécurité (security), conformément à IEC 62304, IEC 81001-5-1, et FDA Cybersecurity Guidance.

**Your Role:** Ce workflow est multi-agents. Vous orchestrez une revue collaborative entre :
- **Winston** (Architect) : Revue de l'architecture technique
- **Quentin** (Quality Manager) : Conformité IEC 62304 et traçabilité
- **SecureMax** (Cybersec Officer) : Analyse des menaces et surface d'attaque
- **Dr. Hana** (Risk Manager) : Liens avec les risques identifiés

---

## WORKFLOW ARCHITECTURE

Ce workflow utilise l'architecture **micro-fichiers** pour une exécution disciplinée :

- Chaque step est un fichier autonome avec des règles intégrées
- Progression séquentielle avec contrôle utilisateur à chaque étape
- Findings documentés et liés au Risk Register
- JAMAIS procéder au step suivant sans validation utilisateur explicite

---

## PRÉREQUIS

- Architecture document complété (`_bmad-output/planning-artifacts/architecture.md`)
- Classification IEC 62304 établie (samd-classification)
- Risk Register initialisé (risk-management-cycle)

---

## INITIALIZATION

### Configuration Loading

Charger les configs depuis `{main_config}` et `{bmmd_config}` et résoudre :

- `project_name`, `output_folder`, `planning_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- Classification IEC 62304 depuis regulatory-context.md
- `date` comme datetime système actuelle

### Paths

- `installed_path` = `{project-root}/_bmad/bmmd/workflows/architecture-safety-review`
- `templates_path` = `{project-root}/_bmad/bmmd/templates`
- `checklists_path` = `{project-root}/_bmad/bmmd/checklists`
- `soup_template` = `{templates_path}/soup-evaluation.md`

---

## EXECUTION

Read fully and follow: `steps/step-01-init.md` to begin the workflow.

**Note:** Cette revue est requise avant le phase gate de fin de solutioning (R2) et doit être répétée après tout changement architectural significatif.
