/**
 * const query = useDebounced(state, duration)
 */

import { useState, useEffect, useRef } from "react"

const useDebounced = (oldState, duration) => {
  const [state, dispatch] = useState(oldState)

  const invokeRef = useRef(null)

  useEffect(() => {
    invokeRef.current = setTimeout(() => {
      dispatch(oldState)
    }, duration)

    return () => {
      clearTimeout(invokeRef.current)
    }
  }, [oldState, duration])

  return state
}

export default useDebounced
