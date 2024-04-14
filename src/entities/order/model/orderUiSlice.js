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
      const { name, priceMin, priceMax } = payload
      const price =
        priceMin && priceMax
          ? `от ${getNumberWithSpaces(priceMin)} до ${getNumberWithSpaces(
              priceMax,
            )}`
          : ''

      return {
        ...initialState,
        fullAddress: state.fullAddress,
        car: name,
        price,
      }
    },
    setColorUi(state, { payload }) {
      state.color = payload
    },
    setRentalDurationUi(state, { payload }) {
      const { dateFrom, dateTo } = payload
      state.rentalDuration =
        dateFrom && dateTo ? calcDateSubtraction(dateFrom, dateTo) : ''
    },
    deleteRentalDurationUi(state) {
      state.rentalDuration = ''
    },
    setRateUi(state, { payload }) {
      const { rateTypeId, price } = payload
      state.rate = rateTypeId.name
      state.price = `${getNumberWithSpaces(price)}`
    },
    deleteRateUi(state) {
      state.rate = ''
    },
    setServicePointUi(state, { payload }) {
      const { pointName, isChecked, price } = payload
      state[pointName] = isChecked ? 'Да' : ''
      state.price = isChecked
        ? `${getNumberWithSpaces(+state.price.replace(/\s/g, '') + price)}`
        : `${getNumberWithSpaces(+state.price.replace(/\s/g, '') - price)}`
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
  deleteRateUi,
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
