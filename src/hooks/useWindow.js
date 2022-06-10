/**
 * Switch between 2 Components between larger and smaller viewport
 **/

import React from 'react'
const useWindow = (size = 0) => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth])

  return [width, width > size]
}

export default useWindow
