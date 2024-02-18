/* eslint-disable jsx-a11y/label-has-associated-control */
import { setCarPost, setCarUi } from '@entities/order'
import { useDispatch } from 'react-redux'

export function SelectCar() {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            dispatch(setCarPost(e.target.value))
            dispatch(setCarUi(e.target.value))
          }}
          type="radio"
          id="car#1"
          name="drone"
          value="car#1"
        />
        <label htmlFor="car#1">Car#1</label>
      </div>
      <div>
        <input
          onChange={(e) => {
            dispatch(setCarPost(e.target.value))
            dispatch(setCarUi(e.target.value))
          }}
          type="radio"
          id="car#2"
          name="drone"
          value="car#2"
        />
        <label htmlFor="car#2">Car#2</label>
      </div>
    </>
  )
}
