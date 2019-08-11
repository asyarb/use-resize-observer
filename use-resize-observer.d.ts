/**
 * React `ref` object.
 */
declare interface ReactRefObject {
  /**
   * current - Must be an Element.
   */
  current: Element | undefined
}

/**
 * Watch for the resizing of a React component or Element.
 *
 * @param ref - React ref or Element.
 * @param callback - Callback to fire when the element is resized. Receives the Resize Observer entry for the provided ref as an argument.
 *
 * @throws if ref is not a valid React ref or Element.
 *
 * @returns The `contentRect` of the ResizeObserverEntry of the observerd element
 */
export function useResizeObserver(
  ref: ReactRefObject | Element,
  callback: (entry: ResizeObserverEntry) => void
): DOMRect
