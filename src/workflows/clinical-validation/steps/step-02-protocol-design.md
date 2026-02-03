# Step 2: Validation Protocol Design

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER accept a dataset without representativeness analysis
- ✅ Le dataset de validation doit être représentatif de la population cible
- 📋 DOCUMENT inclusion/exclusion criteria precisely
- 💬 Exige toujours des justifications quantitatives
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Define validation protocol for each claim
- 📖 Specify dataset requirements
- 💾 Document methodology rigorously
- 🚫 FORBIDDEN to accept convenience samples without justification

## YOUR TASK:

Design the validation protocol including study design, dataset requirements, and success criteria.

## PROTOCOL DESIGN SEQUENCE:

### 1. Study Design Selection

For each validation type:

"**Conception de l'étude pour {claim_id}:**

**Options de design:**

**[RETRO]** Rétrospective
- Utilise des données existantes (historiques)
- Plus rapide et moins coûteux
- Risque de biais de sélection
- Approprié pour : validation analytique initiale

**[PROSPECTIVE]** Prospective
- Collecte de nouvelles données selon protocole
- Gold standard pour validation clinique
- Plus long et coûteux
- Approprié pour : claims de bénéfice clinique

**[CROSSVAL]** Cross-validation (AI/ML)
- K-fold cross-validation sur dataset
- Approprié pour développement/tuning
- NE REMPLACE PAS validation externe

**[EXTERNAL]** Validation externe
- Dataset indépendant, jamais vu pendant développement
- OBLIGATOIRE pour claims réglementaires
- Doit être représentatif

**Pour {product_name}, claim '{claim}':**
- Design recommandé : **{recommended}**
- Justification : {rationale}

Quel design souhaitez-vous utiliser ?"

### 2. Dataset Requirements

Define dataset specifications:

"**Exigences du dataset de validation:**

**Population cible (Intended Use):**
{target_population_from_intended_use}

**Caractéristiques du dataset requis:**

| Caractéristique | Exigence | Justification |
|-----------------|----------|---------------|
| Taille minimale | {n} | Calcul de puissance |
| Distribution âge | {distribution} | Représentativité |
| Distribution genre | {distribution} | Représentativité |
| Pathologie prevalence | {prevalence} | Reflète réalité clinique |
| Ethnicité/diversité | {requirements} | Équité et biais |
| Sites de collecte | {multi-site?} | Généralisabilité |

**Ground Truth (Gold Standard):**
- Méthode de référence : {gold_standard}
- Expertise des annotateurs : {expertise_level}
- Accord inter-annotateurs : {agreement_threshold}
- Blinding : {blinding_requirements}

**Critères d'inclusion:**
{inclusion_criteria_list}

**Critères d'exclusion:**
{exclusion_criteria_list}

Ces critères sont-ils appropriés pour votre population cible ?"

### 3. Sample Size Calculation

Perform power analysis:

"**Calcul de la taille d'échantillon:**

**Pour le claim primaire '{primary_claim}':**

**Paramètres:**
- Type de test : {test_type}
- Métrique : {metric} (ex: sensibilité)
- Performance attendue : {expected_performance}
- Performance minimale acceptable : {min_acceptable}
- Puissance (1-β) : 80% (standard)
- Alpha (α) : 0.05 (two-sided)

**Calcul:**
```
n = f(effect_size, alpha, power, test_type)
```

**Résultat:**
- Taille d'échantillon minimale : **{n_calculated}**
- Avec marge pour dropouts (+10-15%) : **{n_recommended}**

**Pour validation AI/ML (si applicable):**
- Dataset de développement : {n_dev}
- Dataset de validation : {n_val} (indépendant, ≥{n_calculated})
- Ratio recommandé : 70/30 ou 80/20

La taille d'échantillon proposée est-elle réalisable ?"

### 4. Define Success Criteria

Specify acceptance criteria:

"**Critères de succès pour la validation:**

**Endpoint primaire:**
| Métrique | Target | Seuil d'acceptation | Méthode stat |
|----------|--------|---------------------|--------------|
| {metric} | {target} | ≥ {threshold} | {CI_or_test} |

**Endpoints secondaires:**
| Métrique | Target | Seuil | Priority |
|----------|--------|-------|----------|
| {metric_1} | {target} | {threshold} | Secondary |
| {metric_2} | {target} | {threshold} | Exploratory |

**Critères de non-infériorité (si applicable):**
- Comparateur : {comparator}
- Marge de non-infériorité : {margin}
- Justification de la marge : {rationale}

**Analyse de sous-groupes prévue:**
- Par âge : {age_groups}
- Par genre : {male/female}
- Par site : {if_multisite}
- Par {other_relevant_subgroup}

Ces critères sont-ils cliniquement significatifs ?"

### 5. AI/ML Specific Requirements

If AI/ML component:

"**Exigences spécifiques AI/ML:**

Référence : `_bmad/bmmd/checklists/ai-ml-validation-checklist.md`

**Robustesse:**
- [ ] Performance sur données bruitées
- [ ] Performance sur edge cases identifiés
- [ ] Stabilité des prédictions

**Biais et équité:**
- [ ] Performance par sous-groupe démographique
- [ ] Détection de biais algorithmic
- [ ] Plan de mitigation si biais détecté

**Out-of-Distribution (OOD):**
- [ ] Détection des inputs OOD
- [ ] Comportement défini pour OOD
- [ ] Mécanisme de reject option

**Interprétabilité:**
- [ ] Explications disponibles pour clinicien
- [ ] Indicateurs de confiance
- [ ] Cas d'échec identifiables

**Monitoring continu (post-deployment):**
- [ ] Détection de distribution drift
- [ ] Métriques de surveillance définies
- [ ] Seuils d'alerte établis"

### 6. Append to Validation Plan

Append to `docs/regulatory/clinical-validation-plan.md`:

```markdown
## 4. Study Design

### 4.1 Design Type
- **Primary design:** {design_type}
- **Rationale:** {rationale}

### 4.2 Dataset Requirements

**Population:**
{population_description}

**Inclusion Criteria:**
{inclusion_list}

**Exclusion Criteria:**
{exclusion_list}

**Sample Size:**
- Required: {n_required}
- With margin: {n_recommended}
- Power calculation: {calculation_details}

### 4.3 Gold Standard
{gold_standard_description}

## 5. Success Criteria

### 5.1 Primary Endpoint
{primary_endpoint_table}

### 5.2 Secondary Endpoints
{secondary_endpoints_table}

### 5.3 Subgroup Analyses
{subgroup_analysis_plan}

## 6. AI/ML Specific Validation
{if_applicable}
```

Update frontmatter: `stepsCompleted: [step-01, step-02]`

### 7. Present Menu

"**Protocole de validation défini**

**Résumé du protocole:**
- Design : {design_type}
- Taille d'échantillon : {n}
- Endpoint primaire : {primary}
- Critère de succès : {success_criterion}

**[C] Continuer** — Définir le plan d'analyse statistique
**[R] Réviser** — Modifier le protocole"

## SUCCESS METRICS:

✅ Study design appropriate for claims
✅ Dataset requirements comprehensive
✅ Sample size justified with power calculation
✅ Success criteria clinically meaningful
✅ AI/ML requirements addressed if applicable

## FAILURE MODES:

❌ Accepting non-representative datasets
❌ Inadequate sample size
❌ Success criteria not clinically meaningful
❌ Missing AI/ML specific validation

## NEXT STEP:

After user selects [C] to continue, load `./step-03-statistical-analysis.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
