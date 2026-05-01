import React from 'react';
import Slider from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value:     { control: { type: 'number', min: 0, max: 100 } },
    min:       { control: { type: 'number' } },
    max:       { control: { type: 'number' } },
    step:      { control: { type: 'number' } },
    unit:      { control: 'text' },
    label:     { control: 'text' },
    disabled:  { control: 'boolean' },
  },
};

/* ── Stories ── */

export const Default = {
  args: {
    defaultValue: 40,
    label: 'Font Size',
    unit: 'px',
  },
};

export const WithUnitsDropdown = {
  args: {
    defaultValue: 1.5,
    label: 'Line Height',
    units: ['px', 'em', 'rem', '%'],
    min: 0,
    max: 5,
    step: 0.1,
  },
};

export const NoUnit = {
  args: {
    defaultValue: 70,
    label: 'Opacity',
    unit: false,
    min: 0,
    max: 100,
  },
};

export const Disabled = {
  args: {
    defaultValue: 30,
    label: 'Border Radius',
    unit: 'px',
    disabled: true,
  },
};

export const Controlled = {
  render: () => {
    const [val, setVal] = React.useState(50);
    const [unit, setUnit] = React.useState('px');
    return (
      <div style={{ width: 320 }}>
        <Slider
          value={val}
          unit={unit}
          units={['px', 'em', 'rem']}
          label="Controlled Slider"
          onChange={setVal}
          onUnitChange={setUnit}
        />
        <p style={{ marginTop: 12, fontSize: 13, color: '#64748B' }}>
          Value: <strong>{val}{unit}</strong>
        </p>
      </div>
    );
  },
};

export const RangeExtremes = {
  args: {
    defaultValue: 255,
    label: 'Red Channel',
    unit: '',
    min: 0,
    max: 255,
    step: 1,
  },
};
