import { colorGreyDark } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'

import { geolocation, textGeolocation } from './ChangeGeolocation.module.scss'

export function ChangeGeolocation() {
  const tempGeolocation = 'Ульяновск'

  return (
    <div className={geolocation}>
      <Icon
        name="iconLocation"
        styles={{ width: '15px', height: '18px', color: colorGreyDark }}
      />
      <span className={textGeolocation}>{tempGeolocation}</span>
    </div>
  )
}
