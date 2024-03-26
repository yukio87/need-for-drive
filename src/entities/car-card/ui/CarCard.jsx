import { getOrderUi, setCarPost, setCarUi } from '@entities/order'
import { numberWithSpaces } from '@shared/lib/format'
import { useDispatch, useSelector } from 'react-redux'

import { pricePlaceholder } from '../consts/placeholders'
import { active, carCard, imgWrapper } from './CarCard.module.scss'

export function CarCard({ car }) {
  const dispatch = useDispatch()
  const { car: carUi } = useSelector(getOrderUi)

  const { name, priceMax, priceMin, thumbnail } = car

  const isActiveCard = carUi === car.name
  const model = name?.slice(name.indexOf(',') + 2)

  const handleItemClick = () => {
    if (!isActiveCard) {
      dispatch(setCarPost(car))
      dispatch(setCarUi(car))
    }
  }

  if (!name) return null

  return (
    <div
      onClick={handleItemClick}
      className={`${carCard} ${isActiveCard && active}`}
      aria-hidden="true"
    >
      <span>{model}</span>
      <span>
        {priceMin && priceMax
          ? `${numberWithSpaces(priceMin)} - ${numberWithSpaces(priceMax)} ₽`
          : pricePlaceholder}
      </span>
      <div className={imgWrapper}>
        <img src={thumbnail.path} alt="car-info" />
      </div>
    </div>
  )
}
