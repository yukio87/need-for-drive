import { getLang, toggleLang } from '@features/change-lang'
import { useDispatch, useSelector } from 'react-redux'

import { changeLang } from './ChangeLang.module.scss'

export function ChangeLang() {
  const dispath = useDispatch()
  const lang = useSelector(getLang)

  return (
    <div
      className={changeLang}
      onClick={() => dispath(toggleLang())}
      aria-hidden="true"
    >
      {lang === 'ru' ? 'Eng' : 'Рус'}
    </div>
  )
}
