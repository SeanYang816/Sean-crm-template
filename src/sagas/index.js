import { put, takeLatest } from 'redux-saga/effects'
import { connectSaga } from 'reducers/test'

function* test(){
    try{
    yield put(connectSaga())
    } catch (error) {
        yield console.log(error)
    }
}

function* watcher(){
 yield takeLatest("test/connectRedux", test)
}

export default watcher