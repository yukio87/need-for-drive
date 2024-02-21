import { content } from './Content.module.scss'

export function Content({ aside, main }) {
  return (
    <div className={content}>
      <main>{main}</main>
      <aside>{aside}</aside>
    </div>
  )
}
