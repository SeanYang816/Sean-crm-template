import { combineReducers } from "redux"
import test from 'reducers/test'
import pokedex from "./pokedex"
import router from "./router"

const createReducer = (injectedReducers) => {
  return combineReducers({
    ...injectedReducers,
    test,
    pokedex,
    router,
  })
}

export default createReducer