# Step 3: Statistical Analysis Plan

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER accept results without proper statistical analysis
- ✅ Aucune performance claim sans évidence statistique suffisante
- 📋 PRE-SPECIFY all analyses before data collection
- 💬 Document analysis plan before unblinding
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Define statistical analysis plan (SAP)
- 📖 Specify all analyses a priori
- 💾 Document handling of missing data, outliers
- 🚫 FORBIDDEN to change primary analysis post-hoc

## YOUR TASK:

Define the complete statistical analysis plan for the validation study.

## STATISTICAL ANALYSIS SEQUENCE:

### 1. Primary Analysis Definition

"**Analyse primaire pour {primary_claim}:**

**Métrique primaire:** {metric}
**Hypothèse:**
- H0: {null_hypothesis}
- H1: {alternative_hypothesis}

**Méthode statistique:**

Pour **diagnostic accuracy** (sensibilité/spécificité):
```
- Point estimate avec intervalle de confiance 95%
- Méthode: Wilson score ou Clopper-Pearson
- Test: one-sided test vs threshold, ou two-sided CI
```

Pour **AUC (Area Under ROC Curve)**:
```
- Point estimate avec CI 95% (DeLong method)
- Comparaison: DeLong test si vs comparateur
- Threshold selection: Youden's J ou clinical cutoff
```

Pour **agreement/reliability**:
```
- Cohen's Kappa (catégoriel) ou ICC (continu)
- Interprétation: Landis-Koch ou Cicchetti guidelines
```

**Pour {product_name}:**
- Méthode choisie: **{method}**
- Justification: {rationale}"

### 2. Secondary Analyses

"**Analyses secondaires:**

| Endpoint | Métrique | Méthode | Multiplicity Adjustment |
|----------|----------|---------|------------------------|
| {endpoint_1} | {metric} | {method} | {adjustment} |
| {endpoint_2} | {metric} | {method} | {adjustment} |

**Correction pour comparaisons multiples:**
- Méthode: {Bonferroni/Holm/Hochberg/FDR}
- Justification: {rationale}

**Note:** Les analyses secondaires sont exploratoires si non ajustées pour multiplicité."

### 3. Subgroup Analyses

"**Plan d'analyses de sous-groupes:**

**Sous-groupes pré-spécifiés:**

| Sous-groupe | Variable | Catégories | Justification |
|-------------|----------|------------|---------------|
| Âge | Age | {categories} | Différences physiologiques |
| Genre | Sex | M/F | Équité et représentativité |
| Sévérité | Disease_severity | {categories} | Performance différentielle |
| Site | Collection_site | {sites} | Généralisabilité |

**Méthode d'analyse:**
- Stratification: Analyse séparée par sous-groupe
- Interaction: Test d'interaction (sous-groupe × performance)
- Présentation: Forest plot des effets par sous-groupe

**Interprétation:**
- Analyses exploratoires sauf si pré-spécifiées comme primaires
- Attention aux comparaisons multiples
- Recherche de signaux, non de conclusions définitives"

### 4. Handling of Missing Data

"**Gestion des données manquantes:**

**Politique de données manquantes:**

| Scénario | Approche | Justification |
|----------|----------|---------------|
| Données manquantes aléatoires (MCAR) | Complete case analysis | Pas de biais si MCAR |
| Données manquantes liées aux observés (MAR) | Multiple imputation | Réduit le biais |
| Données manquantes non-aléatoires (MNAR) | Sensitivity analysis | Explore l'impact |

**Seuils:**
- < 5% manquants: Complete case acceptable
- 5-20% manquants: Imputation recommandée
- > 20% manquants: Étude potentiellement compromise

**Analyses de sensibilité pour données manquantes:**
1. Complete case (cas de base)
2. Worst-case imputation (manquants = échecs)
3. Best-case imputation (manquants = succès)
4. Multiple imputation (si MAR assumé)"

### 5. Handling of Outliers

"**Gestion des outliers:**

**Définition des outliers:**
- Méthode: {IQR/SD/domain_knowledge}
- Seuil: {threshold}

**Approche:**
1. **Identification a priori**: Définir critères avant analyse
2. **Documentation**: Tous les outliers documentés
3. **Analyse principale**: Avec outliers (intention-to-treat equivalent)
4. **Sensitivity**: Sans outliers pour évaluer l'impact

**Important:** Ne jamais supprimer les outliers sans justification clinique/technique documentée."

### 6. Software and Reproducibility

"**Logiciels et reproductibilité:**

**Environnement d'analyse:**
- Logiciel statistique: {R/Python/SAS/SPSS}
- Version: {version}
- Packages/libraries: {list}

**Reproductibilité:**
- [ ] Code d'analyse versionné (git)
- [ ] Random seeds documentés
- [ ] Environnement reproductible (requirements.txt/renv)
- [ ] Données de validation archivées

**Validation du code:**
- [ ] Revue par pair statisticien
- [ ] Tests sur données simulées
- [ ] Comparaison avec résultats publiés (si benchmark)"

### 7. Append to Validation Plan

Append to `docs/regulatory/clinical-validation-plan.md`:

```markdown
## 7. Statistical Analysis Plan

### 7.1 Primary Analysis
**Endpoint:** {primary_endpoint}
**Method:** {statistical_method}
**Hypothesis:** {hypothesis}

### 7.2 Secondary Analyses
{secondary_analyses_table}

### 7.3 Subgroup Analyses
{subgroup_plan}

### 7.4 Missing Data Handling
{missing_data_policy}

### 7.5 Outlier Handling
{outlier_policy}

### 7.6 Software Environment
- Software: {software}
- Version: {version}
- Reproducibility: {measures}

### 7.7 Statistical Significance
- Alpha level: 0.05 (two-sided)
- Multiplicity adjustment: {method}
- Confidence intervals: 95%
```

Update frontmatter: `stepsCompleted: [step-01, step-02, step-03]`

### 8. Present Menu

"**Plan d'analyse statistique défini**

**Résumé du SAP:**
- Analyse primaire: {method} pour {metric}
- Analyses secondaires: {count}
- Sous-groupes pré-spécifiés: {count}
- Gestion missing data: {policy}

**Important:** Ce plan doit être finalisé AVANT toute analyse des données de validation.

**[C] Continuer** — Finaliser le plan de validation
**[R] Réviser** — Modifier le plan d'analyse"

## SUCCESS METRICS:

✅ Primary analysis method appropriate
✅ Multiplicity adjustment defined
✅ Subgroup analyses pre-specified
✅ Missing data policy documented
✅ Reproducibility measures in place

## FAILURE MODES:

❌ Changing analysis after seeing data
❌ No multiplicity adjustment
❌ No missing data policy
❌ Non-reproducible analysis

## NEXT STEP:

After user selects [C] to continue, load `./step-04-finalize.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
