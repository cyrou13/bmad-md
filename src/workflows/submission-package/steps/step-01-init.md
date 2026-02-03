# Step 1: Submission Package Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER submit with incomplete documentation
- ✅ Regulatory by design — la conformité se conçoit, elle ne se constate pas
- 📋 Verify all prerequisites before assembly
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Determine submission type
- 📖 Verify prerequisites are met
- 💾 Initialize submission structure
- 🚫 FORBIDDEN to proceed without DHF complete

## YOUR TASK:

Initialize the submission package preparation by determining the submission type and verifying prerequisites.

## INITIALIZATION SEQUENCE:

### 1. Determine Submission Type

If not specified:
"**Submission Package — Sélection du type**

Quel type de soumission préparez-vous ?

**FDA Submissions:**
**[510K]** 510(k) Premarket Notification
- Substantial equivalence à un predicate device
- Class II devices (most common)

**[DENOVO]** De Novo Classification Request
- Novel device, low-to-moderate risk
- No predicate device exists

**[PMA]** Premarket Approval
- Class III devices
- Requires clinical evidence

**CE Marking (MDR 2017/745):**
**[CE-I]** Class I Self-Declaration
- Lowest risk, no Notified Body

**[CE-IIA]** Class IIa Technical File
- Notified Body required

**[CE-IIB]** Class IIb Technical File
- More extensive review

**[CE-III]** Class III Technical File
- Full Notified Body scrutiny

Sélectionnez le type de soumission :"

### 2. Verify Prerequisites

"**Vérification des prérequis pour {submission_type}:**

**Documents fondamentaux:**

| Document | Required | Status | Location |
|----------|----------|--------|----------|
| Design History File | ✅ | {complete/incomplete/missing} | docs/regulatory/dhf/ |
| Risk Management File | ✅ | {complete/incomplete/missing} | docs/regulatory/ |
| Clinical Validation | {yes/no} | {status} | docs/regulatory/ |
| Phase Gates (R1-R4) | ✅ | {passed/pending} | docs/regulatory/ |

**Release Readiness:**
Référence: `_bmad/bmmd/checklists/release-readiness-md.md`

| Critère | Status |
|---------|--------|
| All tests passing | ✅/❌ |
| Risk Register — all acceptable | ✅/❌ |
| Traceability complete | ✅/❌ |
| Documentation complete | ✅/❌ |
| Phase Gate R4 passed | ✅/❌ |

**Résultat:** {ready/not_ready}

{if_not_ready}
⚠️ **Prérequis non satisfaits:**
{list_of_missing_prerequisites}

**Options:**
**[CONTINUE]** Continuer malgré les gaps (non recommandé)
**[FIX]** Résoudre les gaps d'abord
{/if}"

### 3. Load Submission Requirements

Based on submission type:

{if_510k}
"**Exigences 510(k):**

**Sections requises:**

| Section | Description | Source |
|---------|-------------|--------|
| Cover Letter | Administrative | Template |
| User Fee | Payment confirmation | FDA |
| CDRH Presubmission | If applicable | Previous |
| Device Description | From Intended Use | DHF |
| Substantial Equivalence | Predicate comparison | New |
| Performance Data | From validation | DHF |
| Software Documentation | Per IEC 62304 | DHF |
| Labeling | Labels, IFU | DHF |
| Cybersecurity | Per FDA guidance | DHF |
| 510(k) Summary | Executive summary | New |

**Predicate Device:**
- Predicate identified: {yes/no}
- Predicate K number: {k_number_if_known}
- Substantial equivalence analysis: {complete/pending}"
{/if}

{if_ce_mark}
"**Exigences Technical Documentation (MDR Annex II/III):**

| Section | Description | Source |
|---------|-------------|--------|
| Device Description | Intended purpose, variants | DHF |
| Labels and IFU | Symbols, instructions | DHF |
| Design & Manufacturing | Processes, facilities | QMS |
| GSPR Checklist | Annex I compliance | New |
| Benefit-Risk Analysis | From risk management | DHF |
| Product Verification | Test reports | DHF |
| Clinical Evaluation | CER or clinical data | DHF |
| PMS Plan | Post-market surveillance | New |

**Notified Body:**
- NB identified: {yes/no}
- NB name: {nb_name_if_known}
- Application submitted: {yes/no}"
{/if}

### 4. Initialize Submission Structure

"**Création de la structure de soumission:**

```
docs/regulatory/submission/
├── 00-submission-index.md
├── 01-administrative/
│   ├── cover-letter.md
│   └── {submission_specific_admin}
├── 02-device-description/
│   └── (from DHF)
├── 03-{submission_specific_sections}/
│   └── ...
├── 04-performance-data/
│   └── (from DHF)
├── 05-software-documentation/
│   └── (from DHF)
├── 06-labeling/
│   └── labels, IFU
├── 07-risk-analysis/
│   └── (from DHF)
└── 08-{final_sections}/
    └── ...
```

Structure créée pour **{submission_type}**."

### 5. Present Initialization Summary

"**Initialisation du package de soumission complétée**

**Type:** {submission_type}
**Product:** {project_name}

**Prérequis:**
- DHF: {status}
- Risk Management: {status}
- Clinical Validation: {status}
- Release Readiness: {status}

**Sections à préparer:** {count}
**Sections disponibles depuis DHF:** {count}
**Nouvelles sections requises:** {count}

**[C] Continuer** — Assembler le package de soumission
**[P] Prérequis** — Vérifier les prérequis en détail"

## SUCCESS METRICS:

✅ Submission type determined
✅ Prerequisites verified
✅ Requirements loaded
✅ Structure initialized
✅ Gaps identified

## FAILURE MODES:

❌ Wrong submission type
❌ Missing prerequisites ignored
❌ Incomplete requirements
❌ Structure not created

## NEXT STEP:

After user selects [C] to continue, load `./step-02-assembly.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
