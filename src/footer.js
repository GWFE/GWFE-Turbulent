import styles from "./css/Footer.module.css";


function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer_element}>

          <img className={styles.footer_gamelogo} src="img/Turbulent_Logo.png"/>
          <div className={styles.footer_ractangle}></div>
          <a href="https://github.com/GWFE/GWFE-Turbulent" 
            className={styles.footer_teamlogo}
            target='_blank'>
              TYPHOON
            </a>
        </div>
        <div className={styles.footer_license}>
        Copyright 2023. team TYPHOON All rights reserved.
        </div>
      </div>
    );
};export default Footer;