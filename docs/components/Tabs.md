# Tabs

> Tabbed navigation with pill and vertical variants, sub-tab support, and controlled/uncontrolled modes.

---

## Import

```jsx
import { Tabs } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"pill" \| "vertical"` | `"pill"` | Layout variant. `"vertical"` renders tabs in a sidebar. |
| `tabs` | `array` | `[]` | Tab definition objects (see shape below). |
| `activeTab` | `string` | — | Controlled active tab id. Omit for uncontrolled. |
| `onTabChange` | `func` | — | Called with the selected tab `id` on change. |
| `defaultTab` | `string` | — | Initial active tab id (uncontrolled mode only). Falls back to `tabs[0].id`. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

### Tab object shape

| Key | Type | Description |
|-----|------|-------------|
| `id` | `string` | Unique identifier for the tab. |
| `label` | `string \| node` | Tab button label. |
| `content` | `node` | Panel content rendered when this tab is active. |
| `subTabs` | `array` | Array of `{ id, label }` — sub-tabs rendered in vertical mode only. |

---

## Usage

### Pill tabs (controlled)

```jsx
const [active, setActive] = useState('general');

const tabs = [
  { id: 'general',  label: 'General',  content: <GeneralSettings /> },
  { id: 'social',   label: 'Social',   content: <SocialSettings /> },
  { id: 'advanced', label: 'Advanced', content: <AdvancedSettings /> },
];

<Tabs tabs={tabs} activeTab={active} onTabChange={setActive} />
```

### Vertical tabs with sub-tabs

```jsx
const tabs = [
  {
    id: 'seo',
    label: 'SEO',
    content: <SeoPanel />,
    subTabs: [
      { id: 'title',       label: 'Title & Meta' },
      { id: 'schema',      label: 'Schema' },
      { id: 'canonical',   label: 'Canonical' },
    ],
  },
  { id: 'redirects', label: 'Redirects', content: <RedirectsPanel /> },
];

<Tabs variant="vertical" tabs={tabs} />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onTabChange` | `(id: string) => void` | Called with the newly selected tab id. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-tabs` | Root wrapper |
| `.nxp-tabs--vertical` | `variant="vertical"` |
| `.nxp-tabs__list` | Tab button container |
| `.nxp-tabs__tab` | Individual tab button |
| `.nxp-tabs__tab.is-active` | Currently active tab |
| `.nxp-tabs__sub-list` | Sub-tab list (vertical only) |
| `.nxp-tabs__sub` | Sub-tab button |
| `.nxp-tabs__sub.is-active` | Active sub-tab |
| `.nxp-tabs__panel` | Tab panel content area |
| `.nxp-tabs__content` | Panel area in vertical mode |

---

## Notes

- Sub-tabs are only rendered in `"vertical"` mode and only when the parent tab is active.
- Each tab button has `role="tab"` and `aria-selected`; the panel has `role="tabpanel"`.
- `defaultTab` only takes effect on first render; for subsequent active-tab control pass `activeTab`.
