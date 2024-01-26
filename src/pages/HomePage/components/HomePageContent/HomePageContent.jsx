import Footer from '../HomePageFooter/HomePageFooter'
import Header from '../HomePageHeader/HomePageHeader'
import Main from '../HomePageMain/HomePageMain'
import { content } from './HomePageContent.module.scss'

function HomePageContent() {
  return (
    <div className={content}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePageContent
