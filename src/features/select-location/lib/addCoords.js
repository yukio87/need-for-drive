import { cityCoords } from '../consts/cityCoords.js'

export const addCoords = (addresses, cityId) => {
  const receivedAddresses = Array.isArray(addresses.data.data)
    ? addresses.data.data
    : [addresses.data.data]

  return receivedAddresses.map((address, i) => {
    return {
      ...address,
      position: cityCoords[cityId.name][i],
    }
  })
}
