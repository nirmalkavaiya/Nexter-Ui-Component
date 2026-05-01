# Tabs

Tabs with pill, underline, and vertical variants — supports sub-menus.

## Import

```jsx
import { Tabs } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Tab[]` | `[]` | Tab definitions (see below) |
| `variant` | `'pill' \| 'underline' \| 'vertical'` | `'underline'` | Visual style |
| `defaultTab` | `string` | — | Initially active tab id (uncontrolled) |
| `activeTab` | `string` | `undefined` | Controlled active tab id |
| `onChange` | `(id: string) => void` | — | Tab change handler |
| `className` | `string` | `''` | Extra class on root element |

### Tab shape

```ts
type Tab = {
  id: string
  label: ReactNode
  content?: ReactNode
  children?: Tab[]   // sub-menu (vertical variant)
  disabled?: boolean
}
```

## Usage

### Underline tabs

```jsx
const tabs = [
  { id: 'overview', label: 'Overview', content: <Overview /> },
  { id: 'settings', label: 'Settings', content: <Settings /> },
  { id: 'logs',     label: 'Logs',     content: <Logs /> },
]

<Tabs variant="underline" tabs={tabs} defaultTab="overview" />
```

### Pill tabs

```jsx
<Tabs variant="pill" tabs={tabs} defaultTab="overview" />
```

### Vertical with sub-menu

```jsx
const navTabs = [
  { id: 'general',   label: 'General' },
  { id: 'seo',       label: 'SEO', children: [
    { id: 'titles',    label: 'Titles' },
    { id: 'social',    label: 'Social' },
  ]},
  { id: 'redirects', label: 'Redirects' },
]

<Tabs variant="vertical" tabs={navTabs} onChange={setActiveSection} />
```

### Controlled

```jsx
<Tabs variant="pill" tabs={tabs} activeTab={active} onChange={setActive} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-tabs` | Root wrapper |
| `.nxp-tabs--pill` | Pill variant |
| `.nxp-tabs--underline` | Underline variant |
| `.nxp-tabs--vertical` | Vertical variant |
| `.nxp-tabs__list` | Tab button row |
| `.nxp-tabs__tab` | Individual tab button |
| `.nxp-tabs__tab.is-active` | Active tab |
| `.nxp-tabs__tab.is-disabled` | Disabled tab |
| `.nxp-tabs__panel` | Content panel |
| `.nxp-tabs__sub` | Sub-menu container (vertical) |
