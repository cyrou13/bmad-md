# Step 2: IMDRF SaMD Classification

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER skip steps in the classification decision tree
- ✅ ALWAYS apply the IMDRF framework systematically
- 📋 DOCUMENT the decision at each node
- 💬 En cas de doute, prendre la catégorie supérieure
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Apply IMDRF N12 decision tree step by step
- 📖 Document rationale for each decision
- 💾 Record classification result
- 🚫 FORBIDDEN to skip decision nodes

## YOUR TASK:

Apply the IMDRF SaMD Framework (N12) to determine the international risk category.

## IMDRF CLASSIFICATION SEQUENCE:

### 1. IMDRF Framework Overview

Present the framework:
"**IMDRF SaMD Risk Categorization Framework (N12)**

L'IMDRF catégorise les SaMD selon deux axes :
1. **Significance of Information** — L'importance de l'information fournie pour la décision clinique
2. **State of Healthcare Situation** — La gravité de la situation de santé

**Matrice de risque IMDRF:**

| Significance | Critical | Serious | Non-serious |
|-------------|----------|---------|-------------|
| **Treat or diagnose** | IV | III | II |
| **Drive clinical management** | III | II | I |
| **Inform clinical management** | II | I | I |

Appliquons cette matrice à votre produit."

### 2. Determine Significance of Information

Walk through the decision:

"**Étape 1 : Significance of Information**

Quel est le rôle de l'information fournie par **{project_name}** ?

**[TREAT]** Treat or Diagnose
- Le logiciel fournit un diagnostic
- Le logiciel recommande/détermine un traitement
- L'action clinique découle directement du résultat

**[DRIVE]** Drive Clinical Management
- Le logiciel guide une intervention/action immédiate
- L'utilisateur s'appuie principalement sur le résultat pour agir
- Sans autre source d'information équivalente

**[INFORM]** Inform Clinical Management
- Le logiciel fournit une information parmi d'autres
- L'utilisateur peut vérifier par d'autres moyens
- L'information ne déclenche pas d'action directe

Quelle catégorie correspond à **{project_name}** ?"

Record the selection with rationale.

### 3. Determine State of Healthcare Situation

Walk through the decision:

"**Étape 2 : State of Healthcare Situation**

Quelle est la gravité de la situation de santé ciblée ?

**[CRITICAL]** Critical
- Risque de décès ou blessure irréversible
- Exemples : AVC aigu, sepsis, cancer métastatique

**[SERIOUS]** Serious
- Risque de blessure réversible nécessitant intervention
- Exemples : diabète non contrôlé, hypertension sévère

**[NON-SERIOUS]** Non-serious
- Pas de risque immédiat ou à long terme significatif
- Exemples : suivi bien-être, conditions bénignes

Quelle catégorie correspond à la situation ciblée par **{project_name}** ?"

Record the selection with rationale.

### 4. Determine IMDRF Category

Apply the matrix:

```
if significance == TREAT:
    if situation == CRITICAL: category = IV
    elif situation == SERIOUS: category = III
    else: category = II
elif significance == DRIVE:
    if situation == CRITICAL: category = III
    elif situation == SERIOUS: category = II
    else: category = I
else:  # INFORM
    if situation == CRITICAL: category = II
    else: category = I
```

Present result:
"**Résultat de la classification IMDRF:**

| Critère | Valeur | Justification |
|---------|--------|---------------|
| Significance | {significance} | {rationale} |
| Healthcare Situation | {situation} | {rationale} |
| **IMDRF Category** | **{category}** | Selon matrice IMDRF N12 |

**Implications de la Catégorie {category}:**
{category_implications}

Cette classification est-elle conforme à votre compréhension du produit ?"

### 5. Append to Document

Append to `docs/regulatory/samd-classification.md`:

```markdown
## 2. IMDRF Classification

### 2.1 Decision Tree Analysis

**Significance of Information:**
- Selected: {significance}
- Rationale: {rationale}

**State of Healthcare Situation:**
- Selected: {situation}
- Rationale: {rationale}

### 2.2 IMDRF Category

| Category | {category} |
|----------|----------|
| Reference | IMDRF/SaMD WG/N12 FINAL:2014 |
| Decision Date | {date} |
| Decided By | Dr. Régis + {user_name} |

### 2.3 Category Implications

{implications}
```

Update frontmatter: `stepsCompleted: [step-01, step-02]`

### 6. Present Menu

"**Classification IMDRF complétée**

**{project_name}** est classifié **IMDRF Catégorie {category}**

**Prochaine étape:**
Appliquer les classifications spécifiques par marché :
- FDA (États-Unis)
- MDR Rule 11 (Europe)
- IEC 62304 Safety Class

**[C] Continuer** — Procéder aux classifications FDA et MDR
**[R] Réviser** — Revoir les décisions IMDRF"

## SUCCESS METRICS:

✅ Both IMDRF axes systematically evaluated
✅ Rationale documented for each decision
✅ Category correctly derived from matrix
✅ Implications clearly explained
✅ Classification document updated

## FAILURE MODES:

❌ Skipping significance or situation analysis
❌ Not documenting rationale
❌ Misapplying the IMDRF matrix
❌ Underclassifying the product

## NEXT STEP:

After user selects [C] to continue, load `./step-03-fda-mdr-classification.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
