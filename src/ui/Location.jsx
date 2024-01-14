import ImageLocation from '@assets/location.svg'

import styles from './Location.module.scss'

function Location() {
  return (
    <div className={styles.location}>
      <ImageLocation className={styles['image-location']} />
      <span className={styles['text-location']}>Ульяновск</span>
    </div>
  )
}

export default Location
