# Step 3: Model Fairness Evaluation

## Agent

**Dr. Aequitas** with **Dr. Gauss** (Biostatistician)

## Objectives

- Calculate fairness metrics across subgroups
- Identify performance disparities
- Assess clinical impact of disparities

## Instructions

### 3.1 Subgroup Performance Analysis

Calculate primary metrics per subgroup:

| Subgroup | N | Sensitivity | Specificity | AUC | PPV | NPV |
|----------|---|-------------|-------------|-----|-----|-----|
| Overall | | | | | | |
| Age < 40 | | | | | | |
| Age 40-65 | | | | | | |
| Age > 65 | | | | | | |
| Male | | | | | | |
| Female | | | | | | |
| [Group A] | | | | | | |
| [Group B] | | | | | | |

Include 95% confidence intervals.

### 3.2 Fairness Metrics

**Metric Definitions:**

| Metric | Definition | Formula | Threshold |
|--------|------------|---------|-----------|
| **Demographic Parity** | Equal positive prediction rate | P(Ŷ=1\|A=a) = P(Ŷ=1\|A=b) | Ratio 0.8-1.25 |
| **Equalized Odds** | Equal TPR and FPR | TPR_a = TPR_b, FPR_a = FPR_b | Ratio 0.8-1.25 |
| **Calibration** | Equal calibration across groups | P(Y=1\|Ŷ=p,A=a) = p | Calibration curves |
| **Predictive Parity** | Equal PPV | PPV_a = PPV_b | Ratio 0.8-1.25 |

### 3.3 Disparity Analysis

For each comparison, calculate:

```markdown
## Disparity Analysis: [Attribute]

### Sensitivity Disparity
- Group A: [value] (95% CI)
- Group B: [value] (95% CI)
- Ratio: [value]
- Statistically significant: [Yes/No]
- Clinically significant: [Yes/No]

### Specificity Disparity
[Same format]

### Assessment
- Disparity level: [None/Minor/Moderate/Severe]
- Clinical impact: [describe]
- Mitigation needed: [Yes/No]
```

### 3.4 Intersectionality Analysis

Examine combined attributes:
- Age × Sex
- Ethnicity × Disease severity
- Other clinically relevant combinations

Flag if small subgroups have significantly worse performance.

### 3.5 Clinical Impact Assessment

For each disparity identified:
- What is the clinical consequence?
- Who is harmed and how?
- Is this acceptable given the benefit?

## Outputs

- [ ] Subgroup performance calculated
- [ ] Fairness metrics computed
- [ ] Disparities identified and quantified
- [ ] Clinical impact assessed

## Next Step

Proceed to `step-04-mitigation.md` for mitigation and documentation.
