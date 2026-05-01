# StatCard

Dashboard metric card for displaying a key number, label, and optional trend.

## Import

```jsx
import { StatCard } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric name |
| `value` | `string \| number` | — | Primary metric value |
| `trend` | `string` | — | Trend text (e.g. `'+12%'`) |
| `trendUp` | `boolean` | `true` | Green (up) vs red (down) trend color |
| `icon` | `ReactNode` | — | Optional icon slot |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<StatCard label="Total visits" value="128,420" />
```

### With trend

```jsx
<StatCard
  label="Organic traffic"
  value="84,219"
  trend="+18% vs last month"
  trendUp={true}
/>
```

### Negative trend

```jsx
<StatCard
  label="Bounce rate"
  value="42%"
  trend="-3% vs last month"
  trendUp={false}
/>
```

### Dashboard grid

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
  <StatCard label="Pages indexed" value="1,240" trend="+5%" trendUp />
  <StatCard label="404 errors" value="3" trend="-80%" trendUp />
  <StatCard label="Redirects" value="28" />
  <StatCard label="Schema types" value="6" />
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-stat-card` | Root card |
| `.nxp-stat-card__label` | Metric name |
| `.nxp-stat-card__value` | Primary number |
| `.nxp-stat-card__trend` | Trend text |
| `.nxp-stat-card__trend--up` | Green trend |
| `.nxp-stat-card__trend--down` | Red trend |
| `.nxp-stat-card__icon` | Icon slot |
