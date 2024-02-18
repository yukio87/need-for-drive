import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityArr: [], // cityId
  addressArr: [], // pointId
  car: '', // carId
  // color: '',
  // dateFrom: '',
  // dateTo: '',
  // rateId: '',
  // isFullTank: '',
  // isNeedChildChair: '',
  // isRightWheel: '',
  // price: '',
}

const orderPostSlice = createSlice({
  name: 'orderPost',
  initialState,
  reducers: {
    setOrderPointPost(state, { payload }) {
      if (payload.pointName === 'city') state.cityArr = payload.value
      if (payload.pointName === 'address') state.addressArr = payload.value
    },
    deleteOrderPointPost(state, { payload }) {
      if (payload.pointName === 'city') state.cityArr = []
      if (payload.pointName === 'address') state.addressArr = []
    },
    setCarPost(state, { payload }) {
      state.car = payload
    },
  },
})

export const {
  setOrderPointPost,
  deleteOrderPointPost,
  setCarPost,
  deleteCarPost,
} = orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
