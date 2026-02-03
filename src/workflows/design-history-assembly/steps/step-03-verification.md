# Step 3: DHF Verification & Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER finalize with critical gaps
- ✅ DHF must be audit-ready
- 📋 All documents must be version-controlled
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Verify DHF completeness
- 📖 Check cross-references
- 💾 Finalize DHF index
- 🚫 FORBIDDEN to close without completeness verification

## YOUR TASK:

Verify the DHF completeness, check cross-references, and finalize for regulatory submission.

## VERIFICATION SEQUENCE:

### 1. Completeness Checklist

Execute the appropriate checklist:
"**Vérification de complétude DHF**

Référence: `_bmad/bmmd/checklists/release-readiness-md.md`

**FDA 510(k) DHF Checklist:**

| # | Requirement | Document | Present | Complete |
|---|-------------|----------|---------|----------|
| 1 | Device description | intended-use.md | ✅/❌ | ✅/❌ |
| 2 | Substantial equivalence | se-comparison.md | ✅/❌ | ✅/❌ |
| 3 | Design inputs | prd.md | ✅/❌ | ✅/❌ |
| 4 | Design outputs | architecture.md | ✅/❌ | ✅/❌ |
| 5 | Risk analysis | risk-analysis.md | ✅/❌ | ✅/❌ |
| 6 | Verification results | test-results.md | ✅/❌ | ✅/❌ |
| 7 | Validation results | validation-results.md | ✅/❌ | ✅/❌ |
| 8 | Software documentation | per IEC 62304 | ✅/❌ | ✅/❌ |
| 9 | Labeling | labels/ | ✅/❌ | ✅/❌ |
| 10 | Cybersecurity documentation | cybersec/ | ✅/❌ | ✅/❌ |

**CE Technical Documentation Checklist:**

| # | Requirement (Annex II) | Document | Present | Complete |
|---|------------------------|----------|---------|----------|
| 1 | Device description | ... | ✅/❌ | ✅/❌ |
| 2 | Label and IFU | ... | ✅/❌ | ✅/❌ |
| 3 | Design and manufacturing | ... | ✅/❌ | ✅/❌ |
| 4 | GSPR compliance | ... | ✅/❌ | ✅/❌ |
| 5 | Benefit-risk analysis | ... | ✅/❌ | ✅/❌ |
| 6 | Product verification | ... | ✅/❌ | ✅/❌ |
| 7 | Clinical evaluation | ... | ✅/❌ | ✅/❌ |

**Résultat:** {pass/fail} — {percentage}% complet"

### 2. Cross-Reference Verification

"**Vérification des références croisées:**

**Traçabilité Requirements → Tests:**

| Requirement | Test | Result | Tracé |
|-------------|------|--------|-------|
| REQ-001 | TST-001 | Pass | ✅ |
| REQ-002 | TST-002 | Pass | ✅ |
| REQ-003 | — | — | ❌ Missing |

**Couverture:** {percentage}%

**Traçabilité Risks → Controls → Tests:**

| Risk | Control | Test | Verified |
|------|---------|------|----------|
| RISK-001 | CTRL-001 | TST-xxx | ✅/❌ |
| RISK-002 | CTRL-002 | TST-xxx | ✅/❌ |

**Couverture:** {percentage}%

**Documents référencés manquants:**
{list_of_broken_references}"

### 3. Version Verification

"**Vérification des versions:**

| Document | Version in DHF | Current Version | Match |
|----------|----------------|-----------------|-------|
| intended-use.md | v1.2.0 | v1.2.0 | ✅ |
| architecture.md | v2.0.0 | v2.1.0 | ⚠️ Outdated |
| prd.md | v1.5.0 | v1.5.0 | ✅ |

**Documents avec versions obsolètes:**
{list_of_outdated_documents}

**Action requise:** {update_links/accept_as_is}"

### 4. Gap Resolution Status

"**Statut des gaps identifiés:**

| Gap | Description | Status | Action |
|-----|-------------|--------|--------|
| GAP-001 | {description} | ✅ Resolved | {action_taken} |
| GAP-002 | {description} | ⏳ In progress | {action_planned} |
| GAP-003 | {description} | ❌ Open | {blocker} |

**Gaps critiques ouverts:** {count}
**Gaps non-critiques ouverts:** {count}

{if_critical_gaps}
⚠️ **Attention:** {count} gap(s) critique(s) non résolu(s).
Le DHF ne peut pas être finalisé tant que ces gaps ne sont pas résolus.
{/if}"

### 5. Final DHF Index Update

Finalize `docs/regulatory/dhf/00-dhf-index.md`:

```markdown
## DHF Completeness Summary

**Assembly Date:** {date}
**Assembled By:** Dr. Régis
**Verified By:** {verifier}

### Completeness Status

| Section | Documents | Complete | Verified |
|---------|-----------|----------|----------|
| Design Inputs | {count} | ✅ | ✅ |
| Design Outputs | {count} | ✅ | ✅ |
| Verification | {count} | ✅ | ✅ |
| Validation | {count} | {status} | {status} |
| Risk Management | {count} | ✅ | ✅ |
| Reviews | {count} | ✅ | ✅ |
| Changes | {count} | ✅ | ✅ |

**Overall Status:** {Ready for Submission / Gaps Remaining}

### Document Register

| # | Document | Version | Date | Location |
|---|----------|---------|------|----------|
| 1 | Intended Use | v{x} | {date} | 01-design-inputs/ |
| 2 | PRD | v{x} | {date} | 01-design-inputs/ |
| ... | ... | ... | ... | ... |

### Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Regulatory | Dr. Régis | _________ | ____ |
| Quality | Quentin | _________ | ____ |
| Project Lead | {name} | _________ | ____ |
```

### 6. Present Final Summary

"**Design History File — Vérification complétée**

**Résumé pour {project_name}:**

| Métrique | Valeur |
|----------|--------|
| Documents assemblés | {count} |
| Documents complets | {count} |
| Couverture traçabilité | {percentage}% |
| Gaps critiques | {count} |
| Gaps non-critiques | {count} |

**Statut DHF:** **{Ready for Submission / Needs Work}**

{if_ready}
**Le DHF est prêt pour:**
- Soumission réglementaire (510(k) / CE Technical File)
- Audit qualité
- Phase Gate R4 (Release)
{/if}

{if_not_ready}
**Actions requises avant finalisation:**
{list_of_required_actions}
{/if}

**Documents générés:**
- ✅ `docs/regulatory/dhf/00-dhf-index.md`
- ✅ Structure DHF complète

**Prochaines étapes:**
1. Obtenir les approbations
2. Procéder au workflow submission-package
3. Phase Gate R4"

## SUCCESS METRICS:

✅ Completeness checklist passed
✅ Cross-references verified
✅ Versions confirmed current
✅ Gaps resolved or documented
✅ DHF index finalized

## FAILURE MODES:

❌ Critical gaps unresolved
❌ Broken cross-references
❌ Outdated document versions
❌ Missing approvals

## WORKFLOW COMPLETE

This workflow is now complete. The DHF should be:
1. Reviewed by Quality Manager (Quentin)
2. Approved by project leadership
3. Submitted via submission-package workflow
