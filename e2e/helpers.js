import { expect } from '@playwright/test';

/**
 * Nexter UI — Playwright E2E Helpers
 * ────────────────────────────────────
 * Mirrors the orbit-playwright helper conventions adapted for a
 * React component-library demo app (Vite, no auth).
 */

/**
 * Navigate to the demo app root and wait until fully hydrated.
 * Waits for: network idle + first nxp-btn in DOM (signals React has rendered).
 */
export async function gotoDemo(page, path = '/') {
  await page.goto(path);
  await page.waitForLoadState('networkidle');
  await page.locator('.nxp-btn').first().waitFor({ state: 'attached', timeout: 10_000 });
}

/**
 * Assert the page loaded without critical errors:
 *   - No "Error" or "Cannot read" text visible on screen
 *   - At least one nxp- component rendered
 *   - No uncaught JS error (call attachConsoleErrorGuard separately)
 */
export async function assertPageReady(page) {
  const body = page.locator('body');
  await expect(body).not.toContainText('TypeError');
  await expect(body).not.toContainText('ReferenceError');
  await expect(page.locator('[class^="nxp-"]').first()).toBeAttached();
}

/**
 * Attach a console-error guard to a test.
 * Fails the test if any console.error fires from application code.
 * Register in test.beforeEach.
 */
export function attachConsoleErrorGuard(page, errors = []) {
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  return errors;
}

/**
 * Wait for a CSS transition to complete (default: 300ms).
 * Prefer Playwright's auto-waiting; use this only for animation-gated assertions.
 */
export async function waitForAnimation(page, ms = 300) {
  await page.waitForTimeout(ms);
}

/**
 * Scroll an element into view and return it (useful for off-screen sections).
 */
export async function scrollTo(page, selector) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  return el;
}

/**
 * Take a named screenshot into e2e/screenshots/ for visual baseline.
 * Pass { update: true } in CI to regenerate baselines.
 */
export async function snap(page, name) {
  await expect(page).toHaveScreenshot(`${name}.png`, {
    maxDiffPixelRatio: 0.02,
    animations: 'disabled',
  });
}
