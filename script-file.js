#!/usr/bin/env node
const { execSync } = require('child_process')

const std = execSync('npm test')

process.exit(0)
