import React from 'react';
import MultiSelect from './MultiSelect';

const FRAMEWORKS = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte',  label: 'Svelte' },
  { value: 'solid',   label: 'SolidJS' },
];

const GROUPED = [
  {
    label: 'Frontend',
    options: [
      { value: 'react',   label: 'React' },
      { value: 'vue',     label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
  {
    label: 'Backend',
    options: [
      { value: 'node',   label: 'Node.js' },
      { value: 'django', label: 'Django' },
      { value: 'rails',  label: 'Ruby on Rails' },
    ],
  },
  {
    label: 'Database',
    options: [
      { value: 'postgres', label: 'PostgreSQL' },
      { value: 'mysql',    label: 'MySQL' },
      { value: 'mongo',    label: 'MongoDB' },
    ],
  },
];

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder:   { control: 'text' },
    searchable:    { control: 'boolean' },
    clearable:     { control: 'boolean' },
    disabled:      { control: 'boolean' },
    maxSelected:   { control: { type: 'number' } },
  },
};

export const Default = {
  args: {
    options: FRAMEWORKS,
    placeholder: 'Select frameworks…',
  },
};

export const WithGroups = {
  args: {
    options: GROUPED,
    placeholder: 'Select technologies…',
  },
};

export const Controlled = {
  render: () => {
    const [value, setValue] = React.useState(['react', 'vue']);
    return (
      <div style={{ width: 340 }}>
        <MultiSelect
          options={FRAMEWORKS}
          value={value}
          onChange={setValue}
          placeholder="Pick frameworks…"
        />
        <p style={{ marginTop: 12, fontSize: 13, color: '#64748B' }}>
          Selected: <strong>{value.join(', ') || '—'}</strong>
        </p>
      </div>
    );
  },
};

export const MaxSelected = {
  args: {
    options: FRAMEWORKS,
    placeholder: 'Up to 2 frameworks',
    maxSelected: 2,
  },
};

export const NotSearchable = {
  args: {
    options: FRAMEWORKS,
    placeholder: 'Not searchable',
    searchable: false,
  },
};

export const Disabled = {
  args: {
    options: FRAMEWORKS,
    placeholder: 'Disabled state',
    disabled: true,
    value: ['react'],
  },
};
