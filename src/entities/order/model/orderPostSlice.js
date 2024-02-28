import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityArr: [], // cityId
  addressArr: [], // pointId
  car: '', // carId
  color: '',
  dateFrom: '',
  dateTo: '',
  rateId: '',
  isFullTank: '',
  isNeedChildChair: '',
  isRightWheel: '',
  price: '',
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
      const { pointName } = payload
      return {
        ...state,
        [pointName]: [],
      }
    },
    setCarPost(state, { payload }) {
      state.car = payload
    },
    resetCarPageStatePost(state) {
      state.car = ''
    },
    setColorPost(state, { payload }) {
      state.color = payload
    },
    resetExtraPageStatePost(state) {
      state.color = ''
      state.dateFrom = ''
      state.dateTo = ''
      state.rateId = ''
      state.isFullTank = ''
      state.isNeedChildChair = ''
      state.isRightWheel = ''
    },
  },
})

export const {
  setOrderPointPost,
  deleteOrderPointPost,
  setCarPost,
  deleteCarPost,
  resetCarPageStatePost,
  setColorPost,
  resetExtraPageStatePost,
} = orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
