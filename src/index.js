import { useEffect, useState, useCallback } from 'react'

export const useResizeObserver = (ref, fn) => {
  const [sizes, setSizes] = useState({})

  const handleResize = useCallback(
    entries => {
      const [entry] = entries.map(entry => entry)
      if (fn) {
        fn(entry)
        return
      }

      setSizes(entry.contentRect)
    },
    [fn]
  )

  const [resizeObs] = useState(() => new ResizeObserver(handleResize))

  useEffect(() => {
    const domNodeRef = ref.current
    if (domNodeRef) resizeObs.observe(domNodeRef)

    return () => resizeObs.disconnect()
  }, [ref, resizeObs])

  return sizes
}
