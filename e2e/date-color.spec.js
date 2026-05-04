import { test, expect } from '@playwright/test';
import { gotoDemo, waitForAnimation } from './helpers.js';

test.describe('DatePicker', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  async function openDatePicker(page) {
    const dp = page.locator('.nxp-date').first();
    await dp.scrollIntoViewIfNeeded();
    await dp.locator('.nxp-date__trigger').click();
    await expect(dp.locator('.nxp-date__popover')).toBeVisible();
    return dp;
  }

  test('trigger is visible', async ({ page }) => {
    const trigger = page.locator('.nxp-date__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await expect(trigger).toBeVisible();
  });

  test('clicking trigger opens calendar popover', async ({ page }) => {
    await openDatePicker(page);
  });

  test('calendar renders 7 day-of-week headers', async ({ page }) => {
    const dp = await openDatePicker(page);
    const heads = dp.locator('.nxp-date__dow');
    expect(await heads.count()).toBe(7);
  });

  test('calendar renders 42 day cells (6×7 grid)', async ({ page }) => {
    const dp = await openDatePicker(page);
    const cells = dp.locator('.nxp-date__day');
    expect(await cells.count()).toBe(42);
  });

  test('month/year label is visible', async ({ page }) => {
    const dp = await openDatePicker(page);
    await expect(dp.locator('.nxp-date__month-label')).toBeVisible();
  });

  test('clicking next month navigates forward', async ({ page }) => {
    const dp = await openDatePicker(page);
    const label = dp.locator('.nxp-date__month-label');
    const before = await label.textContent();
    await dp.locator('.nxp-date__nav').last().click();
    const after = await label.textContent();
    expect(after).not.toBe(before);
  });

  test('clicking a day selects it (trigger shows date)', async ({ page }) => {
    const dp = await openDatePicker(page);
    // Click a non-outside day
    const dayBtn = dp.locator('.nxp-date__day').filter({ hasNot: page.locator('.nxp-date__day--outside') }).nth(5);
    await dayBtn.click();
    // Popover should close and trigger should contain a date value
    await expect(dp.locator('.nxp-date__popover')).not.toBeVisible();
    await expect(dp.locator('.nxp-date__trigger')).not.toContainText('Pick a date');
  });

  test('clear button removes selection', async ({ page }) => {
    const dp = await openDatePicker(page);
    const dayBtn = dp.locator('.nxp-date__day').filter({ hasNot: page.locator('.nxp-date__day--outside') }).nth(5);
    await dayBtn.click();
    // Clear button appears
    const clearBtn = dp.locator('.nxp-date__clear');
    if (await clearBtn.count() > 0) {
      await clearBtn.click();
      await expect(dp.locator('.nxp-date__value--placeholder')).toBeVisible();
    }
  });

  test('today cell has today class', async ({ page }) => {
    const dp = await openDatePicker(page);
    await expect(dp.locator('.nxp-date__day--today')).toBeAttached();
  });
});

test.describe('DateRangePicker', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  async function openDRP(page) {
    const drp = page.locator('.nxp-drp').first();
    await drp.scrollIntoViewIfNeeded();
    await drp.locator('.nxp-drp__trigger').click();
    await expect(drp.locator('.nxp-drp__popover')).toBeVisible();
    return drp;
  }

  test('trigger renders start/end segments', async ({ page }) => {
    const drp = page.locator('.nxp-drp').first();
    await drp.scrollIntoViewIfNeeded();
    const segments = drp.locator('.nxp-drp__segment');
    expect(await segments.count()).toBe(2);
  });

  test('clicking trigger opens dual-calendar popover', async ({ page }) => {
    await openDRP(page);
  });

  test('two calendar panels are rendered side by side', async ({ page }) => {
    const drp = await openDRP(page);
    expect(await drp.locator('.nxp-drp__cal').count()).toBe(2);
  });

  test('selecting start date changes first segment', async ({ page }) => {
    const drp = await openDRP(page);
    const firstCal = drp.locator('.nxp-drp__cal').first();
    const day = firstCal.locator('.nxp-date__day').filter({
      hasNot: page.locator('.nxp-date__day--outside'),
    }).nth(3);
    await day.click();
    // Still open — waiting for end date
    await expect(drp.locator('.nxp-drp__popover')).toBeVisible();
  });

  test('selecting start then end closes popover', async ({ page }) => {
    const drp = await openDRP(page);
    const days = drp.locator('.nxp-date__day').filter({
      hasNot: page.locator('.nxp-date__day--outside'),
    });
    await days.nth(2).click();  // start
    await days.nth(8).click();  // end
    await expect(drp.locator('.nxp-drp__popover')).not.toBeVisible();
    // Both segments should have values
    const segments = drp.locator('.nxp-drp__segment');
    const s0 = await segments.nth(0).textContent();
    const s1 = await segments.nth(1).textContent();
    expect(s0).toMatch(/\d{4}-\d{2}-\d{2}/);
    expect(s1).toMatch(/\d{4}-\d{2}-\d{2}/);
  });
});

