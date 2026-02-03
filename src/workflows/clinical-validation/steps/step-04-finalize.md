# Step 4: Validation Plan Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER finalize without traceability to claims
- ✅ Ensure complete coverage of all claims
- 📋 Document regulatory acceptance criteria
- 💬 Le plan doit être executable et auditable
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Verify completeness and traceability
- 📖 Define execution timeline
- 💾 Finalize validation plan document
- 🚫 FORBIDDEN to finalize with gaps in claim coverage

## YOUR TASK:

Finalize the clinical validation plan ensuring completeness, traceability, and regulatory alignment.

## FINALIZATION SEQUENCE:

### 1. Claims Coverage Verification

Verify all claims are covered:

"**Vérification de la couverture des claims:**

| Claim ID | Claim | Validation Method | Success Criterion | Coverage |
|----------|-------|-------------------|-------------------|----------|
| CLM-001 | {claim} | {method} | {criterion} | ✅ |
| CLM-002 | {claim} | {method} | {criterion} | ✅ |
| CLM-003 | {claim} | {method} | {criterion} | ⚠️ |

**Couverture:**
- Claims validés: {count}/{total}
- Claims partiellement couverts: {count}
- Claims non couverts: {count}

{if_gaps}
⚠️ **Attention:** Les claims suivants nécessitent une validation additionnelle:
{list_of_uncovered_claims}
{/if}"

### 2. Regulatory Alignment Check

Verify regulatory requirements:

"**Alignement réglementaire:**

**Pour classification {imdrf_category} / {fda_class} / {mdr_class}:**

| Exigence réglementaire | Statut | Référence |
|------------------------|--------|-----------|
| Validation sur population cible | ✅/{status} | FDA SaMD Guidance |
| Dataset externe indépendant | ✅/{status} | FDA AI/ML Guidance |
| Gold standard approprié | ✅/{status} | ISO 13485 7.5.6 |
| Analyse statistique pré-spécifiée | ✅/{status} | ICH E9 |
| Analyses de sous-groupes | ✅/{status} | FDA DEI Guidance |

**Pour SaMD avec AI/ML:**

| Exigence | Statut | Référence |
|----------|--------|-----------|
| Validation de robustesse | ✅/{status} | FDA AI/ML Action Plan |
| Évaluation des biais | ✅/{status} | FDA DEI Guidance |
| Plan de monitoring continu | ✅/{status} | FDA AI/ML Framework |

Toutes les exigences réglementaires sont-elles satisfaites ?"

### 3. Execution Timeline

Define validation timeline:

"**Calendrier d'exécution:**

| Phase | Activité | Durée estimée | Dépendances |
|-------|----------|---------------|-------------|
| 1 | Finalisation protocole | {duration} | Approbation SAP |
| 2 | Acquisition dataset | {duration} | Partenariats sites |
| 3 | Préparation données | {duration} | Dataset acquis |
| 4 | Exécution analyses | {duration} | Données prêtes |
| 5 | Revue résultats | {duration} | Analyses complètes |
| 6 | Rapport final | {duration} | Revue complète |

**Jalons critiques:**
- Dataset ready: {date}
- Analysis complete: {date}
- Report finalized: {date}

**Risques et mitigations:**
| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Dataset insuffisant | {prob} | {impact} | {mitigation} |
| Performance sous-target | {prob} | {impact} | {mitigation} |"

### 4. Roles and Responsibilities

Define team roles:

"**Rôles et responsabilités:**

| Rôle | Responsabilité | Agent/Personne |
|------|----------------|----------------|
| Clinical Lead | Supervision protocole, interprétation | Dr. Claire |
| Statistician | SAP, analyses, rapport | Dr. Claire |
| Data Manager | Qualité données, preparation | {TBD} |
| Regulatory | Alignement réglementaire | Dr. Régis |
| Quality | Revue documentation | Quentin |

**Approbations requises:**
- [ ] Protocole approuvé par Clinical Lead
- [ ] SAP approuvé par Statistician
- [ ] Alignment vérifié par Regulatory
- [ ] Documentation revue par Quality"

### 5. Complete Validation Plan Document

Finalize `docs/regulatory/clinical-validation-plan.md`:

```markdown
## 8. Claims Coverage Matrix

{claims_coverage_table}

## 9. Regulatory Compliance

{regulatory_alignment_table}

## 10. Execution Plan

### 10.1 Timeline
{timeline_table}

### 10.2 Roles and Responsibilities
{roles_table}

### 10.3 Deliverables
| Deliverable | Description | Due |
|-------------|-------------|-----|
| Validation Protocol | Finalized protocol | {date} |
| Dataset Specification | Data requirements | {date} |
| Validation Report | Final results | {date} |

## 11. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Clinical Lead | Dr. Claire | _________ | ____ |
| Statistician | Dr. Claire | _________ | ____ |
| Regulatory | Dr. Régis | _________ | ____ |
| Quality | Quentin | _________ | ____ |

---

**Document Status:** Ready for Approval
**Version:** 1.0.0
**Next Steps:** Dataset acquisition, protocol execution
```

Update frontmatter:
- `status: ready_for_approval`
- `stepsCompleted: [step-01, step-02, step-03, step-04]`

### 6. Update Regulatory Context

Update `_bmad/_memory/bmmd/regulatory-context.md`:

Add to Key Decisions Log:
- Validation approach selected
- Sample size determined
- Success criteria defined

### 7. Present Final Summary

"**Plan de validation clinique complété pour {project_name}**

**Résumé du plan:**

| Élément | Valeur |
|---------|--------|
| Type de validation | {validation_type} |
| Claims couverts | {count}/{total} |
| Taille d'échantillon | {n} |
| Endpoint primaire | {primary_endpoint} |
| Critère de succès | {success_criterion} |

**Documents générés:**
- ✅ `docs/regulatory/clinical-validation-plan.md`

**Statut:** Prêt pour approbation

**Prochaines étapes:**
1. 📋 Obtenir les approbations (Clinical, Stats, Regulatory, Quality)
2. 📊 Acquérir le dataset de validation
3. 🔬 Exécuter le protocole de validation
4. 📝 Générer le rapport de validation

**Pour l'exécution de la validation:**
- Utilisez ce plan comme guide
- Documentez toute déviation
- Ne modifiez pas l'analyse primaire post-hoc

Le Phase Gate R3 (Pre-Release) requiert la complétion de cette validation."

## SUCCESS METRICS:

✅ All claims have validation coverage
✅ Regulatory requirements addressed
✅ Execution timeline defined
✅ Roles and approvals documented
✅ Complete validation plan ready

## FAILURE MODES:

❌ Claims without validation coverage
❌ Missing regulatory requirements
❌ No execution timeline
❌ Unclear responsibilities

## WORKFLOW COMPLETE

This workflow is now complete. The validation plan is ready for:
1. Internal approval
2. Execution (dataset acquisition, analysis)
3. Report generation (separate workflow if needed)
