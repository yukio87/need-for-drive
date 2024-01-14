import HomePageSlider from '../../../../modules/HomePageSlider/components/HomePageSlider/HomePageSlider'
import HomePageContent from '../HomePageContent/HomePageContent'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.layout}>
      <HomePageContent />
      <HomePageSlider />
    </div>
  )
}

export default HomePage
