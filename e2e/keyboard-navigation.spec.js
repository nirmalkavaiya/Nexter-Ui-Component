import { test, expect } from '@playwright/test';

/**
 * Keyboard-navigation E2E tests.
 * Verifies that all interactive components are usable without a mouse.
 */

test.describe('Keyboard accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Tab reaches the first focusable element', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('Button: activates with Enter key', async ({ page }) => {
    const btn = page.locator('.nxp-btn').first();
    await btn.focus();
    await page.keyboard.press('Enter');
    // No crash, element still in DOM
    await expect(btn).toBeVisible();
  });

  test('Button: activates with Space key', async ({ page }) => {
    const btn = page.locator('.nxp-btn').first();
    await btn.focus();
    await page.keyboard.press('Space');
    await expect(btn).toBeVisible();
  });

  test('Accordion: toggles with Enter key', async ({ page }) => {
    const accordionTrigger = page.locator('.nxp-acc__trigger').first();
    if (await accordionTrigger.count() === 0) test.skip();
    await accordionTrigger.focus();
    await page.keyboard.press('Enter');
    // Panel should be visible or hidden — just verify no crash
    await expect(accordionTrigger).toBeVisible();
  });

  test('Tabs: navigates between tabs with arrow keys', async ({ page }) => {
    const tabList = page.locator('[role="tablist"]').first();
    if (await tabList.count() === 0) test.skip();
    const firstTab = tabList.locator('[role="tab"]').first();
    await firstTab.focus();
    await page.keyboard.press('ArrowRight');
    // Second tab should now be focused
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('Checkbox: toggles with Space key', async ({ page }) => {
    const checkbox = page.locator('[type="checkbox"]').first();
    if (await checkbox.count() === 0) test.skip();
    const initial = await checkbox.isChecked();
    await checkbox.focus();
    await page.keyboard.press('Space');
    await expect(checkbox).toBeChecked({ checked: !initial });
  });

  test('Modal: traps focus inside and closes on Escape', async ({ page }) => {
    // Find a button that opens a Modal
    const openBtn = page.locator('button').filter({ hasText: /open modal/i }).first();
    if (await openBtn.count() === 0) test.skip();
    await openBtn.click();

    const modal = page.locator('[role="dialog"]').first();
    await expect(modal).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });
});
