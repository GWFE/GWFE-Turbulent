import styles from "./css/Header.module.css";
import {Route, Routes, Link} from "react-router-dom";


function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.header_container}>
            <Link to="/">
                <div className={styles.haeder_logo}>TYPHOON</div>
            </Link>
            <nav className={styles.header_nav}>
                <Link to="/detail">detail</Link>
                <Link to="/player">player</Link>
                <Link to="/weapon">weapon</Link>


            </nav>

        </div>
      </div>
    );
  }
  
  export default Header;
  