import { ChangeLocation } from '@features/change-location'

import Logo from '../Logo/Logo'
import { header } from './HomePageHeader.module.scss'

function HomePageHeader() {
  return (
    <header className={header}>
      <Logo />
      <ChangeLocation />
    </header>
  )
}

export default HomePageHeader
