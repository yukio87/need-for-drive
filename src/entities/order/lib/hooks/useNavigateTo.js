import { routesPaths } from '@shared/consts/routesPaths'
import { useLocation } from 'react-router-dom'

import { buttonTextForNextPath } from '../../consts/buttonTextForNextPath.js'

export function useNavigateTo() {
  const { pathname } = useLocation()

  return Object.values(routesPaths).reduce(
    (acc, item, index, array) =>
      item === pathname
        ? {
            ...acc,
            nextPathName: array[index + 1],
            buttonText: buttonTextForNextPath[item],
          }
        : acc,
    {},
  )
}
