# Checkbox

> Binary selection control — supports both controlled and uncontrolled usage with full keyboard accessibility.

---

## Import

```jsx
import { Checkbox } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `bool` | — | Controlled checked state. Omit for uncontrolled. |
| `onChange` | `func` | — | Called with the next boolean value when toggled. |
| `disabled` | `bool` | `false` | Prevents interaction and applies disabled styling. |
| `label` | `string \| node` | — | Text label rendered beside the checkbox. |
| `className` | `string` | `''` | Additional CSS class(es) on the root `<label>`. |

---

## Usage

### Uncontrolled

```jsx
<Checkbox label="Accept terms and conditions" />
```

### Controlled

```jsx
const [agreed, setAgreed] = useState(false);

<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="Subscribe to the newsletter"
/>
```

### Disabled states

```jsx
<Checkbox disabled label="This option is unavailable" />
<Checkbox checked disabled label="Pre-selected, read-only" />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(nextChecked: boolean) => void` | Fired with the new boolean state on every toggle. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-checkbox` | Root `<label>` element |
| `.nxp-checkbox.is-checked` | Checkbox is checked |
| `.nxp-checkbox.is-disabled` | `disabled={true}` |
| `.nxp-checkbox__box` | Visual checkbox square |
| `.nxp-checkbox__check` | SVG checkmark (rendered when checked) |

---

## Notes

- The native `<input type="checkbox">` is visually hidden but present for form semantics. The visible box uses `role="checkbox"` and `aria-checked`.
- Keyboard: `Space` key toggles the checkbox when the visual box is focused.
- Works in both controlled and uncontrolled modes — if `checked` prop is provided the component is fully controlled.
