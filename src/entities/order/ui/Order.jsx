import { routesPaths } from '@shared/consts/routesPaths'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { options } from '../consts/options'
import { useNavigateTo } from '../hooks/useNavigateTo'
import { usePageDataIsFilled } from '../hooks/usePageDataIsFilled'
import { getOrderUi } from '../model/orderUiSlice'
import { OrderDetail } from './components'
import { orderContainer, orderStyles } from './Order.module.scss'

export function Order() {
  const navigate = useNavigate()
  const orderUi = useSelector(getOrderUi)

  const curPageDataIsFilled = usePageDataIsFilled()
  const { nextPathName, buttonText } = useNavigateTo()

  const { pathLocationPage } = routesPaths

  return (
    <div className={orderStyles}>
      <h5>Ваш заказ</h5>
      <div className={orderContainer}>
        {Object.keys(orderUi).map(
          (orderPoint, i) =>
            orderUi[orderPoint] && (
              <OrderDetail option={options[i]} key={orderPoint}>
                {orderUi[orderPoint]}
              </OrderDetail>
            ),
        )}
      </div>
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
