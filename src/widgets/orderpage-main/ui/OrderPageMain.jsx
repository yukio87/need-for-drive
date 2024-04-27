import { api } from '@shared/api/api'
import { urlOrder } from '@shared/consts/urls'
import { Loader } from '@shared/ui/loaders'
import { OrderInfo } from '@shared/ui/order-info'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function OrderPageMain() {
  const { orderId } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => api(`${urlOrder}/${orderId}`, { method: 'get' }),
    throwOnError: true,
  })

  if (isLoading)
    return <Loader size="40px" animation="grow" position="center" />

  const { dateFrom, isFullTank, carId } = data?.data.data || {}

  return (
    <OrderInfo
      data={{
        dateFrom: Number(dateFrom),
        isFullTank,
        thumbnail: carId.thumbnail,
        name: carId.name,
        number: carId.number,
        tank: carId.tank,
        header: 'Ваш заказ подтверждён',
      }}
    />
  )
}
