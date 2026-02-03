# Step 3: PRD Enrichment Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER finalize without PM approval
- ✅ Update version and changelog
- 📋 Verify all additions are correct
- 💬 Confirm tracability is complete
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Verify all enrichments
- 📖 Update PRD metadata
- 💾 Save enriched PRD
- 🚫 FORBIDDEN to finalize without validation

## YOUR TASK:

Finalize the PRD enrichment by verifying additions, updating metadata, and obtaining approval.

## FINALIZATION SEQUENCE:

### 1. Verify Enrichments

"**Vérification des enrichissements:**

**Sections réglementaires:**
| Section | Added | Complete | Verified |
|---------|-------|----------|----------|
| Intended Use Reference | ✅ | ✅ | {status} |
| Regulatory Classification | ✅ | ✅ | {status} |
| Regulatory Requirements | ✅ | {count} REQ | {status} |
| Patient Data Constraints | ✅ | ✅ | {status} |

**ID Conversion:**
| Original | Converted | Verified |
|----------|-----------|----------|
| {count} FR-xxx | {count} REQ-FUNC-xxx | ✅ |
| {count} NFR-xxx | {count} REQ-NFUNC-xxx | ✅ |
| — | {count} REQ-REG-xxx | ✅ |
| — | {count} REQ-SAF-xxx | ✅ |

**Safety Classes:**
| Class | Count | Verified |
|-------|-------|----------|
| A | {count} | ✅ |
| B | {count} | ✅ |
| C | {count} | ✅ |

Tous les enrichissements sont vérifiés : {yes/no}"

### 2. Update PRD Metadata

"**Mise à jour des métadonnées PRD:**

```yaml
---
document: prd
project: {project_name}
version: {new_version}  # Incremented
date: {date}
authors:
  - John (Product Manager)
  - Dr. Régis (Regulatory Affairs)
  - Quentin (Quality Manager)
status: enriched
classification: IEC 62304 Class {safety_class}
regulatory_enrichment: true
intended_use_ref: docs/regulatory/intended-use.md
risk_register_ref: _bmad/_memory/bmmd/risk-register.md
---
```

**Changelog entry:**
```markdown
## Changelog

### v{new_version} — {date}
- Added regulatory context section (Intended Use, Classification)
- Added {count} regulatory requirements (REQ-REG-xxx)
- Added patient data constraints section
- Converted {count} requirements to traceable IDs
- Assigned safety classes to all requirements
- Linked {count} requirements to Risk Register

**Enriched by:** Dr. Régis, Quentin
**Approved by:** John (PM)
```"

### 3. Traceability Verification

"**[Quentin] Vérification de la traçabilité:**

**Couverture des exigences:**

| Category | Total | Traceable ID | Safety Class | Risk Link |
|----------|-------|--------------|--------------|-----------|
| Functional | {count} | ✅ 100% | ✅ 100% | {percentage}% |
| Non-Functional | {count} | ✅ 100% | ✅ 100% | {percentage}% |
| Regulatory | {count} | ✅ 100% | ✅ 100% | {percentage}% |
| Safety | {count} | ✅ 100% | ✅ 100% | ✅ 100% |

**Exigences sans risk link (acceptable si Class A):**
{list_of_unlinked_requirements}

**Prêt pour traçabilité vers Architecture et Tests:** ✅"

### 4. PM Approval Request

"**[John] Validation du PRD enrichi:**

John, en tant que Product Manager et propriétaire du PRD, merci de valider :

1. **Contenu préservé:** Le PRD original n'a pas été modifié négativement
2. **Regulatory sections:** Les nouvelles sections réglementaires sont correctes
3. **ID conversion:** Les nouveaux IDs sont acceptables
4. **Safety classes:** Les attributions de classe sont appropriées

**Résumé des modifications:**
- Sections ajoutées: 4
- Exigences ajoutées: {count}
- Exigences modifiées (ID/class): {count}

**Approuvez-vous ces modifications ?**

**[APPROVE]** Approuver et finaliser
**[REVISE]** Demander des modifications"

### 5. Save Enriched PRD

Upon approval:
"**Sauvegarde du PRD enrichi:**

- Original: `{planning_artifacts}/prd.backup-{timestamp}.md` (préservé)
- Enriched: `{planning_artifacts}/prd.md` (mis à jour)

**PRD enrichi sauvegardé avec succès.**

**Statistiques finales:**

| Métrique | Avant | Après |
|----------|-------|-------|
| Total Requirements | {before} | {after} |
| Traceable IDs | {before_percentage}% | 100% |
| With Safety Class | {before_percentage}% | 100% |
| Regulatory Sections | 0 | 4 |"

### 6. Update Related Documents

"**Mise à jour des documents connexes:**

**Regulatory Context updated:**
- `_bmad/_memory/bmmd/regulatory-context.md`
  - PRD enrichment completed: ✅
  - Date: {date}

**Risk Register updated:**
- `_bmad/_memory/bmmd/risk-register.md`
  - {count} requirements linked to risks

**Traceability ready for:**
- Architecture document
- Epic/Story breakdown
- Test specifications"

### 7. Present Final Summary

"**Enrichissement PRD complété pour {project_name}**

**Résumé:**

| Métrique | Valeur |
|----------|--------|
| Version PRD | v{new_version} |
| Exigences totales | {count} |
| Exigences réglementaires | {count} |
| Traçabilité | 100% |
| Approuvé par | John (PM) |

**Sections ajoutées:**
- ✅ Regulatory Context (Intended Use, Classification)
- ✅ Regulatory Requirements
- ✅ Patient Data Constraints

**Enrichissements:**
- ✅ IDs traçables (REQ-xxx format)
- ✅ Classes de sécurité (A/B/C)
- ✅ Liaison aux risques

**Documents mis à jour:**
- ✅ `{planning_artifacts}/prd.md`
- ✅ `_bmad/_memory/bmmd/regulatory-context.md`

**Prochaines étapes:**
1. 🏗️ Mettre à jour l'Architecture avec les nouvelles exigences
2. 📋 Créer les Epics/Stories avec traçabilité
3. ✅ Story Regulatory Gate pour chaque story

**Le PRD est maintenant conforme aux exigences IEC 62304.**"

## SUCCESS METRICS:

✅ All enrichments verified
✅ Metadata updated
✅ Traceability complete
✅ PM approval obtained
✅ PRD saved successfully

## FAILURE MODES:

❌ Missing PM approval
❌ Incomplete traceability
❌ Metadata not updated
❌ Backup lost

## WORKFLOW COMPLETE

This workflow is now complete. The enriched PRD should be used for:
1. Architecture updates
2. Epic and Story creation
3. Test specification with traceability
