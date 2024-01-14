import { Link } from 'react-router-dom'

import styles from './HomePageMain.module.scss'

function HomePageMain() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Каршеринг</h1>
        <h1>Need for drive</h1>
        <p>Поминутная аренда авто твоего города</p>
      </div>
      <Link to="/location">Забронировать</Link>
    </main>
  )
}

export default HomePageMain
