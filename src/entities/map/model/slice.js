import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMapStateReset: true,
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    resetMapState(state) {
      state.isMapStateReset = true
    },
    setMapState(state) {
      state.isMapStateReset = false
    },
  },
})

export const { resetMapState, setMapState } = mapSlice.actions
export const mapReducer = mapSlice.reducer

export const getMap = (store) => store.map
