import ImageMenu from '@assets/menu_btn.svg'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

import { getDevice } from '../../../../store/appSlice'
import Location from '../../../../ui/Location'
import Logo from '../../../../ui/Logo'
import { ModalContext } from '../../../AppLayout/components/AppLayout/AppLayout'
import { header, imageMenu, location } from './HomePageHeader.module.scss'

function HomePageHeader() {
  const device = useSelector(getDevice)
  const { setIsOpen } = useContext(ModalContext)

  return (
    <header className={header}>
      {device === 'mobile' && (
        <ImageMenu onClick={() => setIsOpen(true)} className={imageMenu} />
      )}
      <Logo />
      <div className={location}>
        <Location />
      </div>
    </header>
  )
}

export default HomePageHeader
