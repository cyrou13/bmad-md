# Step 4: Review Finalization & Recommendations

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER close review with critical findings unaddressed
- ✅ All findings must have owners and timelines
- 📋 Link findings to Risk Register
- 💬 Multi-agent consensus required
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Consolidate all findings
- 📖 Generate recommendations
- 💾 Update Risk Register with new risks
- 🚫 FORBIDDEN to close with unassigned critical findings

## YOUR TASK:

Finalize the architecture safety review with consolidated findings, recommendations, and risk integration.

## FINALIZATION SEQUENCE:

### 1. Consolidate All Findings

"**Consolidation des findings de la revue**

**Findings IEC 62304 (Quentin):**
{count} findings — {critical}/{major}/{minor}

**Findings Cybersecurity (SecureMax):**
{count} findings — {critical}/{high}/{medium}/{low}

**Findings Architecture (Winston):**
{count} findings — {critical}/{major}/{minor}

**Total consolidé:**

| # | Source | Finding | Severity | Category |
|---|--------|---------|----------|----------|
| F-001 | IEC 62304 | {finding} | {severity} | {category} |
| F-002 | Security | {finding} | {severity} | {category} |
| F-003 | Architecture | {finding} | {severity} | {category} |

**Par sévérité:**
- 🔴 Critical: {count}
- 🟠 High/Major: {count}
- 🟡 Medium/Minor: {count}
- 🟢 Low/Info: {count}"

### 2. Link to Risk Register

"**[Dr. Hana] Intégration au Risk Register**

**Nouveaux risques identifiés:**

| Finding | New Risk ID | Hazard | Severity | Link |
|---------|-------------|--------|----------|------|
| F-001 | RISK-{new} | {hazard} | {severity} | Added |
| F-002 | RISK-{existing} | {hazard} | — | Updated |

**Risques existants impactés:**

| Risk ID | Impact | Update Required |
|---------|--------|-----------------|
| RISK-{xxx} | Control inadequate | Add control |
| RISK-{yyy} | New failure mode | Re-evaluate |

**Action:** {count} nouveaux risques ajoutés au Risk Register
**Action:** {count} risques existants mis à jour"

### 3. Generate Recommendations

"**Recommandations de la revue**

**Recommandations critiques (blocantes):**

| # | Recommendation | Finding | Owner | Priority |
|---|----------------|---------|-------|----------|
| R-001 | {recommendation} | F-{xxx} | {owner} | Critical |
| R-002 | {recommendation} | F-{xxx} | {owner} | Critical |

**Recommandations majeures (avant release):**

| # | Recommendation | Finding | Owner | Priority |
|---|----------------|---------|-------|----------|
| R-003 | {recommendation} | F-{xxx} | {owner} | High |
| R-004 | {recommendation} | F-{xxx} | {owner} | High |

**Recommandations d'amélioration (souhaitables):**

| # | Recommendation | Finding | Owner | Priority |
|---|----------------|---------|-------|----------|
| R-005 | {recommendation} | F-{xxx} | {owner} | Medium |

**Bonnes pratiques observées:**
{list_of_good_practices}"

### 4. Review Verdict

"**Verdict de la revue**

**Équipe de revue:**
- 🏗️ Winston (Architect): {approve/conditional/reject}
- ✅ Quentin (Quality): {approve/conditional/reject}
- 🔒 SecureMax (Security): {approve/conditional/reject}
- ⚠️ Dr. Hana (Risk): {approve/conditional/reject}

**Verdict consolidé:**

**[ ] APPROVED** — Architecture conforme, peut procéder
- Aucun finding critique
- Tous les findings majeurs ont un plan de résolution

**[ ] CONDITIONALLY APPROVED** — Peut procéder avec conditions
- Conditions: {list_conditions}
- Findings critiques doivent être résolus avant: {milestone}

**[ ] NOT APPROVED** — Révision requise
- Findings critiques non résolus
- Re-revue requise après corrections

**Sélectionnez le verdict approprié:**"

### 5. Action Items Assignment

"**Assignation des actions:**

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| A-001 | Résoudre F-001 ({finding}) | {owner} | {date} | ⏳ Open |
| A-002 | Résoudre F-002 ({finding}) | {owner} | {date} | ⏳ Open |
| A-003 | Mettre à jour Risk Register | Dr. Hana | {date} | ⏳ Open |
| A-004 | Générer SBOM | SecureMax | {date} | ⏳ Open |

**Conditions de clôture:**
- Tous les findings critiques résolus et vérifiés
- Risk Register mis à jour
- Re-revue si modifications architecturales majeures"

### 6. Finalize Review Document

Complete `docs/regulatory/architecture-safety-review.md`:

```markdown
## 8. Findings Summary

### 8.1 All Findings
{consolidated_findings_table}

### 8.2 Risk Register Updates
- New risks added: {count}
- Existing risks updated: {count}

## 9. Recommendations

### 9.1 Critical Recommendations
{critical_recommendations}

### 9.2 Major Recommendations
{major_recommendations}

### 9.3 Improvement Recommendations
{improvement_recommendations}

## 10. Review Verdict

**Verdict:** {APPROVED/CONDITIONAL/NOT_APPROVED}
**Conditions:** {if_conditional}
**Re-review required:** {yes/no}

### 10.1 Reviewer Sign-off

| Reviewer | Role | Verdict | Date |
|----------|------|---------|------|
| Winston | Architect | {verdict} | {date} |
| Quentin | Quality | {verdict} | {date} |
| SecureMax | Security | {verdict} | {date} |
| Dr. Hana | Risk | {verdict} | {date} |

## 11. Action Items

{action_items_table}

---

**Review Status:** Complete
**Next Review:** {trigger_conditions}
```

Update frontmatter:
- `status: complete`
- `verdict: {verdict}`
- `stepsCompleted: [step-01, step-02, step-03, step-04]`

### 7. Update Risk Register

Update `_bmad/_memory/bmmd/risk-register.md`:
- Add new risks identified
- Update existing risks with new controls
- Log the review in Recently Added/Modified

### 8. Present Final Summary

"**Revue de sécurité de l'architecture complétée**

**Résumé pour {project_name}:**

| Métrique | Valeur |
|----------|--------|
| Findings total | {count} |
| Findings critiques | {count} |
| Nouveaux risques | {count} |
| Recommandations | {count} |

**Verdict:** **{verdict}**
{conditions_if_any}

**Documents mis à jour:**
- ✅ `docs/regulatory/architecture-safety-review.md`
- ✅ `_bmad/_memory/bmmd/risk-register.md`

**Actions requises:** {count} actions assignées

**Prochaines étapes:**
1. Résoudre les findings critiques
2. Implémenter les recommandations prioritaires
3. {Re-revue si required}

**Le Phase Gate R2 peut maintenant évaluer cette revue.**"

## SUCCESS METRICS:

✅ All findings consolidated
✅ Risks integrated to Risk Register
✅ Recommendations generated
✅ Verdict rendered
✅ Actions assigned with owners

## FAILURE MODES:

❌ Critical findings without resolution plan
❌ Risks not added to register
❌ Actions without owners
❌ Missing reviewer sign-off

## WORKFLOW COMPLETE

This workflow is now complete. The architecture safety review should be repeated:
- After significant architectural changes
- Before each phase gate
- When new security vulnerabilities are discovered
