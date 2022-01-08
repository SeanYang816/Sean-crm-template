import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import test from 'reducers/test'
import rootSaga from 'saga'
import { logger } from 'redux-logger'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const runSaga = sagaMiddleware.run
const middlewares = [ sagaMiddleware,logger]

export default configureStore({
  // Reducer
  reducer: {
    test,
  },

  // Middleware
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares ],

  // Enhancers
  enhancers: [],
})
runSaga(rootSaga)