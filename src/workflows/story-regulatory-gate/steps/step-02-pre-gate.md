# Step 2: Pre-Gate Checklist Execution

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER pass gate with failed critical items
- ✅ Si ce n'est pas documenté, ce n'est pas fait
- 📋 Execute checklist item by item
- 💬 Speaking as Quentin (Quality Manager)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Execute each checklist item
- 📖 Document pass/fail with evidence
- 💾 Record gate results
- 🚫 FORBIDDEN to skip items based on class

## YOUR TASK:

Execute the pre-gate checklist to verify the story is ready for implementation.

## PRE-GATE CHECKLIST SEQUENCE:

### 1. Requirements Traceability Check

"**[1/5] Vérification de la traçabilité des exigences**

**Critère:** Chaque fonctionnalité de la story doit être tracée à une exigence.

**Story:** {story_id}

**Exigences tracées:**

| REQ ID | Description | In Story | Status |
|--------|-------------|----------|--------|
| REQ-FUNC-001 | {desc} | ✅ Oui | ✅ Pass |
| REQ-FUNC-002 | {desc} | ❌ Non | ⚠️ Missing |

**Résultat:**
- Exigences tracées: {count}/{total}
- Couverture: {percentage}%

**Verdict:** {PASS/FAIL}

{if_fail}
⚠️ **Action requise:** Ajouter les REQ IDs manquants dans la story.
{/if}"

### 2. Risk Linkage Check

"**[2/5] Vérification de la liaison aux risques**

**Critère:** Les risques pertinents doivent être identifiés et liés.

**Risques liés à cette story:**

| RISK ID | Hazard | Control Required | In Story |
|---------|--------|------------------|----------|
| RISK-001 | {hazard} | {control} | ✅ Oui |
| RISK-002 | {hazard} | {control} | ❌ Non |

**Risques potentiellement pertinents non liés:**
{list_of_potentially_relevant_risks}

**Résultat:**
- Risques liés: {count}
- Risques potentiellement manquants: {count}

**Verdict:** {PASS/FAIL/WARNING}

{if_missing_risks}
⚠️ **Action requise:** Évaluer si RISK-{xxx} devrait être lié à cette story.
{/if}"

### 3. Acceptance Criteria Safety Check

"**[3/5] Vérification des critères d'acceptation safety**

**Critère:** Les AC doivent inclure les vérifications de sécurité nécessaires.

**Analyse des AC:**

| AC # | Critère | Safety Relevant | Safety Check Included |
|------|---------|-----------------|----------------------|
| AC-1 | {criterion} | {yes/no} | {yes/no/na} |
| AC-2 | {criterion} | {yes/no} | {yes/no/na} |
| AC-3 | {criterion} | {yes/no} | {yes/no/na} |

**AC safety manquants suggérés:**
{if_class_b_or_c}
- [ ] Input validation for {field}
- [ ] Error handling for {scenario}
- [ ] Audit logging for {action}
{/if}

**Résultat:**
- AC avec vérifications safety: {count}/{relevant}

**Verdict:** {PASS/FAIL}

{if_fail}
⚠️ **Action requise:** Ajouter les AC safety suivants:
{list_of_missing_safety_ac}
{/if}"

### 4. Documentation Requirements Check

"**[4/5] Vérification des exigences de documentation**

**Critère:** La documentation requise doit être identifiée.

**Documentation requise pour Classe {safety_class}:**

| Document | Required | Identified | Location |
|----------|----------|------------|----------|
| Unit tests | {yes/no} | ✅/❌ | tests/ |
| Integration tests | {yes/no} | ✅/❌ | tests/ |
| Code comments | {yes/no} | ✅/❌ | In code |
| API documentation | {yes/no} | ✅/❌ | docs/ |
| User documentation | {yes/no} | ✅/❌ | docs/ |

**Résultat:**
- Documentation identifiée: {count}/{required}

**Verdict:** {PASS/FAIL}"

### 5. Implementation Readiness Check

"**[5/5] Vérification de la préparation à l'implémentation**

**Critère:** La story a toutes les informations nécessaires pour l'implémentation.

| Critère | Status | Notes |
|---------|--------|-------|
| Description claire | ✅/❌ | {notes} |
| AC testables | ✅/❌ | {notes} |
| Dépendances identifiées | ✅/❌ | {notes} |
| Estimée | ✅/❌ | {notes} |
| Assignée | ✅/❌ | {notes} |

**Résultat:**

**Verdict:** {PASS/FAIL}"

### 6. Pre-Gate Summary

"**Résumé Pre-Gate pour {story_id}**

| Check | Result | Action Required |
|-------|--------|-----------------|
| Requirements Traceability | {PASS/FAIL} | {action_if_fail} |
| Risk Linkage | {PASS/FAIL} | {action_if_fail} |
| AC Safety | {PASS/FAIL} | {action_if_fail} |
| Documentation | {PASS/FAIL} | {action_if_fail} |
| Implementation Readiness | {PASS/FAIL} | {action_if_fail} |

**Résultat global:**
- Checks passés: {count}/5
- Checks échoués: {count}/5

**Gate Verdict:** **{PASS / CONDITIONAL / FAIL}**

{if_pass}
✅ **PASS:** La story peut procéder à l'implémentation.
{/if}

{if_conditional}
⚠️ **CONDITIONAL:** La story peut procéder avec les conditions suivantes:
{list_of_conditions}
{/if}

{if_fail}
❌ **FAIL:** La story ne peut pas procéder. Actions requises:
{list_of_required_actions}
{/if}"

### 7. Record Gate Result

"**Enregistrement du résultat:**

**Story:** {story_id}
**Gate:** PRE-GATE
**Date:** {date}
**Reviewer:** Quentin (Quality Manager)
**Result:** {PASS/CONDITIONAL/FAIL}
**Conditions:** {conditions_if_any}

Résultat enregistré dans la story et le regulatory context."

## SUCCESS METRICS:

✅ All checklist items executed
✅ Pass/fail documented with evidence
✅ Actions identified for failures
✅ Gate result recorded
✅ Clear verdict provided

## FAILURE MODES:

❌ Checklist items skipped
❌ No evidence for pass/fail
❌ Unclear verdict
❌ Result not recorded

## WORKFLOW COMPLETE (PRE-GATE)

Pre-gate review complete. Next steps:
- If PASS: Proceed to implementation
- If CONDITIONAL: Address conditions, then implement
- If FAIL: Fix issues, re-run pre-gate
- After implementation: Run POST-GATE
