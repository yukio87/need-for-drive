import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityArr: [],
  pointArr: [],
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeCity(state, action) {
      state.cityArr = action.payload
    },
    changePoint(state, action) {
      state.pointArr = action.payload
    },
    deleteCity(state) {
      state.cityArr = []
    },
    deletePoint(state) {
      state.pointArr = []
    },
  },
})

export const { changeCity, changePoint, deleteCity, deletePoint } =
  locationSlice.actions
export const locationReducer = locationSlice.reducer

export const getCityArr = (store) => store.location.cityArr
export const getPointArr = (store) => store.location.pointArr
export const getLocationDataIsFilled = (store) =>
  store.location.cityArr.length > 0 && store.location.pointArr.length > 0
