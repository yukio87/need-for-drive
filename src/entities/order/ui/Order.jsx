import { getLocationDataIsFilled } from '@features/select-location'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { options } from '../consts/options'
import { getOrder } from '../model/slice'
import { OrderDetail } from './components'
import { orderContainer, orderStyles } from './Order.module.scss'

export function Order() {
  const navigate = useNavigate()
  const order = useSelector(getOrder)
  const locationDataIsFilled = useSelector(getLocationDataIsFilled)

  return (
    <div className={orderStyles}>
      <h5>Ваш заказ</h5>
      <div className={orderContainer}>
        {Object.keys(order).map((orderPoint, i) => {
          if (order[orderPoint])
            return (
              <OrderDetail option={options[i]}>{order[orderPoint]}</OrderDetail>
            )
          return null
        })}
      </div>
      {/* <p className={price}>Цена: от 8 000 до 12 000 ₽</p> */}
      <button
        disabled={!locationDataIsFilled}
        type="button"
        onClick={() => navigate('/model')}
      >
        Выбрать модель
      </button>
    </div>
  )
}
