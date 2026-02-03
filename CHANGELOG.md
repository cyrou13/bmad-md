# Changelog

All notable changes to the BMAD Medical Device Module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.3] - 2026-02-03

### Fixed
- Fixed installer to properly generate Claude Code commands for all BMMD agents
- Both bash installer (`install.sh`) and JavaScript installer now create `.claude/commands/` entries
- Ensures all 10 agents (regulatory-affairs, risk-manager, clinical-evaluator, quality-manager, cybersec-officer, pms-officer, human-factors, data-governance, biostatistician, ai-ethics) are accessible via `/bmad-agent-bmmd-*` commands

### Changed
- Updated bash installer summary to show all 10 agents with correct command names
- Improved installation feedback messages

## [1.2.2] - Previous release

### Added
- Post-Market Surveillance Officer (Dr. Vigil)
- Human Factors Engineer (Prof. Didac)
- AI/ML extension agents (Daria, Dr. Gauss, Dr. Aequitas)

### Changed
- Extended agent count from 5 to 10 specialists

## [1.0.0] - Initial release

### Added
- Core 5 regulatory agents
- 9 regulatory workflows
- Document templates and checklists
- IEC 62304, ISO 14971, FDA, MDR compliance support
