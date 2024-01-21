import ImageFacebook from '@assets/facebook.svg'
import ImageInstagram from '@assets/instagram.svg'
import ImageMenu from '@assets/menu_btn.svg'
import ImageMenuClose from '@assets/menu_btn_close.svg'
import ImageTelegram from '@assets/telegram.svg'
import { useEffect, useState } from 'react'

import ChangeLang from '../../ui/ChangeLang'
import {
  changeLang,
  links,
  menu,
  menuClose,
  modalClose,
  modalOpen,
  socials,
  wrapper,
} from './AppModal.module.scss'

function AppModal() {
  const [isOpen, setIsOpen] = useState(() =>
    JSON.parse(window.sessionStorage.getItem('modalIsOpen')),
  )

  useEffect(() => {
    window.sessionStorage.setItem('modalIsOpen', isOpen)
  }, [isOpen])

  return (
    <>
      <div>
        {isOpen ? (
          <ImageMenuClose
            onClick={() => setIsOpen(false)}
            className={menuClose}
          />
        ) : (
          <ImageMenu onClick={() => setIsOpen(true)} className={menu} />
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
    </>
  )
}

export default AppModal
