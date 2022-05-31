
import React, { Children } from 'react'
import { useInjectSaga } from 'redux-injectors'
import rootSaga, { requestToken } from 'sagas'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  useInjectSaga({ key: 'root', saga: rootSaga })

  return (
    <>
      {Children.only(children)}
    </>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
