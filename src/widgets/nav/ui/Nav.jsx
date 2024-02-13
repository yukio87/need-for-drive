import { colorGreyDark } from '@shared/consts/colors'
import { routesPaths } from '@shared/consts/routesPaths'
import { Icon } from '@shared/ui/icon'
import { NavLink } from 'react-router-dom'

import { nav, wrapper } from './Nav.module.scss'

export function Nav() {
  const { pathLocationPage, pathModelPage, pathExtraPage, pathResultPage } =
    routesPaths

  const iconBasicStyles = {
    width: '6px',
    height: '8px',
    color: colorGreyDark,
  }

  return (
    <div className={wrapper}>
      <div className={nav}>
        <NavLink to={pathLocationPage}>Местоположение</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to={pathModelPage}>Модель</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to={pathExtraPage}>Дополнительно</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to={pathResultPage}>Итого</NavLink>
      </div>
    </div>
  )
}
