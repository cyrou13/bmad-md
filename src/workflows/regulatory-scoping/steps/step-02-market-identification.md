# Step 2: Market Identification & Applicable Regulations

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER assume market without explicit confirmation
- ✅ ALWAYS cite specific regulatory references
- 📋 DOCUMENT all applicable regulations systematically
- 💬 En cas de doute sur la classification, toujours prendre la classe supérieure
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Identify all target markets
- 📖 Map applicable regulations for each market
- 💾 Append to regulatory scoping document
- 🚫 FORBIDDEN to proceed without market confirmation

## YOUR TASK:

Identify target markets and map all applicable regulatory frameworks.

## MARKET IDENTIFICATION SEQUENCE:

### 1. Target Markets Discovery

Ask the user:

"**Marchés cibles pour {project_name}:**

Quels marchés géographiques ciblez-vous ? (sélection multiple possible)

**[US]** États-Unis — FDA (21 CFR Part 820, SaMD Guidance)
**[EU]** Union Européenne — MDR 2017/745
**[UK]** Royaume-Uni — UKCA (UK MDR 2002)
**[CA]** Canada — Health Canada (CMDR)
**[AU]** Australie — TGA
**[JP]** Japon — PMDA
**[OTHER]** Autres marchés (préciser)

Quels marchés souhaitez-vous cibler en priorité ?"

### 2. Applicable Regulations Mapping

For each selected market, document applicable regulations:

#### United States (FDA)
```markdown
### United States — FDA

**Primary Regulations:**
- 21 CFR Part 820 — Quality System Regulation
- FDA SaMD Guidance (2017)
- FDA AI/ML Action Plan (2021+)
- 21 CFR Part 11 — Electronic Records (if applicable)

**Submission Pathways:**
- 510(k) — Substantial equivalence to predicate
- De Novo — Novel low-to-moderate risk
- PMA — High risk (Class III)

**Key Requirements:**
- Design Controls (21 CFR 820.30)
- Risk Analysis
- Software Documentation
- Cybersecurity (FDA Guidance 2023)
```

#### European Union (MDR)
```markdown
### European Union — MDR 2017/745

**Primary Regulations:**
- MDR 2017/745 — Medical Device Regulation
- MDCG Guidances (SaMD-specific)
- IVDR 2017/746 (if IVD component)

**Classification Rules:**
- Rule 11 — Software as Medical Device
- Annex VIII — Classification rules

**Key Requirements:**
- CE Marking via Notified Body (except Class I)
- Technical Documentation (Annex II/III)
- Post-Market Surveillance
- UDI (Unique Device Identification)
```

### 3. Standards Identification

Based on markets and product type, list applicable standards:

"**Standards applicables identifiés:**

**Standards IEC/ISO fondamentaux:**
- [ ] IEC 62304:2006+A1:2015 — Software lifecycle processes
- [ ] ISO 14971:2019 — Risk management
- [ ] ISO 13485:2016 — Quality management system
- [ ] IEC 82304-1:2016 — Health software — General requirements

**Standards de cybersécurité:**
- [ ] IEC 81001-5-1 — Security for health software
- [ ] FDA Cybersecurity Guidance (2023)
- [ ] MDR Annex I Section 17.2

**Standards AI/ML (si applicable):**
- [ ] FDA AI/ML Action Plan
- [ ] IMDRF AI/ML Guidance
- [ ] ISO/IEC TR 24028 — AI trustworthiness

**Standards de données:**
- [ ] RGPD (EU)
- [ ] HIPAA (US)
- [ ] ISO 27001 — Information security

Quels standards supplémentaires devons-nous considérer ?"

### 4. Append to Document

Append the following to `docs/regulatory/regulatory-scoping.md`:

```markdown
## 4. Target Markets

{list_of_selected_markets_with_justification}

## 5. Applicable Regulations

{detailed_regulations_per_market}

## 6. Applicable Standards

| Standard | Scope | Mandatory | Market |
|----------|-------|-----------|--------|
| IEC 62304 | Software lifecycle | Yes | All |
| ISO 14971 | Risk management | Yes | All |
| ... | ... | ... | ... |
```

Update frontmatter: `stepsCompleted: [step-01, step-02]`

### 5. Present Summary and Menu

"**Récapitulatif des exigences réglementaires pour {project_name}:**

**Marchés cibles:** {markets}

**Régulations principales:**
{key_regulations_summary}

**Standards obligatoires:** {count} standards identifiés
**Standards recommandés:** {count} standards supplémentaires

**Points d'attention:**
- {attention_point_1}
- {attention_point_2}

**[C] Continuer** — Procéder à la définition de la stratégie de conformité
**[R] Réviser** — Modifier les marchés ou standards"

## SUCCESS METRICS:

✅ All target markets explicitly confirmed
✅ Applicable regulations mapped per market
✅ Standards list comprehensive and prioritized
✅ Document updated with market and standards info
✅ User understands regulatory landscape

## FAILURE MODES:

❌ Assuming markets without confirmation
❌ Missing key regulations for selected markets
❌ Not citing specific regulation references
❌ Incomplete standards mapping

## NEXT STEP:

After user selects [C] to continue, load `./step-03-compliance-strategy.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
