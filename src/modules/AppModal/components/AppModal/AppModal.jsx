import ImageFacebook from '@assets/facebook.svg'
import ImageInstagram from '@assets/instagram.svg'
import ImageMenuClose from '@assets/menu_btn_close.svg'
import ImageTelegram from '@assets/telegram.svg'

import useScreenSize from '../../../../customHooks/useScreenSize'
import ChangeLang from '../../../../ui/ChangeLang'
import {
  COLOR_TRANSITION_COEFFICIENT,
  WIDTH_SIDEBAR,
} from '../../constants/constants'
import styles from './AppModal.module.scss'

function AppModal({ setIsOpen }) {
  const { width: widthViewPort } = useScreenSize()

  let colorTransitionPx = (widthViewPort - WIDTH_SIDEBAR) / 2 + WIDTH_SIDEBAR

  if (widthViewPort <= 1439)
    colorTransitionPx =
      (widthViewPort - WIDTH_SIDEBAR) * COLOR_TRANSITION_COEFFICIENT +
      WIDTH_SIDEBAR
  if (widthViewPort <= 1023) colorTransitionPx = widthViewPort

  const backgroundImage = {
    background: `linear-gradient(
      to right,
      rgba(17 21 24 / 100%) ${colorTransitionPx}px,
      rgba(21 27 31 / 81%) ${colorTransitionPx}px
    )`,
  }

  return (
    <div style={backgroundImage} className={styles.modal}>
      <ImageMenuClose
        onClick={() => setIsOpen(false)}
        className={styles['image-menu-close']}
      />

      <div className={styles.wrapper}>
        <div className={styles.links}>
          <p>Парковка</p>
          <p>Страховка</p>
          <p>Бензин</p>
          <p>Обслуживание</p>
        </div>
        <div className={styles.socials}>
          <ImageTelegram />
          <ImageFacebook />
          <ImageInstagram />
        </div>
        {widthViewPort <= 767 && (
          <div className={styles['change-lang']}>
            <ChangeLang />
          </div>
        )}
      </div>
    </div>
  )
}

export default AppModal
