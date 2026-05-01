#!/usr/bin/env node
/**
 * generate-docs.js
 *
 * Walks src/components/, infers props from JSX source via regex,
 * and writes one Markdown file per component to docs/components/.
 * Also regenerates docs/README.md with a full component index.
 *
 * Usage:
 *   node scripts/generate-docs.js            # write all docs
 *   node scripts/generate-docs.js --dry-run  # preview without writing
 */

const fs   = require('fs');
const path = require('path');

const ROOT       = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'src', 'components');
const OUT_DIR    = path.join(ROOT, 'docs', 'components');
const INDEX_FILE = path.join(ROOT, 'docs', 'README.md');
const DRY_RUN    = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  if (DRY_RUN) {
    console.log(`[dry-run] would write → ${path.relative(ROOT, filePath)}`);
    return;
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`wrote → ${path.relative(ROOT, filePath)}`);
}

// ---------------------------------------------------------------------------
// Props inference  (regex-based, no AST)
// ---------------------------------------------------------------------------

/**
 * Extracts props from destructured function parameters.
 * Handles patterns like:
 *   function Foo({ bar = 'x', baz, qux = true, ...rest })
 *   const Foo = ({ bar, baz = 0 }) =>
 */
function inferProps(source) {
  const props = [];

  // Find the first `{` that looks like a props destructure
  const fnMatch = source.match(
    /(?:function\s+\w+|const\s+\w+\s*=\s*(?:React\.memo\()?)\s*\(\s*\{([^}]*)\}/s
  );
  if (!fnMatch) return props;

  const body = fnMatch[1];

  // Split on commas that are NOT inside nested brackets
  let depth = 0;
  let current = '';
  const parts = [];
  for (const ch of body) {
    if (ch === '{' || ch === '[' || ch === '(') depth++;
    else if (ch === '}' || ch === ']' || ch === ')') depth--;
    if (ch === ',' && depth === 0) { parts.push(current.trim()); current = ''; }
    else current += ch;
  }
  if (current.trim()) parts.push(current.trim());

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed || trimmed.startsWith('...')) continue;

    // name = default
    const withDefault = trimmed.match(/^(\w+)\s*=\s*(.+)$/s);
    if (withDefault) {
      const [, name, defaultVal] = withDefault;
      props.push({ name, default: defaultVal.trim().replace(/\s+/g, ' ') });
    } else {
      // plain name (possibly with rename: propName)
      const plain = trimmed.match(/^(\w+)/);
      if (plain) props.push({ name: plain[1], default: '—' });
    }
  }

  return props;
}

// ---------------------------------------------------------------------------
// Markdown generation
// ---------------------------------------------------------------------------

function buildPropRow(p) {
  const def = p.default === '—' ? '—' : `\`${p.default}\``;
  return `| \`${p.name}\` | — | ${def} | — |`;
}

function buildDoc(name, props, srcFile) {
  const rows = props.length
    ? props.map(buildPropRow).join('\n')
    : '| — | — | — | — |';

  return `# ${name}

> Auto-generated — edit \`${path.relative(ROOT, srcFile)}\` then re-run \`node scripts/generate-docs.js\`.

## Import

\`\`\`jsx
import { ${name} } from 'nexter-ui-component'
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
${rows}

## Usage

\`\`\`jsx
<${name} />
\`\`\`

## CSS Classes

| Class | Purpose |
|-------|---------|
| \`.nxp-${name.toLowerCase()}\` | Root element |
`;
}

// ---------------------------------------------------------------------------
// Index generation
// ---------------------------------------------------------------------------

function buildIndex(names) {
  const rows = names
    .map(n => `| [\`${n}\`](./components/${n}.md) | — |`)
    .join('\n');

  return `# Nexter UI Component — Documentation

> Auto-generated index. Run \`node scripts/generate-docs.js\` to refresh.

## Components (${names.length})

| Component | Description |
|-----------|-------------|
${rows}

## Install

\`\`\`bash
npm install nexter-ui-component
\`\`\`

\`\`\`jsx
import 'nexter-ui-component/dist/style.css'
import { Button } from 'nexter-ui-component'
\`\`\`
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!fs.existsSync(COMPONENTS)) {
  console.error(`src/components not found at ${COMPONENTS}`);
  process.exit(1);
}

if (!DRY_RUN) ensureDir(OUT_DIR);

const entries = fs.readdirSync(COMPONENTS, { withFileTypes: true });
const names   = [];
let written   = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;

  const name    = entry.name;
  const dir     = path.join(COMPONENTS, name);
  const jsxFile = [
    path.join(dir, `${name}.jsx`),
    path.join(dir, `${name}.tsx`),
    path.join(dir, 'index.jsx'),
    path.join(dir, 'index.tsx'),
  ].find(f => fs.existsSync(f));

  if (!jsxFile) {
    console.warn(`  skip ${name} — no .jsx/.tsx found`);
    continue;
  }

  names.push(name);

  const source = fs.readFileSync(jsxFile, 'utf8');
  const props  = inferProps(source);
  const doc    = buildDoc(name, props, jsxFile);
  const outFile = path.join(OUT_DIR, `${name}.md`);

  writeFile(outFile, doc);
  written++;
}

names.sort();
writeFile(INDEX_FILE, buildIndex(names));

console.log(`\nDone — ${written} component doc(s) + index${DRY_RUN ? ' (dry run, nothing written)' : ''}.`);
