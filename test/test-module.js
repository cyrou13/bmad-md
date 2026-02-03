#!/usr/bin/env node

/**
 * BMAD Medical Device Module - Basic Test Suite
 * Verifies module structure and content integrity
 */

const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');

const srcDir = path.join(__dirname, '..', 'src');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${name}`);
    console.log(`  Error: ${error.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

console.log('\n🧪 BMAD Medical Device Module Tests\n');

// Test module.yaml
test('module.yaml exists and is valid YAML', () => {
  const modulePath = path.join(srcDir, 'module.yaml');
  assert(fs.existsSync(modulePath), 'module.yaml not found');

  const content = fs.readFileSync(modulePath, 'utf8');
  const module = yaml.load(content);

  assert(module.module, 'module definition missing');
  assert(module.module.code === 'bmmd', 'module code should be bmmd');
  assert(module.components, 'components section missing');
});

// Test config.yaml
test('config.yaml exists', () => {
  const configPath = path.join(srcDir, 'config.yaml');
  assert(fs.existsSync(configPath), 'config.yaml not found');
});

// Test agents
test('All 5 agents exist', () => {
  const agentsDir = path.join(srcDir, 'agents');
  const expectedAgents = [
    'regulatory-affairs.md',
    'risk-manager.md',
    'clinical-evaluator.md',
    'quality-manager.md',
    'cybersec-officer.md'
  ];

  for (const agent of expectedAgents) {
    const agentPath = path.join(agentsDir, agent);
    assert(fs.existsSync(agentPath), `Agent ${agent} not found`);
  }
});

// Test workflows
test('All 9 workflows exist with workflow.md', () => {
  const workflowsDir = path.join(srcDir, 'workflows');
  const expectedWorkflows = [
    'regulatory-scoping',
    'samd-classification',
    'risk-management-cycle',
    'clinical-validation',
    'architecture-safety-review',
    'design-history-assembly',
    'prd-regulatory-enrichment',
    'story-regulatory-gate',
    'submission-package'
  ];

  for (const workflow of expectedWorkflows) {
    const workflowPath = path.join(workflowsDir, workflow, 'workflow.md');
    assert(fs.existsSync(workflowPath), `Workflow ${workflow}/workflow.md not found`);
  }
});

// Test workflow steps
test('Workflows have step files', () => {
  const workflowsDir = path.join(srcDir, 'workflows');
  const workflows = fs.readdirSync(workflowsDir)
    .filter(f => fs.statSync(path.join(workflowsDir, f)).isDirectory());

  for (const workflow of workflows) {
    const stepsDir = path.join(workflowsDir, workflow, 'steps');
    if (fs.existsSync(stepsDir)) {
      const steps = fs.readdirSync(stepsDir).filter(f => f.endsWith('.md'));
      assert(steps.length > 0, `Workflow ${workflow} has no step files`);
    }
  }
});

// Test templates
test('Templates exist', () => {
  const templatesDir = path.join(srcDir, 'templates');
  assert(fs.existsSync(templatesDir), 'templates directory not found');

  const templates = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));
  assert(templates.length >= 4, 'Expected at least 4 templates');
});

// Test checklists
test('Checklists exist', () => {
  const checklistsDir = path.join(srcDir, 'checklists');
  assert(fs.existsSync(checklistsDir), 'checklists directory not found');

  const checklists = fs.readdirSync(checklistsDir).filter(f => f.endsWith('.md'));
  assert(checklists.length >= 4, 'Expected at least 4 checklists');
});

// Test policies
test('Policies exist', () => {
  const policiesDir = path.join(srcDir, 'policies');
  assert(fs.existsSync(policiesDir), 'policies directory not found');

  const policies = fs.readdirSync(policiesDir).filter(f => f.endsWith('.md'));
  assert(policies.length >= 4, 'Expected at least 4 policies');
});

// Test installer
test('Installer module loads correctly', () => {
  const installerPath = path.join(srcDir, '_module-installer', 'installer.js');
  assert(fs.existsSync(installerPath), 'installer.js not found');

  const { BmmdInstaller } = require(installerPath);
  const installer = new BmmdInstaller();
  assert(typeof installer.install === 'function', 'installer.install should be a function');
});

// Summary
console.log(`\n${passed} passed, ${failed} failed\n`);

process.exit(failed > 0 ? 1 : 0);
