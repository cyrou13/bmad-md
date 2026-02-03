# Step 4: IEC 62304 Safety Classification & Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER underestimate safety class
- ✅ IEC 62304 safety class determines documentation rigor
- 📋 DOCUMENT the harm analysis thoroughly
- 💬 La sévérité ne se négocie pas — seule la probabilité peut être réduite
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Apply IEC 62304 safety classification
- 📖 Document harm potential analysis
- 💾 Finalize classification document
- 🚫 FORBIDDEN to downgrade safety class without documented risk controls

## YOUR TASK:

Determine the IEC 62304 Software Safety Classification and finalize all classification documentation.

## IEC 62304 SAFETY CLASSIFICATION SEQUENCE:

### 1. IEC 62304 Framework Overview

Present the framework:
"**Classification de Sécurité IEC 62304**

L'IEC 62304:2006+A1:2015 définit trois classes de sécurité logicielle :

| Classe | Définition | Documentation Requise |
|--------|------------|----------------------|
| **A** | Aucune blessure ou dommage à la santé possible | Minimale |
| **B** | Blessure possible mais NON SÉRIEUSE | Modérée |
| **C** | Décès ou blessure SÉRIEUSE possible | Complète |

**Critères de classification (IEC 62304, 4.3):**

La classification dépend de la **sévérité du harm** que le logiciel pourrait causer :
- Directement (le logiciel cause le harm)
- Indirectement (information incorrecte menant à un harm)

**Important:** La classification initiale se fait SANS considérer les mesures de contrôle des risques."

### 2. Harm Potential Analysis

Walk through harm analysis:
"**Analyse du potentiel de harm pour {project_name}:**

**Question 1:** Le logiciel peut-il contribuer à une situation dangereuse ?
- Directement (action du logiciel)
- Indirectement (information fournie)

**Question 2:** Si une défaillance logicielle survient, quel est le pire scénario réaliste ?

**Scénarios de défaillance à considérer:**
1. Résultat faux positif : {consequence}
2. Résultat faux négatif : {consequence}
3. Indisponibilité du système : {consequence}
4. Données corrompues : {consequence}
5. Cybersecurity breach : {consequence}

**Analyse:**
- Scénario worst-case identifié : {worst_case}
- Sévérité du harm potentiel : {severity}
- Lien avec la classification IMDRF/MDR : {alignment}"

### 3. Determine Safety Class

Apply classification logic:
"**Détermination de la Classe de Sécurité:**

**Arbre de décision IEC 62304:**

```
Le logiciel peut-il contribuer à une situation dangereuse ?
├── Non → Classe A
└── Oui → La situation dangereuse peut-elle causer :
    ├── Décès ou blessure SÉRIEUSE → Classe C
    └── Blessure NON SÉRIEUSE uniquement → Classe B
```

**Pour {project_name}:**

| Question | Réponse | Justification |
|----------|---------|---------------|
| Contribution à situation dangereuse ? | {yes/no} | {rationale} |
| Sévérité maximale du harm ? | {severity} | {rationale} |

**Classe de Sécurité IEC 62304 : {safety_class}**

**Note importante:** Cette classification est établie AVANT mesures de contrôle des risques. Une fois en Classe C, le logiciel reste en Classe C même si des contrôles sont ajoutés."

### 4. Documentation Requirements by Class

Present requirements:
"**Exigences documentaires selon la Classe {safety_class}:**

| Activité IEC 62304 | Classe A | Classe B | Classe C |
|-------------------|----------|----------|----------|
| Software Development Planning | ✓ | ✓ | ✓ |
| Software Requirements Analysis | ✓ | ✓ | ✓ |
| Software Architectural Design | — | ✓ | ✓ |
| Software Detailed Design | — | — | ✓ |
| Software Unit Implementation | ✓ | ✓ | ✓ |
| Software Unit Verification | — | ✓ | ✓ |
| Software Integration Testing | ✓ | ✓ | ✓ |
| Software System Testing | ✓ | ✓ | ✓ |
| Software Release | ✓ | ✓ | ✓ |
| Software Configuration Management | ✓ | ✓ | ✓ |
| Software Problem Resolution | ✓ | ✓ | ✓ |
| Software Maintenance | ✓ | ✓ | ✓ |

