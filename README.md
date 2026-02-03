# BMAD Medical Device Module (BMMD)

**SaMD Regulatory Compliance Extension for BMAD Method**

[![npm version](https://badge.fury.io/js/bmad-md.svg)](https://www.npmjs.com/package/bmad-md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

BMAD Medical Device (BMMD) extends the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) with specialized agents, workflows, and documentation templates for developing Software as a Medical Device (SaMD) in compliance with international regulatory standards.

## Regulatory Frameworks Supported

- **IEC 62304** - Medical device software lifecycle
- **ISO 14971** - Application of risk management to medical devices
- **IEC 62366-1** - Usability engineering for medical devices
- **FDA 21 CFR Part 820** - Quality System Regulation
- **FDA 21 CFR Part 803/806** - Medical Device Reporting & Corrections
- **EU MDR 2017/745** - Medical Device Regulation (including PMS/PMCF)
- **IMDRF SaMD** - Software as a Medical Device classification

## Prerequisites

- Node.js >= 20.0.0
- BMAD Method >= 6.0.0 installed in your project

## Installation

### Via npx (Recommended)

```bash
# First, ensure BMAD Method is installed
npx bmad-method install

# Then install BMAD Medical Device module
npx bmad-md install
```

### Via npm

```bash
npm install -g bmad-md
bmad-md install
```

### What Gets Installed

The installer will:
- Copy 10 specialized agents to `_bmad/bmmd/agents/`
- Install 11 regulatory workflows
- Create document templates and checklists
- Generate Claude Code commands in `.claude/commands/`

After installation, agents are accessible via `/bmad-agent-bmmd-*` commands in Claude Code.

## Using the Agents

### In Claude Code

After installation, invoke agents using the slash commands:

```
/bmad-agent-bmmd-regulatory-affairs   # Launch Dr. Régis
/bmad-agent-bmmd-risk-manager         # Launch Dr. Hana
/bmad-agent-bmmd-clinical-evaluator   # Launch Dr. Claire
/bmad-agent-bmmd-quality-manager      # Launch Quentin
/bmad-agent-bmmd-cybersec-officer     # Launch SecureMax
/bmad-agent-bmmd-pms-officer          # Launch Dr. Vigil
/bmad-agent-bmmd-human-factors        # Launch Prof. Didac
/bmad-agent-bmmd-data-governance      # Launch Daria
/bmad-agent-bmmd-biostatistician      # Launch Dr. Gauss
/bmad-agent-bmmd-ai-ethics            # Launch Dr. Aequitas
```

Each agent will present an interactive menu with specialized workflows and templates.

## Specialized Agents

### Core Regulatory Agents
| Agent | Code | Specialty |
|-------|------|-----------|
| **Dr. Régis** | regis | Regulatory Affairs Specialist (FDA, CE, MDR) |
| **Dr. Hana** | hana | Risk Manager (ISO 14971, FMEA) |
| **Dr. Claire** | claire | Clinical Evaluator |
| **Quentin** | quentin | Quality Manager (IEC 62304, QMS) |
| **SecureMax** | securemax | Cybersecurity Officer |
| **Dr. Vigil** | vigil | Post-Market Surveillance (PMS, PMCF, Vigilance) |
| **Prof. Didac** | didac | Human Factors & Training (IEC 62366, IFU) |

### AI/ML Extension Agents
| Agent | Code | Specialty |
|-------|------|-----------|
| **Daria** | daria | Data Governance Officer |
| **Dr. Gauss** | gauss | Biostatistician |
| **Dr. Aequitas** | aequitas | AI Ethics & Fairness Officer |

## Regulatory Workflows

### Phase 1 - Discovery (Gate R1)
- `/regulatory-scoping` - Define regulatory strategy and target markets
- `/samd-classification` - Classify device per IMDRF, FDA, and MDR

### Phase 2 - Definition (Gate R2)
- `/risk-management-cycle` - ISO 14971 hazard analysis and risk control
- `/prd-regulatory-enrichment` - Enrich PRD with regulatory requirements
- `/architecture-safety-review` - IEC 62304 safety and security review

### Phase 3 - Development (Gate R3)
- `/clinical-validation` - Design clinical validation protocol
- `/story-regulatory-gate` - Pre/post implementation compliance checks

### Phase 4 - Delivery (Gate R4)
- `/design-history-assembly` - Compile Design History File (DHF)
- `/submission-package` - Prepare regulatory submission (510(k), CE Technical File)

### Phase 5 - Post-Market (Continuous)
- `/post-market-surveillance` - PMS Plan, PMCF, PSUR, Vigilance
- `/usability-engineering` - IEC 62366-1 process, formative/summative evaluations

## Templates Included

- **Intended Use Statement** - Regulatory intended use/purpose template
- **Hazard Analysis (FMEA)** - ISO 14971 compliant hazard analysis
- **Traceability Matrix** - Requirements to test case traceability
- **SOUP Evaluation** - Software of Unknown Provenance assessment
- **Regulatory Story Addendum** - Story-level compliance documentation

## Compliance Checklists

- IEC 62304 Phase Gate Checklist
- Story-Level Regulatory Compliance
- Release Readiness (Medical Device)
- AI/ML Model Validation Checklist

## Governance Policies

- SOUP Governance Policy
- AI-Assisted Development Policy
- Patient Data Handling Policy
- Clinical Significance Thresholds

## Project Structure

After installation, BMMD creates the following structure:

```
.bmad/
└── bmmd/
    ├── config.yaml           # Module configuration
    ├── module-help.csv       # Help documentation
    ├── agents/               # Specialist agent definitions
    │   ├── regulatory-affairs.md
    │   ├── risk-manager.md
    │   ├── clinical-evaluator.md
    │   ├── quality-manager.md
    │   ├── cybersec-officer.md
    │   ├── post-market-surveillance.md
    │   └── human-factors.md
    ├── workflows/            # Regulatory workflows
    │   ├── regulatory-scoping/
    │   ├── samd-classification/
    │   ├── risk-management-cycle/
    │   ├── post-market-surveillance/
    │   ├── usability-engineering/
    │   └── ...
    ├── templates/            # Document templates
    ├── checklists/           # Compliance checklists
    └── policies/             # Governance policies
```

## Workflow Diagram

The BMMD workflow integrates with standard BMAD phases:

![BMAD-MD Workflow](docs/bmad-md-workflow-greenfield.png)

### Full Lifecycle Overview (including Post-Market)

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                           BMAD-MD Full SaMD Lifecycle                                 │
├─────────────┬─────────────┬─────────────────┬─────────────────┬──────────────────────┤
│   Phase 1   │   Phase 2   │     Phase 3     │     Phase 4     │       Phase 5        │
│  Discovery  │  Definition │   Development   │    Delivery     │    Post-Market       │
├─────────────┼─────────────┼─────────────────┼─────────────────┼──────────────────────┤
│ Brainstorm  │ PRD-MD      │ Story Reg Gate  │ DHF Assembly    │ PMS Plan (Art. 84)   │
│ Research    │ Risk Mgmt   │ Clinical Valid  │ Submission Pkg  │ PMCF (Art. 61)       │
│ Brief       │ Arch Review │ Story Cycles    │ 510(k)/CE File  │ PSUR (Art. 86)       │
│ Reg Scope   │ Usability   │ Usability Eval  │                 │ Vigilance            │
│ SaMD Class  │ IFU Draft   │                 │                 │ AI Perf Monitoring   │
├─────────────┼─────────────┼─────────────────┼─────────────────┼──────────────────────┤
│     R1      │     R2      │       R3        │       R4        │     Continuous       │
├─────────────┴─────────────┴─────────────────┴─────────────────┴──────────────────────┤
│  Agents: Dr. Régis, Dr. Hana, Dr. Claire, Quentin, SecureMax, Dr. Vigil, Prof. Didac │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Phase 5 - Post-Market** is critical for MDR compliance and includes:
- **Dr. Vigil**: PMS Plan, PMCF, PSUR, Vigilance reporting, AI/ML performance monitoring
- **Prof. Didac**: IFU maintenance, user training updates, usability feedback integration

## CLI Commands

```bash
# Check installation status
npx bmad-md status

# Install module (with options)
npx bmad-md install --force    # Overwrite existing
npx bmad-md install --verbose  # Show detailed output

# Remove module
npx bmad-md uninstall
```

## Integration with BMAD Method

BMMD workflows complement the core BMAD Method (BMM) workflows:

### Pre-Market (Phases 1-4)
1. **Mary's Discovery** (BMM) → **Regulatory Scoping** (BMMD)
2. **Product Brief** (BMM) → **SaMD Classification** (BMMD)
3. **PRD Creation** (BMM) → **PRD Regulatory Enrichment** (BMMD)
4. **Architecture** (BMM) → **Architecture Safety Review** (BMMD)
5. **Story Development** (BMM) → **Story Regulatory Gate** (BMMD)
6. **UX Design** (BMM) → **Usability Engineering** (BMMD)

### Post-Market (Phase 5 - Continuous)
7. **Release** → **Post-Market Surveillance Plan** activation
8. **Production Monitoring** → **AI Performance Monitoring** (drift, decay)
9. **Customer Feedback** → **Vigilance & PMCF** integration
10. **Periodic Reviews** → **PSUR** generation

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

## Support

- [GitHub Issues](https://github.com/cyrou13/bmad-md/issues)
- [BMAD Method Documentation](https://github.com/bmad-code-org/BMAD-METHOD)
