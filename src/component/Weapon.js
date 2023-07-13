import { motion } from "framer-motion";
import styles from "../css/Weapon.module.css";

function Weapon() {
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <div className={styles.Weapon}></div>
          <div className={styles.header_padder}></div>  


      </motion.div>
    );
  }
  
  export default Weapon;