# Step 4: Execute & Report

## Agent

**Dr. Gauss** (Biostatistician)

## Objectives

- Execute pre-specified analyses
- Generate statistical report
- Prepare regulatory submission sections

## Instructions

### 4.1 Pre-Execution Checklist

Before analyzing:
- [ ] SAP is locked and signed
- [ ] Test set is finalized and locked
- [ ] Ground truth is complete
- [ ] No data leakage verified
- [ ] Analysis code reviewed

### 4.2 Execute Primary Analysis

Run primary endpoint analysis:
- Apply locked model to test set
- Calculate primary metric with CI
- Compare to success criterion

**Document:**
```markdown
## Primary Endpoint Results

### [Metric Name]
- Point estimate: [value]
- 95% CI: [lower, upper]
- Success criterion: [threshold]
- Result: [Met/Not Met]
```

### 4.3 Execute Secondary Analyses

For each secondary endpoint:
- Calculate metric with CI
- Interpret clinical significance

### 4.4 Subgroup Analyses

| Subgroup | N | Primary Metric | 95% CI | vs. Overall |
|----------|---|----------------|--------|-------------|
| Overall | | | | Reference |
| [Group A] | | | | [higher/lower/similar] |
| [Group B] | | | | [higher/lower/similar] |

Flag statistically significant differences.

### 4.5 Sensitivity Analyses

Document robustness:
- Primary result consistent across analyses: [Yes/No]
- Any concerning findings: [describe]

### 4.6 Compile Statistical Report

```markdown
# Statistical Validation Report

## Executive Summary
- Primary endpoint: [result]
- Success criteria: [met/not met]
- Key findings: [bullets]

## Methods
[Reference SAP, summarize key points]

## Results

### Demographics and Data Description
- Test set characteristics
- Comparison to intended use population

### Primary Analysis
[Detailed results]

### Secondary Analyses
[Results for each]

### Subgroup Analyses
[Results with forest plot]

### Sensitivity Analyses
[Robustness assessment]

## Discussion
- Interpretation of results
- Comparison to literature/predicate
- Limitations

## Conclusion
[Clear statement on validation outcome]

## Appendices
- Detailed tables
- Figures
- SAP reference
```

### 4.7 Regulatory Sections

Prepare for submission:
- Performance summary table (FDA format)
- Statistical methods section
- Results section
- Limitations section

### 4.8 Archive

Archive with full traceability:
- [ ] Locked test set
- [ ] Analysis code
- [ ] Raw outputs
- [ ] Final report
- [ ] Version control

## Outputs

- [ ] Primary analysis executed
- [ ] All pre-specified analyses completed
- [ ] Statistical Report finalized
- [ ] Regulatory sections prepared

## Workflow Complete

Validation complete. Results feed into:
- Clinical Evaluation Report (Dr. Claire)
- Regulatory Submission (Dr. Régis)
- Labeling (performance claims)

## Regulatory Traceability

- FDA: Performance testing requirements
- STARD: Items 1-30 (diagnostic accuracy reporting)
- TRIPOD: Items 1-22 (prediction model reporting)
- ISO 13485: Design verification records
