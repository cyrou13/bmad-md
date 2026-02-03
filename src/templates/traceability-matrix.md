# Traceability Matrix

> **Document ID**: TM-[PROJECT]-[VERSION]
> **Standard**: IEC 62304:2006+A1:2015
> **Date**: [YYYY-MM-DD]
> **Maintained by**: Quality Manager

---

## Bidirectional Traceability: Requirements ↔ Architecture ↔ Code ↔ Tests ↔ Risks

| REQ ID | Description | Safety Class | ARCH ID | Software Item | Source File(s) | Test ID(s) | RISK ID(s) | Status |
|--------|-------------|-------------|---------|---------------|----------------|------------|------------|--------|
| REQ-XXX-001 | [desc] | C | ARCH-XXX-01 | [module] | `src/module.py` | TEST-XXX-001, TEST-XXX-002 | RISK-XXX-001 | ✅ Verified |
| REQ-XXX-002 | [desc] | B | ARCH-XXX-02 | [module] | `src/module.py` | TEST-XXX-003 | RISK-XXX-002 | ⏳ Pending |
| REQ-XXX-003 | [desc] | A | ARCH-XXX-03 | [module] | `src/utils.py` | TEST-XXX-004 | — | ✅ Verified |

## Risk Control Traceability

| RISK ID | Hazard | Control Measure | Control Type | Implemented In | Verification Test | Verified |
|---------|--------|-----------------|-------------|----------------|-------------------|----------|
| RISK-XXX-001 | [hazard] | [control] | Design/Protective/Info | [file/module] | TEST-XXX-010 | ✅ / ❌ |

## Orphan Analysis

### Requirements without tests (MUST be empty for release)
<!-- Automated check: ci/quality_gates/traceability_check.py -->

| REQ ID | Description | Reason |
|--------|-------------|--------|
| (none) | | |

### Tests without requirements

| Test ID | Description | Action |
|---------|-------------|--------|
| (none) | | |

### Risks without verified controls (MUST be empty for release)

| RISK ID | Hazard | Missing |
|---------|--------|---------|
| (none) | | |

## Coverage Summary

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Requirements with tests | [X/Y] | 100% | ✅ / ❌ |
| Risks with verified controls | [X/Y] | 100% | ✅ / ❌ |
| Architecture items traced | [X/Y] | 100% | ✅ / ❌ |
