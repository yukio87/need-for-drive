import {
  SelectAdditionalServices,
  SelectColor,
  SelectRate,
  SelectRentalDuration,
} from './components'
import { container } from './SelectAdditional.module.scss'

export function SelectAdditional() {
  return (
    <div className={container}>
      <SelectColor />
      <SelectRentalDuration />
      <SelectRate />
      <SelectAdditionalServices />
    </div>
  )
}
