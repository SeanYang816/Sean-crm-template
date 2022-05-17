import React, { useEffect } from 'react'
import { useInjectSaga } from 'redux-injectors'
import { useDispatch, useSelector } from 'react-redux'
import { requestConnection, connectToRedux, connectToSaga } from 'reducers/test'
import { useTranslation } from "react-i18next"
import rootSaga from 'sagas'
import styles from 'App.module.scss'
import Routes from 'Routes'

const App = props => {
  useInjectSaga({ key: 'root', saga: rootSaga })
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const connectedArr = useSelector(state => state.test.connect)

  useEffect(() => {
    dispatch(requestConnection())
  }, [dispatch])

  return (
    <>
      <div className={styles.test}>
        {connectedArr && connectedArr.map((item, index) => {
          return <div key={index}>［{item} {t('connected')}］</div>
        })}
      </div>
      <Routes />
    </>
  )
}

export default App
