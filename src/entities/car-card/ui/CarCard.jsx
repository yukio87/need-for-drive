import { setCarPost, setCarUi, setPriceUi } from '@entities/order'
import { getCar, setActiveId } from '@features/select-car'
import { numberWithSpaces } from '@shared/lib/format'
import { useDispatch, useSelector } from 'react-redux'

import { active, carCard, imgWrapper } from './CarCard.module.scss'

export function CarCard({ car }) {
  const dispatch = useDispatch()
  const { activeId } = useSelector(getCar)

  const { name, priceMax, priceMin, thumbnail } = car

  const isActiveId = activeId === car.id
  const model = name.slice(name.indexOf(',') + 2)
  const priceUiString = `Цена: от ${numberWithSpaces(
    priceMin,
  )} до ${numberWithSpaces(priceMax)} ₽`

  const handleItemClick = () => {
    if (!isActiveId) {
      dispatch(setCarPost(car))
      dispatch(setCarUi(car.name))
      dispatch(setPriceUi(priceUiString))
      dispatch(setActiveId(car.id))
    }
  }

  return (
    <div
      onClick={handleItemClick}
      className={`${carCard} ${isActiveId && active}`}
      aria-hidden="true"
    >
      <span>{model}</span>
      <span>
        {`${numberWithSpaces(priceMin)} - ${numberWithSpaces(priceMax)}`}{' '}
        &#8381;
      </span>
      <div className={imgWrapper}>
        <img src={thumbnail.path} alt="car-info" />
      </div>
    </div>
  )
}
