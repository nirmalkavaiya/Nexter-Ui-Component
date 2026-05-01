# Nexter UI Component — Documentation

> 39+ accessible, token-driven React components built on the Nexter Design System.

[![npm](https://img.shields.io/npm/v/nexter-ui-component)](https://www.npmjs.com/package/nexter-ui-component)
[![GitHub](https://img.shields.io/badge/GitHub-nirmalkavaiya%2FNexter--Ui--Component-181717?logo=github)](https://github.com/nirmalkavaiya/Nexter-Ui-Component)

## Install

```bash
npm install nexter-ui-component
```

```jsx
import 'nexter-ui-component/dist/style.css'
import { Button, Modal } from 'nexter-ui-component'
```

---

## Components

### 1. Inputs & Controls

| Component | Description |
|-----------|-------------|
| [Button](./components/Button.md) | Clickable action trigger with variants, sizes, loading state, and icon-only mode. |
| [Input](./components/Input.md) | Single-line text input with invalid state and native attribute pass-through. |
| [Textarea](./components/Textarea.md) | Multi-line text input with configurable rows. |
| [Select](./components/Select.md) | Native `<select>` element styled with Nexter tokens. |
| [Toggle](./components/Toggle.md) | On/off switch with label and keyboard support. |
| [Checkbox](./components/Checkbox.md) | Binary selection control — controlled and uncontrolled. |
| [Radio](./components/Radio.md) | Single radio button — compose multiple for a group. |
| [Dropdown](./components/Dropdown.md) | Custom select menu with keyboard nav, dividers, and sub-labels. |
| [Segmented](./components/Segmented.md) | Button-group toggle for selecting one option from a small set. |
| [Stepper](./components/Stepper.md) | Numeric +/− increment input with min/max clamping. |
| [Slider](./components/Slider.md) | Range input with live value display and unit label. |
| [Search](./components/Search.md) | Search input with built-in icon, controlled and uncontrolled. |
| [Combobox](./components/Combobox.md) | Searchable select with type-to-filter and full keyboard navigation. |

### 2. Layout & Navigation

| Component | Description |
|-----------|-------------|
| [Field](./components/Field.md) | Form field wrapper pairing label, input, hint, and error message. |
| [Tabs](./components/Tabs.md) | Tabbed navigation — pill and vertical variants with sub-tab support. |
| [Accordion](./components/Accordion.md) | Collapsible content panels — single-open and multi-open modes. |
| [Carousel](./components/Carousel.md) | Horizontally scrollable slide deck with dot navigation. |
| [Table](./components/Table.md) | Responsive data table with column definitions and actions slot. |
| [Pagination](./components/Pagination.md) | Page navigator with numbered buttons and prev/next controls. |

### 3. Feedback & Status

| Component | Description |
|-----------|-------------|
| [Alert](./components/Alert.md) | Inline status message — info, success, warning, error variants. |
| [Notice](./components/Notice.md) | Dismissible notification strip with animated exit. |
| [Banner](./components/Banner.md) | Full-width promotional strip with icon, title, body, and actions. |
| [Toast](./components/Toast.md) | Brief notification with live region announcement. |
| [Progress](./components/Progress.md) | Horizontal progress bar with ARIA progressbar role. |
| [Skeleton](./components/Skeleton.md) | Loading placeholder — line, circle, and title shapes. |
| [Spinner](./components/Spinner.md) | Animated loading indicator in three sizes. |
| [Status](./components/Status.md) | Inline status badge with semantic variant colors. |
| [Badge](./components/Badge.md) | Small label for status, counts, or categories. |
| [Tag](./components/Tag.md) | Compact inline label for categories or metadata. |

### 4. Overlay & Popups

| Component | Description |
|-----------|-------------|
| [Modal](./components/Modal.md) | Accessible overlay dialog with scroll lock and portal rendering. |
| [Dialog](./components/Dialog.md) | Confirmation/alert panel with icon, title, description, and actions. |
| [Sheet](./components/Sheet.md) | Structured card panel with header, body, and footer slots. |
| [Popover](./components/Popover.md) | Floating content panel — positioning managed by the parent. |
| [Tooltip](./components/Tooltip.md) | Hover/focus-triggered floating label via portal. |

### 5. Display & Misc

| Component | Description |
|-----------|-------------|
| [Avatar](./components/Avatar.md) | Circular user representation — image or text initials. |
| [Kbd](./components/Kbd.md) | Keyboard key indicator styled as a physical keycap. |
| [StatCard](./components/StatCard.md) | Metric display card — label, primary value, trend meta. |
| [IconBox](./components/IconBox.md) | Feature card — icon/step, title, description, and CTA link. |
| [EmptyState](./components/EmptyState.md) | Placeholder for lists with no content. |

---

## Design Tokens

All components reference CSS custom properties defined in `src/styles/index.css`.

| Token | Default | Purpose |
|-------|---------|---------|
| `--nxp-brand` | `#1E40AF` | Primary brand blue |
| `--nxp-brand-2` | `#4F46E5` | Secondary brand indigo |
| `--nxp-brand-soft` | `#EEF2FF` | Light brand background tint |
| `--nxp-brand-grad` | `linear-gradient(180deg, #1E40AF, #4F46E5)` | Brand gradient (used by Badge gradient) |
| `--nxp-bg` | `#fff` | Default background |
| `--nxp-bg-alt` | `#F8FAFC` | Alternate surface background |
| `--nxp-text` | `#0F172A` | Default text color |
| `--nxp-text-muted` | `#64748B` | Muted / secondary text |
| `--nxp-text-faint` | `#94A3B8` | Placeholder / faint text |
| `--nxp-border` | `#E2E8F0` | Default border color |
| `--nxp-border-strong` | `#CBD5E1` | Stronger border (focus rings, etc.) |
| `--nxp-success` | `#16A34A` | Success semantic color |
| `--nxp-warning` | `#D97706` | Warning semantic color |
| `--nxp-error` | `#DC2626` | Error semantic color |
| `--nxp-info` | `#2563EB` | Info semantic color |
| `--nxp-h` | `36px` | Default control height |
| `--nxp-h-sm` | `28px` | Small control height |
| `--nxp-h-lg` | `40px` | Large control height |
| `--nxp-radius` | `6px` | Default border radius |
| `--nxp-radius-pill` | `999px` | Pill border radius |
| `--nxp-shadow` | (composite) | Default component shadow |
| `--nxp-shadow-lg` | (composite) | Elevated overlay shadow |
| `--nxp-font` | `"Geist", system-ui, sans-serif` | Font stack |
| `--nxp-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Motion easing curve |
| `--nxp-dur-motion` | `240ms` | Default animation duration |

Override any token at the `:root` or component level to theme the library.

---

## Quick Examples

### Button row

```jsx
import { Button } from 'nexter-ui-component'

function ActionBar() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary" onClick={handleSave}>Save Changes</Button>
      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </div>
  )
}
```

### Controlled Toggle

```jsx
import { useState } from 'react'
import { Toggle, Field } from 'nexter-ui-component'

function IndexNowToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field hint="Automatically notify search engines when content changes.">
      <Toggle
        checked={enabled}
        onChange={setEnabled}
        label="Enable IndexNow auto-submit"
      />
    </Field>
  )
}
```

### Modal trigger

```jsx
import { useState } from 'react'
import { Button, Modal, Field, Input } from 'nexter-ui-component'

function AddRedirectModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Add Redirect</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="New Redirect Rule"
        byline="Enter the source and destination URLs."
        footer={
          <>
            <Button variant="primary" onClick={handleSave}>Create Rule</Button>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          </>
        }
      >
        <Field label="From URL">
          <Input type="url" placeholder="/old-page-slug" />
        </Field>
        <Field label="To URL">
          <Input type="url" placeholder="/new-page-slug" />
        </Field>
      </Modal>
    </>
  )
}
```

---

## Regenerating docs

```bash
node scripts/generate-docs.js          # write all docs
node scripts/generate-docs.js --dry-run  # preview without writing
```

Or add to `package.json`:

```json
"scripts": {
  "docs": "node scripts/generate-docs.js"
}
```

---

## License

MIT © Nirmal Kavaiya
