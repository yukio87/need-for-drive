import { ChangeLang } from '@features/change-lang'
import { Modal } from '@widgets/modal'

import { sidebar } from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <div className={sidebar}>
      <Modal />
      <ChangeLang />
    </div>
  )
}
