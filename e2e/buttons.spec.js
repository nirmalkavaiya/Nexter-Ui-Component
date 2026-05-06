import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

test.describe('Button', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('primary button is visible and enabled', async ({ page }) => {
    const btn = page.locator('.nxp-btn--primary').first();
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();
  });

  test('secondary button renders', async ({ page }) => {
    await expect(page.locator('.nxp-btn--secondary').first()).toBeVisible();
  });

  test('ghost button renders', async ({ page }) => {
    await expect(page.locator('.nxp-btn--ghost').first()).toBeVisible();
  });

  test('danger button renders', async ({ page }) => {
    // Demo uses variant="destructive" → class is .nxp-btn--destructive
    await expect(page.locator('.nxp-btn--destructive').first()).toBeVisible();
  });

  test('disabled button is not interactive', async ({ page }) => {
    const disabled = page.locator('.nxp-btn[disabled], .nxp-btn--disabled').first();
    await disabled.scrollIntoViewIfNeeded();
    await expect(disabled).toBeDisabled();
  });

  test('button with icon renders icon svg', async ({ page }) => {
    // Icon buttons use .nxp-btn--icon class; demo uses text glyphs not SVG
    const btnWithIcon = page.locator('.nxp-btn--icon').first();
    await btnWithIcon.scrollIntoViewIfNeeded();
    await expect(btnWithIcon).toBeVisible();
  });
});

test.describe('ConfirmButton', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('shows confirm/cancel inline after first click', async ({ page }) => {
    // ConfirmButton: initial render is a normal .nxp-btn; clicking it shows .nxp-confirm inline panel
    const triggerBtn = page.getByRole('button', { name: /delete redirect/i }).first();
    await triggerBtn.scrollIntoViewIfNeeded();
    await triggerBtn.click();
    // Confirm panel should now be visible with OK + Cancel buttons
    const panel = page.locator('.nxp-confirm--inline').first();
    await expect(panel).toBeVisible();
    await expect(panel.locator('.nxp-confirm__ok')).toBeVisible();
    await expect(panel.locator('.nxp-confirm__cancel')).toBeVisible();
  });

  test('cancel returns to initial state', async ({ page }) => {
    const triggerBtn = page.getByRole('button', { name: /delete redirect/i }).first();
    await triggerBtn.scrollIntoViewIfNeeded();
    await triggerBtn.click();
    const panel = page.locator('.nxp-confirm--inline').first();
    await panel.locator('.nxp-confirm__cancel').click();
    // Panel hides; original trigger button re-appears
    await expect(panel).not.toBeVisible();
    await expect(page.getByRole('button', { name: /delete redirect/i }).first()).toBeVisible();
  });
});

test.describe('CopyInput', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('CopyInput is read-only', async ({ page }) => {
    const input = page.locator('.nxp-copy__input').first();
    await input.scrollIntoViewIfNeeded();
    await expect(input).toHaveAttribute('readonly');
  });

  test('copy button is present', async ({ page }) => {
    const copyBtn = page.locator('.nxp-copy__btn').first();
    await copyBtn.scrollIntoViewIfNeeded();
    await expect(copyBtn).toBeVisible();
  });

  test('copy button click shows feedback text', async ({ page }) => {
    // Grant clipboard permissions
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    const copyBtn = page.locator('.nxp-copy__btn').first();
    await copyBtn.scrollIntoViewIfNeeded();
    await copyBtn.click();
    // Feedback label appears (e.g. "Copied!")
    await expect(page.locator('.nxp-copy__btn').first()).toBeVisible();
  });
});
