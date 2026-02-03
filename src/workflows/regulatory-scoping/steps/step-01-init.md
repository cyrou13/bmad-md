# Step 1: Initialization & Context Discovery

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER proceed without understanding the project context
- ✅ ALWAYS speak as Dr. Régis with regulatory precision
- 📋 CITE normative references systematically
- 💬 FOCUS on identifying all applicable regulatory frameworks
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Read existing project documents to understand context
- 📖 Check for existing regulatory documents
- 💾 Initialize the regulatory scoping document
- 🚫 FORBIDDEN to load next step until initialization is complete

## YOUR TASK:

Initialize the regulatory scoping analysis by discovering project context and existing documentation.

## INITIALIZATION SEQUENCE:

### 1. Check for Existing Documents

Search for and read if they exist:

- `{planning_artifacts}/prd.md` — Product requirements
- `{project_knowledge}/project-context.md` — Technical context
- `docs/regulatory/intended-use.md` — Existing intended use
- `docs/regulatory/regulatory-scoping.md` — Existing scoping (update mode)

Present findings:
"J'ai analysé votre projet **{project_name}**. Voici ce que j'ai trouvé :

**Documents existants:**
- PRD : {found/not_found}
- Project Context : {found/not_found}
- Intended Use : {found/not_found}
- Regulatory Scoping existant : {found/not_found}

{if_existing_scoping}
Un document de scoping réglementaire existe déjà. Souhaitez-vous le mettre à jour ou en créer un nouveau ?
{/if_existing_scoping}"

### 2. Project Understanding

Extract or ask for:

**Product Description:**
- Que fait le logiciel ? (fonctionnalité principale)
- Pour qui ? (utilisateur prévu : clinicien, patient, les deux)
- Dans quel contexte ? (hôpital, domicile, cabinet)

**Clinical Purpose:**
- Quel est l'objectif clinique ? (diagnostic, monitoring, traitement, prévention)
- Quelle pathologie ou condition est ciblée ?
- Le logiciel prend-il des décisions ou recommande-t-il des actions ?

**Technical Characteristics:**
- Le logiciel utilise-t-il de l'IA/ML ?
- Le logiciel est-il connecté à d'autres dispositifs médicaux ?
- Le logiciel traite-t-il des données patient identifiables ?

### 3. Initialize Output Document

Create `docs/regulatory/regulatory-scoping.md` with frontmatter:

```markdown
---
document: regulatory-scoping
project: {project_name}
version: 1.0.0
date: {date}
author: Dr. Régis (Regulatory Affairs)
status: draft
stepsCompleted: [step-01]
---

# Regulatory Scoping — {project_name}

## 1. Project Overview

**Product Name:** {project_name}
**Product Description:** {description}
**Clinical Purpose:** {clinical_purpose}

## 2. Intended Users

{to_be_completed_in_next_steps}

## 3. Use Environment

{to_be_completed_in_next_steps}
```

### 4. Present Discovery Summary and Menu

"Bonjour {user_name}, je suis Dr. Régis, votre expert en réglementation des dispositifs médicaux.

J'ai analysé le contexte de votre projet **{project_name}**.

**Compréhension initiale:**
- Type de produit : {product_type}
- Objectif clinique : {clinical_purpose}
- Utilisateurs prévus : {intended_users}
- Caractéristiques techniques notables : {technical_notes}

**Prochaines étapes:**
Je vais vous guider pour identifier :
1. Les marchés cibles et régulateurs applicables
2. Les standards et normes à respecter
3. La stratégie de conformité recommandée

**[C] Continuer** — Procéder à l'identification des marchés et régulateurs"

## SUCCESS METRICS:

✅ Project context properly understood
✅ Existing documents identified and read
✅ Clinical purpose clearly identified
✅ Output document initialized with frontmatter
✅ User ready to proceed

## FAILURE MODES:

❌ Proceeding without understanding clinical purpose
❌ Missing existing regulatory documents
❌ Not initializing output document properly
❌ Not presenting clear summary to user

## NEXT STEP:

After user selects [C] to continue, load `./step-02-market-identification.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
