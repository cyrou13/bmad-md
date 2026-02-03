# Step 2: Document Assembly

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER modify source documents during assembly
- ✅ Use links to source documents when possible
- 📋 Track document versions explicitly
- 💬 Speaking as Dr. Régis (Regulatory Affairs)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Assemble documents section by section
- 📖 Create links or copies as appropriate
- 💾 Update DHF index as you go
- 🚫 FORBIDDEN to include unapproved documents

## YOUR TASK:

Assemble all available documents into the DHF structure, creating links and filling gaps with placeholder notes.

## ASSEMBLY SEQUENCE:

### 1. Design Inputs Assembly

"**Section 1: Design Inputs**

**Assemblage des documents d'entrée de conception:**

**1.1 Intended Use**
- Source: `docs/regulatory/intended-use.md`
- Action: {link/copy}
- Status: ✅ Assembled

**1.2 User Needs**
- Source: PRD Section {x}
- Action: Extract and compile
- Content:
  {user_needs_summary}

**1.3 Requirements Specification**
- Source: `_bmad-output/planning-artifacts/prd.md`
- Action: {link/extract}
- Sections included:
  - Functional Requirements
  - Non-Functional Requirements
  - Regulatory Requirements (REG-xxx)

**Documents assemblés pour Design Inputs:** {count}"

### 2. Design Outputs Assembly

"**Section 2: Design Outputs**

**Assemblage des documents de sortie de conception:**

**2.1 System Architecture**
- Source: `_bmad-output/planning-artifacts/architecture.md`
- Action: {link/copy}
- Status: ✅ Assembled

**2.2 Software Specification**
- Source: Architecture + detailed design
- Sections:
  - Software items decomposition
  - Interface specifications
  - Data flow descriptions

**2.3 SOUP List**
- Source: Architecture Safety Review
- Content:

| SOUP | Version | Purpose | Safety Critical |
|------|---------|---------|-----------------|
| {soup_1} | {version} | {purpose} | {yes/no} |
| {soup_2} | {version} | {purpose} | {yes/no} |

**Documents assemblés pour Design Outputs:** {count}"

### 3. Design Verification Assembly

"**Section 3: Design Verification**

**Assemblage des documents de vérification:**

**3.1 Verification Plan**
- Test strategy
- Test coverage requirements
- Test environment specifications

**3.2 Test Results**
- Unit test results: {pass_rate}%
- Integration test results: {pass_rate}%
- System test results: {pass_rate}%
- Test execution date: {date}

**3.3 Traceability Matrix**
Reference: `_bmad/bmmd/templates/traceability-matrix.md`

| Requirement | Design | Code | Test | Status |
|-------------|--------|------|------|--------|
| REQ-xxx | ARCH-xxx | file:line | TST-xxx | ✅ |
| REQ-yyy | ARCH-yyy | file:line | TST-yyy | ✅ |

**Couverture de traçabilité:**
- Requirements tracés: {count}/{total} ({percentage}%)
- Tests mappés: {count}/{total}

**3.4 Code Review Records**
- Review method: {PR_reviews/formal_inspections}
- Coverage: {percentage}% of changes reviewed

**Documents assemblés pour Verification:** {count}"

### 4. Design Validation Assembly

"**Section 4: Design Validation**

**Assemblage des documents de validation:**

**4.1 Validation Plan**
- Source: `docs/regulatory/clinical-validation-plan.md`
- Status: {complete/draft/missing}

**4.2 Validation Results**
- Source: `docs/regulatory/validation-results.md`
- Status: {complete/pending/missing}

{if_results_available}
**Summary of Validation Results:**
- Primary endpoint: {result}
- Secondary endpoints: {summary}
- Conclusion: {pass/fail}
{/if}

{if_results_pending}
**Note:** Validation results pending. DHF will be updated upon completion.
{/if}

**Documents assemblés pour Validation:** {count}"

### 5. Risk Management Assembly

"**Section 5: Risk Management**

**Assemblage des documents de gestion des risques:**

**5.1 Risk Management Plan**
- Content: Scope, responsibilities, risk criteria, activities
- Status: {to_be_created/exists}

**5.2 Risk Analysis**
- Source: `docs/regulatory/risk-analysis.md`
- Method: FMEA
- Status: ✅ Assembled

**5.3 Risk Register (Living Document)**
- Source: `_bmad/_memory/bmmd/risk-register.md`
- Risks identified: {count}
- Unacceptable (pre-control): {count}
- Residual acceptable: {count}

**5.4 Risk Management Report**
- Overall residual risk: {acceptable/conditional}
- Benefit-risk: {favorable}
- Status: {complete/to_be_created}

**Documents assemblés pour Risk Management:** {count}"

### 6. Design Reviews Assembly

"**Section 6: Design Reviews**

**Assemblage des records de revue:**

**6.1 Phase Gate Records**

| Gate | Date | Participants | Outcome |
|------|------|--------------|---------|
| R1 (Analysis) | {date} | {participants} | {pass/conditional} |
| R2 (Solutioning) | {date} | {participants} | {pass/conditional} |
| R3 (Pre-release) | {date} | {participants} | {pass/conditional} |
| R4 (Release) | {pending} | — | — |

**6.2 Architecture Safety Review**
- Source: `docs/regulatory/architecture-safety-review.md`
- Verdict: {approved/conditional}
- Date: {date}

**Documents assemblés pour Reviews:** {count}"

### 7. Design Changes Assembly

"**Section 7: Design Changes**

**7.1 Change Log**

| Change # | Date | Description | Impact | Approved |
|----------|------|-------------|--------|----------|
| CHG-001 | {date} | {description} | {impact} | {yes/no} |

**7.2 Version History**
- Current version: {version}
- Previous versions: {list}

**Documents assemblés pour Changes:** {count}"

### 8. Update DHF Index

Update `docs/regulatory/dhf/00-dhf-index.md` with:
- Document locations
- Completion status
- Last update dates

### 9. Present Assembly Summary

"**Assemblage DHF — Résumé**

| Section | Documents | Complets | Gaps |
|---------|-----------|----------|------|
| Design Inputs | {count} | {complete} | {gaps} |
| Design Outputs | {count} | {complete} | {gaps} |
| Verification | {count} | {complete} | {gaps} |
| Validation | {count} | {complete} | {gaps} |
| Risk Management | {count} | {complete} | {gaps} |
| Reviews | {count} | {complete} | {gaps} |
| Changes | {count} | {complete} | {gaps} |

**Total:** {total_docs} documents assemblés
**Complets:** {complete_count}
**À compléter:** {incomplete_count}

**[C] Continuer** — Procéder à la vérification de complétude
**[R] Réviser** — Revoir l'assemblage"

## SUCCESS METRICS:

✅ All sections assembled
✅ Source documents linked
✅ Traceability matrix included
✅ DHF index updated
✅ Gaps documented

## FAILURE MODES:

❌ Missing source documents
❌ Broken links
❌ Outdated versions included
❌ DHF index not updated

## NEXT STEP:

After user selects [C] to continue, load `./step-03-verification.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
