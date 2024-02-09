import { colorGreyDark } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'
import { NavLink } from 'react-router-dom'

import { nav, wrapper } from './Nav.module.scss'

export function Nav() {
  const iconBasicStyles = {
    width: '6px',
    height: '8px',
    color: colorGreyDark,
  }

  return (
    <div className={wrapper}>
      <div className={nav}>
        <NavLink to="/location">Местоположение</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to="/model">Модель</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to="/extra">Дополнительно</NavLink>
        <Icon name="iconArrow" styles={iconBasicStyles} />
        <NavLink to="/result">Итого</NavLink>
      </div>
    </div>
  )
}
