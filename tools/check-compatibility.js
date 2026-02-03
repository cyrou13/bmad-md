#!/usr/bin/env node

/**
 * BMAD Medical Device Module - Compatibility Checker
 * Verifies that the host environment meets requirements
 */

const semver = require('semver');
const chalk = require('chalk');
const fs = require('node:fs');
const path = require('node:path');

const packageJson = require('../package.json');

console.log(chalk.cyan('\n🏥 BMAD Medical Device - Compatibility Check\n'));

let hasErrors = false;

// Check Node.js version
const requiredNode = packageJson.engines?.node || '>=20.0.0';
const currentNode = process.version;

if (semver.satisfies(currentNode, requiredNode)) {
  console.log(chalk.green(`✓ Node.js ${currentNode} (requires ${requiredNode})`));
} else {
  console.log(chalk.red(`✗ Node.js ${currentNode} does not satisfy ${requiredNode}`));
  hasErrors = true;
}

// Check for BMAD Method in current directory
const bmadDir = path.join(process.cwd(), '.bmad');
const bmadConfigPath = path.join(bmadDir, 'config.yaml');

if (fs.existsSync(bmadDir)) {
  console.log(chalk.green('✓ .bmad directory found'));

  if (fs.existsSync(bmadConfigPath)) {
    console.log(chalk.green('✓ BMAD Method configuration found'));
  } else {
    console.log(chalk.yellow('⚠ BMAD Method config.yaml not found'));
    console.log(chalk.dim('  Run "npx bmad-method install" to set up BMAD Method'));
  }
} else {
  console.log(chalk.yellow('⚠ .bmad directory not found in current directory'));
  console.log(chalk.dim('  BMAD Medical Device requires BMAD Method >= 6.0.0'));
  console.log(chalk.dim('  Run "npx bmad-method install" first'));
}

// Check for existing BMMD installation
const bmmdDir = path.join(bmadDir, 'bmmd');
if (fs.existsSync(bmmdDir)) {
  console.log(chalk.cyan('ℹ BMMD module already installed'));
  console.log(chalk.dim('  Use --force flag to reinstall'));
}

console.log('');

if (hasErrors) {
  process.exit(1);
}
