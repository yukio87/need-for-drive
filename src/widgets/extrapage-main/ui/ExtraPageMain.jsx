import { SelectAdditional } from '@features/select-additional'
import { ErrorFallback } from '@shared/ui/error-fallback'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

export function ExtraPageMain() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <SelectAdditional />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
