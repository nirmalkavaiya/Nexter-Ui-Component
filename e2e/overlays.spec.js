import { test, expect } from '@playwright/test';
import { gotoDemo, waitForAnimation } from './helpers.js';

/**
 * Modal, Sheet, Popover, Tooltip, Drawer — all overlay / floating elements.
 */

test.describe('Modal', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('opens on trigger click', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('[role="dialog"]').first()).toBeVisible();
  });

  test('close button dismisses modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    const modal = page.locator('[role="dialog"]').first();
    await expect(modal).toBeVisible();
    await modal.locator('.nxp-modal__close').click();
    await expect(modal).not.toBeVisible();
  });

  test('Escape key closes modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('[role="dialog"]').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('[role="dialog"]').first()).not.toBeVisible();
  });

  test('backdrop click closes modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    const backdrop = page.locator('.nxp-modal-backdrop').first();
    await expect(backdrop).toBeVisible();
    // Click the backdrop itself (not the modal panel)
    await backdrop.click({ position: { x: 5, y: 5 } });
    await expect(backdrop).not.toBeVisible();
  });

  test('modal has aria-modal="true"', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    const modal = page.locator('[role="dialog"]').first();
    await expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  test('body scroll is locked while modal is open', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe('hidden');
  });
});

test.describe('Sheet', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('sheet opens on trigger click', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open sheet/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('.nxp-sheet__panel, [role="dialog"]').first()).toBeVisible();
  });

  test('sheet closes on Escape', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open sheet/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    const sheet = page.locator('.nxp-sheet__panel, .nxp-sheet').first();
    await expect(sheet).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(sheet).not.toBeVisible();
  });
});

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('popover opens on trigger click', async ({ page }) => {
    const trigger = page.locator('.nxp-pop__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.click();
    await expect(page.locator('.nxp-pop__content').first()).toBeVisible();
  });

  test('popover closes on outside click', async ({ page }) => {
    const trigger = page.locator('.nxp-pop__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.click();
    await expect(page.locator('.nxp-pop__content').first()).toBeVisible();
    await page.mouse.click(5, 5);
    await expect(page.locator('.nxp-pop__content').first()).not.toBeVisible();
  });
});

test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('tooltip content appears on hover', async ({ page }) => {
    const trigger = page.locator('.nxp-tip__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.hover();
    await waitForAnimation(page, 250);
    await expect(page.locator('.nxp-tip__bubble').first()).toBeVisible();
  });

  test('tooltip hides after mouse leaves', async ({ page }) => {
    const trigger = page.locator('.nxp-tip__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.hover();
    await waitForAnimation(page, 250);
    await page.mouse.move(0, 0);
    await waitForAnimation(page, 300);
    await expect(page.locator('.nxp-tip__bubble').first()).not.toBeVisible();
  });
});

test.describe('Alert', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('info alert is visible', async ({ page }) => {
    await expect(page.locator('.nxp-alert--info, .nxp-alert').first()).toBeVisible();
  });

  test('dismissible alert hides after close click', async ({ page }) => {
    const alert = page.locator('.nxp-alert').filter({ has: page.locator('.nxp-alert__close') }).first();
    await alert.scrollIntoViewIfNeeded();
    if (await alert.count() > 0) {
      await alert.locator('.nxp-alert__close').click();
      await expect(alert).not.toBeVisible();
    }
  });
});

test.describe('Notice / Banner', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('notice renders', async ({ page }) => {
    await expect(page.locator('.nxp-notice').first()).toBeAttached();
  });

  test('banner renders', async ({ page }) => {
    await expect(page.locator('.nxp-banner').first()).toBeAttached();
  });
});
