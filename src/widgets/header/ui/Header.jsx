import { ChangeGeolocation } from '@features/change-location'

import { Logo } from './components'
import { header } from './Header.module.scss'

export function Header() {
  return (
    <header className={header}>
      <Logo />
      <ChangeGeolocation />
    </header>
  )
}
