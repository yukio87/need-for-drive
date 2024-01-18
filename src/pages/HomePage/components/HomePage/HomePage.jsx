import HomePageSlider from '../../../../modules/HomePageSlider/components/HomePageSlider/HomePageSlider'
import HomePageContent from '../HomePageContent/HomePageContent'
import { layout } from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={layout}>
      <HomePageContent />
      <HomePageSlider />
    </div>
  )
}

export default HomePage
