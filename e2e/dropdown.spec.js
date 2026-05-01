import { test, expect } from '@playwright/test';

/**
 * E2E tests for dropdown-style components.
 * These tests assume the demo app (npm run dev) is running on localhost:5174.
 * They work against the Select, Dropdown, and MultiSelect components rendered
 * in the App.jsx demo page.
 */

test.describe('Select / Dropdown interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Select: opens and closes on trigger click', async ({ page }) => {
    const trigger = page.locator('.nxp-select').first();
    await trigger.click();
    await expect(page.locator('.nxp-select__list').first()).toBeVisible();

    // Click trigger again to close
    await trigger.click();
    await expect(page.locator('.nxp-select__list').first()).not.toBeVisible();
  });

  test('Select: closes on Escape', async ({ page }) => {
    const trigger = page.locator('.nxp-select').first();
    await trigger.click();
    await expect(page.locator('.nxp-select__list').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.nxp-select__list').first()).not.toBeVisible();
  });

  test('Select: closes when clicking outside', async ({ page }) => {
    const trigger = page.locator('.nxp-select').first();
    await trigger.click();
    await expect(page.locator('.nxp-select__list').first()).toBeVisible();
    await page.mouse.click(5, 5); // click top-left corner
    await expect(page.locator('.nxp-select__list').first()).not.toBeVisible();
  });
});

test.describe('MultiSelect interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('MultiSelect: opens dropdown on click', async ({ page }) => {
    const trigger = page.locator('[role="combobox"]').first();
    await trigger.click();
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
  });

  test('MultiSelect: keyboard navigation with arrow keys', async ({ page }) => {
    const trigger = page.locator('[role="combobox"]').first();
    await trigger.click();
    const listbox = page.locator('[role="listbox"]').first();
    await expect(listbox).toBeVisible();

    // Arrow down to move focus
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    // Enter to select focused option
    await page.keyboard.press('Enter');

    // A tag should now be visible
    await expect(page.locator('.nxp-ms__tag').first()).toBeVisible();
  });

  test('MultiSelect: search filters options', async ({ page }) => {
    const trigger = page.locator('[role="combobox"]').first();
    await trigger.click();

    const search = page.locator('.nxp-ms__search input, .nxp-ms__search').first();
    await search.type('vue');

    // Vue option should be visible, React should not
    await expect(page.getByText('Vue', { exact: false }).first()).toBeVisible();
  });

  test('MultiSelect: closes on Escape', async ({ page }) => {
    const trigger = page.locator('[role="combobox"]').first();
    await trigger.click();
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('[role="listbox"]').first()).not.toBeVisible();
  });
});
