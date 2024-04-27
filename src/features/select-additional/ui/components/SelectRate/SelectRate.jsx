import { getOrderPost, setRatePost, setRateUi } from '@entities/order'
import { api } from '@shared/api/api'
import { urlRates } from '@shared/consts/urls'
import { Loader } from '@shared/ui/loaders'
import { RadioButton } from '@shared/ui/radio-button'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { amountOfDaysByRateTypeId } from './consts/amountOfDaysByRateTypeId'
import {
  millisecsInDay,
  millisecsInMonth,
  millisecsInWeek,
} from './consts/millisecsIn'
import {
  container,
  header,
  inputs,
  inputWrapper,
} from './SelectRate.module.scss'

export function SelectRate() {
  const dispatch = useDispatch()
  const { dateFrom, dateTo, rateId } = useSelector(getOrderPost)

  const { isLoading: isLoadingRates, data: dataRates } = useQuery({
    queryKey: ['rates'],
    queryFn: () => api(urlRates, { method: 'get' }),
    throwOnError: true,
  })

  const rentalDuration = dateTo && dateFrom ? dateTo - dateFrom : undefined
  const receivedRates = dataRates?.data.data

  const disabledByRateTypeId = {
    1:
      rentalDuration < millisecsInWeek ||
      rentalDuration >= millisecsInMonth ||
      !rentalDuration,
    2: rentalDuration < millisecsInMonth || !rentalDuration,
    3: rentalDuration >= millisecsInWeek || !rentalDuration,
  }

  const handleChangeRate = (item) => {
    const roundedAmountOfDays = Math.round(rentalDuration / millisecsInDay) || 1
    const roundedPrice = Math.round(
      (roundedAmountOfDays / amountOfDaysByRateTypeId[item.rateTypeId.id]) *
        Number(item.price),
    )

    dispatch(setRatePost({ item, roundedPrice }))
    dispatch(setRateUi({ item, roundedPrice }))
  }

  const handleClick = (item) =>
    disabledByRateTypeId[item.rateTypeId.id] &&
    toast.error('Тариф не соответствует выбранной дате')

  return (
    <div className={container}>
      <p className={header}>Тариф</p>
      <div className={inputs}>
        {isLoadingRates ? (
          <Loader />
        ) : (
          receivedRates
            .sort((a, b) => Number(a.price) - Number(b.price))
            .map((item) => (
              <div
                key={item.id}
                className={inputWrapper}
                aria-hidden={true}
                onClick={() => handleClick(item)}
              >
                <RadioButton
                  name="rate"
                  id={item.id}
                  handleChange={() => handleChangeRate(item)}
                  checked={rateId.id === item.id}
                  disabled={disabledByRateTypeId[item.rateTypeId.id]}
                >{`${item.rateTypeId.name}, ${item.price} ₽`}</RadioButton>
              </div>
            ))
        )}
      </div>
    </div>
  )
}
