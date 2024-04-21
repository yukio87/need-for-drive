import moment from 'moment'

export function getNumberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const calcDateSubtraction = (startDate, endDate) => {
  const diff = moment.duration(moment(endDate).diff(moment(startDate)))

  const days = diff.asDays()
  const hours = diff.hours()
  const minutes = diff.minutes()

  const formattedDiff = `${Math.floor(days)}д ${hours}ч ${minutes}м`

  return formattedDiff
}
