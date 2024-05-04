import moment from 'moment'

import { minRentalDuration } from '../consts/rentalDuration.js'

export const changeTime = (
  date,
  now,
  dateFrom,
  dateTo,
  isFromOperation = false,
) => {
  const isBeginningOfDay = moment(date).startOf('day').isSame(date)
  const dateWithCurrentTime = moment(date)
    .set({
      hour: moment(now).hour(),
      minute: moment(now).minute(),
      second: moment(now).second(),
    })
    .valueOf()

  if (!isBeginningOfDay) return date?.getTime()

  if (isFromOperation) {
    if (dateTo) {
      return dateWithCurrentTime > dateTo - minRentalDuration
        ? dateTo - minRentalDuration
        : dateWithCurrentTime
    }
  } else {
    if (dateFrom) {
      return dateWithCurrentTime < dateFrom + minRentalDuration
        ? dateFrom + minRentalDuration
        : dateWithCurrentTime
    }
    if (dateWithCurrentTime < now.getTime() + minRentalDuration) {
      return now.getTime() + minRentalDuration
    }
  }

  return dateWithCurrentTime
}
