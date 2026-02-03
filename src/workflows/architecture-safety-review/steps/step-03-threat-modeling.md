# Step 3: Threat Modeling & Cybersecurity Review

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 Les données patient sont la cible #1
- ✅ Chaque SOUP est une surface d'attaque potentielle
- 📋 Le SBOM doit être à jour et vérifiable
- 💬 Speaking as SecureMax (Cybersecurity Officer)
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your communication style with the config `{communication_language}`

## EXECUTION PROTOCOLS:

- 🎯 Perform STRIDE threat modeling
- 📖 Analyze attack surface
- 💾 Document security findings
- 🚫 FORBIDDEN to ignore data protection requirements

## YOUR TASK:

Conduct threat modeling using STRIDE methodology and analyze the security posture.

## THREAT MODELING SEQUENCE:

### 1. STRIDE Threat Modeling

"**[SecureMax] Threat Modeling STRIDE**

STRIDE = Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege

**Pour chaque composant/interface de {project_name}:**

### Component: {component_name}

| Threat | Description | Likelihood | Impact | Risk |
|--------|-------------|------------|--------|------|
| **S** Spoofing | {threat_description} | {L/M/H} | {L/M/H} | {score} |
| **T** Tampering | {threat_description} | {L/M/H} | {L/M/H} | {score} |
| **R** Repudiation | {threat_description} | {L/M/H} | {L/M/H} | {score} |
| **I** Info Disclosure | {threat_description} | {L/M/H} | {L/M/H} | {score} |
| **D** Denial of Service | {threat_description} | {L/M/H} | {L/M/H} | {score} |
| **E** Elevation | {threat_description} | {L/M/H} | {L/M/H} | {score} |

**Analyse par interface:**
{repeat_for_each_interface}"

### 2. Attack Surface Analysis

"**[SecureMax] Analyse de la surface d'attaque**

**Points d'entrée identifiés:**

| Point d'entrée | Type | Protection actuelle | Vulnérabilités |
|----------------|------|---------------------|----------------|
| API endpoint | REST | {auth_method} | {vulnerabilities} |
| Database | {type} | {encryption} | {vulnerabilities} |
| File upload | HTTP | {validation} | {vulnerabilities} |
| External service | {protocol} | {auth} | {vulnerabilities} |

**Données sensibles:**

| Donnée | Classification | Stockage | Transmission | Protection |
|--------|---------------|----------|--------------|------------|
| Patient data | PHI/PII | {encrypted?} | {TLS?} | {status} |
| Credentials | Secret | {hashed?} | {secure?} | {status} |
| API keys | Secret | {vault?} | {secure?} | {status} |

**Conformité réglementaire:**
- [ ] RGPD/GDPR compliance
- [ ] HIPAA compliance (if US)
- [ ] FDA Cybersecurity Guidance (2023)
- [ ] MDR Annex I Section 17.2"

### 3. SBOM Analysis

"**[SecureMax] Software Bill of Materials (SBOM)**

**Génération SBOM:**
Le SBOM doit être généré et maintenu pour toutes les dépendances.

**Dépendances directes:**

| Package | Version | License | CVEs | Risk |
|---------|---------|---------|------|------|
| {package_1} | {version} | {license} | {cve_count} | {risk} |
| {package_2} | {version} | {license} | {cve_count} | {risk} |

**Dépendances transitives critiques:**
{list_of_critical_transitive_deps}

**Analyse CVE:**

| CVE | Package | Severity | CVSS | Status | Mitigation |
|-----|---------|----------|------|--------|------------|
| CVE-{xxxx} | {package} | {Critical/High/Medium} | {score} | {open/mitigated} | {action} |

**CVEs ouvertes nécessitant action:**
{list_of_unmitigated_cves}"

### 4. Security Controls Evaluation

"**[SecureMax] Évaluation des contrôles de sécurité**

**Authentication & Authorization:**

