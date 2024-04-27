import { OrderNumber } from '@entities/order-number'
import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'
import { useParams } from 'react-router-dom'

import { header, nav, page } from './Page.module.scss'

export function Page({ children }) {
  const { orderId } = useParams()

  return (
    <div className={page}>
      <div className={header}>
        <Header />
      </div>

      <div className={nav}>
        {orderId ? <OrderNumber number={orderId} /> : <Nav />}
      </div>

      {children}
    </div>
  )
}
