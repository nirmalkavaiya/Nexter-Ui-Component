import React, { useState } from 'react';
import MultiSelect from './MultiSelect';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Div-based multi-select dropdown with tag chips, group support, live search, keyboard navigation, and full controlled/uncontrolled API.',
      },
    },
  },
  argTypes: {
    searchable: { control: 'boolean' },
    disabled:   { control: 'boolean' },
    onChange:   { action: 'changed' },
  },
};

/* ── Grouped options ── */
const groupedOptions = [
  {
    label: 'Basic',
    options: [
      { label: 'Entire Website', value: 'entire' },
      { label: 'All Singulars',  value: 'singulars' },
      { label: 'All Archives',   value: 'archives' },
    ],
  },
  {
    label: 'Special Pages',
    options: [
      { label: 'Front Page',   value: 'front' },
      { label: 'Blog / Posts', value: 'blog' },
      { label: '404 Page',     value: '404' },
      { label: 'Search Page',  value: 'search' },
    ],
  },
  {
    label: 'Post Types',
    options: [
      { label: 'Posts',     value: 'posts' },
      { label: 'Pages',     value: 'pages' },
      { label: 'Products',  value: 'products' },
    ],
  },
];

/* ── Flat options ── */
const flatOptions = [
  { label: 'Canonical URL',  value: 'canonical' },
  { label: 'Open Graph',     value: 'og' },
  { label: 'JSON-LD Schema', value: 'schema' },
  { label: 'XML Sitemap',    value: 'sitemap' },
  { label: 'IndexNow',       value: 'indexnow' },
];

/* ── Stateful wrapper ── */
function Controlled({ initialValue = [], ...args }) {
  const [val, setVal] = useState(initialValue);
  return (
    <div style={{ maxWidth: 520 }}>
      <MultiSelect {...args} value={val} onChange={setVal} />
      <p style={{ marginTop: 12, fontFamily: 'var(--nxp-font)', fontSize: 12, color: 'var(--nxp-text-muted)' }}>
        Selected: {val.length ? val.join(', ') : '—'}
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────── */

/** Default — grouped options, pre-selected tags */
export const GroupedDefault = {
  name: 'Grouped — Pre-selected',
  render: (args) => (
    <Controlled
      {...args}
      options={groupedOptions}
      initialValue={['entire', 'singulars', 'archives']}
    />
  ),
  args: { searchable: true },
};

/** Flat options, no groups */
export const FlatOptions = {
  name: 'Flat Options',
  render: (args) => (
    <Controlled {...args} options={flatOptions} initialValue={['og', 'schema']} />
  ),
  args: { searchable: true, placeholder: 'Select SEO modules…' },
};

/** Searchable — filtering demo */
export const SearchDemo = {
  name: 'Searchable (type to filter)',
  render: (args) => (
    <Controlled {...args} options={groupedOptions} initialValue={[]} />
  ),
  args: {
    searchable: true,
    placeholder: 'Search and select pages…',
    searchPlaceholder: 'Filter pages…',
  },
};

/** Without search */
export const NoSearch = {
  name: 'No Search Input',
  render: (args) => (
    <Controlled {...args} options={groupedOptions} initialValue={['front']} />
  ),
  args: { searchable: false },
};

/** Disabled state */
export const Disabled = {
  name: 'Disabled',
  render: (args) => (
    <Controlled {...args} options={groupedOptions} initialValue={['entire', 'front']} />
  ),
  args: { disabled: true },
};

/** Empty options */
export const EmptyOptions = {
  name: 'Empty Options',
  render: (args) => <Controlled {...args} options={[]} initialValue={[]} />,
  args: { searchable: true },
};

/** Custom text (i18n / translation ready) */
export const CustomText = {
  name: 'Custom Strings (i18n)',
  render: (args) => (
    <Controlled {...args} options={groupedOptions} initialValue={['singulars']} />
  ),
  args: {
    placeholder:       'विकल्प चुनें',
    searchPlaceholder: 'खोजें…',
    noResultsText:     'कोई परिणाम नहीं मिला',
    clearAllLabel:     'सब हटाएं',
    removeLabel:       'हटाएं',
  },
};
