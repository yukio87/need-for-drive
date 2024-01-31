import IconFacebook from '../assets/icons/facebook.svg'
import IconClose from '../assets/icons/icon-close.svg'
import IconOpen from '../assets/icons/icon-open.svg'
import IconInstagram from '../assets/icons/instagram.svg'
import IconLocation from '../assets/icons/location.svg'
import IconTelegram from '../assets/icons/telegram.svg'

export function Icon({ name, styles }) {
  const icons = {
    iconClose: <IconClose {...styles} />,
    iconOpen: <IconOpen {...styles} />,
    iconFacebook: <IconFacebook {...styles} />,
    iconInstagram: <IconInstagram {...styles} />,
    iconTelegram: <IconTelegram {...styles} />,
    iconLocation: <IconLocation {...styles} />,
  }

  return icons[name]
}
