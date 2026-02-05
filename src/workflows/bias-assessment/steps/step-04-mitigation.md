# Step 4: Mitigation & Documentation

## Agent

**Dr. Aequitas** (AI Ethics & Fairness Officer)

## Objectives

- Recommend bias mitigation strategies
- Document known limitations
- Prepare regulatory-ready Bias Assessment Report

## Instructions

### 4.1 Mitigation Strategies

Based on findings, consider:

**Pre-processing (Data-level):**
- Collect additional data for under-represented groups
- Re-weight samples to balance representation
- Augmentation strategies for minority groups

**In-processing (Model-level):**
- Fairness constraints in loss function
- Adversarial debiasing
- Subgroup-specific thresholds

**Post-processing (Output-level):**
- Calibrated thresholds per subgroup
- Reject option for uncertain cases
- Human review for high-risk subgroups

### 4.2 Mitigation Feasibility

| Strategy | Effectiveness | Feasibility | Trade-offs | Recommendation |
|----------|---------------|-------------|------------|----------------|
| [Strategy 1] | [H/M/L] | [H/M/L] | [describe] | [Yes/No] |
| [Strategy 2] | [H/M/L] | [H/M/L] | [describe] | [Yes/No] |

### 4.3 Document Known Limitations

For regulatory submission, clearly state:

```markdown
## Known Limitations

### Performance Variations
The device has been evaluated across demographic subgroups.
The following variations were observed:

- [Subgroup X]: [Metric] was [lower/higher] by [amount]
  compared to overall performance. Clinical impact: [describe].

### Populations with Limited Data
The following populations had limited representation in
development data and may have different performance:
- [Population 1]: N = [small number]
- [Population 2]: Not included in training data

### Recommended Use
Based on bias assessment, the device is recommended for:
- [Populations with validated performance]

Caution is advised for:
- [Populations with limitations]
```

### 4.4 Compile Bias Assessment Report

```markdown
# Bias Assessment Report

## 1. Executive Summary
- Overall bias risk: [Low/Medium/High]
- Key findings: [bullet points]
- Mitigation status: [describe]

## 2. Methodology
- Protected attributes evaluated
- Fairness metrics used
- Analysis approach

## 3. Data Bias Assessment
[From Step 2]

## 4. Model Fairness Evaluation
[From Step 3]

## 5. Identified Disparities
- Summary table of all disparities
- Clinical significance assessment

## 6. Mitigation Measures
- Implemented mitigations
- Residual risks

## 7. Known Limitations
- Clear disclosure for labeling

## 8. Monitoring Plan
- Post-market fairness monitoring
- Re-evaluation triggers

## Appendices
- Detailed statistical tables
- Methodology references
```

### 4.5 Approval and Integration

Route for approval:
- [ ] Dr. Hana (Risk): Integrate into risk management
- [ ] Dr. Régis (Regulatory): Verify regulatory adequacy
- [ ] Dr. Claire (Clinical): Validate clinical interpretation

Integrate findings into:
- Risk Management File
- Clinical Evaluation Report
- Instructions for Use (limitations section)

## Outputs

- [ ] Mitigation strategies defined
- [ ] Known limitations documented
- [ ] Bias Assessment Report complete
- [ ] Integrated with regulatory deliverables

## Workflow Complete

Bias Assessment complete. Findings feed into:
- Risk Management (Dr. Hana)
- Clinical Evaluation (Dr. Claire)
- Regulatory Submission (Dr. Régis)
- Post-market Monitoring Plan

## Regulatory Traceability

- EU AI Act: Article 9 (risk management), Article 10 (data)
- FDA: Guidance on AI/ML equity
- WHO: Principle 5 (Inclusiveness and equity)
