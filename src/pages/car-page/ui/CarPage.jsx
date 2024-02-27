import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { CarPageMain } from '@widgets/carpage-main'

export function CarPage() {
  return (
    <Page>
      <Content main={<CarPageMain />} aside={<Order />} />
    </Page>
  )
}
