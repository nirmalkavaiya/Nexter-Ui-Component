# Nexter UI Component

> React component library built on the **Nexter Design System** — 40+ accessible, token-driven components for WordPress admin UIs and beyond.

[![npm](https://img.shields.io/npm/v/nexter-ui-component)](https://www.npmjs.com/package/nexter-ui-component)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-nirmalkavaiya%2FNexter--Ui--Component-181717?logo=github)](https://github.com/nirmalkavaiya/Nexter-Ui-Component)

---

## Install

```bash
# From GitHub (works today, no npm publish needed)
npm install github:nirmalkavaiya/Nexter-Ui-Component

# From npm (after you run: npm login && npm publish)
npm install nexter-ui-component

# yarn
yarn add nexter-ui-component

# pnpm
pnpm add nexter-ui-component
```

> **Peer dependencies:** React ≥ 17 and react-dom must already be installed in your project.

---

## Quick start

```jsx
// 1. Import the stylesheet once (e.g. in your root App.jsx or index.js)
import 'nexter-ui-component/dist/style.css'

// 2. Import any component
import { Button, Modal, Toggle, Dropdown, Table } from 'nexter-ui-component'

export default function App() {
  return (
    <div>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}
```

---

## All 40 components

| Component | Description |
|-----------|-------------|
| `Accordion` | Collapsible panels — single or multi-open |
| `Alert` | Inline alert — info / success / warning / error |
| `Avatar` | Initials or image avatar — sm / md / lg |
| `Badge` | Solid badge — default / gradient (PRO) |
| `Banner` | Full-width announcement strip |
| `Button` | 5 variants × 3 sizes — primary, secondary, ghost, destructive, link |
| `Carousel` | Snap-scroll carousel with prev/next + dot indicators |
| `Checkbox` | Accessible custom checkbox — controlled & uncontrolled |
| `Combobox` | Filterable searchable list with keyboard nav |
| `Dialog` | Small centered confirm dialog |
| `Dropdown` | Custom listbox — full keyboard nav (Arrow/Enter/Esc/Home/End) |
| `EmptyState` | Empty screen with icon, title, description, action slot |
| `Field` | Form field wrapper with label, hint, and error |
| `IconBox` | Feature card with icon, title, description, CTA |
| `Input` | Text input — normal, invalid, disabled states |
| `Kbd` | Keyboard shortcut chip |
| `Modal` | Portal modal — sm / md / lg / xl, Esc + backdrop close |
| `Notice` | Dismissible inline notice — 4 variants |
| `Pagination` | Page number controls with prev/next |
| `Popover` | Floating card for contextual content |
| `Progress` | Progress bar — default / success / warning |
| `Radio` | Accessible custom radio — controlled & uncontrolled |
| `Search` | Search input with icon |
| `Segmented` | Segmented control (radio group) |
| `Select` | Native select with design token styling |
| `Sheet` | Side-panel-style card layout |
| `Skeleton` | Loading placeholder — line / circle / title |
| `Slider` | Range input with live value chip |
| `Spinner` | Loading spinner — sm / md / lg |
| `StatCard` | Dashboard metric card |
| `Status` | Status pill with dot — active / inactive / pending / info |
| `Stepper` | Numeric +/− stepper |
| `Table` | Data table — striped, numeric columns, actions slot |
| `Tabs` | Tabs — pill / underline / vertical with sub-menu |
| `Tag` | Tag/chip — default / primary / success / warning / error |
| `Textarea` | Resizable textarea |
| `Toast` | Toast notification — default / error |
| `Toggle` | Toggle switch — controlled & uncontrolled |
| `Tooltip` | Portal tooltip — positions above anchor, viewport-clamped |

---

## Usage examples

### Button

```jsx
import { Button, Spinner } from 'nexter-ui-component'

<Button variant="primary">Save</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="destructive" size="lg">Delete site</Button>
<Button variant="primary" loading>Saving…</Button>
<Button variant="ghost" icon aria-label="Settings">⚙</Button>
```

### Field + Input

```jsx
import { Field, Input } from 'nexter-ui-component'

<Field label="Email address" hint="We'll never share this.">
  <Input type="email" placeholder="you@example.com" />
</Field>

<Field label="Invalid example" error="That email looks wrong.">
  <Input type="email" invalid value="not-an-email" />
</Field>
```

### Dropdown

```jsx
import { Dropdown } from 'nexter-ui-component'

const options = [
  { value: 'free',     label: 'Free',     sub: 'Up to 3 sites' },
  { value: 'pro',      label: 'Pro',      sub: 'Unlimited sites' },
  { divider: true },
  { value: 'lifetime', label: 'Lifetime', sub: 'One-time purchase' },
]

function MyForm() {
  const [plan, setPlan] = useState('free')
  return <Dropdown options={options} value={plan} onChange={setPlan} />
}
```

### Modal

```jsx
import { Modal, Button } from 'nexter-ui-component'

function MyPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
        byline="This cannot be undone."
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </>
        }
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  )
}
```

### Toggle

```jsx
import { Toggle } from 'nexter-ui-component'

function Settings() {
  const [enabled, setEnabled] = useState(false)
  return (
    <Toggle
      checked={enabled}
      onChange={setEnabled}
      label="Enable dark mode"
    />
  )
}
```

### Table

```jsx
import { Table, Tag } from 'nexter-ui-component'

const columns = [
  { key: 'site',    label: 'Site' },
  { key: 'plan',    label: 'Plan' },
  { key: 'visits',  label: 'Visits',  numeric: true },
  { key: 'status',  label: 'Status' },
]

const rows = [
  { site: 'nexterwp.com',       plan: 'Pro',  visits: '128,420', status: <Tag variant="success">Active</Tag> },
  { site: 'theplusaddons.com',  plan: 'Pro',  visits: '84,219',  status: <Tag variant="success">Active</Tag> },
  { site: 'uichemy.com',        plan: 'Free', visits: '12,031',  status: <Tag variant="warning">Trial</Tag> },
]

<Table columns={columns} rows={rows} striped />
```

### Tabs

```jsx
import { Tabs } from 'nexter-ui-component'

const tabs = [
  { id: 'overview',  label: 'Overview' },
  { id: 'activity',  label: 'Activity' },
  { id: 'settings',  label: 'Settings' },
]

<Tabs variant="pill" tabs={tabs} defaultTab="overview" />
<Tabs variant="underline" tabs={tabs} />
<Tabs variant="vertical" tabs={tabs} />
```

---

## Design tokens

All components read from CSS custom properties on `:root`. Override any token globally:

```css
:root {
  --nxp-brand:   #7C3AED;   /* purple instead of indigo */
  --nxp-radius:  8px;        /* rounder corners */
  --nxp-font:    'Inter', sans-serif;
}
```

Key tokens:

| Token | Default | Purpose |
|-------|---------|---------|
| `--nxp-brand` | `#1E40AF` | Primary accent colour |
| `--nxp-radius` | `6px` | Control corner radius |
| `--nxp-h` | `36px` | Control height (input, button, select) |
| `--nxp-h-sm` | `28px` | Small control height |
| `--nxp-h-lg` | `40px` | Large control height |
| `--nxp-font` | Geist | Font family |
| `--nxp-text` | `#0F172A` | Default text colour |
| `--nxp-text-muted` | `#64748B` | Muted text |
| `--nxp-border` | `#E2E8F0` | Default border |

---

## Dev / run demo

```bash
git clone https://github.com/nirmalkavaiya/Nexter-Ui-Component.git
cd Nexter-Ui-Component
npm install
npm run dev      # http://localhost:5173 — live component gallery
npm run build    # build dist/
```

---

## License

MIT © [Nirmal Kavaiya](https://github.com/nirmalkavaiya)
