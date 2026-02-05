# Step 2: Design Validation Study

## Agent

**Dr. Gauss** (Biostatistician)

## Objectives

- Select appropriate validation methodology
- Define test set requirements
- Plan subgroup and sensitivity analyses

## Instructions

### 2.1 Validation Methodology

Select based on data and regulatory needs:

| Method | Use Case | Pros | Cons |
|--------|----------|------|------|
| **Holdout Test Set** | Large datasets | Simple, unbiased | Requires large N |
| **Cross-Validation** | Limited data | Uses all data | Not independent test |
| **External Validation** | Generalizability | Strong evidence | Requires separate data |
| **Temporal Validation** | Prospective-like | Tests stability | May miss recent trends |
| **Multi-site Validation** | Multi-center use | Real-world evidence | Complex logistics |

**Recommended Approach:**
- Internal validation: [method]
- External validation: [planned/not applicable]

### 2.2 Test Set Requirements

**Independence:**
- [ ] Test set not used in any training/tuning
- [ ] No data leakage (patient-level splits)
- [ ] Locked before final evaluation

**Representativeness:**
- [ ] Reflects intended use population
- [ ] Adequate subgroup sizes
- [ ] Includes challenging cases

**Sample Size:**
- Total N: [calculated in Dataset Specification]
- Positive cases: [N]
- Negative cases: [N]

### 2.3 Subgroup Analysis Plan

Pre-specify subgroups:

| Subgroup | N Required | Rationale |
|----------|------------|-----------|
| Age groups | ≥50 each | Age-related performance |
| Sex | ≥50 each | Biological differences |
| Disease severity | ≥30 each | Clinical relevance |
| Acquisition site | ≥30 each | Generalizability |
| Device/vendor | ≥30 each | Technical variation |

### 2.4 Sensitivity Analyses

Plan robustness checks:
- Varying decision thresholds
- Excluding borderline cases
- Alternative ground truth definitions
- Impact of missing data

### 2.5 Ground Truth / Reference Standard

Document reference standard:
- Definition method
- Adjudication process
- Known limitations
- Blinding of readers

## Outputs

- [ ] Validation methodology selected
- [ ] Test set requirements defined
- [ ] Subgroup analyses pre-specified
- [ ] Sensitivity analyses planned

## Next Step

Proceed to `step-03-sap.md` to write the Statistical Analysis Plan.
