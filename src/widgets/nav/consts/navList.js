import { routesPaths } from '@shared/consts/routesPaths'

const { pathLocationPage, pathModelPage, pathExtraPage, pathResultPage } =
  routesPaths

export const navList = [
  {
    navPath: pathLocationPage,
    navName: 'Местоположение',
  },
  {
    navPath: pathModelPage,
    navName: 'Модель',
  },
  {
    navPath: pathExtraPage,
    navName: 'Дополнительно',
  },
  {
    navPath: pathResultPage,
    navName: 'Итого',
  },
]
