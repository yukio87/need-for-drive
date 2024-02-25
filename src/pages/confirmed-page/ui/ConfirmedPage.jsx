import { Order } from '@entities/order'
import { Content } from '@shared/ui/content'
import { ConfirmedPageMain } from '@widgets/confirmedpage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'

import { confirmedPage, header } from './ConfirmedPage.module.scss'

export function ConfirmedPage() {
  return (
    <div className={confirmedPage}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      <Content main={<ConfirmedPageMain />} aside={<Order />} />
    </div>
  )
}
