import 'react-datepicker/dist/react-datepicker.css'

import {
  deleteDatePointPost,
  deleteRateUi,
  deleteRentalDurationUi,
  getOrderPost,
  setDatePointPost,
  setRentalDurationUi,
} from '@entities/order'
import { iconBasicStyles } from '@shared/consts/basicStyles'
import { Icon } from '@shared/ui/icon'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux'

import { minRentalDuration } from './consts/rentalDuration'
import { changeTimeFrom, changeTimeTo } from './lib/changeTime'
import {
  container,
  header,
  iconClearInput,
  input,
  inputs,
  inputWrapper,
} from './SelectRentalDuration.module.scss'

export function SelectRentalDuration() {
  const [now] = useState(new Date())
  const dispatch = useDispatch()
  const { dateFrom, dateTo } = useSelector(getOrderPost)

  useEffect(() => {
    dispatch(setRentalDurationUi({ dateFrom, dateTo }))
  }, [dispatch, dateFrom, dateTo])

  const handleChangeFrom = (date, event) => {
    dispatch(
      setDatePointPost({
        pointName: 'dateFrom',
        value: event ? changeTimeFrom(date, now, dateTo) : date?.getTime(),
      }),
    )
    if (dateTo)
      dispatch(setRentalDurationUi({ dateFrom: date?.getTime(), dateTo }))
    if (!date) dispatch(deleteRateUi())
  }

  const handleClickDeleteDateFrom = () => {
    dispatch(deleteRentalDurationUi())
    dispatch(deleteRateUi())
    dispatch(deleteDatePointPost({ pointName: 'dateFrom' }))
  }

  const handleChangeTo = (date, event) => {
    dispatch(
      setDatePointPost({
        pointName: 'dateTo',
        value: event ? changeTimeTo(date, now, dateFrom) : date?.getTime(),
      }),
    )
    if (dateFrom)
      dispatch(setRentalDurationUi({ dateFrom, dateTo: date?.getTime() }))
    if (!date) dispatch(deleteRateUi())
  }

  const handleClickDeleteDateTo = () => {
    dispatch(deleteRentalDurationUi())
    dispatch(deleteRateUi())
    dispatch(deleteDatePointPost({ pointName: 'dateTo' }))
  }

  const filterPassedTimeFrom = (passedTime) =>
    dateTo
      ? passedTime.getTime() > now.getTime() &&
        passedTime.getTime() <= dateTo - minRentalDuration
      : passedTime.getTime() > now.getTime()

  const filterPassedTimeTo = (passedTime) =>
    dateFrom
      ? passedTime.getTime() >= dateFrom + minRentalDuration
      : passedTime.getTime() >= now.getTime() + minRentalDuration

  return (
    <div className={container}>
      <p className={header}>Дата аренды</p>
      <div className={inputs}>
        <div className={inputWrapper}>
          {dateFrom && (
            <div
              onClick={handleClickDeleteDateFrom}
              className={iconClearInput}
              aria-hidden={true}
            >
              <Icon name="iconClearInput" styles={iconBasicStyles} />
            </div>
          )}
          <span>C</span>
          <DatePicker
            className={input}
            selected={dateFrom ? new Date(dateFrom) : null}
            onChange={handleChangeFrom}
            placeholderText="Введите дату и время"
            showTimeSelect
            dateFormat="dd.MM.yyyy HH:mm"
            timeFormat="HH:mm"
            minDate={now}
            maxDate={dateTo || null}
            filterTime={filterPassedTimeFrom}
            timeIntervals={5}
            // portalId="root-portal"
          />
        </div>
        <div className={inputWrapper}>
          {dateTo && (
            <div
              onClick={handleClickDeleteDateTo}
              className={iconClearInput}
              aria-hidden={true}
            >
              <Icon name="iconClearInput" styles={iconBasicStyles} />
            </div>
          )}
          <span>По</span>
          <DatePicker
            className={input}
            selected={dateTo ? new Date(dateTo) : null}
            onChange={handleChangeTo}
            placeholderText="Введите дату и время"
            showTimeSelect
            dateFormat="dd.MM.yyyy HH:mm"
            timeFormat="HH:mm"
            minDate={dateFrom || now}
            filterTime={filterPassedTimeTo}
            timeIntervals={5}
            // portalId="root-portal"
          />
        </div>
      </div>
    </div>
  )
}
