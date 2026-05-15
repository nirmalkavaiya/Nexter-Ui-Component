# FeatureToggleCard

A settings-dashboard card combining an optional top plan pill (text you pass via `planLabel`), feature title, optional inline badges (NEW, BETA, PRO…), tooltip, docs link, settings button, and a controlled toggle switch — or a lock button with upgrade CTA when the feature requires a higher plan.

## Import

```jsx
import { FeatureToggleCard } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Feature name displayed in the card |
| `tooltip` | `string` | — | Description shown on ⓘ icon hover |
| `planLabel` | `string` | — | If non-empty (after trim), shows the top-left plan pill with this exact text (e.g. `__('PRO')`). Omit or leave empty to hide the pill |
| `isLocked` | `boolean` | `false` | Replaces toggle with a lock button; disables interaction |
| `isNew` | `boolean` | `false` | Shows a green **NEW** pill badge in the title row |
| `isEnabled` | `boolean` | — | Controlled toggle state |
| `onToggle` | `(enabled: boolean) => void` | — | Toggle change callback |
| `onSettingsClick` | `() => void` | — | Gear icon callback (hidden when `isLocked`) |
| `onDocsClick` | `() => void` | — | "Read Docs" button callback |
| `docsLabel` | `string` | `'Read Docs'` | Docs link text |
| `docsHref` | `string` | — | If provided renders an `<a>` instead of `<button>` |
| `onUpgradeClick` | `() => void` | — | Shown as "Upgrade →" link + lock button action when `isLocked` |
| `showBadge` | `boolean` | `false` | Show inline feature badge (BETA / PRO / etc.) |
| `badgeText` | `string` | `'BETA'` | Inline badge label |
| `badgeVariant` | `'default' \| 'beta' \| 'pro' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'beta'` | Inline badge colour |
| `disabled` | `boolean` | `false` | Dims entire card and disables all interaction |
| `className` | `string` | `''` | Extra class on the root wrapper |

---

## States

### Free — toggle enabled

```jsx
<FeatureToggleCard
  title="Adobe Fonts"
  tooltip="Load fonts from Adobe Fonts CDN."
  isEnabled={enabled}
  onToggle={setEnabled}
  onSettingsClick={openSettings}
  docsLabel="Read Docs"
  onDocsClick={openDocs}
/>
```

### FREEMIUM — plan badge + BETA inline badge

```jsx
<FeatureToggleCard
  title="SMTP Email"
  tooltip="Send emails via your own SMTP server."
  planLabel="FREEMIUM"
  showBadge
  badgeText="BETA"
  badgeVariant="beta"
  isEnabled={enabled}
  onToggle={setEnabled}
  onSettingsClick={openSettings}
  docsLabel="Read Docs"
  onDocsClick={openDocs}
/>
```

### PRO — locked with upgrade CTA

```jsx
<FeatureToggleCard
  title="White Label"
  tooltip="Remove all Nexter branding."
  planLabel="PRO"
  isLocked
  isEnabled={false}
  onToggle={() => {}}
  onUpgradeClick={openUpgradeModal}
  docsLabel="Read Docs"
  onDocsClick={openDocs}
/>
```

### NEW feature

```jsx
<FeatureToggleCard
  title="AI Content Assistant"
  tooltip="Generate SEO meta descriptions using AI."
  planLabel="PRO"
  isNew
  isLocked
  isEnabled={false}
  onToggle={() => {}}
  onUpgradeClick={openUpgradeModal}
  docsLabel="Read Docs"
  onDocsClick={openDocs}
/>
```

### Whole card disabled

```jsx
<FeatureToggleCard
  title="Advanced Cache"
  tooltip="Requires server write permissions."
  disabled
  isEnabled={false}
  onToggle={() => {}}
  docsLabel="Read Docs"
  onDocsClick={openDocs}
