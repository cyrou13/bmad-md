# Dataset Specification Workflow

## Overview

This workflow guides the specification of dataset requirements for AI/ML medical device development, ensuring regulatory compliance and data quality foundations.

## Metadata

- **ID**: dataset-specification
- **Name**: Dataset Specification
- **Module**: BMMD (AI/ML Extension)
- **Phase**: 2 - Definition
- **Gate**: R2
- **Primary Agent**: Daria (Data Governance Officer)
- **Supporting Agents**: Dr. Claire (Clinical), Dr. Gauss (Biostatistics), Dr. Aequitas (Ethics)

## Prerequisites

- Product Brief completed
- Intended Use statement defined
- SaMD classification determined
- Regulatory scoping completed

## Workflow Steps

### Step 1: Initialize Dataset Planning
`steps/step-01-init.md`
- Review intended use and clinical context
- Identify data types required (images, signals, text, structured)
- Define high-level data sources
- Establish dataset governance approach

### Step 2: Define Data Requirements
`steps/step-02-data-requirements.md`
- Specify inclusion/exclusion criteria
- Define required clinical metadata
- Establish demographic diversity requirements
- Document data quality thresholds

### Step 3: Source Identification & Assessment
`steps/step-03-source-assessment.md`
- Evaluate potential data sources
- Assess data availability and accessibility
- Review consent and privacy constraints
- Document source limitations

### Step 4: Sample Size Planning
`steps/step-04-sample-size.md`
- Collaborate with Dr. Gauss on statistical requirements
- Define sample size for training/validation/test
- Plan for subgroup representation
- Document power analysis

### Step 5: Finalize Specification
`steps/step-05-finalize.md`
- Compile Dataset Specification Document
- Review with stakeholders
- Obtain approvals
- Create dataset acquisition plan

## Outputs

- Dataset Specification Document
- Data Source Assessment
- Sample Size Justification
- Dataset Acquisition Plan

## Templates Used

- `dataset-specification.md`
- `data-source-evaluation.md`

## Regulatory Alignment

- FDA AI/ML Guidance: Dataset documentation requirements
- EU AI Act: Training data governance (Article 10)
- GMLP: Data quality principles
- ISO 13485: Data management requirements
