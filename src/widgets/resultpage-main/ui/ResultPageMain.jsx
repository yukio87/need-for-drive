import { getOrderPost } from '@entities/order'
import { useSelector } from 'react-redux'

import { formatDate } from '../lib/format'
import {
  boldText,
  container,
  nameStyles,
  numberStyles,
  orderInfo,
} from './ResultPageMain.module.scss'

export function ResultPageMain() {
  const { carId, dateFrom, isFullTank } = useSelector(getOrderPost)
  const { thumbnail, name, number, tank } = carId

  return (
    <div className={container}>
      <div className={orderInfo}>
        <div className={nameStyles}>{name}</div>
        <div className={numberStyles}>{number}</div>
        <div>
          <span className={boldText}>Топливо </span>
          <span>{isFullTank ? '100' : tank}%</span>
        </div>
        <div>
          <span className={boldText}>Доступна с </span>
          <span>{formatDate(dateFrom)}</span>
        </div>
      </div>
      <img src={thumbnail.path} alt="car" />
    </div>
  )
}
