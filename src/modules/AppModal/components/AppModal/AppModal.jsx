import ImageFacebook from '@assets/facebook.svg'
import ImageInstagram from '@assets/instagram.svg'
import ImageMenuClose from '@assets/menu_btn_close.svg'
import ImageTelegram from '@assets/telegram.svg'

import ChangeLang from '../../../../ui/ChangeLang'
import {
  changeLang,
  imageMenuClose,
  links,
  modal,
  socials,
  wrapper,
} from './AppModal.module.scss'

function AppModal({ setIsOpen }) {
  return (
    <div className={modal}>
      <ImageMenuClose
        onClick={() => setIsOpen(false)}
        className={imageMenuClose}
      />

      <div className={wrapper}>
        <div className={links}>
          <div>
            <span>Парковка</span>
          </div>
          <div>
            <span>Страховка</span>
          </div>
          <div>
            <span>Бензин</span>
          </div>
          <div>
            <span>Обслуживание</span>
          </div>
        </div>
        <div className={socials}>
          <ImageTelegram />
          <ImageFacebook />
          <ImageInstagram />
        </div>
        <div className={changeLang}>
          <ChangeLang />
        </div>
      </div>
    </div>
  )
}

export default AppModal
