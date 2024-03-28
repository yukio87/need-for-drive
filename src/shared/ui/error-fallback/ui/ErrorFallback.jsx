export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Что-то пошло не так...</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} type="button">
        Повторить
      </button>
    </div>
  )
}
