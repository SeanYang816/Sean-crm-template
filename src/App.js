import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToRedux } from 'reducers/test'
import { useInjectSaga } from 'redux-injectors'
import rootSaga from 'sagas'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next"
import "i18n"
import Routes from 'Routes'

const App = () => {
  useInjectSaga({ key: 'root', saga: rootSaga })
  const dispatch = useDispatch()
  const connect = useSelector(state => state.test.connect)
  const [connected, setConnected] = useState(connect)
  const { i18n, t } = useTranslation()

  useEffect(() => {
    dispatch(connectToRedux())
  }, [dispatch])

  useEffect(() => {
    setConnected(connect)
  }, [connect])

  return (
    <>
      <div style={{ display: 'flex', height: 'auto', backgroundColor: 'skyBlue' }}>
        <button onClick={() => i18n.changeLanguage('zh-TW')}>中文</button>
        <button onClick={() => i18n.changeLanguage('zh-CN')}>简体</button>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        {connected && connected.map((item, index) => {
          return <span key={index}>[{item} {t('connected')}]</span>
        })}
      </div>
      <Routes />
    </>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
