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
    await expect(page.locator('.nxp-btn--danger').first()).toBeVisible();
  });

  test('disabled button is not interactive', async ({ page }) => {
    const disabled = page.locator('.nxp-btn[disabled], .nxp-btn--disabled').first();
    await disabled.scrollIntoViewIfNeeded();
    await expect(disabled).toBeDisabled();
  });

  test('button with icon renders icon svg', async ({ page }) => {
    const btnWithIcon = page.locator('.nxp-btn svg').first();
    await btnWithIcon.scrollIntoViewIfNeeded();
    await expect(btnWithIcon).toBeAttached();
  });
});

test.describe('ConfirmButton', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('shows confirm/cancel inline after first click', async ({ page }) => {
    const confirmBtn = page.locator('.nxp-confirm').first();
    await confirmBtn.scrollIntoViewIfNeeded();
    // Initial state: primary trigger visible
    await expect(confirmBtn.locator('.nxp-confirm__trigger')).toBeVisible();

    // Click trigger → confirm state
    await confirmBtn.locator('.nxp-confirm__trigger').click();
    await expect(confirmBtn.locator('.nxp-confirm__ok')).toBeVisible();
    await expect(confirmBtn.locator('.nxp-confirm__cancel')).toBeVisible();
  });

  test('cancel returns to initial state', async ({ page }) => {
    const confirmBtn = page.locator('.nxp-confirm').first();
    await confirmBtn.scrollIntoViewIfNeeded();
    await confirmBtn.locator('.nxp-confirm__trigger').click();
    await confirmBtn.locator('.nxp-confirm__cancel').click();
    // Back to trigger
    await expect(confirmBtn.locator('.nxp-confirm__trigger')).toBeVisible();
    await expect(confirmBtn.locator('.nxp-confirm__ok')).not.toBeVisible();
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
