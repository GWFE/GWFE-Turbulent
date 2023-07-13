import styles from "./css/Header.module.css";
import {Link} from "react-router-dom";


function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.header_container}>
            <Link to="/"  className={styles.header_logo}>
              <div>TYPHOON</div>
            </Link>
            <nav className={styles.header_nav}>
                <Link to="/detail" className={styles.header_nav_link}>detail</Link>
                <Link to="/player" className={styles.header_nav_link}>player</Link>
                <Link to="/weapon" className={styles.header_nav_link}>weapon</Link>
            </nav>
        </div>
      
      </div>
    );
};export default Header;