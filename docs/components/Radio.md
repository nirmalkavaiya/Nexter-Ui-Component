# Radio

> Single radio button — compose multiple instances with a shared `name` to create a radio group.

---

## Import

```jsx
import { Radio } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `bool` | `false` | Whether this radio is selected. |
| `onChange` | `func` | — | Called with `value` when the radio is selected. |
| `disabled` | `bool` | `false` | Prevents interaction. |
| `name` | `string` | — | Group name — shared across all radios in the same group. |
| `value` | `string \| number` | — | Value passed to `onChange` on selection. |
| `label` | `string \| node` | — | Label text rendered beside the radio. |
| `className` | `string` | `''` | Additional CSS class(es) on the root `<label>`. |

---

## Usage

### Radio group (controlled)

```jsx
const [plan, setPlan] = useState('monthly');

<>
  <Radio name="billing" value="monthly" checked={plan === 'monthly'} onChange={setPlan} label="Monthly" />
  <Radio name="billing" value="annual"  checked={plan === 'annual'}  onChange={setPlan} label="Annual (save 20%)" />
  <Radio name="billing" value="lifetime" checked={plan === 'lifetime'} onChange={setPlan} label="Lifetime" />
</>
```

### Disabled option

```jsx
<Radio name="billing" value="enterprise" checked={false} disabled label="Enterprise (coming soon)" />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: string \| number) => void` | Called with the radio's `value` when selected. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-radio` | Root `<label>` element |
| `.nxp-radio.is-checked` | `checked={true}` |
| `.nxp-radio.is-disabled` | `disabled={true}` |
| `.nxp-radio__dot` | Custom visual radio circle |
| `.nxp-radio__inner` | Inner fill dot (shown when checked) |

---

## Notes

- The native `<input type="radio">` is visually hidden. The visible dot uses `role="radio"` and `aria-checked`.
- Keyboard: `Space` selects the focused radio.
- Group radios using the same `name` prop so native browser behaviour (deselect siblings) works correctly.
