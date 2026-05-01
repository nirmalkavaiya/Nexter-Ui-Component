# Sheet

Side-panel-style card layout for grouping related settings or content.

## Import

```jsx
import { Sheet } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Sheet heading |
| `description` | `string` | — | Optional subtitle |
| `children` | `ReactNode` | — | Sheet body content |
| `footer` | `ReactNode` | — | Optional footer slot |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Settings panel

```jsx
<Sheet title="General Settings" description="Configure your site basics.">
  <Field label="Site name">
    <Input value={name} onChange={setName} />
  </Field>
  <Field label="Tagline">
    <Input value={tagline} onChange={setTagline} />
  </Field>
</Sheet>
```

### With footer

```jsx
<Sheet
  title="Danger Zone"
  footer={<Button variant="destructive">Delete all data</Button>}
>
  <p>This action is irreversible.</p>
</Sheet>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-sheet` | Root card |
| `.nxp-sheet__header` | Title + description area |
| `.nxp-sheet__title` | Heading text |
| `.nxp-sheet__desc` | Description text |
| `.nxp-sheet__body` | Content area |
| `.nxp-sheet__footer` | Footer area |
