/* eslint-disable no-unused-vars */
import { api } from '@shared/api/api'
import { urlCars } from '@shared/consts/urls'
import { RadioButton } from '@shared/ui/radio-button'
import { useQuery } from '@tanstack/react-query'

import { CarList } from './components/ui/CarList'
import { container, inputContainer } from './SelectCar.module.scss'

export function SelectCar() {
  const {
    isLoading: isLoadingCars,
    data: dataCars,
    isError: isErrorCars,
    error: errorCars,
  } = useQuery({
    queryKey: ['cars'],
    queryFn: () => api(urlCars, { method: 'get' }),
  })

  const receivedCars = dataCars?.data.data

  return (
    <div className={container}>
      <div className={inputContainer}>
        <RadioButton
          // onChange={() => console.log('change on all-cars')}
          id="all-cars"
          isChecked={true}
        >
          Все модели
        </RadioButton>
        <RadioButton
          // onChange={() => console.log('change on economy')}
          id="economy"
        >
          Эконом
        </RadioButton>
        <RadioButton
          // onChange={() => console.log('change on premium')}
          id="premium"
        >
          Премиум
        </RadioButton>
      </div>
      <CarList cars={receivedCars} />
    </div>
  )
}
