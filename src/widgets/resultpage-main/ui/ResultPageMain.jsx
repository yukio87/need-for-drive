import { getOrderPost } from '@entities/order'
import { OrderInfo } from '@shared/ui/order-info'
import { useSelector } from 'react-redux'

export function ResultPageMain() {
  const { carId, dateFrom, isFullTank } = useSelector(getOrderPost)
  const { thumbnail, name, number, tank } = carId

  return (
    <OrderInfo data={{ dateFrom, isFullTank, thumbnail, name, number, tank }} />
  )
}
