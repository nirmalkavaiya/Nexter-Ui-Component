# Textarea

> Multi-line text input with configurable rows and full native attribute pass-through.

---

## Import

```jsx
import { Textarea } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value. |
| `onChange` | `func` | — | Native change event handler. |
| `placeholder` | `string` | — | Placeholder text. |
| `rows` | `number` | `4` | Number of visible text rows. |
| `disabled` | `bool` | `false` | Disables the textarea. |
| `className` | `string` | `''` | Additional CSS class(es). |
| `...rest` | — | — | Any other native `<textarea>` attributes. |

---

## Usage

### Basic

```jsx
<Textarea placeholder="Write your meta description here…" />
```

### Controlled

```jsx
const [desc, setDesc] = useState('');

<Textarea
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
  placeholder="Describe this page in 120–160 characters."
  rows={3}
/>
```

### Inside a Field

```jsx
<Field
  label="Meta description"
  hint={`${desc.length} / 160 characters`}
  error={desc.length > 160 ? 'Too long — keep it under 160 characters.' : undefined}
>
  <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} />
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
| `.nxp-textarea` | Root `<textarea>` element |

---

## Notes

- Pair with `Field` for label, hint, and error layout.
- All native `<textarea>` attributes (`maxLength`, `autoComplete`, `spellCheck`, etc.) can be passed via spread.
