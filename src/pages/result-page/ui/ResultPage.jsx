import { getExtraDataIsFilled, Order } from '@entities/order'
import { routesPaths } from '@shared/consts/routesPaths'
import { Content } from '@shared/ui/content'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { ResultPageMain } from '@widgets/resultpage-main'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { header, resultPage } from './ResultPage.module.scss'

export function ResultPage() {
  const extraDataIsFilled = useSelector(getExtraDataIsFilled)

  const { pathHomePage } = routesPaths

  if (!extraDataIsFilled) return <Navigate to={pathHomePage} />

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
