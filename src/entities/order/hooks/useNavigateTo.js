import { routesPaths } from '@shared/consts/routesPaths'
import { useLocation } from 'react-router-dom'

export function useNavigateTo() {
  const { pathname } = useLocation()
  const {
    pathLocationPage,
    pathCarPage,
    pathExtraPage,
    pathResultPage,
    pathConfirmedPage,
  } = routesPaths

  const pathNames = [
    pathLocationPage,
    pathCarPage,
    pathExtraPage,
    pathResultPage,
    pathConfirmedPage,
  ]

  let nextPath

  pathNames.forEach((item, index) => {
    let buttonText

    if (item === pathLocationPage) buttonText = 'Выбрать модель'
    if (item === pathCarPage) buttonText = 'Дополнительно'
    if (item === pathExtraPage) buttonText = 'Итого'
    if (item === pathResultPage) buttonText = 'Заказать'
    if (item === pathConfirmedPage) buttonText = 'Отменить'

    if (item === pathname) {
      nextPath = {
        nextPathName: pathNames[index + 1],
        buttonText,
      }
    }
  })

  return nextPath
}
