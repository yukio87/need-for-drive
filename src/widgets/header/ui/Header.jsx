import { ChangeLocation } from '@features/change-location'

import { header } from './Header.module.scss'
import Logo from './Logo'

export function Header() {
  return (
    <header className={header}>
      <Logo />
      <ChangeLocation />
    </header>
  )
}
