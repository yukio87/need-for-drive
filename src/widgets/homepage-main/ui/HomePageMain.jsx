import { NavLink } from 'react-router-dom'

import { content, main } from './HomePageMain.module.scss'

export function HomePageMain() {
  return (
    <main className={main}>
      <div className={content}>
        <h1>Каршеринг</h1>
        <h1>Need for drive</h1>
        <p>Поминутная аренда авто твоего города</p>
      </div>
      <NavLink to="/location">Забронировать</NavLink>
    </main>
  )
}
