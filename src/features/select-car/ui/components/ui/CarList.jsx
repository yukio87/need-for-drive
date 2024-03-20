import { CarCard } from '@entities/car-card'

import { carList, container } from './CarList.module.scss'

export function CarList({ cars }) {
  return (
    <div className={container}>
      <div className={carList}>
        {cars?.map((item) => (
          <CarCard car={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
