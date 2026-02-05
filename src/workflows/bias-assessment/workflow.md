# Bias Assessment Workflow

## Overview

This workflow evaluates AI/ML systems for algorithmic bias and fairness, ensuring equitable performance across patient populations.

## Metadata

- **ID**: bias-assessment
- **Name**: Bias Assessment
- **Module**: BMMD (AI/ML Extension)
- **Phase**: 2-3 (Definition & Development)
- **Gate**: R2, R3
- **Primary Agent**: Dr. Aequitas (AI Ethics & Fairness)
- **Supporting Agents**: Daria (Data), Dr. Gauss (Stats), Dr. Hana (Risk)

## Prerequisites

- Dataset Specification completed
- Intended Use defined
- Initial model development (for model bias assessment)

## Workflow Steps

### Step 1: Identify Protected Attributes
`steps/step-01-attributes.md`
- Define relevant demographic groups
- Identify potential sources of bias
- Map to regulatory requirements

### Step 2: Data Bias Analysis
`steps/step-02-data-bias.md`
- Assess dataset representativeness
- Identify historical bias in labels
- Document data limitations

### Step 3: Model Fairness Evaluation
`steps/step-03-model-fairness.md`
- Calculate fairness metrics
- Analyze subgroup performance
- Identify disparities

### Step 4: Mitigation & Documentation
`steps/step-04-mitigation.md`
- Recommend mitigation strategies
- Document known limitations
- Prepare Bias Assessment Report

## Outputs

- Bias Risk Assessment Report
- Fairness Evaluation Report
- Subgroup Performance Analysis
- Mitigation Recommendations

## Regulatory Alignment

- EU AI Act: Article 10 (bias in training data)
- FDA: Ensuring AI/ML device equity
- WHO: AI Ethics principles (equity, fairness)
