# Step 2: Post-Gate Checklist Execution

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER approve merge with failed critical items
- ✅ La traçabilité bidirectionnelle est non-négociable
- 📋 Verify implementation matches AC
- 💬 Speaking as Quentin (Quality Manager)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Execute each checklist item
- 📖 Verify implementation evidence
- 💾 Record gate results
- 🚫 FORBIDDEN to approve without test evidence

## YOUR TASK:

Execute the post-gate checklist to verify the story implementation is compliant and ready for merge.

## POST-GATE CHECKLIST SEQUENCE:

### 1. Acceptance Criteria Verification

"**[1/6] Vérification des critères d'acceptation**

**Critère:** Tous les AC doivent être satisfaits avec évidence.

**Story:** {story_id}

| AC # | Critère | Implemented | Evidence | Status |
|------|---------|-------------|----------|--------|
| AC-1 | {criterion} | ✅/❌ | {test_id/review} | ✅/❌ |
| AC-2 | {criterion} | ✅/❌ | {test_id/review} | ✅/❌ |
| AC-3 | {criterion} | ✅/❌ | {test_id/review} | ✅/❌ |

**Résultat:**
- AC satisfaits: {count}/{total}
- AC avec évidence: {count}/{total}

**Verdict:** {PASS/FAIL}

{if_fail}
⚠️ **Action requise:** Compléter l'implémentation des AC suivants:
{list_of_incomplete_ac}
{/if}"

### 2. Test Coverage Verification

"**[2/6] Vérification de la couverture de tests**

**Critère:** Les tests doivent couvrir les exigences tracées.

**Tests exécutés:**

| Test ID | Type | REQ Covered | Result | Date |
|---------|------|-------------|--------|------|
| TST-001 | Unit | REQ-FUNC-001 | ✅ Pass | {date} |
| TST-002 | Unit | REQ-FUNC-002 | ✅ Pass | {date} |
| TST-003 | Integration | REQ-FUNC-001,002 | ✅ Pass | {date} |

**Couverture par exigence:**

| REQ ID | Tests | All Passing | Status |
|--------|-------|-------------|--------|
| REQ-FUNC-001 | TST-001, TST-003 | ✅ | ✅ Covered |
| REQ-FUNC-002 | TST-002, TST-003 | ✅ | ✅ Covered |
| REQ-SAF-001 | — | — | ❌ Not covered |

**Résultat:**
- Exigences couvertes: {count}/{total}
- Tests passants: {count}/{total}

**Verdict:** {PASS/FAIL}

{if_class_b_or_c}
**Note Classe {safety_class}:** La couverture de test est obligatoire.
{/if}"

### 3. Traceability Verification

"**[3/6] Vérification de la traçabilité bidirectionnelle**

**Critère:** Traçabilité complète REQ → Code → Test

**Matrice de traçabilité pour cette story:**

| REQ ID | Code Location | Test ID | Fully Traced |
|--------|---------------|---------|--------------|
| REQ-FUNC-001 | src/module.ts:45 | TST-001 | ✅ |
| REQ-FUNC-002 | src/service.ts:120 | TST-002 | ✅ |
| REQ-SAF-001 | src/validator.ts:30 | TST-010 | ✅ |

**Éléments non tracés:**
{list_of_untraced_elements}

**Résultat:**
- Traçabilité complète: {count}/{total}

**Verdict:** {PASS/FAIL}

{if_fail}
⚠️ **Action requise:** Compléter la traçabilité pour:
{list_of_missing_traces}
{/if}"

### 4. Risk Control Verification

"**[4/6] Vérification des contrôles de risques**

**Critère:** Les contrôles de risques liés sont implémentés et vérifiés.

**Risques liés à cette story:**

| RISK ID | Control | Implemented | Test | Verified |
|---------|---------|-------------|------|----------|
| RISK-001 | {control} | ✅/❌ | TST-xxx | ✅/❌ |
| RISK-002 | {control} | ✅/❌ | TST-xxx | ✅/❌ |

**Mise à jour Risk Register:**
- Contrôles à marquer comme vérifiés: {count}

