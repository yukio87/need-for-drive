import moment from 'moment'

import { minRentalDuration } from '../consts/rentalDuration.js'

export const changeTimeFrom = (date, now, dateTo) => {
  const dateWithCurrentTime = moment(date)
    .set({
      hour: moment(now).hour(),
      minute: moment(now).minute(),
      second: moment(now).second(),
    })
    .valueOf()

  return dateWithCurrentTime > dateTo - minRentalDuration
    ? dateTo - minRentalDuration
    : dateWithCurrentTime
}

export const changeTimeTo = (date, now, dateFrom) => {
  const dateWithCurrentTime = moment(date)
    .set({
      hour: moment(now).hour(),
      minute: moment(now).minute(),
      second: moment(now).second(),
    })
    .valueOf()

  if (dateWithCurrentTime < dateFrom + minRentalDuration)
    return dateFrom + minRentalDuration

  if (dateWithCurrentTime < now.getTime() + minRentalDuration)
    return now.getTime() + minRentalDuration

  return dateWithCurrentTime
}
