import { getOrderUi } from '@entities/order'
import { useSelector } from 'react-redux'

import { Item } from '../Item/Item'
import { options } from './consts/options'
import { dots, option, orderDetail, values } from './OrderDetail.module.scss'

export function OrderDetail({ orderArr }) {
  const orderUi = useSelector(getOrderUi)

  return orderArr.map(
    (key, i) =>
      orderUi[key] &&
      key !== 'price' && (
        <div className={orderDetail} key={key}>
          <span className={option}>{options[i]}</span>
          <span className={dots} />
          <div className={values}>
            {orderUi[key].split('/').map((item, index, array) => (
              <Item item={item} index={index} array={array} key={item} />
            ))}
          </div>
        </div>
      ),
  )
}
