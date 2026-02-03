# Step 2: PRD Enrichment Execution

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER delete existing requirements
- ✅ APPEND regulatory sections, don't replace
- 📋 Maintain consistent ID format
- 💬 Validate each addition with PM
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Add regulatory sections systematically
- 📖 Convert IDs to traceable format
- 💾 Save after each major addition
- 🚫 FORBIDDEN to remove existing content

## YOUR TASK:

Execute the PRD enrichment by adding regulatory sections and converting requirements to traceable format.

## ENRICHMENT SEQUENCE:

### 1. Add Intended Use Section

"**[Dr. Régis] Ajout de la section Intended Use:**

J'ajoute la section suivante au PRD :

```markdown
## Regulatory Context

### Intended Use

> **Reference:** See full Intended Use document at `docs/regulatory/intended-use.md`

**Summary:**
{intended_use_summary}

**Intended Users:** {intended_users}
**Use Environment:** {use_environment}
**Clinical Purpose:** {clinical_purpose}

**Contraindications:**
{contraindications_if_any}
```

Section ajoutée : ✅"

### 2. Add Classification Section

"**[Dr. Régis] Ajout de la section Classification:**

```markdown
### Regulatory Classification

| Framework | Classification | Implications |
|-----------|---------------|--------------|
| IEC 62304 | Class {safety_class} | {implications} |
| IMDRF | Category {imdrf} | {implications} |
| FDA | Class {fda} | {pathway} |
| MDR | Class {mdr} | {nb_requirement} |

**Documentation Level:** {minimal/moderate/full}
**Reference:** `docs/regulatory/samd-classification.md`
```

Section ajoutée : ✅"

### 3. Add Regulatory Requirements

"**[Dr. Régis] Ajout des exigences réglementaires:**

```markdown
### Regulatory Requirements

| ID | Requirement | Source | Safety Class | Risk Link |
|----|-------------|--------|--------------|-----------|
| REQ-REG-001 | Le système doit maintenir un audit trail de toutes les actions utilisateur | 21 CFR Part 11 | B | RISK-xxx |
| REQ-REG-002 | Les données patient doivent être chiffrées au repos et en transit | RGPD Art. 32 | B | RISK-xxx |
| REQ-REG-003 | Le système doit permettre l'export des données patient sur demande | RGPD Art. 20 | A | — |
| REQ-REG-004 | Les credentials ne doivent jamais être stockés en clair | IEC 81001-5-1 | B | RISK-xxx |
| REQ-REG-005 | Le système doit valider toutes les entrées utilisateur | IEC 62304 | {class} | RISK-xxx |
```

**Exigences réglementaires additionnelles spécifiques au projet:**
{project_specific_regulatory_requirements}

**John**, ces exigences réglementaires sont-elles alignées avec la vision produit ?"

### 4. Add Patient Data Constraints

"**[Dr. Régis] Ajout des contraintes données patient:**

```markdown
### Patient Data Constraints

**Data Classification:**
- PHI (Protected Health Information): {yes/no}
- PII (Personally Identifiable Information): {yes/no}
- Sensitive Health Data: {yes/no}

**Compliance Requirements:**

| Regulation | Applicable | Requirements |
|------------|------------|--------------|
| RGPD | {yes/no} | {requirements_if_yes} |
| HIPAA | {yes/no} | {requirements_if_yes} |
| FDA 21 CFR Part 11 | {yes/no} | {requirements_if_yes} |

**Data Handling Rules:**
- Anonymization: {required/not_required}
- Encryption: {at_rest/in_transit/both}
- Retention: {retention_policy}
- Deletion: {deletion_policy}
```

Section ajoutée : ✅"

### 5. Convert Existing Requirements to Traceable IDs

"**[Quentin] Conversion des IDs existants:**

Je convertis les exigences existantes au format traçable :

**Format:** REQ-[MODULE]-[NNN]

**Modules:**
- FUNC: Functional requirements
- NFUNC: Non-functional requirements
- REG: Regulatory requirements
- SAF: Safety requirements
- SEC: Security requirements
- DATA: Data requirements

**Conversion:**

| Original ID | New ID | Requirement | Safety Class |
|-------------|--------|-------------|--------------|
| FR-001 | REQ-FUNC-001 | {requirement} | {A/B/C} |
| FR-002 | REQ-FUNC-002 | {requirement} | {A/B/C} |
| NFR-001 | REQ-NFUNC-001 | {requirement} | {A/B/C} |
| — | REQ-SAF-001 | {from_risk_analysis} | {B/C} |

**Exigences converties:** {count}
**Nouvelles exigences safety ajoutées:** {count}"

### 6. Add Safety Class to Each Requirement

"**[Quentin] Attribution des classes de sécurité:**

**Règles d'attribution:**
- **Class C:** Peut causer décès ou blessure irréversible
- **Class B:** Peut causer blessure non-serious
- **Class A:** Aucun impact sur la sécurité patient

**Attribution:**

| ID | Requirement | Impact Patient | Safety Class |
|----|-------------|----------------|--------------|
| REQ-FUNC-001 | {req} | {impact} | {class} |
| REQ-FUNC-002 | {req} | {impact} | {class} |

**Résumé:**
- Class A: {count} exigences
- Class B: {count} exigences
- Class C: {count} exigences

**Note:** Les exigences Class B et C requièrent une traçabilité complète vers les tests."

### 7. Add Risk Linkage

"**[Dr. Hana] Liaison avec les risques:**

**Exigences liées aux risques:**

| Requirement | Linked Risk(s) | Control Type |
|-------------|----------------|--------------|
| REQ-SAF-001 | RISK-001 | Inherent design |
| REQ-SAF-002 | RISK-002, RISK-005 | Protective measure |
| REQ-FUNC-010 | RISK-003 | Protective measure |

**Exigences de sécurité dérivées des risques:**
Ces exigences proviennent directement de l'analyse de risques :
{list_of_risk_derived_requirements}

**Mise à jour Risk Register:** {count} exigences liées"

### 8. Present Enriched PRD Summary

"**PRD enrichi — Résumé des modifications**

**Sections ajoutées:**
- ✅ Intended Use reference
- ✅ Regulatory Classification
- ✅ Regulatory Requirements ({count})
- ✅ Patient Data Constraints

**Exigences modifiées:**
- IDs convertis: {count}
- Safety class attribuée: {count}
- Risk linkage: {count}

**Nouvelle structure du PRD:**
1. Overview
2. **Regulatory Context** (NEW)
3. Functional Requirements (IDs updated)
4. Non-Functional Requirements (IDs updated)
5. **Regulatory Requirements** (NEW)
6. **Patient Data Constraints** (NEW)
7. User Stories

**[C] Continuer** — Finaliser et sauvegarder
**[R] Réviser** — Modifier les enrichissements"

## SUCCESS METRICS:

✅ Intended Use section added
✅ Classification section added
✅ Regulatory requirements added
✅ IDs converted to traceable format
✅ Safety classes assigned
✅ Risk linkage established

## FAILURE MODES:

❌ Original content deleted
❌ Inconsistent ID format
❌ Missing safety class
❌ No risk linkage

## NEXT STEP:

After user selects [C] to continue, load `./step-03-finalize.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
