import { api } from '@shared/api/api'
import { pathOrderPage, routesPaths } from '@shared/consts/routesPaths'
import { urlOrder } from '@shared/consts/urls'
import { getNumberWithSpaces } from '@shared/lib/format'
import { ModalConfirm } from '@shared/ui/modal-confirm'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { options } from '../consts/options'
import { getPriceRangeString } from '../lib/format'
import { useNavigateTo } from '../lib/hooks/useNavigateTo'
import { usePageDataIsFilled } from '../lib/hooks/usePageDataIsFilled'
import { getOrderPost } from '../model/orderPostSlice'
import { getOrderUi } from '../model/orderUiSlice'
import { OrderDetail } from './components'
import { orderContainer, orderStyles, priceStyles } from './Order.module.scss'

export function Order() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const orderUi = useSelector(getOrderUi)
  const orderPost = useSelector(getOrderPost)

  const { carId } = orderPost
  const { pathOrderPageWithId } = routesPaths

  const { isPending, mutate } = useMutation({
    mutationFn: () => api(urlOrder, { method: 'post', data: orderPost }),
    onSuccess: (data) => navigate(`${pathOrderPage}/${data.data.data.id}`),
    // onError: (err) => console.log(err),
  })

  const curPageDataIsFilled = usePageDataIsFilled()
  const { nextPathName, buttonText } = useNavigateTo()

  return (
    <>
      <ModalConfirm
        isOpen={isOpen}
        textAllowBtn={isPending ? 'Отправка...' : 'Подтвердить'}
        handleClickOnAllowBtn={mutate}
        handleClickOnDisallowBtn={() => setIsOpen(false)}
        disabledAllowBtn={isPending}
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
          disabled={
            nextPathName === pathOrderPageWithId ? false : !curPageDataIsFilled
          }
          type="button"
          onClick={() => {
            if (nextPathName === pathOrderPageWithId) setIsOpen(true)
            else navigate(nextPathName)
          }}
        >
          {buttonText}
        </button>
      </div>
    </>
  )
}
