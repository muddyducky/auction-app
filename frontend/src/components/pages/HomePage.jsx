import styles from './Home.module.css';
import Footer from '../layout/Footer';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <img src="/hero.png" alt="hero-image" />
      <Footer/>
    </div>
  )
}
