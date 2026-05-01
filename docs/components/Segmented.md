# Segmented

> Button-group toggle for selecting one option from a small set — like tabs but compact.

---

## Import

```jsx
import { Segmented } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `array` | `[]` | Array of `{ value, label }` objects. |
| `value` | `string \| number` | — | Controlled selected value. Omit for uncontrolled. |
| `onChange` | `func` | — | Called with the selected `value` on change. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Uncontrolled

```jsx
const viewOptions = [
  { value: 'list',  label: 'List'  },
  { value: 'grid',  label: 'Grid'  },
  { value: 'table', label: 'Table' },
];

<Segmented options={viewOptions} onChange={(v) => setViewMode(v)} />
```

### Controlled

```jsx
const [view, setView] = useState('list');

<Segmented
  options={viewOptions}
  value={view}
  onChange={setView}
/>
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
| `.nxp-segmented` | Root wrapper div |
| `.nxp-segmented__option` | Each segment button |
| `.nxp-segmented__option.is-selected` | Currently active segment |

---

## Notes

- Uncontrolled mode initialises to `options[0].value` automatically.
- Root has `role="group"` with `aria-label="Segmented control"`.
- Each button uses `aria-pressed` to communicate selection state to screen readers.
