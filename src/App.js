import React from 'react'
import { useInjectSaga } from 'redux-injectors'
import rootSaga from 'sagas'
import Routes from 'Routes'
import WdyrTest from 'components/WdyrTest/WdyrTest'
import Test from 'components/Test/Test'

const App = props => {
  useInjectSaga({ key: 'root', saga: rootSaga })

  return (
    <>
    <Test />
    <WdyrTest />
    <Routes />
    </>
  )
}

export default App
