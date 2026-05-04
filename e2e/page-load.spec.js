import { test, expect } from '@playwright/test';
import { gotoDemo, assertPageReady, attachConsoleErrorGuard } from './helpers.js';

/**
 * Smoke tests — page-level health.
 * These run first and gate the rest of the suite.
 */

test.describe('Page load & health', () => {
  let consoleErrors;

  test.beforeEach(async ({ page }) => {
    consoleErrors = attachConsoleErrorGuard(page);
    await gotoDemo(page);
  });

  test('demo page loads without network errors', async ({ page }) => {
    await assertPageReady(page);
  });

  test('page title is set', async ({ page }) => {
    await expect(page).toHaveTitle(/.+/);
  });

  test('no React crash (no error boundary fallback)', async ({ page }) => {
    await expect(page.locator('text=Something went wrong')).not.toBeVisible();
    await expect(page.locator('text=Minified React error')).not.toBeVisible();
  });

  test('design tokens applied (CSS custom properties loaded)', async ({ page }) => {
    const brandColor = await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue('--nxp-brand').trim()
    );
    expect(brandColor).toBe('#1E40AF');
  });

  test('Geist font loaded', async ({ page }) => {
    const fontFamily = await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue('--nxp-font').trim()
    );
    expect(fontFamily).toContain('Geist');
  });

  test('no console errors during page load', async () => {
    // Guard fires during beforeEach navigation
    expect(consoleErrors.filter(e => !e.includes('Download the React DevTools'))).toHaveLength(0);
  });

  test('at least 30 nxp- components rendered', async ({ page }) => {
    const count = await page.locator('[class*="nxp-"]').count();
    expect(count).toBeGreaterThan(30);
  });

  test('page is responsive at 375px (mobile)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await assertPageReady(page);
    // No horizontal scroll
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10); // 10px tolerance
  });
});
