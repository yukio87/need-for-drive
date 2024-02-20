import { routesPaths } from '@shared/consts/routesPaths'

const {
  pathLocationPage,
  pathCarPage,
  pathExtraPage,
  pathResultPage,
  pathConfirmedPage,
} = routesPaths

export const buttonTextForNextPath = {
  [pathLocationPage]: 'Выбрать модель',
  [pathCarPage]: 'Дополнительно',
  [pathExtraPage]: 'Итого',
  [pathResultPage]: 'Заказать',
  [pathConfirmedPage]: 'Отменить',
}
