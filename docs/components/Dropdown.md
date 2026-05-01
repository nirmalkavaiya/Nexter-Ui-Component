# Dropdown

> Custom select menu with keyboard navigation, optional dividers, and sub-labels.

---

## Import

```jsx
import { Dropdown } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `array` | `[]` | Array of option objects (see shape below). |
| `value` | `string \| number` | — | Controlled selected value. Omit for uncontrolled. |
| `onChange` | `func` | — | Called with the chosen option's `value`. |
| `placeholder` | `string` | `"Select…"` | Placeholder text shown when nothing is selected. |
| `disabled` | `bool` | `false` | Prevents opening the menu. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

### Option object shape

| Key | Type | Description |
|-----|------|-------------|
| `value` | `string \| number` | Unique value passed to `onChange`. |
| `label` | `string` | Display label. |
| `sub` | `string` | Optional secondary label shown on the right. |
| `divider` | `bool` | When `true`, renders a horizontal divider line instead of an option. |

---

## Usage

### Basic

```jsx
const timezones = [
  { value: 'utc',    label: 'UTC',                sub: '+00:00' },
  { value: 'ist',    label: 'India Standard Time', sub: '+05:30' },
  { value: 'est',    label: 'Eastern Time',        sub: '-05:00' },
  { divider: true },
  { value: 'custom', label: 'Custom offset…' },
];

<Dropdown options={timezones} placeholder="Select timezone" />
```

### Controlled

```jsx
const [tz, setTz] = useState('ist');

<Dropdown options={timezones} value={tz} onChange={setTz} />
```

### Disabled

```jsx
<Dropdown options={timezones} disabled />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: string \| number) => void` | Fired with the selected option's `value`. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-dropdown` | Root wrapper |
| `.nxp-dropdown.is-open` | Menu is open |
| `.nxp-dropdown__trigger` | Trigger button |
| `.nxp-dropdown__chevron` | SVG chevron icon |
| `.nxp-dropdown__menu` | Options list panel |
| `.nxp-dropdown__item` | Option row |
| `.nxp-dropdown__item.is-selected` | Currently selected option |
| `.nxp-dropdown__item.is-focused` | Keyboard-highlighted option |
| `.nxp-dropdown__sub` | Secondary label span |
| `.nxp-dropdown__check` | Checkmark SVG on selected item |
| `.nxp-dropdown__divider` | Horizontal rule divider |

---

## Notes

- Keyboard shortcuts: `Enter/Space/ArrowDown` opens; `ArrowDown/Up`, `Home`, `End` navigate; `Enter` selects; `Escape` closes.
- Clicking outside the component closes the menu via a `mousedown` document listener.
- Divider objects (`{ divider: true }`) are skipped in keyboard navigation.
