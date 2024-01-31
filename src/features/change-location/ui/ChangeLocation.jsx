import { colorGreyDark } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'

import { location, textLocation } from './ChangeLocation.module.scss'

export function ChangeLocation() {
  const tempLocation = 'Ульяновск'

  return (
    <div className={location}>
      <Icon
        name="iconLocation"
        styles={{ width: '15px', height: '18px', color: colorGreyDark }}
      />
      <span className={textLocation}>{tempLocation}</span>
    </div>
  )
}
