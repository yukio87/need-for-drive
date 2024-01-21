import { useSelector } from 'react-redux'

import { getDevice } from '../../store/appSlice'
import ChangeLang from '../../ui/ChangeLang'
import AppModal from '../AppModal/AppModal'
import { sidebar } from './AppSidebar.module.scss'

function AppSidebar() {
  const device = useSelector(getDevice)

  return (
    <div className={sidebar}>
      {device !== 'mobile' && <AppModal />}
      <ChangeLang />
    </div>
  )
}

export default AppSidebar
