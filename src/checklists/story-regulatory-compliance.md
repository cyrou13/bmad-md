# Checklist: Story Regulatory Compliance

> **Agent**: Quality Manager (Quentin)
> **Trigger**: `/story-check`
> **Usage**: Applied before AND after story implementation

---

## Pre-Implementation Checks

### Regulatory Addendum Completeness
- [ ] Story has a completed regulatory addendum
- [ ] Requirements (REQ-XXX) are listed and traceable to PRD
- [ ] Safety class is determined and justified
- [ ] Risks (RISK-XXX) are identified with expected controls
- [ ] Verification criteria are defined per safety class
- [ ] SOUP impact is evaluated (new dependencies?)
- [ ] No patient data required for implementation or testing

### Readiness
- [ ] All dependency stories are completed
- [ ] Architecture for this scope is reviewed and approved
- [ ] Risk controls for related hazards are defined
- [ ] Test approach is aligned with TEA's test strategy

---

## Post-Implementation Checks

### Code Quality
- [ ] Code conforms to BMAD-MD Dev rules
- [ ] Commits tagged [AI-ASSISTED] where applicable
- [ ] Human reviewer identified in commit messages
- [ ] Static analysis passes (mypy --strict, ruff, bandit)
- [ ] No hardcoded clinical thresholds — all from config/
- [ ] Physical units documented in docstrings
- [ ] Exception handling: no silent failures

### Test Coverage
- [ ] Tests co-generated with code
- [ ] Coverage meets class threshold (≥90% Class C, ≥80% Class B)
- [ ] Tests have pytest markers: @requirement, @safety_class, @risk
- [ ] Integration tests exist for cross-module interfaces
- [ ] No patient data in test fixtures

### Documentation
- [ ] Docstrings complete with REQ-XXX references
- [ ] CHANGELOG updated if applicable

### Traceability
- [ ] Traceability matrix updated: CODE and TEST columns filled
- [ ] Risk controls implemented and test-verified
- [ ] No orphan requirements introduced
- [ ] No orphan risks introduced

---

## Decision

- [ ] **PASS** — Story meets all regulatory requirements
- [ ] **CONDITIONAL PASS** — Minor items to address: [list]
- [ ] **FAIL** — Blocking issues: [list]

**Reviewed by**: _________________ **Date**: ___________
