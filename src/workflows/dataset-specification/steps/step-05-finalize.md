# Step 5: Finalize Dataset Specification

## Agent

**Daria** (Data Governance Officer)

## Objectives

- Compile complete Dataset Specification Document
- Review with stakeholders
- Obtain necessary approvals
- Create actionable acquisition plan

## Instructions

### 5.1 Compile Dataset Specification Document

Structure the final document:

```markdown
# Dataset Specification Document

## Document Control
- Version: [x.x]
- Date: [YYYY-MM-DD]
- Author: [Daria]
- Reviewers: [list]
- Approval: [pending/approved]

## 1. Purpose and Scope
- Intended use of the AI/ML system
- Role of dataset in development and validation
- Regulatory context

## 2. Data Requirements

### 2.1 Data Types and Modalities
[From Step 1]

### 2.2 Inclusion Criteria
[From Step 2]

### 2.3 Exclusion Criteria
[From Step 2]

### 2.4 Metadata Requirements
[From Step 2]

### 2.5 Quality Thresholds
[From Step 2]

## 3. Demographic Requirements
[From Step 2 - diversity requirements]

## 4. Data Sources

### 4.1 Approved Sources
[From Step 3]

### 4.2 Source Limitations
[From Step 3]

### 4.3 Consent and Privacy Status
[From Step 3]

## 5. Sample Size

### 5.1 Statistical Justification
[From Step 4]

### 5.2 Dataset Splits
[From Step 4]

### 5.3 Subgroup Requirements
[From Step 4]

## 6. Data Governance

### 6.1 Versioning Strategy
### 6.2 Access Control
### 6.3 Change Management
### 6.4 Audit Trail Requirements

## 7. Acquisition Plan
[Timeline and responsibilities]

## 8. Known Limitations
[Documented limitations and mitigations]

## Appendices
- A: Metadata Schema
- B: Quality Metrics Definitions
- C: Sample Size Calculations
```

### 5.2 Stakeholder Review

Circulate for review:

| Reviewer | Focus Area | Status |
|----------|------------|--------|
| Dr. Claire | Clinical appropriateness | [ ] |
| Dr. Gauss | Statistical validity | [ ] |
| Dr. Aequitas | Fairness/bias considerations | [ ] |
| Dr. Régis | Regulatory compliance | [ ] |
| Dr. Hana | Risk implications | [ ] |
| Product Owner | Business feasibility | [ ] |

### 5.3 Address Review Comments

Track and resolve:
- Document all comments received
- Provide responses/resolutions
- Update specification as needed
- Obtain sign-off from reviewers

### 5.4 Approval Gate

**Approval Criteria:**
- [ ] All required sections complete
- [ ] Statistical justification accepted (Dr. Gauss)
- [ ] Clinical validity confirmed (Dr. Claire)
- [ ] Fairness requirements addressed (Dr. Aequitas)
- [ ] Regulatory alignment confirmed (Dr. Régis)
- [ ] Risk assessment integrated (Dr. Hana)

### 5.5 Create Acquisition Plan

Define actionable next steps:

```markdown
## Dataset Acquisition Plan

### Phase 1: [Timeframe]
- Source: [Primary source]
- Target N: [number]
- Responsible: [person/team]
- Milestones: [list]

### Phase 2: [Timeframe]
- Additional sources if needed
- Gap filling activities

### Quality Gates
- [ ] Initial batch review at N = [threshold]
- [ ] Interim quality assessment at 50%
- [ ] Final quality audit at 100%

### Risk Mitigation
- Backup sources identified: [yes/no]
- Contingency timeline: [buffer]
```

## Outputs

- [ ] Dataset Specification Document finalized
- [ ] Stakeholder reviews completed
- [ ] Approvals obtained
- [ ] Acquisition Plan created
- [ ] Document under version control

## Workflow Complete

The Dataset Specification is complete and approved. Proceed to:
- **Annotation Protocol** workflow (if annotation required)
- **Data Acquisition** execution
- **Bias Assessment** workflow (parallel track)

## Regulatory Traceability

This document fulfills requirements for:
- FDA: Algorithm description, training data documentation
- EU AI Act: Article 10 (Data governance)
- GMLP: Principle 3 (Clinical study design reflects intended population)
- ISO 13485: 7.3.3 (Design inputs)
