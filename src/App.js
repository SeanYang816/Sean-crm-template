import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToRedux } from 'reducers/test'
import { useInjectSaga } from 'redux-injectors'
import rootSaga, { requestToken } from 'sagas'
import { useTranslation } from "react-i18next"
import "i18n"
import styles from 'App.module.scss'
import Routes from 'Routes'
import { instance, GET_USERTOKEN, TEST_USERTOKEN } from 'services/api'
import PropTypes from 'prop-types'
import test from 'services/createAxiosClient'

const App = props => {
  useInjectSaga({ key: 'root', saga: rootSaga })
  const dispatch = useDispatch()
  const connect = useSelector(state => state.test.connect)
  const [connected, setConnected] = useState(connect)
  const { i18n, t } = useTranslation()

  useEffect(() => {
    dispatch(connectToRedux())
    test().get('https://jsonplaceholder.typicode.com/comments/1')
    setConnected(connect)
    dispatch(requestToken())

  }, [dispatch, connect])

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
