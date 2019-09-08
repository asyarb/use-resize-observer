# use-resize-observer <!-- omit in toc -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Provide a `ref` from `useRef`](#provide-a-ref-from-useref)
    - [Provide a DOM element](#provide-a-dom-element)
  - [API](#api)
- [License](#license)

[![NPM](https://img.shields.io/npm/v/@asyarb/use-resize-observer.svg?&color=green)](https://www.npmjs.com/package/@asyarb/use-resize-observer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@asyarb/use-resize-observer.svg?logoColor=brightgreen)

React implementation of the
[Resize Observer Interface](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
to tell you when an element resizes.

**Demo**: [Code Sandbox](https://codesandbox.io/s/74n0p5xr0j)

# Features

- **Hooks** - Just pass a ref!
- **Alternative API** - Pass an `Element` and an optional function to handle
  `ResizeObserver` callbacks.
- **Typed** - Written with TypeScript!

> ⚠️ This package includes
> [`resize-observer-polyfill`](https://www.npmjs.com/package/resize-observer-polyfill)
> for full browser support. This package ponyfills `ResizeObserver` at runtime
> based on the browser.

# Installation

Run the following:

```bash
# Yarn
yarn add @asyarb/use-resize-observer

# NPM
npm i @asyarb/use-resize-observer --save
```

# Usage

### Provide a `ref` from `useRef`

To observe the resizing of a component, pass a `ref` for a component to
`useResizeObserver`:

```jsx
const Example = () => {
  const ref = useRef()
  const [height, setHeight] = useState(0)

  // Get the content rect directly from the hook:
  const sizes = useResizeObserver({ ref })

  // Perform any side effect with those sizes!
  useEffect(() => void setHeight(sizes.height), [sizes])

  return <div ref={ref}>Some content...</div>
}
```

`sizes` will be updated whenever the observed element is resized.

Alternatively, you can pass a function as the second parameter to perform any
side effect on resize. This function receives the `ResizeObserver` entry
(`ResizeObserverEntry`) object as an argument.

```jsx
const Example = () => {
  const ref = useRef
  const [height, setHeight] = useState(0)

  // Provide an optional callback to perform side effects instead:
  useResizeObserver({
    ref,
    callback: entry => setHeight(entry.contentRect.height),
  })

  return <div ref={ref}>Some content...</div>
}
```

### Provide a DOM element

`useResizeObserver` can alternatively take an `HTMLElement` such as the return
value from `document.querySelector()`.

```jsx
const element = document.querySelector('.someClass')

const Example = () => {
  const [height, setHeight] = useState(0)

  // Pass an HTMLElement directly:
  const sizes = useResizeObserver({ element })

  // Perform any side effect with that element's sizes!
  useEffect(() => void setHeight(sizes.height), [sizes])

  return <div ref={ref}>Some content...</div>
}
```

Just like the previous example, you can also provide a callback function.

## API

| Argument   | Required | Description                                                                                                     |
| ---------- | :------: | --------------------------------------------------------------------------------------------------------------- |
| `ref`      |    NP    | React `ref` to observe.                                                                                         |
| `element`  |    No    | HTML `Element` to observe. If both `ref` and `element` are provided, `ref` is prioritized.                      |
| `callback` |    No    | Optional callback to fire on resize. Receives the `ResizeObserverEntry` for the observed element as an argument |

# License

MIT.
