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
          'Settings-dashboard card with plan badge (PRO/FREEMIUM), title, NEW badge, tooltip, docs link, upgrade link, settings button, and a controlled toggle — or a lock button when the feature requires upgrade.',
      },
    },
  },
  argTypes: {
    planType:    { control: 'select', options: ['free', 'pro', 'freemium'] },
    isEnabled:   { control: 'boolean' },
    isLocked:    { control: 'boolean' },
    isNew:       { control: 'boolean' },
    disabled:    { control: 'boolean' },
    showBadge:   { control: 'boolean' },
    badgeVariant: {
      control: 'select',
      options: ['default', 'primary', 'beta', 'pro', 'success', 'warning', 'error'],
    },
    onToggle:        { action: 'toggled' },
    onSettingsClick: { action: 'settings clicked' },
    onDocsClick:     { action: 'docs clicked' },
    onUpgradeClick:  { action: 'upgrade clicked' },
  },
};

/* ── Stateful wrapper so toggle works in Canvas ── */
function Card(args) {
  const [enabled, setEnabled] = useState(args.isEnabled ?? false);
  return (
    <div style={{ maxWidth: 540 }}>
      <FeatureToggleCard
        {...args}
        isEnabled={enabled}
        onToggle={(v) => { setEnabled(v); args.onToggle?.(v); }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Core states
   ────────────────────────────────────────────────────────── */

/** Free plan — toggle enabled, no plan badge */
export const FreeEnabled = {
  name: 'Free — Enabled',
  render: Card,
  args: {
    title:           'Adobe Fonts',
    tooltip:         'Load fonts directly from Adobe Fonts CDN.',
    planType:        'free',
    isEnabled:       true,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/** Free plan — toggle off */
export const FreeDisabled = {
  name: 'Free — Disabled Toggle',
  render: Card,
  args: {
    title:           'Image Optimisation',
    tooltip:         'Compress and lazy-load images automatically.',
    planType:        'free',
    isEnabled:       false,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/** PRO feature — locked with upgrade CTA */
export const ProLocked = {
  name: 'PRO — Locked',
  render: Card,
  args: {
    title:           'White Label',
    tooltip:         'Remove all Nexter branding from the admin interface.',
    planType:        'pro',
    isEnabled:       false,
    isLocked:        true,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onUpgradeClick:  () => alert('Upgrade to PRO'),
  },
};

/** PRO feature — unlocked (user is on PRO plan) */
export const ProUnlocked = {
  name: 'PRO — Unlocked',
  render: Card,
  args: {
    title:           'White Label',
    tooltip:         'Remove all Nexter branding from the admin interface.',
    planType:        'pro',
    isEnabled:       true,
    isLocked:        false,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/** FREEMIUM plan — available but with limits */
export const FreemiumUnlocked = {
  name: 'FREEMIUM — Unlocked',
  render: Card,
  args: {
    title:           'SMTP Email',
    tooltip:         'Send transactional emails via your own SMTP server.',
    planType:        'freemium',
    showBadge:       true,
    badgeText:       'BETA',
    badgeVariant:    'beta',
    isEnabled:       false,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/** New feature — shows NEW badge in title row */
export const NewFeature = {
  name: 'With NEW Badge',
  render: Card,
  args: {
    title:           'AI Content Assistant',
    tooltip:         'Generate SEO-optimised meta descriptions using AI.',
    planType:        'free',
    isNew:           true,
    isEnabled:       false,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/** Whole card disabled (e.g. server requirement not met) */
export const CardDisabled = {
  name: 'Whole Card Disabled',
  render: Card,
  args: {
    title:           'Advanced Cache',
    tooltip:         'Full-page caching requires server write permissions.',
    planType:        'free',
    isEnabled:       false,
    disabled:        true,
    docsLabel:       'Read Docs',
    onDocsClick:     () => {},
    onSettingsClick: () => {},
  },
};

/* ──────────────────────────────────────────────────────────
   Full settings list (matches real dashboard layout)
   ────────────────────────────────────────────────────────── */
export const FeatureList = {
  name: 'Feature List (Dashboard)',
  render: function List() {
    const [states, setStates] = useState({
      adobe: true,
      smtp:  false,
      cache: false,
      wl:    false,
      ai:    false,
    });
    const toggle = (key) => setStates((s) => ({ ...s, [key]: !s[key] }));

    const features = [
      {
        id: 'adobe',
        title: 'Adobe Fonts',
        tooltip: 'Load fonts from Adobe Fonts CDN.',
        planType: 'free',
        onSettingsClick: () => {},
      },
      {
        id: 'smtp',
        title: 'SMTP Email',
        tooltip: 'Send emails via your own SMTP server.',
        planType: 'freemium',
        showBadge: true,
        badgeText: 'BETA',
        badgeVariant: 'beta',
        onSettingsClick: () => {},
      },
      {
        id: 'cache',
        title: 'Advanced Cache',
        tooltip: 'Full-page caching layer.',
        planType: 'free',
        isNew: true,
        onSettingsClick: () => {},
      },
      {
        id: 'wl',
        title: 'White Label',
        tooltip: 'Remove Nexter branding.',
        planType: 'pro',
        isLocked: true,
        onUpgradeClick: () => alert('Upgrade to PRO'),
      },
      {
        id: 'ai',
        title: 'AI Content Assistant',
        tooltip: 'Generate SEO meta descriptions using AI.',
        planType: 'pro',
        isNew: true,
        isLocked: true,
        onUpgradeClick: () => alert('Upgrade to PRO'),
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 540 }}>
        {features.map((f) => (
          <FeatureToggleCard
            key={f.id}
            {...f}
            isEnabled={states[f.id]}
            docsLabel="Read Docs"
            onDocsClick={() => {}}
            onToggle={() => toggle(f.id)}
          />
        ))}
      </div>
    );
  },
};
