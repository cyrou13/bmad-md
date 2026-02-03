# Step 1: Story Regulatory Gate Initialization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER approve without checklist completion
- ✅ Les phase gates protègent les patients
- 📋 PRE and POST gates have different focus
- 💬 Speaking as Quentin (Quality Manager)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Identify the story to review
- 📖 Determine gate mode (PRE or POST)
- 💾 Load checklist and context
- 🚫 FORBIDDEN to skip checklist items

## YOUR TASK:

Initialize the story regulatory gate by identifying the story and determining the gate mode.

## INITIALIZATION SEQUENCE:

### 1. Determine Gate Mode

If not specified in invocation:
"**Story Regulatory Gate — Sélection du mode**

Ce workflow vérifie la conformité réglementaire d'une user story.

**[PRE]** Pre-Gate (avant implémentation)
- Vérifie que la story est prête pour l'implémentation
- Exigences tracées, risques identifiés
- Critères d'acceptation incluent vérifications sécurité

**[POST]** Post-Gate (après implémentation)
- Vérifie que l'implémentation est conforme
- Tests couvrent les exigences
- Documentation mise à jour

Quel mode souhaitez-vous ?"

### 2. Identify Story

"**Identification de la story:**

Quelle story souhaitez-vous vérifier ?

**Options:**
- Indiquer le chemin vers le fichier story
- Indiquer l'ID de la story (ex: STORY-001)
- Coller le contenu de la story

{if_sprint_status_exists}
**Stories en cours (depuis sprint-status.yaml):**
| ID | Title | Status |
|----|-------|--------|
| {story_1} | {title} | {status} |
| {story_2} | {title} | {status} |
{/if}"

### 3. Load Story Content

Once story identified:
"**Story chargée : {story_id}**

**Titre:** {story_title}

**Description:**
{story_description}

**Acceptance Criteria:**
{acceptance_criteria}

**Requirements tracés:**
| REQ ID | Requirement | Safety Class |
|--------|-------------|--------------|
| {req_1} | {description} | {class} |
| {req_2} | {description} | {class} |

**Risques liés:**
| RISK ID | Hazard | Control |
|---------|--------|---------|
| {risk_1} | {hazard} | {control} |

Cette story est-elle correctement identifiée ?"

### 4. Load Classification Context

"**Contexte de classification:**

**Project:** {project_name}
**IEC 62304 Safety Class:** {safety_class}

**Implications pour cette story:**

{if_class_c}
**Classe C — Exigences maximales:**
- Traçabilité complète obligatoire
- Tests unitaires et d'intégration requis
- Revue de code formelle requise
- Documentation détaillée
{/if}

{if_class_b}
**Classe B — Exigences modérées:**
- Traçabilité requise
- Tests unitaires requis
- Revue de code requise
{/if}

{if_class_a}
**Classe A — Exigences minimales:**
- Traçabilité recommandée
- Tests recommandés
{/if}

**Checklist applicable:**
`_bmad/bmmd/checklists/story-regulatory-compliance.md`"

### 5. Present Gate Introduction

"**Story Regulatory Gate — {mode}**

**Story:** {story_id} — {story_title}
**Mode:** {PRE-GATE / POST-GATE}
**Classification:** IEC 62304 Classe {safety_class}

**Ce que nous allons vérifier:**

{if_pre_gate}
**PRE-GATE Checklist:**
- [ ] Exigences tracées (REQ-xxx)
- [ ] Risques liés identifiés (RISK-xxx)
- [ ] Critères d'acceptation incluent vérifications safety
- [ ] Documentation requise identifiée
- [ ] Prêt pour implémentation
{/if}

{if_post_gate}
**POST-GATE Checklist:**
- [ ] Code implémenté selon les AC
- [ ] Tests unitaires couvrent les exigences
- [ ] Traçabilité bidirectionnelle établie
- [ ] Documentation mise à jour
- [ ] Risques vérifiés et contrôles validés
- [ ] Prêt pour merge/release
{/if}

**[C] Continuer** — Exécuter la checklist"

## SUCCESS METRICS:

✅ Gate mode determined
✅ Story identified and loaded
✅ Classification context loaded
✅ Checklist identified
✅ Ready for gate execution

## FAILURE MODES:

❌ Story not found
❌ Mode not determined
❌ Missing classification context
❌ Wrong checklist loaded

## NEXT STEP:

After user selects [C] to continue:
- If PRE-GATE: load `./step-02-pre-gate.md`
- If POST-GATE: load `./step-02-post-gate.md`

Remember: Do NOT proceed until user explicitly selects [C]!
