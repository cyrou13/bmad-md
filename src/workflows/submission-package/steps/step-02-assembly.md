# Step 2: Submission Package Assembly

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER include draft documents in submission
- ✅ All documents must be version-controlled and approved
- 📋 Cross-reference documents correctly
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Assemble documents section by section
- 📖 Create new sections where needed
- 💾 Update submission index
- 🚫 FORBIDDEN to include unapproved documents

## YOUR TASK:

Assemble all required documents into the submission package structure.

## ASSEMBLY SEQUENCE:

### 1. Administrative Documents

"**Section Administrative:**

**Cover Letter:**
```markdown
[Date]

[Regulatory Authority Address]

RE: {submission_type} Submission for {product_name}

Dear Sir/Madam,

[Company Name] hereby submits this {submission_type} for {product_name},
a {device_description}.

This submission contains the following:
{table_of_contents}

We certify that the information provided is accurate and complete.

Sincerely,
[Regulatory Contact]
[Title]
[Contact Information]
```

**Additional Administrative Documents:**
{submission_type_specific_admin}

Documents créés: ✅"

### 2. Device Description Section

"**Section Device Description:**

**Sources:**
- Intended Use: `docs/regulatory/intended-use.md`
- PRD: `_bmad-output/planning-artifacts/prd.md`
- Classification: `docs/regulatory/samd-classification.md`

**Content assembled:**

```markdown
## Device Description

### Product Identification
- Product Name: {product_name}
- Version: {version}
- Manufacturer: {manufacturer}

### Intended Use
{intended_use_statement}

### Indications for Use
{indications}

### Contraindications
{contraindications}

### Device Classification
{classification_summary}

### Principles of Operation
{how_it_works}

### Software Architecture Overview
{high_level_architecture}
```

Section assemblée: ✅"

### 3. Submission-Specific Sections

{if_510k}
"**Section Substantial Equivalence (510(k)):**

**Predicate Device Comparison:**

| Characteristic | Predicate ({k_number}) | Subject Device | Comparison |
|----------------|----------------------|----------------|------------|
| Intended Use | {pred_iu} | {subj_iu} | {same/different} |
| Technology | {pred_tech} | {subj_tech} | {same/different} |
| Performance | {pred_perf} | {subj_perf} | {same/different} |

**Substantial Equivalence Argument:**
{se_argument}

**Differences and Justification:**
{differences_table}"
{/if}

{if_ce_mark}
"**Section GSPR Checklist (MDR):**

**General Safety and Performance Requirements (Annex I):**

| GSPR # | Requirement | Applicable | Evidence | Compliant |
|--------|-------------|------------|----------|-----------|
| 1 | Safe and effective | Yes | {evidence} | ✅ |
| 2 | Risk management | Yes | Risk Analysis | ✅ |
| ... | ... | ... | ... | ... |
| 17.2 | Cybersecurity | Yes | {evidence} | ✅ |

**GSPR Compliance Summary:**
- Applicable: {count}
- Compliant: {count}
- Gaps: {count}"
{/if}

### 4. Performance Data Section

"**Section Performance Data:**

**Sources:**
- Validation Plan: `docs/regulatory/clinical-validation-plan.md`
- Validation Results: `docs/regulatory/validation-results.md`
- Test Reports: `tests/` and CI reports

**Content:**

```markdown
## Performance Data

### Validation Overview
{validation_summary}

### Analytical Performance
{analytical_results_table}

### Clinical Performance
{clinical_results_if_applicable}

### Test Reports Summary
| Test Type | Tests | Passed | Failed | Coverage |
|-----------|-------|--------|--------|----------|
| Unit | {n} | {p} | {f} | {cov}% |
| Integration | {n} | {p} | {f} | {cov}% |
| System | {n} | {p} | {f} | {cov}% |
```

Section assemblée: ✅"

### 5. Software Documentation Section

"**Section Software Documentation:**

**Per IEC 62304 requirements for Class {safety_class}:**

**Documents included:**

