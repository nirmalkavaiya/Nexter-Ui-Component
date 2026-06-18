import React from 'react';
import NxpAccordion from './NxpAccordion';

const ITEMS = [
  {
    id: 'post-types',
    title: 'Included Post Types',
    content: 'Choose which post types are listed in the generated file.',
  },
  {
    id: 'taxonomies',
    title: 'Included Taxonomies',
    content: 'Choose which taxonomies (categories, tags…) are listed.',
  },
  {
    id: 'important-pages',
    title: 'Important Pages',
    content: (
      <p style={{ margin: 0 }}>
        Rich JSX content is supported — e.g. a{' '}
        <a href="#0">link</a> or any React node.
      </p>
    ),
  },
];

export default {
  title: 'Components/NxpAccordion',
  component: NxpAccordion,
  tags: ['autodocs'],
  argTypes: {
    toggleType: { control: 'inline-radio', options: ['arrow', 'plus', 'none'] },
    allowMultiple: { control: 'boolean' },
    defaultActive: { control: 'text' },
  },
};

export const Default = {
  args: {
    items: ITEMS,
    defaultActive: 0,
    toggleType: 'arrow',
  },
};

export const PlusToggle = {
  args: {
    items: ITEMS,
    defaultActive: 'taxonomies',
    toggleType: 'plus',
  },
};

export const NoToggleIcon = {
  args: {
    items: ITEMS,
    toggleType: 'none',
  },
};

export const AllowMultiple = {
  args: {
    items: ITEMS,
    allowMultiple: true,
    defaultActive: ['post-types', 'important-pages'],
  },
};

export const Controlled = {
  render: () => {
    const [active, setActive] = React.useState('post-types');
    return (
      <div style={{ width: 480 }}>
        <NxpAccordion items={ITEMS} active={active} onChange={setActive} />
        <p style={{ marginTop: 12, fontSize: 13, color: '#64748B' }}>
          Open panel: <strong>{active || '—'}</strong>
        </p>
      </div>
    );
  },
};
