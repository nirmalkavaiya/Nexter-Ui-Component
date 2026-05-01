# Toggle

Toggle switch — controlled and uncontrolled.

## Import

```jsx
import { Toggle } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial state (uncontrolled) |
| `onChange` | `(checked: boolean) => void` | — | Change handler |
| `disabled` | `boolean` | `false` | Disables interaction |
| `variant` | `string` | — | Optional visual variant |
| `label` | `string` | — | Visible label text |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Uncontrolled

```jsx
<Toggle label="Enable dark mode" onChange={console.log} />
```

### Controlled

```jsx
const [enabled, setEnabled] = useState(false)

<Toggle
  checked={enabled}
  onChange={setEnabled}
  label="Enable notifications"
/>
```

### Disabled

```jsx
<Toggle checked disabled label="Feature locked (Pro only)" />
```

### Without label

```jsx
<Toggle checked={isOn} onChange={setIsOn} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-toggle` | Root wrapper (`role="switch"`) |
| `.nxp-toggle__track` | Sliding track |
| `.nxp-toggle__thumb` | Moving thumb circle |
| `.nxp-toggle__label` | Label text |
| `.nxp-toggle.is-checked` | Checked/on state |
| `.nxp-toggle.is-disabled` | Disabled state |

## Notes

Uses `.is-checked` class on the root wrapper (not `:checked` pseudo-selector) so React state fully controls appearance. Keyboard-accessible: Space bar toggles when focused.
