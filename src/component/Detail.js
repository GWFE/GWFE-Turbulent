import { motion } from "framer-motion";
import styles from "../css/Detail.module.css";

function Detail() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="detail">
        <div className={styles.header_padder}></div>

        


      </div>

    </motion.div>
  );
};
export default Detail;