import ImageLocation from '../assets/icons/location.svg'
import {
  imageLocation,
  location,
  textLocation,
} from './ChangeLocation.module.scss'

export function ChangeLocation() {
  const tempLocation = 'Ульяновск'

  return (
    <div className={location}>
      <ImageLocation className={imageLocation} />
      <span className={textLocation}>{tempLocation}</span>
    </div>
  )
}