| Document | IEC 62304 Ref | Included | Location |
|----------|---------------|----------|----------|
| Software Development Plan | 5.1 | ✅/❌ | {location} |
| Software Requirements Spec | 5.2 | ✅/❌ | {location} |
| Software Architecture | 5.3 | ✅/❌ | {location} |
| Software Detailed Design | 5.4 | {req_for_class} | {location} |
| Software Unit Verification | 5.5 | {req_for_class} | {location} |
| Software Integration Testing | 5.6 | ✅/❌ | {location} |
| Software System Testing | 5.7 | ✅/❌ | {location} |
| Software Release | 5.8 | ✅/❌ | {location} |
| SOUP Documentation | 5.3.3 | ✅/❌ | {location} |
| Cybersecurity Documentation | IEC 81001-5-1 | ✅/❌ | {location} |

Section assemblée: ✅"

### 6. Labeling Section

"**Section Labeling:**

**Documents:**
- Product labels
- Instructions for Use (IFU)
- Quick Start Guide
- Warning labels (if applicable)

**Labeling Checklist:**

| Element | Required | Present | Compliant |
|---------|----------|---------|-----------|
| Product name | ✅ | ✅/❌ | ✅/❌ |
| Manufacturer | ✅ | ✅/❌ | ✅/❌ |
| Version/UDI | ✅ | ✅/❌ | ✅/❌ |
| Intended use | ✅ | ✅/❌ | ✅/❌ |
| Contraindications | ✅ | ✅/❌ | ✅/❌ |
| Warnings | {if_applicable} | ✅/❌ | ✅/❌ |
| Instructions | ✅ | ✅/❌ | ✅/❌ |

Section assemblée: ✅"

### 7. Risk Analysis Section

"**Section Risk Analysis:**

**Sources:**
- Risk Analysis: `docs/regulatory/risk-analysis.md`
- Risk Register: `_bmad/_memory/bmmd/risk-register.md`
- Risk Management Report: `docs/regulatory/`

**Summary:**
- Risks identified: {count}
- Risks acceptable (post-control): {count}
- Overall residual risk: {acceptable/conditional}
- Benefit-risk: {favorable}

**Documents included:**
- ✅ Risk Management Plan
- ✅ Risk Analysis (FMEA)
- ✅ Risk Evaluation
- ✅ Risk Control
- ✅ Residual Risk Evaluation
- ✅ Risk Management Report

Section assemblée: ✅"

### 8. Update Submission Index

"**Mise à jour de l'index de soumission:**

```markdown
# Submission Package — {product_name}
## {submission_type}

**Version:** 1.0.0
**Date:** {date}
**Prepared by:** Dr. Régis (Regulatory Affairs)

## Table of Contents

| Section | Title | Pages | Status |
|---------|-------|-------|--------|
| 1 | Administrative | {pages} | ✅ |
| 2 | Device Description | {pages} | ✅ |
| 3 | {submission_specific} | {pages} | ✅ |
| 4 | Performance Data | {pages} | ✅ |
| 5 | Software Documentation | {pages} | ✅ |
| 6 | Labeling | {pages} | ✅ |
| 7 | Risk Analysis | {pages} | ✅ |
| 8 | {additional} | {pages} | ✅ |

**Total:** {total_pages} pages
```"

### 9. Present Assembly Summary

"**Assemblage du package — Résumé**

| Section | Documents | Complete | Gaps |
|---------|-----------|----------|------|
| Administrative | {count} | ✅/❌ | {gaps} |
| Device Description | {count} | ✅/❌ | {gaps} |
| {Submission-specific} | {count} | ✅/❌ | {gaps} |
| Performance Data | {count} | ✅/❌ | {gaps} |
| Software Documentation | {count} | ✅/❌ | {gaps} |
| Labeling | {count} | ✅/❌ | {gaps} |
| Risk Analysis | {count} | ✅/❌ | {gaps} |

**Total documents:** {count}
**Complete:** {count}
**Gaps:** {count}

**[C] Continuer** — Vérifier et finaliser le package
**[R] Réviser** — Corriger les gaps"

## SUCCESS METRICS:

✅ All sections assembled
✅ Documents from DHF linked
✅ New sections created
✅ Index updated
✅ Gaps identified

## FAILURE MODES:

❌ Draft documents included
❌ Missing required sections
❌ Broken document links
❌ Index incomplete

## NEXT STEP:

After user selects [C] to continue, load `./step-03-finalize.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
