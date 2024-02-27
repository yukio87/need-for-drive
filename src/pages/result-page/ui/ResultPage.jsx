import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Page } from '@shared/ui/page'
import { ResultPageMain } from '@widgets/resultpage-main'

export function ResultPage() {
  return (
    <Page>
      <Content main={<ResultPageMain />} aside={<Order />} />
    </Page>
  )
}
