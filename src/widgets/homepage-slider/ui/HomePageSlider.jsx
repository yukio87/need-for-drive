import Carousel from 'react-bootstrap/Carousel'

import {
  buttonItem1,
  buttonItem2,
  buttonItem3,
  buttonItem4,
  carouselItem1,
  carouselItem2,
  carouselItem3,
  carouselItem4,
  content,
  slider,
} from './HomePageSlider.module.scss'

export function HomePageSlider() {
  return (
    <div className={slider}>
      <Carousel interval={3000} pause={false}>
        <Carousel.Item className={carouselItem1}>
          <div className={content}>
            <h2>Бесплатная парковка</h2>
            <p>
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <button className={buttonItem1} type="button">
              Подробнее
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item className={carouselItem2}>
          <div className={content}>
            <h2>Страховка</h2>
            <p>Полная страховка страховка автомобиля</p>
            <button className={buttonItem2} type="button">
              Подробнее
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item className={carouselItem3}>
          <div className={content}>
            <h2>Бензин</h2>
            <p>Полный бак на любой заправке города за наш счёт</p>
            <button className={buttonItem3} type="button">
              Подробнее
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item className={carouselItem4}>
          <div className={content}>
            <h2>Обслуживание</h2>
            <p>Автомобиль проходит еженедельное ТО</p>
            <button className={buttonItem4} type="button">
              Подробнее
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
