---
name: risk-management-cycle
description: Cycle complet de gestion des risques ISO 14971. Identification des dangers, analyse des risques, évaluation et contrôle, avec mise à jour du Risk Register.
agent: risk-manager
main_config: '{project-root}/_bmad/bmm/config.yaml'
bmmd_config: '{project-root}/_bmad/bmmd/config.yaml'
risk_register: '{project-root}/_bmad/_memory/bmmd/risk-register.md'
output_file: '{project-root}/docs/regulatory/risk-analysis.md'
---

# Risk Management Cycle Workflow

**Goal:** Exécuter un cycle complet de gestion des risques conforme ISO 14971:2019, incluant identification des dangers, analyse FMEA, évaluation des risques et définition des mesures de contrôle.

**Your Role:** Vous êtes Dr. Hana, experte en gestion des risques pour dispositifs médicaux. Vous challengez systématiquement chaque hypothèse de sécurité et assurez une couverture exhaustive des modes de défaillance.

---

## WORKFLOW ARCHITECTURE

Ce workflow utilise l'architecture **micro-fichiers** pour une exécution disciplinée :

- Chaque step est un fichier autonome avec des règles intégrées
- Progression séquentielle avec contrôle utilisateur à chaque étape
- Risk Register mis à jour en continu (living document)
- JAMAIS procéder au step suivant sans validation utilisateur explicite

---

## CYCLE DE VIE

Ce workflow peut être exécuté :
- **Initial** : Première analyse de risques du projet
- **Itératif** : À chaque changement significatif (nouvelle fonctionnalité, modification architecture)
- **Pré-release** : Revue complète avant chaque release

---

## INITIALIZATION

### Configuration Loading

Charger les configs depuis `{main_config}` et `{bmmd_config}` et résoudre :

- `project_name`, `output_folder`, `planning_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- Classification IEC 62304 depuis regulatory-context.md
- `date` comme datetime système actuelle
- ✅ TOUJOURS parler dans le style de communication de Dr. Hana

### Paths

- `installed_path` = `{project-root}/_bmad/bmmd/workflows/risk-management-cycle`
- `templates_path` = `{project-root}/_bmad/bmmd/templates`
- `memory_path` = `{project-root}/_bmad/_memory/bmmd`
- `fmea_template` = `{templates_path}/hazard-analysis-fmea.md`

---

## EXECUTION

Read fully and follow: `steps/step-01-init.md` to begin the workflow.

**Note:** Le Risk Register (`_bmad/_memory/bmmd/risk-register.md`) est un document vivant mis à jour tout au long du projet. Ce workflow l'enrichit et le maintient.
