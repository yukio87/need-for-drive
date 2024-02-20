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
      const { pointName, value } = payload
      return {
        ...state,
        [pointName]: value,
      }
    },
    deleteOrderPointPost(state, { payload }) {
      const { pointName, value } = payload
      return {
        ...state,
        [pointName]: value,
      }
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
