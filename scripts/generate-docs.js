/**
 * generate-docs.js — Nexter UI Component documentation generator
 *
 * Usage:
 *   node scripts/generate-docs.js           # generate docs
 *   node scripts/generate-docs.js --dry-run # preview without writing
 *
 * Add to package.json scripts:
 *   "docs": "node scripts/generate-docs.js"
 *
 * Uses Node.js built-ins only (fs, path) — no external dependencies.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ROOT        = path.resolve(__dirname, '..');
const COMPONENTS  = path.join(ROOT, 'src', 'components');
const DOCS_COMP   = path.join(ROOT, 'docs', 'components');
const DOCS_README = path.join(ROOT, 'docs', 'README.md');

const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Infer a prop's type from its default value string. */
function inferType(defaultVal) {
  if (defaultVal === undefined || defaultVal === 'undefined') return 'any';
  const v = defaultVal.trim();
  if (v === 'true' || v === 'false') return 'bool';
  if (v === '[]') return 'array';
  if (v === '{}') return 'object';
  if (/^['"`]/.test(v)) return 'string';
  if (/^\d/.test(v) || v === '0') return 'number';
  if (/^\(/.test(v) || v.startsWith('function')) return 'func';
  if (v === 'null' || v === 'undefined') return 'node';
  return 'any';
}

/**
 * Extract props from the first function signature in a JSX source file.
 * Handles patterns like:
 *   function Foo({ prop1 = 'val', prop2 = false, prop3, ...rest }) {
 */
function extractProps(source, componentName) {
  // Match: function ComponentName({ ... }) or function ComponentName({...}) {
  const sigRe = new RegExp(
    `function\\s+${componentName}\\s*\\(\\s*\\{([\\s\\S]*?)\\}\\s*(?:,|\\))`
  );
  const match = source.match(sigRe);
  if (!match) return [];

  const inner = match[1];

  // Split on commas that are NOT inside brackets/braces/parens/quotes
  const props = [];
  let depth = 0;
  let current = '';
  let inStr = false;
  let strChar = '';

  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (inStr) {
      current += ch;
      if (ch === strChar && inner[i - 1] !== '\\') inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inStr = true;
      strChar = ch;
      current += ch;
      continue;
    }
    if (ch === '(' || ch === '{' || ch === '[') { depth++; current += ch; continue; }
    if (ch === ')' || ch === '}' || ch === ']') { depth--; current += ch; continue; }
    if (ch === ',' && depth === 0) {
      const trimmed = current.trim();
      if (trimmed) props.push(trimmed);
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim()) props.push(current.trim());

  return props.map((p) => {
    // Skip rest spreads
    if (p.startsWith('...')) return null;

    const eqIdx = p.indexOf('=');
    if (eqIdx === -1) {
      return { name: p.trim(), default: undefined, type: 'any' };
    }
    const name = p.slice(0, eqIdx).trim();
    const defaultVal = p.slice(eqIdx + 1).trim();
    return { name, default: defaultVal, type: inferType(defaultVal) };
  }).filter(Boolean);
}

/**
 * Find every direct *.jsx file inside a component's subdirectory.
 * Returns [ { name: 'Button', file: '/abs/path/Button.jsx' }, ... ]
 */
function discoverComponents() {
  const entries = fs.readdirSync(COMPONENTS, { withFileTypes: true });
  const components = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const dir  = path.join(COMPONENTS, entry.name);
    const main = path.join(dir, `${entry.name}.jsx`);
    if (fs.existsSync(main)) {
      components.push({ name: entry.name, file: main });
    }
  }

  return components.sort((a, b) => a.name.localeCompare(b.name));
}

// ---------------------------------------------------------------------------
// Markdown builders
// ---------------------------------------------------------------------------

function buildPropsTable(props) {
  if (!props.length) return '_No props detected._\n';
  const rows = props.map((p) => {
    const def = p.default !== undefined ? `\`${p.default}\`` : '—';
    return `| \`${p.name}\` | \`${p.type}\` | ${def} | — |`;
  });
  return [
    '| Prop | Type | Default | Description |',
    '|------|------|---------|-------------|',
    ...rows,
  ].join('\n') + '\n';
}

function buildComponentDoc(name, props) {
  const base = name.toLowerCase();
  const cssBase = `.nxp-${base}`;

  const importBlock = `\`\`\`jsx\nimport { ${name} } from 'nexter-ui-component'\n\`\`\``;

  // Build a minimal usage example from props
  const usagePropStr = props
    .filter((p) => p.default !== undefined && p.name !== 'className')
    .slice(0, 3)
    .map((p) => `  ${p.name}={${p.default}}`)
    .join('\n');

  const usageBlock = usagePropStr
    ? `\`\`\`jsx\n<${name}\n${usagePropStr}\n/>\n\`\`\``
    : `\`\`\`jsx\n<${name} />\n\`\`\``;

  return `# ${name}

> Auto-generated documentation for the \`${name}\` component.

---

## Import

${importBlock}

---

## Props

${buildPropsTable(props)}

---

## Usage

### Basic

${usageBlock}

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| \`${cssBase}\` | Root element |

---

## Notes

- Refer to the source file at \`src/components/${name}/${name}.jsx\` for the full implementation.
- CSS tokens are defined in \`src/styles/index.css\`.
`;
}

// ---------------------------------------------------------------------------
// README builder
// ---------------------------------------------------------------------------

function buildReadme(components) {
  const rows = components
    .map((c) => `| [${c.name}](./components/${c.name}.md) | See component doc. |`)
    .join('\n');

  return `# Nexter UI Component — Documentation

> ${components.length} accessible, token-driven React components built on the Nexter Design System.

[![npm](https://img.shields.io/npm/v/nexter-ui-component)](https://www.npmjs.com/package/nexter-ui-component)
[![GitHub](https://img.shields.io/badge/GitHub-nirmalkavaiya%2FNexter--Ui--Component-181717?logo=github)](https://github.com/nirmalkavaiya/Nexter-Ui-Component)

## Install

\`\`\`bash
npm install nexter-ui-component
\`\`\`

\`\`\`jsx
import 'nexter-ui-component/dist/style.css'
import { Button, Modal } from 'nexter-ui-component'
\`\`\`

## Components

| Component | Description |
|-----------|-------------|
${rows}

## License

MIT © Nirmal Kavaiya
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  if (DRY_RUN) {
    console.log(`[dry-run] Would write: ${filePath} (${content.length} bytes)`);
    return;
  }
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  Written: ${filePath}`);
}

function main() {
  console.log(`\nNexter UI — generate-docs.js${DRY_RUN ? ' (DRY RUN)' : ''}\n`);

  const components = discoverComponents();
  console.log(`Discovered ${components.length} components in ${COMPONENTS}\n`);

  if (!DRY_RUN) ensureDir(DOCS_COMP);

  const written = [];

  for (const { name, file } of components) {
    const source = fs.readFileSync(file, 'utf8');
    const props  = extractProps(source, name);
    const doc    = buildComponentDoc(name, props);
    const dest   = path.join(DOCS_COMP, `${name}.md`);
    writeFile(dest, doc);
    written.push(dest);
  }

  // README
  const readme = buildReadme(components);
  writeFile(DOCS_README, readme);
  written.push(DOCS_README);

  console.log(`\n--- Summary ---`);
  console.log(`Components processed : ${components.length}`);
  console.log(`Files written        : ${written.length}`);
  console.log(`\nFiles:`);
  written.forEach((f) => console.log(`  ${f}`));
  console.log('');
}

main();
