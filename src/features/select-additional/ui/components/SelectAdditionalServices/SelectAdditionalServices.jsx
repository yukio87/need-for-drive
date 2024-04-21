import {
  getOrderPost,
  setServicePointPost,
  setServicePointUi,
} from '@entities/order'
import { Checkbox } from '@shared/ui/checkbox'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { serviceList } from './consts/serviceList'
import {
  container,
  header,
  inputs,
  inputWrapper,
} from './SelectAdditionalServices.module.scss'

export function SelectAdditionalServices() {
  const dispatch = useDispatch()
  const { rateId, ...rest } = useSelector(getOrderPost)

  const handleClick = () => !rateId.id && toast.error('Выберите основные опции')

  const handleChange = (isChecked, item) => {
    dispatch(
      setServicePointPost({
        pointName: item.id,
        isChecked,
        price: item.price,
      }),
    )
    dispatch(
      setServicePointUi({
        pointName: item.id,
        isChecked,
        price: item.price,
      }),
    )
  }

  return (
    <div className={container}>
      <p className={header}>Доп услуги</p>
      <div className={inputs}>
        {serviceList.map((item) => (
          <div
            key={item.id}
            className={inputWrapper}
            onClick={handleClick}
            aria-hidden={true}
          >
            <Checkbox
              id={item.id}
              disabled={!rateId.id}
              checked={rest[item.id]}
              handleChange={(isChecked) => handleChange(isChecked, item)}
            >{`${item.text}, ${item.price} ₽`}</Checkbox>
          </div>
        ))}
      </div>
    </div>
  )
}
