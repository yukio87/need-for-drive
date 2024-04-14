import { getOrderPost, setRatePost, setRateUi } from '@entities/order'
import { api } from '@shared/api/api'
import { millisecsInMonth, millisecsInWeek } from '@shared/consts/millisecsIn'
import { urlRates } from '@shared/consts/urls'
import { Loader } from '@shared/ui/loaders'
import { RadioButton } from '@shared/ui/radio-button'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

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

  const rentalDuration = dateTo - dateFrom
  const receivedRates = dataRates?.data.data

  const disabledByRateTypeName = {
    Неделя:
      rentalDuration < millisecsInWeek ||
      rentalDuration >= millisecsInMonth ||
      !rentalDuration,
    Месяц: rentalDuration < millisecsInMonth || !rentalDuration,
    Сутки: rentalDuration >= millisecsInWeek || !rentalDuration,
  }

  const handleChangeRate = (item) => {
    dispatch(setRatePost(item))
    dispatch(setRateUi(item))
  }

  const handleClick = (item) =>
    disabledByRateTypeName[item.rateTypeId.name] &&
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
                  disabled={disabledByRateTypeName[item.rateTypeId.name]}
                >{`${item.rateTypeId.name}, ${item.price} ₽`}</RadioButton>
              </div>
            ))
        )}
      </div>
    </div>
  )
}