**Résultat:**
- Contrôles vérifiés: {count}/{total}

**Verdict:** {PASS/FAIL}

{if_unverified_controls}
⚠️ **Action requise:** Vérifier les contrôles suivants:
{list_of_unverified_controls}
{/if}"

### 5. Documentation Verification

"**[5/6] Vérification de la documentation**

**Critère:** La documentation requise est complète et à jour.

| Document | Required | Updated | Location | Status |
|----------|----------|---------|----------|--------|
| Code comments | {yes/no} | ✅/❌ | In code | ✅/❌ |
| Unit tests | {yes/no} | ✅/❌ | tests/unit/ | ✅/❌ |
| API docs | {yes/no} | ✅/❌ | docs/api/ | ✅/❌ |
| User docs | {yes/no} | ✅/❌ | docs/user/ | ✅/❌ |
| Changelog | {yes/no} | ✅/❌ | CHANGELOG.md | ✅/❌ |

**Résultat:**
- Documentation complète: {count}/{required}

**Verdict:** {PASS/FAIL}"

### 6. Code Review Verification

"**[6/6] Vérification de la revue de code**

**Critère:** Le code a été revu selon les standards du projet.

| Critère | Status | Evidence |
|---------|--------|----------|
| PR created | ✅/❌ | PR #{number} |
| Reviewer assigned | ✅/❌ | {reviewer_name} |
| Review completed | ✅/❌ | {date} |
| Comments addressed | ✅/❌ | {all/partial/none} |
| Approved | ✅/❌ | {approver_name} |

**Security review (si Class B/C):**
| Check | Status |
|-------|--------|
| No hardcoded secrets | ✅/❌ |
| Input validation | ✅/❌ |
| Error handling | ✅/❌ |
| Logging (no PHI) | ✅/❌ |

**Résultat:**

**Verdict:** {PASS/FAIL}"

### 7. Post-Gate Summary

"**Résumé Post-Gate pour {story_id}**

| Check | Result | Evidence |
|-------|--------|----------|
| AC Verification | {PASS/FAIL} | {evidence} |
| Test Coverage | {PASS/FAIL} | {coverage}% |
| Traceability | {PASS/FAIL} | {traced}% |
| Risk Controls | {PASS/FAIL} | {verified}/{total} |
| Documentation | {PASS/FAIL} | {complete}/{required} |
| Code Review | {PASS/FAIL} | PR #{number} |

**Résultat global:**
- Checks passés: {count}/6
- Checks échoués: {count}/6

**Gate Verdict:** **{PASS / CONDITIONAL / FAIL}**

{if_pass}
✅ **PASS:** La story peut être mergée/releasée.
{/if}

{if_conditional}
⚠️ **CONDITIONAL:** La story peut être mergée avec les conditions suivantes:
{list_of_conditions}
{/if}

{if_fail}
❌ **FAIL:** La story ne peut pas être mergée. Actions requises:
{list_of_required_actions}
{/if}"

### 8. Record Gate Result and Update Registers

"**Enregistrement du résultat:**

**Story:** {story_id}
**Gate:** POST-GATE
**Date:** {date}
**Reviewer:** Quentin (Quality Manager)
**Result:** {PASS/CONDITIONAL/FAIL}

**Mises à jour effectuées:**
- ✅ Story status updated
- ✅ Risk Register: {count} controls marked as verified
- ✅ Traceability Matrix: {count} entries added
- ✅ Regulatory Context: Phase progress updated

**Story ready for:** {MERGE / REWORK}"

## SUCCESS METRICS:

✅ All checklist items executed
✅ Test evidence verified
✅ Traceability complete
✅ Risk controls verified
✅ Gate result recorded
✅ Registers updated

## FAILURE MODES:

❌ Missing test evidence
❌ Incomplete traceability
❌ Unverified risk controls
❌ Result not recorded

## WORKFLOW COMPLETE (POST-GATE)

Post-gate review complete. Next steps:
- If PASS: Merge PR, update sprint status
- If CONDITIONAL: Address conditions before merge
- If FAIL: Return to development, re-run post-gate after fixes
