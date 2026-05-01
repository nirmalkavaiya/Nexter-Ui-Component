# Carousel

Snap-scroll carousel with previous/next navigation and dot indicators.

## Import

```jsx
import { Carousel } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ReactNode[]` | `[]` | Array of slide content nodes |
| `autoPlay` | `boolean` | `false` | Auto-advance slides |
| `interval` | `number` | `3000` | Auto-play interval in ms |
| `showDots` | `boolean` | `true` | Show dot indicators |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Carousel items={[
  <img src="slide1.jpg" alt="Slide 1" />,
  <img src="slide2.jpg" alt="Slide 2" />,
  <img src="slide3.jpg" alt="Slide 3" />,
]} />
```

### Auto-play

```jsx
<Carousel autoPlay interval={4000} items={slides} />
```

### Without dots

```jsx
<Carousel showDots={false} items={slides} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-carousel` | Root wrapper |
| `.nxp-carousel__track` | Scrollable slide track |
| `.nxp-carousel__slide` | Individual slide |
| `.nxp-carousel__btn` | Prev/next buttons |
| `.nxp-carousel__dots` | Dot indicator container |
| `.nxp-carousel__dot` | Single dot |
| `.nxp-carousel__dot.is-active` | Active dot |

## Notes

- Uses CSS scroll-snap for smooth native scrolling
- Prev/next buttons are hidden when at first/last slide respectively
