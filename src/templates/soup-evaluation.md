# SOUP Evaluation Record

> **SOUP ID**: SOUP-[NNN]
> **Date**: [YYYY-MM-DD]
> **Evaluator**: [Name]

---

## Identification

| Field | Value |
|-------|-------|
| **Library Name** | [e.g., NumPy] |
| **Version** | [e.g., 1.26.4] |
| **License** | [e.g., BSD-3-Clause] |
| **Source** | [e.g., PyPI, GitHub URL] |
| **Purpose in System** | [How it's used in the SaMD] |

## Safety Classification

| Field | Value |
|-------|-------|
| **Software Items using this SOUP** | [List of modules] |
| **Inherited Safety Class** | [A / B / C] |
| **Justification** | [Why this class] |

## Risk Assessment

### Known Anomalies (IEC 62304 §8.1.2)

| CVE / Issue | Severity | Impact on SaMD | Mitigation |
|-------------|----------|----------------|------------|
| [CVE-XXXX-XXXXX] | [CVSS score] | [Does it affect our usage?] | [How mitigated] |
| [Known issue] | [severity] | [impact] | [mitigation] |

### Functional Risks

| Risk | Probability | Severity | Mitigation |
|------|-------------|----------|------------|
| Incorrect computation | [1-5] | [1-5] | [Tests covering our usage] |
| Version incompatibility | [1-5] | [1-5] | [Version pinning + CI] |

## Evaluation Criteria

- [ ] **Maturity**: Library is mature and widely used
- [ ] **Active maintenance**: Last commit within [6 months / 1 year]
- [ ] **Community**: Sufficient community support and documentation
- [ ] **Test coverage**: Library has its own test suite
- [ ] **License compatibility**: License is compatible with our distribution
- [ ] **No critical CVEs**: No unpatched critical CVEs affecting our usage
- [ ] **Reproducible build**: Version is pinned and available

## Verification Plan

| Verification Method | Description | Test Reference |
|---------------------|-------------|----------------|
| Integration test | [What we test] | TEST-XXX |
| Regression test | [What we check on update] | TEST-YYY |

## Monitoring Plan

- **CVE monitoring frequency**: [Monthly / Quarterly]
- **Update policy**: [When do we update — security patches vs feature updates]
- **Monitoring tool**: [e.g., pip-audit, Dependabot, Snyk]

## Decision

- [ ] **APPROVED** for use in safety class [A/B/C] software items
- [ ] **APPROVED WITH CONDITIONS**: [conditions]
- [ ] **REJECTED**: [reason]

**Evaluator**: _________________ **Date**: ___________
**Approver**: _________________ **Date**: ___________
