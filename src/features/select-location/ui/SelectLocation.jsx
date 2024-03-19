import { Map, resetMapState, setMapState } from '@entities/map'
import {
  deleteFullAddressUi,
  deleteOrderPointPost,
  setFullAddressUi,
  setOrderPointPost,
} from '@entities/order'
import { api } from '@shared/api/api'
import { urlAddress, urlCity } from '@shared/consts/urls'
import { Icon } from '@shared/ui/icon'
import { Loader } from '@shared/ui/loaders'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { iconBasicStyles } from '../consts/iconBasicStyles'
import {
  deleteLocationPoint,
  getLocation,
  setAddressesWithCoords,
  setLocationPoint,
} from '../model/slice'
import { EmptyLabelMsg } from './components'
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
  const { cityArr, addressArr, addressesWithCoords } = useSelector(getLocation)

  const {
    isLoading: isLoadingCities,
    data: dataCities,
    isError: isErrorCities,
    error: errorCities,
  } = useQuery({
    queryKey: ['cities'],
    queryFn: () => api(urlCity, { method: 'get' }),
  })

  const {
    isLoading: isLoadingAddresses,
    data: dataAddresses,
    isError: isErrorAddresses,
    error: errorAddresses,
  } = useQuery({
    queryKey: ['addresses', cityArr[0]?.id],
    queryFn: () => api(`${urlAddress}/${cityArr[0]?.id}`, { method: 'get' }),
    enabled: cityArr.length > 0,
  })

  useEffect(() => {
    if (dataAddresses?.data.data)
      dispatch(
        setAddressesWithCoords({
          curCity: cityArr[0].name,
          curAddresses: receivedAddresses,
        }),
      )
  }, [dispatch, cityArr, receivedAddresses, dataAddresses])

  const receivedCities = dataCities?.data.data

  const receivedAddresses = useMemo(
    () =>
      Array.isArray(dataAddresses?.data.data)
        ? dataAddresses?.data.data
        : [dataAddresses?.data.data],
    [dataAddresses?.data.data],
  )

  const handleOnChangeCity = (s) => {
    dispatch(setLocationPoint({ pointName: 'cityArr', value: s }))
    dispatch(deleteLocationPoint({ pointName: 'addressArr' }))
    dispatch(setOrderPointPost({ pointName: 'cityId', value: s }))
    if (s.length === 0) dispatch(deleteFullAddressUi())
    dispatch(setMapState())
  }

  const handleOnClickDeleteCity = () => {
    dispatch(deleteLocationPoint({ pointName: 'cityArr' }))
    dispatch(deleteLocationPoint({ pointName: 'addressArr' }))
    dispatch(deleteFullAddressUi())
    dispatch(deleteOrderPointPost({ pointName: 'cityId' }))
    dispatch(resetMapState())
  }

  const handleOnChangeAddress = (s) => {
    dispatch(setLocationPoint({ pointName: 'addressArr', value: s }))
    dispatch(setOrderPointPost({ pointName: 'pointId', value: s }))
    if (s.length > 0) dispatch(setFullAddressUi({ cityArr, addressArr: s }))
    if (s.length === 0) dispatch(deleteFullAddressUi())
  }

  const handleOnClickDeleteAddress = () => {
    dispatch(deleteLocationPoint({ pointName: 'addressArr' }))
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
                <EmptyLabelMsg isError={isErrorCities} error={errorCities} />
              )
            }
            selected={cityArr}
            inputProps={{ maxLength: 150 }}
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
            onFocus={() =>
              cityArr.length === 0 && toast.error('Выберите город')
            }
          >
            <Typeahead
              disabled={cityArr.length === 0}
              id="input-point"
              onChange={handleOnChangeAddress}
              options={dataAddresses ? addressesWithCoords : []}
              labelKey="address"
              placeholder="Начните вводить пункт ..."
              emptyLabel={
                isLoadingAddresses ? (
                  <Loader size="20px" />
                ) : (
                  <EmptyLabelMsg
                    isError={isErrorAddresses}
                    error={errorAddresses}
                  />
                )
              }
              selected={addressArr}
              inputProps={{ maxLength: 150 }}
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
      {!isLoadingAddresses && <p className={title}>Выбрать на карте:</p>}
      <Map isLoadingAddresses={isLoadingAddresses} />
    </div>
  )
}
