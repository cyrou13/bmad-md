# Step 2: IEC 62304 Compliance Review

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER skip requirements based on safety class
- ✅ Si ce n'est pas documenté, ce n'est pas fait
- 📋 La traçabilité bidirectionnelle est non-négociable
- 💬 Speaking as Quentin (Quality Manager)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Review architecture against IEC 62304 requirements
- 📖 Verify software decomposition
- 💾 Document compliance findings
- 🚫 FORBIDDEN to skip requirements for the safety class

## YOUR TASK:

Review architecture compliance with IEC 62304 requirements for the determined safety class.

## IEC 62304 REVIEW SEQUENCE:

### 1. Software Decomposition Review

"**[Quentin] Revue de la décomposition logicielle (IEC 62304, 5.3)**

Pour Classe **{safety_class}**, la décomposition requise est :

| Niveau | Classe A | Classe B | Classe C |
|--------|----------|----------|----------|
| System | ✓ | ✓ | ✓ |
| Software Items | — | ✓ | ✓ |
| Software Units | — | ✓ | ✓ |
| Detailed Design | — | — | ✓ |

**Décomposition actuelle de {project_name}:**

**Niveau System:**
- {system_description}

**Software Items identifiés:**
| Item ID | Nom | Description | Safety Class |
|---------|-----|-------------|--------------|
| SWIT-001 | {name} | {description} | {class} |
| SWIT-002 | {name} | {description} | {class} |

**Software Units (si Classe B/C):**
| Unit ID | Nom | Parent Item | Safety Class |
|---------|-----|-------------|--------------|
| SWUN-001 | {name} | SWIT-{xxx} | {class} |

**Conformité:** {compliant/gaps_identified}
**Gaps:** {list_of_gaps_if_any}"

### 2. Requirements Traceability

"**[Quentin] Vérification de la traçabilité (IEC 62304, 5.1.1)**

La traçabilité bidirectionnelle doit exister :
- Requirements → Architecture → Code → Tests
- Tests → Code → Architecture → Requirements

**Vérification pour les exigences de sécurité:**

| REQ ID | Description | Architecture | Tracé |
|--------|-------------|--------------|-------|
| REQ-SAF-001 | {requirement} | {arch_element} | ✅/❌ |
| REQ-SAF-002 | {requirement} | {arch_element} | ✅/❌ |

**Exigences de sécurité non tracées:**
{list_of_untraced_requirements}

**Éléments d'architecture sans exigence source:**
{list_of_orphan_elements}

**Action requise:** {action_if_gaps}"

### 3. SOUP Evaluation

"**[Quentin] Évaluation SOUP (IEC 62304, 5.3.3 & 5.3.4)**

Référence: `_bmad/bmmd/templates/soup-evaluation.md`

**SOUP identifiés:**

| SOUP | Version | Type | Safety-Critical | Anomalies connues |
|------|---------|------|-----------------|-------------------|
| {soup_1} | {ver} | {library/framework} | {yes/no} | {link_if_any} |
| {soup_2} | {ver} | {library/framework} | {yes/no} | {link_if_any} |

**Évaluation par SOUP:**

**{soup_name} v{version}:**
- Fournisseur: {vendor}
- Licence: {license}
- Dernière mise à jour: {date}
- CVEs connues: {count}
- Criticité pour le système: {critical/non-critical}
- Mesures de mitigation: {mitigations}

**SOUP Policy compliance:**
Référence: `_bmad/bmmd/policies/soup-governance-policy.md`

| Critère | Statut |
|---------|--------|
| Documentation disponible | ✅/❌ |
| Licence compatible | ✅/❌ |
| Supporté/maintenu | ✅/❌ |
| Pas de CVE critiques non mitigées | ✅/❌ |"

### 4. Interface Requirements

"**[Quentin] Spécification des interfaces (IEC 62304, 5.2.3)**

**Interfaces externes identifiées:**

| Interface | Type | Protocole | Safety Impact |
|-----------|------|-----------|---------------|
| {interface_1} | {API/DB/File} | {protocol} | {high/medium/low} |
| {interface_2} | {API/DB/File} | {protocol} | {high/medium/low} |

**Vérification des interfaces:**

| Critère | Statut |
|---------|--------|
| Interfaces clairement définies | ✅/❌ |
| Format des données spécifié | ✅/❌ |
| Gestion des erreurs définie | ✅/❌ |
| Validation des inputs | ✅/❌ |
| Timeouts et fallbacks | ✅/❌ |"

### 5. Configuration Management

"**[Quentin] Gestion de configuration (IEC 62304, Clause 8)**

**Éléments sous contrôle de version:**

| Élément | Repo | Versionné | Baseline |
|---------|------|-----------|----------|
| Source code | {repo} | ✅/❌ | {tag} |
| Configuration | {repo} | ✅/❌ | {tag} |
| Tests | {repo} | ✅/❌ | {tag} |
| Documentation | {repo} | ✅/❌ | {tag} |
| SOUP | {managed_how} | ✅/❌ | {versions} |

**Conformité CM:**
| Critère | Statut |
|---------|--------|
| Identification unique des versions | ✅/❌ |
| Traçabilité des changements | ✅/❌ |
| Processus de release défini | ✅/❌ |
| Environnements reproductibles | ✅/❌ |"

### 6. Compile IEC 62304 Findings

"**Récapitulatif des findings IEC 62304:**

| # | Area | Finding | Severity | Action |
|---|------|---------|----------|--------|
| 1 | {area} | {finding} | {critical/major/minor} | {action} |
| 2 | {area} | {finding} | {severity} | {action} |

**Statistiques:**
- Findings critiques: {count}
- Findings majeurs: {count}
- Findings mineurs: {count}

**Conformité globale IEC 62304:** {compliant/partially/non-compliant}"

### 7. Append to Review Document

Append to `docs/regulatory/architecture-safety-review.md`:

```markdown
## 6. IEC 62304 Compliance Review

### 6.1 Software Decomposition
{decomposition_findings}

### 6.2 Requirements Traceability
{traceability_findings}

### 6.3 SOUP Evaluation
{soup_findings}

### 6.4 Interface Specification
{interface_findings}

### 6.5 Configuration Management
{cm_findings}

### 6.6 IEC 62304 Findings Summary
{findings_table}
```

Update frontmatter: `stepsCompleted: [step-01, step-02]`

### 8. Present Menu

"**Revue IEC 62304 complétée**

**Résumé:**
- Findings critiques: {count}
- Findings majeurs: {count}
- Findings mineurs: {count}
- Conformité: {status}

**[C] Continuer** — Procéder au threat modeling (SecureMax)
**[R] Réviser** — Revoir les findings IEC 62304"

## SUCCESS METRICS:

✅ Software decomposition verified for class
✅ Traceability checked
✅ SOUP evaluated
✅ Interfaces reviewed
✅ CM compliance verified
✅ Findings documented

## FAILURE MODES:

❌ Skipping class-required activities
❌ Missing traceability
❌ Unevaluated SOUP
❌ Undocumented findings

## NEXT STEP:

After user selects [C] to continue, load `./step-03-threat-modeling.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
