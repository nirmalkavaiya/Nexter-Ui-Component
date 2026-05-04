import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

test.describe('Accordion', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('accordion renders items', async ({ page }) => {
    const acc = page.locator('.nxp-accordion').first();
    await acc.scrollIntoViewIfNeeded();
    expect(await acc.locator('.nxp-accordion__item').count()).toBeGreaterThan(0);
  });

  test('clicking header opens body', async ({ page }) => {
    const acc = page.locator('.nxp-accordion').first();
    await acc.scrollIntoViewIfNeeded();
    // Click a closed item's head
    const closedHead = acc.locator('.nxp-accordion__item:not(.is-open) .nxp-accordion__head').first();
    if (await closedHead.count() > 0) {
      await closedHead.click();
      await expect(acc.locator('.nxp-accordion__item.is-open .nxp-accordion__body').first()).toBeVisible();
    }
  });

  test('open item has is-open class', async ({ page }) => {
    const acc = page.locator('.nxp-accordion').first();
    await acc.scrollIntoViewIfNeeded();
    const head = acc.locator('.nxp-accordion__head').first();
    await head.click();
    await expect(acc.locator('.nxp-accordion__item.is-open').first()).toBeAttached();
  });
});

test.describe('Tabs', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('tab list renders', async ({ page }) => {
    const tabList = page.locator('[role="tablist"]').first();
    await tabList.scrollIntoViewIfNeeded();
    await expect(tabList).toBeVisible();
    expect(await tabList.locator('[role="tab"]').count()).toBeGreaterThan(1);
  });

  test('clicking a tab sets aria-selected=true', async ({ page }) => {
    const tabList = page.locator('[role="tablist"]').first();
    await tabList.scrollIntoViewIfNeeded();
    const tab = tabList.locator('[role="tab"]').nth(1);
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  });

  test('active tab panel is visible', async ({ page }) => {
    const tabList = page.locator('[role="tablist"]').first();
    await tabList.scrollIntoViewIfNeeded();
    const tab = tabList.locator('[role="tab"]').nth(1);
    await tab.click();
    const panelId = await tab.getAttribute('aria-controls');
    if (panelId) {
      await expect(page.locator(`#${panelId}`)).toBeVisible();
    }
  });
});

test.describe('Breadcrumb', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('breadcrumb renders with at least 2 items', async ({ page }) => {
    const bc = page.locator('.nxp-bc').first();
    await bc.scrollIntoViewIfNeeded();
    await expect(bc).toBeVisible();
    expect(await bc.locator('.nxp-bc__item').count()).toBeGreaterThanOrEqual(2);
  });

  test('last item has aria-current="page"', async ({ page }) => {
    await page.locator('.nxp-bc').first().scrollIntoViewIfNeeded();
    await expect(page.locator('[aria-current="page"]').first()).toBeAttached();
  });
});

test.describe('Pagination', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('pagination renders nav', async ({ page }) => {
    const pager = page.locator('.nxp-pagination').first();
    await pager.scrollIntoViewIfNeeded();
    await expect(pager).toBeVisible();
  });

  test('has at least one active page item', async ({ page }) => {
    const pager = page.locator('.nxp-pagination').first();
    await pager.scrollIntoViewIfNeeded();
    await expect(pager.locator('.nxp-pagination__item.is-active')).toBeAttached();
  });

  test('next button advances page', async ({ page }) => {
    const pager = page.locator('.nxp-pagination').first();
    await pager.scrollIntoViewIfNeeded();
    const activeBefore = await pager.locator('.nxp-pagination__item.is-active').textContent();
    const next = pager.locator('.nxp-pagination__item--next');
    if (await next.isEnabled()) {
      await next.click();
      const activeAfter = await pager.locator('.nxp-pagination__item.is-active').textContent();
      expect(activeAfter).not.toBe(activeBefore);
    }
  });
});

test.describe('Stepper', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('stepper renders with buttons', async ({ page }) => {
    const stepper = page.locator('.nxp-stepper').first();
    await stepper.scrollIntoViewIfNeeded();
    await expect(stepper).toBeVisible();
    expect(await stepper.locator('.nxp-stepper__btn').count()).toBe(2);
  });

  test('increment button increases value', async ({ page }) => {
    const stepper = page.locator('.nxp-stepper').first();
    await stepper.scrollIntoViewIfNeeded();
    const input = stepper.locator('.nxp-stepper__input');
    const before = Number(await input.inputValue());
    await stepper.locator('.nxp-stepper__btn').last().click();
    const after = Number(await input.inputValue());
    expect(after).toBeGreaterThan(before);
  });

  test('decrement button decreases value', async ({ page }) => {
    const stepper = page.locator('.nxp-stepper').first();
    await stepper.scrollIntoViewIfNeeded();
    const input = stepper.locator('.nxp-stepper__input');
    const before = Number(await input.inputValue());
    await stepper.locator('.nxp-stepper__btn').first().click();
    const after = Number(await input.inputValue());
    expect(after).toBeLessThan(before);
  });
});
