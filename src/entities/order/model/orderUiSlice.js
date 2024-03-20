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
      return {
        ...initialState,
        fullAddress: `${payload.cityArr[0].name}/${payload.addressArr[0].address}`,
      }
    },
    deleteFullAddressUi() {
      return initialState
    },
    setCarUi(state, { payload }) {
      return {
        ...initialState,
        fullAddress: state.fullAddress,
        car: payload,
      }
    },
    setPriceUi(state, { payload }) {
      state.price = payload
    },
    // temp
    setColorUi(state, { payload }) {
      state.color = payload
    },
  },
})

export const {
  setFullAddressUi,
  deleteFullAddressUi,
  setCarUi,
  setPriceUi,
  setColorUi,
} = orderUiSlice.actions
export const orderUiReducer = orderUiSlice.reducer

export const getOrderUi = (store) => store.orderUi
export const getLocationDataIsFilled = (store) => !!store.orderUi.fullAddress
export const getCarDataIsFilled = (store) => !!store.orderUi.car
export const getExtraDataIsFilled = (store) =>
  !!store.orderUi.color &&
  !!store.orderUi.rentalDuration &&
  !!store.orderUi.rate
