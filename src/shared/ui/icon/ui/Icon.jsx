import IconClose from '../assets/icons/icon-close.svg'
import IconOpen from '../assets/icons/icon-open.svg'

export function Icon({ name, styles }) {
  const icons = {
    iconClose: <IconClose {...styles} />,
    iconOpen: <IconOpen {...styles} />,
  }

  return icons[name]
}
