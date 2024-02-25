import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { ExtraPageMain } from '@widgets/extrapage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'

import { extraPage, header } from './ExtraPage.module.scss'

export function ExtraPage() {
  return (
    <div className={extraPage}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      <Content main={<ExtraPageMain />} aside={<Order />} />
    </div>
  )
}
