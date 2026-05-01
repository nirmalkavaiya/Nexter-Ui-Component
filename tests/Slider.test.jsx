import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Slider from '../src/components/Slider/Slider';

describe('Slider', () => {
  it('renders with defaultValue', () => {
    render(<Slider defaultValue={42} label="Test" unit="px" />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(42);
  });

  it('renders label text', () => {
    render(<Slider label="Font Size" unit="px" />);
    expect(screen.getByText('Font Size')).toBeInTheDocument();
  });

  it('renders unit suffix', () => {
    render(<Slider label="Width" unit="em" />);
    expect(screen.getByText('em')).toBeInTheDocument();
  });

  it('does not render unit when unit=false', () => {
    render(<Slider label="Opacity" unit={false} />);
    expect(screen.queryByText('px')).not.toBeInTheDocument();
  });

  it('calls onChange when range input changes', () => {
    const onChange = vi.fn();
    render(<Slider defaultValue={50} onChange={onChange} />);
    const range = screen.getByRole('slider');
    fireEvent.change(range, { target: { value: '75' } });
    expect(onChange).toHaveBeenCalledWith(75);
  });

  it('calls onChange when numeric input changes', async () => {
    const onChange = vi.fn();
    render(<Slider defaultValue={20} onChange={onChange} min={0} max={100} />);
    const numInput = screen.getByRole('spinbutton');
    await userEvent.clear(numInput);
    await userEvent.type(numInput, '60');
    // onChange fired for each character that forms a valid number
    expect(onChange).toHaveBeenCalled();
  });

  it('controlled: value prop controls display', () => {
    render(<Slider value={88} onChange={() => {}} unit="%" />);
    expect(screen.getByRole('spinbutton')).toHaveValue(88);
  });

  it('renders units dropdown when units array provided', () => {
    render(<Slider label="Size" units={['px', 'em', 'rem']} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls onUnitChange when unit is changed', async () => {
    const onUnitChange = vi.fn();
    render(
      <Slider
        label="Size"
        unit="px"
        units={['px', 'em', 'rem']}
        onUnitChange={onUnitChange}
      />
    );
    await userEvent.selectOptions(screen.getByRole('combobox'), 'em');
    expect(onUnitChange).toHaveBeenCalledWith('em');
  });

  it('is disabled when disabled=true', () => {
    render(<Slider defaultValue={50} disabled />);
    expect(screen.getByRole('slider')).toBeDisabled();
    expect(screen.getByRole('spinbutton')).toBeDisabled();
  });

  it('clamps numeric input to min/max on blur', async () => {
    const onChange = vi.fn();
    render(<Slider defaultValue={50} min={10} max={90} onChange={onChange} />);
    const numInput = screen.getByRole('spinbutton');
    await userEvent.clear(numInput);
    await userEvent.type(numInput, '999');
    fireEvent.blur(numInput);
    expect(onChange).toHaveBeenLastCalledWith(90);
  });
});
