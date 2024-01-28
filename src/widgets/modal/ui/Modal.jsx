import { ChangeLang } from '@features/change-lang'
import { Icon } from '@shared/ui/icon'
import { useState } from 'react'

import ImageFacebook from '../assets/icons/facebook.svg'
import ImageInstagram from '../assets/icons/instagram.svg'
import ImageTelegram from '../assets/icons/telegram.svg'
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

  function handleClick() {
    setIsOpen((s) => !s)
  }

  return (
    <div className={modal}>
      <button
        className={isOpen ? iconClose : iconOpen}
        onClick={handleClick}
        type="button"
      >
        <Icon name={isOpen ? 'iconClose' : 'iconOpen'} />
      </button>

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
