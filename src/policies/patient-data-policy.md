# Policy: Patient Data Protection

> **Scope**: All BMAD-MD project activities
> **Applicable regulations**: GDPR (EU), HIPAA (US), MDR Annex I

---

## Absolute Rule

NO patient data (real, pseudonymized, or derived) shall:
- Be included in any AI prompt or conversation
- Be present in source code or test fixtures
- Be committed to the code repository
- Transit through any unqualified cloud service
- Be used in development or staging environments

## Test Data Requirements

- Use ONLY synthetic data (digital phantoms, simulated data)
- Or publicly available anonymized datasets with verified license
- Document provenance and license of every test dataset
- Test datasets must be representative of the intended patient population

## Data Handling in Production

- All patient data processing occurs within the qualified deployment environment
- Data at rest: encrypted (AES-256 minimum)
- Data in transit: encrypted (TLS 1.2+)
- Access control: role-based, principle of least privilege
- Audit trail: all access to patient data is logged

## Compliance

| Regulation | Key Requirements |
|------------|-----------------|
| GDPR (EU) | Legal basis, data minimization, data subject rights, DPO, DPIA |
| HIPAA (US) | PHI protection, BAA with subprocessors, minimum necessary standard |
| MDR Annex I §17.2 | Data security, unauthorized access prevention |

## Incident Response

- Any suspected data breach must be reported within 24 hours
- GDPR: notification to supervisory authority within 72 hours
- HIPAA: notification per Breach Notification Rule
- Document incident, impact assessment, and corrective actions
