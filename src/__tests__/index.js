import { renderHook } from 'react-hooks-testing-library'
import { useResizeObserver } from '../index'

describe('useResizeObserver', () => {
  test('returns an empty object if provided a falsey ref', () => {
    const domNode = undefined
    const { result } = renderHook(() => useResizeObserver(domNode))

    expect(result.current).toMatchObject({})
  })
})
