import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.pageContainer}>
      <nav>
        <img src='/logo.png' alt="logo" />
        <h1>AUCTION HAYVEN</h1>
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
          <li>LOGIN/SIGNUP</li>
        </ul>
      </nav>
    </div>
  );
}
