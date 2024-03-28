import { SelectCar } from '@features/select-car'
import { ErrorFallback } from '@shared/ui/error-fallback'
import { ErrorBoundary } from 'react-error-boundary'

export function CarPageMain() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SelectCar />
    </ErrorBoundary>
  )
}
