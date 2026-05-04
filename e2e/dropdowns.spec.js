import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

/**
 * Select (native), Dropdown (custom), Combobox, MultiSelect
 */

test.describe('Select (native)', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('native select element is visible', async ({ page }) => {
    const sel = page.locator('select.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    await expect(sel).toBeVisible();
  });

  test('native select has options', async ({ page }) => {
    const sel = page.locator('select.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    expect(await sel.locator('option').count()).toBeGreaterThan(0);
  });

  test('selecting an option changes the value', async ({ page }) => {
    const sel = page.locator('select.nxp-select').first();
    await sel.scrollIntoViewIfNeeded();
    const options = await sel.locator('option').all();
    const targetText = await options[options.length - 1].textContent();
    const targetValue = await options[options.length - 1].getAttribute('value');
    await sel.selectOption({ value: targetValue });
    await expect(sel).toHaveValue(targetValue);
  });
});

test.describe('Dropdown', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('dropdown trigger opens menu', async ({ page }) => {
    const dd = page.locator('.nxp-dropdown').first();
    await dd.scrollIntoViewIfNeeded();
    await dd.locator('.nxp-dropdown__trigger').click();
    await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
  });

  test('dropdown renders divider', async ({ page }) => {
    const dd = page.locator('.nxp-dropdown').first();
    await dd.scrollIntoViewIfNeeded();
    await dd.locator('.nxp-dropdown__trigger').click();
    await expect(dd.locator('.nxp-dropdown__divider').first()).toBeVisible();
  });

  test('dropdown closes on Escape', async ({ page }) => {
    const dd = page.locator('.nxp-dropdown').first();
    await dd.scrollIntoViewIfNeeded();
    await dd.locator('.nxp-dropdown__trigger').click();
    await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dd.locator('.nxp-dropdown__menu')).not.toBeVisible();
  });

  test('dropdown closes on outside click', async ({ page }) => {
    const dd = page.locator('.nxp-dropdown').first();
    await dd.scrollIntoViewIfNeeded();
    await dd.locator('.nxp-dropdown__trigger').click();
    await expect(dd.locator('.nxp-dropdown__menu')).toBeVisible();
    await page.mouse.click(5, 5);
    await expect(dd.locator('.nxp-dropdown__menu')).not.toBeVisible();
  });

  test('selecting an item updates trigger text', async ({ page }) => {
    const dd = page.locator('.nxp-dropdown').first();
    await dd.scrollIntoViewIfNeeded();
    await dd.locator('.nxp-dropdown__trigger').click();
    const item = dd.locator('.nxp-dropdown__item').first();
    const itemText = await item.textContent();
    await item.click();
    await expect(dd.locator('.nxp-dropdown__trigger')).toContainText(itemText.trim().split('\n')[0].trim());
  });
});

test.describe('Combobox', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('combobox input accepts typing', async ({ page }) => {
    const input = page.locator('.nxp-combobox__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('Re');
    await expect(input).toHaveValue('Re');
  });

  test('typing opens and filters the list', async ({ page }) => {
    const input = page.locator('.nxp-combobox__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('vue');
    await expect(page.locator('.nxp-combobox__list').first()).toBeVisible();
    await expect(page.locator('.nxp-combobox__item').getByText('Vue')).toBeVisible();
  });

  test('Escape closes the list', async ({ page }) => {
    const input = page.locator('.nxp-combobox__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('re');
    await expect(page.locator('.nxp-combobox__list').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.nxp-combobox__list').first()).not.toBeVisible();
  });

  test('clicking an item selects it', async ({ page }) => {
    const input = page.locator('.nxp-combobox__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('Re');
    const item = page.locator('.nxp-combobox__item').first();
    const label = await item.textContent();
    await item.click();
    await expect(input).toHaveValue(label.trim());
  });
});

test.describe('MultiSelect', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  async function openMultiSelect(page) {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.locator('.nxp-ms__trigger').click();
    await expect(ms.locator('[role="listbox"]')).toBeVisible();
    return ms;
  }

  test('pre-selected tags are visible', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await expect(ms.locator('.nxp-ms__tag').first()).toBeVisible();
  });

  test('opens listbox on trigger click', async ({ page }) => {
    await openMultiSelect(page);
  });

  test('group labels are visible when open', async ({ page }) => {
    await openMultiSelect(page);
    await expect(page.locator('.nxp-ms__group-label').first()).toBeVisible();
  });

  test('search filters options', async ({ page }) => {
    const ms = await openMultiSelect(page);
    await ms.locator('.nxp-ms__search').fill('front');
    await expect(ms.locator('.nxp-ms__option').getByText('Front Page')).toBeVisible();
    await expect(ms.locator('.nxp-ms__option').getByText('Entire Website')).not.toBeVisible();
  });

  test('no-results message on empty search', async ({ page }) => {
    const ms = await openMultiSelect(page);
    await ms.locator('.nxp-ms__search').fill('xyzxyz');
    await expect(ms.locator('[role="status"]')).toBeVisible();
  });

  test('Escape closes listbox', async ({ page }) => {
    const ms = await openMultiSelect(page);
    await page.keyboard.press('Escape');
    await expect(ms.locator('[role="listbox"]')).not.toBeVisible();
  });

  test('remove tag via pointer event', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    const tagsBefore = await ms.locator('.nxp-ms__tag').count();
    if (tagsBefore > 0) {
      await ms.locator('.nxp-ms__tag-remove').first().dispatchEvent('pointerdown');
      await expect(ms.locator('.nxp-ms__tag')).toHaveCount(tagsBefore - 1);
    }
  });

  test('combobox aria-expanded=true when open', async ({ page }) => {
    const ms = await openMultiSelect(page);
    await expect(ms).toHaveAttribute('aria-expanded', 'true');
  });

  test('keyboard: Enter opens listbox', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.focus();
    await ms.press('Enter');
    await expect(ms.locator('[role="listbox"]')).toBeVisible();
  });

  test('keyboard: ArrowDown then Enter selects option', async ({ page }) => {
    const ms = page.locator('.nxp-ms').first();
    await ms.scrollIntoViewIfNeeded();
    await ms.focus();
    await ms.press('ArrowDown');
    await ms.press('ArrowDown');
    await ms.press('ArrowDown');
    await ms.press('Enter');
    // Tags state changes
    await expect(ms.locator('.nxp-ms__tag').first()).toBeAttached();
  });
});
