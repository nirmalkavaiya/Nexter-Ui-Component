import React, { useState } from 'react';
import { VerticalNavigationMenu } from './VerticalNavigationMenu';

export default {
  title: 'Components/VerticalNavigationMenu',
  component: VerticalNavigationMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dashboard-style vertical navigation sidebar. Pass a `menuItems` tree, `activeKey`, and optional `linkComponent` for router integration.',
      },
    },
  },
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
    onChange: { action: 'changed' },
    onOpenGroupsChange: { action: 'open groups changed' },
    onMobileOpenChange: { action: 'mobile open changed' },
  },
};

const ActivatedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 11 12" fill="none" aria-hidden="true">
    <circle cx="5.5" cy="6" r="5" fill="#14C38E" />
    <path d="M7.6 4.5L4.9 7.2 3.8 6.1" stroke="#fff" strokeWidth="1.2" />
  </svg>
);

const nexterMenuItems = [
  { key: 'welcome', label: 'Welcome', to: '/' },
  { key: 'templates', label: 'WordPress Templates', to: '/templates' },
  { key: 'blocks', label: 'Blocks', to: '/blocks' },
  { key: 'theme-builder', label: 'Theme Builder', onClick: () => {} },
  { key: 'code-snippets', label: 'Code Snippets', to: '/code_snippets' },
  {
    key: 'extensions',
    label: 'Extensions',
    children: [
      { key: 'utilities', label: 'Utilities', to: '/utilities' },
      { key: 'performance', label: 'Performance', to: '/performance' },
      { key: 'security', label: 'Security', to: '/security' },
      { key: 'admin_interface', label: 'Admin Interface', to: '/admin_interface' },
    ],
  },
  { key: 'theme_customizer', label: 'Theme Customizer', to: '/theme_customizer' },
  {
    key: 'extra_options',
    label: 'Extra Options',
    children: [
      { key: 'blocks-settings', label: 'Settings', to: '/blocks-settings' },
      { key: 'whitelabel', label: 'White Label', to: '/whitelabel' },
      { key: 'import-export', label: 'Import/Export', to: '/import-export' },
    ],
  },
  {
    key: 'upgrade',
    label: 'Upgrade Now',
    href: 'https://nexterwp.com/pricing/',
    target: '_blank',
    suffix: <span style={{ fontSize: 10 }}>★</span>,
  },
];

function NavDemo(args) {
  const [activeKey, setActiveKey] = useState(args.activeKey || 'welcome');

  return (
    <div style={{ maxWidth: 260 }}>
      <VerticalNavigationMenu
        {...args}
        activeKey={activeKey}
        onChange={(key, item) => {
          if (item?.to) setActiveKey(key);
          args.onChange?.(key, item);
        }}
      />
    </div>
  );
}

/** Default Nexter dashboard-style menu */
export const DashboardNav = {
  name: 'Dashboard — Nexter navbox',
  render: NavDemo,
  args: {
    menuItems: nexterMenuItems,
    activeKey: 'welcome',
    className: 'nxp-nav--dashboard',
    logo: (
      <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>Nexter</span>
    ),
    headerBadge: 'Free',
    footer: (
      <>
        <span>Version 4.0.0</span>
        <span aria-hidden="true">|</span>
        <a href="#system">System Info</a>
      </>
    ),
  },
};

/** Pro user with activated license */
export const ProActivated = {
  name: 'Pro — Activated',
  render: NavDemo,
  args: {
    ...DashboardNav.args,
    menuItems: [
      ...nexterMenuItems.filter((i) => i.key !== 'upgrade'),
      {
        key: 'activate_pro',
        label: 'Activated',
        to: '/activate_PRO',
        suffix: <ActivatedIcon />,
      },
    ],
    headerBadge: 'Pro',
    activeKey: 'utilities',
  },
};

/** Dark theme variant */
export const DarkTheme = {
  name: 'Dark theme',
  render: NavDemo,
  args: {
    ...DashboardNav.args,
    theme: 'dark',
    className: '',
  },
};

/** Minimal menu without logo strip */
export const Minimal = {
  name: 'Minimal — items only',
  render: NavDemo,
  args: {
    menuItems: [
      { key: 'home', label: 'Home', to: '/' },
      { key: 'settings', label: 'Settings', to: '/settings' },
    ],
    activeKey: 'home',
  },
};
