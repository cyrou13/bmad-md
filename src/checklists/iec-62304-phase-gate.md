# IEC 62304 Phase Gate Checklist

> **Agent**: Quality Manager (Quentin)
> **Trigger**: `/phase-gate`
> **Usage**: Execute at each phase transition

---

## Select Phase Gate

Choose the applicable gate:
1. [ ] Development Planning (§5.1)
2. [ ] Requirements Analysis (§5.2)
3. [ ] Architectural Design (§5.3)
4. [ ] Detailed Design (§5.4)
5. [ ] Unit Implementation & Verification (§5.5)
6. [ ] Integration Testing (§5.6)
7. [ ] System Testing (§5.7)
8. [ ] Release (§5.8)

---

## §5.1 — Software Development Planning

- [ ] Software Development Plan (SDP) documented
- [ ] Safety class determined (A/B/C) with justification
- [ ] Applicable standards and regulations listed
- [ ] Development tools identified (including AI tools with mitigation strategy)
- [ ] Configuration management strategy defined
- [ ] Verification and validation strategy defined
- [ ] Roles and responsibilities assigned
- [ ] Phase transition criteria defined
- [ ] SDP reviewed and approved

## §5.2 — Software Requirements Analysis

- [ ] Software Requirements Specification (SRS) complete
- [ ] Each requirement has a unique ID (REQ-XXX)
- [ ] Each requirement has a safety class (inherited or explicit)
- [ ] Verification criteria defined for each requirement
- [ ] Requirements linked to risk controls (ISO 14971)
- [ ] Requirements include: functional, performance, interface, safety
- [ ] Requirements reviewed and approved
- [ ] Traceability to user needs established

## §5.3 — Software Architectural Design

- [ ] Software Architecture Document (SAD) complete
- [ ] System decomposed into Software Items
- [ ] Each Software Item has inherited safety class
- [ ] Interfaces between items documented
- [ ] SOUP identified and evaluated
- [ ] Data flows documented (including patient data protection points)
- [ ] Architecture reviewed and approved
- [ ] Traceability: REQ → ARCH established

## §5.4 — Software Detailed Design

- [ ] Detailed design documented for Class C items
- [ ] Algorithms and data structures specified
- [ ] Clinical thresholds sourced from config/ with references
- [ ] Error handling strategy defined
- [ ] Detailed design reviewed (Class B: informal, Class C: formal)

## §5.5 — Unit Implementation & Verification

- [ ] Code implemented per detailed design
- [ ] Coding standards followed (linting, type checking)
- [ ] Unit tests written and passing
- [ ] Code coverage meets thresholds (≥90% Class C, ≥80% Class B)
- [ ] Static analysis completed (SAST)
- [ ] Unit verification documented
- [ ] AI-assisted code properly tagged and reviewed

## §5.6 — Software Integration Testing

*Applicable to Class B and C*

- [ ] Integration test plan executed
- [ ] Interfaces between Software Items verified
- [ ] SOUP integration verified
- [ ] Data flow integrity confirmed
- [ ] Integration test results documented
- [ ] Anomalies resolved or documented

## §5.7 — Software System Testing

- [ ] System test plan executed
- [ ] End-to-end functional tests passing
- [ ] Performance tests within specification
- [ ] Robustness tests (edge cases, corrupted data)
- [ ] Cybersecurity tests executed
- [ ] System test results documented

## §5.8 — Software Release

- [ ] All previous phase gates passed
- [ ] Traceability matrix complete — no orphans
- [ ] Risk Management Report finalized (ISO 14971)
- [ ] Residual risk acceptable
- [ ] Clinical Evaluation Report current
- [ ] SOUP list audited — no critical CVEs
- [ ] Version tagged and signed
- [ ] Release notes and CHANGELOG updated
- [ ] IFU finalized
- [ ] All approvals obtained

---

## Gate Decision

- [ ] **PASS** — Proceed to next phase
- [ ] **CONDITIONAL PASS** — Proceed with open items: [list with due dates]
- [ ] **FAIL** — Return to current phase: [blocking issues]

**Gate reviewed by**: _________________ **Date**: ___________
**Decision approved by**: _________________ **Date**: ___________
