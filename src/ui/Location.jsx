import ImageLocation from '@assets/location.svg'

import { imageLocation, location, textLocation } from './Location.module.scss'

function Location() {
  return (
    <div className={location}>
      <ImageLocation className={imageLocation} />
      <span className={textLocation}>Ульяновск</span>
    </div>
  )
}

export default Location
