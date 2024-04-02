/* eslint-disable react/no-unstable-nested-components */
// отключил это правило только временно
import { SelectCar } from '@features/select-car'
// import { ErrorFallback } from '@shared/ui/error-fallback'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

export function CarPageMain() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button onClick={() => resetErrorBoundary()} type="button">
                Try again
              </button>
            </div>
          )}
        >
          <SelectCar />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
