import {
  deleteFullAddressUi,
  deleteOrderPointPost,
  setFullAddressUi,
  setOrderPointPost,
} from '@entities/order'
import { colorBlack } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import {
  container,
  form,
  iconClearInput,
  typeheadWrapper,
} from './SelectLocation.module.scss'

// Fake data
const fakeDataCities = [
  'Ульяновск',
  'Казань',
  'Самара',
  'Санкт-Петербург',
  'Москва',
  'Екатеринбург',
]

// Fake data
const fakeDataPoints = [
  'Крымова 63',
  'Автозаводская 8',
  'Локомотивная 63',
  'Гончарова 1',
]

const iconBasicStyles = {
  width: '8px',
  height: '8px',
  color: colorBlack,
}

export function SelectLocation() {
  const dispatch = useDispatch()
  const [cityArr, setCityArr] = useState([])
  const [addressArr, setAddressArr] = useState([])

  const handleOnChangeCity = (s) => {
    setCityArr(s)
    setAddressArr([])
    dispatch(setOrderPointPost({ pointName: 'cityArr', value: s }))
    if (s.length === 0) dispatch(deleteFullAddressUi())
  }

  const handleOnClickDeleteCity = () => {
    setCityArr([])
    setAddressArr([])
    dispatch(deleteFullAddressUi())
    dispatch(deleteOrderPointPost({ pointName: 'cityArr' }))
  }

  const handleOnChangeAddress = (s) => {
    setAddressArr(s)
    dispatch(setOrderPointPost({ pointName: 'addressArr', value: s }))
    dispatch(setFullAddressUi({ cityArr, addressArr: s }))
    if (s.length === 0) dispatch(deleteFullAddressUi())
  }

  const handleOnClickDeleteAddress = () => {
    setAddressArr([])
    dispatch(deleteFullAddressUi())
    dispatch(deleteOrderPointPost({ pointName: 'addressArr' }))
  }

  return (
    <div className={container}>
      <Form.Group className={form}>
        <Form.Label>Город</Form.Label>
        <Typeahead
          id="input-city"
          onChange={handleOnChangeCity}
          options={fakeDataCities}
          placeholder="Начните вводить город ..."
          selected={cityArr}
        >
          {cityArr.length > 0 && (
            <div
              onClick={handleOnClickDeleteCity}
              className={iconClearInput}
              aria-hidden={true}
            >
              <Icon name="iconClearInput" styles={iconBasicStyles} />
            </div>
          )}
        </Typeahead>
      </Form.Group>

      <Form.Group className={form}>
        <Form.Label>Пункт выдачи</Form.Label>
        <div
          className={typeheadWrapper}
          onFocus={() => cityArr.length === 0 && toast.error('Выберите город')}
        >
          <Typeahead
            disabled={cityArr.length === 0}
            id="input-point"
            onChange={handleOnChangeAddress}
            options={fakeDataPoints}
            placeholder="Начните вводить пункт ..."
            selected={addressArr}
          >
            {addressArr.length > 0 && (
              <div
                onClick={handleOnClickDeleteAddress}
                className={iconClearInput}
                aria-hidden={true}
              >
                <Icon name="iconClearInput" styles={iconBasicStyles} />
              </div>
            )}
          </Typeahead>
        </div>
      </Form.Group>
    </div>
  )
}
