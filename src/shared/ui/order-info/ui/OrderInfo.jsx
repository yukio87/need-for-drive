import moment from 'moment'

import {
  boldText,
  container,
  headerStyles,
  nameStyles,
  numberStyles,
  orderInfo,
} from './OrderInfo.module.scss'

export function OrderInfo({ data }) {
  const { dateFrom, isFullTank, thumbnail, name, number, tank, header } = data

  const formatDate = (timestamp) => moment(timestamp).format('DD.MM.YYYY HH:mm')

  return (
    <div className={container}>
      <div className={orderInfo}>
        {header && <p className={headerStyles}>Ваш заказ подтверждён</p>}
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
