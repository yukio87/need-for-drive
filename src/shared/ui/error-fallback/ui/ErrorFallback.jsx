import { container } from './ErrorFallback.module.scss'

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className={container}>
      <h6>Что-то пошло не так...</h6>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary} type="button">
        Повторить
      </button>
    </div>
  )
}
