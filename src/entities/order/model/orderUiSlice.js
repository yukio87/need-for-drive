import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullAddress: '',
  car: '',
  color: '',
  rentalDuration: '',
  rate: '',
  isFullTank: '',
  isNeedChildChair: '',
  isRightWheel: '',
  price: '',
}

const orderUiSlice = createSlice({
  name: 'orderUi',
  initialState,
  reducers: {
    setFullAddressUi(state, { payload }) {
      state.fullAddress = `${payload.cityArr[0]}, ${payload.addressArr[0]}`
    },
    deleteFullAddressUi(state) {
      state.fullAddress = ''
    },
    setCarUi(state, { payload }) {
      state.car = payload
    },
  },
})

export const { setFullAddressUi, deleteFullAddressUi, setCarUi, deleteCarUi } =
  orderUiSlice.actions
export const orderUiReducer = orderUiSlice.reducer

export const getOrderUi = (store) => store.orderUi
