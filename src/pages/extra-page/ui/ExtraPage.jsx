import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { ExtraPageMain } from '@widgets/extrapage-main'

export function ExtraPage() {
  return (
    <Page>
      <Content main={<ExtraPageMain />} aside={<Order />} />
    </Page>
  )
}
