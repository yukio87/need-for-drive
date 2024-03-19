import { latLngBounds } from 'leaflet'
import { useMap } from 'react-leaflet'
import { useSelector } from 'react-redux'

import { defaultMapPosition } from '../../../consts/defaultMapPosition'
import { getMap } from '../../../model/slice'

export function ChangeView({ coords }) {
  const { isMapStateReset } = useSelector(getMap)
  const map = useMap()

  if (isMapStateReset) {
    map.setView(defaultMapPosition, 5)
    return null
  }

  const markerBounds = latLngBounds([])
  if (coords.length && coords.length > 0) {
    coords.forEach((coord) => {
      markerBounds.extend([coord.lat, coord.lng])
    })
    map.fitBounds(markerBounds)
  }

  return null
}
