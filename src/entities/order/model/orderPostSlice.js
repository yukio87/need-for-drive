import { createSlice } from '@reduxjs/toolkit'

import { millisecsByRateTypeId } from '../consts/millisecsBy.js'

const initialState = {
  cityId: {},
  pointId: {},
  carId: {},
  color: '',
  dateFrom: undefined,
  dateTo: undefined,
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
      state[pointName] = value
      if (!value) state.rateId = {}
    },
    deleteDatePointPost(state, { payload }) {
      const { pointName } = payload
      state[pointName] = undefined
      state.rateId = {}
    },
    setRatePost(state, { payload }) {
      state.rateId = payload
      state.dateTo =
        state.dateFrom + millisecsByRateTypeId[payload.rateTypeId.id]
      state.price = Number(payload.price)
    },
    setServicePointPost(state, { payload }) {
      const { pointName, isChecked, price } = payload
      state[pointName] = isChecked
      state.price = isChecked ? state.price + price : state.price - price
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
} = orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
