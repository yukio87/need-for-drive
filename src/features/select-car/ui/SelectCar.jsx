/* eslint-disable no-unused-vars */
// отключил правило только временно
import { api } from '@shared/api/api'
import { urlCars, urlCategories } from '@shared/consts/urls'
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

  const {
    isLoading: isLoadingCategories,
    data: dataCategories,
    isError: isErrorCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => api(urlCategories, { method: 'get' }),
  })

  const receivedCars = dataCars?.data.data
  const receivedCategories = dataCategories?.data.data

  return (
    <div className={container}>
      <div className={inputContainer}>
        <RadioButton
          value="Все модели"
          id="Все модели"
          // onChange={console.log}
          isChecked={true}
        >
          Все модели
        </RadioButton>
        {receivedCategories?.map((item) => (
          <RadioButton
            key={item.id}
            value={item.id}
            id={item.id}
            // onChange={console.log}
          >
            {item.name}
          </RadioButton>
        ))}
      </div>
      <CarList cars={receivedCars} />
    </div>
  )
}
