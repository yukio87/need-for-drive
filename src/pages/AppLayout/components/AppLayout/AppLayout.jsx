import { createContext } from 'react'
import { Outlet } from 'react-router-dom'

import AppSidebar from '../../../../components/AppSidebar/AppSidebar'
import { appLayout } from './AppLayout.module.scss'

export const ModalContext = createContext()

function AppLayout() {
  return (
    <div className={appLayout}>
      <AppSidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout
