import { put, select, takeLatest, takeLeading } from 'redux-saga/effects'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { instance } from 'services/api'
import { requestConnection, connectToRedux, connectToSaga } from 'reducers/test'
import { fetchChapters } from 'reducers/bible'
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
  yield takeLatest("bible/fetchBooksStatus/fulfilled", getChapters)

}

function* getChapters() {
    try {
        const state = yield select()
        for (let i = 0; i < state.bible.books.length; i++) {
            yield put(fetchChapters(({ bibleId: state.bible.bibleId, bookId: state.bible.books[i].id })))
        }
    } catch (error) { console.error(error) }
}

export default watcher