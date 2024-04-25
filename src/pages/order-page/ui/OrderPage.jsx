import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { OrderPageMain } from '@widgets/orderpage-main'

export function OrderPage() {
  return (
    <Page>
      <Content main={<OrderPageMain />} aside={<Order />} />
    </Page>
  )
}
