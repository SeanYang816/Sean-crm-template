import { combineReducers } from "redux"
import test from 'reducers/test'

const createReducer = (injectedReducers) => {
  return combineReducers({
    ...injectedReducers,
    test,
  })
}

export default createReducer