import { put, takeLatest } from 'redux-saga/effects'
import { connectToSaga } from 'reducers/test'

function* test(){
    try{
    yield put(connectToSaga())
    } catch (error) {
        yield console.log(error)
    }
}

function* watcher(){
 yield takeLatest("test/connectToRedux", test)
}

export default watcher