import {
  millisecsInDay,
  millisecsInMonth,
  millisecsInWeek,
} from '@shared/consts/millisecsIn'

export const millisecsByRateTypeId = {
  1: millisecsInWeek,
  2: millisecsInMonth,
  3: millisecsInDay,
}
