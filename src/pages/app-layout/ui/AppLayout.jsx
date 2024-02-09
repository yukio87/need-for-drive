import { getDevice } from '@app/store/appSlice'
import { Modal } from '@widgets/modal'
import { Sidebar } from '@widgets/sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { appLayout } from './AppLayout.module.scss'

export function AppLayout() {
  const device = useSelector(getDevice)

  return (
    <div className={appLayout}>
      {device === 'mobile' ? <Modal /> : <Sidebar />}
      <Outlet />
    </div>
  )
}
