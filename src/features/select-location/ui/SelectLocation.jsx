import {
  changeCity,
  changePoint,
  deleteCity,
  deletePoint,
  getCityArr,
  getPointArr,
} from '@features/select-location'
import { colorBlack } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

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
  const cityArr = useSelector(getCityArr)
  const pointArr = useSelector(getPointArr)

  return (
    <div className={container}>
      <Form.Group className={form}>
        <Form.Label>Город</Form.Label>
        <Typeahead
          id="input-city"
          onChange={(s) => dispatch(changeCity(s))}
          options={fakeDataCities}
          placeholder="Начните вводить город ..."
          selected={cityArr}
        >
          {cityArr.length > 0 && (
            <div
              onClick={() => dispatch(deleteCity())}
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
            onChange={(s) => dispatch(changePoint(s))}
            options={fakeDataPoints}
            placeholder="Начните вводить пункт ..."
            selected={pointArr}
          >
            {pointArr.length > 0 && (
              <div
                onClick={() => dispatch(deletePoint())}
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
