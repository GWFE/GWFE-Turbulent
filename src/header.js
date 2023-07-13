import styles from "./css/Header.module.css";
import {Route, Routes, Link} from "react-router-dom";


function Header() {
    return (
      <div className={styles.Header}>
        <div className={styles.Header_container}>
            <Link to="/">
                <div className={styles.Haeder_logo}>TYPHOON</div>
            </Link>
            <nav className={styles.Header_nav}>
                <Link to="/detail">detail</Link>
                <Link to="/player">player</Link>
                <Link to="/weapon">weapon</Link>


            </nav>

        </div>
      </div>
    );
  }
  
  export default Header;
  