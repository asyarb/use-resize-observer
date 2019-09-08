import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import { useResizeObserver } from '../.'

export const Example = () => {
  const ref = useRef<HTMLDivElement>(null)
  const rect = useResizeObserver({ ref })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'system-ui',
      }}
    >
      <div
        ref={ref}
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'blue',
          resize: 'both',
          overflow: 'auto',
          padding: '3rem',
        }}
      />
      {rect && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            width: `${rect.width / 2}px`,
            height: `${rect.height / 2}px`,
            backgroundColor: 'green',
            padding: '3rem',
          }}
        >
          I am always half the size!
        </div>
      )}
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
