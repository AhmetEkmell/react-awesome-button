# react-awesome-button

A simple, customizable React button component.

## Installation

```bash
npm install @ahmetekmell/react-awesome-button
```

## Usage

```jsx
import { Button } from '@ahmetekmell/react-awesome-button'

function App() {
  return (
    <Button
      label="Click me"
      variant="primary"
      size="medium"
      onClick={() => console.log('clicked!')}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | — | Button text |
| variant | `primary` \| `secondary` \| `danger` | `primary` | Visual style |
| size | `small` \| `medium` \| `large` | `medium` | Button size |
| onClick | `() => void` | — | Click handler |
| disabled | `boolean` | `false` | Disables the button |