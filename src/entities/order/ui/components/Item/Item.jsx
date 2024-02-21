export function Item({ item, index, array }) {
  const isLastItem = index + 1 === array.length

  return <span>{isLastItem ? item : `${item},`}</span>
}
