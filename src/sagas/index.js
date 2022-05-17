import { put, takeLatest, takeLeading } from 'redux-saga/effects'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { instance } from 'services/api'
import { requestConnection, connectToRedux, connectToSaga } from 'reducers/test'

export const requestToken = createAction('test/requestToken')

function* test() {
  try {
    yield put(connectToRedux())
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
  yield takeLeading(requestConnection.type, test)
  yield takeLeading(requestToken.type, getToken)
}

export default watcher