import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityId: {},
  pointId: {},
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

const initialStateExtraPage = {
  color: '',
  dateFrom: '',
  dateTo: '',
  rateId: '',
  isFullTank: '',
  isNeedChildChair: '',
  isRightWheel: '',
}

const orderPostSlice = createSlice({
  name: 'orderPost',
  initialState,
  reducers: {
    setOrderPointPost(state, { payload }) {
      const { pointName, value } = payload
      return pointName === 'cityId'
        ? {
            ...initialState,
            cityId: value.length === 0 ? {} : value[0],
            pointId: {},
          }
        : {
            ...initialState,
            cityId: state.cityId,
            pointId: value.length === 0 ? {} : value[0],
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
        cityId: state.cityId,
        pointId: state.pointId,
        car: payload,
        ...initialStateExtraPage,
      }
    },
  },
})

export const { setOrderPointPost, deleteOrderPointPost, setCarPost } =
  orderPostSlice.actions
export const orderPostReducer = orderPostSlice.reducer

export const getOrderPost = (store) => store.orderPost
