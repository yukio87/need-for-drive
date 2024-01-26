import ImageFacebook from '@assets/icons/facebook.svg'
import ImageInstagram from '@assets/icons/instagram.svg'
import IconClose from '@assets/icons/modal-close.svg'
import IconOpen from '@assets/icons/modal-open.svg'
import ImageTelegram from '@assets/icons/telegram.svg'
import { useState } from 'react'

import ChangeLang from '../../ui/ChangeLang'
import {
  changeLang,
  iconClose,
  iconOpen,
  links,
  modal,
  modalClose,
  modalOpen,
  socials,
  wrapper,
} from './AppModal.module.scss'

function AppModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={modal}>
      <div>
        {isOpen ? (
          <IconClose onClick={() => setIsOpen(false)} className={iconClose} />
        ) : (
          <IconOpen onClick={() => setIsOpen(true)} className={iconOpen} />
        )}
      </div>

      <div className={`${isOpen ? modalOpen : modalClose}`}>
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
    </div>
  )
}

export default AppModal
