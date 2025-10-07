
import { useLocation } from "react-router-dom";
import Nav from "./components/layout/Nav.jsx";
import PagesNav from "./components/layout/pagesNav.jsx";
import Footer from "./components/layout/Footer.jsx";
import styles from "./App.module.css";
import Body from "./components/layout/Body.jsx";

export default function App() {
  const location = useLocation();

  const isBuySellPage = location.pathname.startsWith("/buy-sell-page");

  return (
    <div className={styles.pageContainer}>
      {isBuySellPage ? (
        <PagesNav className={styles.nav} />
      ) : (
        <Nav className={styles.nav} />
      )}
      <Body className={styles.body} />
    </div>
  );
}

