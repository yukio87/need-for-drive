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
      state.fullAddress = `${payload.cityArr[0].name}/${payload.addressArr[0].address}`
    },
    deleteFullAddressUi(state) {
      state.fullAddress = ''
    },
    setCarUi(state, { payload }) {
      state.car = payload
    },
    resetCarPageStateUi(state) {
      state.car = ''
    },
    setColorUi(state, { payload }) {
      state.color = payload
    },
    resetExtraPageStateUi(state) {
      state.color = ''
      state.rentalDuration = ''
      state.rate = ''
      state.isFullTank = ''
      state.isNeedChildChair = ''
      state.isRightWheel = ''
    },
  },
})

export const {
  setFullAddressUi,
  deleteFullAddressUi,
  setCarUi,
  deleteCarUi,
  resetCarPageStateUi,
  setColorUi,
  resetExtraPageStateUi,
} = orderUiSlice.actions
export const orderUiReducer = orderUiSlice.reducer

export const getOrderUi = (store) => store.orderUi
export const getLocationDataIsFilled = (store) => !!store.orderUi.fullAddress
export const getCarDataIsFilled = (store) => !!store.orderUi.car
export const getExtraDataIsFilled = (store) =>
  !!store.orderUi.color &&
  !!store.orderUi.rentalDuration &&
  !!store.orderUi.rate
