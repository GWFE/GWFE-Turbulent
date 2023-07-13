import { motion } from "framer-motion";

function Player() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="player">


      </div>
      
    </motion.div>
  );
};
export default Player;
