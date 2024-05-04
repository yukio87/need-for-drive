import { getOrderPost } from '@entities/order'
import { Loader } from '@shared/ui/loaders'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'

import { defaultMapPosition } from '../consts/defaultMapPosition'
import { getMap } from '../model/slice'
import { ChangeView } from './components'
import { leafletContainer, mapContainer } from './Map.module.scss'

export function Map({ isLoadingAddresses, addresses }) {
  const { isMapStateReset } = useSelector(getMap)
  const { pointId } = useSelector(getOrderPost)

  const allAddresses = addresses?.map((item) => item.position)
  const selectedAddress = pointId.position

  return (
    <div className={mapContainer}>
      {isLoadingAddresses ? (
        <Loader size="40px" animation="grow" position="center" />
      ) : (
        <MapContainer
          center={defaultMapPosition}
          zoom={5}
          scrollWheelZoom={true}
          className={leafletContainer}
        >
          <ChangeView coords={pointId.id ? [selectedAddress] : allAddresses} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {!isMapStateReset &&
            addresses.map((point) => (
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
      )}
    </div>
  )
}