/>
```

---

## Plan pill (`planLabel`)

The top-left pill uses one visual style for every label. Pass translated or branded strings from your app (for example `PRO`, `FREEMIUM`, `BETA`). Whitespace is trimmed; an empty or omitted `planLabel` hides the pill.

---

## Inline feature badges (`badgeVariant`)

| Variant | Appearance |
|---------|-----------|
| `beta` | Solid indigo fill, white text |
| `pro` | Indigo→purple gradient, white text |
| `primary` | Soft brand tint |
| `success` | Green tint |
| `warning` | Amber tint |
| `error` | Red tint |
| `default` | Neutral grey |

The `isNew` prop renders a separate **NEW** badge (green outlined) that is independent of `showBadge`.

---

## Behavior

| Condition | Toggle | Settings btn | Upgrade link |
|-----------|--------|-------------|-------------|
| Normal | Functional | Shown if `onSettingsClick` provided | Hidden |
| `isLocked = true` | Replaced by lock button | Hidden | Shown if `onUpgradeClick` provided |
| `disabled = true` | Disabled | Disabled | Not rendered |

- Clicking the **lock button** triggers `onUpgradeClick`
- Clicking **Upgrade →** text also triggers `onUpgradeClick`
- `isLocked` + `disabled` can be combined; `disabled` takes visual precedence

---

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-ftc-outer` | Wrapper that positions the plan badge |
| `.nxp-ftc-outer--has-plan` | Adds `padding-top` when plan badge is shown |
| `.nxp-ftc-plan` | Top plan pill (outlined brand; any `planLabel` text) |
| `.nxp-ftc` | Card root |
| `.nxp-ftc--locked` | Locked card state (muted bg, muted title) |
| `.nxp-ftc--disabled` | Disabled card state (opacity + pointer-events) |
| `.nxp-ftc__body` | Flex row — left + right |
| `.nxp-ftc__left` | Title, badges, links column |
| `.nxp-ftc__right` | Settings + toggle/lock column |
| `.nxp-ftc__title-row` | Horizontal row: title + badges + info icon |
| `.nxp-ftc__title` | Feature name text |
| `.nxp-ftc__badge` | Inline feature badge base |
| `.nxp-ftc__badge--new` | Green NEW badge |
| `.nxp-ftc__badge--beta` | Solid indigo BETA badge |
| `.nxp-ftc__badge--pro` | Gradient PRO badge |
| `.nxp-ftc__info-icon` | Circle-i tooltip anchor |
| `.nxp-ftc__links` | Flex row: docs link + upgrade link |
| `.nxp-ftc__link` | Docs/upgrade link shared base |
| `.nxp-ftc__link--btn` | Button-reset modifier |
| `.nxp-ftc__upgrade-link` | Purple "Upgrade →" link |
| `.nxp-ftc__settings-btn` | Circular gear icon button |
| `.nxp-ftc__lock-btn` | Circular lock icon button (purple tint) |

---

## Design tokens used

| Token | Usage |
|-------|-------|
| `--nxp-bg` | Card background |
| `--nxp-bg-alt` | Locked card background |
| `--nxp-border` | Card border |
| `--nxp-border-strong` | Settings/lock button border |
| `--nxp-brand` | Plan pill border/text, docs link, info icon hover |
| `--nxp-brand-soft` | Settings button hover background |
| `--nxp-text` | Title colour |
| `--nxp-text-muted` | Locked title, separator, icon colour |
| `--nxp-font` | All text |
| `--nxp-ring` | Focus ring on buttons |
| `--nxp-dur-hover` | Transition duration |
| `--nxp-ease` | Transition easing |

---

## Accessibility

- Toggle has `aria-label="Enable {title}"`
- Lock button has `aria-label="Upgrade to unlock {title}"` + `title` tooltip
- Settings button has `aria-label="{title} settings"`
- Info icon has `aria-label="About {title}"` + `role="button"` + `tabIndex`
- Plan badge has descriptive text rendered in screen-reader–accessible markup
- NEW / BETA badges include `aria-label`
- Keyboard: `Tab` navigates all interactive elements; `Space`/`Enter` activate buttons and toggle
