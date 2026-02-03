# Regulatory Addendum — Story [STORY-ID]

> **Epic**: [EPIC-ID]
> **Safety Class**: [A / B / C]
> **Class Rationale**: [Inherited from most critical REQ]

---

## Requirements Traced

| REQ ID | Description | Safety Class | Type |
|--------|-------------|-------------|------|
| REQ-XXX-001 | [description] | [A/B/C] | [Functional/Performance/Safety/Interface] |
| REQ-XXX-002 | [description] | [A/B/C] | [Functional/Performance/Safety/Interface] |

## Risks Associated

| RISK ID | Hazard | Severity | Current RPN | Expected Control |
|---------|--------|----------|-------------|------------------|
| RISK-XXX-001 | [description] | [1-5] | [value] | [control measure] |

## Verification Requirements

### If Safety Class C:
- [ ] Unit tests with coverage ≥ 90%
- [ ] Branch coverage ≥ 85%
- [ ] Integration tests
- [ ] Static analysis (mypy --strict, ruff, bandit)
- [ ] Formal code review — documented with reviewer name and date
- [ ] Traceability matrix updated

### If Safety Class B:
- [ ] Unit tests with coverage ≥ 80%
- [ ] Code review — documented
- [ ] Traceability matrix updated

### If Safety Class A:
- [ ] Unit tests (recommended)
- [ ] Traceability matrix updated

## SOUP Impact

- [ ] No new dependencies introduced
- [ ] New dependency: [name] v[version] — added to SOUP list: [ ] Yes / [ ] No

## Data Protection Impact

- [ ] This story does NOT involve patient data
- [ ] This story involves patient data — measures: [describe]

## AI-Assisted Development Notes

- [ ] Code was NOT AI-assisted
- [ ] Code was AI-assisted — modules: [list modules]
  - Commits tagged [AI-ASSISTED]: [ ] Yes
  - Human reviewer: [name]
  - Review focus areas: [specific concerns for AI-generated code]

## Pre-Implementation Approval

- [ ] Regulatory addendum reviewed by Quality Manager
- [ ] Story approved for implementation

**Approved by**: _________________ **Date**: ___________
