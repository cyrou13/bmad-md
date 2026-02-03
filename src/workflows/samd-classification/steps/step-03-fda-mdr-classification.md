# Step 3: FDA & MDR Classification

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER conflate FDA and MDR classification systems
- ✅ ALWAYS apply each system's specific rules
- 📋 DOCUMENT regulatory references precisely
- 💬 FDA and MDR classifications may differ for the same product
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Apply FDA classification rules
- 📖 Apply MDR Rule 11 systematically
- 💾 Document both classifications with references
- 🚫 FORBIDDEN to assume classifications are identical

## YOUR TASK:

Determine the FDA Device Classification and MDR Classification for the SaMD.

## FDA CLASSIFICATION SEQUENCE:

### 1. FDA SaMD Classification

Present the FDA framework:
"**Classification FDA**

La FDA classe les dispositifs médicaux en trois classes selon le risque :

| Classe | Risque | Contrôle | Exemples SaMD |
|--------|--------|----------|---------------|
| I | Faible | General Controls | Wellness apps, data display |
| II | Modéré | Special Controls | CADe, clinical calculators |
| III | Élevé | PMA | CADx standalone, AI diagnosis |

**Mapping IMDRF → FDA (guidance général) :**
- IMDRF I → FDA Class I ou II
- IMDRF II → FDA Class II
- IMDRF III → FDA Class II ou III
- IMDRF IV → FDA Class III

Avec IMDRF Catégorie **{imdrf_category}**, la classification FDA probable est **Classe {fda_class_estimate}**."

### 2. FDA Submission Pathway

Determine pathway:
"**Pathway de soumission FDA:**

Basé sur la classification FDA Classe {fda_class} :

**Si Classe I:**
- 510(k) exempt (généralement)
- Listing FDA requis
- Conformité aux General Controls

**Si Classe II:**
- **510(k)** si predicate device existe
- **De Novo** si novel, low-to-moderate risk
- Special Controls applicables

**Si Classe III:**
- **PMA** (Premarket Approval) requis
- Études cliniques généralement requises
- Processus le plus rigoureux

**Pour {project_name}:**
- Classification recommandée : Classe **{fda_class}**
- Pathway recommandé : **{pathway}**
- Predicate potentiel : {predicate_if_510k}

Cette classification est-elle alignée avec votre stratégie ?"

### 3. MDR Rule 11 Classification

Apply MDR Rule 11:
"**Classification MDR 2017/745 — Rule 11**

La Rule 11 s'applique spécifiquement aux logiciels (SaMD) :

**Rule 11 Decision Tree:**

1. **Le logiciel fournit-il des informations utilisées pour prendre des décisions à des fins diagnostiques ou thérapeutiques ?**
   - Non → Classe I
   - Oui → Continuer

2. **Ces décisions peuvent-elles causer :**
   - Décès ou détérioration irréversible → **Classe III**
   - Détérioration grave → **Classe IIb**
   - Autre → **Classe IIa**

3. **Exception Classe I :** Logiciels destinés au stockage, archivage, communication, ou recherche simple.

**Analyse pour {project_name}:**

**Question 1:** Le logiciel fournit-il des informations pour décisions diagnostiques/thérapeutiques ?
- Réponse : {yes/no}
- Justification : {rationale}

**Question 2 (si oui):** Impact potentiel des décisions ?
- Réponse : {death_irreversible/serious/other}
- Justification : {rationale}

**Classification MDR:** Classe **{mdr_class}**"

### 4. Notified Body Requirement

Determine NB requirement:
"**Exigence d'Organisme Notifié (MDR):**

| Classe MDR | Organisme Notifié | Procédure |
|------------|-------------------|-----------|
| I | Non requis | Self-declaration |
| IIa | Requis | Annex IX ou XI |
| IIb | Requis | Annex IX ou X |
| III | Requis | Annex IX + X |

**Pour {project_name} (Classe {mdr_class}):**
- Organisme Notifié : **{required/not_required}**
- Procédure de conformité : **{procedure}**"

### 5. Append to Document

Append to `docs/regulatory/samd-classification.md`:

```markdown
## 3. FDA Classification

### 3.1 Device Classification
- **FDA Class:** {fda_class}
- **Rationale:** {rationale}
- **Reference:** 21 CFR Part 860, FDA SaMD Guidance

### 3.2 Submission Pathway
- **Pathway:** {510k/De_Novo/PMA}
- **Predicate (if 510k):** {predicate_or_na}
- **Special Controls:** {if_applicable}

## 4. MDR Classification

### 4.1 Rule 11 Analysis
- **Decision Node 1:** {yes/no} — {rationale}
- **Decision Node 2:** {impact} — {rationale}

### 4.2 MDR Class
- **Classification:** Class {mdr_class}
- **Reference:** MDR 2017/745, Annex VIII, Rule 11
- **Notified Body Required:** {yes/no}
- **Conformity Procedure:** {procedure}
```

Update frontmatter: `stepsCompleted: [step-01, step-02, step-03]`

### 6. Present Comparison and Menu

"**Récapitulatif des classifications réglementaires:**

| Framework | Classification | Pathway/Procedure |
|-----------|---------------|-------------------|
| IMDRF | Catégorie {imdrf} | International reference |
| FDA | Class {fda} | {fda_pathway} |
| MDR | Class {mdr} | {mdr_procedure} |

**Observations:**
{alignment_or_differences_between_classifications}

**[C] Continuer** — Procéder à la classification IEC 62304
**[R] Réviser** — Revoir les classifications FDA/MDR"

## SUCCESS METRICS:

✅ FDA classification determined with rationale
✅ Submission pathway identified
✅ MDR Rule 11 applied systematically
✅ Notified Body requirement clarified
✅ Both classifications documented with references

## FAILURE MODES:

❌ Conflating FDA and MDR systems
❌ Not applying Rule 11 decision tree
❌ Missing regulatory references
❌ Not identifying submission pathway

## NEXT STEP:

After user selects [C] to continue, load `./step-04-iec62304-safety-class.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
