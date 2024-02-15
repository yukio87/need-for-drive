import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullAddress: '',
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFullAddress(state, { payload }) {
      state.fullAddress = `${payload.cityArr[0]}, ${payload.addressArr[0]}`
    },
    deleteFullAddress(state) {
      state.fullAddress = ''
    },
  },
})

export const { deleteFullAddress, setFullAddress } = orderSlice.actions
export const orderReducer = orderSlice.reducer

export const getOrder = (store) => store.order
