/* eslint-disable jsx-a11y/label-has-associated-control */
import { getOrderUi, setCarPost, setCarUi } from '@entities/order'
import { useDispatch, useSelector } from 'react-redux'

export function SelectCar() {
  const dispatch = useDispatch()
  const { car } = useSelector(getOrderUi)

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
          name="car"
          value="car#1"
          checked={car === 'car#1'}
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
          name="car"
          value="car#2"
          checked={car === 'car#2'}
        />
        <label htmlFor="car#2">Car#2</label>
      </div>
    </>
  )
}