| Contrôle | Implémenté | Conforme | Notes |
|----------|------------|----------|-------|
| Strong authentication | ✅/❌ | ✅/❌ | {notes} |
| MFA (si requis) | ✅/❌ | ✅/❌ | {notes} |
| Role-based access | ✅/❌ | ✅/❌ | {notes} |
| Session management | ✅/❌ | ✅/❌ | {notes} |

**Data Protection:**

| Contrôle | Implémenté | Conforme | Notes |
|----------|------------|----------|-------|
| Encryption at rest | ✅/❌ | ✅/❌ | {algorithm} |
| Encryption in transit | ✅/❌ | ✅/❌ | {TLS_version} |
| Data minimization | ✅/❌ | ✅/❌ | {notes} |
| Secure deletion | ✅/❌ | ✅/❌ | {notes} |

**Logging & Monitoring:**

| Contrôle | Implémenté | Conforme | Notes |
|----------|------------|----------|-------|
| Audit logging | ✅/❌ | ✅/❌ | {notes} |
| Security monitoring | ✅/❌ | ✅/❌ | {notes} |
| Incident response | ✅/❌ | ✅/❌ | {notes} |"

### 5. FDA Cybersecurity Checklist

"**[SecureMax] Conformité FDA Cybersecurity Guidance (2023)**

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Threat model documented | ✅/❌ | {location} |
| Security risk assessment | ✅/❌ | {location} |
| SBOM provided | ✅/❌ | {location} |
| Vulnerability disclosure | ✅/❌ | {policy} |
| Security testing performed | ✅/❌ | {evidence} |
| Patch management plan | ✅/❌ | {location} |
| End-of-life plan | ✅/❌ | {location} |

**Catégorie Cybersecurity (FDA):**
- [ ] Standard Cyber Device (standard submission)
- [ ] Enhanced Cyber Device (additional documentation)"

### 6. Compile Security Findings

"**Récapitulatif des findings de sécurité:**

| # | Category | Finding | Severity | CVSS | Action |
|---|----------|---------|----------|------|--------|
| 1 | {category} | {finding} | {Critical/High/Med/Low} | {score} | {action} |
| 2 | {category} | {finding} | {severity} | {score} | {action} |

**Statistiques:**
- Findings critiques: {count}
- Findings high: {count}
- Findings medium: {count}
- Findings low: {count}
- CVEs non mitigées: {count}

**Posture de sécurité globale:** {secure/needs_work/insecure}"

### 7. Append to Review Document

Append to `docs/regulatory/architecture-safety-review.md`:

```markdown
## 7. Cybersecurity Review

### 7.1 STRIDE Threat Model
{stride_analysis}

### 7.2 Attack Surface
{attack_surface_analysis}

### 7.3 SBOM Summary
- Direct dependencies: {count}
- Transitive dependencies: {count}
- Open CVEs: {count}

### 7.4 Security Controls
{controls_evaluation}

### 7.5 FDA Cybersecurity Compliance
{fda_checklist}

### 7.6 Security Findings
{findings_table}
```

Update frontmatter: `stepsCompleted: [step-01, step-02, step-03]`

### 8. Present Menu

"**Revue cybersécurité complétée**

**Résumé:**
- Findings critiques: {count}
- CVEs non mitigées: {count}
- Posture: {status}

**[C] Continuer** — Finaliser la revue et générer les recommandations
**[R] Réviser** — Revoir les findings de sécurité"

## SUCCESS METRICS:

✅ STRIDE analysis completed
✅ Attack surface identified
✅ SBOM analyzed
✅ Security controls evaluated
✅ FDA compliance checked
✅ Findings documented

## FAILURE MODES:

❌ Incomplete threat model
❌ Missing SBOM
❌ Unaddressed CVEs
❌ Ignoring regulatory requirements

## NEXT STEP:

After user selects [C] to continue, load `./step-04-finalize.md`.

Remember: Do NOT proceed until user explicitly selects [C]!
