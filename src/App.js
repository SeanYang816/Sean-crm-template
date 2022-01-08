import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectRedux } from './reducers/test'
import { useInjectSaga } from 'redux-injectors'
import rootSaga from 'saga'
import PropTypes from 'prop-types'

const App = props => {
  useInjectSaga({ key: 'root', saga: rootSaga })
  const dispatch = useDispatch()
  const connect = useSelector(state => state.test.connect)  
  const [connected, setConnected] = useState(connect)
  
  useEffect(() => {
    dispatch(connectRedux())
  }, [dispatch])
  useEffect(() => {
    setConnected(connect)
  }, [connect])
  return (
    <div>
      {connected && connected.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

App.propTypes = {

}

export default App
