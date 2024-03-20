import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeId: '',
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setActiveId(state, { payload }) {
      state.activeId = payload
    },
  },
})

export const { setActiveId } = carSlice.actions
export const carReducer = carSlice.reducer

export const getCar = (store) => store.car
