# Step 1: Classification Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER guess classification without systematic analysis
- ✅ En cas de doute sur la classification, toujours prendre la classe supérieure
- 📋 L'intended use est le document le plus important pour la classification
- 💬 CITE specific classification rules and guidance
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Load and verify Intended Use document
- 📖 Understand the clinical context completely
- 💾 Initialize classification document
- 🚫 FORBIDDEN to classify without Intended Use

## YOUR TASK:

Initialize the SaMD classification process by verifying prerequisites and understanding the Intended Use.

## INITIALIZATION SEQUENCE:

### 1. Verify Prerequisites

Check for required documents:

- `docs/regulatory/intended-use.md` — **REQUIRED**
- `docs/regulatory/regulatory-scoping.md` — Recommended
- `{planning_artifacts}/prd.md` — Helpful context

If Intended Use is missing:
"⚠️ **Document requis manquant**

Le document Intended Use (`docs/regulatory/intended-use.md`) est **obligatoire** pour procéder à la classification.

L'Intended Use définit :
- La fonction clinique exacte du logiciel
- Les utilisateurs prévus
- Les conditions d'utilisation
- Les pathologies ou conditions ciblées

**Options:**
**[CREATE]** Créer l'Intended Use maintenant (je vous guiderai)
**[LOAD]** Charger un Intended Use existant (indiquer le chemin)

Sans Intended Use, la classification ne peut pas être effectuée de manière fiable."

### 2. Load and Analyze Intended Use

Read the Intended Use document and extract:

**Key Classification Inputs:**
- **Statement of Purpose:** What does the software do?
- **Intended Users:** Healthcare professionals, patients, or both?
- **Use Environment:** Clinical, home, point-of-care?
- **Clinical Decision:** Does the software inform, drive, or replace clinical decisions?
- **Disease/Condition:** What healthcare situation is addressed?
- **Seriousness:** Critical (death/irreversible), Serious (intervention needed), Non-serious?

Present analysis:
"**Analyse de l'Intended Use pour {project_name}:**

**Fonction principale:**
{purpose_statement}

**Utilisateurs prévus:**
{intended_users}

**Environnement d'utilisation:**
{use_environment}

**Impact sur la décision clinique:**
- Le logiciel {informs/drives/replaces} la décision clinique
- Le professionnel de santé {can/cannot} vérifier indépendamment

**Situation de santé ciblée:**
- Condition : {condition}
- Gravité de la situation : {critical/serious/non-serious}

Ces éléments sont-ils corrects ? Ils déterminent directement la classification."

### 3. Initialize Classification Document

Create `docs/regulatory/samd-classification.md`:

```markdown
---
document: samd-classification
project: {project_name}
version: 1.0.0
date: {date}
author: Dr. Régis (Regulatory Affairs)
status: draft
stepsCompleted: [step-01]
intended_use_ref: docs/regulatory/intended-use.md
---

# SaMD Classification — {project_name}

## 1. Classification Inputs

### 1.1 Intended Use Summary

**Purpose:** {purpose}
**Users:** {users}
**Environment:** {environment}
**Clinical Decision Impact:** {impact}
**Target Condition:** {condition}
**Condition Severity:** {severity}

### 1.2 Source Documents

- Intended Use: `docs/regulatory/intended-use.md`
- Regulatory Scoping: `docs/regulatory/regulatory-scoping.md`

## 2. Classification Analysis

{to_be_completed_in_next_steps}
```

### 4. Present Menu

"**Initialisation de la classification complétée**

J'ai analysé l'Intended Use de **{project_name}**.

**Éléments clés identifiés:**
- Type de SaMD : {type}
- Impact sur décision clinique : {impact}
- Gravité de la situation : {severity}

**Prochaine étape:**
Je vais appliquer systématiquement les arbres de décision :
1. IMDRF SaMD Framework (international)
2. FDA SaMD Classification
3. MDR Rule 11 (Europe)
4. IEC 62304 Safety Class

**[C] Continuer** — Procéder à la classification IMDRF"

## SUCCESS METRICS:

✅ Intended Use document verified and loaded
✅ Classification inputs clearly extracted
✅ Clinical decision impact understood
✅ Condition severity assessed
✅ Classification document initialized

## FAILURE MODES:

❌ Proceeding without Intended Use
❌ Misunderstanding clinical decision impact
❌ Underestimating condition severity
❌ Not documenting classification inputs

## NEXT STEP:

After user selects [C] to continue, load `./step-02-imdrf-classification.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
