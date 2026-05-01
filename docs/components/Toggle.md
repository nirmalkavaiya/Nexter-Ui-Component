# Toggle

> On/off switch (toggle) with label support, optional variant styling, and full keyboard accessibility.

---

## Import

```jsx
import { Toggle } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `bool` | — | Controlled on/off state. Omit for uncontrolled (starts `false`). |
| `onChange` | `func` | — | Called with the new boolean value on toggle. |
| `disabled` | `bool` | `false` | Prevents interaction. |
| `variant` | `string` | — | Optional variant modifier (e.g. `"sm"`) for size overrides. |
| `label` | `string \| node` | — | Label text rendered beside the toggle. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Uncontrolled

```jsx
<Toggle label="Enable dark mode" />
```

### Controlled

```jsx
const [enabled, setEnabled] = useState(false);

<Toggle
  checked={enabled}
  onChange={setEnabled}
  label="Auto-submit to IndexNow"
/>
```

### Disabled states

```jsx
<Toggle disabled label="This feature is locked" />
<Toggle checked disabled label="Always on" />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(nextChecked: boolean) => void` | Fired with the new boolean on every toggle. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-toggle` | Root div element |
| `.nxp-toggle.is-checked` | Toggle is on |
| `.nxp-toggle.is-disabled` | `disabled={true}` |
| `.nxp-toggle--{variant}` | When `variant` prop is provided |
| `.nxp-toggle__track` | Track background span |
| `.nxp-toggle__thumb` | Sliding thumb span |

---

## Notes

- Root has `role="switch"`, `aria-checked`, `aria-disabled`, and `tabIndex` for full keyboard support.
- Keyboard: `Space` toggles the switch when focused.
- Disabled toggle has `tabIndex={-1}` to remove it from the tab order.
