import { combineReducers } from "redux"
import test from 'reducers/test'
import bible from 'reducers/bible'

const createReducer = (injectedReducers) => {
  return combineReducers({
    ...injectedReducers,
    test,
    bible
  })
}

export default createReducer