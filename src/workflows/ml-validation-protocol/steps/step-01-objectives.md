# Step 1: Define Validation Objectives

## Agent

**Dr. Gauss** (Biostatistician) with **Dr. Claire** (Clinical Evaluator)

## Objectives

- Define primary and secondary performance endpoints
- Establish clinically meaningful success criteria
- Identify appropriate comparator

## Instructions

### 1.1 Primary Performance Endpoint

Based on intended use, select primary metric:

| AI Task | Recommended Primary Endpoint |
|---------|------------------------------|
| Diagnosis (binary) | Sensitivity at fixed specificity, or AUC |
| Diagnosis (multi-class) | Weighted accuracy, macro-AUC |
| Detection | Sensitivity, lesion-level or patient-level |
| Segmentation | Dice coefficient, volume correlation |
| Risk prediction | AUC, calibration, decision curve |
| Prognosis | C-index, calibration |

**Document:**
- Primary endpoint: [metric]
- Clinical justification: [why this metric matters]
- Level of analysis: [patient/image/lesion]

### 1.2 Secondary Endpoints

Additional metrics to characterize performance:
- Specificity, PPV, NPV
- Subgroup-specific performance
- Calibration metrics
- Clinical utility metrics

### 1.3 Success Criteria

Define what constitutes success:

**Standalone Performance:**
```
Primary: Sensitivity ≥ [X]% at Specificity ≥ [Y]%
         with lower 95% CI bound ≥ [Z]%
```

**Comparative Performance (vs. predicate/SOC):**
```
Non-inferiority: Sensitivity difference > -[margin]%
Superiority: AUC improvement ≥ [delta], p < 0.05
```

### 1.4 Comparator Selection

| Comparator Type | When to Use |
|-----------------|-------------|
| Predicate device | 510(k) submission |
| Standard of care | No predicate, clinical practice comparison |
| Reader alone | AI as second reader |
| Published benchmark | Established performance standards |

Document comparator and data source.

### 1.5 Clinical Significance

Define clinically meaningful differences:
- Minimum improvement that changes clinical practice
- Acceptable trade-offs (sensitivity vs. specificity)
- Patient outcome implications

## Outputs

- [ ] Primary endpoint defined
- [ ] Secondary endpoints listed
- [ ] Success criteria established
- [ ] Comparator identified

## Next Step

Proceed to `step-02-study-design.md` for validation study design.
