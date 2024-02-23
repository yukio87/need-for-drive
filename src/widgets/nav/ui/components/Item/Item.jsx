import { colorGreyDark } from '@shared/consts/colors'
import { Icon } from '@shared/ui/icon'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getDataIsFilledForPages } from '../../../lib/selector'
import { filledData, filledPrevData, unfilledData } from './Item.module.scss'

const iconBasicStyles = {
  width: '6px',
  height: '8px',
  color: colorGreyDark,
}

export function Item({ navPath, navName, index, array }) {
  const dataIsFilledForPages = useSelector(getDataIsFilledForPages)

  const isLastItem = index + 1 === array.length
  const dataCurTabIsFilled = Object.values(dataIsFilledForPages)[index]
  const dataPrevTabIsFilled = Object.values(dataIsFilledForPages)[index - 1]

  return (
    <>
      <NavLink
        to={navPath}
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
