import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connect: '',
};

const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    connectToConfigureStore(state, action) {
      console.log('Connected to ConfigureStore !')
      state.connect = 'Connected to ConfigureStore !';
    },
    connectToReduxSaga(state, action) {
      console.log('Connected to Redux Saga !')
      state.connect = 'Connected to Redux Saga !';
    }
  },
});

export const { connectToConfigureStore, connectToReduxSaga } = slice.actions;

export default slice.reducer;
