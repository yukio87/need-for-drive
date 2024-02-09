import { valuesItem } from './ValuesItem.module.scss'

export function ValuesItem({ item, index, array }) {
  const isLastItem = index + 1 === array.length

  return <span className={valuesItem}>{isLastItem ? item : `${item},`}</span>
}
