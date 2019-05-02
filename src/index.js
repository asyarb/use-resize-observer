import { useEffect, useState } from 'react'

export const useResizeObserver = (ref, fn) => {
  const [sizes, setSizes] = useState({})

  const handleResize = entries => {
    const [entry] = entries.map(entry => entry)
    if (fn) fn(entry)

    setSizes(entry.contentRect)
  }

  const [resizeObs] = useState(() => new ResizeObserver(handleResize))

  useEffect(() => {
    const domNodeRef = ref.current
    if (domNodeRef) resizeObs.observe(domNodeRef)

    return () => resizeObs.disconnect()
  }, [ref, resizeObs])

  return sizes
}
