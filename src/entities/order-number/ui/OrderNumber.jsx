import { orderNumber } from './OrderNumber.module.scss'

export function OrderNumber({ number }) {
  return <div className={orderNumber}>Заказ номер {number}</div>
}
