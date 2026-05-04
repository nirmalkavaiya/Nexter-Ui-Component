import { createContext, useContext, useEffect, useState, useCallback } from 'react';

/* ── Constants ──────────────────────────────────────────────── */
const STORAGE_KEY = 'nxp-theme';
const DARK_CLASS  = 'nxp-dark';
const LIGHT_CLASS = 'nxp-light';
const DATA_ATTR   = 'data-theme';

/* ── Context ────────────────────────────────────────────────── */
const ThemeContext = createContext(null);

/**
 * ThemeProvider — wraps your app to provide theme switching.
 *
 * @param {object}  props
 * @param {'light'|'dark'|'system'} props.defaultTheme  Initial theme (default: 'system')
 * @param {HTMLElement}             props.target         Element to apply class to (default: document.documentElement)
 * @param {boolean}                 props.storageSync    Persist to localStorage (default: true)
 * @param {React.ReactNode}         props.children
 */
export function ThemeProvider({
  defaultTheme = 'system',
  target,
  storageSync = true,
  children,
}) {
  const [theme, setThemeState] = useState(() => {
    if (storageSync && typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    }
    return defaultTheme;
  });

  /* Apply classes to DOM element (document.documentElement by default) */
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const el = target || document.documentElement;

    el.classList.remove(DARK_CLASS, LIGHT_CLASS);
    el.removeAttribute(DATA_ATTR);

    if (theme === 'dark') {
      el.classList.add(DARK_CLASS);
      el.setAttribute(DATA_ATTR, 'dark');
    } else if (theme === 'light') {
      el.classList.add(LIGHT_CLASS);
      el.setAttribute(DATA_ATTR, 'light');
    }
    // 'system' — no class, CSS @media handles it
  }, [theme, target]);

  const setTheme = useCallback((next) => {
    const value = typeof next === 'function' ? next(theme) : next;
    if (storageSync && typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setThemeState(value);
  }, [theme, storageSync]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'light';
      // 'system' → check actual preference
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'light' : 'dark';
    });
  }, [setTheme]);

  const resolvedTheme = theme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — access current theme and controls.
 *
 * @returns {{ theme: string, resolvedTheme: string, setTheme: function, toggle: function }}
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside <ThemeProvider>');
  }
  return ctx;
}

export default ThemeProvider;
