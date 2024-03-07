import { Item } from '../Item/Item'
import { dots, opt, orderDetail, values } from './OrderDetail.module.scss'

export function OrderDetail({ children, option }) {
  return (
    <div className={orderDetail}>
      <span className={opt}>{option}</span>
      <span className={dots} />
      <div className={values}>
        {children.split('/').map((item, index, array) => (
          <Item item={item} index={index} array={array} key={item} />
        ))}
      </div>
    </div>
  )
}
