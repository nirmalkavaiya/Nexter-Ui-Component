# Sheet

> Structured card panel with a header (title + byline), body, and footer slot.

---

## Import

```jsx
import { Sheet } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string \| node` | — | Panel heading. |
| `byline` | `string \| node` | — | Subtitle rendered below the title. |
| `children` | `node` | — | Main body content. |
| `footer` | `node` | — | Footer slot — typically action buttons. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Sheet title="SEO Settings" byline="Controls how your pages appear in search results.">
  <Field label="Meta title">
    <Input placeholder="Page title" />
  </Field>
  <Field label="Meta description">
    <Textarea rows={3} placeholder="Page description" />
  </Field>
</Sheet>
```

### With footer

```jsx
<Sheet
  title="Redirect Rule"
  footer={
    <>
      <Button variant="primary">Save Rule</Button>
      <Button variant="secondary">Cancel</Button>
    </>
  }
>
  <Field label="From URL"><Input placeholder="/old-path" /></Field>
  <Field label="To URL"><Input placeholder="/new-path" /></Field>
</Sheet>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-sheet` | Root wrapper div |
| `.nxp-sheet__head` | Header area (rendered only when title or byline present) |
| `.nxp-sheet__title` | Title div |
| `.nxp-sheet__byline` | Byline div |
| `.nxp-sheet__body` | Body content area |
| `.nxp-sheet__foot` | Footer area |

---

## Notes

- Header is only rendered when at least one of `title` or `byline` is provided.
- Sheet is a layout component — it does not include scroll behaviour, shadows, or z-index by default.
