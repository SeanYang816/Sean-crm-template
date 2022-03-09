import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToRedux } from 'reducers/test'
import { useInjectSaga } from 'redux-injectors'
import rootSaga from 'sagas'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next"
import "i18n"
import styles from 'App.module.scss'
import Routes from 'Routes'

const App = props => {
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
      <div className={styles.test}>
        <button onClick={() => console.log(i18n.changeLanguage('zh-TW'))}>中文</button>
        <button onClick={() => console.log(i18n.changeLanguage('zh-CN'))}>简体</button>
        <button onClick={() => console.log(i18n.changeLanguage('en'))}>English</button>
        {connected && connected.map((item, index) => {
          return <div key={index}>［{item} {t('connected')}］</div>
        })}
      </div>
      <Routes />
    </>
  )
}

App.propTypes = {

}

export default App
