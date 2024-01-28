import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import { HomePageMain } from '@widgets/homepage-main'
import { HomePageSlider } from '@widgets/homepage-slider'

import { content, layout } from './HomePage.module.scss'

export function HomePage() {
  return (
    <div className={layout}>
      <div className={content}>
        <Header />
        <HomePageMain />
        <Footer />
      </div>
      <HomePageSlider />
    </div>
  )
}
