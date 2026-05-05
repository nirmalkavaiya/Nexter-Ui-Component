const STORAGE_KEY = 'nxp-theme';

const PRESETS = {
  default: {
    '--nxp-primary':    '221 72% 40%',
    '--nxp-accent':     '244 75% 57%',
    '--nxp-radius':     '6px',
    '--nxp-radius-sm':  '4px',
    '--nxp-radius-lg':  '12px',
  },
  rounded: {
    '--nxp-primary':    '221 72% 40%',
    '--nxp-accent':     '244 75% 57%',
    '--nxp-radius':     '10px',
    '--nxp-radius-sm':  '6px',
    '--nxp-radius-lg':  '16px',
  },
  sharp: {
    '--nxp-primary':    '221 72% 40%',
    '--nxp-accent':     '244 75% 57%',
    '--nxp-radius':     '2px',
    '--nxp-radius-sm':  '1px',
    '--nxp-radius-lg':  '4px',
  },
  ocean: {
    '--nxp-primary':    '200 85% 40%',
    '--nxp-accent':     '180 70% 45%',
    '--nxp-radius':     '8px',
    '--nxp-radius-sm':  '4px',
    '--nxp-radius-lg':  '14px',
  },
  rose: {
    '--nxp-primary':    '346 77% 49%',
    '--nxp-accent':     '330 80% 55%',
    '--nxp-radius':     '8px',
    '--nxp-radius-sm':  '4px',
    '--nxp-radius-lg':  '14px',
  },
};

function getRoot() {
  return typeof document !== 'undefined' ? document.documentElement : null;
}

/**
 * Set a single CSS token on :root.
 * @param {string} token - e.g. '--nxp-primary'
 * @param {string} value - e.g. '221 72% 40%'
 */
export function setToken(token, value) {
  const root = getRoot();
  if (root) root.style.setProperty(token, value);
}

/**
 * Apply an object of { '--nxp-token': 'value' } overrides to :root.
 * @param {Record<string, string>} tokens
 */
export function setTheme(tokens) {
  const root = getRoot();
  if (!root) return;
  Object.entries(tokens).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });
}

/**
 * Apply a named preset. Unknown preset names are ignored.
 * @param {keyof typeof PRESETS} name
 */
export function applyPreset(name) {
  const preset = PRESETS[name];
  if (preset) setTheme(preset);
}

export { PRESETS };

/**
 * Set dark/light/system mode.
 * @param {'light'|'dark'|'system'} mode
 */
export function setColorMode(mode) {
  const root = getRoot();
  if (!root) return;

  root.classList.remove('dark', 'nxp-dark', 'nxp-light');
  root.removeAttribute('data-theme');

  if (mode === 'dark') {
    root.classList.add('nxp-dark');
    root.setAttribute('data-theme', 'dark');
  } else if (mode === 'light') {
    root.classList.add('nxp-light');
    root.setAttribute('data-theme', 'light');
  }
  // 'system' — remove all classes/attrs, let @media handle it

  try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
}

/**
 * Toggle between dark and light. Treats 'system' as 'light'.
 */
export function toggleDark() {
  const root = getRoot();
  if (!root) return;
  const isDark =
    root.classList.contains('nxp-dark') ||
    root.getAttribute('data-theme') === 'dark';
  setColorMode(isDark ? 'light' : 'dark');
}

/**
 * Read the persisted color mode and apply it. Call once on app init.
 */
export function initTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setColorMode(stored);
  } catch (_) {}
}
