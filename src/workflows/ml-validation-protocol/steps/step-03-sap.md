# Step 3: Statistical Analysis Plan

## Agent

**Dr. Gauss** (Biostatistician)

## Objectives

- Document complete statistical methodology
- Pre-specify all analyses
- Create regulatory-ready SAP

## Instructions

### 3.1 SAP Structure

```markdown
# Statistical Analysis Plan
## [Product Name] Validation Study

### Document Control
- Version: [x.x]
- Date: [YYYY-MM-DD]
- Author: Dr. Gauss (Biostatistician)
- Status: [Draft/Final/Locked]

### 1. Introduction
- Study objectives
- Regulatory context

### 2. Study Design
- Validation methodology
- Test set description
- Reference standard

### 3. Endpoints
#### 3.1 Primary Endpoint
- Definition
- Success criterion

#### 3.2 Secondary Endpoints
- List with definitions

### 4. Sample Size
- Calculation method
- Assumptions
- Final sample size

### 5. Statistical Methods
#### 5.1 Primary Analysis
[Detailed method]

#### 5.2 Secondary Analyses
[Methods for each]

#### 5.3 Subgroup Analyses
[Pre-specified subgroups]

#### 5.4 Sensitivity Analyses
[Robustness checks]

### 6. Handling of Missing Data

### 7. Multiplicity Adjustment

### 8. Software

### 9. References
```

### 3.2 Statistical Methods Detail

**For Diagnostic Accuracy:**
- Point estimates with exact binomial CIs
- AUC with DeLong confidence intervals
- Comparison tests (McNemar, DeLong)

**For Prediction Models:**
- Discrimination (AUC, C-index)
- Calibration (Hosmer-Lemeshow, calibration plot)
- Decision curve analysis

**For Comparison Studies:**
- Non-inferiority margin justification
- One-sided vs. two-sided tests
- Confidence interval approach

### 3.3 Multiplicity Control

If multiple primary endpoints or subgroups:
- Hierarchical testing procedure
- Bonferroni or Holm correction
- Pre-specified alpha allocation

### 3.4 Missing Data Handling

- Define what constitutes missing
- Primary analysis: complete cases
- Sensitivity: imputation methods

### 3.5 Lock SAP

Before unblinding test data:
- [ ] SAP finalized
- [ ] Version locked
- [ ] Signed by statistician
- [ ] Registered (if applicable)

## Outputs

- [ ] Complete SAP document
- [ ] Methods pre-specified
- [ ] SAP locked before analysis

## Next Step

Proceed to `step-04-execute.md` to execute validation.
