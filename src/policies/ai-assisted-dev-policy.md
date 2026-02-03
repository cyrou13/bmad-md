# Policy: AI-Assisted Development — Medical Devices

> **Scope**: All code generated or modified with AI assistance in BMAD-MD projects
> **Applicable standards**: IEC 62304 §5.1 (tool qualification), ISO 13485 §7.5.6

---

## Principles

1. **AI is a tool, not an author** — The human developer is the accountable author
   of every line of code merged into the codebase.

2. **Transparency** — Every AI contribution is identified with the `[AI-ASSISTED]` tag
   in commit messages.

3. **Systematic verification** — No AI output is merged without:
   - Human code review
   - Automated tests passing
   - Static analysis passing (linting, type checking, SAST)
   - For Safety Class C: formal documented review

4. **Tool qualification** — The AI tool is documented in the SDP (IEC 62304 §5.1)
   with its mitigation strategy.

## Absolute Prohibitions

- ❌ No patient data (real or pseudonymized) in AI prompts — ever
- ❌ No clinical threshold modifications by AI without formal validation
- ❌ No deletion of existing tests without documented justification
- ❌ No merge of AI-generated code without human review
- ❌ No secrets, credentials, or API keys in code
- ❌ No AI-generated code in safety-critical paths without Class C verification

## Commit Format

```
[AI-ASSISTED] <type>(<scope>): <description>

REQ: REQ-XXX, REQ-YYY
RISK: RISK-XXX (if applicable)
Reviewed-by: <human developer name>
```

## Traceability

- AI sessions should be logged (recommended for Class C, optional for A/B)
- Each [AI-ASSISTED] commit must have a human Reviewed-by
- The AI tool version should be noted in the SDP

## Tool Qualification Record

| Field | Value |
|-------|-------|
| Tool | [e.g., Claude Code (Anthropic)] |
| Version | [document at each session] |
| Classification | Development tool — NOT a medical device |
| Role | Code generation assistance, refactoring, documentation, testing |
| Risk mitigation | Human review + automated verification + formal review (Class C) |
