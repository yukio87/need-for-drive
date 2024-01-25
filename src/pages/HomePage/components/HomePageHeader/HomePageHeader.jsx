import Location from '../../../../ui/Location'
import Logo from '../../../../ui/Logo'
import { header } from './HomePageHeader.module.scss'

function HomePageHeader() {
  return (
    <header className={header}>
      <Logo />
      <Location />
    </header>
  )
}

export default HomePageHeader
