# Step 1: Identify Protected Attributes

## Agent

**Dr. Aequitas** (AI Ethics & Fairness Officer)

## Objectives

- Identify demographic groups relevant to fairness assessment
- Map potential sources of bias
- Align with regulatory expectations

## Instructions

### 1.1 Define Protected Attributes

Standard attributes to evaluate:

| Attribute | Categories | Rationale |
|-----------|------------|-----------|
| **Age** | Pediatric, Adult, Geriatric | Performance variation |
| **Sex** | Male, Female | Biological differences |
| **Race/Ethnicity** | [Context-specific] | Historical disparities |
| **Socioeconomic** | If inferable | Access disparities |
| **Geographic** | Urban/Rural, Region | Care variation |
| **Comorbidities** | Major categories | Clinical complexity |

### 1.2 Context-Specific Attributes

Based on the clinical domain, identify:
- Disease-specific subgroups
- Treatment history variations
- Healthcare setting differences
- Insurance/access factors

### 1.3 Bias Source Mapping

| Bias Type | Potential Sources | Assessment Method |
|-----------|-------------------|-------------------|
| **Selection Bias** | Who is in the data? | Dataset demographics vs. target population |
| **Measurement Bias** | How was data collected? | Equipment/protocol variation |
| **Label Bias** | Who created ground truth? | Annotator demographics, historical standards |
| **Historical Bias** | Past inequities encoded? | Literature review, expert input |

### 1.4 Regulatory Requirements

Document requirements by jurisdiction:

**EU AI Act:**
- Bias assessment mandatory for high-risk AI
- Documentation of bias mitigation measures

**FDA:**
- Performance across demographic subgroups
- Labeling of known limitations

## Outputs

- [ ] Protected attributes defined
- [ ] Bias sources identified
- [ ] Regulatory requirements mapped
- [ ] Assessment plan created

## Next Step

Proceed to `step-02-data-bias.md` for data-level bias analysis.
