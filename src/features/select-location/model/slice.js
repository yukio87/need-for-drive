import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityArr: [],
  addressArr: [],
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setOrderPoint(state, { payload }) {
      if (payload.pointName === 'city') {
        state.cityArr = payload.value
        state.addressArr = []
      }
      if (payload.pointName === 'address') {
        state.addressArr = payload.value
      }
    },
    deleteOrderPoint(state, { payload }) {
      if (payload.pointName === 'city') {
        state.cityArr = []
        state.addressArr = []
      }
      if (payload.pointName === 'address') {
        state.addressArr = []
      }
    },
  },
})

export const { deleteOrderPoint, setOrderPoint } = locationSlice.actions
export const locationReducer = locationSlice.reducer

export const getCityArr = (store) => store.location.cityArr
export const getAddressArr = (store) => store.location.addressArr
export const getLocationDataIsFilled = (store) =>
  store.location.cityArr.length > 0 && store.location.addressArr.length > 0
