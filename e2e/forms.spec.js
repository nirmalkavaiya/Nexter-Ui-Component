import { test, expect } from '@playwright/test';
import { gotoDemo } from './helpers.js';

test.describe('Input', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('text input accepts typed value', async ({ page }) => {
    const input = page.locator('.nxp-input').first();
    await input.scrollIntoViewIfNeeded();
    await input.fill('hello world');
    await expect(input).toHaveValue('hello world');
  });
});

test.describe('Textarea', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('textarea accepts typed value', async ({ page }) => {
    const ta = page.locator('textarea.nxp-textarea, .nxp-textarea').first();
    await ta.scrollIntoViewIfNeeded();
    await ta.fill('Line one\nLine two');
    await expect(ta).toHaveValue('Line one\nLine two');
  });
});

test.describe('Checkbox', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('checkbox renders with role="checkbox"', async ({ page }) => {
    const cb = page.locator('.nxp-checkbox [role="checkbox"]').first();
    await cb.scrollIntoViewIfNeeded();
    await expect(cb).toBeVisible();
  });

  test('clicking checkbox box toggles aria-checked', async ({ page }) => {
    const cb = page.locator('.nxp-checkbox [role="checkbox"]').first();
    await cb.scrollIntoViewIfNeeded();
    const initial = await cb.getAttribute('aria-checked');
    await cb.click();
    const after = await cb.getAttribute('aria-checked');
    expect(after).not.toBe(initial);
  });

  test('disabled checkbox has aria-disabled', async ({ page }) => {
    const disabled = page.locator('.nxp-checkbox.is-disabled [role="checkbox"]').first();
    await disabled.scrollIntoViewIfNeeded();
    await expect(disabled).toHaveAttribute('aria-disabled', 'true');
  });
});

test.describe('Radio', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('radio group renders multiple options with role="radio"', async ({ page }) => {
    const radios = page.locator('.nxp-radio [role="radio"]');
    await radios.first().scrollIntoViewIfNeeded();
    expect(await radios.count()).toBeGreaterThan(1);
  });

  test('clicking a radio sets aria-checked=true', async ({ page }) => {
    const radio = page.locator('.nxp-radio:not(.is-disabled) [role="radio"]').nth(1);
    await radio.scrollIntoViewIfNeeded();
    await radio.click();
    await expect(radio).toHaveAttribute('aria-checked', 'true');
  });
});

test.describe('Toggle', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('toggle renders', async ({ page }) => {
    const toggle = page.locator('.nxp-toggle').first();
    await toggle.scrollIntoViewIfNeeded();
    await expect(toggle).toBeVisible();
  });

  test('clicking toggle label changes state', async ({ page }) => {
    const toggle = page.locator('label.nxp-toggle').first();
    await toggle.scrollIntoViewIfNeeded();
    const hadChecked = await toggle.evaluate(el => el.classList.contains('is-checked'));
    await toggle.click();
    const hasChecked = await toggle.evaluate(el => el.classList.contains('is-checked'));
    expect(hasChecked).not.toBe(hadChecked);
  });
});

test.describe('Slider', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('slider range input is visible', async ({ page }) => {
    const range = page.locator('.nxp-slider input[type="range"]').first();
    await range.scrollIntoViewIfNeeded();
    await expect(range).toBeVisible();
  });

  test('slider label is visible', async ({ page }) => {
    const label = page.locator('.nxp-slider__label').first();
    await label.scrollIntoViewIfNeeded();
    await expect(label).toBeVisible();
  });

  test('slider numeric input reflects current value', async ({ page }) => {
    const numInput = page.locator('.nxp-slider__input').first();
    await numInput.scrollIntoViewIfNeeded();
    const value = await numInput.inputValue();
    expect(Number(value)).not.toBeNaN();
  });

  test('typing in numeric input updates value', async ({ page }) => {
    const numInput = page.locator('.nxp-slider__input').first();
    await numInput.scrollIntoViewIfNeeded();
    await numInput.fill('50');
    await numInput.press('Enter');
    await expect(numInput).toHaveValue('50');
  });
});

test.describe('NumberInput', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('NumberInput renders inc/dec step buttons', async ({ page }) => {
    const num = page.locator('.nxp-num').first();
    await num.scrollIntoViewIfNeeded();
    await expect(num.locator('.nxp-num__step--dec')).toBeVisible();
    await expect(num.locator('.nxp-num__step--inc')).toBeVisible();
  });

  test('increment button increases value', async ({ page }) => {
    const num = page.locator('.nxp-num').first();
    await num.scrollIntoViewIfNeeded();
    const input = num.locator('.nxp-num__input');
    const before = Number(await input.inputValue());
    await num.locator('.nxp-num__step--inc').click();
    const after = Number(await input.inputValue());
    expect(after).toBeGreaterThan(before);
  });

  test('decrement button decreases value', async ({ page }) => {
    const num = page.locator('.nxp-num').first();
    await num.scrollIntoViewIfNeeded();
    const input = num.locator('.nxp-num__input');
    const before = Number(await input.inputValue());
    await num.locator('.nxp-num__step--dec').click();
    const after = Number(await input.inputValue());
    expect(after).toBeLessThan(before);
  });
});

test.describe('OTPInput', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('OTP renders the correct number of boxes', async ({ page }) => {
    const otp = page.locator('.nxp-otp').first();
    await otp.scrollIntoViewIfNeeded();
    expect(await otp.locator('input').count()).toBeGreaterThanOrEqual(4);
  });

  test('typing in first OTP box fills it', async ({ page }) => {
    const otp = page.locator('.nxp-otp').first();
    await otp.scrollIntoViewIfNeeded();
    const firstBox = otp.locator('input').first();
    await firstBox.click();
    await firstBox.press('1');
    await expect(firstBox).toHaveValue('1');
  });
});

test.describe('Segmented', () => {
  test.beforeEach(async ({ page }) => { await gotoDemo(page); });

  test('segmented control renders multiple options', async ({ page }) => {
    const seg = page.locator('.nxp-segmented').first();
    await seg.scrollIntoViewIfNeeded();
    expect(await seg.locator('.nxp-segmented__option').count()).toBeGreaterThan(1);
  });

  test('clicking an option marks it is-selected', async ({ page }) => {
    const seg = page.locator('.nxp-segmented').first();
    await seg.scrollIntoViewIfNeeded();
    const option = seg.locator('.nxp-segmented__option').nth(1);
    await option.click();
    await expect(option).toHaveClass(/is-selected/);
  });
});
