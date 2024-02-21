import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  device: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateDevice(state, { payload }) {
      state.device = payload
    },
  },
})

export const { updateDevice } = appSlice.actions
export const appReducer = appSlice.reducer

export const getDevice = (store) => store.app.device
