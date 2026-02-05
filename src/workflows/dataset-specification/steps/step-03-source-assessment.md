# Step 3: Source Identification & Assessment

## Agent

**Daria** (Data Governance Officer)

## Objectives

- Identify potential data sources
- Assess data availability and quality
- Evaluate consent and privacy constraints
- Document source limitations and risks

## Instructions

### 3.1 Source Identification

Categorize potential data sources:

**Internal Sources:**
- Clinical partners / Hospital collaborations
- Previous studies / Clinical trials
- Existing annotated datasets

**External Sources:**
- Public datasets (with caution for medical AI)
- Data vendors / Commercial datasets
- Research consortiums
- Federated data networks

**Synthetic Data:**
- GAN-generated augmentation
- Physics-based simulation
- Rule-based synthesis

### 3.2 Source Evaluation Matrix

For each source, evaluate:

| Criterion | Source A | Source B | Source C |
|-----------|----------|----------|----------|
| **Volume** (N cases) | | | |
| **Quality** (1-5) | | | |
| **Representativeness** | | | |
| **Consent Status** | | | |
| **Access Feasibility** | | | |
| **Cost** | | | |
| **Timeline** | | | |
| **Annotation Status** | | | |

### 3.3 Consent & Privacy Assessment

For each source, verify:

**Consent:**
- [ ] Original consent covers AI/ML use
- [ ] Consent covers commercial use (if applicable)
- [ ] Re-consent required?
- [ ] Consent documentation available

**Privacy:**
- [ ] De-identification method documented
- [ ] HIPAA/GDPR compliance verified
- [ ] Data transfer agreements in place
- [ ] Geographic restrictions

**Regulatory:**
- [ ] IRB/Ethics approval status
- [ ] Data use agreement requirements
- [ ] Export restrictions (if international)

### 3.4 Limitations Documentation

Document known limitations for each source:

**Selection Bias:**
- Patient population characteristics
- Referral patterns
- Disease spectrum coverage

**Technical Variation:**
- Equipment differences
- Protocol variations
- Image quality range

**Temporal Factors:**
- Data collection period
- Practice changes over time
- Seasonal variations

**Geographic/Demographic:**
- Single vs. multi-site
- Demographic representation
- Healthcare setting (academic vs. community)

### 3.5 Source Recommendation

Synthesize findings:

```markdown
## Recommended Data Sources

### Primary Source: [Name]
- Volume: [N]
- Strengths: [list]
- Limitations: [list]
- Mitigation: [how to address limitations]

### Secondary Source: [Name]
- Purpose: [fill gaps in primary]
- Volume: [N]
- Specific contribution: [what it adds]

### Risk Assessment
- Single-source dependency risk: [Low/Medium/High]
- Mitigation strategy: [plan]
```

## Outputs

- [ ] Data sources identified and documented
- [ ] Source evaluation matrix completed
- [ ] Consent/privacy assessment done
- [ ] Limitations documented
- [ ] Source recommendation finalized

## Next Step

Proceed to `step-04-sample-size.md` for statistical sample size planning.

## Collaboration Points

- **Dr. Régis**: Review consent adequacy for regulatory submission
- **Helena/DPO**: Validate privacy compliance
- **Legal**: Review data use agreements
