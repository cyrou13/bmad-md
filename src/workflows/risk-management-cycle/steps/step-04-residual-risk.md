# Step 4: Residual Risk Evaluation

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER accept overall residual risk without benefit analysis
- ✅ Each residual risk must be justified
- 📋 DOCUMENT the overall residual risk acceptability decision
- 💬 Les patients méritent une évaluation rigoureuse du rapport bénéfice/risque
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Evaluate overall residual risk
- 📖 Perform benefit-risk analysis
- 💾 Document acceptability decision
- 🚫 FORBIDDEN to accept without documented justification

## YOUR TASK:

Evaluate the overall residual risk after all controls are applied and determine acceptability.

## RESIDUAL RISK EVALUATION SEQUENCE:

### 1. Individual Residual Risk Review

Review each risk's residual state:

"**Revue des risques résiduels individuels:**

| RISK ID | Hazard | S | P' | RPN' | Level | Control |
|---------|--------|---|----|----|-------|---------|
| RISK-001 | {hazard} | {S} | {P'} | {RPN'} | {level} | {CTRL_ID} |
| RISK-002 | {hazard} | {S} | {P'} | {RPN'} | {level} | {CTRL_ID} |
| ... | ... | ... | ... | ... | ... | ... |

**Statistiques des risques résiduels:**
- Total risques : {count}
- Inacceptables résiduels : {count} {⚠️ if > 0}
- ALARP résiduels : {count}
- Acceptables : {count}

{if_unacceptable_residual}
⚠️ **Attention:** {count} risque(s) reste(nt) inacceptable(s) après contrôle.
Ces risques nécessitent une attention particulière dans l'analyse bénéfice/risque.
{/if}"

### 2. Overall Residual Risk Assessment

Evaluate cumulative effect:

"**Évaluation du risque résiduel global (ISO 14971, Clause 8)**

Au-delà des risques individuels, nous devons évaluer :

**Risque résiduel cumulatif:**
- Les risques résiduels combinés créent-ils un risque global acceptable ?
- Y a-t-il des interactions entre risques résiduels ?
- Le nombre total de risques ALARP est-il raisonnable ?

**Questions d'évaluation:**

1. **Couverture des contrôles:**
   - Tous les contrôles couvrent-ils les scénarios identifiés ? {yes/no}
   - Y a-t-il des scénarios de défaillance commune ? {analysis}

2. **Risques résiduels sévères (S ≥ 4):**
   - Combien de risques avec sévérité ≥ 4 ? {count}
   - Justification de leur acceptabilité : {rationale}

3. **Interactions entre risques:**
   - Défaillances simultanées possibles ? {analysis}
   - Impact cumulatif ? {analysis}

**Évaluation globale:**
Le risque résiduel global est jugé : **{Acceptable/Unacceptable}**
Justification : {detailed_rationale}"

### 3. Benefit-Risk Analysis

Perform benefit-risk comparison:

"**Analyse Bénéfice-Risque (ISO 14971, Clause 8)**

**Bénéfices du dispositif {project_name}:**

| Bénéfice | Population | Magnitude |
|----------|------------|-----------|
| {benefit_1} | {who_benefits} | {high/medium/low} |
| {benefit_2} | {who_benefits} | {high/medium/low} |
| {benefit_3} | {who_benefits} | {high/medium/low} |

**Risques résiduels principaux:**

| Risque | Sévérité | Probabilité résiduelle |
|--------|----------|----------------------|
| {risk_1} | {severity} | {probability} |
| {risk_2} | {severity} | {probability} |

**Comparaison:**

**Question clé:** Les bénéfices médicaux outweighent-ils les risques résiduels ?

**Facteurs de décision:**
1. **État de l'art:** Comment ce dispositif se compare-t-il aux alternatives ?
2. **Population cible:** Les bénéfices sont-ils significatifs pour cette population ?
3. **Sévérité de la condition:** La condition traitée justifie-t-elle les risques ?
4. **Alternatives disponibles:** Y a-t-il des alternatives plus sûres ?

**Conclusion bénéfice-risque:**
{favorable/unfavorable} — {detailed_justification}"

### 4. Risk Acceptability Statement

Formalize the decision:

"**Déclaration d'acceptabilité des risques**

Sur la base de :
- L'analyse des risques individuels
- L'évaluation du risque résiduel global
- L'analyse bénéfice-risque

**Décision:**

| Critère | Statut |
|---------|--------|
| Tous les risques identifiés analysés | ✅ |
| Contrôles définis pour risques inacceptables | ✅/{status} |
| Risques ALARP justifiés | ✅/{status} |
| Risque résiduel global acceptable | ✅/{status} |
| Bénéfice outweighs risque | ✅/{status} |

**Recommandation:**

**[ ] ACCEPTABLE** — Le dispositif peut procéder à la phase suivante
**[ ] CONDITIONNEL** — Acceptable sous réserve de {conditions}
**[ ] INACCEPTABLE** — Risques non maîtrisés, nécessite révision

Sélectionnez votre décision :"

### 5. Document in Risk Register

Update Risk Register with overall assessment:

```markdown
## Overall Residual Risk Assessment

**Date:** {date}
**Assessors:** Dr. Hana (Risk Manager), {user_name}

### Summary Statistics

| Metric | Value |
|--------|-------|
| Total risks identified | {count} |
| Unacceptable (pre-control) | {count} |
| Unacceptable (post-control) | {count} |
| ALARP | {count} |
| Acceptable | {count} |
| Controls defined | {count} |
| Controls verified | {count} |

### Overall Residual Risk

**Level:** {Acceptable/Conditional/Unacceptable}
**Justification:** {detailed_justification}

### Benefit-Risk Conclusion

**Conclusion:** {favorable/unfavorable}
**Rationale:** {benefit_risk_rationale}

### Acceptability Decision

**Decision:** {ACCEPTED/CONDITIONAL/REJECTED}
**Conditions (if applicable):** {conditions}
**Decided by:** {names}
**Date:** {date}
```

### 6. Present Summary and Menu

"**Évaluation du risque résiduel complétée**

**Résumé pour {project_name}:**

**Risques résiduels:**
- Inacceptables : {count}
- ALARP : {count}
- Acceptables : {count}

**Risque résiduel global:** {level}
**Rapport bénéfice-risque:** {favorable/unfavorable}

**Décision d'acceptabilité:** **{ACCEPTED/CONDITIONAL/REJECTED}**
{conditions_if_any}

**[C] Continuer** — Finaliser le cycle de gestion des risques
**[R] Réviser** — Revoir l'évaluation ou ajouter des contrôles"

## SUCCESS METRICS:

✅ All individual residual risks reviewed
✅ Overall residual risk evaluated
✅ Benefit-risk analysis performed
✅ Acceptability decision documented
✅ Risk Register updated

## FAILURE MODES:

❌ Accepting without benefit-risk analysis
❌ Not documenting justification
❌ Ignoring unacceptable residual risks
❌ Missing interactions between risks

## NEXT STEP:

After user selects [C] to continue, load `./step-05-finalize.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
