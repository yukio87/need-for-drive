import { getDevice } from '@app/store/appSlice'
import { ErrorFallback } from '@shared/ui/error-fallback'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Modal } from '@widgets/modal'
import { Sidebar } from '@widgets/sidebar'
import { ErrorBoundary } from 'react-error-boundary'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { appLayout } from './AppLayout.module.scss'

export function AppLayout() {
  const device = useSelector(getDevice)

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <div className={appLayout}>
            {device === 'mobile' ? <Modal /> : <Sidebar />}
            <Outlet />
          </div>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
