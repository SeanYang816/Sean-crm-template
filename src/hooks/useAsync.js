/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useMemo } from 'react'

const useAsync = (
  asyncFunc,
  initialParams = {},
  immediate = true
) => {
  const [loading, setLoading] = useState(immediate)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const mountedRef = useRef(true)

  const execute = useMemo(() => params => {
    setLoading(true)
    return asyncFunc({
      ...initialParams,
      ...params
    }).then(res => {
      if (!mountedRef.current) return null
      setData(res)
      setError(null)
      setLoading(false)
      return res
    }).catch(err => {
      if (!mountedRef.current) return null
      setError(err)
      setLoading(false)
      throw err
    })
  }, [asyncFunc])

  useEffect(() => {
    if (immediate) {
      execute(initialParams)
    }
  }, [immediate, execute])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [mountedRef])

  return {
    execute,
    loading,
    data,
    error
  }
}

export default useAsync