import { Error } from '@shared/ui/errors'

export function EmptyLabelMsg({ isError, error }) {
  return isError ? <Error message={error.message} /> : 'Совпадений не найдено.'
}
