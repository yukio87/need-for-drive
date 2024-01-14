import { createContext, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'

import AppSidebar from '../../../../components/AppSidebar/AppSidebar'
import AppModal from '../../../../modules/AppModal/components/AppModal/AppModal'
import styles from './AppLayout.module.scss'

export const ModalContext = createContext()

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false)

  const modalContextValue = useMemo(
    () => ({
      setIsOpen,
    }),
    [],
  )

  return (
    <ModalContext.Provider value={modalContextValue}>
      <div className={styles['app-layout']}>
        {isOpen && <AppModal setIsOpen={setIsOpen} />}
        <AppSidebar setIsOpen={setIsOpen} />
        <Outlet />
      </div>
    </ModalContext.Provider>
  )
}

export default AppLayout
