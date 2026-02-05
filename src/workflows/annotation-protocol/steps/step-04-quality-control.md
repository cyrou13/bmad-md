# Step 4: Quality Control Framework

## Agent

**Daria** (Data Governance Officer) with **Dr. Gauss** (Biostatistician)

## Objectives

- Define inter-annotator agreement metrics
- Establish adjudication process
- Plan quality audits

## Instructions

### 4.1 Inter-Annotator Agreement (IAA)

**Metrics by Annotation Type:**

| Annotation Type | Primary Metric | Threshold |
|-----------------|----------------|-----------|
| Binary classification | Cohen's Kappa | κ ≥ 0.80 |
| Multi-class | Fleiss' Kappa | κ ≥ 0.75 |
| Ordinal/Rating | ICC (Intraclass Correlation) | ICC ≥ 0.80 |
| Segmentation | Dice Coefficient | Dice ≥ 0.85 |
| Bounding Box | IoU (Intersection over Union) | IoU ≥ 0.75 |

**Interpretation:**
- κ < 0.40: Poor agreement - guidelines need revision
- κ 0.40-0.60: Moderate - additional training needed
- κ 0.60-0.80: Substantial - acceptable for most tasks
- κ > 0.80: Almost perfect - high quality

### 4.2 Multi-Annotator Strategy

**Option A: Full Redundancy**
- All cases annotated by N annotators (N ≥ 2)
- Consensus or adjudication for all
- Most rigorous, highest cost

**Option B: Partial Redundancy**
- X% of cases double-annotated
- Remaining cases single-annotated
- IAA monitored on overlap subset

**Option C: Tiered Approach**
- Easy cases: single annotation
- Ambiguous cases: multiple annotations
- Difficult cases: expert adjudication

### 4.3 Adjudication Process

When annotators disagree:

```
Disagreement detected
├─ Minor disagreement (e.g., boundary)
│   └─ Senior annotator resolves
├─ Moderate disagreement (different subclass)
│   └─ Third annotator breaks tie
└─ Major disagreement (different primary class)
    └─ Expert panel adjudication
```

**Documentation:**
- Record all disagreements
- Document resolution rationale
- Track patterns in disagreements

### 4.4 Quality Audits

**Ongoing Monitoring:**
- Real-time IAA tracking
- Per-annotator performance dashboards
- Drift detection over time

**Periodic Audits:**
- Random sample review by expert (5-10%)
- Systematic error pattern analysis
- Guidelines refinement based on findings

**Audit Triggers:**
- IAA drops below threshold
- Annotator performance decline
- New edge cases identified

### 4.5 Quality Metrics Dashboard

Track and report:

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Overall IAA (κ) | ≥ 0.80 | [value] | ✓/✗ |
| Adjudication rate | < 15% | [value] | ✓/✗ |
| Completion rate | > 95% | [value] | ✓/✗ |
| Per-annotator agreement | ≥ 0.75 | [range] | ✓/✗ |

## Outputs

- [ ] IAA metrics defined
- [ ] Adjudication process documented
- [ ] Audit plan established
- [ ] Quality dashboard designed

## Next Step

Proceed to `step-05-finalize.md` to compile the Annotation Protocol.
