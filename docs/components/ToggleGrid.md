# ToggleGrid

A responsive grid of labelled toggle switches. Supports controlled (`valueMap`) and uncontrolled (internal `useState`) modes, per-item tooltips, and an `onChange` signature that exposes the changed key, its new boolean value, and the full updated items array.

## Import

```jsx
import { ToggleGrid } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Item[]` | `[]` | Array of toggle definitions — see [Item shape](#item-shape) |
| `columns` | `1 \| 2 \| 3 \| 4` | `2` | Number of grid columns. Collapses on small viewports |
| `valueMap` | `{ [key: string]: boolean }` | — | **Controlled mode.** When provided, all toggle states are read from here |
| `onChange` | `(key, newValue, updatedItems) => void` | — | Called on every toggle change |
| `disabled` | `boolean` | `false` | Disables all toggles |
| `className` | `string` | `''` | Extra class on the root element |

---

## Item Shape

```ts
interface Item {
  key:      string;    // unique identifier — passed as first arg to onChange
  label:    string;    // displayed next to the toggle
  value:    boolean;   // initial value (uncontrolled) or ignored (controlled)
  tooltip?: string;    // hover tooltip via ⓘ icon — optional
}
```

---

## onChange Signature

```ts
onChange(
  key:          string,   // which item changed
  newValue:     boolean,  // its new state
  updatedItems: Item[],   // full items array with updated values merged in
)
```

---

## Usage

### Uncontrolled (internal state)

```jsx
const items = [
  { key: 'canonical', label: 'Canonical URL',  value: true,  tooltip: 'Outputs canonical link tags.' },
  { key: 'og',        label: 'Open Graph',      value: false, tooltip: 'Emits og:* meta tags.' },
  { key: 'schema',    label: 'JSON-LD Schema',  value: true  },
  { key: 'sitemap',   label: 'XML Sitemap',      value: false },
]

<ToggleGrid
  items={items}
  columns={2}
  onChange={(key, val, updated) => console.log(key, val)}
/>
```

### Controlled (via `valueMap`)

```jsx
const [values, setValues] = useState({
  canonical: true,
  og:        false,
  schema:    true,
  sitemap:   false,
})

<ToggleGrid
  items={items}
  columns={2}
  valueMap={values}
  onChange={(key, newVal) =>
    setValues(prev => ({ ...prev, [key]: newVal }))
  }
/>
```

### 3-column layout

```jsx
<ToggleGrid items={items} columns={3} />
```

### All disabled

```jsx
<ToggleGrid items={items} columns={2} disabled />
```

---

## Controlled vs Uncontrolled

| Mode | How to activate | Notes |
|------|----------------|-------|
| **Uncontrolled** | Omit `valueMap` | Initial values seeded from `item.value`; internal `useState` manages the rest |
| **Controlled** | Pass `valueMap` | Component reads state entirely from `valueMap`; you must update it in `onChange` |

---

## Responsive Columns

| Viewport | 1-col | 2-col | 3-col | 4-col |
|----------|-------|-------|-------|-------|
| > 640 px | 1 | 2 | 3 | 4 |
| ≤ 640 px | 1 | 2 | 2 | 2 |
| ≤ 480 px | 1 | 1 | 1 | 1 |

---

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-tg` | Root CSS grid |
| `.nxp-tg--cols-1` … `.nxp-tg--cols-4` | Column count modifier |
| `.nxp-tg__item` | Single toggle card (border, background) |
| `.nxp-tg__item-label-row` | Flex row: label + tooltip icon |
| `.nxp-tg__item-label` | Toggle label text |
| `.nxp-tg__item-info` | ⓘ icon button (tooltip trigger) |

---

## Design Tokens Used

| Token | Where |
|-------|-------|
| `--nxp-bg` | Item background |
| `--nxp-border` / `--nxp-border-strong` | Item border, hover |
| `--nxp-radius` | Item border-radius |
| `--nxp-shadow-sm` | Item box-shadow |
| `--nxp-text` | Label colour |
| `--nxp-text-faint` | Info icon colour |
| `--nxp-brand-soft` | Info icon focus ring |
| `--nxp-font` | All text |

---

## Accessibility

- Each `Toggle` inside `ToggleItem` receives `aria-label="Enable {label}"`
- The ⓘ tooltip trigger has `role="button"`, `tabIndex={0}`, and `aria-label="About {label}"`
- The root grid receives `role="group"` so screen readers treat it as a logical unit
- `React.memo` on `ToggleItem` prevents unnecessary re-renders when unrelated items change

---

## Notes

- `ToggleItem` is exported as `React.memo` — safe to use in large lists with frequent state updates.
- In controlled mode, the `item.value` fields in the `items` array are **ignored** for rendering; only `valueMap[key]` is used. You can leave them as `false` placeholders.
- Values not present in `valueMap` fall back to `item.value ?? false`.
