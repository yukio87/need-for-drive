import {
  getOrderPost,
  getOrderUi,
  setColorPost,
  setColorUi,
} from '@entities/order'
import { RadioButton } from '@shared/ui/radio-button'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { container, header, inputs } from './SelectColor.module.scss'

export function SelectColor() {
  const dispatch = useDispatch()
  const { carId } = useSelector(getOrderPost)
  const { color } = useSelector(getOrderUi)

  const handleChangeColor = (value) => {
    dispatch(setColorPost(value))
    dispatch(setColorUi(value))
  }

  useEffect(() => {
    if (carId.colors.length === 1) {
      dispatch(setColorPost(carId.colors[0]))
      dispatch(setColorUi(carId.colors[0]))
    }
  }, [carId.colors, dispatch])

  return (
    <div className={container}>
      <p className={header}>Цвет</p>
      <div className={inputs}>
        {carId.colors.length > 1 && (
          <RadioButton
            name="color"
            value="Любой"
            id="Любой"
            handleChange={handleChangeColor}
            checked={color === 'Любой'}
          >
            Любой
          </RadioButton>
        )}
        {carId.colors.map((item) => (
          <RadioButton
            key={item}
            name="color"
            value={item}
            id={item}
            handleChange={handleChangeColor}
            checked={color === item || carId.colors.length === 1}
          >
            {item}
          </RadioButton>
        ))}
      </div>
    </div>
  )
}
