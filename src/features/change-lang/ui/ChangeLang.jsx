import { changeLang } from './ChangeLang.module.scss'

export function ChangeLang() {
  const tempLang = 'Eng'

  return <div className={changeLang}>{tempLang}</div>
}
