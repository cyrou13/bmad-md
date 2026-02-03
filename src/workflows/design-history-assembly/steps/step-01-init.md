# Step 1: Design History File Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER include incomplete documents in DHF
- ✅ Si ce n'est pas documenté, ce n'est pas fait
- 📋 DHF must be auditable and complete
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Identify all required DHF components
- 📖 Verify document existence and status
- 💾 Initialize DHF structure
- 🚫 FORBIDDEN to proceed with missing critical documents

## YOUR TASK:

Initialize the Design History File assembly by identifying required documents and their status.

## INITIALIZATION SEQUENCE:

### 1. Determine DHF Requirements

Based on classification and regulatory pathway:
"**Exigences du Design History File pour {project_name}**

**Classification:**
- IEC 62304: Classe {safety_class}
- FDA: Class {fda_class} → {pathway}
- MDR: Class {mdr_class}

**Exigences DHF selon le pathway:**

{if_510k}
**FDA 510(k) DHF Requirements:**
- Design Input/Output Documentation
- Risk Analysis (ISO 14971)
- Verification & Validation
- Software Documentation (IEC 62304)
- Labeling
- Substantial Equivalence Comparison
{/if}

{if_ce_mark}
**CE Technical Documentation (MDR Annex II):**
- Device Description and Specification
- Design and Manufacturing Information
- General Safety and Performance Requirements
- Benefit-Risk Analysis
- Product Verification and Validation
- Clinical Evaluation
{/if}"

### 2. Document Inventory

Check for existing documents:
"**Inventaire des documents pour le DHF:**

**Section 1: Design Inputs**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Intended Use | docs/regulatory/intended-use.md | {status} | ✅/❌ |
| User Needs | (from PRD) | {status} | ✅/❌ |
| Requirements Spec | _bmad-output/.../prd.md | {status} | ✅/❌ |
| Regulatory Requirements | docs/regulatory/*.md | {status} | ✅/❌ |

**Section 2: Design Outputs**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Architecture | _bmad-output/.../architecture.md | {status} | ✅/❌ |
| Software Specification | (from architecture) | {status} | ✅/❌ |
| Interface Specification | (from architecture) | {status} | ✅/❌ |
| SOUP List | (from architecture review) | {status} | ✅/❌ |

**Section 3: Design Verification**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Test Protocols | tests/ | {status} | ✅/❌ |
| Test Results | (CI reports) | {status} | ✅/❌ |
| Traceability Matrix | docs/regulatory/ | {status} | ✅/❌ |
| Code Review Records | (git/PR) | {status} | ✅/❌ |

**Section 4: Design Validation**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Validation Plan | docs/regulatory/clinical-validation-plan.md | {status} | ✅/❌ |
| Validation Results | docs/regulatory/validation-results.md | {status} | ✅/❌ |

**Section 5: Risk Management**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Risk Management Plan | docs/regulatory/ | {status} | ✅/❌ |
| Risk Analysis (FMEA) | docs/regulatory/risk-analysis.md | {status} | ✅/❌ |
| Risk Register | _bmad/_memory/bmmd/risk-register.md | {status} | ✅/❌ |
| Risk Management Report | docs/regulatory/ | {status} | ✅/❌ |

**Section 6: Design Reviews**

| Document | Location | Status | Complete |
|----------|----------|--------|----------|
| Phase Gate Records | docs/regulatory/ | {status} | ✅/❌ |
| Architecture Safety Review | docs/regulatory/architecture-safety-review.md | {status} | ✅/❌ |

**Résumé:**
- Documents complets: {count}/{total}
- Documents incomplets: {count}
- Documents manquants: {count}"

### 3. Identify Gaps

"**Gaps identifiés:**

**Documents manquants (critiques):**
{list_of_missing_critical_documents}

**Documents incomplets:**
{list_of_incomplete_documents}

**Actions requises avant assemblage:**

| # | Action | Document | Owner | Priority |
|---|--------|----------|-------|----------|
| 1 | {action} | {document} | {owner} | Critical |
| 2 | {action} | {document} | {owner} | High |

Voulez-vous procéder malgré les gaps ou les résoudre d'abord ?"

### 4. Initialize DHF Structure

Create DHF folder structure:
"**Création de la structure DHF:**

```
docs/regulatory/dhf/
├── 00-dhf-index.md
├── 01-design-inputs/
│   ├── intended-use.md (link)
│   ├── user-needs.md
│   └── requirements-spec.md
├── 02-design-outputs/
│   ├── architecture.md (link)
│   ├── software-spec.md
│   └── soup-list.md
├── 03-design-verification/
│   ├── verification-plan.md
│   ├── test-results.md
│   └── traceability-matrix.md
├── 04-design-validation/
│   ├── validation-plan.md (link)
│   └── validation-results.md
├── 05-risk-management/
│   ├── risk-management-plan.md
│   ├── risk-analysis.md (link)
│   └── risk-register.md (link)
├── 06-design-reviews/
│   └── phase-gate-records.md
└── 07-design-changes/
    └── change-log.md
```

Structure créée avec {count} sections."

### 5. Create DHF Index

Create `docs/regulatory/dhf/00-dhf-index.md`:

```markdown
---
document: dhf-index
project: {project_name}
version: 1.0.0
date: {date}
author: Dr. Régis (Regulatory Affairs)
status: draft
classification: IEC 62304 Class {safety_class}
pathway: {fda_pathway}
---

# Design History File — {project_name}

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | {date} | Dr. Régis | Initial assembly |

## DHF Contents

### 1. Design Inputs
{design_inputs_list}

### 2. Design Outputs
{design_outputs_list}

### 3. Design Verification
{verification_list}

### 4. Design Validation
{validation_list}

### 5. Risk Management
{risk_management_list}

### 6. Design Reviews
{reviews_list}

### 7. Design Changes
{changes_list}

## Completeness Status

| Section | Complete | Notes |
|---------|----------|-------|
| Design Inputs | {status} | {notes} |
| Design Outputs | {status} | {notes} |
| Verification | {status} | {notes} |
| Validation | {status} | {notes} |
| Risk Management | {status} | {notes} |
| Reviews | {status} | {notes} |
```

### 6. Present Menu

"**Initialisation du DHF complétée**

**Résumé:**
- Documents disponibles: {count}/{total}
- Gaps identifiés: {count}
- Structure DHF créée: ✅

**[C] Continuer** — Assembler les documents disponibles
**[G] Gaps** — Traiter les gaps avant de continuer
**[R] Réviser** — Revoir l'inventaire"

## SUCCESS METRICS:

✅ All required documents identified
✅ Document status verified
✅ Gaps identified and documented
✅ DHF structure created
✅ Index initialized

## FAILURE MODES:

❌ Missing critical documents unidentified
❌ Incomplete status assessment
❌ No gap resolution plan
❌ DHF structure not created

## NEXT STEP:

After user selects [C] to continue, load `./step-02-assembly.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
