import { put, takeLatest } from 'redux-saga/effects'
import { connectToReduxSaga } from 'reducers/test'

function* test(){
    try{
    yield put(connectToReduxSaga())
    } catch (error) {
        yield console.log(error)
    }
}

function* watcher(){
 yield takeLatest("test/connectToConfigureStore", test)
}

export default watcher