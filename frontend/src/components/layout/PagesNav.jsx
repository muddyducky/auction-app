import { NavLink } from 'react-router-dom';
import styles from './PagesNav.module.css';

export default function PagesNav() {
  return (
    <div className={styles.pageContainer}>
      <nav>
        <img src='/logo.png' alt="logo" />
        <h1>AUCTION ROOM</h1>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/buy-sell-page' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              BUY & SELL
            </NavLink>
          </li>
          <li>
            <NavLink to='/buy-sell-page/add-listing' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
              ADD LISTING
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

