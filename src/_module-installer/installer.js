/**
 * BMAD Medical Device Module Installer
 * Handles installation of BMMD components into a BMAD project
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');

class BmmdInstaller {
  constructor() {
    this.moduleRoot = path.join(__dirname, '..');
    this.moduleDefinition = null;
  }

  /**
   * Load module definition from module.yaml
   */
  loadModuleDefinition() {
    const modulePath = path.join(this.moduleRoot, 'module.yaml');
    const content = fs.readFileSync(modulePath, 'utf8');
    this.moduleDefinition = yaml.load(content);
    return this.moduleDefinition;
  }

  /**
   * Install BMMD module into target BMAD project
   */
  async install(options) {
    const { targetDir, bmadDir, force = false, verbose = false } = options;

    // Load module definition
    this.loadModuleDefinition();

    const targetBmmdDir = path.join(bmadDir, 'bmmd');

    // Check for existing installation
    if (fs.existsSync(targetBmmdDir) && !force) {
      const configExists = fs.existsSync(path.join(targetBmmdDir, 'config.yaml'));
      if (configExists) {
        throw new Error(
          'BMMD module already installed. Use --force to overwrite.'
        );
      }
    }

    // Create target directory
    fs.ensureDirSync(targetBmmdDir);

    // Copy all module components
    const stats = {
      agents: 0,
      workflows: 0,
      templates: 0,
      checklists: 0,
      policies: 0
    };

    // Copy agents
    const agentsSource = path.join(this.moduleRoot, 'agents');
    const agentsTarget = path.join(targetBmmdDir, 'agents');
    if (fs.existsSync(agentsSource)) {
      fs.copySync(agentsSource, agentsTarget);
      stats.agents = fs.readdirSync(agentsTarget).filter(f => f.endsWith('.md')).length;
      if (verbose) console.log(`  Copied ${stats.agents} agents`);
    }

    // Copy workflows (including step files)
    const workflowsSource = path.join(this.moduleRoot, 'workflows');
    const workflowsTarget = path.join(targetBmmdDir, 'workflows');
    if (fs.existsSync(workflowsSource)) {
      fs.copySync(workflowsSource, workflowsTarget);
      stats.workflows = fs.readdirSync(workflowsTarget)
        .filter(f => fs.statSync(path.join(workflowsTarget, f)).isDirectory()).length;
      if (verbose) console.log(`  Copied ${stats.workflows} workflows`);
    }

    // Copy templates
    const templatesSource = path.join(this.moduleRoot, 'templates');
    const templatesTarget = path.join(targetBmmdDir, 'templates');
    if (fs.existsSync(templatesSource)) {
      fs.copySync(templatesSource, templatesTarget);
      stats.templates = fs.readdirSync(templatesTarget).filter(f => f.endsWith('.md')).length;
      if (verbose) console.log(`  Copied ${stats.templates} templates`);
    }

    // Copy checklists
    const checklistsSource = path.join(this.moduleRoot, 'checklists');
    const checklistsTarget = path.join(targetBmmdDir, 'checklists');
    if (fs.existsSync(checklistsSource)) {
      fs.copySync(checklistsSource, checklistsTarget);
      stats.checklists = fs.readdirSync(checklistsTarget).filter(f => f.endsWith('.md')).length;
      if (verbose) console.log(`  Copied ${stats.checklists} checklists`);
    }

    // Copy policies
    const policiesSource = path.join(this.moduleRoot, 'policies');
    const policiesTarget = path.join(targetBmmdDir, 'policies');
    if (fs.existsSync(policiesSource)) {
      fs.copySync(policiesSource, policiesTarget);
      stats.policies = fs.readdirSync(policiesTarget).filter(f => f.endsWith('.md')).length;
      if (verbose) console.log(`  Copied ${stats.policies} policies`);
    }

    // Copy config.yaml
    const configSource = path.join(this.moduleRoot, 'config.yaml');
    const configTarget = path.join(targetBmmdDir, 'config.yaml');
    if (fs.existsSync(configSource)) {
      fs.copySync(configSource, configTarget);
      if (verbose) console.log('  Copied config.yaml');
    }

    // Copy module-help.csv
    const helpSource = path.join(this.moduleRoot, 'module-help.csv');
    const helpTarget = path.join(targetBmmdDir, 'module-help.csv');
    if (fs.existsSync(helpSource)) {
      fs.copySync(helpSource, helpTarget);
      if (verbose) console.log('  Copied module-help.csv');
    }

    // Update workflow manifest in .bmad
    await this.updateWorkflowManifest(bmadDir, verbose);

    // Update agent manifest in .bmad
    await this.updateAgentManifest(bmadDir, verbose);

    return {
      success: true,
      ...stats
    };
  }

  /**
   * Update workflow-manifest.csv to include BMMD workflows
   */
  async updateWorkflowManifest(bmadDir, verbose) {
    const manifestPath = path.join(bmadDir, 'workflow-manifest.csv');

    if (!fs.existsSync(manifestPath)) {
      if (verbose) console.log('  No workflow-manifest.csv found, skipping manifest update');
      return;
    }

    let content = fs.readFileSync(manifestPath, 'utf8');

    // Check if BMMD workflows already present
    if (content.includes('bmmd/workflows')) {
      if (verbose) console.log('  BMMD workflows already in manifest');
      return;
    }

    // BMMD workflow entries
    const bmmdWorkflows = `
# BMMD - Medical Device Regulatory Workflows
regulatory-scoping,Regulatory Scoping,Define regulatory strategy and target markets,1,bmmd/workflows/regulatory-scoping/workflow.md
samd-classification,SaMD Classification,Classify device per IMDRF/FDA/MDR,1,bmmd/workflows/samd-classification/workflow.md
risk-management-cycle,Risk Management Cycle,ISO 14971 hazard analysis and risk control,2,bmmd/workflows/risk-management-cycle/workflow.md
prd-regulatory-enrichment,PRD Regulatory Enrichment,Enrich PRD with regulatory requirements,2,bmmd/workflows/prd-regulatory-enrichment/workflow.md
architecture-safety-review,Architecture Safety Review,IEC 62304 safety and security review,2,bmmd/workflows/architecture-safety-review/workflow.md
clinical-validation,Clinical Validation,Design clinical validation protocol,3,bmmd/workflows/clinical-validation/workflow.md
story-regulatory-gate,Story Regulatory Gate,Pre/post implementation checks,3,bmmd/workflows/story-regulatory-gate/workflow.md
design-history-assembly,Design History Assembly,Compile Design History File,4,bmmd/workflows/design-history-assembly/workflow.md
submission-package,Submission Package,Prepare regulatory submission,4,bmmd/workflows/submission-package/workflow.md`;

    content = content.trimEnd() + '\n' + bmmdWorkflows + '\n';
    fs.writeFileSync(manifestPath, content);

    if (verbose) console.log('  Updated workflow-manifest.csv');
  }

  /**
   * Update agent-manifest.csv to include BMMD agents
   */
  async updateAgentManifest(bmadDir, verbose) {
    const manifestPath = path.join(bmadDir, 'agent-manifest.csv');

    if (!fs.existsSync(manifestPath)) {
      if (verbose) console.log('  No agent-manifest.csv found, skipping manifest update');
      return;
    }

    let content = fs.readFileSync(manifestPath, 'utf8');

    // Check if BMMD agents already present
    if (content.includes('bmmd/agents')) {
      if (verbose) console.log('  BMMD agents already in manifest');
      return;
    }

    // BMMD agent entries
    const bmmdAgents = `
# BMMD - Medical Device Specialist Agents
regis,Dr. Régis,Regulatory Affairs Specialist,bmmd/agents/regulatory-affairs.md
hana,Dr. Hana,Risk Manager (ISO 14971),bmmd/agents/risk-manager.md
claire,Dr. Claire,Clinical Evaluator,bmmd/agents/clinical-evaluator.md
quentin,Quentin,Quality Manager (IEC 62304),bmmd/agents/quality-manager.md
securemax,SecureMax,Cybersecurity Officer,bmmd/agents/cybersec-officer.md`;

    content = content.trimEnd() + '\n' + bmmdAgents + '\n';
    fs.writeFileSync(manifestPath, content);

    if (verbose) console.log('  Updated agent-manifest.csv');
  }
}

module.exports = { BmmdInstaller };
