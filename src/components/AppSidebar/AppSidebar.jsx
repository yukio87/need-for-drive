import ChangeLang from '../../ui/ChangeLang'
import AppModal from '../AppModal/AppModal'
import { sidebar } from './AppSidebar.module.scss'

function AppSidebar() {
  return (
    <div className={sidebar}>
      <AppModal />
      <ChangeLang />
    </div>
  )
}

export default AppSidebar
