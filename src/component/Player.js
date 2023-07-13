import { motion } from "framer-motion";
import styles from "../css/Player.module.css";

function Player() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="player">
        <div className={styles.header_padder}></div>


      </div>
      
    </motion.div>
  );
};
export default Player;
