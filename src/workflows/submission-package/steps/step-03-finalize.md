# Step 3: Submission Package Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER submit without final QA review
- ✅ All documents must be signed and dated
- 📋 Executive review required
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Execute final QA checklist
- 📖 Obtain required signatures
- 💾 Generate submission package
- 🚫 FORBIDDEN to submit without approvals

## YOUR TASK:

Finalize the submission package with QA review, approvals, and final verification.

## FINALIZATION SEQUENCE:

### 1. Final QA Checklist

"**[Quentin] Revue QA finale du package de soumission**

**Completeness Check:**

| Criterion | Status | Notes |
|-----------|--------|-------|
| All required sections present | ✅/❌ | {notes} |
| No draft documents | ✅/❌ | {notes} |
| All documents dated | ✅/❌ | {notes} |
| Version numbers consistent | ✅/❌ | {notes} |
| Cross-references valid | ✅/❌ | {notes} |
| Table of contents accurate | ✅/❌ | {notes} |

**Quality Check:**

| Criterion | Status | Notes |
|-----------|--------|-------|
| Spelling and grammar | ✅/❌ | {notes} |
| Formatting consistent | ✅/❌ | {notes} |
| Figures/tables readable | ✅/❌ | {notes} |
| Confidential info protected | ✅/❌ | {notes} |
| No PII/PHI in submission | ✅/❌ | {notes} |

**Regulatory Check:**

| Criterion | Status | Notes |
|-----------|--------|-------|
| Intended use clear | ✅/❌ | {notes} |
| Classification correct | ✅/❌ | {notes} |
| {Submission-specific checks} | ✅/❌ | {notes} |
| Labeling compliant | ✅/❌ | {notes} |
| Risk analysis complete | ✅/❌ | {notes} |

**QA Result:** {PASS/FAIL}

{if_fail}
**Issues to resolve:**
{list_of_issues}
{/if}"

### 2. Approval Signatures

"**Signatures requises:**

| Role | Name | Signature | Date | Status |
|------|------|-----------|------|--------|
| Regulatory Affairs | Dr. Régis | _________ | ____ | ⏳ |
| Quality Assurance | Quentin | _________ | ____ | ⏳ |
| R&D Lead | {name} | _________ | ____ | ⏳ |
| Management | {name} | _________ | ____ | ⏳ |

**Déclaration:**
> Nous certifions que ce package de soumission est complet et exact à notre connaissance, et que le dispositif est conforme aux exigences réglementaires applicables.

**Toutes les signatures obtenues:** {yes/no}"

### 3. Generate Final Package

"**Génération du package final:**

**Format de soumission:**

{if_fda}
**FDA eCopy Requirements:**
- Format: PDF
- Bookmarked: ✅
- Searchable: ✅
- Max file size: 100MB per file
- Naming convention: {convention}

**Package generated:**
- `submission/{submission_id}/`
  - `cover-letter.pdf`
  - `510k-summary.pdf` (or applicable)
  - `device-description.pdf`
  - `performance-data.pdf`
  - `software-documentation.pdf`
  - `labeling.pdf`
  - `risk-analysis.pdf`
{/if}

{if_ce}
**Technical Documentation Format:**
- Format: PDF
- Indexed: ✅
- Version controlled: ✅

**Package generated:**
- `technical-documentation/{product_name}_v{version}/`
{/if}

**Package size:** {size} MB
**Files:** {count}
**Generated:** {timestamp}"

### 4. Pre-Submission Checklist

"**Checklist finale avant soumission:**

| # | Item | Done |
|---|------|------|
| 1 | Package QA complete | ✅/⏳ |
| 2 | All signatures obtained | ✅/⏳ |
| 3 | Payment/fees ready | ✅/⏳ |
| 4 | Regulatory contact identified | ✅/⏳ |
| 5 | Submission portal access confirmed | ✅/⏳ |
| 6 | Backup of submission created | ✅/⏳ |
| 7 | Internal stakeholders notified | ✅/⏳ |
| 8 | Post-submission tracking ready | ✅/⏳ |

**Ready for submission:** {yes/no}"

### 5. Submission Instructions

"**Instructions de soumission:**

{if_510k}
**FDA 510(k) Submission:**
1. Access FDA ESG (Electronic Submissions Gateway)
2. Create new 510(k) submission
3. Upload eCopy files
4. Pay user fee via pay.gov
5. Receive acknowledgment number
6. Track via FDA CDRH Portal

**Contact:**
- Pre-submission: 1-800-638-2041
- CDRH Learn: deviceadvice@fda.hhs.gov
{/if}

{if_ce}
**CE Technical File Submission:**
1. Contact Notified Body: {nb_name}
2. Submit technical documentation
3. Schedule audit if required
4. Respond to NB questions
5. Receive CE certificate

**Contact:**
- Notified Body: {nb_contact}
{/if}

**Submission deadline:** {if_applicable}
**Expected review time:** {typical_duration}"

### 6. Post-Submission Plan

"**Plan post-soumission:**

**Tracking:**
- Submission ID: {to_be_assigned}
- Expected acknowledgment: {timeline}
- Review timeline: {expected_duration}

**Response Preparation:**
- Regulatory questions handler: Dr. Régis
- Technical questions handler: {technical_lead}
- Response turnaround target: {days} days

**Deficiency Response Process:**
1. Receive RFI/deficiency letter
2. Assign response owners
3. Draft responses
4. QA review
5. Submit response
6. Track to resolution

**Post-Market Commitments:**
{list_of_commitments_if_any}"

### 7. Final Summary

"**Package de soumission finalisé pour {project_name}**

**Résumé:**

| Item | Value |
|------|-------|
| Submission Type | {submission_type} |
| Product | {product_name} v{version} |
| Classification | {classification} |
| Package Size | {size} MB |
| Documents | {count} |
| QA Status | {PASS} |
| Approvals | {count}/{required} |

**Status:** **READY FOR SUBMISSION**

**Package location:**
`docs/regulatory/submission/{submission_id}/`

**Next Steps:**
1. 📤 Submit via {portal/nb}
2. 📝 Record submission ID
3. 📊 Track review progress
4. 📩 Prepare for questions

**Documents générés:**
- ✅ Complete submission package
- ✅ Submission index
- ✅ Pre-submission checklist

**Bonne chance pour votre soumission !**

---

**Note:** Conservez une copie complète du package soumis pour référence future et audits."

## SUCCESS METRICS:

✅ QA checklist passed
✅ All approvals obtained
✅ Package generated in correct format
✅ Pre-submission checklist complete
✅ Post-submission plan ready

## FAILURE MODES:

❌ QA issues unresolved
❌ Missing approvals
❌ Wrong format/size
❌ No backup created

## WORKFLOW COMPLETE

This workflow is now complete. The submission package is ready for:
1. Submission to regulatory authority
2. Notified Body review (if CE)
3. Post-submission tracking and response
