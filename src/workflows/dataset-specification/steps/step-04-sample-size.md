# Step 4: Sample Size Planning

## Agent

**Dr. Gauss** (Biostatistician) with **Daria** (Data Governance Officer)

## Objectives

- Determine statistically justified sample sizes
- Plan train/validation/test splits
- Ensure subgroup representation
- Document power analysis

## Instructions

### 4.1 Define Performance Targets

Before calculating sample size, establish:

**Primary Performance Metric:**
- Classification: Sensitivity, Specificity, AUC
- Detection: Sensitivity at fixed specificity
- Segmentation: Dice coefficient
- Regression: MAE, correlation

**Target Performance:**
- Point estimate target (e.g., Sensitivity ≥ 90%)
- Acceptable confidence interval width
- Comparison to predicate/standard of care

**Clinically Meaningful Difference:**
- Minimum difference to detect vs. comparator
- Non-inferiority margin (if applicable)

### 4.2 Sample Size Calculation

**For Sensitivity/Specificity Estimation:**

```
n = (Z²α/2 × p × (1-p)) / d²

Where:
- Zα/2 = Z-score for confidence level (1.96 for 95%)
- p = expected sensitivity/specificity
- d = acceptable margin of error
```

**For AUC Comparison:**
- Use Obuchowski method or simulation
- Account for correlation in paired designs

**For Subgroup Analysis:**
- Apply multiplier for number of subgroups
- Minimum N per subgroup (typically ≥50-100)

### 4.3 Dataset Split Strategy

**Standard Split (Large Dataset):**
- Training: 70%
- Validation: 15%
- Test (Holdout): 15%

**Limited Data Strategy:**
- Cross-validation for development
- Dedicated holdout test set (minimum viable)

**Considerations:**
- Stratified splitting by key variables
- Patient-level splitting (not image-level)
- Site-level splitting for external validation
- Temporal splitting for prospective simulation

### 4.4 Subgroup Sample Size Requirements

Ensure adequate power for subgroups:

| Subgroup | Minimum N | Justification |
|----------|-----------|---------------|
| Age < 40 | 100 | Regulatory expectation |
| Age 40-65 | 200 | Primary population |
| Age > 65 | 150 | Higher disease prevalence |
| Male | 50% of N | Sex balance |
| Female | 50% of N | Sex balance |
| [Ethnicity groups] | Site-dependent | Market representation |

### 4.5 Feasibility Assessment

Compare requirements to availability:

| Requirement | Required N | Available N | Gap | Mitigation |
|-------------|------------|-------------|-----|------------|
| Total training | | | | |
| Total validation | | | | |
| Total test | | | | |
| Subgroup A | | | | |
| Subgroup B | | | | |

**If Gap Exists:**
- Additional data sources
- Extended collection timeline
- Statistical methods for small samples
- Document as limitation

### 4.6 Document Sample Size Justification

Prepare formal documentation:

```markdown
## Sample Size Justification

### Primary Objective
[State the primary performance objective]

### Statistical Parameters
- Confidence level: 95%
- Expected performance: [value]
- Margin of error: [value]
- Power (if comparison): 80%

### Calculated Sample Size
- Total N required: [value]
- Test set N: [value]

### Subgroup Requirements
[Table of subgroup sizes]

### References
[Statistical methods referenced]
```

## Outputs

- [ ] Performance targets defined
- [ ] Sample size calculated with justification
- [ ] Split strategy documented
- [ ] Subgroup requirements specified
- [ ] Feasibility assessed

## Next Step

Proceed to `step-05-finalize.md` to compile the Dataset Specification.

## Collaboration Points

- **Daria**: Align with source availability
- **Dr. Claire**: Validate clinical subgroups
- **Dr. Aequitas**: Confirm fairness subgroups included
