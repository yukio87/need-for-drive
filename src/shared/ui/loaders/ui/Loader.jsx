import { colorGreyDark } from '@shared/consts/colors'
import Spinner from 'react-bootstrap/Spinner'

export function Loader({ size, animation, variant, position }) {
  const containerStyles = {
    display: 'grid',
    height: '100%',
    width: '100%',
    color: colorGreyDark,
  }

  const spinnerStyles = {
    width: size,
    height: size,
    placeSelf: position,
  }

  return (
    <div style={containerStyles}>
      <Spinner style={spinnerStyles} animation={animation} variant={variant} />
    </div>
  )
}
