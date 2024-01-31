import { langReducer } from '@features/change-lang'
import { configureStore } from '@reduxjs/toolkit'

import appReducer from './appSlice.js'

const store = configureStore({
  reducer: {
    app: appReducer,
    lang: langReducer,
  },
})

export default store
