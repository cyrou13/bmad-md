#!/usr/bin/env node

/**
 * BMAD Medical Device Module CLI
 * Handles installation and management of BMMD extension for BMAD Method
 */

const { execSync, spawnSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const chalk = require('chalk');
const { program } = require('commander');

// Load package.json for version info
const packageJson = require('../package.json');

// Check if BMAD Method is installed
function checkBmadMethod() {
  // Check both _bmad (standard) and .bmad (alternative) directories
  let bmadDir = path.join(process.cwd(), '_bmad');

  if (!fs.existsSync(bmadDir)) {
    bmadDir = path.join(process.cwd(), '.bmad');
  }

  // Look for config in bmm subdirectory (standard location)
  let bmadConfigPath = path.join(bmadDir, 'bmm', 'config.yaml');

  if (!fs.existsSync(bmadConfigPath)) {
    // Fallback to root config
    bmadConfigPath = path.join(bmadDir, 'config.yaml');
  }

  if (!fs.existsSync(bmadDir)) {
    return { installed: false, reason: 'no-bmad-dir' };
  }

  if (!fs.existsSync(bmadConfigPath)) {
    return { installed: false, reason: 'no-config' };
  }

  return { installed: true, bmadDir };
}

// Install BMMD module
async function installModule(options) {
  console.log(chalk.cyan('\n🏥 BMAD Medical Device Module Installer\n'));
  console.log(chalk.dim(`Version: ${packageJson.version}`));
  console.log(chalk.dim(`Target: ${process.cwd()}\n`));

  // Check BMAD Method prerequisite
  const bmadCheck = checkBmadMethod();

  if (!bmadCheck.installed) {
    console.log(chalk.red('❌ BMAD Method not found in current directory.'));
    console.log(chalk.yellow('\nBMAD Medical Device requires BMAD Method >= 6.0.0'));
    console.log(chalk.cyan('\nInstall BMAD Method first:'));
    console.log(chalk.white('  npx bmad-method install\n'));
    process.exit(1);
  }

  console.log(chalk.green('✓ BMAD Method detected'));

  // Load custom installer
  const { BmmdInstaller } = require('../src/_module-installer/installer');
  const installer = new BmmdInstaller();

  try {
    const result = await installer.install({
      targetDir: process.cwd(),
      bmadDir: bmadCheck.bmadDir,
      force: options.force || false,
      verbose: options.verbose || false
    });

    if (result.success) {
      console.log(chalk.green('\n✨ BMAD Medical Device Module installed successfully!\n'));
      console.log(chalk.cyan('Installed components:'));
      console.log(chalk.white(`  • ${result.agents} agents`));
      console.log(chalk.dim('    Core: Dr. Régis, Dr. Hana, Dr. Claire, Quentin, SecureMax, Dr. Vigil, Prof. Didac'));
      console.log(chalk.dim('    AI/ML: Daria, Dr. Gauss, Dr. Aequitas'));
      console.log(chalk.white(`  • ${result.workflows} regulatory workflows`));
      console.log(chalk.white(`  • ${result.templates} document templates`));
      console.log(chalk.white(`  • ${result.checklists} compliance checklists`));
      console.log(chalk.white(`  • ${result.policies} governance policies`));
      console.log(chalk.white(`  • ${result.commands} Claude commands`));

      console.log(chalk.cyan('\nRegulatory frameworks supported:'));
      console.log(chalk.white('  • IEC 62304 (Software Lifecycle)'));
      console.log(chalk.white('  • ISO 14971 (Risk Management)'));
      console.log(chalk.white('  • FDA 21 CFR Part 820 (QSR)'));
      console.log(chalk.white('  • EU MDR 2017/745'));
      console.log(chalk.white('  • EU AI Act (High-Risk AI)'));
      console.log(chalk.white('  • IMDRF SaMD & GMLP'));

      console.log(chalk.cyan('\nWorkflow sequence (Standard Greenfield):'));
      console.log(chalk.white('  1. /brainstorming          - Start with ideation (Mary)'));
      console.log(chalk.white('  2. /research               - Market/Domain research (Mary)'));
      console.log(chalk.white('  3. /create-product-brief   - Product Brief (Mary)'));
      console.log(chalk.white('  4. /regulatory-scoping     - Regulatory strategy (Dr. Régis)'));
      console.log(chalk.white('  5. /samd-classification    - Classify your SaMD (Dr. Régis)'));
      console.log(chalk.cyan('\nAI/ML Data workflows:'));
      console.log(chalk.white('  /dataset-specification   - Define data requirements (Daria)'));
      console.log(chalk.white('  /annotation-protocol     - Annotation guidelines (Daria)'));
      console.log(chalk.white('  /bias-assessment         - Fairness evaluation (Dr. Aequitas)'));
      console.log(chalk.white('  /ml-validation-protocol  - Statistical validation (Dr. Gauss)\n'));
    }
  } catch (error) {
    console.error(chalk.red('\n❌ Installation failed:'), error.message);
    if (options.verbose) {
      console.error(chalk.dim(error.stack));
    }
    process.exit(1);
  }
}

// Status command
function showStatus() {
  console.log(chalk.cyan('\n🏥 BMAD Medical Device Module Status\n'));

  const bmadCheck = checkBmadMethod();

  if (!bmadCheck.installed) {
    console.log(chalk.yellow('BMAD Method: Not installed'));
    console.log(chalk.yellow('BMMD Module: Not available (requires BMAD Method)\n'));
    return;
  }

  console.log(chalk.green('BMAD Method: Installed'));

  // Check if BMMD is installed
  const bmmdConfigPath = path.join(bmadCheck.bmadDir, 'bmmd', 'config.yaml');

  if (fs.existsSync(bmmdConfigPath)) {
    console.log(chalk.green('BMMD Module: Installed'));

    // Count installed components
    const bmmdDir = path.join(bmadCheck.bmadDir, 'bmmd');
    const agents = fs.readdirSync(path.join(bmmdDir, 'agents')).filter(f => f.endsWith('.md')).length;
    const workflows = fs.readdirSync(path.join(bmmdDir, 'workflows')).filter(f => fs.statSync(path.join(bmmdDir, 'workflows', f)).isDirectory()).length;

    console.log(chalk.dim(`  Agents: ${agents}`));
    console.log(chalk.dim(`  Workflows: ${workflows}`));
  } else {
    console.log(chalk.yellow('BMMD Module: Not installed'));
    console.log(chalk.cyan('\nRun to install: npx bmad-md install'));
  }

  console.log('');
}

// Set up CLI
program
  .version(packageJson.version)
  .description('BMAD Medical Device Module - SaMD regulatory compliance extension');

program
  .command('install')
  .description('Install BMMD module into current BMAD project')
  .option('-f, --force', 'Overwrite existing BMMD installation')
  .option('-v, --verbose', 'Show detailed output')
  .action(installModule);

program
  .command('status')
  .description('Check BMMD installation status')
  .action(showStatus);

program
  .command('uninstall')
  .description('Remove BMMD module from current project')
  .action(() => {
    console.log(chalk.yellow('\nUninstall not yet implemented.'));
    console.log(chalk.dim('To remove manually, delete the .bmad/bmmd directory.\n'));
  });

program.parse(process.argv);

// Show help if no command
if (process.argv.slice(2).length === 0) {
  program.outputHelp();
}
