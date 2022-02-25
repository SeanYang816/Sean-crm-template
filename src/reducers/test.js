import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  connect: [],
}

const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    connectToRedux(state) {
      console.log('Connected to Redux !')
      state.connect[0] = 'Redux Store'
    },
    connectToSaga(state) {
      console.log('Connected to Redux Saga !')
      state.connect[1] = 'Redux Saga'
    }
  },
})

export const { connectToRedux, connectToSaga } = slice.actions

export default slice.reducer
