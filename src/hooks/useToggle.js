/**
 * const [bool, onToggle] = useToggle(defaultBool)
 */

import React from 'react'
const useToggle = (initialStatus = false) => {
  const [status, setStatus] = React.useState(initialStatus)

  const toggle = newStatus => () => {
    if (newStatus === undefined) {
      setStatus(status => !status)
    } else {
      setStatus(newStatus)
    }
  }
  return [status, toggle]
}

export default useToggle
