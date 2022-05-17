import { put, takeLeading } from 'redux-saga/effects'
import { requestConnection, connectToRedux, connectToSaga } from 'reducers/test'

function* test() {
  try {
    yield put(connectToRedux())
    yield put(connectToSaga())
  } catch (error) {
    yield console.error(error)
  }
}

function* watcher() {
  yield takeLeading(requestConnection.type, test)
}

export default watcher