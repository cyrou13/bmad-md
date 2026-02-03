# Policy: SOUP Governance

> **Scope**: All third-party software dependencies (Software of Unknown Provenance)
> **Applicable standard**: IEC 62304 §8

---

## Definition

SOUP (Software of Unknown Provenance) is any software item that is already developed
and generally available, not developed for the purpose of being incorporated into the
medical device. This includes open-source libraries, commercial SDKs, and system libraries.

## Requirements

### Every SOUP must be:
1. **Identified** — Name, version, license, source
2. **Evaluated** — Using the SOUP Evaluation template
3. **Classified** — Inherits safety class from the highest-class software item using it
4. **Monitored** — CVE tracking, update plan

### Approval Process
1. Developer proposes new SOUP → documents in SOUP Evaluation template
2. Architect reviews technical suitability
3. SecureMax reviews security posture (CVEs, known vulnerabilities)
4. Quality Manager approves and adds to SOUP list
5. Version is pinned in dependency manifest

### Prohibited
- ❌ Dependencies with unresolved critical CVEs affecting our usage
- ❌ Dependencies with incompatible licenses
- ❌ Dependencies without active maintenance (>2 years no commits) for Class C usage
- ❌ Unpinned dependency versions

### Monitoring
- **Monthly**: Automated CVE scan (pip-audit / Dependabot / Snyk)
- **Quarterly**: Manual review of SOUP list for currency and risk
- **On alert**: Immediate assessment of newly disclosed critical CVEs

### Update Policy
| Urgency | Trigger | Timeline |
|---------|---------|----------|
| Critical | CVE with CVSS ≥ 9.0 affecting our usage | 48 hours |
| High | CVE with CVSS ≥ 7.0 affecting our usage | 2 weeks |
| Medium | Feature update needed, minor CVEs | Next sprint |
| Low | Routine version currency | Quarterly |

Every SOUP update follows the Change Control process and requires regression testing.
