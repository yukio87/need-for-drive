import { routesPaths } from '@shared/consts/routesPaths'

const { pathLocationPage, pathCarPage, pathExtraPage, pathResultPage } =
  routesPaths

export const navList = [
  {
    navPath: pathLocationPage,
    navName: 'Местоположение',
  },
  {
    navPath: pathCarPage,
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