**Pour {project_name} (Classe {safety_class}):**
{specific_requirements_based_on_class}"

### 5. Finalize Classification Document

Complete `docs/regulatory/samd-classification.md`:

```markdown
## 5. IEC 62304 Safety Classification

### 5.1 Harm Potential Analysis

**Hazardous Situations:**
{list_of_hazardous_situations}

**Worst-Case Scenario:**
{worst_case_description}

**Severity Assessment:**
- Severity: {severity}
- Rationale: {rationale}

### 5.2 Safety Class Determination

| Criterion | Assessment |
|-----------|------------|
| Contribution to hazardous situation | {yes/no} |
| Potential harm severity | {severity} |
| **IEC 62304 Safety Class** | **{safety_class}** |

**Reference:** IEC 62304:2006+A1:2015, Section 4.3

### 5.3 Documentation Requirements

{table_of_required_activities}

---

## 6. Classification Summary

| Framework | Classification | Implication |
|-----------|---------------|-------------|
| IMDRF | Category {imdrf} | International risk level |
| FDA | Class {fda} | {fda_pathway} required |
| MDR | Class {mdr} | {nb_requirement} |
| IEC 62304 | Class {safety_class} | {documentation_level} documentation |

## 7. Decisions Log

| Date | Decision | Decided By |
|------|----------|------------|
| {date} | IMDRF Category {imdrf} | Dr. Régis + {user_name} |
| {date} | FDA Class {fda} | Dr. Régis + {user_name} |
| {date} | MDR Class {mdr} | Dr. Régis + {user_name} |
| {date} | IEC 62304 Class {safety_class} | Dr. Régis + {user_name} |

---

**Document Status:** Complete
**Next Steps:** Risk Management (risk-management-cycle)
```

Update frontmatter:
- `status: complete`
- `stepsCompleted: [step-01, step-02, step-03, step-04]`

### 6. Update Regulatory Context

Update `_bmad/_memory/bmmd/regulatory-context.md`:

```markdown
## Project Classification

- **Product Name:** {project_name}
- **IMDRF Category:** {imdrf}
- **IEC 62304 Safety Class:** {safety_class}
- **FDA Classification:** Class {fda}
- **MDR Classification:** Class {mdr}
- **Regulatory Pathway:** {pathway}
```

Add to Key Decisions Log.

### 7. Present Final Summary

"**Classification SaMD complétée pour {project_name}**

**Résumé des classifications:**

| Framework | Classification |
|-----------|---------------|
| IMDRF | **Catégorie {imdrf}** |
| FDA | **Classe {fda}** → {pathway} |
| MDR | **Classe {mdr}** → {nb_requirement} |
| IEC 62304 | **Classe {safety_class}** |

**Implications pour le projet:**

1. **Documentation:** Niveau {documentation_level} requis
2. **Pathway FDA:** {fda_pathway}
3. **Organisme Notifié:** {nb_requirement}
4. **Rigueur de développement:** {development_rigor}

**Prochaines étapes recommandées:**
1. ⚠️ Gestion des risques → @risk-manager /risk-cycle
2. 🏗️ Revue architecture safety → @architect + @quality-manager
3. 📋 Enrichissement PRD → @pm /prd-md

**Documents générés:**
- `docs/regulatory/samd-classification.md`
- `_bmad/_memory/bmmd/regulatory-context.md` (mis à jour)

Le Phase Gate R1 peut maintenant être évalué pour la partie classification."

## SUCCESS METRICS:

✅ IEC 62304 safety class determined with harm analysis
✅ Documentation requirements clearly identified
✅ All classifications summarized
✅ Regulatory context updated
✅ Clear next steps provided

## FAILURE MODES:

❌ Underestimating safety class
❌ Not considering indirect harms
❌ Missing documentation requirements
❌ Not updating regulatory-context.md

## WORKFLOW COMPLETE

This workflow is now complete. The user should proceed to:
1. `risk-management-cycle` workflow for ISO 14971 risk management
2. Consider architecture safety review if architecture exists
