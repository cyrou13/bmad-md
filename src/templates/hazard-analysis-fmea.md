# Hazard Analysis — Failure Mode and Effects Analysis (FMEA)

> **Document ID**: HA-[PROJECT]-[VERSION]
> **Standard**: ISO 14971:2019 §5
> **Date**: [YYYY-MM-DD]
> **Prepared by**: [Risk Manager name]

---

## Scope

- **System/Module analyzed**: [Name]
- **Analysis method**: FMEA (Failure Mode and Effects Analysis)
- **Boundary of analysis**: [What is included/excluded]

## Risk Acceptability Criteria

| Risk Level | RPN Range | Action Required |
|------------|-----------|-----------------|
| Acceptable | 1–4 | Document and monitor |
| ALARP | 5–12 | Reduce if reasonably practicable |
| Unacceptable | 13–25 | Mandatory risk control measure |

## FMEA Table

| ID | Software Item | Failure Mode | Cause | Clinical Effect | Sev (1-5) | Prob (1-5) | RPN | Risk Level | Control Measure | Verification | Residual Sev | Residual Prob | Residual RPN |
|----|--------------|--------------|-------|-----------------|-----------|-----------|-----|------------|-----------------|--------------|-------------|--------------|-------------|
| RISK-XXX-001 | [module] | [how it fails] | [why it fails] | [patient impact] | | | | | [control] | TEST-XXX | | | |
| RISK-XXX-002 | [module] | [how it fails] | [why it fails] | [patient impact] | | | | | [control] | TEST-XXX | | | |

## AI/ML Specific Hazards

| ID | Hazard Category | Failure Mode | Cause | Clinical Effect | Sev | Prob | RPN | Control |
|----|----------------|--------------|-------|-----------------|-----|------|-----|---------|
| RISK-AI-001 | Data Drift | Model performance degradation | Distribution shift in input data | Incorrect clinical result | | | | Drift monitoring |
| RISK-AI-002 | Bias | Systematic underperformance in subgroup | Training data imbalance | Missed diagnosis in subgroup | | | | Fairness testing |
| RISK-AI-003 | OOD Input | Confident but wrong prediction | Input outside training distribution | Incorrect clinical decision | | | | OOD detection |
| RISK-AI-004 | Adversarial | Manipulated output | Adversarial perturbation | Incorrect clinical result | | | | Input validation |

## Summary

- **Total hazards identified**: [N]
- **Unacceptable risks (pre-control)**: [N]
- **Unacceptable risks (post-control)**: [should be 0]
- **ALARP risks remaining**: [N]

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | [date] | [name] | Initial FMEA |
