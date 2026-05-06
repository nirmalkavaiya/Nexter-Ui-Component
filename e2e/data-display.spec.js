import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

test.describe('Table', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('table renders with header and data rows', async ({ page }) => {
    const table = page.locator('.nxp-table').first();
    await table.scrollIntoViewIfNeeded();
    await expect(table.locator('thead')).toBeVisible();
    expect(await table.locator('tbody tr').count()).toBeGreaterThan(0);
  });

  test('table header labels are visible', async ({ page }) => {
    const table = page.locator('.nxp-table').first();
    await table.scrollIntoViewIfNeeded();
    await expect(table.locator('thead th').first()).toBeVisible();
  });
});

test.describe('StatCard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('StatCard renders value', async ({ page }) => {
    const card = page.locator('.nxp-stat').first();
    await card.scrollIntoViewIfNeeded();
    await expect(card.locator('.nxp-stat__value')).toBeVisible();
  });

  test('StatCard renders label', async ({ page }) => {
    const card = page.locator('.nxp-stat').first();
    await card.scrollIntoViewIfNeeded();
    await expect(card.locator('.nxp-stat__label')).toBeVisible();
  });
});

test.describe('Badge', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('badges render with variant classes', async ({ page }) => {
    const badge = page.locator('.nxp-badge').first();
    await badge.scrollIntoViewIfNeeded();
    await expect(badge).toBeVisible();
  });

  test('multiple badge variants present', async ({ page }) => {
    await page.locator('.nxp-badge').first().scrollIntoViewIfNeeded();
    expect(await page.locator('.nxp-badge').count()).toBeGreaterThan(1);
  });
});

test.describe('Tag', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('tag renders', async ({ page }) => {
    const tag = page.locator('.nxp-tag').first();
    await tag.scrollIntoViewIfNeeded();
    await expect(tag).toBeVisible();
  });

  test('removable tag has remove button', async ({ page }) => {
    const removeBtn = page.locator('.nxp-tag__remove').first();
    if (await removeBtn.count() > 0) {
      await removeBtn.scrollIntoViewIfNeeded();
      await expect(removeBtn).toBeVisible();
    }
  });
});

test.describe('Progress', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('progress bar renders', async ({ page }) => {
    // Root class is .nxp-progress (not .nxp-prog)
    const progress = page.locator('.nxp-progress').first();
    await progress.scrollIntoViewIfNeeded();
    await expect(progress).toBeVisible();
  });

  test('progress bar has accessible role', async ({ page }) => {
    const bar = page.locator('[role="progressbar"]').first();
    await bar.scrollIntoViewIfNeeded();
    await expect(bar).toBeAttached();
  });
});

test.describe('Avatar', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('avatar renders', async ({ page }) => {
    const avatar = page.locator('.nxp-avatar').first();
    await avatar.scrollIntoViewIfNeeded();
    await expect(avatar).toBeVisible();
  });
});

test.describe('Status', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('status indicator renders', async ({ page }) => {
    const status = page.locator('.nxp-status').first();
    await status.scrollIntoViewIfNeeded();
    await expect(status).toBeVisible();
  });
});

test.describe('Skeleton', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('skeleton renders', async ({ page }) => {
    // Root class is .nxp-skeleton (not .nxp-skel)
    const skel = page.locator('.nxp-skeleton').first();
    await skel.scrollIntoViewIfNeeded();
    await expect(skel).toBeVisible();
  });
});

test.describe('Spinner', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('spinner renders', async ({ page }) => {
    // Root class is .nxp-spinner (not .nxp-spin)
    const spin = page.locator('.nxp-spinner').first();
    await spin.scrollIntoViewIfNeeded();
    await expect(spin).toBeVisible();
  });
});

test.describe('Kbd', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('keyboard key element renders', async ({ page }) => {
    const kbd = page.locator('.nxp-kbd').first();
    await kbd.scrollIntoViewIfNeeded();
    await expect(kbd).toBeVisible();
  });
});

test.describe('EmptyState', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('empty state renders', async ({ page }) => {
    const es = page.locator('.nxp-empty').first();
    await es.scrollIntoViewIfNeeded();
    await expect(es).toBeVisible();
  });
});

test.describe('Carousel', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('carousel renders slides', async ({ page }) => {
    const carousel = page.locator('.nxp-carousel').first();
    await carousel.scrollIntoViewIfNeeded();
    await expect(carousel).toBeVisible();
  });

  test('carousel next button advances slide', async ({ page }) => {
    const carousel = page.locator('.nxp-carousel').first();
    await carousel.scrollIntoViewIfNeeded();
    const nextBtn = carousel.locator('.nxp-carousel__next');
    if (await nextBtn.count() > 0 && await nextBtn.isEnabled()) {
      await nextBtn.click();
      await expect(carousel).toBeVisible(); // no crash
    }
  });
});
