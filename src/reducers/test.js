import { createSlice, createAction } from "@reduxjs/toolkit"

const initialState = {
  connect: []
}

export const requestConnection = createAction('test/requestConnection')

const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    connectToRedux(state) {
      state.connect[0] = 'Redux Store'
    },
    connectToSaga(state) {
      state.connect[1] = 'Redux Saga'

    },
  }
})

export const { connectToRedux, connectToSaga } = slice.actions

export default slice.reducer
