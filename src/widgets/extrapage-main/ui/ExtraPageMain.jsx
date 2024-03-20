import { SelectColor } from '@features/select-color'

import { container } from './ExtraPageMain.module.scss'

export function ExtraPageMain() {
  return (
    <div className={container}>
      <SelectColor />
    </div>
  )
}
