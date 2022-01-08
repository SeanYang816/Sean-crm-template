import { configureStore } from '@reduxjs/toolkit'
import test from 'reducers/test'

export default configureStore({
  reducer: {
    test,
  },
})
