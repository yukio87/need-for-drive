import { latLngBounds } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import { leafletContainer, mapContainer } from './Map.module.scss'

// fake data
const fakePoints = [
  {
    cityName: 'Ульяновск',
    pointName: 'point #15',
    position: {
      lat: 54.31995,
      lng: 48.38425,
    },
    id: 1538,
  },
  {
    cityName: 'Ульяновск',
    pointName: 'point #16',
    position: {
      lat: 54.30442,
      lng: 48.3176,
    },
    id: 1854,
  },
  {
    cityName: 'Ульяновск',
    pointName: 'point #17',
    position: {
      lat: 54.27469,
      lng: 48.33473,
    },
    id: 1365,
  },
  {
    cityName: 'Ульяновск',
    pointName: 'point #18',
    position: {
      lat: 54.30864,
      lng: 48.3956,
    },
    id: 1738,
  },
]

const fakeMarkers = fakePoints.map((point) => point.position)

export function Map() {
  // const [mapPosition, setMapPosition] = useState([55.75404, 37.62063])

  return (
    <div className={mapContainer}>
      <MapContainer
        // center={mapPosition}
        zoom={14}
        scrollWheelZoom={true}
        className={leafletContainer}
      >
        <ChangeView markers={fakeMarkers} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {fakePoints.map((point) => (
          <Marker
            position={[point.position.lat, point.position.lng]}
            key={point.id}
          >
            <Popup>
              <span>{point.pointName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

function ChangeView({ markers }) {
  const map = useMap()
  // map.setView(position)

  const markerBounds = latLngBounds([])
  if (markers.length && markers.length > 0) {
    markers.forEach((marker) => {
      markerBounds.extend([marker.lat, marker.lng])
    })
    map.fitBounds(markerBounds)
  }
  return null
}
