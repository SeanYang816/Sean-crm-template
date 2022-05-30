import { combineReducers } from "redux"
import test from 'reducers/test'
import pokedex from "./pokedex"

const createReducer = (injectedReducers) => {
  return combineReducers({
    ...injectedReducers,
    test,
    pokedex,
  })
}

export default createReducer