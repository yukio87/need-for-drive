import { configureStore } from '@reduxjs/toolkit'

import appReducer from './appSlice.js'

const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export default store
