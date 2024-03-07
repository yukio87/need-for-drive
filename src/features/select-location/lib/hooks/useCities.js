import { api, urlCity } from '@shared/api/api'
import { useQuery } from '@tanstack/react-query'

export function useCities() {
  const {
    isLoading: isLoadingCities,
    data: dataCities,
    isError: isErrorCities,
    error: errorCities,
  } = useQuery({
    queryKey: ['cities'],
    queryFn: () => api(urlCity, { method: 'get' }),
  })

  return { isLoadingCities, dataCities, isErrorCities, errorCities }
}
