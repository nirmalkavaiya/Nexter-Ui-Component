import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ColorPicker from '../src/components/ColorPicker/ColorPicker';

/* Trigger aria-label: "Color picker, current: #<hex>" */
function getTrigger() {
  return screen.getByRole('button', { name: /color picker, current/i });
}

/* Hex input: aria-label="Hex color", value is UPPERCASE without '#' */
async function openAndGetHexInput(color = '#1E40AF') {
  render(<ColorPicker defaultValue={color} />);
  await userEvent.click(getTrigger());
  return screen.getByRole('textbox', { name: /hex color/i });
}

describe('ColorPicker', () => {
  it('renders the trigger button', () => {
    render(<ColorPicker defaultValue="#1E40AF" />);
    expect(getTrigger()).toBeInTheDocument();
  });

  it('trigger aria-label contains the hex value', () => {
    render(<ColorPicker defaultValue="#DC2626" />);
    expect(screen.getByRole('button', { name: /dc2626/i })).toBeInTheDocument();
  });

  it('is disabled when disabled=true', () => {
    render(<ColorPicker defaultValue="#1E40AF" disabled />);
    expect(getTrigger()).toBeDisabled();
  });

  it('does not open when disabled', async () => {
    render(<ColorPicker defaultValue="#1E40AF" disabled />);
    await userEvent.click(getTrigger());
    expect(screen.queryByRole('textbox', { name: /hex color/i })).not.toBeInTheDocument();
  });

  it('opens the picker popover on trigger click', async () => {
    render(<ColorPicker defaultValue="#1E40AF" />);
    await userEvent.click(getTrigger());
    // Hex input visible; value is uppercase without '#'
    const hexInput = screen.getByRole('textbox', { name: /hex color/i });
    expect(hexInput).toBeInTheDocument();
    expect(hexInput).toHaveValue('1E40AF');
  });

  it('shows hue slider when picker is open', async () => {
    render(<ColorPicker defaultValue="#1E40AF" />);
    await userEvent.click(getTrigger());
    const sliders = screen.getAllByRole('slider');
    expect(sliders.length).toBeGreaterThanOrEqual(1);
  });

  it('renders alpha slider when showAlpha=true', async () => {
    render(<ColorPicker defaultValue="#1E40AF" showAlpha />);
    await userEvent.click(getTrigger());
    const sliders = screen.getAllByRole('slider');
    expect(sliders.length).toBeGreaterThanOrEqual(2);
  });

  it('calls onChange when hex input value is a valid 6-char hex', async () => {
    const onChange = vi.fn();
    render(<ColorPicker defaultValue="#000000" onChange={onChange} />);
    await userEvent.click(getTrigger());
    const hexInput = screen.getByRole('textbox', { name: /hex color/i });
    // Clear and type a new full hex (without '#')
    await userEvent.clear(hexInput);
    await userEvent.type(hexInput, 'FF0000');
    // onChange fires when full 6 chars form a valid hex
    const validCalls = onChange.mock.calls.filter(
      ([v]) => typeof v === 'string' && /^#[0-9A-Fa-f]{6}$/i.test(v)
    );
    expect(validCalls.length).toBeGreaterThan(0);
    // Last call should be #ff0000
    const last = validCalls[validCalls.length - 1][0];
    expect(last.toLowerCase()).toBe('#ff0000');
  });

  it('does not call onChange for an incomplete hex string', async () => {
    const onChange = vi.fn();
    render(<ColorPicker defaultValue="#000000" onChange={onChange} />);
    await userEvent.click(getTrigger());
    const hexInput = screen.getByRole('textbox', { name: /hex color/i });
    await userEvent.clear(hexInput);
    await userEvent.type(hexInput, 'AB');  // only 2 chars, not valid
    // No calls with valid full hex
    const validCalls = onChange.mock.calls.filter(
      ([v]) => typeof v === 'string' && /^#[0-9A-Fa-f]{6}$/i.test(v)
    );
    expect(validCalls.length).toBe(0);
  });

  it('controlled: reacts to value prop change', () => {
    const { rerender } = render(<ColorPicker value="#1E40AF" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: /1e40af/i })).toBeInTheDocument();
    rerender(<ColorPicker value="#DC2626" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: /dc2626/i })).toBeInTheDocument();
  });

  it('picker toggles closed when trigger clicked again', async () => {
    render(<ColorPicker defaultValue="#1E40AF" />);
    const trigger = getTrigger();
    // Open
    await userEvent.click(trigger);
    expect(screen.getByRole('textbox', { name: /hex color/i })).toBeInTheDocument();
    // Close (trigger is inside rootRef so pointerdown-outside won't fire; onClick toggles)
    await userEvent.click(trigger);
    expect(screen.queryByRole('textbox', { name: /hex color/i })).not.toBeInTheDocument();
  });
});
