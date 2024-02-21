import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { Header } from '@widgets/header'
import { LocationPageMain } from '@widgets/locationpage-main'
import { Nav } from '@widgets/nav'

import { header, locationPage } from './LocationPage.module.scss'

export function LocationPage() {
  return (
    <div className={locationPage}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      <Content main={<LocationPageMain />} aside={<Order />} />
    </div>
  )
}
