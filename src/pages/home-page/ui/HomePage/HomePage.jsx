import { HomePageSlider } from '@widgets/homepage-slider'

import HomePageContent from '../HomePageContent/HomePageContent'
import { layout } from './HomePage.module.scss'

export function HomePage() {
  return (
    <div className={layout}>
      <HomePageContent />
      <HomePageSlider />
    </div>
  )
}
