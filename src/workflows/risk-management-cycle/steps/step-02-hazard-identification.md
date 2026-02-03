# Step 2: Hazard Identification (FMEA)

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER assume a hazard is too unlikely to document
- ✅ Tout danger identifiable doit être analysé
- 📋 SYSTEMATIC analysis — no shortcuts
- 💬 Think like an attacker, protect like a guardian
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Analyze each software function for failure modes
- 📖 Consider all harm pathways
- 💾 Document all identified hazards
- 🚫 FORBIDDEN to dismiss hazards without documented rationale

## YOUR TASK:

Systematically identify all hazards and failure modes using FMEA methodology.

## HAZARD IDENTIFICATION SEQUENCE:

### 1. FMEA Structure Introduction

"**Analyse FMEA (Failure Mode and Effects Analysis)**

Pour chaque fonction/module du logiciel, nous analyserons :

| Élément | Description |
|---------|-------------|
| **Function** | Fonction logicielle analysée |
| **Failure Mode** | Comment la fonction peut échouer |
| **Cause** | Cause probable de la défaillance |
| **Effect** | Effet de la défaillance sur le système |
| **Harm** | Conséquence pour le patient/utilisateur |
| **Severity** | Gravité du harm (1-5) |
| **Probability** | Probabilité d'occurrence (1-5) |
| **Detectability** | Capacité à détecter avant harm |

**Échelle de Sévérité (S):**
| Score | Niveau | Définition |
|-------|--------|------------|
| 1 | Négligeable | Aucun harm ou inconfort mineur |
| 2 | Mineur | Inconfort temporaire, pas d'intervention |
| 3 | Sérieux | Intervention médicale nécessaire |
| 4 | Critique | Blessure permanente possible |
| 5 | Catastrophique | Décès ou blessure irréversible |

**Échelle de Probabilité (P):**
| Score | Niveau | Définition |
|-------|--------|------------|
| 1 | Improbable | < 1/10,000 utilisations |
| 2 | Rare | 1/1,000 - 1/10,000 |
| 3 | Occasionnel | 1/100 - 1/1,000 |
| 4 | Probable | 1/10 - 1/100 |
| 5 | Fréquent | > 1/10 utilisations |"

### 2. Systematic Function Analysis

For each major function identified in step-01:

"**Analyse de la fonction : {function_name}**

**Description:** {function_description}

**Modes de défaillance possibles:**

1. **Output incorrect (faux positif/négatif)**
   - Cause possible : {cause}
   - Effet sur système : {effect}
   - Harm potentiel : {harm}

2. **Indisponibilité/timeout**
   - Cause possible : {cause}
   - Effet sur système : {effect}
   - Harm potentiel : {harm}

3. **Données corrompues**
   - Cause possible : {cause}
   - Effet sur système : {effect}
   - Harm potentiel : {harm}

4. **Performance dégradée**
   - Cause possible : {cause}
   - Effet sur système : {effect}
   - Harm potentiel : {harm}

Identifiez-vous d'autres modes de défaillance pour cette fonction ?"

### 3. Harm Categories for SaMD

Guide the analysis with SaMD-specific categories:

"**Catégories de harm spécifiques aux SaMD:**

**Harms cliniques directs:**
- [ ] Diagnostic incorrect menant à traitement inapproprié
- [ ] Retard de diagnostic d'une condition grave
- [ ] Surdosage ou sous-dosage de traitement
- [ ] Intervention inappropriée basée sur recommandation

**Harms cliniques indirects:**
- [ ] Fausse réassurance retardant consultation
- [ ] Anxiété due à faux positif
- [ ] Perte de confiance dans le système de soins

**Harms liés aux données:**
- [ ] Violation de confidentialité (RGPD/HIPAA)
- [ ] Données patient accessibles à non-autorisés
- [ ] Perte de données cliniques critiques

**Harms liés à l'utilisation:**
- [ ] Erreur d'utilisation due à interface confuse
- [ ] Utilisation hors indication (off-label)
- [ ] Dépendance excessive au logiciel

**Harms cybersécurité:**
- [ ] Manipulation des résultats par attaquant
- [ ] Ransomware affectant disponibilité
- [ ] Exfiltration de données patient

Quelles catégories sont applicables à **{project_name}** ?"

### 4. Document Hazards in Risk Register

For each identified hazard, create entry:

"**Nouveau risque identifié:**

| Champ | Valeur |
|-------|--------|
| RISK ID | RISK-{module}-{nnn} |
| Module/Function | {function} |
| Hazard | {hazard_description} |
| Failure Mode | {failure_mode} |
| Cause | {cause} |
| Harm | {harm_description} |
| Severity (S) | {1-5} |
| Probability (P) | {1-5} |
| RPN | {S × P} |
| Level | {Acceptable/ALARP/Unacceptable} |
| Control | {TBD - step 3} |

**Acceptabilité:**
- RPN ≤ 6 : ✅ Acceptable
- RPN 7-12 : ⚠️ ALARP (As Low As Reasonably Practicable)
- RPN > 12 : ❌ Inacceptable — contrôle requis

Ce risque est classé **{level}**."

### 5. AI/ML Specific Hazards (if applicable)

If the product includes AI/ML:

"**Risques spécifiques AI/ML:**

**Performance degradation:**
- [ ] Distribution shift (données réelles ≠ données d'entraînement)
- [ ] Concept drift (évolution dans le temps)
- [ ] Out-of-distribution (OOD) inputs
- [ ] Adversarial inputs (manipulation intentionnelle)

**Bias and fairness:**
- [ ] Biais démographique (âge, genre, ethnicité)
- [ ] Biais socio-économique
- [ ] Sous-performance sur populations sous-représentées

**Explainability:**
- [ ] Décision non explicable au clinicien
- [ ] Incapacité à identifier les inputs critiques
- [ ] Black box inapproprié pour contexte clinique

**Training/updating:**
- [ ] Contamination des données d'entraînement
- [ ] Overfitting sur données spécifiques
- [ ] Model update introduisant régression

Référence: FDA AI/ML Action Plan, `_bmad/bmmd/checklists/ai-ml-validation-checklist.md`"

### 6. Compile Hazard List

Present summary:

"**Récapitulatif des dangers identifiés pour {project_name}:**

| RISK ID | Hazard | Harm | S | P | RPN | Level |
|---------|--------|------|---|---|-----|-------|
| RISK-001 | {hazard} | {harm} | {s} | {p} | {rpn} | {level} |
| RISK-002 | {hazard} | {harm} | {s} | {p} | {rpn} | {level} |
| ... | ... | ... | ... | ... | ... | ... |

**Statistiques:**
- Total risques identifiés : {count}
- Inacceptables (RPN > 12) : {count} ❌
- ALARP (RPN 7-12) : {count} ⚠️
- Acceptables (RPN ≤ 6) : {count} ✅

**[C] Continuer** — Procéder à la définition des contrôles
**[A] Ajouter** — Identifier d'autres dangers
**[R] Réviser** — Modifier les évaluations S/P"

## SUCCESS METRICS:

✅ All major functions analyzed for failure modes
✅ SaMD-specific harm categories considered
✅ AI/ML risks addressed if applicable
✅ Each hazard documented with S, P, RPN
✅ Risk Register updated

## FAILURE MODES:

❌ Missing obvious failure modes
❌ Not considering indirect harms
❌ Underestimating severity or probability
❌ Not documenting AI/ML specific risks

## NEXT STEP:

After user selects [C] to continue, load `./step-03-risk-control.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
