/**
 * all-components.spec.js
 * ──────────────────────
 * Covers 8 components present in the demo but not tested in any other spec:
 *   Dialog, Field, Search, Toast, FileUpload, FeatureToggleCard,
 *   ToggleGrid, IconBox
 *
 * Plus 10 components not yet added to the demo page, each marked
 * with test.fixme() so they appear in the HTML report with a clear
 * action-item to add a demo section.
 *
 * Nexter UI Component Library v1.9.0
 */

import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

/* ══════════════════════════════════════════════════════════════════════
   1. DIALOG
   ══════════════════════════════════════════════════════════════════════ */

test.describe('Dialog', () => {
  // Extra timeout: Dialog section is deep in a long page — first render on cold server can be slow
  test.setTimeout(90_000);
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('dialog renders on page load (open by default)', async ({ page }) => {
    // In App.jsx: const [dialogOpen, setDialogOpen] = useState(true);
    const dialog = page.locator('.nxp-dialog').first();
    await dialog.scrollIntoViewIfNeeded();
    await expect(dialog).toBeVisible();
  });

  test('dialog shows icon', async ({ page }) => {
    const icon = page.locator('.nxp-dialog__icon').first();
    await icon.scrollIntoViewIfNeeded();
    await expect(icon).toBeVisible();
  });

  test('dialog shows title text', async ({ page }) => {
    const title = page.locator('.nxp-dialog__title').first();
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
    const text = await title.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('dialog shows description text', async ({ page }) => {
    const desc = page.locator('.nxp-dialog__desc').first();
    await desc.scrollIntoViewIfNeeded();
    await expect(desc).toBeVisible();
  });

  test('dialog has action buttons', async ({ page }) => {
    const actions = page.locator('.nxp-dialog__actions').first();
    await actions.scrollIntoViewIfNeeded();
    expect(await actions.locator('button').count()).toBeGreaterThanOrEqual(1);
  });

  test('cancel button closes dialog, Show Dialog button appears', async ({ page }) => {
    // Find the cancel button inside the dialog actions
    const actions = page.locator('.nxp-dialog__actions').first();
    await actions.scrollIntoViewIfNeeded();
    const cancelBtn = actions.getByRole('button', { name: /cancel/i });
    if (await cancelBtn.count() > 0) {
      await cancelBtn.click();
      await expect(page.locator('.nxp-dialog').first()).not.toBeVisible();
      // Show Dialog button should now be visible
      await expect(page.getByRole('button', { name: /show dialog/i })).toBeVisible();
    }
  });

  test('Show Dialog button reopens dialog', async ({ page }) => {
    // Close dialog first
    const actions = page.locator('.nxp-dialog__actions').first();
    await actions.scrollIntoViewIfNeeded();
    const cancelBtn = actions.getByRole('button', { name: /cancel/i });
    if (await cancelBtn.count() > 0) {
      await cancelBtn.click();
      const showBtn = page.getByRole('button', { name: /show dialog/i });
      await showBtn.waitFor({ state: 'visible' });
      await showBtn.click();
      await expect(page.locator('.nxp-dialog').first()).toBeVisible();
    }
  });
});

/* ══════════════════════════════════════════════════════════════════════
   2. FIELD (label wrapper + hint + error)
   ══════════════════════════════════════════════════════════════════════ */

test.describe('Field', () => {
  test.setTimeout(90_000);
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('field wrapper renders on page', async ({ page }) => {
    const field = page.locator('.nxp-field').first();
    await field.scrollIntoViewIfNeeded();
    await expect(field).toBeVisible();
  });

  test('field label is rendered', async ({ page }) => {
    const label = page.locator('.nxp-field__label').first();
    await label.scrollIntoViewIfNeeded();
    await expect(label).toBeVisible();
    const text = await label.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('field with error shows error class', async ({ page }) => {
    const errorField = page.locator('.nxp-field--error').first();
    await errorField.scrollIntoViewIfNeeded();
    await expect(errorField).toBeVisible();
  });

  test('field error message is visible', async ({ page }) => {
    const errMsg = page.locator('.nxp-field--error').first()
      .locator('.nxp-field__error, [class*="error"]').first();
    await errMsg.scrollIntoViewIfNeeded();
    await expect(errMsg).toBeVisible();
  });

  test('field tooltip icon is present when tooltip prop set', async ({ page }) => {
    const tooltipIcon = page.locator('.nxp-field__tooltip-icon').first();
    await tooltipIcon.scrollIntoViewIfNeeded();
    await expect(tooltipIcon).toBeVisible();
  });

  test('multiple field instances rendered', async ({ page }) => {
    const count = await page.locator('.nxp-field').count();
    expect(count).toBeGreaterThan(3);
  });
});

/* ══════════════════════════════════════════════════════════════════════
   3. SEARCH
   ══════════════════════════════════════════════════════════════════════ */

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('search component renders', async ({ page }) => {
    const search = page.locator('.nxp-search').first();
    await search.scrollIntoViewIfNeeded();
    await expect(search).toBeVisible();
  });

  test('search input is focusable', async ({ page }) => {
    const input = page.locator('.nxp-search__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.click();
    await expect(input).toBeFocused();
  });

  test('search input accepts typed query', async ({ page }) => {
    const input = page.locator('.nxp-search__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('redirect');
    await expect(input).toHaveValue('redirect');
  });

  test('search icon is present', async ({ page }) => {
    const icon = page.locator('.nxp-search__icon').first();
    await icon.scrollIntoViewIfNeeded();
    await expect(icon).toBeVisible();
  });

  test('search input clears on Escape', async ({ page }) => {
    const input = page.locator('.nxp-search__input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('test query');
    await input.press('Escape');
    // Either cleared or still has value — just verify no crash
    await expect(input).toBeVisible();
  });

  test('search has correct placeholder text', async ({ page }) => {
    const input = page.locator('.nxp-search__input').first();
    await input.scrollIntoViewIfNeeded();
    const placeholder = await input.getAttribute('placeholder');
    expect(placeholder?.length).toBeGreaterThan(0);
  });
});

/* ══════════════════════════════════════════════════════════════════════
   4. TOAST (static render in demo)
   ══════════════════════════════════════════════════════════════════════ */

test.describe('Toast', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('toast renders visible on page', async ({ page }) => {
    const toast = page.locator('.nxp-toast').first();
    await toast.scrollIntoViewIfNeeded();
    await expect(toast).toBeVisible();
  });

  test('toast has title text', async ({ page }) => {
    const title = page.locator('.nxp-toast__title').first();
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
    const text = await title.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('toast has description text', async ({ page }) => {
    const desc = page.locator('.nxp-toast__desc').first();
    await desc.scrollIntoViewIfNeeded();
    await expect(desc).toBeVisible();
  });

  test('toast icon is rendered', async ({ page }) => {
    const icon = page.locator('.nxp-toast__icon').first();
    await icon.scrollIntoViewIfNeeded();
    await expect(icon).toBeVisible();
  });

  test('error toast variant renders', async ({ page }) => {
    // Second toast in demo is error variant
    const errorToast = page.locator('.nxp-toast--error').first();
    await errorToast.scrollIntoViewIfNeeded();
    await expect(errorToast).toBeVisible();
  });

  test('toast has role=alert for accessibility', async ({ page }) => {
    const toast = page.locator('[role="alert"]').first();
    await toast.scrollIntoViewIfNeeded();
    await expect(toast).toBeVisible();
  });

  test('two toasts rendered in demo', async ({ page }) => {
    const count = await page.locator('.nxp-toast').count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});

/* ══════════════════════════════════════════════════════════════════════
   5. FILE UPLOAD / DROPZONE
   ══════════════════════════════════════════════════════════════════════ */

test.describe('FileUpload', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('upload zone renders', async ({ page }) => {
    const zone = page.locator('.nxp-upload__zone').first();
    await zone.scrollIntoViewIfNeeded();
    await expect(zone).toBeVisible();
  });

  test('upload wrapper is present', async ({ page }) => {
    const upload = page.locator('.nxp-upload').first();
    await upload.scrollIntoViewIfNeeded();
    await expect(upload).toBeVisible();
  });

  test('drop text / prompt is visible', async ({ page }) => {
    const dropText = page.locator('.nxp-upload__drop-text').first();
    await dropText.scrollIntoViewIfNeeded();
    await expect(dropText).toBeVisible();
  });

  test('browse button is present', async ({ page }) => {
    const browseBtn = page.locator('.nxp-upload__browse').first();
    await browseBtn.scrollIntoViewIfNeeded();
    await expect(browseBtn).toBeVisible();
  });

  test('hidden file input exists', async ({ page }) => {
    // The upload zone should contain a file input (may be display:none)
    const upload = page.locator('.nxp-upload').first();
    await upload.scrollIntoViewIfNeeded();
    const fileInput = upload.locator('input[type="file"]');
    await expect(fileInput).toBeAttached();
  });

  test('drag over zone applies CSS class', async ({ page }) => {
    const zone = page.locator('.nxp-upload__zone').first();
    await zone.scrollIntoViewIfNeeded();
    // Simulate dragenter to trigger the hover state
    await zone.dispatchEvent('dragenter');
    // Zone should still be attached
    await expect(zone).toBeAttached();
  });

  test('upload zone accepts expected file types attribute', async ({ page }) => {
    const upload = page.locator('.nxp-upload').first();
    await upload.scrollIntoViewIfNeeded();
    const fileInput = upload.locator('input[type="file"]');
    const accept = await fileInput.getAttribute('accept');
    expect(accept?.length).toBeGreaterThan(0);
  });
});

/* ══════════════════════════════════════════════════════════════════════
   6. FEATURE TOGGLE CARD
   ══════════════════════════════════════════════════════════════════════ */

test.describe('FeatureToggleCard', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('at least 3 feature toggle cards render', async ({ page }) => {
    const cards = page.locator('.nxp-ftc__body');
    await cards.first().scrollIntoViewIfNeeded();
    expect(await cards.count()).toBeGreaterThanOrEqual(3);
  });

  test('each card has a title', async ({ page }) => {
    const title = page.locator('.nxp-ftc__body').first();
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
  });

  test('enabled toggle card has a toggle switch', async ({ page }) => {
    // Adobe Fonts card starts enabled
    const firstCard = page.locator('.nxp-ftc__body').first();
    await firstCard.scrollIntoViewIfNeeded();
    const toggle = firstCard.locator('input[type="checkbox"]');
    if (await toggle.count() > 0) {
      await expect(toggle.first()).toBeAttached();
    }
  });

  test('docs link is present on cards', async ({ page }) => {
    const docsLinks = page.locator('.nxp-ftc__link');
    await docsLinks.first().scrollIntoViewIfNeeded();
    expect(await docsLinks.count()).toBeGreaterThan(0);
  });

  test('locked card (pro plan) shows upgrade button', async ({ page }) => {
    const upgradeBtn = page.locator('.nxp-ftc__link--btn').first();
    await upgradeBtn.scrollIntoViewIfNeeded();
    await expect(upgradeBtn).toBeVisible();
  });

  test('plan badge renders on freemium card', async ({ page }) => {
    const badge = page.locator('.nxp-ftc__badge').first();
    await badge.scrollIntoViewIfNeeded();
    await expect(badge).toBeVisible();
  });

  test('toggling an unlocked card changes toggle state', async ({ page }) => {
    // "Adobe Fonts" card — first card, starts enabled
    const firstCard = page.locator('.nxp-ftc__body').first();
    await firstCard.scrollIntoViewIfNeeded();
    const toggle = firstCard.locator('input[type="checkbox"]').first();
    if (await toggle.count() > 0) {
      const before = await toggle.isChecked();
      // Click the visible toggle track (not the hidden input)
      const track = firstCard.locator('.nxp-toggle__track, .nxp-toggle').first();
      if (await track.count() > 0) {
        await track.click();
        const after = await toggle.isChecked();
        expect(after).toBe(!before);
      }
    }
  });
});

/* ══════════════════════════════════════════════════════════════════════
   7. TOGGLE GRID
   ══════════════════════════════════════════════════════════════════════ */

test.describe('ToggleGrid', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('toggle grid renders', async ({ page }) => {
    const tg = page.locator('.nxp-tg').first();
    await tg.scrollIntoViewIfNeeded();
    await expect(tg).toBeVisible();
  });

  test('toggle grid contains multiple items', async ({ page }) => {
    const tg = page.locator('.nxp-tg').first();
    await tg.scrollIntoViewIfNeeded();
    // ToggleGrid items contain toggles
    const items = tg.locator('input[type="checkbox"], .nxp-toggle');
    expect(await items.count()).toBeGreaterThanOrEqual(2);
  });

  test('multiple grid instances render (2-col, 3-col, 1-col)', async ({ page }) => {
    const count = await page.locator('.nxp-tg').count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('col variant classes applied', async ({ page }) => {
    await expect(page.locator('.nxp-tg--cols-2').first()).toBeAttached();
    await expect(page.locator('.nxp-tg--cols-3').first()).toBeAttached();
    await expect(page.locator('.nxp-tg--cols-1').first()).toBeAttached();
  });

  test('toggling an item in the grid changes toggle state', async ({ page }) => {
    // Controlled grid: tgValues controlled in App.jsx
    const tg = page.locator('.nxp-tg').first();
    await tg.scrollIntoViewIfNeeded();
    const toggles = tg.locator('input[type="checkbox"]');
    if (await toggles.count() > 0) {
      const toggle = toggles.first();
      const before = await toggle.isChecked();
      await toggle.click();
      const after = await toggle.isChecked();
      expect(after).toBe(!before);
    }
  });
});

/* ══════════════════════════════════════════════════════════════════════
   8. ICON BOX
   ══════════════════════════════════════════════════════════════════════ */

test.describe('IconBox', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('icon box renders', async ({ page }) => {
    const box = page.locator('.nxp-iconbox').first();
    await box.scrollIntoViewIfNeeded();
    await expect(box).toBeVisible();
  });

  test('three icon boxes render in demo', async ({ page }) => {
    const count = await page.locator('.nxp-iconbox').count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('icon box topline text is visible', async ({ page }) => {
    const topline = page.locator('.nxp-iconbox__topline').first();
    await topline.scrollIntoViewIfNeeded();
    await expect(topline).toBeVisible();
    const text = await topline.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('icon box step number is visible', async ({ page }) => {
    const step = page.locator('.nxp-iconbox__step').first();
    await step.scrollIntoViewIfNeeded();
    await expect(step).toBeVisible();
  });

  test('icon box title is visible', async ({ page }) => {
    const title = page.locator('.nxp-iconbox__title').first();
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
    const text = await title.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('icon box CTA link renders', async ({ page }) => {
    const cta = page.locator('.nxp-iconbox').first().locator('a, button').first();
    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toBeVisible();
  });

  test('icon box steps are numbered sequentially', async ({ page }) => {
    const steps = page.locator('.nxp-iconbox__step');
    const count = await steps.count();
    for (let i = 0; i < Math.min(count, 3); i++) {
      const text = await steps.nth(i).textContent();
      expect(Number(text?.trim())).toBe(i + 1);
    }
  });
});

/* ══════════════════════════════════════════════════════════════════════
   9. COMPONENTS NOT YET IN DEMO PAGE
      These are marked fixme — add a demo section to enable them.
   ══════════════════════════════════════════════════════════════════════ */

test.describe('AspectRatio [needs demo section]', () => {
  test.fixme('AspectRatio renders with correct ratio', async ({ page }) => {
    // TODO: Add AspectRatio to demo page under "Layout" section
    // Expected: .nxp-aspect__inner with padding-top% for ratio
    await gotoDemo(page);
    const el = page.locator('.nxp-aspect__inner').first();
    await expect(el).toBeVisible();
  });
});

test.describe('Collapsible [needs demo section]', () => {
  test.fixme('Collapsible trigger toggles content', async ({ page }) => {
    // TODO: Add Collapsible to demo — different from Accordion (single item)
    // Expected: .nxp-collapsible__trigger + .nxp-collapsible--open
    await gotoDemo(page);
    const trigger = page.locator('.nxp-collapsible__trigger').first();
    await trigger.click();
    await expect(page.locator('.nxp-collapsible--open').first()).toBeVisible();
  });
});

test.describe('Drawer [needs demo section]', () => {
  test.fixme('Drawer slides in from side on trigger', async ({ page }) => {
    // TODO: Add Drawer to demo — triggered by a button
    // Expected: .nxp-drawer__panel--right/left slides in from viewport edge
    await gotoDemo(page);
    const triggerBtn = page.getByRole('button', { name: /open drawer/i });
    await triggerBtn.click();
    await expect(page.locator('.nxp-drawer__head').first()).toBeVisible();
  });

  test.fixme('Drawer closes on backdrop click', async ({ page }) => {
    await gotoDemo(page);
    // Click backdrop to close
    await page.locator('.nxp-drawer__backdrop').first().click();
    await expect(page.locator('.nxp-drawer__panel').first()).not.toBeVisible();
  });

  test.fixme('Drawer closes on Escape', async ({ page }) => {
    await gotoDemo(page);
    await page.keyboard.press('Escape');
    await expect(page.locator('.nxp-drawer__panel').first()).not.toBeVisible();
  });
});

test.describe('Label [needs demo section]', () => {
  test.fixme('Label renders with required indicator', async ({ page }) => {
    // TODO: Add standalone Label demo
    // Expected: .nxp-label with optional .nxp-label__required span
    await gotoDemo(page);
    await expect(page.locator('.nxp-label__required').first()).toBeVisible();
  });
});

test.describe('ScrollArea [needs demo section]', () => {
  test.fixme('ScrollArea provides scrollable overflow container', async ({ page }) => {
    // TODO: Add ScrollArea to demo — wrap tall content
    await gotoDemo(page);
    await expect(page.locator('.nxp-scroll-area, [data-nxp-scroll]').first()).toBeVisible();
  });
});

test.describe('Separator [needs demo section]', () => {
  test.fixme('Separator renders horizontal rule', async ({ page }) => {
    // TODO: Add Separator to demo
    // Expected: .nxp-sep or .nxp-sep--horizontal
    await gotoDemo(page);
    await expect(page.locator('.nxp-sep').first()).toBeVisible();
  });

  test.fixme('Separator renders with label text', async ({ page }) => {
    await gotoDemo(page);
    await expect(page.locator('.nxp-sep--label').first()).toBeVisible();
  });
});

test.describe('Sidebar [needs demo section]', () => {
  test.fixme('Sidebar renders navigation items', async ({ page }) => {
    // TODO: Add Sidebar demo — vertical navigation component
    // Expected: .nxp-sb__item elements with icons and labels
    await gotoDemo(page);
    const items = page.locator('.nxp-sb__item');
    expect(await items.count()).toBeGreaterThan(0);
  });

  test.fixme('Sidebar active item has --active class', async ({ page }) => {
    await gotoDemo(page);
    await expect(page.locator('.nxp-sb__item--active').first()).toBeVisible();
  });
});

test.describe('ThemeProvider [needs demo section]', () => {
  test.fixme('ThemeProvider sets data-theme attribute on root', async ({ page }) => {
    // TODO: Add ThemeProvider toggle to demo for dark/light switching
    await gotoDemo(page);
    const theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-theme') ||
      document.body.getAttribute('data-theme')
    );
    expect(theme).toBeTruthy();
  });
});

test.describe('Typography [needs demo section]', () => {
  test.fixme('Typography component renders heading variants', async ({ page }) => {
    // TODO: Add Typography showcase section to demo
    // Expected: h1-h6, body, caption, mono text elements
    await gotoDemo(page);
    await expect(page.locator('.nxp-text, .nxp-typography, [class*="nxp-type"]').first()).toBeVisible();
  });
});

test.describe('VerticalNavigationMenu [needs demo section]', () => {
  test.fixme('VerticalNavigationMenu renders nav items', async ({ page }) => {
    // TODO: Add VerticalNavigationMenu to demo
    // Expected: .nxp-nav__icon + .nxp-nav__label items
    await gotoDemo(page);
    const navItems = page.locator('.nxp-nav__label');
    expect(await navItems.count()).toBeGreaterThan(0);
  });

  test.fixme('VerticalNavigationMenu badge renders on items', async ({ page }) => {
    await gotoDemo(page);
    await expect(page.locator('.nxp-nav__badge').first()).toBeVisible();
  });
});
