import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from "react-i18next"
import { requestConnection } from 'reducers/test'
import { requestToken } from 'sagas'
import PropTypes from 'prop-types'

const Test = props => {
      const { t } = useTranslation()
  const dispatch = useDispatch()
  const connectedArr = useSelector(state => state.test.connect)

  useEffect(() => {
    dispatch(requestConnection())
    dispatch(requestToken())
  }, [dispatch])

  return (
    <div style={{ display: 'flex', backgroundColor: 'skyblue' }}>
    {connectedArr && connectedArr.map((item, index) => {
      return <div key={index}>［{item} {t('connected')}］</div>
    })}
  </div>
  )
}

Test.propTypes = {}

export default Test