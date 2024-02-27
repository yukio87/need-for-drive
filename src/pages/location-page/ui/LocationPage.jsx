import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { LocationPageMain } from '@widgets/locationpage-main'

export function LocationPage() {
  return (
    <Page>
      <Content main={<LocationPageMain />} aside={<Order />} />
    </Page>
  )
}
