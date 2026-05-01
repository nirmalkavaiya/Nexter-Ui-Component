import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import MultiSelect from '../src/components/MultiSelect/MultiSelect';

const OPTIONS = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte',  label: 'Svelte' },
];

function renderMs(props = {}) {
  return render(
    <MultiSelect options={OPTIONS} placeholder="Select…" {...props} />
  );
}

/* Helper: the trigger div has aria-label="Open select" */
function getTrigger() {
  return screen.getByLabelText('Open select');
}

describe('MultiSelect', () => {
  it('renders placeholder when nothing selected', () => {
    renderMs();
    expect(screen.getByText('Select…')).toBeInTheDocument();
  });

  it('opens listbox on trigger click', async () => {
    renderMs();
    await userEvent.click(getTrigger());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('shows all options when open', async () => {
    renderMs();
    await userEvent.click(getTrigger());
    OPTIONS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('selects an option on click and calls onChange', async () => {
    const onChange = vi.fn();
    renderMs({ onChange });
    await userEvent.click(getTrigger());
    // Options use onPointerDown — userEvent.click fires pointer events
    fireEvent.pointerDown(screen.getByText('React'));
    expect(onChange).toHaveBeenCalledWith(['react']);
  });

  it('renders selected tags for controlled value', () => {
    renderMs({ value: ['react', 'vue'], onChange: vi.fn() });
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('removes a tag when remove button is clicked', async () => {
    const onChange = vi.fn();
    renderMs({ value: ['react', 'vue'], onChange });
    // Remove buttons have aria-label "Remove <label>"
    const removeBtn = screen.getByRole('button', { name: /remove react/i });
    fireEvent.pointerDown(removeBtn, { bubbles: true });
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).not.toContain('react');
  });

  it('filters options when typing in search', async () => {
    renderMs();
    await userEvent.click(getTrigger());
    // After open, searchRef is focused; we can type directly
    const search = screen.getByRole('textbox');
    await userEvent.type(search, 'vue');
    expect(screen.getByText('Vue')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  it('shows noResults text when search has no matches', async () => {
    renderMs({ noResultsText: 'Nothing found' });
    await userEvent.click(getTrigger());
    const search = screen.getByRole('textbox');
    await userEvent.type(search, 'zzz');
    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });

  it('closes on Escape key', async () => {
    renderMs();
    await userEvent.click(getTrigger());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('has aria-disabled when disabled', () => {
    renderMs({ disabled: true });
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders grouped options with group labels', async () => {
    const grouped = [
      { label: 'Frontend', options: [{ value: 'react', label: 'React' }] },
      { label: 'Backend',  options: [{ value: 'node',  label: 'Node.js' }] },
    ];
    render(<MultiSelect options={grouped} placeholder="Pick…" />);
    await userEvent.click(screen.getByLabelText('Open select'));
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('root combobox has correct aria attributes', () => {
    renderMs();
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-expanded', 'false');
    expect(combobox).toHaveAttribute('aria-haspopup', 'listbox');
  });

  it('aria-expanded becomes true when open', async () => {
    renderMs();
    const combobox = screen.getByRole('combobox');
    await userEvent.click(getTrigger());
    expect(combobox).toHaveAttribute('aria-expanded', 'true');
  });

  it('opens with keyboard (Enter on combobox root)', async () => {
    renderMs();
    const combobox = screen.getByRole('combobox');
    combobox.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('opens with keyboard (ArrowDown on combobox root)', async () => {
    renderMs();
    const combobox = screen.getByRole('combobox');
    combobox.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
