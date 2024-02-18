import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { CarPageMain } from '@widgets/carpage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'

import { carPage, header } from './CarPage.module.scss'

export function CarPage() {
  return (
    <div className={carPage}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      <Content main={<CarPageMain />} aside={<Order />} />
    </div>
  )
}
