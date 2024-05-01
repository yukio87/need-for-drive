import { Map, resetMapState, setMapState } from '@entities/map'
import {
  deleteFullAddressUi,
  deleteOrderPointPost,
  getOrderPost,
  setFullAddressUi,
  setOrderPointPost,
} from '@entities/order'
import { api } from '@shared/api/api'
import { urlAddress, urlCity } from '@shared/consts/urls'
import { Icon } from '@shared/ui/icon'
import { Loader } from '@shared/ui/loaders'
import { useQuery } from '@tanstack/react-query'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { iconBasicStyles } from '../consts/iconBasicStyles'
import { addCoords } from '../lib/addCoords'
import {
  container,
  form,
  formContainer,
  iconClearInput,
  title,
  typeheadWrapper,
} from './SelectLocation.module.scss'

export function SelectLocation() {
  const dispatch = useDispatch()
  const { cityId, pointId } = useSelector(getOrderPost)

  const { isLoading: isLoadingCities, data: dataCities } = useQuery({
    queryKey: ['cities'],
    queryFn: () => api(urlCity, { method: 'get' }),
    throwOnError: true,
  })

  const { isLoading: isLoadingAddresses, data: addresses } = useQuery({
    queryKey: ['addresses', cityId.id],
    queryFn: () => api(`${urlAddress}/${cityId.id}`, { method: 'get' }),
    enabled: !!cityId.id,
    select: (data) => addCoords(data, cityId),
    throwOnError: true,
  })

  const receivedCities = dataCities?.data.data

  const handleOnChangeCity = (s) => {
    dispatch(setOrderPointPost({ pointName: 'cityId', value: s }))
    if (!s.length) {
      dispatch(deleteFullAddressUi())
      dispatch(resetMapState())
    } else dispatch(setMapState())
  }

  const handleOnClickDeleteCity = () => {
    dispatch(deleteFullAddressUi())
    dispatch(deleteOrderPointPost({ pointName: 'cityId' }))
    dispatch(resetMapState())
  }

  const handleOnChangeAddress = (s) => {
    dispatch(setOrderPointPost({ pointName: 'pointId', value: s }))
    if (s.length) dispatch(setFullAddressUi({ cityObj: cityId, addressArr: s }))
    else dispatch(deleteFullAddressUi())
  }

  const handleOnClickDeleteAddress = () => {
    dispatch(deleteFullAddressUi())
    dispatch(deleteOrderPointPost({ pointName: 'pointId' }))
  }

  return (
    <div className={container}>
      <div className={formContainer}>
        <Form.Group className={form}>
          <Form.Label>Город</Form.Label>
          <Typeahead
            id="input-city"
            onChange={handleOnChangeCity}
            options={dataCities ? receivedCities : []}
            labelKey="name"
            placeholder="Начните вводить город ..."
            emptyLabel={
              isLoadingCities ? (
                <Loader size="20px" />
              ) : (
                'Совпадений не найдено.'
              )
            }
            selected={cityId.id ? [cityId] : []}
            inputProps={{ maxLength: 150 }}
          >
            {cityId.id && (
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
            onFocus={() => !cityId.id && toast.error('Выберите город')}
          >
            <Typeahead
              disabled={!cityId.id}
              id="input-point"
              onChange={handleOnChangeAddress}
              options={addresses || []}
              labelKey="address"
              placeholder="Начните вводить пункт ..."
              emptyLabel={
                isLoadingAddresses ? (
                  <Loader size="20px" />
                ) : (
                  'Совпадений не найдено.'
                )
              }
              selected={pointId.id ? [pointId] : []}
              inputProps={{ maxLength: 150 }}
            >
              {pointId.id && (
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
      <p className={title}>Выбрать на карте:</p>
      <Map isLoadingAddresses={isLoadingAddresses} addresses={addresses} />
    </div>
  )
}
