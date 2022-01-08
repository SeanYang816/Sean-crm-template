import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToConfigureStore } from './reducers/test'
import PropTypes from 'prop-types'

const App = props => {
  const dispatch = useDispatch()
  const test = useSelector(state => state.test)  

  useEffect(() => {
    dispatch(connectToConfigureStore())
  }, [dispatch])
  return (
    <div>
      {test.connect}
    </div>
  )
}

App.propTypes = {

}

export default App
