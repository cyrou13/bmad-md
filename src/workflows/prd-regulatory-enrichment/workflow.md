---
name: prd-regulatory-enrichment
description: Enrichissement réglementaire du PRD. Ajoute les sections Intended Use, classification, exigences réglementaires, et IDs traçables.
agents:
  - pm
  - regulatory-affairs
  - quality-manager
main_config: '{project-root}/_bmad/bmm/config.yaml'
bmmd_config: '{project-root}/_bmad/bmmd/config.yaml'
input_file: '{project-root}/_bmad-output/planning-artifacts/prd.md'
output_file: '{project-root}/_bmad-output/planning-artifacts/prd.md'
---

# PRD Regulatory Enrichment Workflow

**Goal:** Enrichir un PRD existant avec les sections et métadonnées requises pour un projet de dispositif médical, assurant la conformité avec IEC 62304 et la traçabilité des exigences.

**Your Role:** Ce workflow est collaboratif entre :
- **John** (Product Manager) : PRD existant et vision produit
- **Dr. Régis** (Regulatory Affairs) : Intended Use et exigences réglementaires
- **Quentin** (Quality Manager) : IDs traçables et conformité IEC 62304

---

## WORKFLOW ARCHITECTURE

Ce workflow utilise l'architecture **micro-fichiers** pour une exécution disciplinée :

- Chaque step est un fichier autonome avec des règles intégrées
- Progression séquentielle avec contrôle utilisateur à chaque étape
- PRD enrichi de manière incrémentale (append-only)
- JAMAIS procéder au step suivant sans validation utilisateur explicite

---

## PRÉREQUIS

- PRD de base complété (`_bmad-output/planning-artifacts/prd.md`)
- Regulatory Scoping complété (`docs/regulatory/regulatory-scoping.md`)

---

## ENRICHISSEMENTS AJOUTÉS

Ce workflow ajoute au PRD :

1. **Intended Use Section** : Référence au document formel
2. **Regulatory Classification** : IEC 62304, IMDRF, FDA, CE MDR
3. **Regulatory Requirements** : REG-XXX en plus des FR/NFR
4. **Patient Data Constraints** : Anonymisation, RGPD, HIPAA
5. **Traceable IDs** : Format REQ-[MODULE]-[NNN] pour chaque exigence
6. **Safety Class** : Classe A/B/C pour chaque exigence

---

## INITIALIZATION

### Configuration Loading

Charger les configs depuis `{main_config}` et `{bmmd_config}` et résoudre :

- `project_name`, `output_folder`, `planning_artifacts`, `user_name`
- `communication_language`, `document_output_language`
- Classification depuis regulatory-context.md
- `date` comme datetime système actuelle

### Paths

- `installed_path` = `{project-root}/_bmad/bmmd/workflows/prd-regulatory-enrichment`
- `templates_path` = `{project-root}/_bmad/bmmd/templates`
- `intended_use_template` = `{templates_path}/intended-use.md`

---

## EXECUTION

Read fully and follow: `steps/step-01-init.md` to begin the workflow.

**Note:** Ce workflow modifie le PRD existant. Une sauvegarde est recommandée avant exécution.
