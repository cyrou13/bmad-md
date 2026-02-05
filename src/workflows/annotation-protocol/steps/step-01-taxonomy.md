# Step 1: Define Annotation Taxonomy

## Agent

**Daria** (Data Governance Officer) with **Dr. Claire** (Clinical Evaluator)

## Objectives

- Define the complete set of labels/annotations required
- Establish clear definitions for each category
- Create decision logic for ambiguous cases

## Instructions

### 1.1 Identify Annotation Types

Based on the AI task, determine annotation needs:

**Classification:**
- Binary (positive/negative)
- Multi-class (mutually exclusive)
- Multi-label (non-exclusive)

**Detection/Localization:**
- Bounding boxes
- Points/landmarks
- Regions of interest

**Segmentation:**
- Semantic (pixel-level classification)
- Instance (individual object delineation)

**Other:**
- Measurements
- Severity scores
- Temporal markers

### 1.2 Define Label Taxonomy

Create structured taxonomy:

```markdown
## Label Taxonomy

### Level 1: Primary Classification
- Class A: [definition]
- Class B: [definition]
- Class C: [definition]

### Level 2: Subclassification (if applicable)
- Class A.1: [definition]
- Class A.2: [definition]

### Special Categories
- Uncertain: [when to use]
- Not evaluable: [criteria]
- Other/Rare: [handling]
```

### 1.3 Clinical Definitions

For each label, document:

| Label | Clinical Definition | Gold Standard | Examples |
|-------|---------------------|---------------|----------|
| [Label A] | [precise definition] | [reference] | [link to examples] |

### 1.4 Edge Case Decision Tree

Create decision logic for ambiguous cases:

```
Is finding clearly visible?
├─ No → Mark as "Not evaluable"
├─ Yes → Does it meet size criteria?
    ├─ No → Mark as "Below threshold"
    ├─ Yes → Does it have characteristic features?
        ├─ All features → [Label A]
        ├─ Partial features → [Label B or Uncertain]
```

## Outputs

- [ ] Annotation types defined
- [ ] Label taxonomy documented
- [ ] Clinical definitions validated
- [ ] Edge case logic established

## Next Step

Proceed to `step-02-guidelines.md` to create detailed annotation guidelines.
