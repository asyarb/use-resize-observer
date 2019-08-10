import { useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const IS_BROWSER = typeof window !== 'undefined'

export const useResizeObserver = (ref, fn) => {
  const [sizes, setSizes] = useState({})

  const handleResize = entries => {
    const [entry] = entries

    if (fn) {
      fn(entry)
      return
    }

    setSizes(entry.contentRect)
  }

  const [resizeObs] = useState(() =>
    IS_BROWSER ? new ResizeObserver(handleResize) : null
  )

  useEffect(() => {
    if (ref) {
      const domNode = ref.hasOwnProperty('current') ? ref.current : ref
      resizeObs.observe(domNode)
    }

    return () => resizeObs.disconnect()
  }, [ref, resizeObs])

  return sizes
}
