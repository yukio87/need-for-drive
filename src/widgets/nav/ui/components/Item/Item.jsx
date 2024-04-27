import { getDataIsFilledForPages } from '@entities/order'
import { Icon } from '@shared/ui/icon'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { iconBasicStyles } from './consts/iconBasicStyles'
import { filledData, filledPrevData, unfilledData } from './Item.module.scss'

export function Item({ navPath, navName, index, array }) {
  const dataIsFilledForPages = useSelector(getDataIsFilledForPages)

  const isLastItem = index + 1 === array.length
  const dataCurTabIsFilled = Object.values(dataIsFilledForPages)[index]
  const dataPrevTabIsFilled = Object.values(dataIsFilledForPages)[index - 1]

  return (
    <>
      <NavLink
        to={navPath}
        style={index === 0 ? { pointerEvents: 'auto' } : {}}
        className={`${dataCurTabIsFilled ? filledData : unfilledData} ${
          dataPrevTabIsFilled && filledPrevData
        }`}
        tabIndex={dataCurTabIsFilled ? '0' : '-1'}
      >
        {navName}
      </NavLink>
      {!isLastItem && <Icon name="iconArrow" styles={iconBasicStyles} />}
    </>
  )
}
