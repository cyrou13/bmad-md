# AI/ML Validation Checklist

> **Agent**: Clinical Evaluator (Dr. Claire) + TEA
> **Trigger**: `/ai-validation`
> **Standard references**: FDA AI/ML Guidance, GMLP, IMDRF SaMD N41

---

## 1. Data Governance

- [ ] Training data source documented with provenance
- [ ] Training data demographics documented (age, sex, ethnicity, site, scanner)
- [ ] Data quality assessment performed
- [ ] Annotation protocol documented
- [ ] Inter-annotator agreement measured (if applicable)
- [ ] Data split strategy documented (train/val/test)
- [ ] Test set is independent and representative of intended population
- [ ] No data leakage between train and test sets
- [ ] Patient data anonymized per RGPD/HIPAA

## 2. Model Performance

- [ ] Primary performance metrics defined and clinically justified
- [ ] Performance evaluated on independent test set
- [ ] Confidence intervals reported for all metrics
- [ ] Comparison to state of the art / predicate device
- [ ] Performance meets pre-defined acceptance criteria
- [ ] Statistical analysis follows pre-defined protocol

## 3. Subgroup Analysis

- [ ] Performance analyzed by age group
- [ ] Performance analyzed by sex
- [ ] Performance analyzed by ethnicity/race (if applicable)
- [ ] Performance analyzed by acquisition site
- [ ] Performance analyzed by scanner manufacturer/model
- [ ] Performance analyzed by disease severity/subtype
- [ ] No clinically significant disparities identified (or documented)

## 4. Robustness Testing

- [ ] Noise robustness tested (Gaussian, salt-and-pepper, etc.)
- [ ] Artifact robustness tested (motion, metal, reconstruction)
- [ ] Resolution/quality variation tested
- [ ] Protocol variation tested (different acquisition parameters)
- [ ] Graceful degradation documented

## 5. Out-of-Distribution (OOD) Detection

- [ ] OOD detection mechanism implemented
- [ ] OOD detection tested with known OOD samples
- [ ] Behavior on OOD inputs documented (alert, rejection, fallback)
- [ ] False positive rate of OOD detection acceptable

## 6. Explainability

- [ ] Explainability mechanism available (Grad-CAM, SHAP, attention, etc.)
- [ ] Explainability output clinically validated (makes clinical sense)
- [ ] Explainability limitations documented

## 7. Reproducibility

- [ ] Model training is reproducible (seeds, environment documented)
- [ ] Inference is deterministic
- [ ] Model versioning in place
- [ ] Model provenance fully documented (training data version, hyperparameters, etc.)

## 8. Predetermined Change Control Plan (PCCP)

- [ ] Types of anticipated modifications documented
- [ ] Modification protocol defined (what triggers revalidation)
- [ ] Acceptance criteria for updates defined
- [ ] Continuous learning strategy documented (if applicable)
- [ ] Re-training triggers defined (performance drift threshold)

## 9. Post-Market Performance Monitoring

- [ ] Performance monitoring plan in place
- [ ] Data drift detection implemented (KS test, PSI, etc.)
- [ ] Prediction drift monitoring implemented
- [ ] Alert thresholds defined for performance degradation
- [ ] Feedback loop with clinical users established
- [ ] Monitoring frequency defined

---

## Summary

| Category | Status | Notes |
|----------|--------|-------|
| Data Governance | ✅ / ⚠️ / ❌ | |
| Model Performance | ✅ / ⚠️ / ❌ | |
| Subgroup Analysis | ✅ / ⚠️ / ❌ | |
| Robustness | ✅ / ⚠️ / ❌ | |
| OOD Detection | ✅ / ⚠️ / ❌ | |
| Explainability | ✅ / ⚠️ / ❌ | |
| Reproducibility | ✅ / ⚠️ / ❌ | |
| PCCP | ✅ / ⚠️ / ❌ | |
| Post-Market Monitoring | ✅ / ⚠️ / ❌ | |
