import { Order } from '@entities/order'
import { routesPaths } from '@shared/consts/routesPaths'
import { Content } from '@shared/ui/content'
import { ConfirmedPageMain } from '@widgets/confirmedpage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { Navigate } from 'react-router-dom'

import { confirmedPage, header } from './ConfirmedPage.module.scss'

export function ConfirmedPage() {
  const { pathHomePage } = routesPaths
  const orderIsPlaced = false // temp

  if (!orderIsPlaced) return <Navigate to={pathHomePage} />

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
