# Step 1: Initialize Dataset Planning

## Agent

**Daria** (Data Governance Officer)

## Objectives

- Understand the AI/ML use case and data implications
- Identify data types and modalities required
- Establish dataset governance framework
- Align with regulatory requirements

## Instructions

### 1.1 Review Context Documents

Load and review:
- Product Brief
- Intended Use Statement
- SaMD Classification results
- Regulatory Scoping outputs

Extract key information:
- Target patient population
- Clinical workflow integration point
- AI/ML task type (classification, detection, segmentation, prediction)
- Risk classification (impacts data requirements)

### 1.2 Identify Data Requirements

Based on the intended use, determine:

**Primary Data Type:**
- Medical images (X-ray, CT, MRI, ultrasound, pathology, dermoscopy)
- Physiological signals (ECG, EEG, PPG)
- Clinical text (reports, notes)
- Structured data (lab values, vitals, demographics)
- Multi-modal combination

**Associated Metadata:**
- Patient demographics (age, sex, ethnicity)
- Clinical context (indication, symptoms, comorbidities)
- Acquisition parameters (device, settings, protocol)
- Outcome data (diagnosis, follow-up, ground truth)

### 1.3 Define Governance Approach

Establish:
- Dataset versioning strategy
- Access control requirements
- Audit trail requirements
- Change management process

### 1.4 Regulatory Mapping

Map to regulatory requirements:

| Requirement | FDA | EU AI Act | GMLP |
|-------------|-----|-----------|------|
| Data provenance | ✓ | ✓ | ✓ |
| Quality documentation | ✓ | ✓ | ✓ |
| Bias assessment | ✓ | ✓ | ✓ |
| Consent tracking | ✓ | ✓ | - |

## Outputs

- [ ] Data types identified
- [ ] Metadata requirements listed
- [ ] Governance approach defined
- [ ] Regulatory requirements mapped

## Next Step

Proceed to `step-02-data-requirements.md` to define detailed data requirements.

## Collaboration Points

- **Dr. Claire**: Validate clinical relevance of data requirements
- **Dr. Régis**: Confirm regulatory data documentation needs
