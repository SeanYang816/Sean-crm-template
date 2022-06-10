import { useEffect } from 'react'

const MOUSE_DOWN_EVENT = 'mousedown'
const TOUCH_START_EVENT = 'touchstart'
const useClickAway = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }
    document.addEventListener(MOUSE_DOWN_EVENT, listener)
    document.addEventListener(TOUCH_START_EVENT, listener)
    return () => {
      document.removeEventListener(MOUSE_DOWN_EVENT, listener)
      document.addEventListener(TOUCH_START_EVENT, listener)
    }
  }, [ref, callback])
}

export default useClickAway
