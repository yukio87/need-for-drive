import { SelectCar } from '@features/select-car'
import { ErrorFallback } from '@shared/ui/error-fallback'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

export function CarPageMain() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <SelectCar />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
