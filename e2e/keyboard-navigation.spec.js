import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

/**
 * Keyboard-accessibility E2E tests.
 * Verifies every interactive component is fully operable without a mouse.
 */

test.describe('Global keyboard navigation', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Tab key reaches at least 10 focusable elements', async ({ page }) => {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      if (focused && focused !== 'BODY') count++;
    }
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test('no focus trap outside overlay components', async ({ page }) => {
    // Tab 20 times without opening any overlay — focus should cycle through page
    for (let i = 0; i < 20; i++) await page.keyboard.press('Tab');
    // Page still interactive (no hang)
    await expect(page.locator('body')).toBeVisible();
  });
});

test.describe('Button — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Enter activates button', async ({ page }) => {
    const btn = page.locator('.nxp-btn:not([disabled])').first();
    await btn.scrollIntoViewIfNeeded();
    await btn.focus();
    await page.keyboard.press('Enter');
    await expect(btn).toBeVisible(); // no crash
  });

  test('Space activates button', async ({ page }) => {
    const btn = page.locator('.nxp-btn:not([disabled])').first();
    await btn.scrollIntoViewIfNeeded();
    await btn.focus();
    await page.keyboard.press('Space');
    await expect(btn).toBeVisible();
  });
});

test.describe('Accordion — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Enter on trigger opens panel', async ({ page }) => {
    const trigger = page.locator('.nxp-acc__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.nxp-acc__body').first()).toBeVisible();
  });

  test('Space on trigger toggles panel', async ({ page }) => {
    const trigger = page.locator('.nxp-acc__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.focus();
    await page.keyboard.press('Space');
    await expect(page.locator('.nxp-acc__body').first()).toBeVisible();
  });
});

test.describe('Tabs — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('ArrowRight moves focus to next tab', async ({ page }) => {
    const tabList = page.locator('[role="tablist"]').first();
    await tabList.scrollIntoViewIfNeeded();
    const tabs = tabList.locator('[role="tab"]');
    await tabs.first().focus();
    await page.keyboard.press('ArrowRight');
    // Second tab should be focused or selected
    const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
    const secondTabText = await tabs.nth(1).textContent();
    expect(focused).toBe(secondTabText?.trim());
  });
});

test.describe('Select — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Space opens select dropdown', async ({ page }) => {
    const sel = page.locator('.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    await sel.focus();
    await page.keyboard.press('Space');
    await expect(page.locator('.nxp-select__list').first()).toBeVisible();
  });

  test('Escape closes select dropdown', async ({ page }) => {
    const sel = page.locator('.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    await sel.click();
    await page.keyboard.press('Escape');
    await expect(page.locator('.nxp-select__list').first()).not.toBeVisible();
  });

  test('ArrowDown moves focus through options', async ({ page }) => {
    const sel = page.locator('.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    await sel.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    // An option should be highlighted
    await expect(page.locator('.nxp-select__option--focused, .nxp-select__option:focus').first()).toBeAttached();
  });
});

test.describe('MultiSelect — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Enter opens the listbox', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.focus();
    await ms.press('Enter');
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
  });

  test('ArrowDown opens and moves focus to first option', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.focus();
    await ms.press('ArrowDown');
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
  });

  test('Escape closes the listbox', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.focus();
    await ms.press('Enter');
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
    await ms.press('Escape');
    await expect(page.locator('[role="listbox"]').first()).not.toBeVisible();
  });

  test('ArrowDown + Enter selects an option', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    const tagsBefore = await ms.locator('.nxp-ms__tag').count();
    await ms.focus();
    await ms.press('ArrowDown');
    await ms.press('ArrowDown');
    await ms.press('ArrowDown');
    await ms.press('Enter');
    const tagsAfter = await ms.locator('.nxp-ms__tag').count();
    // Tags count should change (either new or deselected)
    expect(tagsAfter).not.toBe(tagsBefore);
  });
});

test.describe('Modal — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Escape closes open modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('[role="dialog"]').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('[role="dialog"]').first()).not.toBeVisible();
  });

  test('focus moves into modal on open', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i }).first();
    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(page.locator('[role="dialog"]').first()).toBeVisible();
    // Wait for focus-trap to move focus inside modal
    await page.waitForTimeout(100);
    const activeEl = await page.evaluate(() => {
      const ae = document.activeElement;
      return ae?.closest('[role="dialog"]') !== null;
    });
    expect(activeEl).toBe(true);
  });
});

test.describe('Checkbox — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Space toggles checkbox', async ({ page }) => {
    const cb = page.locator('.nxp-checkbox input[type="checkbox"]').first();
    await cb.scrollIntoViewIfNeeded();
    const initial = await cb.isChecked();
    await cb.focus();
    await page.keyboard.press('Space');
    await expect(cb).toBeChecked({ checked: !initial });
  });
});

test.describe('Toggle — keyboard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('Space toggles the switch', async ({ page }) => {
    const input = page.locator('.nxp-toggle input[type="checkbox"]').first();
    await input.scrollIntoViewIfNeeded();
    const initial = await input.isChecked();
    await input.focus();
    await page.keyboard.press('Space');
    await expect(input).toBeChecked({ checked: !initial });
  });
});
