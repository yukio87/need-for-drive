import { dots, option, orderDetail, values } from './OrderDetail.module.scss'
import { ValuesItem } from './ValuesItem'

// const data = {
//   option: 'цвет', // string
//   values: ['голубой'], // array
// }

export function OrderDetail({ data }) {
  return (
    <div className={orderDetail}>
      <span className={option}>{data.option}</span>
      <span className={dots} />

      <div className={values}>
        {data.values.map((item, index, array) => (
          <ValuesItem item={item} index={index} array={array} key={item} />
        ))}
      </div>
    </div>
  )
}
