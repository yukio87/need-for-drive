import {
  getCarDataIsFilled,
  getExtraDataIsFilled,
  getLocationDataIsFilled,
} from '@entities/order'
import { createSelector } from '@reduxjs/toolkit'

export const getDataIsFilledForPages = createSelector(
  [getLocationDataIsFilled, getCarDataIsFilled, getExtraDataIsFilled],
  (a, b, c) => ({
    locationDataIsFilled: a,
    carDataIsFilled: b,
    extraDataIsFilled: c,
  }),
)