test.describe('ColorPicker', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  async function openColorPicker(page) {
    const cp = page.locator('.nxp-cpicker').first();
    await cp.scrollIntoViewIfNeeded();
    await cp.locator('.nxp-cpicker__trigger').click();
    await expect(cp.locator('.nxp-cpicker__panel')).toBeVisible();
    return cp;
  }

  test('trigger shows swatch and hex label', async ({ page }) => {
    const trigger = page.locator('.nxp-cpicker__trigger').first();
    await trigger.scrollIntoViewIfNeeded();
    await expect(trigger.locator('.nxp-cpicker__trigger-hex')).toBeVisible();
    await expect(trigger.locator('.nxp-cpicker__trigger-swatch')).toBeVisible();
  });

  test('clicking trigger opens color panel', async ({ page }) => {
    await openColorPicker(page);
  });

  test('panel contains 2D gradient box', async ({ page }) => {
    const cp = await openColorPicker(page);
    await expect(cp.locator('.nxp-cpicker__gradient')).toBeVisible();
  });

  test('panel contains hue slider', async ({ page }) => {
    const cp = await openColorPicker(page);
    await expect(cp.locator('.nxp-cpicker__hue')).toBeVisible();
  });

  test('hex input shows current color value', async ({ page }) => {
    const cp = await openColorPicker(page);
    const hexInput = cp.locator('.nxp-cpicker__hex-input');
    const value = await hexInput.inputValue();
    expect(value).toMatch(/^[0-9A-Fa-f]{6}$/);
  });

  test('hex input accepts typed value', async ({ page }) => {
    const cp = await openColorPicker(page);
    const hexInput = cp.locator('.nxp-cpicker__hex-input');
    await hexInput.fill('FF0000');
    await hexInput.press('Tab');
    // Trigger hex label should update to #FF0000
    await expect(cp.locator('.nxp-cpicker__trigger-hex')).toContainText(/FF0000/i);
  });

  test('swatches render and clicking one updates color', async ({ page }) => {
    const cp = await openColorPicker(page);
    const swatches = cp.locator('.nxp-cpicker__swatch');
    expect(await swatches.count()).toBeGreaterThan(0);
    await swatches.first().click();
    // Hex label updates to the swatch color
    const swatchColor = await swatches.first().getAttribute('aria-label');
    if (swatchColor) {
      await expect(cp.locator('.nxp-cpicker__trigger-hex')).toContainText(
        swatchColor.replace('#', '').toUpperCase()
      );
    }
  });

  test('clicking trigger again closes panel', async ({ page }) => {
    const cp = await openColorPicker(page);
    await cp.locator('.nxp-cpicker__trigger').click();
    await expect(cp.locator('.nxp-cpicker__panel')).not.toBeVisible();
  });
});

test.describe('SortableList', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('sortable list renders items', async ({ page }) => {
    const list = page.locator('.nxp-sortable').first();
    await list.scrollIntoViewIfNeeded();
    await expect(list).toBeVisible();
    expect(await list.locator('.nxp-sortable__item').count()).toBeGreaterThan(1);
  });

  test('each item has a drag handle', async ({ page }) => {
    const handle = page.locator('.nxp-sortable__handle').first();
    await handle.scrollIntoViewIfNeeded();
    await expect(handle).toBeVisible();
  });
});
