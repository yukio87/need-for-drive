import { Header } from '@widgets/header'
import { Nav } from '@widgets/nav'

import { header, page } from './Page.module.scss'

export function Page({ children }) {
  return (
    <div className={page}>
      <div className={header}>
        <Header />
      </div>
      <Nav />
      {children}
    </div>
  )
}
