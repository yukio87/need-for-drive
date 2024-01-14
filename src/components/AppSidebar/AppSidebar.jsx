import ImageMenu from '@assets/menu_btn.svg'

import ChangeLang from '../../ui/ChangeLang'
import styles from './AppSidebar.module.scss'

function AppSidebar({ setIsOpen }) {
  return (
    <div className={styles.sidebar}>
      <ImageMenu
        onClick={() => setIsOpen(true)}
        className={styles['image-menu']}
      />
      <ChangeLang />
    </div>
  )
}

export default AppSidebar
