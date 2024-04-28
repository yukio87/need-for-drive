import { api } from '@shared/api/api'
import { pathOrderPage, routesPaths } from '@shared/consts/routesPaths'
import { urlOrder } from '@shared/consts/urls'
import { getNumberWithSpaces } from '@shared/lib/format'
import { ModalConfirm } from '@shared/ui/modal-confirm'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { options } from '../consts/options'
import { getPriceRangeString } from '../lib/format'
import { useDisableBtn } from '../lib/hooks/useDisableBtn'
import { useNavigateTo } from '../lib/hooks/useNavigateTo'
import { getOrderPost } from '../model/orderPostSlice'
import { getOrderUi } from '../model/orderUiSlice'
import { OrderDetail } from './components'
import {
  btn,
  cancelBtn,
  orderContainer,
  orderStyles,
  priceStyles,
} from './Order.module.scss'

export function Order() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const orderUi = useSelector(getOrderUi)
  const orderPost = useSelector(getOrderPost)
  const { pathname } = useLocation()

  const { isPending: isCreating, mutate: createOrder } = useMutation({
    mutationFn: () => api(urlOrder, { method: 'post', data: orderPost }),
    onSuccess: (data) => navigate(`${pathOrderPage}/${data.data.data.id}`),
    onError: () => toast.error('Ошибка при отправке данных...'),
  })

  const isDisabledBtn = useDisableBtn()
  const { nextPathName, buttonText } = useNavigateTo()

  const { carId } = orderPost
  const { pathOrderPageWithId, pathResultPage } = routesPaths
  const isOrderPage = pathname.startsWith(pathOrderPageWithId.split('/:')[0])
  const isResultPage = pathname === pathResultPage

  const handleClick = () => {
    if (isResultPage) setIsOpen(true)
    else navigate(nextPathName)
  }

  return (
    <>
      <ModalConfirm
        isOpen={isOpen}
        textAllowBtn={isCreating ? 'Подтверждение...' : 'Подтвердить'}
        handleClickOnAllowBtn={createOrder}
        handleClickOnDisallowBtn={() => setIsOpen(false)}
        disabledAllowBtn={isCreating}
      />
      <div className={orderStyles}>
        <h5>Ваш заказ</h5>
        <div className={orderContainer}>
          {Object.keys(orderUi).map(
            (orderPoint, i) =>
              orderUi[orderPoint] &&
              orderPoint !== 'price' && (
                <OrderDetail option={options[i]} key={orderPoint}>
                  {orderUi[orderPoint]}
                </OrderDetail>
              ),
          )}
        </div>
        {Object.keys(carId).length > 0 && (
          <p className={priceStyles}>
            Цена:{' '}
            {getNumberWithSpaces(orderUi.price) ||
              getPriceRangeString(carId.priceMin, carId.priceMax)}{' '}
            ₽
          </p>
        )}
        <button
          className={isOrderPage ? cancelBtn : btn}
          disabled={isDisabledBtn}
          type="button"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </>
  )
}
