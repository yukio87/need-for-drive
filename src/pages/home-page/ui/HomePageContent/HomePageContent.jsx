import HomePageFooter from '../HomePageFooter/HomePageFooter'
import HomePageHeader from '../HomePageHeader/HomePageHeader'
import HomePageMain from '../HomePageMain/HomePageMain'
import { content } from './HomePageContent.module.scss'

function HomePageContent() {
  return (
    <div className={content}>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </div>
  )
}

export default HomePageContent
