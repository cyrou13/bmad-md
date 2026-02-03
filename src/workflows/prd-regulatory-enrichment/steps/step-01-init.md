# Step 1: PRD Regulatory Enrichment Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER modify PRD without backup
- ✅ Chaque exigence a un ID au format REQ-[MODULE]-[NNN]
- 📋 Preserve existing content, add regulatory sections
- 💬 Collaborative: PM + Regulatory + Quality
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Load existing PRD and classification
- 📖 Identify regulatory enrichments needed
- 💾 Create backup before modifications
- 🚫 FORBIDDEN to delete existing content

## YOUR TASK:

Initialize the PRD regulatory enrichment by loading context and identifying required additions.

## INITIALIZATION SEQUENCE:

### 1. Load Existing Documents

Read and analyze:
- `{planning_artifacts}/prd.md` — **REQUIRED**
- `docs/regulatory/intended-use.md` — For reference
- `docs/regulatory/samd-classification.md` — Classification info
- `docs/regulatory/regulatory-scoping.md` — Standards context
- `_bmad/_memory/bmmd/risk-register.md` — Risk linkage

If PRD missing:
"⚠️ **PRD requis**

Le PRD (`_bmad-output/planning-artifacts/prd.md`) doit exister avant l'enrichissement.

**Options:**
**[CREATE]** Créer le PRD d'abord (workflow: create-prd)
**[LOAD]** Charger un PRD existant (indiquer le chemin)

L'enrichissement réglementaire s'applique à un PRD existant."

### 2. Analyze Current PRD Structure

"**Analyse du PRD existant pour {project_name}:**

**Structure actuelle:**
{current_prd_sections}

**Éléments existants:**
- Functional Requirements: {count} (FR-xxx format: {yes/no})
- Non-Functional Requirements: {count} (NFR-xxx format: {yes/no})
- User Stories: {count}

**Éléments réglementaires existants:**
- Intended Use reference: {present/missing}
- Regulatory Requirements: {count/missing}
- Safety Classification: {present/missing}
- Traceable IDs: {present/partial/missing}

**Gaps identifiés:**
{list_of_missing_regulatory_elements}"

### 3. Multi-Agent Introduction

"**Enrichissement réglementaire du PRD — Équipe collaborative**

Cette enrichissement implique :

📋 **John (PM)** — Propriétaire du PRD
- Validation des modifications
- Cohérence avec la vision produit
- Clarification des exigences

📋 **Dr. Régis (Regulatory)** — Intended Use et exigences réglementaires
- Référence à l'Intended Use
- Ajout des exigences réglementaires (REG-xxx)
- Classification et contraintes

✅ **Quentin (Quality)** — IDs traçables et conformité
- Format d'IDs : REQ-[MODULE]-[NNN]
- Classe de sécurité par exigence
- Traçabilité vers les risques

Nous travaillerons ensemble pour enrichir le PRD."

### 4. Define Enrichment Scope

"**Enrichissements à ajouter au PRD:**

**1. Section Intended Use (référence)**
- Lien vers `docs/regulatory/intended-use.md`
- Résumé de l'objectif clinique

**2. Classification Réglementaire**
- IEC 62304 Safety Class: {class}
- IMDRF Category: {category}
- FDA Classification: Class {fda}
- MDR Classification: Class {mdr}

**3. Exigences Réglementaires (REG-xxx)**
Nouvelles exigences à ajouter :
- REG-001: {requirement}
- REG-002: {requirement}
- ...

**4. Contraintes Données Patient**
- Anonymisation requirements
- RGPD/HIPAA compliance
- Data retention policies

**5. IDs Traçables**
Conversion des exigences au format :
- REQ-FUNC-001 (Functional)
- REQ-NFUNC-001 (Non-Functional)
- REQ-REG-001 (Regulatory)
- REQ-SAF-001 (Safety)

**6. Classe de Sécurité par Exigence**
- Class A/B/C pour chaque exigence
- Basé sur impact sécurité patient

Confirmez-vous ces enrichissements ?"

### 5. Create Backup

"**Création de backup:**

Avant modification, je crée une copie de sauvegarde :
- Source: `{planning_artifacts}/prd.md`
- Backup: `{planning_artifacts}/prd.backup-{timestamp}.md`

Backup créé : ✅"

### 6. Present Menu

"**Initialisation de l'enrichissement PRD complétée**

**PRD actuel:**
- Exigences existantes: {count}
- Format IDs: {current_format}
- Sections réglementaires: {present/missing}

**Enrichissements prévus:**
- Intended Use reference
- Classification section
- {count} exigences réglementaires
- Contraintes données patient
- IDs traçables
- Classes de sécurité

**[C] Continuer** — Procéder à l'enrichissement
**[R] Réviser** — Modifier le scope d'enrichissement"

## SUCCESS METRICS:

✅ PRD loaded and analyzed
✅ Classification context loaded
✅ Enrichment scope defined
✅ Backup created
✅ Team roles understood

## FAILURE MODES:

❌ PRD not found
❌ Classification missing
❌ No backup created
❌ Scope unclear

## NEXT STEP:

After user selects [C] to continue, load `./step-02-enrich.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
