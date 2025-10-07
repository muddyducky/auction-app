import PageRoutes from "../routes/PageRoutes.jsx";
import styles from './Body.module.css'
import HomePage from '../pages/HomePage'

export default function Body() {
  return (
    <div className={styles.bodyContainer}>
      
      <PageRoutes /> 
    </div>
  )
}
