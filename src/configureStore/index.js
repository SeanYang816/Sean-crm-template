import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import test from 'reducers/test'
import rootSaga from 'saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const runSaga = sagaMiddleware.run
const middlewares = []

export default configureStore({
  // Reducer
  reducer: {
    test,
  },

  // Middleware
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware ],

  // Enhancers
  enhancers: [],
})
runSaga(rootSaga)