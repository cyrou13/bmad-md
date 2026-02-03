# Step 1: Architecture Safety Review Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER review safety without understanding classification
- ✅ Multi-agent review: Architect + Quality + Cybersec + Risk
- 📋 Document all safety-relevant decisions
- 💬 Architecture decisions impact patient safety
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Load architecture and classification documents
- 📖 Identify safety-critical components
- 💾 Initialize review document
- 🚫 FORBIDDEN to proceed without classification

## YOUR TASK:

Initialize the architecture safety review by understanding the system and identifying safety-critical elements.

## INITIALIZATION SEQUENCE:

### 1. Load Required Documents

Read and analyze:
- `{planning_artifacts}/architecture.md` — **REQUIRED**
- `docs/regulatory/samd-classification.md` — **REQUIRED**
- `_bmad/_memory/bmmd/risk-register.md` — Risk context
- `_bmad/_memory/bmmd/regulatory-context.md` — Classification info

If architecture missing:
"⚠️ **Document requis manquant**

Le document d'architecture (`_bmad-output/planning-artifacts/architecture.md`) est nécessaire pour cette revue.

**Options:**
**[CREATE]** Créer l'architecture d'abord (workflow: create-architecture)
**[LOAD]** Charger une architecture existante (indiquer le chemin)

La revue de sécurité ne peut pas être effectuée sans architecture documentée."

### 2. Multi-Agent Introduction

"**Revue de sécurité de l'architecture — Équipe multi-agents**

Cette revue implique plusieurs experts BMMD :

🏗️ **Winston (Architect)** — Revue de l'architecture technique
- Patterns de sécurité et résilience
- Points de défaillance uniques
- Isolation des composants critiques

✅ **Quentin (Quality Manager)** — Conformité IEC 62304
- Traçabilité des exigences de sécurité
- Décomposition logicielle (SOUP, items)
- Documentation requise par classe

🔒 **SecureMax (Cybersecurity)** — Sécurité et surface d'attaque
- Threat modeling (STRIDE)
- Analyse SOUP et dépendances
- SBOM et gestion des vulnérabilités

⚠️ **Dr. Hana (Risk Manager)** — Liens avec les risques
- Mapping architecture → risques
- Efficacité des contrôles architecturaux
- Nouveaux risques identifiés

Nous travaillerons ensemble pour cette revue."

### 3. Extract Architecture Overview

From the architecture document:
"**Vue d'ensemble de l'architecture de {project_name}:**

**Composants principaux:**
{list_of_main_components}

**Flux de données:**
{data_flow_summary}

**Technologies utilisées:**
{technology_stack}

**Interfaces externes:**
{external_interfaces}

**Points d'intégration:**
{integration_points}

Cette compréhension est-elle correcte ?"

### 4. Identify Safety-Critical Components

"**Identification des composants safety-critical:**

Selon la classification IEC 62304 **Classe {safety_class}**, nous identifions :

**Composants directement liés à la sécurité patient:**
| Composant | Fonction | Criticité | Risques liés |
|-----------|----------|-----------|--------------|
| {component_1} | {function} | {high/medium} | RISK-{xxx} |
| {component_2} | {function} | {high/medium} | RISK-{xxx} |

**Interfaces avec impact sécurité:**
- {interface_1} — Impact: {impact}
- {interface_2} — Impact: {impact}

**SOUP (Software of Unknown Provenance):**
| SOUP | Version | Criticité | Fonction |
|------|---------|-----------|----------|
| {soup_1} | {version} | {critical/non-critical} | {function} |
| {soup_2} | {version} | {critical/non-critical} | {function} |

Des composants safety-critical supplémentaires à identifier ?"

### 5. Initialize Review Document

Create `docs/regulatory/architecture-safety-review.md`:

```markdown
---
document: architecture-safety-review
project: {project_name}
version: 1.0.0
date: {date}
reviewers:
  - Winston (Architect)
  - Quentin (Quality Manager)
  - SecureMax (Cybersecurity)
  - Dr. Hana (Risk Manager)
status: draft
stepsCompleted: [step-01]
classification: IEC 62304 Class {safety_class}
---

# Architecture Safety Review — {project_name}

## 1. Review Context

**Classification:** IEC 62304 Class {safety_class}
**Architecture Document:** {planning_artifacts}/architecture.md
**Risk Register:** _bmad/_memory/bmmd/risk-register.md

## 2. Architecture Overview

{architecture_summary}

## 3. Safety-Critical Components

{components_table}

## 4. SOUP Inventory

{soup_table}

## 5. Review Findings

{to_be_completed}
```

### 6. Present Menu

"**Initialisation de la revue de sécurité complétée**

**Contexte:**
- Classification: IEC 62304 Classe {safety_class}
- Composants safety-critical: {count}
- SOUP identifiés: {count}

**Équipe de revue:**
- 🏗️ Winston (Architecture)
- ✅ Quentin (IEC 62304)
- 🔒 SecureMax (Cybersecurity)
- ⚠️ Dr. Hana (Risques)

**Prochaines étapes:**
1. Revue IEC 62304 et décomposition logicielle
2. Threat modeling et analyse de sécurité
3. Mapping des risques architecturaux
4. Findings et recommandations

**[C] Continuer** — Procéder à la revue IEC 62304"

## SUCCESS METRICS:

✅ Architecture document loaded and understood
✅ Safety classification identified
✅ Safety-critical components identified
✅ SOUP inventory started
✅ Review document initialized

## FAILURE MODES:

❌ Proceeding without architecture
❌ Missing classification context
❌ Not identifying safety-critical components
❌ Ignoring SOUP

## NEXT STEP:

After user selects [C] to continue, load `./step-02-iec62304-review.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
