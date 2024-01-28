import { ChangeLang } from '@features/change-lang'
import { useState } from 'react'

import ImageFacebook from '../assets/icons/facebook.svg'
import IconClose from '../assets/icons/icon-close.svg'
import IconOpen from '../assets/icons/icon-open.svg'
import ImageInstagram from '../assets/icons/instagram.svg'
import ImageTelegram from '../assets/icons/telegram.svg'
// import Icon from '../Icon/Icon'
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
} from './Modal.module.scss'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={modal}>
      {/* <div className={isOpen ? iconClose : iconOpen}>
        <Icon
          name={isOpen ? 'iconClose' : 'iconOpen'}
          svgProps={{
            width: '32px',
            height: '32px',
          }}
        />
      </div> */}

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
