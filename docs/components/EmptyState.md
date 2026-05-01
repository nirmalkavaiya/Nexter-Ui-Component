# EmptyState

Empty screen placeholder with icon, title, description, and optional CTA.

## Import

```jsx
import { EmptyState } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | — | Icon or illustration |
| `title` | `string` | — | Primary heading |
| `description` | `string` | — | Supporting text |
| `action` | `ReactNode` | — | CTA button or link slot |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<EmptyState
  title="No results found"
  description="Try adjusting your search or filters."
/>
```

### With icon and action

```jsx
import { EmptyState, Button } from 'nexter-ui-component'

<EmptyState
  icon={<span style={{ fontSize: 48 }}>📭</span>}
  title="No posts yet"
  description="Create your first post to get started."
  action={<Button variant="primary">Create post</Button>}
/>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-empty-state` | Root wrapper |
| `.nxp-empty-state__icon` | Icon container |
| `.nxp-empty-state__title` | Heading text |
| `.nxp-empty-state__desc` | Description text |
| `.nxp-empty-state__action` | Action slot |
