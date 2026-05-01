# Combobox

> Searchable select — type-to-filter dropdown with full keyboard navigation and ARIA combobox pattern.

---

## Import

```jsx
import { Combobox } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `array` | `[]` | Array of `{ value, label }` objects. |
| `value` | `string \| number` | — | Controlled selected value. Omit for uncontrolled. |
| `onChange` | `func` | — | Called with the selected option's `value` on selection. |
| `placeholder` | `string` | `"Type to search…"` | Input placeholder text. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic uncontrolled

```jsx
const countries = [
  { value: 'in', label: 'India' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
];

<Combobox options={countries} placeholder="Search country…" />
```

### Controlled

```jsx
const [country, setCountry] = useState('in');

<Combobox
  options={countries}
  value={country}
  onChange={setCountry}
  placeholder="Search country…"
/>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: string \| number) => void` | Fired with the chosen option's `value`. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-combobox` | Root wrapper div |
| `.nxp-combobox__input` | Text input element |
| `.nxp-combobox__list` | Dropdown options list |
| `.nxp-combobox__item` | Individual option |
| `.nxp-combobox__item.is-focused` | Keyboard-focused or hovered option |

---

## Notes

- Keyboard shortcuts: `ArrowDown/Up` navigate, `Home/End` jump to first/last, `Enter` selects, `Escape` closes.
- The input has `role="combobox"`, `aria-autocomplete="list"`, and `aria-expanded` for full ARIA compliance.
- Clicking outside the component closes the dropdown.
- The query field is kept in sync with the controlled `value`'s label on external updates.
