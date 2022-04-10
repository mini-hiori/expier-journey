import type { NextPage } from 'next'
import Logo from "../components/Logo";
import TrackList from "../components/TrackList";
import Credit from "../components/Credit";
import Information from "../components/Information";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <main className={"container-fluid " + styles.main}>
        <div className={styles.border}>
        <Logo />
        <Information />
        <TrackList />
        <Credit />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
