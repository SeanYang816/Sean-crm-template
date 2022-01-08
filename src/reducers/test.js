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
  },
});

export const { connectToConfigureStore } = slice.actions;

export default slice.reducer;
