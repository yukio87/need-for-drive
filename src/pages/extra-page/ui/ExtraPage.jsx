import { getCarDataIsFilled, Order } from '@entities/order'
import { routesPaths } from '@shared/consts/routesPaths'
import { Content } from '@shared/ui/content'
import { ExtraPageMain } from '@widgets/extrapage-main'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { extraPage, header } from './ExtraPage.module.scss'

export function ExtraPage() {
  const carDataIsFilled = useSelector(getCarDataIsFilled)

  const { pathHomePage } = routesPaths

  if (!carDataIsFilled) return <Navigate to={pathHomePage} />

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
