# Step 3: Compliance Strategy & Roadmap

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER recommend shortcuts in regulatory compliance
- ✅ ALWAYS provide conservative recommendations
- 📋 DOCUMENT the rationale for strategy decisions
- 💬 La conformité se conçoit, elle ne se constate pas
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Define the regulatory submission strategy
- 📖 Identify phase gates and milestones
- 💾 Complete the regulatory scoping document
- 🚫 FORBIDDEN to minimize compliance requirements

## YOUR TASK:

Define the compliance strategy and regulatory roadmap for the project.

## COMPLIANCE STRATEGY SEQUENCE:

### 1. Submission Pathway Recommendation

Based on the classification (to be determined in samd-classification workflow), recommend pathways:

"**Stratégie de soumission recommandée:**

Basé sur mon analyse préliminaire de {project_name}, voici mes recommandations :

**Marché US (FDA):**
- Pathway recommandé : {510k/DeNovo/PMA}
- Justification : {rationale}
- Predicate devices (si 510k) : {to_be_identified}

**Marché EU (MDR):**
- Classification probable : {Class_I/IIa/IIb/III}
- Notified Body requis : {Yes/No}
- Route privilégiée : {conformity_route}

**Timing recommandé:**
- Soumettre d'abord en : {US/EU}
- Raison : {rationale}

Ces recommandations seront affinées après la classification formelle (workflow samd-classification)."

### 2. Phase Gates Definition

Define regulatory phase gates aligned with BMAD phases:

"**Phase Gates Réglementaires (R-Gates):**

Je propose les gates suivants alignés avec les phases BMAD :

**R1 — Fin d'Analyse**
- [ ] Intended Use documenté et validé
- [ ] Classification préliminaire établie
- [ ] Marchés cibles confirmés
- [ ] Standards applicables identifiés

**R2 — Fin de Solutioning**
- [ ] Classification formelle complétée
- [ ] Analyse de risques initiale (FMEA)
- [ ] Architecture revue pour safety/security
- [ ] SOUP inventory et évaluation

**R3 — Pre-Release**
- [ ] Traçabilité bidirectionnelle complète
- [ ] Tests de vérification passés
- [ ] Validation clinique complétée
- [ ] Risk Register à jour, tous risques contrôlés

**R4 — Release**
- [ ] Design History File complet
- [ ] Package de soumission prêt
- [ ] Revue finale réglementaire
- [ ] Prêt pour soumission/self-declaration

Acceptez-vous ces gates ou souhaitez-vous les adapter ?"

### 3. Documentation Requirements

List required documentation:

"**Documents réglementaires requis:**

**Documents fondamentaux:**
| Document | Responsable | Phase | Gate |
|----------|-------------|-------|------|
| Intended Use | Dr. Régis | Analysis | R1 |
| SaMD Classification | Dr. Régis | Analysis | R1 |
| Risk Management Plan | Dr. Hana | Planning | R2 |
| Software Development Plan | Quentin | Planning | R2 |
| Architecture Safety Review | Winston + SecureMax | Solutioning | R2 |
| FMEA/Hazard Analysis | Dr. Hana | Solutioning | R2 |
| SOUP Evaluation | Quentin | Solutioning | R2 |
| Traceability Matrix | Quentin | Implementation | R3 |
| Verification Report | Quinn | Implementation | R3 |
| Clinical Validation Report | Dr. Claire | Implementation | R3 |
| Design History File | Dr. Régis | Release | R4 |
| Submission Package | Dr. Régis | Release | R4 |

**Documents supplémentaires selon classification:**
{class_specific_documents}"

### 4. Resource & Expertise Needs

Identify resource requirements:

"**Ressources et expertises requises:**

**Agents BMMD impliqués:**
- Dr. Régis (Regulatory Affairs) — Lead réglementaire
- Dr. Hana (Risk Manager) — Gestion des risques ISO 14971
- Dr. Claire (Clinical Evaluator) — Validation clinique
- Quentin (Quality Manager) — Conformité IEC 62304
- SecureMax (Cybersecurity) — Sécurité et SBOM

**Expertises externes potentiellement requises:**
- {external_expertise_needs}

**Outils recommandés:**
- Gestion des exigences avec traçabilité
- Gestion des risques conforme ISO 14971
- Gestion documentaire avec contrôle de version"

### 5. Append to Document and Finalize

Append to `docs/regulatory/regulatory-scoping.md`:

```markdown
## 7. Compliance Strategy

### 7.1 Submission Pathway
{pathway_recommendation}

### 7.2 Phase Gates
{phase_gates_definition}

### 7.3 Documentation Requirements
{documentation_table}

## 8. Resource Requirements
{resource_needs}

## 9. Next Steps

1. Compléter l'Intended Use (workflow: create-intended-use ou template)
2. Exécuter la classification formelle (workflow: samd-classification)
3. Initialiser le Risk Register (workflow: risk-management-cycle)
4. Mettre à jour regulatory-context.md avec les décisions

---

**Document Status:** Complete
**Next Workflow:** samd-classification
**Gate:** R1 (partial — awaiting classification)
```

Update frontmatter:
- `status: complete`
- `stepsCompleted: [step-01, step-02, step-03]`

### 6. Update Regulatory Context

Update `_bmad/_memory/bmmd/regulatory-context.md` with key decisions:

- Target markets
- Preliminary classification
- Phase gates adopted
- Key decisions log entry

### 7. Present Final Summary

"**Regulatory Scoping complété pour {project_name}**

**Résumé exécutif:**
- Marchés cibles : {markets}
- Classification préliminaire : {preliminary_class}
- Pathway recommandé : {pathway}
- Standards obligatoires : {count}

**Phase Gates définis:**
- R1 (Fin Analyse) — {status}
- R2 (Fin Solutioning) — À venir
- R3 (Pre-Release) — À venir
- R4 (Release) — À venir

**Prochaines actions immédiates:**
1. 📋 Compléter l'Intended Use → @regulatory-affairs /intended-use
2. 🏷️ Classification formelle → @regulatory-affairs /classify
3. ⚠️ Initialiser Risk Register → @risk-manager /init

**Document généré:** `docs/regulatory/regulatory-scoping.md`

Le cadrage réglementaire est terminé. Procédez à la classification formelle pour confirmer les exigences exactes."

## SUCCESS METRICS:

✅ Compliance strategy clearly defined
✅ Phase gates aligned with BMAD phases
✅ Documentation requirements comprehensive
✅ Regulatory context updated
✅ Clear next steps provided

## FAILURE MODES:

❌ Recommending shortcuts or minimal compliance
❌ Not aligning gates with BMAD phases
❌ Missing critical documentation requirements
❌ Not updating regulatory-context.md

## WORKFLOW COMPLETE

This workflow is now complete. The user should proceed to:
1. `samd-classification` workflow for formal classification
2. Create Intended Use document if not exists
