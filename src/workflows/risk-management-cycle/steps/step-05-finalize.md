# Step 5: Risk Management Finalization

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER finalize without verification plan
- ✅ All controls must have verification methods
- 📋 DOCUMENT production and post-market activities
- 💬 La gestion des risques est un processus continu
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Define verification activities for all controls
- 📖 Plan post-market risk activities
- 💾 Finalize Risk Management File
- 🚫 FORBIDDEN to close without verification plan

## YOUR TASK:

Finalize the risk management cycle by defining verification activities and post-market surveillance requirements.

## FINALIZATION SEQUENCE:

### 1. Control Verification Planning

For each control, define verification:

"**Plan de vérification des contrôles:**

Chaque contrôle doit être vérifié pour confirmer son efficacité.

| CTRL ID | Control | Verification Method | Test ID | Owner | Status |
|---------|---------|-------------------|---------|-------|--------|
| CTRL-001 | {control} | {method} | TST-{xxx} | {owner} | ⏳ |
| CTRL-002 | {control} | {method} | TST-{xxx} | {owner} | ⏳ |
| ... | ... | ... | ... | ... | ... |

**Types de vérification:**
- **Test unitaire** : Vérification au niveau code
- **Test d'intégration** : Vérification des interfaces
- **Test système** : Vérification end-to-end
- **Revue de conception** : Vérification par inspection
- **Validation clinique** : Vérification en conditions réelles

Pour chaque contrôle, un test ou une revue doit être défini."

### 2. Risk-Related Requirements Summary

Compile requirements from risk analysis:

"**Exigences issues de l'analyse de risques:**

Les contrôles définis génèrent des exigences à intégrer :

**Exigences de sécurité (Safety):**
| REQ ID | Description | Source | Priority |
|--------|-------------|--------|----------|
| REQ-SAF-001 | {requirement} | RISK-001 | Critical |
| REQ-SAF-002 | {requirement} | RISK-002 | High |
| ... | ... | ... | ... |

**Exigences de cybersécurité (Security):**
| REQ ID | Description | Source | Priority |
|--------|-------------|--------|----------|
| REQ-SEC-001 | {requirement} | RISK-{x} | Critical |
| ... | ... | ... | ... |

**Exigences d'information utilisateur (IFU):**
| REQ ID | Description | Source |
|--------|-------------|--------|
| REQ-IFU-001 | {warning_or_instruction} | RISK-{x} |
| ... | ... | ... |

Ces exigences doivent être ajoutées au PRD ou à l'Architecture."

### 3. Post-Market Surveillance Plan

Define post-market activities:

"**Plan de surveillance post-market (ISO 14971, Clause 9)**

La gestion des risques continue après mise sur le marché :

**Activités de surveillance:**

1. **Collecte d'informations:**
   - Feedback utilisateurs (plaintes, suggestions)
   - Événements indésirables (adverse events)
   - Literature scientifique
   - Données d'utilisation (si applicable)

2. **Analyse des informations:**
   - Nouveaux dangers non identifiés ?
   - Fréquence des événements vs. estimation initiale ?
   - Efficacité des contrôles confirmée ?

3. **Actions correctives:**
   - Critères de déclenchement d'une revue
   - Processus de mise à jour du Risk Register
   - Communication réglementaire (vigilance)

**Indicateurs de surveillance:**

| Indicateur | Seuil | Action |
|------------|-------|--------|
| Adverse events | > {threshold} | Revue risques |
| Complaints related to {hazard} | > {threshold} | Revue contrôle |
| ... | ... | ... |

**Fréquence de revue:** {quarterly/annually/per_release}"

### 4. Finalize Risk Management File

Complete the Risk Management File structure:

"**Contenu du Risk Management File (ISO 14971, Clause 3.10)**

Le Risk Management File pour **{project_name}** contient :

```
docs/regulatory/risk-management/
├── risk-management-plan.md
├── risk-analysis.md (FMEA)
├── risk-evaluation.md
├── risk-control.md
├── residual-risk-evaluation.md
├── risk-management-report.md
└── _bmad/_memory/bmmd/risk-register.md (living document)
```

**Documents générés/mis à jour dans ce cycle:**

| Document | Statut | Location |
|----------|--------|----------|
| Risk Register | ✅ Updated | `_bmad/_memory/bmmd/risk-register.md` |
| Risk Analysis (FMEA) | ✅ Created | `docs/regulatory/risk-analysis.md` |
| Residual Risk Evaluation | ✅ Created | Included in risk-analysis.md |

**Documents à créer séparément:**
- [ ] Risk Management Plan (template disponible)
- [ ] Risk Management Report (à la release)"

### 5. Update Risk Register Status

Finalize the Risk Register:

```markdown
## Risk Register Update — {date}

### Cycle Summary

| Metric | Value |
|--------|-------|
| Cycle Type | {Initial/Update/Review} |
| Risks Added | {count} |
| Risks Modified | {count} |
| Controls Added | {count} |
| Overall Status | {Acceptable/Conditional} |

### Open Actions

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Verify CTRL-001 | {owner} | {date} | ⏳ |
| Add REQ-SAF-001 to PRD | PM | {date} | ⏳ |
| ... | ... | ... | ... |

### Next Review

**Trigger:** {next_release/major_change/scheduled_date}
**Scheduled:** {date_if_applicable}
```

### 6. Present Final Summary

"**Cycle de gestion des risques complété pour {project_name}**

**Résumé du cycle:**

| Métrique | Valeur |
|----------|--------|
| Risques identifiés | {count} |
| Contrôles définis | {count} |
| Risque résiduel global | {level} |
| Décision d'acceptabilité | {decision} |

**Documents mis à jour:**
- ✅ Risk Register (`_bmad/_memory/bmmd/risk-register.md`)
- ✅ Risk Analysis (`docs/regulatory/risk-analysis.md`)
- ✅ Regulatory Context (`_bmad/_memory/bmmd/regulatory-context.md`)

**Actions de suivi:**

| # | Action | Owner | Priority |
|---|--------|-------|----------|
| 1 | Vérifier les contrôles (tests) | QA | High |
| 2 | Intégrer REQ-SAF au PRD | PM | High |
| 3 | Mettre à jour Architecture | Architect | Medium |

**Prochaines étapes recommandées:**
1. 🏗️ Architecture Safety Review → @architect + @cybersec-officer
2. 📋 PRD Regulatory Enrichment → @pm /prd-md
3. ✅ Story Regulatory Gate (à chaque story) → @quality-manager

**Le Phase Gate R2 peut maintenant évaluer la partie risques.**"

## SUCCESS METRICS:

✅ All controls have verification methods defined
✅ Risk-related requirements documented
✅ Post-market surveillance planned
✅ Risk Register finalized
✅ Clear follow-up actions identified

## FAILURE MODES:

❌ Controls without verification plan
❌ Missing post-market surveillance
❌ Requirements not extracted
❌ Actions not assigned

## WORKFLOW COMPLETE

This workflow cycle is complete. The Risk Register remains a living document that will be updated:
- When new risks are identified
- When controls are verified
- At each phase gate review
- Post-market as new information emerges
