import { take, call, fork, put, takeLatest, takeLeading, actionChannel, race } from 'redux-saga/effects'
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
  console.log(requestConnection.type)
  const requestChan = yield actionChannel(requestConnection.type)
  while (true) {
    // 2- take from the channel
    const {payload} = yield take(requestChan)
    console.log(payload)
    // 3- Note that we're using a blocking call
    yield call(test)
  }
}

export default watcher