import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createInjectorsEnhancer } from "redux-injectors"
import { logger } from 'redux-logger'
import createReducer from 'reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const runSaga = sagaMiddleware.run
const middlewares = [sagaMiddleware, logger]

export default configureStore({
  // Reducer
  reducer: createReducer(),

  // Middleware
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],

  // Enhancers
  enhancers: [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ],
})