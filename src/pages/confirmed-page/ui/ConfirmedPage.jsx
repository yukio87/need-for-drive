import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { ConfirmedPageMain } from '@widgets/confirmedpage-main'

export function ConfirmedPage() {
  return (
    <Page>
      <Content main={<ConfirmedPageMain />} aside={<Order />} />
    </Page>
  )
}
