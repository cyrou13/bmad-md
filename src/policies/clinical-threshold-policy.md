# Policy: Clinical Threshold Management

> **Scope**: All clinically significant parameters, thresholds, and constants
> **Source of truth**: `config/clinical_thresholds.yaml`

---

## Single Source of Truth

All clinical thresholds are defined in: `config/clinical_thresholds.yaml`

This file is:
- Version-controlled in Git
- Protected by branch protection rules (merge to main requires approval)
- Every modification requires formal clinical validation

## Code Rules

- Thresholds MUST be read from the configuration file at runtime
- NEVER hardcode clinical values in source code
- Constants must document their source (publication, guideline, validation study)
- Constants must include physical units in their name or documentation

## Modification Process

1. **Change Request**: Documented justification (clinical evidence, new guideline, etc.)
2. **Clinical Review**: Dr. Claire (Clinical Evaluator) reviews the clinical justification
3. **Risk Impact Analysis**: Dr. Hana (Risk Manager) assesses impact on risk profile
4. **Regulatory Review**: Dr. Régis (Regulatory Affairs) determines if regulatory notification is needed
5. **Implementation**: Update config file with proper documentation
6. **Regression Testing**: Full regression test suite executed
7. **Formal Approval**: Human signature required

## Configuration File Format

```yaml
# config/clinical_thresholds.yaml
# WARNING: This file contains clinically validated parameters.
# DO NOT modify without following the Clinical Threshold Policy.
# Every change requires formal validation and approval.

ct_perfusion:
  cbf:
    unit: "mL/100g/min"
    physiological_range:
      min: 0
      max: 150
      source: "Wintermark et al., Stroke 2005"
    ischemic_core_threshold: 
      value: 30
      source: "Campbell et al., NEJM 2019"
      validated: "2025-01-15"
  tmax:
    unit: "seconds"
    physiological_range:
      min: 0
      max: 30
      source: "Cereda et al., JCBFM 2016"
    penumbra_threshold:
      value: 6.0
      source: "Albers et al., NEJM 2018 (DEFUSE 3)"
      validated: "2025-01-15"
```
