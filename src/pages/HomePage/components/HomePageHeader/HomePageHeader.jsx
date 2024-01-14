import ImageMenu from '@assets/menu_btn.svg'
import { useContext } from 'react'

import useDeviceDetection from '../../../../customHooks/useDeviceDetection'
import Location from '../../../../ui/Location'
import Logo from '../../../../ui/Logo'
import { ModalContext } from '../../../AppLayout/components/AppLayout/AppLayout'
import styles from './HomePageHeader.module.scss'

function HomePageHeader() {
  const device = useDeviceDetection()
  const { setIsOpen } = useContext(ModalContext)

  return (
    <header className={styles.header}>
      {device === 'mobile' && (
        <ImageMenu
          onClick={() => setIsOpen(true)}
          className={styles['image-menu']}
        />
      )}
      <Logo />
      <div className={styles.location}>
        <Location />
      </div>
    </header>
  )
}

export default HomePageHeader
