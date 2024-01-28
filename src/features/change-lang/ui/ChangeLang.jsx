import { changeLang } from './ChangeLang.module.scss'

export function ChangeLang() {
  const tempLanguage = 'Eng'

  return <div className={changeLang}>{tempLanguage}</div>
}
