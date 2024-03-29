import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityId: {},
  pointId: {},
  carId: {},
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
    // temp
    setColorPost(state, { payload }) {
      state.color = payload
    },
  },
})

export const {
  setOrderPointPost,
  deleteOrderPointPost,
  setCarPost,
  setColorPost,
} = orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
