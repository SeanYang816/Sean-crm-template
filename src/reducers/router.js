import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  location: {}
}

const slice = createSlice({
  name: "router",
  initialState,
  reducers: {
    getLocation(state, { payload }) {
      state.location = payload
    },

  }
})

export const { getLocation } = slice.actions

export default slice.reducer
