# Step 3: Risk Control Measures

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER leave an unacceptable risk without control
- ✅ La sévérité ne se négocie pas — seule la probabilité peut être réduite
- 📋 DOCUMENT control effectiveness rationale
- 💬 Un risque sans contrôle vérifié est un risque non maîtrisé
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Define controls for all unacceptable/ALARP risks
- 📖 Follow ISO 14971 control hierarchy
- 💾 Update Risk Register with controls
- 🚫 FORBIDDEN to accept unacceptable risk without documented justification

## YOUR TASK:

Define risk control measures following ISO 14971 hierarchy and evaluate their effectiveness.

## RISK CONTROL SEQUENCE:

### 1. ISO 14971 Control Hierarchy

Present the hierarchy:
"**Hiérarchie des contrôles ISO 14971 (Clause 7.1)**

Les contrôles doivent être appliqués dans cet ordre de préférence :

**1. Inherent Safety by Design (priorité maximale)**
- Éliminer le danger à la source
- Modifier la conception pour rendre le harm impossible
- Exemple : Ne pas stocker de données patient si non nécessaire

**2. Protective Measures in the Medical Device**
- Alarmes et alertes automatiques
- Validation des inputs
- Limites de fonctionnement (timeouts, plausibility checks)
- Exemple : Alerte si résultat hors plage attendue

**3. Information for Safety**
- Instructions d'utilisation (IFU)
- Avertissements et précautions
- Formation des utilisateurs
- Exemple : Manuel indiquant les limitations du produit

⚠️ **Important:** Les contrôles de niveau 3 (information) ne peuvent jamais être utilisés seuls pour des risques inacceptables. Ils complètent les niveaux 1-2."

### 2. Process Unacceptable Risks First

For each unacceptable risk (RPN > 12):

"**Risque inacceptable : {RISK_ID}**

| Élément | Valeur |
|---------|--------|
| Hazard | {hazard} |
| Harm | {harm} |
| Severity | {S} |
| Probability | {P} |
| RPN | {RPN} ❌ |

**Ce risque DOIT être contrôlé.**

**Options de contrôle par niveau:**

**Niveau 1 — Inherent Safety:**
- {design_option_1}
- {design_option_2}

**Niveau 2 — Protective Measures:**
- {protective_measure_1}
- {protective_measure_2}

**Niveau 3 — Information (complément):**
- {information_measure}

**Quelle(s) mesure(s) de contrôle recommandez-vous ?**"

### 3. Define Control for Each Risk

For the selected control:

"**Définition du contrôle pour {RISK_ID}:**

| Champ | Valeur |
|-------|--------|
| Control ID | CTRL-{nnn} |
| Control Type | {Inherent/Protective/Information} |
| Description | {detailed_description} |
| Implementation | {how_it_will_be_implemented} |
| Verification Method | {how_to_verify_effectiveness} |

**Évaluation post-contrôle:**

Avec ce contrôle en place :
- Probabilité résiduelle (P') : {1-5}
- RPN résiduel : S × P' = {residual_RPN}
- Nouveau niveau : {Acceptable/ALARP/Still_Unacceptable}

**Risques introduits par le contrôle:**
Le contrôle lui-même peut-il introduire de nouveaux risques ?
- {new_risk_analysis}

Ce contrôle est-il acceptable ?"

### 4. Process ALARP Risks

For each ALARP risk (RPN 7-12):

"**Risque ALARP : {RISK_ID}**

| Élément | Valeur |
|---------|--------|
| Hazard | {hazard} |
| Harm | {harm} |
| RPN | {RPN} ⚠️ |

**ALARP = As Low As Reasonably Practicable**

Pour les risques ALARP, nous devons :
1. Évaluer si une réduction supplémentaire est praticable
2. Documenter pourquoi le risque résiduel est acceptable

**Contrôles additionnels possibles:**
- {control_option_1} — Coût/effort : {estimate}
- {control_option_2} — Coût/effort : {estimate}

**Questions:**
1. Ces contrôles additionnels sont-ils praticables ?
2. Le bénéfice outweighs le coût ?

**Décision ALARP:**
- [ ] Réduire avec contrôle additionnel
- [ ] Accepter avec justification documentée"

### 5. Traceability — Controls to Requirements

Ensure controls are traceable:

"**Traçabilité des contrôles:**

Chaque contrôle doit être traçable à une exigence vérifiable.

| Control ID | Type | Risk ID | Requirement ID | Test ID |
|------------|------|---------|---------------|---------|
| CTRL-001 | Protective | RISK-001 | REQ-SEC-001 | TST-001 |
| CTRL-002 | Design | RISK-002 | REQ-ARCH-015 | TST-015 |
| ... | ... | ... | ... | ... |

**Pour chaque contrôle:**
- Une exigence fonctionnelle ou non-fonctionnelle doit exister
- Un test de vérification doit être défini
- La traçabilité doit être documentée dans la matrice

Voulez-vous créer les exigences manquantes maintenant ?"

### 6. Update Risk Register with Controls

For each risk with defined control:

```markdown
## Updated Risk Entry

| Field | Pre-Control | Post-Control |
|-------|-------------|--------------|
| RISK ID | {id} | {id} |
| Severity | {S} | {S} (unchanged) |
| Probability | {P} | {P'} |
| RPN | {RPN} | {RPN'} |
| Level | {level} | {new_level} |
| Control | N/A | {CTRL_ID}: {description} |
| Control Verified | N/A | ⏳ Pending |
```

### 7. Present Control Summary

"**Récapitulatif des mesures de contrôle pour {project_name}:**

**Contrôles définis:**

| CTRL ID | Type | Risk(s) | RPN Before | RPN After | Status |
|---------|------|---------|------------|-----------|--------|
| CTRL-001 | {type} | RISK-001 | {rpn} | {rpn'} | Defined |
| CTRL-002 | {type} | RISK-002 | {rpn} | {rpn'} | Defined |
| ... | ... | ... | ... | ... | ... |

**Impact des contrôles:**
- Risques inacceptables : {before} → {after}
- Risques ALARP : {before} → {after}
- Risques acceptables : {before} → {after}

**Exigences créées/référencées:** {count}
**Tests de vérification définis:** {count}

**[C] Continuer** — Procéder à l'évaluation du risque résiduel global
**[A] Ajouter** — Définir des contrôles additionnels
**[R] Réviser** — Modifier les contrôles existants"

## SUCCESS METRICS:

✅ All unacceptable risks have controls defined
✅ ALARP risks evaluated and documented
✅ Control hierarchy respected
✅ Traceability to requirements established
✅ Risk Register updated with controls

## FAILURE MODES:

❌ Leaving unacceptable risks without controls
❌ Using only information controls for serious risks
❌ Not evaluating risks introduced by controls
❌ Missing traceability to requirements

## NEXT STEP:

After user selects [C] to continue, load `./step-04-residual-risk.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
