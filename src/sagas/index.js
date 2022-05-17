import { put, takeLatest, takeLeading } from 'redux-saga/effects'
import { connectToSaga } from 'reducers/test'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { instance } from 'services/api'

export const requestToken = createAction('test/requestToken')
function* test() {
  try {
    yield put(connectToSaga())
  } catch (error) {
    yield console.error(error)
  }
}

function* getToken() {
  // eslint-disable-next-line no-undef
  const res = yield axios.get(`${process.env.REACT_APP_DEVELOPMENT}/token`)
  const usertoken = res.data.usertoken

  instance.defaults.headers.common['userToken'] = usertoken
}

function* watcher() {
  yield takeLatest("test/connectToRedux", test)
  yield takeLeading("test/requestToken", getToken)
}

export default watcher