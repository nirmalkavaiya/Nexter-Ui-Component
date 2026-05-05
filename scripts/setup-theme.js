#!/usr/bin/env node
/**
 * Nexter UI — Theme setup script
 * Run: node node_modules/nexter-ui-component/scripts/setup-theme.js
 *
 * Copies globals.css into your project and prints Tailwind @import instructions.
 */

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const PKG_ROOT  = join(__dirname, '..');
const CWD       = process.cwd();

const SRC_GLOBALS = join(PKG_ROOT, 'src', 'styles', 'globals.css');
const DEST_DIR    = join(CWD, 'src', 'styles');
const DEST_GLOBALS = join(DEST_DIR, 'nxp-globals.css');

function log(msg) { process.stdout.write(msg + '\n'); }
function ok(msg)  { log('\x1b[32m✓\x1b[0m ' + msg); }
function info(msg){ log('\x1b[34mℹ\x1b[0m ' + msg); }
function warn(msg){ log('\x1b[33m⚠\x1b[0m ' + msg); }

// ── 1. Copy globals.css ───────────────────────────────────────────
if (!existsSync(SRC_GLOBALS)) {
  warn('globals.css not found in package — skipping copy.');
} else {
  if (!existsSync(DEST_DIR)) mkdirSync(DEST_DIR, { recursive: true });

  if (existsSync(DEST_GLOBALS)) {
    warn('nxp-globals.css already exists — skipping (delete it first to overwrite).');
  } else {
    copyFileSync(SRC_GLOBALS, DEST_GLOBALS);
    ok('Copied globals.css → src/styles/nxp-globals.css');
  }
}

// ── 2. Print Tailwind setup instructions ─────────────────────────
log('');
log('\x1b[1mNext steps — add to your Tailwind CSS entry file:\x1b[0m');
log('');
log('  @import "tailwindcss";');
log('  @import "./nxp-globals.css";');
log('');
log('  @custom-variant dark (&:where(.dark, .dark *, [data-theme="dark"], [data-theme="dark"] *));');
log('');
log('  @theme {');
log('    /* Semantic color tokens */');
log('    --color-background:         hsl(var(--nxp-background));');
log('    --color-foreground:         hsl(var(--nxp-foreground));');
log('    --color-primary:            hsl(var(--nxp-primary));');
log('    --color-primary-foreground: hsl(var(--nxp-primary-foreground));');
log('    --color-secondary:          hsl(var(--nxp-secondary));');
log('    --color-muted:              hsl(var(--nxp-muted));');
log('    --color-muted-foreground:   hsl(var(--nxp-muted-foreground));');
log('    --color-accent:             hsl(var(--nxp-accent));');
log('    --color-border:             hsl(var(--nxp-border));');
log('    --color-destructive:        hsl(var(--nxp-destructive));');
log('    --radius:                   var(--nxp-radius);');
log('  }');
log('');

// ── 3. Print theme switching API usage ───────────────────────────
log('\x1b[1mTheme switching API (optional):\x1b[0m');
log('');
log("  import { initTheme, setColorMode, toggleDark, applyPreset } from 'nexter-ui-component/lib/theme';");
log('');
log("  initTheme();                  // restore persisted mode on app load");
log("  setColorMode('dark');         // 'light' | 'dark' | 'system'");
log("  toggleDark();                 // flip current mode");
log("  applyPreset('ocean');         // 'default' | 'rounded' | 'sharp' | 'ocean' | 'rose'");
log('');
log("  // Or use the cn() helper for conditional classes:");
log("  import { cn } from 'nexter-ui-component/lib/utils';");
log("  cn('base-class', condition && 'conditional-class', 'bg-primary text-primary-foreground');");
log('');

ok('Setup complete.');
