/* eslint-disable jsx-a11y/label-has-associated-control */
// отключил правило только временно
// но на самом деле я не понимаю почему здесь eslint ругается, я же связал input и label с попощью атрибута htmlFor
import { getOrderUi, setColorPost, setColorUi } from '@entities/order'
import { useDispatch, useSelector } from 'react-redux'

export function SelectColor() {
  const dispatch = useDispatch()
  const { color } = useSelector(getOrderUi)

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            dispatch(setColorPost(e.target.value))
            dispatch(setColorUi(e.target.value))
          }}
          type="radio"
          id="white"
          name="color"
          value="white"
          checked={color === 'white'}
        />
        <label htmlFor="white">White</label>
      </div>
      <div>
        <input
          onChange={(e) => {
            dispatch(setColorPost(e.target.value))
            dispatch(setColorUi(e.target.value))
          }}
          type="radio"
          id="black"
          name="color"
          value="black"
          checked={color === 'black'}
        />
        <label htmlFor="black">Black</label>
      </div>
    </>
  )
}
