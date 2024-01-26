import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import AppModal from '../../../../components/AppModal/AppModal'
import AppSidebar from '../../../../components/AppSidebar/AppSidebar'
import { getDevice } from '../../../../store/appSlice'
import { appLayout } from './AppLayout.module.scss'

function AppLayout() {
  const device = useSelector(getDevice)

  return (
    <div className={appLayout}>
      {device === 'mobile' ? <AppModal /> : <AppSidebar />}
      <Outlet />
    </div>
  )
}

export default AppLayout
