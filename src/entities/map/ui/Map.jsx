import { getLocation } from '@features/select-location'
import { Loader } from '@shared/ui/loaders'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'

import { defaultMapPosition } from '../consts/defaultMapPosition'
import { getMap } from '../model/slice'
import { ChangeView } from './components'
import { leafletContainer, loader, mapContainer } from './Map.module.scss'

export function Map({ isLoadingAddresses }) {
  const { addressArr, addressesWithCoords } = useSelector(getLocation)
  const { isMapStateReset } = useSelector(getMap)

  const allAddresses = addressesWithCoords.map((item) => item.position)
  const selectedAddress = addressArr[0]?.position

  if (isLoadingAddresses)
    return (
      <div className={loader}>
        <Loader size="40px" animation="grow" />
      </div>
    )

  return (
    <div className={mapContainer}>
      <MapContainer
        center={defaultMapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={leafletContainer}
      >
        <ChangeView
          coords={addressArr.length > 0 ? [selectedAddress] : allAddresses}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {!isMapStateReset &&
          addressesWithCoords.map((point) => (
            <Marker
              position={[point.position?.lat, point.position.lng]}
              key={point.position.lat}
            >
              <Popup>
                <span>
                  {point.cityId?.name}, {point.address}
                </span>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}
