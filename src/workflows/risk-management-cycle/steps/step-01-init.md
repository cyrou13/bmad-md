# Step 1: Risk Management Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER skip hazard identification
- ✅ Tout danger identifiable doit être analysé
- 📋 Un risque sans contrôle vérifié est un risque non maîtrisé
- 💬 ALWAYS think "Et si ça échoue ?"
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Load existing risk documentation
- 📖 Understand the product and its hazards
- 💾 Initialize or update Risk Register
- 🚫 FORBIDDEN to proceed without understanding intended use

## YOUR TASK:

Initialize the ISO 14971 risk management cycle by understanding the product context and preparing the Risk Register.

## INITIALIZATION SEQUENCE:

### 1. Load Required Documents

Read and analyze:
- `docs/regulatory/intended-use.md` — **REQUIRED**
- `docs/regulatory/samd-classification.md` — **REQUIRED** (IEC 62304 safety class)
- `_bmad/_memory/bmmd/regulatory-context.md` — Classification info
- `{planning_artifacts}/prd.md` — Functional requirements
- `{planning_artifacts}/architecture.md` — System architecture (if exists)

If classification missing:
"⚠️ **Classification requise**

La classification IEC 62304 est nécessaire pour déterminer le niveau de rigueur de l'analyse de risques.

**Options:**
**[CLASSIFY]** Exécuter le workflow samd-classification d'abord
**[CONTINUE]** Continuer avec une classification provisoire (Classe C par défaut)

Je recommande fortement d'avoir la classification formelle avant l'analyse de risques."

### 2. Determine Cycle Mode

"**Mode du cycle de gestion des risques:**

Ce workflow peut être exécuté en plusieurs modes :

**[INITIAL]** Analyse initiale
- Première analyse de risques du projet
- Identification exhaustive des dangers
- Création du Risk Register

**[UPDATE]** Mise à jour
- Nouveaux dangers suite à changements
- Réévaluation de risques existants
- Ajout de contrôles

**[REVIEW]** Revue pré-release
- Vérification de tous les contrôles
- Évaluation du risque résiduel global
- Acceptabilité pour release

Quel mode souhaitez-vous ?"

### 3. Initialize or Load Risk Register

Check for existing Risk Register:

If new (INITIAL mode):
"**Initialisation du Risk Register**

Je vais créer le Risk Register pour **{project_name}**.

**Structure du Risk Register:**
- RISK ID : Format RISK-[MODULE]-[NNN]
- Severity : 1-5 (1=négligeable, 5=catastrophique)
- Probability : 1-5 (1=improbable, 5=fréquent)
- RPN (Risk Priority Number) : Severity × Probability
- Acceptability : Acceptable (≤6), ALARP (7-12), Unacceptable (>12)

**Référence normative:** ISO 14971:2019, Clause 7"

If existing (UPDATE/REVIEW mode):
"**Risk Register existant chargé**

**Statistiques actuelles:**
- Risques identifiés : {count}
- Inacceptables (pré-contrôle) : {count}
- ALARP : {count}
- Acceptables : {count}
- Contrôles vérifiés : {count}/{total}
- Risques ouverts : {count}

Nous allons {update/review} ce registre."

### 4. Understand Product Hazard Context

Based on the loaded documents, identify:

"**Contexte de sécurité de {project_name}:**

**Classification de sécurité:** IEC 62304 Classe {safety_class}

**Principales fonctions à risque identifiées:**
1. {function_1} — {potential_hazard}
2. {function_2} — {potential_hazard}
3. {function_3} — {potential_hazard}

**Utilisateurs et environnement:**
- Utilisateurs : {intended_users}
- Environnement : {use_environment}
- Supervision clinique : {supervision_level}

**Interfaces critiques:**
- {interface_1}
- {interface_2}

**Données sensibles:**
- {data_type_1}
- {data_type_2}

Ces éléments guideront l'identification des dangers."

### 5. Present Menu

"**Initialisation de la gestion des risques complétée**

**Mode sélectionné:** {mode}
**Classification:** IEC 62304 Classe {safety_class}
**Risk Register:** {new/existing_with_stats}

**Méthode d'analyse:** FMEA (Failure Mode and Effects Analysis)
Conformément à ISO 14971:2019 et au template `bmmd/templates/hazard-analysis-fmea.md`

**Prochaine étape:**
{if_initial}Identification exhaustive des dangers et modes de défaillance{/if}
{if_update}Analyse des nouveaux dangers ou changements{/if}
{if_review}Revue de tous les risques et vérification des contrôles{/if}

**[C] Continuer** — Procéder à l'identification des dangers"

## SUCCESS METRICS:

✅ Required documents loaded and analyzed
✅ Safety classification understood
✅ Cycle mode determined
✅ Risk Register initialized or loaded
✅ Product hazard context understood

## FAILURE MODES:

❌ Proceeding without safety classification
❌ Not understanding intended use
❌ Missing critical product functions
❌ Not loading existing Risk Register in UPDATE mode

## NEXT STEP:

After user selects [C] to continue, load `./step-02-hazard-identification.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
