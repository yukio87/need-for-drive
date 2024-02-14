import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getLocationData } from '../lib/selector'
import { Item, OrderDetail } from './components'
import { order, orderContainer } from './Order.module.scss'

export function Order() {
  const navigate = useNavigate()
  const { cityArr, locationDataIsFilled, pointArr } =
    useSelector(getLocationData)

  return (
    <div className={order}>
      <h5>Ваш заказ</h5>
      <div className={orderContainer}>
        {locationDataIsFilled && (
          <OrderDetail option="Пункт выдачи">
            {[...cityArr, ...pointArr].map((item, index, array) => (
              <Item item={item} index={index} array={array} key={item} />
            ))}
          </OrderDetail>
        )}
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
