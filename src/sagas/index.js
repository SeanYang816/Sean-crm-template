import { put, select, takeLatest } from 'redux-saga/effects'
import { connectToSaga } from 'reducers/test'
import { fetchChapters } from 'reducers/bible'

function* test() {
    try {
        yield put(connectToSaga())
    } catch (error) { yield console.error(error) }
}

function* getChapters() {
    try {
        const state = yield select()
        for (let i = 0; i < state.bible.books.length; i++) {
            yield put(fetchChapters(({ bibleId: state.bible.bibleId, bookId: state.bible.books[i].id })))
        }
    } catch (error) { console.error(error) }
}

function* watcher() {
    yield takeLatest("test/connectToRedux", test)
    yield takeLatest("bible/fetchBooksStatus/fulfilled", getChapters)
}

export default watcher