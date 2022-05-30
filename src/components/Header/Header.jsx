import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { requestToken } from 'sagas'
import { requestConnection } from 'reducers/test'

import styles from './Header.module.scss'

const Header = props => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const connectedArr = useSelector(state => state.test.connect)

    useEffect(() => {
    dispatch(requestConnection())
    // dispatch(requestToken())
  }, [dispatch])

  return (
    <>
      <div className={styles.header}>
        {connectedArr &&
          connectedArr.map((item, index) => {
            return (
              <div key={index}>
                ［{item} {t('connected')}］
              </div>
            )
          })}
      </div>
    </>
  )
}

Header.propTypes = {}

export default Header
