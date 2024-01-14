import Footer from '../HomePageFooter/HomePageFooter'
import Header from '../HomePageHeader/HomePageHeader'
import Main from '../HomePageMain/HomePageMain'
import styles from './HomePageContent.module.scss'

function HomePageContent() {
  return (
    <div className={styles.content}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePageContent
