import ImageMenu from '@assets/menu_btn.svg'

import ChangeLang from '../../ui/ChangeLang'
import { imageMenu, sidebar } from './AppSidebar.module.scss'

function AppSidebar({ setIsOpen }) {
  return (
    <div className={sidebar}>
      <ImageMenu onClick={() => setIsOpen(true)} className={imageMenu} />
      <ChangeLang />
    </div>
  )
}

export default AppSidebar
