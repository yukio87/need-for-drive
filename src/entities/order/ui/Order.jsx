import {
  getCityArr,
  getLocationDataIsFilled,
  getPointArr,
} from '@features/select-location'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { order, orderContainer } from './Order.module.scss'
import { OrderDetail } from './OrderDetail'

export function Order() {
  const navigate = useNavigate()
  const cityArr = useSelector(getCityArr)
  const pointArr = useSelector(getPointArr)
  const locationDataIsFilled = useSelector(getLocationDataIsFilled)

  const [curCity] = cityArr
  const [curPoint] = pointArr

  return (
    <div className={order}>
      <h5>Ваш заказ</h5>
      <div className={orderContainer}>
        {locationDataIsFilled && (
          <OrderDetail
            data={{ option: 'Пункт выдачи', values: [curCity, curPoint] }}
          />
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
