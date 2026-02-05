# Step 2: Define Data Requirements

## Agent

**Daria** (Data Governance Officer) with **Dr. Claire** (Clinical Evaluator)

## Objectives

- Define inclusion and exclusion criteria
- Specify required clinical metadata
- Establish demographic diversity requirements
- Set data quality thresholds

## Instructions

### 2.1 Inclusion Criteria

Define what data MUST be included:

**Clinical Criteria:**
- Target condition/disease
- Disease stage/severity range
- Relevant clinical presentations
- Required diagnostic confirmation

**Technical Criteria:**
- Image/signal quality thresholds
- Required acquisition parameters
- Minimum resolution/duration
- Required views/leads/sequences

**Example Template:**
```markdown
## Inclusion Criteria

### Clinical
- [ ] Confirmed diagnosis of [condition] by [gold standard]
- [ ] Age range: [min] to [max] years
- [ ] Disease stage: [stages included]

### Technical
- [ ] Image resolution ≥ [threshold]
- [ ] Acquisition device: [approved devices]
- [ ] Required views: [list]
```

### 2.2 Exclusion Criteria

Define what data must be EXCLUDED:

- Poor quality data (artifacts, motion, noise)
- Incomplete metadata
- Confounding conditions
- Technical failures
- Consent limitations

### 2.3 Demographic Requirements

Ensure representative dataset:

| Attribute | Target Distribution | Rationale |
|-----------|---------------------|-----------|
| Age | Proportional to disease prevalence | Avoid age bias |
| Sex | Balanced or disease-proportional | Avoid sex bias |
| Ethnicity | Representative of target market | Generalizability |
| Comorbidities | Include common comorbidities | Real-world performance |

**Minimum Subgroup Sizes:**
- Define minimum N per demographic subgroup
- Justify based on statistical power (coordinate with Dr. Gauss)

### 2.4 Data Quality Thresholds

Define measurable quality criteria:

**For Images:**
- Sharpness/blur metrics
- Contrast thresholds
- Artifact tolerance
- Completeness (all required views)

**For Signals:**
- Signal-to-noise ratio
- Baseline wander limits
- Artifact percentage tolerance
- Duration requirements

**For Structured Data:**
- Completeness percentage (e.g., >95% fields populated)
- Value range validation
- Temporal consistency

### 2.5 Metadata Requirements

Specify required metadata fields:

**Patient-Level:**
- Unique identifier (de-identified)
- Age at acquisition
- Sex
- Ethnicity (if available)
- Relevant medical history

**Study-Level:**
- Acquisition date
- Site/institution
- Device/equipment
- Operator (anonymized if needed)
- Clinical indication

**Ground Truth:**
- Diagnosis/label
- Labeler credentials
- Labeling method
- Confidence level

## Outputs

- [ ] Inclusion criteria documented
- [ ] Exclusion criteria documented
- [ ] Demographic requirements specified
- [ ] Quality thresholds defined
- [ ] Metadata schema documented

## Next Step

Proceed to `step-03-source-assessment.md` to evaluate data sources.

## Collaboration Points

- **Dr. Claire**: Validate clinical criteria appropriateness
- **Dr. Aequitas**: Review demographic requirements for fairness
