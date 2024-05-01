import { mapReducer } from '@entities/map'
import { orderPostReducer, orderUiReducer } from '@entities/order'
import { langReducer } from '@features/change-lang'
import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './appSlice.js'

const store = configureStore({
  reducer: {
    app: appReducer,
    lang: langReducer,
    orderUi: orderUiReducer,
    orderPost: orderPostReducer,
    map: mapReducer,
  },
})

export default store
