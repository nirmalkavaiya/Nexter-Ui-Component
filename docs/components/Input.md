# Input

> Single-line text input with optional invalid state and full native attribute pass-through.

---

## Import

```jsx
import { Input } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | Native input type (`text`, `email`, `password`, `url`, `number`, etc.). |
| `placeholder` | `string` | — | Placeholder text. |
| `value` | `string \| number` | — | Controlled value. |
| `onChange` | `func` | — | Change handler receiving the native event. |
| `disabled` | `bool` | `false` | Disables the input. |
| `invalid` | `bool` | `false` | Applies error styling and sets `aria-invalid="true"`. |
| `className` | `string` | `''` | Additional CSS class(es). |
| `...rest` | — | — | Any other native `<input>` attributes. |

---

## Usage

### Basic

```jsx
<Input placeholder="Enter your website URL" type="url" />
```

### Controlled

```jsx
const [email, setEmail] = useState('');

<Input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="you@example.com"
/>
```

### Invalid / error state

```jsx
<Input
  type="email"
  value="not-valid"
  invalid
  placeholder="you@example.com"
/>
```

### Disabled

```jsx
<Input value="read-only-value" disabled />
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
| `.nxp-input` | Base class (always present) |
| `.nxp-input--invalid` | `invalid={true}` |

---

## Notes

- Pair with `Field` for label, hint, and error message layout.
- `aria-invalid="true"` is set automatically when `invalid` is `true`.
- All native `<input>` attributes (`maxLength`, `pattern`, `autoComplete`, etc.) can be passed via spread.
