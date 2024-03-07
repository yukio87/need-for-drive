import Spinner from 'react-bootstrap/Spinner'

import { container, spinner } from './Loader.module.scss'

export function Loader({ size, animation, variant }) {
  return (
    <div className={container}>
      <Spinner
        style={{ width: size, height: size }}
        className={spinner}
        animation={animation}
        variant={variant}
      />
    </div>
  )
}
