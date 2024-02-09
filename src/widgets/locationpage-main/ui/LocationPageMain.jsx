import { Map } from '@entities/map'
import { SelectLocation } from '@features/select-location'

import { container, title } from './LocationPageMain.module.scss'

export function LocationPageMain() {
  return (
    <div className={container}>
      <SelectLocation />
      <p className={title}>Выбрать на карте:</p>
      <Map />
    </div>
  )
}
