import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  device: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateDevice(state, action) {
      state.device = action.payload
    },
  },
})

export default appSlice.reducer

export const { updateDevice } = appSlice.actions

export const getDevice = (store) => store.app.device
