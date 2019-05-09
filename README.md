# use-resize-observer

[![NPM](https://img.shields.io/npm/v/@asyarb/use-resize-observer.svg?&color=green)](https://www.npmjs.com/package/@asyarb/use-resize-observer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@asyarb/use-resize-observer.svg?logoColor=brightgreen)

React implementation of the
[Resize Observer Interface](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
to tell you when an element resizes.

**Demo**: [Code Sandbox](https://codesandbox.io/s/74n0p5xr0j)

# Features

- 🎣 **Hooks API** - With `useResizeObserver` it's easier than ever to monitor
  the size changes of your elements. Just pass a ref!
- ⚙️ **Alternative Native-esque API** - Intuitive to use. Pass a DOM element and
  an optional function to handle `ResizeObserver` callbacks.
- 💨 **Optimized Performance** - Reuses `ResizeObserver` instances whenever
  possible.
- 💥 **Tiny Footprint** - 350 bytes!

> ⚠️ It's recommended to add
> [`resize-observer-polyfill`](https://www.npmjs.com/package/resize-observer-polyfill)
> for full browser support. This package dynamically ponyfills `ResizeObserver`
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

To observe the resizing of a component, pass a `ref` of that component to
`useResizeObserver`:

```jsx
const Example = () => {
  const ref = useRef()
  const [height, setHeight] = useState(0)

  // Get the content rect directly from the hook:
  const sizes = useResizeObserver(ref)

  useEffect(() => {
    // Perform any side effect with those sizes!
    setHeight(sizes.height)
  }, [sizes])

  return <div ref={ref}>Some content...</div>
}
```

`sizes` will be updated whenever the observed element is resized.

Alternatively, you can pass a function as the second parameter to perform any
side effect on resize. This function receives the `ResizeObserver` entry
(`DOMRectReadOnly`) object as an argument.

```jsx
const Example = () => {
  const ref = useRef
  const [height, setHeight] = useState(0)

  // Pass an optional callback to perform side effects instead:
  useResizeObserver(ref, entry => {
    setHeight(entry.contentRect.height)
  })

  return <div ref={ref}>Some content...</div>
}
```

### Provide a DOM element

`useResizeObserver` can alternatively take an `HTMLElement` such as the return
value from `document.querySelector()`.

```jsx
const Example = () => {
  const [height, setHeight] = useState(0)
  const domNode = document.querySelector('.someClass')

  // Pass an HTMLElement directly:
  const sizes = useResizeObserver(domNode)

  useEffect(() => {
    // Perform any side effect with that element's sizes!
    setHeight(sizes.height)
  }, [sizes])

  return <div ref={ref}>Some content...</div>
}
```

Just like with the hooks-based API, you can alternatively provide a function as
a second parameter.

# License

MIT.
