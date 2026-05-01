# Dropdown

Custom listbox with full keyboard navigation.

## Import

```jsx
import { Dropdown } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[]` | `[]` | Array of option objects (see below) |
| `value` | `string` | `undefined` | Controlled selected value |
| `defaultValue` | `string` | `''` | Initial value (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Selection change handler |
| `placeholder` | `string` | `'Select…'` | Placeholder when nothing selected |
| `disabled` | `boolean` | `false` | Disables the control |
| `className` | `string` | `''` | Extra class on root element |

### Option shape

```ts
type Option =
  | { value: string; label: string; sub?: string }
  | { divider: true }
```

## Usage

### Basic

```jsx
const options = [
  { value: 'draft',     label: 'Draft' },
  { value: 'published', label: 'Published' },
  { value: 'archived',  label: 'Archived' },
]

<Dropdown options={options} placeholder="Select status…" onChange={console.log} />
```

### With sub-labels and divider

```jsx
const plans = [
  { value: 'free',     label: 'Free',     sub: 'Up to 3 sites' },
  { value: 'pro',      label: 'Pro',      sub: 'Unlimited sites' },
  { divider: true },
  { value: 'lifetime', label: 'Lifetime', sub: 'One-time purchase' },
]

const [plan, setPlan] = useState('free')
<Dropdown options={plans} value={plan} onChange={setPlan} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-dropdown` | Root wrapper |
| `.nxp-dropdown__trigger` | Clickable button trigger |
| `.nxp-dropdown__list` | Options list |
| `.nxp-dropdown__option` | Individual option row |
| `.nxp-dropdown__option.is-selected` | Currently selected option |
| `.nxp-dropdown__option.is-active` | Keyboard-highlighted option |
| `.nxp-dropdown__sub` | Secondary label text |
| `.nxp-dropdown__divider` | Visual separator line |
| `.nxp-dropdown.is-open` | Open state modifier |

## Notes

- Keyboard: Arrow keys navigate list, Home/End jump to edges, Enter selects, Escape closes
- Click outside closes the dropdown automatically
