import { createSlice } from '@reduxjs/toolkit'

import { cityCoords } from '../consts/cityCoords.js'

const initialState = {
  cityArr: [],
  addressArr: [],
  addressesWithCoords: [],
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
    setAddressesWithCoords(state, { payload }) {
      const { curCity, curAddresses } = payload
      state.addressesWithCoords = curAddresses.map((address, i) => {
        return {
          ...address,
          position: cityCoords[curCity][i],
        }
      })
    },
  },
})

export const { setLocationPoint, deleteLocationPoint, setAddressesWithCoords } =
  locationSlice.actions
export const locationReducer = locationSlice.reducer

export const getLocation = (store) => store.location
