import React from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    value:     { control: 'color' },
    disabled:  { control: 'boolean' },
    showAlpha: { control: 'boolean' },
    showHex:   { control: 'boolean' },
    showSwatches: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    defaultValue: '#1E40AF',
  },
};

export const WithAlpha = {
  args: {
    defaultValue: '#4F46E5',
    showAlpha: true,
  },
};

export const WithSwatches = {
  args: {
    defaultValue: '#16A34A',
    showSwatches: true,
    swatches: ['#1E40AF', '#4F46E5', '#DC2626', '#D97706', '#16A34A', '#0F172A', '#64748B', '#fff'],
  },
};

export const Controlled = {
  render: () => {
    const [color, setColor] = React.useState('#1E40AF');
    return (
      <div>
        <ColorPicker value={color} onChange={setColor} />
        <div style={{
          marginTop: 12,
          width: 48,
          height: 24,
          borderRadius: 4,
          background: color,
          border: '1px solid #E2E8F0',
        }} />
        <p style={{ fontSize: 13, color: '#64748B', marginTop: 6 }}>{color}</p>
      </div>
    );
  },
};

export const Disabled = {
  args: {
    defaultValue: '#DC2626',
    disabled: true,
  },
};

export const NoHexInput = {
  args: {
    defaultValue: '#D97706',
    showHex: false,
  },
};
