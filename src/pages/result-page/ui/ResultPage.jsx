import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { ResultPageMain } from '@widgets/resultpage-main'

import { header, resultPage } from './ResultPage.module.scss'

export function ResultPage() {
  return (
    <div className={resultPage}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      <Content main={<ResultPageMain />} aside={<Order />} />
    </div>
  )
}
