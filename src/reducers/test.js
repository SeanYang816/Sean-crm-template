import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connect: [],
};

const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    connectRedux(state, action) {
      console.log('Redux Connected !')
      state.connect[0] = 'Redux connected !';
    },
    connectSaga(state, action) {
      console.log('Connected to Redux Saga !')
      state.connect[1] = 'Saga Connected !';
    }
  },
});

export const { connectRedux, connectSaga } = slice.actions;

export default slice.reducer;
