# Nexter UI Component — Documentation

React component library built on the **Nexter Design System** — 40+ accessible, token-driven components for WordPress admin UIs and beyond.

## Quick start

```bash
npm install nexter-ui-component
```

```jsx
import 'nexter-ui-component/dist/style.css'
import { Button, Modal, Toggle } from 'nexter-ui-component'
```

---

## Components

### Form Controls

| Component | Description |
|-----------|-------------|
| [Checkbox](./components/Checkbox.md) | Accessible custom checkbox — controlled & uncontrolled |
| [Combobox](./components/Combobox.md) | Filterable searchable list with keyboard nav |
| [Dropdown](./components/Dropdown.md) | Custom listbox — full keyboard nav (Arrow/Enter/Esc/Home/End) |
| [Field](./components/Field.md) | Form field wrapper with label, hint, and error |
| [Input](./components/Input.md) | Text input — normal, invalid, disabled states |
| [Radio](./components/Radio.md) | Accessible custom radio — controlled & uncontrolled |
| [Search](./components/Search.md) | Search input with icon |
| [Segmented](./components/Segmented.md) | Segmented control (radio group) |
| [Select](./components/Select.md) | Native select with design token styling |
| [Slider](./components/Slider.md) | Range input with live value chip |
| [Stepper](./components/Stepper.md) | Numeric +/− stepper |
| [Textarea](./components/Textarea.md) | Resizable textarea |
| [Toggle](./components/Toggle.md) | Toggle switch — controlled & uncontrolled |

### Feedback & Overlay

| Component | Description |
|-----------|-------------|
| [Alert](./components/Alert.md) | Inline alert — info / success / warning / error |
| [Banner](./components/Banner.md) | Full-width announcement strip |
| [Dialog](./components/Dialog.md) | Small centered confirm dialog |
| [Modal](./components/Modal.md) | Portal modal — sm / md / lg / xl, Esc + backdrop close |
| [Notice](./components/Notice.md) | Dismissible inline notice — 4 variants |
| [Popover](./components/Popover.md) | Floating card for contextual content |
| [Toast](./components/Toast.md) | Toast notification — default / error |
| [Tooltip](./components/Tooltip.md) | Portal tooltip — positions above anchor, viewport-clamped |

### Navigation & Layout

| Component | Description |
|-----------|-------------|
| [Accordion](./components/Accordion.md) | Collapsible panels — single or multi-open |
| [Carousel](./components/Carousel.md) | Snap-scroll carousel with prev/next + dot indicators |
| [Pagination](./components/Pagination.md) | Page number controls with prev/next |
| [Sheet](./components/Sheet.md) | Side-panel-style card layout |
| [Tabs](./components/Tabs.md) | Tabs — pill / underline / vertical with sub-menu |

### Display & Data

| Component | Description |
|-----------|-------------|
| [Avatar](./components/Avatar.md) | Initials or image avatar — sm / md / lg |
| [Badge](./components/Badge.md) | Solid badge — default / gradient (PRO) |
| [EmptyState](./components/EmptyState.md) | Empty screen with icon, title, description, action slot |
| [IconBox](./components/IconBox.md) | Feature card with icon, title, description, CTA |
| [Kbd](./components/Kbd.md) | Keyboard shortcut chip |
| [Progress](./components/Progress.md) | Progress bar — default / success / warning |
| [Skeleton](./components/Skeleton.md) | Loading placeholder — line / circle / title |
| [Spinner](./components/Spinner.md) | Loading spinner — sm / md / lg |
| [StatCard](./components/StatCard.md) | Dashboard metric card |
| [Status](./components/Status.md) | Status pill with dot — active / inactive / pending / info |
| [Table](./components/Table.md) | Data table — striped, numeric columns, actions slot |
| [Tag](./components/Tag.md) | Tag/chip — default / primary / success / warning / error |

### Buttons & Actions

| Component | Description |
|-----------|-------------|
| [Button](./components/Button.md) | 5 variants × 3 sizes — primary, secondary, ghost, destructive, link |

---

## Design tokens

All components read from CSS custom properties on `:root`. Override any token globally:

```css
:root {
  --nxp-brand:  #7C3AED;   /* purple instead of indigo */
  --nxp-radius: 8px;        /* rounder corners */
  --nxp-font:   'Inter', sans-serif;
}
```

| Token | Default | Purpose |
|-------|---------|---------|
| `--nxp-brand` | `#1E40AF` | Primary accent colour |
| `--nxp-brand-2` | `#4F46E5` | Secondary accent |
| `--nxp-radius` | `6px` | Control corner radius |
| `--nxp-h` | `36px` | Control height (input, button, select) |
| `--nxp-h-sm` | `28px` | Small control height |
| `--nxp-h-lg` | `40px` | Large control height |
| `--nxp-font` | Geist | Font family |
| `--nxp-text` | `#0F172A` | Default text colour |
| `--nxp-text-muted` | `#64748B` | Muted text |
| `--nxp-border` | `#E2E8F0` | Default border |
| `--nxp-surface` | `#FFFFFF` | Card / input background |
| `--nxp-ease` | `cubic-bezier(0.16,1,0.3,1)` | Default easing |

---

## Regenerate docs

```bash
node scripts/generate-docs.js          # write all docs
node scripts/generate-docs.js --dry-run  # preview without writing
```

---

## License

MIT © [Nirmal Kavaiya](https://github.com/nirmalkavaiya)
