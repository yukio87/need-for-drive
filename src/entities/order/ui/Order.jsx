import { routesPaths } from '@shared/consts/routesPaths'
import { getNumberWithSpaces } from '@shared/lib/format'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { options } from '../consts/options'
import { getPriceRangeString } from '../lib/format'
import { useNavigateTo } from '../lib/hooks/useNavigateTo'
import { usePageDataIsFilled } from '../lib/hooks/usePageDataIsFilled'
import { getOrderPost } from '../model/orderPostSlice'
import { getOrderUi } from '../model/orderUiSlice'
import { OrderDetail } from './components'
import { orderContainer, orderStyles, priceStyles } from './Order.module.scss'

export function Order() {
  const navigate = useNavigate()
  const orderUi = useSelector(getOrderUi)
  const { carId } = useSelector(getOrderPost)

  const curPageDataIsFilled = usePageDataIsFilled()
  const { nextPathName, buttonText } = useNavigateTo()

  const { pathLocationPage } = routesPaths

  return (
    <div className={orderStyles}>
      <h5>Ваш заказ</h5>
      <div className={orderContainer}>
        {Object.keys(orderUi).map(
          (orderPoint, i) =>
            orderUi[orderPoint] &&
            orderPoint !== 'price' && (
              <OrderDetail option={options[i]} key={orderPoint}>
                {orderUi[orderPoint]}
              </OrderDetail>
            ),
        )}
      </div>
      {Object.keys(carId).length > 0 && (
        <p className={priceStyles}>
          Цена:{' '}
          {getNumberWithSpaces(orderUi.price) ||
            getPriceRangeString(carId.priceMin, carId.priceMax)}{' '}
          ₽
        </p>
      )}
      <button
        disabled={
          nextPathName === pathLocationPage ? false : !curPageDataIsFilled
        }
        type="button"
        onClick={() => navigate(nextPathName)}
      >
        {buttonText}
      </button>
    </div>
  )
}
