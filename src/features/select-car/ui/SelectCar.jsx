import { api } from '@shared/api/api'
import { urlCars, urlCategories } from '@shared/consts/urls'
import { Error } from '@shared/ui/errors'
import { Loader } from '@shared/ui/loaders'
import { RadioButton } from '@shared/ui/radio-button'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { CarList } from './components/ui/CarList'
import { container, inputContainer } from './SelectCar.module.scss'

export function SelectCar() {
  const [filteredCars, setFilteredCars] = useState([])

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

  const handleChange = (value) => {
    setFilteredCars(
      receivedCars.filter((item) => item.categoryId.id === Number(value)),
    )
  }

  return (
    <div className={container}>
      <div className={inputContainer}>
        {isLoadingCategories && <Loader />}
        {isErrorCategories && <Error message={errorCategories.message} />}
        {!isLoadingCategories && !isErrorCategories && (
          <>
            <RadioButton
              value="all-cars"
              id="all-cars"
              handleChange={handleChange}
              defaultChecked={true}
            >
              Все модели
            </RadioButton>
            {receivedCategories.map((item) => (
              <RadioButton
                key={item.id}
                value={item.id}
                id={item.id}
                handleChange={handleChange}
              >
                {item.name}
              </RadioButton>
            ))}
          </>
        )}
      </div>
      {isLoadingCars && <Loader />}
      {isErrorCars && <Error error={errorCars} />}
      {!isLoadingCars && !isErrorCars && (
        <CarList cars={filteredCars.length > 0 ? filteredCars : receivedCars} />
      )}
    </div>
  )
}
