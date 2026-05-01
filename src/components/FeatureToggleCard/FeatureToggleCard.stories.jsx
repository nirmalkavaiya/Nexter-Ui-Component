import React, { useState } from 'react';
import FeatureToggleCard from './FeatureToggleCard';

export default {
  title: 'Components/FeatureToggleCard',
  component: FeatureToggleCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A settings-dashboard card with a title, optional badge, tooltip, docs link, settings button, and controlled toggle switch.',
      },
    },
  },
  argTypes: {
    isEnabled:    { control: 'boolean' },
    showBadge:    { control: 'boolean' },
    badgeVariant: {
      control: 'select',
      options: ['default', 'primary', 'beta', 'pro', 'success', 'warning', 'error'],
    },
    disabled:     { control: 'boolean' },
    onToggle:         { action: 'toggled' },
    onSettingsClick:  { action: 'settings clicked' },
    onDocsClick:      { action: 'docs clicked' },
  },
};

/* ── Stateful wrapper so toggle actually works in Canvas ── */
function Controlled(args) {
  const [enabled, setEnabled] = useState(args.isEnabled ?? false);
  return (
    <div style={{ maxWidth: 520 }}>
      <FeatureToggleCard
        {...args}
        isEnabled={enabled}
        onToggle={(v) => { setEnabled(v); args.onToggle?.(v); }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Stories
   ────────────────────────────────────────────────────────── */

export const Enabled = {
  render: Controlled,
  args: {
    title:          'Adobe Fonts',
    tooltip:        'Load fonts directly from Adobe Fonts CDN without hosting them locally.',
    showBadge:      false,
    docsLabel:      'Read Docs',
    onDocsClick:    () => {},
    isEnabled:      true,
    onSettingsClick: () => {},
  },
};

export const Disabled = {
  render: Controlled,
  args: {
    title:          'Adobe Fonts',
    tooltip:        'Load fonts directly from Adobe Fonts CDN.',
    showBadge:      false,
    docsLabel:      'Read Docs',
    onDocsClick:    () => {},
    isEnabled:      false,
    onSettingsClick: () => {},
  },
};

export const WithBetaBadge = {
  render: Controlled,
  args: {
    title:          'SMTP Email',
    tooltip:        'Send transactional emails via your own SMTP server.',
    showBadge:      true,
    badgeText:      'BETA',
    badgeVariant:   'beta',
    docsLabel:      'Read Docs',
    onDocsClick:    () => {},
    isEnabled:      false,
    onSettingsClick: () => {},
  },
};

export const WithProBadge = {
  render: Controlled,
  args: {
    title:          'White Label',
    tooltip:        'Remove Nexter branding from the admin panel.',
    showBadge:      true,
    badgeText:      'PRO',
    badgeVariant:   'pro',
    docsLabel:      'Read Docs',
    onDocsClick:    () => {},
    isEnabled:      true,
    onSettingsClick: () => {},
  },
};

export const WholeCardDisabled = {
  render: Controlled,
  args: {
    title:          'Advanced Cache',
    tooltip:        'Full-page caching requires server write permissions.',
    showBadge:      false,
    docsLabel:      'Read Docs',
    onDocsClick:    () => {},
    isEnabled:      false,
    disabled:       true,
    onSettingsClick: () => {},
  },
};

export const NoSettingsButton = {
  render: Controlled,
  args: {
    title:       'Auto Updates',
    tooltip:     'Automatically apply minor WordPress core updates.',
    showBadge:   false,
    docsLabel:   'Read Docs',
    onDocsClick: () => {},
    isEnabled:   true,
  },
};

/* ── Full list (matches screenshot layout) ── */
export const FeatureList = {
  render: function List() {
    const [states, setStates] = useState({
      adobe:  true,
      smtp:   false,
      wl:     true,
      cache:  false,
    });
    const toggle = (key) => setStates((s) => ({ ...s, [key]: !s[key] }));

    const features = [
      {
        id: 'adobe', title: 'Adobe Fonts',
        tooltip: 'Load fonts from Adobe Fonts CDN.',
        isEnabled: states.adobe,
      },
      {
        id: 'smtp', title: 'SMTP Email',
        tooltip: 'Send emails via your own SMTP server.',
        showBadge: true, badgeText: 'BETA', badgeVariant: 'beta',
        isEnabled: states.smtp,
      },
      {
        id: 'wl', title: 'White Label',
        tooltip: 'Remove Nexter branding.',
        showBadge: true, badgeText: 'PRO', badgeVariant: 'pro',
        isEnabled: states.wl,
      },
      {
        id: 'cache', title: 'Advanced Cache',
        tooltip: 'Full-page caching layer.',
        isEnabled: states.cache,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 520 }}>
        {features.map((f) => (
          <FeatureToggleCard
            key={f.id}
            {...f}
            docsLabel="Read Docs"
            onDocsClick={() => {}}
            onSettingsClick={() => alert(`${f.title} settings`)}
            onToggle={() => toggle(f.id)}
          />
        ))}
      </div>
    );
  },
};
