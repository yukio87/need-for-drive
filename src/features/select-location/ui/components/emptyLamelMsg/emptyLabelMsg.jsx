export function EmptyLabelMsg({ isError, error }) {
  return isError ? (
    <span style={{ color: 'red' }}>{error.message}</span>
  ) : (
    'Совпадений не найдено.'
  )
}
