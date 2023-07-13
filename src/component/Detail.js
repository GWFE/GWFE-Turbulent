import { motion } from "framer-motion";

function Detail() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="detail">


      </div>

    </motion.div>
  );
};
export default Detail;