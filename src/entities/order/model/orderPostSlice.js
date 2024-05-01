import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityId: {},
  pointId: {},
  carId: {},
  color: '',
  dateFrom: 0,
  dateTo: 0,
  rateId: {},
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  price: 0,
}

const orderPostSlice = createSlice({
  name: 'orderPost',
  initialState,
  reducers: {
    setOrderPointPost(state, { payload }) {
      const { pointName, value } = payload
      return pointName === 'cityId'
        ? {
            ...state,
            cityId: value.length === 0 ? {} : value[0],
            pointId: {},
          }
        : {
            ...state,
            [pointName]: value.length === 0 ? {} : value[0],
          }
    },
    deleteOrderPointPost(state, { payload }) {
      const { pointName } = payload
      return pointName === 'cityId'
        ? { ...initialState }
        : { ...initialState, cityId: state.cityId }
    },
    setCarPost(state, { payload }) {
      return {
        ...initialState,
        cityId: state.cityId,
        pointId: state.pointId,
        carId: payload,
      }
    },
    setColorPost(state, { payload }) {
      state.color = payload
    },
    setDatePointPost(state, { payload }) {
      const { pointName, value } = payload
      state[pointName] = value || 0
      state.rateId = {}
      state.price = 0
      state.isFullTank = false
      state.isNeedChildChair = false
      state.isRightWheel = false
    },
    deleteDatePointPost(state, { payload }) {
      const { pointName } = payload
      state[pointName] = 0
      state.rateId = {}
      state.price = 0
      state.isFullTank = false
      state.isNeedChildChair = false
      state.isRightWheel = false
    },
    setRatePost(state, { payload }) {
      const { item: rate, roundedPrice } = payload
      state.rateId = rate
      state.price = roundedPrice
    },
    setServicePointPost(state, { payload }) {
      const { pointName, isChecked, price } = payload
      state[pointName] = isChecked
      state.price = isChecked ? state.price + price : state.price - price
    },
    resetStateOrderPost() {
      return initialState
    },
  },
})

export const {
  setOrderPointPost,
  deleteOrderPointPost,
  setCarPost,
  setColorPost,
  setDatePointPost,
  deleteDatePointPost,
  setRatePost,
  setServicePointPost,
  resetStateOrderPost,
} = orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
