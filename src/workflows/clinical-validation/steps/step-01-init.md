# Step 1: Clinical Validation Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER design validation without understanding clinical claims
- ✅ Aucune performance claim sans évidence statistique suffisante
- 📋 Le dataset de validation doit être représentatif de la population cible
- 💬 Les métriques de performance doivent être cliniquement significatives
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Understand the clinical claims to be validated
- 📖 Determine validation type required
- 💾 Initialize validation plan document
- 🚫 FORBIDDEN to proceed without clear performance objectives

## YOUR TASK:

Initialize the clinical validation planning by understanding the claims and context.

## INITIALIZATION SEQUENCE:

### 1. Load Required Documents

Read and analyze:
- `docs/regulatory/intended-use.md` — **REQUIRED**
- `docs/regulatory/samd-classification.md` — **REQUIRED**
- `{planning_artifacts}/prd.md` — Performance requirements
- `_bmad/_memory/bmmd/regulatory-context.md` — Classification info

Present context:
"Bonjour {user_name}, je suis Dr. Claire, médecin et biostatisticienne.

J'ai analysé le contexte clinique de **{project_name}** :

**Contexte réglementaire:**
- Classification IMDRF : Catégorie {imdrf}
- Classification IEC 62304 : Classe {safety_class}
- Pathway réglementaire : {pathway}

**Implication pour la validation:**
{classification_specific_requirements}

Plus la classification est élevée, plus le niveau de preuve clinique requis est important."

### 2. Identify Clinical Claims

Extract performance claims:
"**Claims cliniques à valider pour {project_name}:**

D'après l'Intended Use et le PRD, les claims identifiés sont :

| Claim ID | Type | Statement | Metric Target |
|----------|------|-----------|---------------|
| CLM-001 | Diagnostic accuracy | {claim} | {target} |
| CLM-002 | Clinical benefit | {claim} | {target} |
| CLM-003 | Safety | {claim} | {target} |

**Types de claims:**
- **Diagnostic Performance:** Sensibilité, spécificité, AUC, PPV, NPV
- **Clinical Benefit:** Amélioration outcomes, réduction délai
- **Safety:** Absence de harm, équivalence au standard of care
- **Usability:** Performance en conditions réelles d'utilisation

Quels claims devons-nous valider en priorité ?"

### 3. Determine Validation Type

"**Type de validation requis:**

Selon la classification et les claims, déterminez le type de validation :

**[ANALYTICAL]** Validation Analytique
- Validation technique sur datasets de référence
- Ground truth établi par gold standard
- Approprié pour : claims de performance technique
- Exemple : Sensibilité/spécificité sur dataset labélisé

**[CLINICAL]** Validation Clinique
- Validation en conditions réelles d'utilisation
- Performance mesurée sur patients réels
- Approprié pour : claims de bénéfice clinique
- Exemple : Amélioration du diagnostic en environnement clinique

**[AIML]** Validation AI/ML Spécifique
- Validation de robustesse, biais, OOD
- Tests de performance sur sous-populations
- Approprié pour : composants AI/ML
- Référence : `_bmad/bmmd/checklists/ai-ml-validation-checklist.md`

**[COMBINED]** Validation Combinée
- Plusieurs types selon les claims
- Typique pour SaMD de classe élevée

Quel(s) type(s) de validation sont requis ?"

### 4. Statistical Power Considerations

Present statistical requirements:
"**Considérations statistiques préliminaires:**

Pour chaque claim, nous devrons définir :

1. **Hypothèse nulle et alternative:**
   - H0 : {null_hypothesis}
   - H1 : {alternative_hypothesis}

2. **Métriques primaires et secondaires:**
   - Endpoint primaire : {primary_endpoint}
   - Endpoints secondaires : {secondary_endpoints}

3. **Calcul de puissance (sample size):**
   - Effet attendu : {expected_effect}
   - Puissance souhaitée : 80-90% (standard)
   - Alpha (risque type I) : 0.05 (standard)
   - Taille d'échantillon estimée : {to_be_calculated}

4. **Population cible:**
   - Critères d'inclusion : {inclusion_criteria}
   - Critères d'exclusion : {exclusion_criteria}
   - Représentativité : {representativeness_requirements}

Ces éléments seront détaillés dans les prochaines étapes."

### 5. Initialize Validation Plan Document

Create `docs/regulatory/clinical-validation-plan.md`:

```markdown
---
document: clinical-validation-plan
project: {project_name}
version: 1.0.0
date: {date}
author: Dr. Claire (Clinical Evaluator)
status: draft
stepsCompleted: [step-01]
classification_ref: docs/regulatory/samd-classification.md
---

# Clinical Validation Plan — {project_name}

## 1. Executive Summary

**Product:** {project_name}
**Classification:** IMDRF {imdrf}, IEC 62304 Class {safety_class}
**Validation Type:** {validation_type}
**Regulatory Pathway:** {pathway}

## 2. Clinical Claims

{claims_table}

## 3. Validation Approach

{to_be_completed}
```

### 6. Present Menu

"**Initialisation de la validation clinique complétée**

**Résumé pour {project_name}:**
- Classification : IMDRF Catégorie {imdrf}
- Claims à valider : {count}
- Type de validation : {type}

**Prochaines étapes:**
1. Définir le protocole de validation détaillé
2. Spécifier les datasets et populations
3. Définir les critères de succès statistiques
4. Planifier les analyses AI/ML si applicable

**[C] Continuer** — Définir le protocole de validation"

## SUCCESS METRICS:

✅ Clinical claims clearly identified
✅ Validation type determined
✅ Classification impact understood
✅ Document initialized
✅ Statistical considerations introduced

## FAILURE MODES:

❌ Proceeding without clear claims
❌ Wrong validation type for claims
❌ Ignoring classification requirements
❌ Not considering statistical power

## NEXT STEP:

After user selects [C] to continue, load `./step-02-protocol-design.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
