import IconClose from '../assets/icons/icon-close.svg'
import IconOpen from '../assets/icons/icon-open.svg'

export function Icon({ name, svgProps }) {
  const icons = {
    // eslint-disable-next-line react/jsx-props-no-spreading
    iconClose: <IconClose {...svgProps} />,
    // eslint-disable-next-line react/jsx-props-no-spreading
    iconOpen: <IconOpen {...svgProps} />,
  }

  return icons[name]
}
