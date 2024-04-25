import { routesPaths } from '@shared/consts/routesPaths'
import { getNumberWithSpaces } from '@shared/lib/format'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getPriceRangeString } from '../../../lib/format'
import { getOrderPost } from '../../../model/orderPostSlice'
import { getOrderUi } from '../../../model/orderUiSlice'
import { priceStyles } from './Price.module.scss'

export function Price() {
  const { pathname } = useLocation()
  const { car, price } = useSelector(getOrderUi)
  const { carId } = useSelector(getOrderPost)

  const { pathExtraPage } = routesPaths

  if (!car) return null

  return (
    <p className={priceStyles}>
      {!price && pathname === pathExtraPage
        ? 'Цена: 0 ₽'
        : `Цена: ${
            getNumberWithSpaces(price) ||
            getPriceRangeString(carId.priceMin, carId.priceMax)
          } ₽`}
    </p>
  )
}
