import { routesPaths } from '@shared/consts/routesPaths'
import { useLocation } from 'react-router-dom'

import { buttonTextForNextPath } from '../../consts/buttonTextForNextPath.js'

export function useNavigateTo() {
  const { pathname } = useLocation()

  return Object.values(routesPaths).reduce(
    (acc, item, index, array) =>
      pathname.startsWith(item.split('/:')[0])
        ? {
            ...acc,
            nextPathName: array[index + 1],
            buttonText: buttonTextForNextPath[item],
          }
        : acc,
    {},
  )
}
