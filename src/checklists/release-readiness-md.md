# Release Readiness Checklist — Medical Device

> **Agent**: Quality Manager (Quentin)
> **Trigger**: `/release-check`
> **Version**: [X.Y.Z]
> **Date**: [YYYY-MM-DD]

---

## Documentation

- [ ] Software Development Plan (SDP) — current and signed
- [ ] Software Requirements Specification (SRS) — all REQ have status
- [ ] Software Architecture Document (SAD) — current
- [ ] Risk Management Report (RMR) — finalized
- [ ] Clinical Evaluation Report (CER) — current
- [ ] SOUP List — audited, no critical CVEs unmitigated
- [ ] Traceability Matrix — complete, no orphans
- [ ] Instructions For Use (IFU) — finalized
- [ ] Cybersecurity documentation — threat model, SBOM current
- [ ] CHANGELOG — regulatory changelog updated

## Verification & Validation

- [ ] All unit tests passing
- [ ] All integration tests passing
- [ ] All system tests passing
- [ ] Code coverage meets thresholds per safety class
- [ ] Static analysis — no critical findings
- [ ] Clinical validation tests executed and documented
- [ ] AI/ML validation complete (if applicable)
- [ ] Performance tests within specification
- [ ] Cybersecurity tests executed

## Risk Management

- [ ] All identified risks have been evaluated
- [ ] All unacceptable risks have control measures
- [ ] All control measures are verified (tested)
- [ ] Residual risk evaluation complete
- [ ] Overall residual risk is acceptable
- [ ] Benefit-risk analysis favorable

## Build & Deployment

- [ ] Reproducible build (Docker, pinned versions)
- [ ] Build artifacts signed (SHA-256 checksums)
- [ ] Git tag created and signed
- [ ] Deployment environment qualified (IQ/OQ/PQ if applicable)
- [ ] Rollback procedure documented

## Regulatory

- [ ] Classification confirmed (no scope change)
- [ ] Regulatory notification required? [ ] Yes → filed / [ ] No
- [ ] Labeling requirements met
- [ ] UDI assigned (if applicable)
- [ ] Technical documentation package ready

## Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Lead Developer | | | |
| Quality Manager | | | |
| Risk Manager | | | |
| Regulatory Affairs | | | |
| Clinical Evaluator | | | |
| Technical Director | | | |

## Decision

- [ ] **RELEASE APPROVED**
- [ ] **RELEASE BLOCKED** — Issues: [list]

**Final approval**: _________________ **Date**: ___________
