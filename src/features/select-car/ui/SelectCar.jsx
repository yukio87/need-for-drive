import { api } from '@shared/api/api'
import { urlCars, urlCategories } from '@shared/consts/urls'
import { Error } from '@shared/ui/errors'
import { Loader } from '@shared/ui/loaders'
import { RadioButton } from '@shared/ui/radio-button'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { CarList } from './components'
import { container, inputContainer } from './SelectCar.module.scss'

export function SelectCar() {
  const [filteredCars, setFilteredCars] = useState([])

  const { isLoading: isLoadingCars, data: dataCars } = useQuery({
    queryKey: ['cars'],
    queryFn: () => api(urlCars, { method: 'get' }),
    throwOnError: true,
  })

  const {
    isLoading: isLoadingCategories,
    data: dataCategories,
    isError: isErrorCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => api(urlCategories, { method: 'get' }),
    enabled: !!dataCars,
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
        {dataCategories && (
          <>
            <RadioButton
              name="category"
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
                name="category"
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
      {isLoadingCars ? (
        <Loader position="center" />
      ) : (
        <CarList cars={filteredCars.length > 0 ? filteredCars : receivedCars} />
      )}
    </div>
  )
}
