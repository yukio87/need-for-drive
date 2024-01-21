import { useSelector } from 'react-redux'

import AppModal from '../../../../components/AppModal/AppModal'
import { getDevice } from '../../../../store/appSlice'
import Location from '../../../../ui/Location'
import Logo from '../../../../ui/Logo'
import { header, location } from './HomePageHeader.module.scss'

function HomePageHeader() {
  const device = useSelector(getDevice)

  return (
    <header className={header}>
      {device === 'mobile' && <AppModal />}
      <Logo />
      <div className={location}>
        <Location />
      </div>
    </header>
  )
}

export default HomePageHeader
