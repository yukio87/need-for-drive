import { api, urlAddress } from '@shared/api/api'
import { useQuery } from '@tanstack/react-query'

export function useAddresses(cityId, isAllowed) {
  const {
    isLoading: isLoadingAddresses,
    data: dataAddresses,
    isError: isErrorAddresses,
    error: errorAddresses,
  } = useQuery({
    queryKey: ['addresses', cityId],
    queryFn: () => api(`${urlAddress}/${cityId}`, { method: 'get' }),
    enabled: isAllowed,
  })

  return { isLoadingAddresses, dataAddresses, isErrorAddresses, errorAddresses }
}
