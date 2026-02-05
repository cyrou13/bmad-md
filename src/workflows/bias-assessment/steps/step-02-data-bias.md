# Step 2: Data Bias Analysis

## Agent

**Dr. Aequitas** with **Daria** (Data Governance)

## Objectives

- Assess dataset representativeness
- Identify bias in labels/ground truth
- Document data-level limitations

## Instructions

### 2.1 Representativeness Analysis

Compare dataset to target population:

| Attribute | Dataset % | Target Population % | Gap | Risk Level |
|-----------|-----------|---------------------|-----|------------|
| Age < 40 | | | | |
| Age 40-65 | | | | |
| Age > 65 | | | | |
| Male | | | | |
| Female | | | | |
| [Ethnicity A] | | | | |
| [Ethnicity B] | | | | |

**Risk Levels:**
- Low: Gap < 10%
- Medium: Gap 10-25%
- High: Gap > 25% or group absent

### 2.2 Label Bias Assessment

**Ground Truth Sources:**
- Who created the labels?
- What was the reference standard?
- Are there known biases in the reference standard?

**Historical Bias Check:**
- Does the condition have historical diagnostic disparities?
- Were certain groups historically under/over-diagnosed?
- Literature review of known biases

**Annotator Bias:**
- Annotator demographics
- Training on diverse cases
- Inter-annotator agreement by subgroup

### 2.3 Data Quality by Subgroup

Analyze quality metrics per group:

| Subgroup | N | Quality Score | Missing Data % | Annotation Agreement |
|----------|---|---------------|----------------|---------------------|
| Group A | | | | |
| Group B | | | | |

Flag if quality varies systematically.

### 2.4 Document Findings

```markdown
## Data Bias Assessment Summary

### Representativeness
- Under-represented groups: [list]
- Over-represented groups: [list]
- Data gaps: [describe]

### Label Bias Risks
- Historical bias identified: [yes/no, details]
- Reference standard limitations: [describe]

### Quality Variation
- Groups with lower quality: [list]
- Potential impact: [describe]

### Risk Rating: [Low/Medium/High]
```

## Outputs

- [ ] Representativeness analysis complete
- [ ] Label bias assessed
- [ ] Quality variation documented
- [ ] Data bias summary prepared

## Next Step

Proceed to `step-03-model-fairness.md` for model-level evaluation.
