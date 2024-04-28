import { createSlice } from '@reduxjs/toolkit'
import { calcDateSubtraction, getNumberWithSpaces } from '@shared/lib/format'

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
      const { name } = payload

      return {
        ...initialState,
        fullAddress: state.fullAddress,
        car: name,
      }
    },
    setColorUi(state, { payload }) {
      state.color = payload
    },
    setRentalDurationUi(state, { payload }) {
      const { dateFrom, dateTo } = payload
      state.rentalDuration =
        dateFrom && dateTo ? calcDateSubtraction(dateFrom, dateTo) : ''
      state.rate = ''
      state.price = ''
      state.isFullTank = ''
      state.isNeedChildChair = ''
      state.isRightWheel = ''
    },
    deleteRentalDurationUi(state) {
      state.rentalDuration = ''
      state.rate = ''
      state.price = ''
      state.isFullTank = ''
      state.isNeedChildChair = ''
      state.isRightWheel = ''
    },
    setRateUi(state, { payload }) {
      const { item: rate, roundedPrice } = payload
      state.rate = rate.rateTypeId.name
      state.price = getNumberWithSpaces(roundedPrice)
    },
    setServicePointUi(state, { payload }) {
      const { pointName, isChecked, price } = payload
      state[pointName] = isChecked ? 'Да' : ''
      state.price = isChecked
        ? getNumberWithSpaces(+state.price.replace(/\s/g, '') + price)
        : getNumberWithSpaces(+state.price.replace(/\s/g, '') - price)
    },
  },
})

export const {
  setFullAddressUi,
  deleteFullAddressUi,
  setCarUi,
  setColorUi,
  setRentalDurationUi,
  deleteRentalDurationUi,
  setRateUi,
  setServicePointUi,
} = orderUiSlice.actions
export const orderUiReducer = orderUiSlice.reducer

export const getOrderUi = (store) => store.orderUi
export const getLocationDataIsFilled = (store) => !!store.orderUi.fullAddress
export const getCarDataIsFilled = (store) => !!store.orderUi.car
export const getExtraDataIsFilled = (store) =>
  !!store.orderUi.color &&
  !!store.orderUi.rentalDuration &&
  !!store.orderUi.rate
