import { routesPaths } from '@shared/consts/routesPaths'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getOrderUi } from '../../model/orderUiSlice.js'

export function useDisableBtn() {
  const { pathname } = useLocation()
  const { fullAddress, car, color, rentalDuration, rate } =
    useSelector(getOrderUi)

  const { pathLocationPage, pathCarPage, pathExtraPage } = routesPaths

  if (pathname === pathLocationPage) return !fullAddress
  if (pathname === pathCarPage) return !car
  if (pathname === pathExtraPage) return !color || !rentalDuration || !rate

  return false
}
