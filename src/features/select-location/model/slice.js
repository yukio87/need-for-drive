import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityArr: [],
  addressArr: [],
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationPoint(state, { payload }) {
      const { pointName, value } = payload
      return {
        ...state,
        [pointName]: value,
      }
    },
    deleteLocationPoint(state, { payload }) {
      const { pointName } = payload
      return {
        ...state,
        [pointName]: [],
      }
    },
  },
})

export const { setLocationPoint, deleteLocationPoint } = locationSlice.actions
export const locationReducer = locationSlice.reducer

export const getLocation = (store) => store.location
