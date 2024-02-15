import { colorGreyDark } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'
import { NavLink } from 'react-router-dom'

const iconBasicStyles = {
  width: '6px',
  height: '8px',
  color: colorGreyDark,
}

export function Item({ navPath, navName, index, array }) {
  const isLastItem = index + 1 === array.length

  if (isLastItem) return <NavLink to={navPath}>{navName}</NavLink>

  return (
    <>
      <NavLink to={navPath}>{navName}</NavLink>
      <Icon name="iconArrow" styles={iconBasicStyles} />
    </>
  )
}
