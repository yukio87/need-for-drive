import { getLocationDataIsFilled, Order } from '@entities/order'
import { routesPaths } from '@shared/consts/routesPaths'
import { Content } from '@shared/ui/content'
import { CarPageMain } from '@widgets/carpage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { carPage, header } from './CarPage.module.scss'

export function CarPage() {
  const locationDataIsFilled = useSelector(getLocationDataIsFilled)

  const { pathHomePage } = routesPaths

  if (!locationDataIsFilled) return <Navigate to={pathHomePage} />

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
