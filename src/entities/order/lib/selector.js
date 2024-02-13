import {
  getCityArr,
  getLocationDataIsFilled,
  getPointArr,
} from '@features/select-location'
import { createSelector } from '@reduxjs/toolkit'

export const getLocationData = createSelector(
  [getCityArr, getLocationDataIsFilled, getPointArr],
  (a, b, c) => ({
    cityArr: a,
    locationDataIsFilled: b,
    pointArr: c,
  }),
)
