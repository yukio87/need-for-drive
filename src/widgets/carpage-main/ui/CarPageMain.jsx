import { SelectCar } from '@features/select-car'

import { container } from './CarPageMain.module.scss'

export function CarPageMain() {
  return (
    <div className={container}>
      <SelectCar />
    </div>
  )
}
