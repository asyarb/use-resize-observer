import { useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = ref => {
  const [sizes, setSizes] = useState([])

  const handleResize = entries =>
    setSizes(entries.map(entry => entry.contentRect)[0])

  const [resizeObs] = useState(() => new ResizeObserver(handleResize))

  useEffect(() => {
    const domNodeRef = ref.current
    if (domNodeRef) resizeObs.observe(domNodeRef)

    return () => resizeObs.disconnect()
  }, [ref, resizeObs])

  return sizes
}
