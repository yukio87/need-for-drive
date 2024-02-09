import { ChangeLang } from '@features/change-lang'
import { Icon } from '@shared/ui/icon'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  changeLang,
  iconClose,
  iconOpen,
  links,
  modal,
  modalClose,
  modalOpen,
  modalOpenHome,
  socials,
  wrapper,
} from './Modal.module.scss'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  function defineCssClassByPage() {
    return pathname === '/' ? modalOpenHome : modalOpen
  }

  const iconBasicStyles = {
    width: '32px',
    height: '32px',
    color: 'white',
  }

  return (
    <div className={modal}>
      <div
        className={isOpen ? iconClose : iconOpen}
        onClick={() => setIsOpen((s) => !s)}
        aria-hidden="true"
      >
        <Icon
          name={isOpen ? 'iconClose' : 'iconOpen'}
          styles={iconBasicStyles}
        />
      </div>

      <div className={`${isOpen ? defineCssClassByPage() : modalClose}`}>
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
            <Icon name="iconTelegram" styles={iconBasicStyles} />
            <Icon name="iconFacebook" styles={iconBasicStyles} />
            <Icon name="iconInstagram" styles={iconBasicStyles} />
          </div>
          <div className={changeLang}>
            <ChangeLang />
          </div>
        </div>
      </div>
    </div>
  )
}
