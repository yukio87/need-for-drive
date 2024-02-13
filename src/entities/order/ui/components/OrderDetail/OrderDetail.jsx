import { dots, opt, orderDetail, values } from './OrderDetail.module.scss'

export function OrderDetail({ children, option }) {
  return (
    <div className={orderDetail}>
      <span className={opt}>{option}</span>
      <span className={dots} />
      <div className={values}>{children}</div>
    </div>
  )
}
