# Select

> Native `<select>` element styled with Nexter design tokens, with optional placeholder and full attribute pass-through.

---

## Import

```jsx
import { Select } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `array` | `[]` | Array of `{ value, label }` objects. |
| `value` | `string \| number` | — | Controlled selected value. |
| `onChange` | `func` | — | Native change event handler. |
| `disabled` | `bool` | `false` | Disables the select element. |
| `placeholder` | `string` | — | Disabled placeholder option shown at the top when provided. |
| `className` | `string` | `''` | Additional CSS class(es). |
| `...rest` | — | — | Any other native `<select>` attributes. |

---

## Usage

### Basic

```jsx
const roleOptions = [
  { value: 'admin',  label: 'Administrator' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
];

<Select options={roleOptions} placeholder="Choose a role" />
```

### Controlled

```jsx
const [role, setRole] = useState('editor');

<Select
  options={roleOptions}
  value={role}
  onChange={(e) => setRole(e.target.value)}
/>
```

### Inside a Field

```jsx
<Field label="User role" hint="Determines what the user can edit.">
  <Select options={roleOptions} value={role} onChange={(e) => setRole(e.target.value)} />
</Field>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(event: ChangeEvent) => void` | Standard React change handler. Access `event.target.value`. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-select` | Root `<select>` element |

---

## Notes

- Uses the native browser `<select>` — accessible and functional on all devices including mobile.
- The placeholder option has `value=""` and `disabled` to prevent it being re-selected.
- Pair with `Field` for label and error layout.
